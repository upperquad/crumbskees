import React, { useEffect, useRef } from 'react'
import { Application, Sprite, Container, Texture, Graphics } from 'pixi.js'
import PlayersManager from '~managers/PlayersManager'
import getNow from '~utils/time'
import { inOutSine, inOutQuad } from '~utils/ease'
import { random } from '~utils/math'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import { COLORS, GRID_UNIT, VB_WIDTH } from '~constants'

import styles from './style.module.scss'

const minDuration = 700
const maxDuration = 900
const pointsCount = 6
const decelerationCircleCoef = 0.15
const transitionOutDuration = 1000

const PixiScene = props => {
  const { cancelPower, gameState, items, positions, powers, videoBack, videoFront } = props
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

  const timeFrozen = useRef(null)
  const startTransitionOut = useRef(0)

  // set up scene
  useEffect(() => {
    // funcs
    function setVideo(source, container) {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

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
        circlesLastPositions.current.push({ x: 0, y: 0 })
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
    app.current = new Application({
      width: elRef.current.offsetWidth,
      height: elRef.current.offsetHeight,
      resolution: window.devicePixelRatio,
      antialias: true,
      autoDensity: true,
      backgroundColor: 0xffffff,
    })

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

  // update powers
  useEffect(() => {
    // func
    function updateRadius(points, increment) {
      const now = getNow()
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        // Increase each points
        // if player has grown power, increase player radius
        const newMaxRadius = maxRadius.current + increment
        const newMaxMiddleRadius = maxMiddleRadius.current + increment
        const newMinRadius = minRadius.current + increment
        const newMinMiddleRadius = minMiddleRadius.current + increment

        point.duration += 250

        point.targetMaxX = Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        point.targetMinX = Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

        point.destX = point.targetMaxX

        point.targetMaxY = Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        point.targetMinY = Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

        point.destY = point.targetMaxY
        point.startAnim = now
      }

      setTimeout(() => {
        // when growing animation finish
        for (let i = 0; i < points.length; i++) {
          points[i].duration -= 250
        }
      }, 2000)
    }

    // init
    PlayersManager.players.forEach((player, index) => {
      if (powers[index] === 'grow') {
        updateRadius(circlesPoints.current[index], maxRadius.current * 1.45)
      } else if (powers[index] === 'freeze') {
        timeFrozen.current = getNow()
      } else {
        updateRadius(circlesPoints.current[index], 0)
      }

      if (powers[index]) {
        const timeout = setTimeout(
          () => {
            cancelPower(index)
          },
          powers[index] === 'grow' ? 6000 : 4000,
        )

        return () => clearTimeout(timeout)
      }

      return undefined
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [powers])

  // RAF
  useEffect(() => {
    // funcs
    function updateFrame(now) {
      circlesMasked.current.clear()
      circlesBorder.current.clear()

      PlayersManager.players.forEach((player, index) => {
        let color = hexStToNb(COLORS[player.color])

        // draw circles
        let points
        let newPosition
        if (powers[index] === 'freeze') {
          // position has to stay and color is gray
          color = 0x00c1ff
          newPosition = circlesLastPositions.current[index]
          points = getPointsAroundCircle(
            timeFrozen.current,
            circlesPoints.current[index],
            circlesLastPositions.current[index],
          )
        } else {
          newPosition = getDelayedPosition(circlesLastPositions.current[index], positions[index])
          points = getPointsAroundCircle(now, circlesPoints.current[index], newPosition)
        }
        circlesLastPositions.current[index] = newPosition
        // circlesPoints.current[index] = points
        drawCubicBezier(points, newPosition, color)
      })

      circlesMasked.current.endFill()

      // draw transition out rect
      if (startTransitionOut.current > 0) {
        drawTransitionOut(now)
      }
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
      circlesMasked.current.beginFill(0xffffff, 1)

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

    // draw transition out
    function drawTransitionOut(now) {
      const percent = (now - startTransitionOut.current) / transitionOutDuration
      const positionX = initWidth.current - initWidth.current * inOutQuad(percent)

      circlesMasked.current.beginFill(0xffffff)

      if (percent < 1) {
        circlesMasked.current.drawRect(positionX, 0, initWidth.current, initHeight.current)
      } else {
        circlesMasked.current.drawRect(0, 0, initWidth.current, initHeight.current)
      }
      circlesMasked.current.endFill()
    }

    // init RAF
    AnimationFrameManager.addSubscriber(updateFrame)

    return () => {
      AnimationFrameManager.removeSubscriber(updateFrame)
    }
  }, [positions, powers])

  // on update game state
  useEffect(() => {
    if (gameState === 'after-game') {
      startTransitionOut.current = getNow()
    }
  }, [gameState])

  return <div className={styles.pixiScene} ref={elRef} />
}

function hexStToNb(str) {
  return parseInt(str.replace(/^#/, ''), 16)
}

export default PixiScene
