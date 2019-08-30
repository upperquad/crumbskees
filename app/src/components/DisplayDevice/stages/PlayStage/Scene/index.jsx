import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'
import '~managers/RAFManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH } from '~constants'
import { uuid, randomInt } from '~utils/math'

const Scene = props => {
  console.log(props)
  const { bkg, frontBkg } = props
  const [clipPathId, setClipPathId] = useState()
  const [items, setItems] = useState([])

  const svgRef = useRef(null)

  useEffect(() => {
    const id = uuid()
    setClipPathId(id)
  }, [])

  useEffect(() => effectItems(setItems, props), [props])

  useEffect(() => {
    // events
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('RAF', handleRAF)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('RAF', handleRAF)
    }
  }, [])

  // setTimeout(() => {
  //   this.dom.frontBkg.src = frontBkg
  // }, this.props.delayGif)

  return (
    <div className={styles.scene}>
      <img className={styles.frontBkg} src={frontBkg} alt="" />
      <img className={styles.reveal} src={bkg} alt="" />
      <div className={styles.wrapper}>
        <svg ref={svgRef} className={styles.svg} viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`} stroke="black">
          <defs>
            <clipPath id={`#${clipPathId}`} className={styles.svgClipPath}>
              <use xlinkHref="#player1" />
              <use xlinkHref="#player2" />
            </clipPath>
          </defs>
          <path id="player1" className={styles.cursor} strokeWidth="6" />
          <path id="player2" className={styles.cursor} strokeWidth="6" />
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
                style={{ transform: `translate(-${item.size / 2}, -${item.size / 2})` }}
              />
            ))}
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
  const x = (grid[rd].x) / gridCols + GRID_UNIT_VW / 200 // 200?
  const y = (grid[rd].y) / gridLines + GRID_UNIT_VH / 200
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

  // if (type === 'power') {
  //   this.props.power = { ...this.props.power, ...obj }
  // }

  return obj
}

function handleMouseMove() {
  // console.log('hello')
}

function handleRAF() {
  // console.log('raf')
}

export default Scene
