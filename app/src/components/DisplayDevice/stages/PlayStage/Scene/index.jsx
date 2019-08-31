import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'
import '~managers/RAFManager'
import PlayersManager from '~managers/PlayersManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT, GRID_UNIT_VW, GRID_UNIT_VH } from '~constants'
import { uuid, clamp, randomInt } from '~utils/math'
import { getNow } from '~utils/time'
import { inOutSine } from '~utils/ease'
import { getOffsetTop, getOffsetLeft } from '~utils/dom'

const Scene = props => {
  const { bkg, frontBkg } = props
  const [clipPathId, setClipPathId] = useState()
  const [items, setItems] = useState([])

  const playersRef = [useRef(null), useRef(null)]
  const sceneRef = useRef(null)

  useEffect(() => {
    const id = uuid()
    setClipPathId(id)
  }, [])

  useEffect(() => effectItems(setItems, props), [props])

  useEffect(() => {
    const offsetTop = getOffsetTop(sceneRef.current)
    const offsetLeft = getOffsetLeft(sceneRef.current)
    const sceneWidth = sceneRef.current.offsetWidth
    const sceneHeight = sceneRef.current.offsetHeight
    console.log('call')

    const effectRAF = e => handleRAF(e, playersRef)
    const effectMouseMove = e => handleMouseMove(e, offsetTop, offsetLeft, sceneWidth, sceneHeight)
    // events
    window.addEventListener('mousemove', effectMouseMove)
    window.addEventListener('RAF', effectRAF)

    return () => {
      window.removeEventListener('mousemove', effectMouseMove)
      window.removeEventListener('RAF', effectRAF)
    }
  }, [playersRef])

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
              <use xlinkHref="#player1" />
              <use xlinkHref="#player2" />
            </clipPath>
          </defs>
          <path
            ref={playersRef[0]}
            id="player1"
            className={classNames(styles.cursor, styles.cursor1)}
            strokeWidth="6"
            fill="#FFFFFF"
          />
          <path
            ref={playersRef[1]}
            id="player2"
            className={classNames(styles.cursor, styles.cursor2)}
            strokeWidth="6"
            fill="#FFFFFF"
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

function handleMouseMove(e, offsetTop, offsetLeft, width, height) {
  // console.log('hello')
  // if (window.GameManager.players[window.GameManager.playerIds[0]].frozen) return
  const scrollY = window.scrollY || document.documentElement.scrollTop
  const player = PlayersManager.players[0]

  player.eventX = e.touches ? e.touches[0].clientX : e.clientX
  player.eventX -= offsetLeft
  player.eventY = e.touches ? e.touches[0].clientY : e.clientY
  player.eventY += scrollY

  player.targetX = (player.eventX / width) * VB_WIDTH // because we're using viewbox units here
  player.targetX -= VB_WIDTH / 2 // because starting point is player.centerX
  player.targetY = (player.eventY / height) * VB_HEIGHT - offsetTop
  player.targetY -= VB_HEIGHT / 2
}

function handleRAF(e, playersRef) {
  // console.log('raf')
  const { now } = e.detail
  // console.log(playersRef)
  // this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

  // For each cursor...
  for (let y = 0; y < PlayersManager.players.length; y++) {
    const player = PlayersManager.players[y]

    if (!player.frozen) {
      // if player not frozen
      // clamp player position to limit of the scene
      player.targetX = clamp(player.targetX, -VB_WIDTH / 2, VB_WIDTH / 2)
      player.targetY = clamp(player.targetY, -VB_HEIGHT / 2, VB_HEIGHT / 2)

      player.x += (player.targetX - player.x) * 0.1
      player.y += (player.targetY - player.y) * 0.1

      // For each points of the player (organic shape)
      // Create organic shape / Tween all points
      for (let i = 0; i < player.points.length; i++) {
        const point = player.points[i]

        // From scratch tween:
        // percent is going from 0 to 1 in X seconds where X is the "duration variable".
        // Each points starting value is going to his destination value in X seconds
        // then I use easing functions to modify the value curve through time.
        const percent = (now - point.startAnim) / point.duration
        // const percent = ((now - point.startAnim) / point.duration) * this.acceleration

        point.x = point.startX + (point.destX - point.startX) * inOutSine(percent)
        point.y = point.startY + (point.destY - point.startY) * inOutSine(percent)

        if (percent >= 1) {
          // end of animation,
          // restart animation by going back
          if (point.reverseAnim) {
            point.startX = point.x
            point.startY = point.y
            point.destX = point.targetMaxX
            point.destY = point.targetMaxY
            point.reverseAnim = false
            point.startAnim = getNow()
          } else {
            point.startX = point.x
            point.startY = point.y
            point.destX = point.targetMinX
            point.destY = point.targetMinY
            point.reverseAnim = true
            point.startAnim = getNow()
          }
        }

        // move player based on mouse
        point.x += player.x
        point.y += player.y
      }
    }

    playersRef[y].current.setAttribute('d', cardinal(player.points))
  }
}

// Create circle distorsion based on the given coordinates points
// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(points, tension = 1.2) {
  // 1 tension does not make a perfect round, why?
  const nbPoints = points.length
  if (nbPoints < 1) return 'M0 0'

  let path = `M ${points[0].x} ${points[0].y} C`
  // where M is the starting X,Y coords
  // C is the 3 next points coord of a Cubic bezier

  for (let i = 0; i < nbPoints; i++) {
    const p0 = points[(i - 1 + nbPoints) % nbPoints]
    const p1 = points[i]
    const p2 = points[(i + 1) % nbPoints]
    const p3 = points[(i + 2) % nbPoints]

    const x1 = p1.x + ((p2.x - p0.x) / 6) * tension
    const y1 = p1.y + ((p2.y - p0.y) / 6) * tension

    const x2 = p2.x - ((p3.x - p1.x) / 6) * tension
    const y2 = p2.y - ((p3.y - p1.y) / 6) * tension

    // cubic Bezier
    // x1 | The x-axis coordinate of the first control point.
    // y1 | The y-axis coordinate of the first control point.
    // x2 | The x-axis coordinate of the second control point.
    // y2 | The y-axis coordinate of the second control point.
    // p2.x | The x-axis coordinate of the end point.
    // p2.y | The y-axis coordinate of the end point.
    path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`
  }

  return `${path}z` // close path with z
}

export default Scene
