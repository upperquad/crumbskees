import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'
import '~managers/RAFManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH } from '~constants'
import { uuid, randomInt } from '~utils/math'
import { getOffsetTop, getOffsetLeft } from '~utils/dom'

import SceneContext from './context'
import PlayerCursor from './PlayerCursor'

const Scene = props => {
  const { bkg, frontBkg, power, itemImage } = props
  const [clipPathId, setClipPathId] = useState()
  const [items, setItems] = useState([])
  const [sceneUnits, setSceneUnits] = useState()

  const sceneRef = useRef(null)

  // console.log(SceneContext)
  SceneContext.currentValue.items = items

  // updated on props change
  useEffect(() => effectItems(setItems, props), [props])

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

  console.log('update', items)

  // setTimeout(() => {
  //   this.dom.frontBkg.src = frontBkg
  // }, this.props.delayGif)

  return (
    <div ref={sceneRef} className={styles.scene}>
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
              removeItem(item, items, setItems)
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
              removeItem(item, items, setItems)
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
            {items.map(item => {
              if (!item.found) {
                return (
                  <image
                    className={styles.svgImage}
                    xlinkHref={item.image}
                    preserveAspectRatio="xMidYMid slice"
                    width={item.size}
                    height={item.size}
                    x={`${item.x * 100}%`}
                    y={`${item.y * 100}%`}
                    style={{ transform: `translate(-${item.size / 2}, -${item.size / 2})` }}
                  />
                )
              }
              return false
            })}
          </g>
        </svg>
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

function removeItem(itemToRemove, items, setItems) {
  const newItems = items
  const index = newItems.indexOf(itemToRemove)
  if (index > -1) {
    newItems.splice(index, 1)
  }

  console.log(newItems)

  setItems(newItems) // find a way to update

  // setItems(newItems)
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
    const item = createItem(props, grid, power.image, 'power')
    items.push(item)
  }

  for (let i = 0; i < numItems; i++) {
    const item = createItem(props, grid, itemImage)
    items.push(item)
  }

  setItems(items)
}

function createItem(props, grid, image, type = 'target') {
  const { gridCols, gridLines } = props
  // randomize
  const rd = randomInt(0, grid.length - 1)
  const x = grid[rd].x / gridCols + GRID_UNIT_VW / 200 // 200?
  const y = grid[rd].y / gridLines + GRID_UNIT_VH / 200
  grid.splice(rd, 1)

  // fake item for debugging
  let div
  // if (DEBUG) {
  //   div = document.createElement('div')
  //   div.classList.add('debug')
  //   if (type === 'power') div.classList.add('debug--power')
  //   div.style.left = `${x * 100}%`
  //   div.style.top = `${y * 100}%`
  //   this.props.el.appendChild(div)
  // }

  const size = GRID_UNIT

  const obj = {
    debugEl: div,
    x,
    y,
    size,
    image,
    type,
  }

  return obj
}

function effectUnits(setSceneUnits, sceneRef) {
  const offsetTop = getOffsetTop(sceneRef.current)
  const offsetLeft = getOffsetLeft(sceneRef.current)
  const width = sceneRef.current.offsetWidth
  const height = sceneRef.current.offsetHeight

  setSceneUnits({ offsetTop, offsetLeft, width, height })
}

export default Scene
