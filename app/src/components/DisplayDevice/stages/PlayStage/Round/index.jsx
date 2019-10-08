import React, { Fragment, useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import WebSocketManager from '~managers/WebSocketManager'
import { DEBUG, GAME_ROUNDS, VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, COLORS } from '~constants'
import { clamp, randomInt } from '~utils/math'

// import SceneContext from './context'
import PlayerCursor from './PlayerCursor'
import PlayerMessage from './PlayerMessage'
import PopupMessage from './PopupMessage'
import PlayersManager from '~managers/PlayersManager'
import Board from './Board'
import Intro from './Intro'

const TIME = 40

const Round = props => {
  const { onRoundEnd, roundIndex } = props
  const { bkg, frontBkg, itemImage } = GAME_ROUNDS[roundIndex]
  const [time, setTime] = useState(TIME)
  const [items, setItems] = useState([])
  const [message, setMessage] = useState({ messageCount: 0 })
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [positionArray, setPositionArray] = useState(() => PlayersManager.players.map(() => ({ x: 0, y: 0 })))
  const [tapInstructionArray, setTapInstructionArray] = useState(() => PlayersManager.players.map(() => false))

  const addMessage = messageObj => {
    setMessage(prevMessage => (
      {
        ...messageObj,
        messageCount: prevMessage.messageCount + 1,
      }
    ))
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
            persistent: true,
            onEnd: onRoundEnd,
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
          return prevArray
        })
      }

      if (freezeFound) {
        SoundManager.freeze.play()
        setPowerArray(prevArray => {
          prevArray[1 - playerIndex] = 'freeze'
          return prevArray
        })
      }

      if (targetCount > 0) {
        addScore(targetCount, playerIndex)
      }

      if (itemsCaught.length > 0) {
        removeItems(itemsCaught)
      }
    }

    const messageHandler = detail => {
      const { data, type } = detail

      switch (type) {
        case 'cursor_move': {
          const { id, x, y } = data
          const playerIndex = PlayersManager.playerIndex(id)
          if (playerIndex !== -1) {
            setPositionArray(prevPositionArray => {
              prevPositionArray[playerIndex].x += parseFloat(x, 10)
              prevPositionArray[playerIndex].y += parseFloat(y, 10)
              return prevPositionArray
            })
          }
          break
        }
        case 'click': {
          const { id } = data
          const playerIndex = PlayersManager.playerIndex(id)
          if (playerIndex !== -1) {
            handleClick(playerIndex)
          }
          break
        }
        default:
          break
      }
    }
    WebSocketManager.addSubscriber('MESSAGE', messageHandler)

    return () => {
      WebSocketManager.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [items, onRoundEnd])

  // Grid setup
  useEffect(() => (
    setupGrid(setItems, roundIndex)
  ), [roundIndex])

  // Timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime - 1

        if (newTime === 0) {
          addMessage({
            text: 'Time\'s up!',
            color: COLORS.red,
            persistent: true,
            onEnd: onRoundEnd,
          })
        } else if (newTime === 10) {
          SoundManager.countdown.play()
        }

        return newTime >= 0 ? newTime : 0
      })
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  }, [onRoundEnd])

  // tap instruction
  const zeroScorePlayers = PlayersManager.players.filter(player => player.score() === 0)
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
  // eslint-disable-next-line
  }, [items, zeroScorePlayers.length])

  function addScore(score, index) {
    setRoundScoreArray(prevScoreArray => {
      prevScoreArray[index] += score
      return prevScoreArray
    })

    PlayersManager.addScore(score, PlayersManager.players[index].id)
    SoundManager.score.play()
  }

  return (
    <Fragment>
      <div className={classNames(styles.round, styles.started)}>
        <img className={styles.frontBkg} src={frontBkg} alt="" />
        <img className={styles.reveal} src={bkg} alt="" />
        <div className={styles.wrapper}>
          <svg className={styles.svg} viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`} stroke="black">
            <defs>
              <clipPath id="game-round-clippath" className={styles.svgClipPath}>
                {PlayersManager.players.map((player, index) => <use xlinkHref={`#player${index}`} />)}
              </clipPath>
            </defs>
            {PlayersManager.players.map((player, index) => (
              <PlayerCursor
                index={index}
                power={powerArray[index]}
                position={positionArray[index]}
                color={player.color}
                roundScore={roundScoreArray[index]}
                cancelPower={() => {
                  setPowerArray(prevArray => {
                    prevArray[index] = null
                    return prevArray
                  })
                }}
              />
            ))}
            {DEBUG && (
              <g
                width={`${VB_WIDTH}px`}
                height={`${VB_HEIGHT}px`}
                className={styles.debugItems}
              >
                {items.map(item => (
                  <image
                    xlinkHref={item.image}
                    preserveAspectRatio="xMidYMid slice"
                    width={item.size}
                    height={item.size}
                    x={`${item.x * 100}%`}
                    y={`${item.y * 100}%`}
                    style={{ transform: `translate(-${item.size / 2}px, -${item.size / 2}px)` }}
                  />
                ))}
              </g>
            )}
            <g
              width={`${VB_WIDTH}px`}
              height={`${VB_HEIGHT}px`}
              clipPath="url(#game-round-clippath)"
            >
              <image
                xlinkHref={bkg}
                preserveAspectRatio="xMidYMid slice"
                width={`${VB_WIDTH}px`}
                height={`${VB_HEIGHT}px`}
              />
              {items.map(item => (
                <image
                  xlinkHref={item.image}
                  preserveAspectRatio="xMidYMid slice"
                  width={item.size}
                  height={item.size}
                  x={`${item.x * 100}%`}
                  y={`${item.y * 100}%`}
                  style={{ transform: `translate(-${item.size / 2}px, -${item.size / 2}px)` }}
                />
              ))}
            </g>
          </svg>
        </div>
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
          persitent={message.persitent}
          text={message.text}
          messageCount={message.messageCount}
          onEnd={message.onEnd}
        />
      </div>
      <Board time={time} itemImage={itemImage} scores={roundScoreArray} />
      <Intro />
    </Fragment>
  )
}

function setupGrid(setItems, roundIndex) {
  // REVIEW: this is really inefficient
  const grid = []
  const { gridCols, gridLines, itemImage, numItems, power } = GAME_ROUNDS[roundIndex]
  for (let i = 0; i < gridCols; i++) {
    for (let j = 0; j < gridLines; j++) {
      const obj = { x: i, y: j }
      grid.push(obj)
    }
  }

  const items = []

  if (power) {
    const item = createItem(roundIndex, grid, power)
    items.push(item)
  }

  for (let i = 0; i < numItems; i++) {
    const item = createItem(roundIndex, grid, { image: itemImage })
    items.push(item)
  }

  setItems(items)
}

function createItem(roundIndex, grid, powerItem) {
  const { gridCols, gridLines } = GAME_ROUNDS[roundIndex]
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
  const xPx = clamp(position.x, -0.5, 0.5) + 0.5
  const yPx = clamp(position.y, -0.5, 0.5) + 0.5

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

export default Round
