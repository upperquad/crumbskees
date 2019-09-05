import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'
import '~managers/RAFManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH, DEBUG } from '~constants'
import { uuid, randomInt } from '~utils/math'
import { getOffsetTop, getOffsetLeft } from '~utils/dom'

// import SceneContext from './context'
import PlayerCursor from './PlayerCursor'

const Scene = props => {
  const { bkg, endScene, frontBkg, gridCols, gridLines, itemImage, numItems, power } = props
  const [clipPathId, setClipPathId] = useState()
  const [items, setItems] = useState([])
  const [debugItems, setDebugItems] = useState([])
  const [sceneUnits, setSceneUnits] = useState()

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

    // events

    // Call effectUnits the first time
    effectUnits(setSceneUnits, sceneRef)
    const effectResize = () => effectUnits(setSceneUnits, sceneRef)

    window.addEventListener('resize', effectResize)

    return () => {
      window.removeEventListener('resize', effectResize)
    }
  }, [])

  // setTimeout(() => {
  //   this.dom.frontBkg.src = frontBkg
  // }, this.props.delayGif)

  return (
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
            extraClassName={styles.playerCursor1}
            items={items}
            power={power}
            itemImage={itemImage}
            removeItem={item => {
              removeItem(item, items, setItems, endScene)
            }}
          />
          <PlayerCursor
            index={1}
            sceneUnits={sceneUnits}
            extraClassName={styles.playerCursor2}
            items={items}
            power={power}
            itemImage={itemImage}
            removeItem={item => {
              removeItem(item, items, setItems, endScene)
            }}
          />
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
      <div className={styles.intros}>
        <div className={styles.intro}>
          <div className={classNames(styles.introRound, typography.text200Bold, styles.red)} />
        </div>
        <div className={styles.intro}>
          <div className={styles.introCircle} />
          <div className={classNames(styles.introItemToFind, typography.text200Bold, styles.black)}>
            <div className={classNames(styles.introItemToFindText, typography.text48old)}>
              ITEM
              <br />
              TO FIND
            </div>
          </div>
          <video width={`${VB_WIDTH}px`} height={`${VB_HEIGHT}px`} autoPlay loop muted />
        </div>
        <div className={styles.intro}>
          <div className={styles.introReadyWrapper}>
            <div className={classNames(styles.introReady, typography.text200Bold, styles.red)}>READY</div>
            <div className={classNames(styles.introSet, typography.text200Bold, styles.red)}>SET</div>
          </div>
          <div className={classNames(styles.introGo, typography.text200Bold, styles.red)}>GO</div>
        </div>
      </div>
    </div>
  )
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
    const item = createItem(props, grid, power.image, power.type)
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

function createItem(props, grid, image, type = 'target') {
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
  }

  return obj
}

function removeItem(itemsCaught, items, setItems, endScene) {
  const newItems = items.filter(item => !itemsCaught.includes(item))

  setItems(newItems)

  const targets = newItems.filter(item => item.type === 'target')

  if (targets.length === 0) {
    // if no more targets left
    endScene()
    // window.GameManager.endScene(scene.props.message)
  }
}

function effectUnits(setSceneUnits, sceneRef) {
  const offsetTop = getOffsetTop(sceneRef.current)
  const offsetLeft = getOffsetLeft(sceneRef.current)
  const width = sceneRef.current.offsetWidth
  const height = sceneRef.current.offsetHeight

  setSceneUnits({ offsetTop, offsetLeft, width, height })
}

export default Scene
