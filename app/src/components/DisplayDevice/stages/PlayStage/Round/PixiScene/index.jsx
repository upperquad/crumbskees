import React, { useEffect, useRef } from 'react'
import {
  Application,
  Sprite,
  // WRAP_MODES,
  Container,
  // Loader,
  Texture,
  Graphics,
} from 'pixi.js'
import PlayersManager from '~managers/PlayersManager'
import getNow from '~utils/time'
import { inOutSine } from '~utils/ease'
import { random } from '~utils/math'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import { GRID_UNIT, VB_WIDTH } from '~constants'

import styles from './style.module.scss'

const minDuration = 700
const maxDuration = 900
const pointsCount = 6
const decelerationCircleCoef = 0.15

const PixiScene = props => {
  const { items, playerCursors, videoBack, videoFront } = props
  // re-used references through hooks
  const elRef = useRef(null)
  const app = useRef(null)
  // keep the width and height the first time the app is initiated
  // the autoresizing of pixi is handling the rest, no need to update with new width/height
  // pixi scene
  const initWidth = useRef(0)
  const initHeight = useRef(0)
  const containerMasked = useRef(null)
  const containerFront = useRef(null)
  // circles
  const circlesMasked = useRef(null)
  const circlesBorder = useRef(null)
  const circlesPoints = useRef([])
  const circlesLastPositions = useRef([])
  // circles size
  const stroke = useRef(0)
  const minRadius = useRef(0)
  const maxRadius = useRef(0)
  const minMiddleRadius = useRef(0)
  const maxMiddleRadius = useRef(0)

  // set up scene
  useEffect(() => {
    // funcs
    function setVideo(source, container) {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

      // videoSprite.alpha = 0.2

      // Stetch the fullscreen
      videoSprite.width = app.current.screen.width
      videoSprite.height = app.current.screen.height

      container.addChild(videoSprite)

      texture.baseTexture.resource.autoPlay = true

      const video = texture.baseTexture.resource.source
      video.muted = true

      return video
    }

    function setCircles() {
      circlesMasked.current = new Graphics()
      // Circle
      containerFront.current.addChild(circlesMasked.current)
      // mask container into circle(s)
      containerMasked.current.mask = circlesMasked.current

      circlesBorder.current = new Graphics()
      containerFront.current.addChild(circlesBorder.current)

      // calculate the size the first time, then it will adapt to the auto resize of the scene every time it's drawn
      stroke.current = ((GRID_UNIT * 0.11) / VB_WIDTH) * elRef.current.offsetWidth
      // set min and max radius for the circle
      minRadius.current = ((GRID_UNIT * 1.2) / VB_WIDTH) * elRef.current.offsetWidth
      maxRadius.current = minRadius.current + minRadius.current * 0.35
      minMiddleRadius.current = minRadius.current + (maxRadius.current - minRadius.current) * 0.35
      maxMiddleRadius.current = minRadius.current + (maxRadius.current - minRadius.current) * 0.45

      PlayersManager.players.forEach(() => {
        const circlePoints = setCirclePoints()
        circlesPoints.current.push(circlePoints)
        circlesLastPositions.current.push({ x: 0.5, y: 0.5 })
      })
    }

    function setCirclePoints() {
      const points = []
      const slice = (Math.PI * 2) / pointsCount
      const startAngle = random(0, Math.PI * 2)

      for (let i = 0; i < pointsCount; i++) {
        const margeAngle = random(0, 0.28) // i / 1.2
        // randomize the start time of animation (we don't want the tween to go from 0 to 1, it can start directly from 0.6 for example)
        const startAnim = getNow() + i * random(0, minDuration)
        const angle = startAngle + i * slice + margeAngle
        const duration = random(minDuration, maxDuration)

        const point = {
          angle,
          duration,
          startAnim,
          x: Math.cos(angle) * random(minRadius.current, maxRadius.current),
          y: Math.sin(angle) * random(minRadius.current, maxRadius.current),
          targetMinX: Math.cos(angle) * random(minRadius.current, minMiddleRadius.current),
          targetMinY: Math.sin(angle) * random(minRadius.current, minMiddleRadius.current),
          targetMaxX: Math.cos(angle) * random(maxMiddleRadius.current, maxRadius.current),
          targetMaxY: Math.sin(angle) * random(maxMiddleRadius.current, maxRadius.current),
        }

        point.startX = point.x
        point.startY = point.y
        point.destX = point.targetMaxX
        point.destY = point.targetMaxY

        points.push(point)
      }

      return points
    }

    // init
    app.current = new Application({ width: elRef.current.offsetWidth, height: elRef.current.offsetHeight, resolution: window.devicePixelRatio, antialias: true, autoDensity: true, backgroundColor: 0xFFFFFF }) // , backgroundColor: 0xF7F7F7
    // console.log(this.app.currentrenderer.resolution)

    app.current.stage.interactive = true

    // Add the canvas that Pixi automatically created for you to the HTML document
    app.current.view.classList.add(styles.canvas)
    elRef.current.appendChild(app.current.view)

    containerFront.current = new Container()
    containerMasked.current = new Container()
    app.current.stage.addChild(containerFront.current)
    app.current.stage.addChild(containerMasked.current)

    // set elements into scene
    const videoPixiBack = setVideo(videoBack, containerMasked.current)
    const videoPixiFront = setVideo(videoFront, containerFront.current)
    setCircles()

    // Videos looping:
    // Force syncronize because RAF is creating an offset between the 2 videos
    videoPixiFront.addEventListener('ended', () => {
      videoPixiBack.currentTime = 0
      videoPixiBack.play()
      videoPixiFront.currentTime = 0
      videoPixiFront.play()
    })

    return () => {
      // remove all children
      while (app.current.stage.children[0]) {
        app.current.stage.removeChild(app.current.stage.children[0])
      }

      // destroy app
      app.current.destroy(true)
    }
  }, [videoBack, videoFront])

  // resize
  useEffect(() => {
    // funcs
    function resizeHandler() {
      if (app) {
        app.current.view.style.width = `${elRef.current.offsetWidth}px`
        app.current.view.style.height = `${elRef.current.offsetHeight}px`
      }
    }

    function initSizes() {
      initWidth.current = elRef.current.offsetWidth
      initHeight.current = elRef.current.offsetHeight
    }

    // init
    resizeHandler()
    initSizes()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // update items
  useEffect(() => {
    const container = containerMasked.current
    // funcs
    function setItem(item) {
      const sprite = Sprite.from(item.image)
      sprite.height = (item.size / VB_WIDTH) * initWidth.current
      sprite.width = (item.size / VB_WIDTH) * initWidth.current

      sprite.position.x = item.x * initWidth.current
      sprite.position.y = item.y * initHeight.current

      sprite.anchor.set(0.5, 0.5)

      container.addChild(sprite)

      return sprite
    }

    // init
    const sprites = []

    items.forEach(item => {
      const sprite = setItem(item)
      sprites.push(sprite)
    })

    return () => {
      // remove all sprite items
      sprites.forEach(sprite => {
        container.removeChild(sprite)
      })
    }
  }, [items])

  // RAF
  useEffect(() => {
    // funcs
    function updateFrame(now) {
      circlesMasked.current.clear()
      circlesBorder.current.clear()

      playerCursors.forEach((playerCursor, index) => {
        const { color, position, power } = playerCursor

        if (power === 'freeze') {
          // position has to stay and color is gray
          return
        }
        const newPosition = getDelayedPosition(circlesLastPositions.current[index], position)
        circlesLastPositions.current[index] = newPosition
        // draw circles
        const points = getPointsAroundCircle(now, circlesPoints.current[index], newPosition)
        drawCubicBezier(points, newPosition, color)
      })

      circlesMasked.current.endFill()
    }

    // get delayed position
    function getDelayedPosition(lastPosition, targetPosition) {
      const { x: targetX, y: targetY } = targetPosition
      let { x, y } = lastPosition

      x += (targetX - x) * decelerationCircleCoef // decelerationCircleCoef
      y += (targetY - y) * decelerationCircleCoef

      return { x, y }
    }

    // get points all around the circle to set up cubic bezier curves
    function getPointsAroundCircle(now, points, position) {
      const { x, y } = position

      // For each points of the player (organic shape)
      // Create organic shape / Tween all points
      for (let i = 0; i < points.length; i++) {
        const point = points[i]

        // From scratch tween:
        // percent is going from 0 to 1 in X seconds where X is the "duration variable".
        // Each points starting value is going to his destination value in X seconds
        // then I use easing functions to modify the value curve through time.
        const percent = (now - point.startAnim) / point.duration

        const relativeX = point.startX + (point.destX - point.startX) * inOutSine(percent)
        const relativeY = point.startY + (point.destY - point.startY) * inOutSine(percent)

        if (percent >= 1) {
          // end of animation,
          // restart animation by going back
          point.startX = relativeX
          point.startY = relativeY
          point.reverseAnim = !point.reverseAnim
          point.startAnim = now

          if (point.reverseAnim) {
            point.destX = point.targetMaxX
            point.destY = point.targetMaxY
          } else {
            point.destX = point.targetMinX
            point.destY = point.targetMinY
          }
        }

        // move circle based on mouse
        point.x = relativeX + (x + 0.5) * initWidth.current
        point.y = relativeY + (y + 0.5) * initHeight.current
      }

      return points
    }

    // Create circle distorsion based on the given coordinates points
    // Cardinal spline - a uniform Catmull-Rom spline with a tension option
    function drawCubicBezier(points, position, color, tension = 1.2) {
      if (!points) {
        return
      }

      const nbPoints = points.length
      // draw masked circles
      circlesMasked.current.moveTo(points[0].x, points[0].y)
      circlesMasked.current.beginFill(0xFFFFFF, 1)

      // draw border circles
      circlesBorder.current.moveTo(points[0].x, points[0].y)
      circlesBorder.current.lineStyle(stroke.current, color, 1)

      for (let i = 0; i < nbPoints; i++) {
        const p0 = points[(i - 1 + nbPoints) % nbPoints]
        const p1 = points[i]
        const p2 = points[(i + 1) % nbPoints]
        const p3 = points[(i + 2) % nbPoints]

        const x1 = p1.x + ((p2.x - p0.x) / 6) * tension
        const y1 = p1.y + ((p2.y - p0.y) / 6) * tension

        const x2 = p2.x - ((p3.x - p1.x) / 6) * tension
        const y2 = p2.y - ((p3.y - p1.y) / 6) * tension

        circlesMasked.current.bezierCurveTo(x1, y1, x2, y2, p2.x, p2.y)
        circlesBorder.current.bezierCurveTo(x1, y1, x2, y2, p2.x, p2.y)
      }
    }

    // init RAF
    AnimationFrameManager.addSubscriber(updateFrame)

    return () => {
      AnimationFrameManager.removeSubscriber(updateFrame)
    }
  }, [playerCursors])

  return (
    <div className={styles.pixiScene} ref={elRef} />
  )
}

export default PixiScene
