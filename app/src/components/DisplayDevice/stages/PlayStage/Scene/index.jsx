import React, { Fragment, useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import '~managers/RAFManager'
import SoundManager from '~managers/SoundManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, DEBUG } from '~constants'
import { uuid, randomInt } from '~utils/math'
import { getOffsetTop, getOffsetLeft } from '~utils/dom'

// import SceneContext from './context'
import PlayerCursor from './PlayerCursor'
import Board from './Board'

let timeInterval
const TIME = 40

const Scene = props => {
  const { bkg, endScene, frontBkg, gridCols, gridLines, itemImage, numItems, power } = props
  const [time, setTime] = useState(TIME)
  const [clipPathId, setClipPathId] = useState()
  const [items, setItems] = useState([])
  const [debugItems, setDebugItems] = useState([])
  const [sceneUnits, setSceneUnits] = useState()
  const [messages, setMessages] = useState([])

  const sceneRef = useRef(null)

  // updated on props change
  useEffect(() => effectItems(setItems, setDebugItems, { gridCols, gridLines, itemImage, numItems, power }), [
    gridCols,
    gridLines,
    itemImage,
    numItems,
    power,
  ])

  // never updated
  useEffect(() => {
    // Set clip path id
    const id = uuid()
    setClipPathId(id)

    // StartTime
    startTime(TIME, setTime, endScene)

    // Events
    // Call effectUnits the first time
    effectUnits(setSceneUnits, sceneRef)
    const effectResize = () => effectUnits(setSceneUnits, sceneRef)

    window.addEventListener('resize', effectResize)

    return () => {
      window.removeEventListener('resize', effectResize)

      clearInterval(timeInterval) // clear startTime interval
    }
  }, [endScene])

  // setTimeout(() => {
  //   this.dom.frontBkg.src = frontBkg
  // }, this.props.delayGif)

  return (
    <Fragment>
      <div ref={sceneRef} className={classNames(styles.scene, styles.started)}>
        <img className={styles.frontBkg} src={frontBkg} alt="" />
        <img className={styles.reveal} src={bkg} alt="" />
        <div className={styles.wrapper}>
          <svg className={styles.svg} viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`} stroke="black">
            <defs>
              <clipPath id={clipPathId} className={styles.svgClipPath}>
                <use xlinkHref="#player0" />
                <use xlinkHref="#player1" />
              </clipPath>
            </defs>
            <PlayerCursor
              index={0}
              sceneUnits={sceneUnits}
              items={items}
              power={power}
              itemImage={itemImage}
              onScore={(item, player) => {
                onScore(item, player, items, setItems, messages, setMessages, endScene)
              }}
            />
            <PlayerCursor index={1} sceneUnits={sceneUnits} items={items} power={power} itemImage={itemImage} />
            <g
              className={styles.svgClipPathRef}
              width={`${VB_WIDTH}px`}
              height={`${VB_HEIGHT}px`}
              clipPath={`url(#${clipPathId})`}
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
          {debugItems.map(item => (
            <div
              className={classNames(styles.debugItem, { [styles.debugItemPower]: item.power })}
              style={{ left: item.left, top: item.top }}
            />
          ))}
        </div>
        <div className={styles.messages}>
          {messages.map(message => (
            <div className={styles.message} style={{ left: message.left, top: message.top, color: message.color }}>
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles.intros}>
          <div className={styles.intro}>
            <div className={classNames(styles.introRound, styles.red)} />
          </div>
          <div className={styles.intro}>
            <div className={styles.introCircle} />
            <div className={classNames(styles.introItemToFind, styles.black)}>
              <div className={classNames(styles.introItemToFindText)}>
                ITEM
                <br />
                TO FIND
              </div>
            </div>
            <video width={`${VB_WIDTH}px`} height={`${VB_HEIGHT}px`} autoPlay loop muted />
          </div>
          <div className={styles.intro}>
            <div className={styles.introReadyWrapper}>
              <div className={classNames(styles.introReady, styles.red)}>READY</div>
              <div className={classNames(styles.introSet, styles.red)}>SET</div>
            </div>
            <div className={classNames(styles.introGo, styles.red)}>GO</div>
          </div>
        </div>
      </div>
      <Board time={time} itemImage={itemImage} />
    </Fragment>
  )
}

function onScore(itemsCaught, player, items, setItems, messages, setMessages, endScene) {
  // Update items in the scene (remove what is caught)
  const newItems = items.filter(item => !itemsCaught.includes(item))
  setItems(newItems)

  const targetsCaught = itemsCaught.filter(item => item.type === 'target')
  const targets = newItems.filter(item => item.type === 'target')

  // Pop up message
  itemsCaught.forEach(item => {
    const message = {
      left: `${(player.targetX / VB_WIDTH + 0.5) * 100}%`,
      top: `${(player.targetY / VB_HEIGHT + 0.5) * 100}%`,
      text: item.type === 'target' ? `+${targetsCaught.length}` : item.type,
      color: item.type === 'target' ? player.color : item.color,
    }

    messages.push(message)
  })

  setMessages([...messages])

  // If no more targets left, end scene
  if (targets.length === 0) {
    endScene()
  }
}

function effectItems(setItems, setDebugItems, props) {
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
  const debugItems = []

  if (power) {
    const item = createItem(props, grid, power.image, power.type, power.color)
    items.push(item)

    if (DEBUG) {
      // fake item for debugging
      const debugItem = { left: `${item.x * 100}%`, top: `${item.y * 100}%`, power: true }
      debugItems.push(debugItem)
    }
  }

  for (let i = 0; i < numItems; i++) {
    const item = createItem(props, grid, itemImage)
    items.push(item)

    if (DEBUG) {
      const debugItem = { left: `${item.x * 100}%`, top: `${item.y * 100}%` }
      debugItems.push(debugItem)
    }
  }

  setItems(items)

  if (DEBUG) {
    setDebugItems(debugItems)
  }
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

function startTime(time, setTime, endScene) {
  setTime(time)

  timeInterval = setInterval(() => {
    time -= 1
    setTime(time)

    // if time is 0
    if (time === 0) {
      endScene()
      // this.endScene('TIME\'S UP!')
    } else if (time === 10) {
      // play sound countdown
      SoundManager.countdown.play()
    }
  }, 1000)
}

function effectUnits(setSceneUnits, sceneRef) {
  const offsetTop = getOffsetTop(sceneRef.current)
  const offsetLeft = getOffsetLeft(sceneRef.current)
  const width = sceneRef.current.offsetWidth
  const height = sceneRef.current.offsetHeight

  setSceneUnits({ offsetTop, offsetLeft, width, height })
}

export default Scene
