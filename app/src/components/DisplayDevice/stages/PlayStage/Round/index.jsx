import React, { Fragment, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, COLORS } from '~constants'
import { randomInt } from '~utils/math'
import { hexToRgb } from '~utils/colors'

// import SceneContext from './context'
import PlayerCursor from './PlayerCursor'
import PlayersManager from '~managers/PlayersManager'
import Board from './Board'
import Intro from './Intro'

const TIME = 40

const Round = props => {
  // REVIEW: some of these props need more self-explanatory names
  const { bkg, endMessage, frontBkg, gridCols, gridLines, itemImage, numItems, onRoundEnd, power } = props
  const [time, setTime] = useState(TIME)
  const [items, setItems] = useState([])
  // REVIEW: makes more sense to break this into a manager so both round and cursor can use it
  const [messages, setMessages] = useState([])
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [positionArray, setPositionArray] = useState(() => PlayersManager.players.map(() => ({ x: 0, y: 0 })))

  // Players input
  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event
      switch (type) {
        case 'cursor_move': {
          const { id, x, y } = data
          const playerIndex = PlayersManager.playerIndex(id)
          if (playerIndex !== -1) {
            setPositionArray(prevPositionArray => {
              prevPositionArray[playerIndex].x += parseFloat(x, 10) * VB_WIDTH
              prevPositionArray[playerIndex].y += parseFloat(y, 10) * VB_HEIGHT
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
  }, [])

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
          // emmit message
          // setMessages([
          //   {
          //     left: '50%',
          //     top: '50%',
          //     text: "TIME'S UP!",
          //     color: COLORS.red,
          //     end: true,
          //   },
          // ])

          onRoundEnd()
        } else if (newTime === 10) {
          SoundManager.countdown.play()
        }

        return newTime
      })
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  }, [onRoundEnd])

  // tap instruction
  const zeroScorePlayers = PlayersManager.players.filter(player => player.score === 0)
  useEffect(() => {
    const zeroScorePlayersInEffect = PlayersManager.players.filter(player => player.score === 0)
    if (zeroScorePlayersInEffect.length) {
      const tapInstructionInterval = setInterval(() => {
        zeroScorePlayersInEffect.forEach(player => {
          const itemsInCursor = getItemsInCursor(items, player)
          const targetsInCursor = itemsInCursor.filter(item => item.type === 'target')
          // TODO: and not frozen
          if (targetsInCursor.length > 0) {
            // Emmit message
          }
          // function onShowTap(index, messages, setMessages) {
          //   const player = PlayersManager.players[index]

          //   const message = {
          //     left: `${(player.x / VB_WIDTH + 0.5) * 100}%`,
          //     top: `${(player.y / VB_HEIGHT + 0.5) * 100}%`,
          //     text: 'TAP',
          //     color: `rgba(${hexToRgb(player.color)}, 0.8)`,
          //   }
          //   messages.push(message)

          //   setMessages([...messages])
          // }
        })
      })

      return () => {
        clearInterval(tapInstructionInterval)
      }
    }

    return undefined
  }, [items, zeroScorePlayers.length])

  // setTimeout(() => {
  //   this.dom.frontBkg.src = frontBkg
  // }, this.props.delayGif)

  const addScore = (score, index) => {
    setRoundScoreArray(prevScoreArray => {
      // clone array so we trigger all re-render
      const newScoreArray = prevScoreArray.slice(0)
      newScoreArray[index] += score
      return newScoreArray
    })

    PlayersManager.addScore(score, PlayersManager.players[index].id)
  }

  const removeItems = itemsCaught => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => !itemsCaught.includes(item))
      const newTargets = newItems.filter(item => item.type === 'target')

      // If no more targets left, end round
      if (newTargets.length === 0) {
        // TODO: emmit message
        // const message = {
        //   left: '50%',
        //   top: '50%',
        //   text: endMessage,
        //   color: COLORS.red,
        //   end: true,
        // }

        // messages.push(message)
        onRoundEnd()
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

  // REVIEW: all alt tags
  return (
    <Fragment>
      <div ref={roundRef} className={classNames(styles.round, styles.started)}>
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
        <div className={styles.messages}>
          {messages.map(message => (
            <div
              className={classNames(styles.message, { [styles.messageEnd]: message.end })}
              style={{ left: message.left, top: message.top, color: message.color }}
            >
              {message.text}
            </div>
          ))}
        </div>
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
  const yPx = player.y + 0.5 * VB_WIDTH
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

export default Round
