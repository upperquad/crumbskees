import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import PlayersManager from '~managers/PlayersManager'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import {
  VB_WIDTH,
  VB_HEIGHT,
  GRID_COLS,
  GRID_LINES,
  GRID_UNIT,
  GRID_UNIT_VW,
  GRID_UNIT_VH,
  COLORS,
  GOOD_SNACKS,
  BAD_SNACKS,
} from '~constants'
import { clamp, randomInt } from '~utils/math'

import PixiScene from './PixiScene'
import PlayerMessage from './PlayerMessage'
import PopupMessage from './PopupMessage'

import growItem from '~assets/images/powers/grow.svg'
import freezeItem from '~assets/images/powers/frozen.svg'

const GameZone = props => {
  const {
    addItemsLevel,
    addMessage,
    gameState,
    message,
    onUpdate,
    round,
    setGameState,
    setParentPowerArray,
    setTime,
    type,
  } = props
  const { videoBack, videoFront } = round
  const [items, setItems] = useState([])
  // TODO: power should be in player? Maybe not though
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [positionArray, setPositionArray] = useState(() => PlayersManager.players.map(() => ({ x: 0, y: 0 })))
  const [tapInstructionArray, setTapInstructionArray] = useState(() => PlayersManager.players.map(() => false))
  const sceneInit = useRef(false)

  // Players input
  useEffect(() => {
    const removeItems = itemsCaught => {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => !itemsCaught.includes(item))

        return newItems
      })
    }

    const addScore = (targetsCaught, index) => {
      addItemsLevel(targetsCaught, index)

      if (type === 'game') {
        PlayersManager.addScore(targetsCaught.length, PlayersManager.players[index].id)
      }
    }

    const removeScore = (badItemsCaught, index) => {
      addItemsLevel(badItemsCaught, index)

      if (type === 'game') {
        PlayersManager.removeScore(badItemsCaught.length, PlayersManager.players[index].id)
      }
    }

    const handleClick = playerIndex => {
      const itemsCaught = getItemsInCursor(
        items,
        positionArray[playerIndex],
        powerArray[playerIndex] && powerArray[playerIndex].type === 'grow',
      )

      const targetsCaught = []
      const badItemsCaught = []

      itemsCaught.forEach(item => {
        switch (item.type) {
          case 'grow':
            SoundManager.playSound('powerGrow')
            setPowerArray(prevArray => {
              item.text = 'GROW'
              prevArray[playerIndex] = item
              return [...prevArray]
            })
            break
          case 'freeze':
            SoundManager.playSound('powerFreeze')
            setPowerArray(prevArray => {
              item.text = 'FREEZE'
              prevArray[1 - playerIndex] = item
              return [...prevArray]
            })
            break
          case 'time':
            SoundManager.playSound('powerGrow')
            setPowerArray(prevArray => {
              item.text = 'ADD TIME'
              prevArray[playerIndex] = item
              return [...prevArray]
            })
            break
          case 'target':
            targetsCaught.push(item.image)
            break
          case 'bad':
            badItemsCaught.push(item.image)
            break
          default:
            break
        }
      })

      PlayersManager.players[playerIndex].closeMouth = true
      PlayersManager.players[playerIndex].mouthSequence = 0

      if (targetsCaught.length > 0) {
        addScore(targetsCaught, playerIndex)
      }

      if (badItemsCaught.length > 0) {
        removeScore(badItemsCaught, playerIndex)
      }

      if (itemsCaught.length > 0) {
        removeItems(itemsCaught)
      }

      if (badItemsCaught.length > 0) {
        SoundManager.playSound('snackBad')
      } else if (itemsCaught.length > 0) {
        SoundManager.playSound('snackGood')
      } else {
        SoundManager.playSound('munch')
      }

      onUpdate()
    }

    const messageHandler = (detail, playerIndex) => {
      const { data, type: messageType } = detail

      switch (messageType) {
        case 'cursor_move': {
          const { x, y } = data
          setPositionArray(prevPositionArray => {
            const positionObj = prevPositionArray[playerIndex]

            positionObj.x = clamp(positionObj.x + parseFloat(x, 10), -0.5, 0.5)
            positionObj.y = clamp(positionObj.y + parseFloat(y, 10), -0.5, 0.5)

            return prevPositionArray
          })
          break
        }
        case 'click': {
          if (type === 'tutorial') {
            handleClick(playerIndex)
          } else if (type === 'game' && gameState !== 'after-game') {
            handleClick(playerIndex)
          }
          break
        }
        default:
          break
      }
    }

    const player1MessageHandler = detail => messageHandler(detail, 0)
    const player2MessageHandler = detail => messageHandler(detail, 1)
    PlayersManager.players[0].playerPeer.addSubscriber('MESSAGE', player1MessageHandler)
    PlayersManager.players[1].playerPeer.addSubscriber('MESSAGE', player2MessageHandler)

    // check if no item left
    const targets = items.filter(item => item.type === 'target')

    if (targets.length === 0 && sceneInit.current && gameState !== 'after-game') {
      const persistent = type === 'game'
      addMessage({
        text: getEndMessage(),
        color: COLORS.white,
        persistent,
        onEnd: () => {
          if (type === 'game') {
            setGameState('after-game')
          }
        },
      })
    }

    return () => {
      if (PlayersManager.players[0].playerPeer) {
        PlayersManager.players[0].playerPeer.removeSubscriber('MESSAGE', player1MessageHandler)
      }

      if (PlayersManager.players[1].playerPeer) {
        PlayersManager.players[1].playerPeer.removeSubscriber('MESSAGE', player2MessageHandler)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, items])

  // Grid setup
  useEffect(() => {
    const grid = []
    let gridBigItemsAvailable = []

    const createItem = item => {
      const { color = null, image, size = 1, type: itemType = 'target' } = item

      let usedGrid = grid
      if (size === 2) {
        usedGrid = gridBigItemsAvailable
      }
      // randomized
      const rd = randomInt(0, usedGrid.length - 1)
      const cellX = usedGrid[rd].x
      const cellY = usedGrid[rd].y
      const x = cellX / GRID_COLS + GRID_UNIT_VW / 200 // 200?
      const y = cellY / GRID_LINES + GRID_UNIT_VH / 200
      if (size === 1) {
        usedGrid.splice(rd, 1) // here I have to splice the correct index
      } else if (size === 2) {
        // here we remove 8 available cells around this cell
        // That way no other 2x2 will be placed in these cells
        gridBigItemsAvailable = usedGrid.filter(cell => {
          let isAvailable = true
          if (
            (cell.x === cellX && cell.y === cellY) ||
            (cell.x === cellX + 1 && cell.y === cellY) ||
            (cell.x === cellX && cell.y === cellY + 1) ||
            (cell.x === cellX + 1 && cell.y === cellY + 1) ||
            (cell.x === cellX - 1 && cell.y === cellY) ||
            (cell.x === cellX && cell.y === cellY - 1) ||
            (cell.x === cellX - 1 && cell.y === cellY - 1) ||
            (cell.x === cellX + 1 && cell.y === cellY - 1) ||
            (cell.x === cellX - 1 && cell.y === cellY + 1)
          ) {
            isAvailable = false
          }
          return isAvailable
        })
      }

      return {
        cellX,
        cellY,
        x,
        y,
        size: size * GRID_UNIT,
        image,
        type: itemType,
        color,
      }
    }

    const setupGrid = () => {
      // REVIEW: this is really inefficient
      const { numBadItems, numBigItems, numRegularItems, powers } = round
      for (let i = 0; i < GRID_COLS; i++) {
        for (let j = 0; j < GRID_LINES; j++) {
          const obj = { x: i, y: j }
          grid.push(obj)
        }
      }

      const newItems = []

      // add powers
      for (let i = 0; i < powers.length; i++) {
        const power = { type: powers[i] }
        switch (powers[i]) {
          default:
          case 'grow':
            power.image = growItem
            power.color = COLORS.orange
            break
          case 'freeze':
            power.image = freezeItem
            power.color = COLORS.blue

            if (PlayersManager.mode === 'SINGLE_PLAYER') {
              // replace freeze power with time power
              // power.image = freezeItem // need a image for time power
              power.color = COLORS.purple
              power.type = 'time'
            }
            break
          case 'time':
            // power.image = freezeItem // need a image for time power
            power.color = COLORS.purple
            break
        }
        const powerItem = createItem(power)
        newItems.push(powerItem)
      }

      // add bad items
      for (let i = 0; i < numBadItems; i++) {
        const randomImage = BAD_SNACKS[randomInt(0, BAD_SNACKS.length - 1)]
        const item = createItem({ image: randomImage, type: 'bad' })
        newItems.push(item)
      }

      // add items
      for (let i = 0; i < numRegularItems; i++) {
        const randomImage = GOOD_SNACKS[randomInt(0, GOOD_SNACKS.length - 1)]
        const item = createItem({ image: randomImage })
        newItems.push(item)
      }

      // Check what are the cells available for 2x2 items
      // Push them in an array
      for (let i = 0; i < GRID_COLS - 1; i++) {
        for (let j = 0; j < GRID_LINES - 1; j++) {
          let isAvailable = true
          newItems.forEach(item => {
            if (
              (item.cellX === i && item.cellY === j) ||
              (item.cellX - 1 === i && item.cellY === j) ||
              (item.cellX === i && item.cellY - 1 === j) ||
              (item.cellX - 1 === i && item.cellY - 1 === j)
            ) {
              isAvailable = false
              // This cell can't be used by a 2x2 item because a 1x1 item is blocking
            }
          })

          if (isAvailable) {
            const obj = { x: i, y: j }
            gridBigItemsAvailable.push(obj)
          }
        }
      }

      // add big items
      for (let i = 0; i < numBigItems; i++) {
        const randomImage = GOOD_SNACKS[randomInt(0, GOOD_SNACKS.length - 1)]
        const item = createItem({ image: randomImage, size: 2 })
        newItems.push(item)
      }

      setItems(newItems)

      sceneInit.current = true
    }

    setupGrid()
  }, [round])

  // tap instruction
  const zeroScorePlayers = PlayersManager.players.filter(player => player.score && player.score() === 0)
  useEffect(() => {
    if (zeroScorePlayers.length) {
      const tapInstructionInterval = setInterval(() => {
        const newTapInstructionArray = []
        PlayersManager.players.forEach((player, index) => {
          if (player.score && player.score() === 0) {
            const itemsInCursor = getItemsInCursor(
              items,
              positionArray[index],
              powerArray[index] && powerArray[index].type === 'grow',
            )
            const targetsInCursor = itemsInCursor.filter(item => item.type === 'target')
            newTapInstructionArray.push(targetsInCursor.length > 0)
          } else {
            newTapInstructionArray.push(false)
          }
        })
        setTapInstructionArray(newTapInstructionArray)
      }, 400)

      return () => {
        setTapInstructionArray(prevArray => prevArray.map(() => false))
        clearInterval(tapInstructionInterval)
      }
    }

    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, zeroScorePlayers.length])

  useEffect(() => {
    setParentPowerArray(powerArray)
  }, [powerArray, setParentPowerArray])

  function cancelPower(index) {
    setPowerArray(prevArray => {
      prevArray[index] = null
      return [...prevArray]
    })
  }

  return (
    <div
      className={classNames(styles.gameZone, {
        [styles.gameZoneTutorial]: type === 'tutorial',
      })}
    >
      <PixiScene
        cancelPower={cancelPower}
        gameState={gameState}
        items={items}
        targetPositions={positionArray}
        powers={powerArray}
        setTime={setTime}
        type={type}
        videoBack={videoBack}
        videoFront={videoFront}
      />
      {PlayersManager.players.map((player, index) => {
        if (player.initialized) {
          return (
            <PlayerMessage
              key={player.name}
              player={player}
              power={powerArray[index]}
              position={positionArray[index]}
              color={type === 'tutorial' ? 'white' : player.color}
              roundScore={player.score()}
              tapInstruction={tapInstructionArray[index]}
            />
          )
        }
        return null
      })}
      <PopupMessage
        color={message.color}
        x={message.x}
        y={message.y}
        persistent={message.persistent}
        text={message.text}
        messageCount={message.messageCount}
        onEnd={message.onEnd}
      />
    </div>
  )
}

function getItemsInCursor(items, position, isGrown) {
  const cursorX = position.x + 0.5
  const cursorY = position.y + 0.5

  return items.filter(item => {
    let itemX = item.x
    let itemY = item.y
    let minDistanceSquare = isGrown ? 215 ** 2 : 95 ** 2

    if (item.size === GRID_UNIT * 2) {
      // offset catch area for big item
      // Also increase the radius of the catch area
      itemX += GRID_UNIT_VW / 200
      itemY += GRID_UNIT_VH / 200
      minDistanceSquare += 70 ** 2
    }
    const distanceSquare = ((cursorX - itemX) * VB_WIDTH) ** 2 + ((cursorY - itemY) * VB_HEIGHT) ** 2

    return distanceSquare <= minDistanceSquare
  })
}

function getEndMessage() {
  // TODO: we need a larger pool of messages, this is top priority
  const phrases = ['Dope.', 'Good job!', 'Awesome!']
  return phrases[Math.floor(Math.random() * phrases.length)]
}

export default GameZone
