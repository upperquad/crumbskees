import React, { Fragment, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, COLORS } from '~constants'
import { randomInt } from '~utils/math'

// import SceneContext from './context'
import PlayerCursor from './PlayerCursor'
import PlayerMessage from './PlayerMessage'
import PopupMessage from './PopupMessage'
import PlayersManager from '~managers/PlayersManager'
import Board from './Board'
import Intro from './Intro'

const TIME = 40

const Round = props => {
  // REVIEW: some of these props need more self-explanatory names
  const { bkg, frontBkg, gridCols, gridLines, itemImage, numItems, onRoundEnd, power } = props
  const [time, setTime] = useState(TIME)
  const [items, setItems] = useState([])
  const [message, setMessage] = useState({ messageCount: 0 })
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [positionArray, setPositionArray] = useState(() => PlayersManager.players.map(() => ({ x: 0, y: 0 })))

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

        // If no more targets left, end round
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
      const itemsCaught = getItemsInCursor(items, PlayersManager.players[playerIndex])
      const targetsCaught = itemsCaught.filter(item => item.type === 'target')

      // TODO:
      // if (triggerPower) {
      //   switch (item.type) {
      //     default:
      //       break
      //     case 'grow':
      //       player.setPower(item.type)
      //       break
      //     case 'freeze': {
      //       // affect other player
      //       const playerAffected = PlayersManager.players[1 - playerIndex]
      //       playerAffected.setPower(item.type)
      //       break
      //     }
      //   }
      // }

      if (targetsCaught.length > 0) {
        addScore(targetsCaught.length, playerIndex)
      }

      // Remove items from the round
      if (itemsCaught.length > 0) {
        removeItems(itemsCaught)
        // emmit message
        // Pop up message
        // itemsCaught.forEach(item => {
        //   const message = {
        //     left: `${(player.x / VB_WIDTH + 0.5) * 100}%`,
        //     top: `${(player.y / VB_HEIGHT + 0.5) * 100}%`,
        //     text: item.type === 'target' ? `+${targetsCaught.length}` : item.type,
        //     color: item.type === 'target' ? player.color : item.color,
        //   }

        //   messages.push(message)
        // })
      }
    }

    const messageHandler = event => {
      const { detail: { data, type } } = event
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
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [items, onRoundEnd])

  // TODO: rewrite this
  // updated on props change
  useEffect(() => effectItems(setItems, { gridCols, gridLines, itemImage, numItems, power }), [
    gridCols,
    gridLines,
    itemImage,
    numItems,
    power,
  ])

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
        zeroScorePlayers.forEach(player => {
          const itemsInCursor = getItemsInCursor(items, player)
          const targetsInCursor = itemsInCursor.filter(item => item.type === 'target')
          // TODO: and not frozen
          if (targetsInCursor.length > 0) {
            // TODO: Emmit message
          }
        })
      }, 800)

      return () => {
        clearInterval(tapInstructionInterval)
      }
    }

    return undefined
  // eslint-disable-next-line
  }, [items, zeroScorePlayers.length])

  function addScore(score, index) {
    setRoundScoreArray(prevScoreArray => {
      // clone array so we trigger all re-render
      const newScoreArray = prevScoreArray.slice(0)
      newScoreArray[index] += score
      return newScoreArray
    })

    PlayersManager.addScore(score, PlayersManager.players[index].id)
    SoundManager.score.play()
  }

  // REVIEW: all alt tags
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
                  // TODO
                }}
              />
            ))}
            <g
              className={styles.svgClipPathRef}
              width={`${VB_WIDTH}px`}
              height={`${VB_HEIGHT}px`}
              clipPath="url(#game-round-clippath)"
            >
              <image
                className={styles.svgImage}
                xlinkHref={bkg}
                preserveAspectRatio="xMidYMid slice"
                width={`${VB_WIDTH}px`}
                height={`${VB_HEIGHT}px`}
              />
              {items.map(item => (
                <image
                  className={styles.svgImage}
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

function effectItems(setItems, props) {
  // generate grid

  const grid = []
  const { gridCols, gridLines, itemImage, numItems, power } = props
  let x
  let y

  for (let i = 0; i < gridCols; i++) {
    x = i
    for (let j = 0; j < gridLines; j++) {
      y = j
      const obj = { x, y }
      grid.push(obj)
    }
  }

  const items = []

  if (power) {
    const item = createItem(props, grid, power.image, power.type, power.color)
    items.push(item)
  }

  for (let i = 0; i < numItems; i++) {
    const item = createItem(props, grid, itemImage)
    items.push(item)
  }

  setItems(items)
}

function createItem(props, grid, image, type = 'target', color = null) {
  const { gridCols, gridLines } = props
  // randomize
  const rd = randomInt(0, grid.length - 1)
  const x = grid[rd].x / gridCols + GRID_UNIT_VW / 200 // 200?
  const y = grid[rd].y / gridLines + GRID_UNIT_VH / 200
  grid.splice(rd, 1)

  const size = GRID_UNIT

  const obj = {
    x,
    y,
    size,
    image,
    type,
    color,
  }

  return obj
}

function getItemsInCursor(items, player) {
  const xPx = player.x + 0.5 * VB_WIDTH
  const yPx = player.y + 0.5 * VB_HEIGHT

  const minDistanceSquare = 95 ** 2
  // TODO
  // const minDistance = player.grown ? 185 : 95

  return items.filter(item => {
    const itemXPx = item.x * VB_WIDTH
    const itemYPx = item.y * VB_HEIGHT
    const distanceSquare = (xPx - itemXPx) ** 2 + (yPx - itemYPx) ** 2

    return distanceSquare <= minDistanceSquare
  })
}

function getEndMessage() {
  // TODO: we need a larger pool of messages, this is top priority
  const phrases = ['Dope.', 'Good job!', 'Awesome!']
  return phrases[Math.floor(Math.random() * phrases.length)]
}

export default Round
