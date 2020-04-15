import React, { useState, useEffect, useRef } from 'react'
import PlayersManager from '~managers/PlayersManager'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import Player1Peer from '~managers/PeerManager/Player1Peer'
import Player2Peer from '~managers/PeerManager/Player2Peer'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, COLORS } from '~constants'
import { clamp, randomInt } from '~utils/math'

import PixiScene from '../stages/PlayStage/Round/PixiScene'
import PlayerMessage from '../stages/PlayStage/Round/PlayerMessage'
import PopupMessage from '../stages/PlayStage/Round/PopupMessage'

const GameZone = props => {
  const {
    addMessage,
    addRoundScoreArray,
    gameState,
    message,
    onFinish,
    onUpdate,
    round,
    roundScoreArray,
    setGameState,
    type,
  } = props
  const { videoBack, videoFront } = round
  const [items, setItems] = useState([])
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

    const handleClick = playerIndex => {
      const itemsCaught = getItemsInCursor(items, positionArray[playerIndex], powerArray[playerIndex] === 'grow')

      let targetCount = 0
      let growFound
      let freezeFound
      itemsCaught.forEach(item => {
        switch (item.type) {
          case 'grow':
            growFound = true
            break
          case 'freeze':
            freezeFound = true
            break
          default:
          case 'target':
            targetCount += 1
            break
        }
      })

      if (growFound) {
        SoundManager.grow.play()
        setPowerArray(prevArray => {
          prevArray[playerIndex] = 'grow'
          return [...prevArray]
        })
      }

      if (freezeFound) {
        SoundManager.freeze.play()
        setPowerArray(prevArray => {
          prevArray[1 - playerIndex] = 'freeze'
          return [...prevArray]
        })
      }

      if (targetCount > 0) {
        addScore(targetCount, playerIndex)
      }

      if (itemsCaught.length > 0) {
        removeItems(itemsCaught)
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
        case 'player_ready': {
          if (type === 'tutorial') {
            PlayersManager.players[playerIndex].setReady(true)
            const arePlayersReady = PlayersManager.bothReady()
            onUpdate()

            if (arePlayersReady) {
              setTimeout(() => {
                onFinish()
              }, 1000)
            }
          }
          break
        }
        default:
          break
      }
    }

    const player1MessageHandler = detail => messageHandler(detail, 0)
    const player2MessageHandler = detail => messageHandler(detail, 1)
    Player1Peer.addSubscriber('MESSAGE', player1MessageHandler)
    Player2Peer.addSubscriber('MESSAGE', player2MessageHandler)

    // check if no item left
    const targets = items.filter(item => item.type === 'target')

    if (targets.length === 0 && sceneInit.current && gameState !== 'after-game') {
      const persistent = type === 'game'
      addMessage({
        text: getEndMessage(),
        color: COLORS.red,
        persistent,
        onEnd: () => {
          if (type === 'game') {
            setGameState('after-game')
          }
        },
      })
    }

    return () => {
      Player1Peer.removeSubscriber('MESSAGE', player1MessageHandler)
      Player2Peer.removeSubscriber('MESSAGE', player2MessageHandler)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, items])

  // Grid setup
  useEffect(() => setupGrid(), [])

  // tap instruction
  const zeroScorePlayers = PlayersManager.players.filter(player => player.score && player.score() === 0)
  useEffect(() => {
    if (zeroScorePlayers.length) {
      const tapInstructionInterval = setInterval(() => {
        const newTapInstructionArray = []
        PlayersManager.players.forEach((player, index) => {
          if (player.score() === 0) {
            const itemsInCursor = getItemsInCursor(items, positionArray[index], powerArray[index] === 'grow')
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

  function setupGrid() {
    // REVIEW: this is really inefficient
    const grid = []
    const { gridCols, gridLines, itemImage, numItems, power } = round
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridLines; j++) {
        const obj = { x: i, y: j }
        grid.push(obj)
      }
    }

    const newItems = []

    if (power) {
      const item = createItem(grid, power)
      newItems.push(item)
    }

    for (let i = 0; i < numItems; i++) {
      const item = createItem(grid, { image: itemImage })
      newItems.push(item)
    }

    setItems(newItems)

    sceneInit.current = true
  }

  function createItem(grid, item) {
    const { gridCols, gridLines } = round
    // randomize
    const rd = randomInt(0, grid.length - 1)
    const x = grid[rd].x / gridCols + GRID_UNIT_VW / 200 // 200?
    const y = grid[rd].y / gridLines + GRID_UNIT_VH / 200
    grid.splice(rd, 1)

    const size = GRID_UNIT

    const { color = null, image, type: itemType = 'target' } = item

    return {
      x,
      y,
      size,
      image,
      type: itemType,
      color,
    }
  }

  function addScore(score, index) {
    addRoundScoreArray(score, index)

    if (type === 'game') {
      PlayersManager.addScore(score, PlayersManager.players[index].id)
    }

    SoundManager.score.play()
  }

  function cancelPower(index) {
    setPowerArray(prevArray => {
      prevArray[index] = null
      return [...prevArray]
    })
  }

  return (
    <div className={styles.gameZone}>
      <PixiScene
        videoFront={videoFront}
        videoBack={videoBack}
        positions={positionArray}
        powers={powerArray}
        cancelPower={cancelPower}
        gameState={gameState}
        items={items}
        type={type}
      />
      {PlayersManager.players.map((player, index) => (
        <PlayerMessage
          power={powerArray[index]}
          position={positionArray[index]}
          color={player.color}
          roundScore={roundScoreArray[index]}
          tapInstruction={tapInstructionArray[index]}
        />
      ))}
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
  const xPx = position.x + 0.5
  const yPx = position.y + 0.5

  const minDistanceSquare = isGrown ? 205 ** 2 : 95 ** 2

  return items.filter(item => {
    const itemXPx = item.x
    const itemYPx = item.y
    const distanceSquare = ((xPx - itemXPx) * VB_WIDTH) ** 2 + ((yPx - itemYPx) * VB_HEIGHT) ** 2

    return distanceSquare <= minDistanceSquare
  })
}

function getEndMessage() {
  // TODO: we need a larger pool of messages, this is top priority
  const phrases = ['Dope.', 'Good job!', 'Awesome!']
  return phrases[Math.floor(Math.random() * phrases.length)]
}

export default GameZone
