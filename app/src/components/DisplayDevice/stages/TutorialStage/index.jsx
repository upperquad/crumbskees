import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import PlayersManager from '~managers/PlayersManager'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import Player1Peer from '~managers/PeerManager/Player1Peer'
import Player2Peer from '~managers/PeerManager/Player2Peer'
import { TUTORIAL_ROUND, VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, COLORS } from '~constants'
import { clamp, randomInt } from '~utils/math'

import PixiSceneTutorial from '../PlayStage/Round/PixiSceneTutorial'
import PlayerMessage from '../PlayStage/Round/PlayerMessage'
import PopupMessage from '../PlayStage/Round/PopupMessage'


const TutorialStage = props => {
  const { extraClassName, onFinish } = props
  const { videoBack, videoFront } = TUTORIAL_ROUND
  const [items, setItems] = useState([])
  const [gameState, setGameState] = useState('before-game')
  const [message, setMessage] = useState({ messageCount: 0 })
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [positionArray, setPositionArray] = useState(() => PlayersManager.players.map(() => ({ x: 0, y: 0 })))
  const [tapInstructionArray, setTapInstructionArray] = useState(() => PlayersManager.players.map(() => false))

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  // Players input
  useEffect(() => {
    const removeItems = itemsCaught => {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => !itemsCaught.includes(item))
        const newTargets = newItems.filter(item => item.type === 'target')

        if (newTargets.length === 0) {
          addMessage({
            text: getEndMessage(),
            color: COLORS.red,
            persistent: false,
            // onEnd: () => setGameState('after-game'),
          })
        }

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
        setRoundScoreArray(prevScoreArray => {
          prevScoreArray[playerIndex] += targetCount
          return prevScoreArray
        })
        SoundManager.score.play()
      }

      if (itemsCaught.length > 0) {
        removeItems(itemsCaught)
      }
    }

    const messageHandler = (detail, playerIndex) => {
      const { data, type } = detail

      switch (type) {
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
          // prevent clicks after game ends
          if (gameState !== 'after-game') {
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
    Player1Peer.addSubscriber('MESSAGE', player1MessageHandler)
    Player2Peer.addSubscriber('MESSAGE', player2MessageHandler)

    return () => {
      Player1Peer.removeSubscriber('MESSAGE', player1MessageHandler)
      Player2Peer.removeSubscriber('MESSAGE', player2MessageHandler)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, items])

  // Grid setup
  useEffect(() => setupGrid(setItems), [])

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

  function cancelPower(index) {
    setPowerArray(prevArray => {
      prevArray[index] = null
      return [...prevArray]
    })
  }

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <div className={styles.tutorialCard}>
        <div className={styles.tutorialHeader}>Warm up</div>
      </div>
      <div className={styles.gameZone}>
        <PixiSceneTutorial
          videoFront={videoFront}
          videoBack={videoBack}
          positions={positionArray}
          powers={powerArray}
          cancelPower={cancelPower}
          items={items}
          gameState={gameState}
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
    </div>
  )
}

function setupGrid(setItems) {
  // REVIEW: this is really inefficient
  const grid = []
  const { gridCols, gridLines, itemImage, numItems, power } = TUTORIAL_ROUND
  for (let i = 0; i < gridCols; i++) {
    for (let j = 0; j < gridLines; j++) {
      const obj = { x: i, y: j }
      grid.push(obj)
    }
  }

  const items = []

  if (power) {
    const item = createItem(grid, power)
    items.push(item)
  }

  for (let i = 0; i < numItems; i++) {
    const item = createItem(grid, { image: itemImage })
    items.push(item)
  }

  setItems(items)
}

function createItem(grid, powerItem) {
  const { gridCols, gridLines } = TUTORIAL_ROUND
  // randomize
  const rd = randomInt(0, grid.length - 1)
  const x = grid[rd].x / gridCols + GRID_UNIT_VW / 200 // 200?
  const y = grid[rd].y / gridLines + GRID_UNIT_VH / 200
  grid.splice(rd, 1)

  const size = GRID_UNIT

  const { color = null, image, type = 'target' } = powerItem

  return {
    x,
    y,
    size,
    image,
    type,
    color,
  }
}

function getItemsInCursor(items, position, isGrown) {
  const xPx = position.x + 0.5
  const yPx = position.y + 0.5

  const minDistanceSquare = isGrown ? 185 ** 2 : 95 ** 2

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

export default TutorialStage
