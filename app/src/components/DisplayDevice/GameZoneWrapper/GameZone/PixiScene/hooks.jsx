import { useEffect } from 'react'
import { Application, Sprite, Container, Texture, Graphics } from 'pixi.js'
import { COLORS, GRID_UNIT, VB_WIDTH } from '~constants'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import PlayersManager from '~managers/PlayersManager'
import { random } from '~utils/math'
import getNow from '~utils/time'
import { inOutSine, inOutQuad } from '~utils/ease'

import styles from './style.module.scss'

const minDuration = 700
const maxDuration = 900
const pointsCount = 6
const decelerationCircleCoef = 0.15
const transitionOutDuration = 1000

export function useSetScene(refs, props) {
  useEffect(() => {
    // funcs
    function setVideo(source, container) {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

      // Stetch the fullscreen
      videoSprite.width = refs.app.current.screen.width
      videoSprite.height = refs.app.current.screen.height

      if (props.type === 'tutorial') {
        videoSprite.alpha = 0.3
      }

      container.addChild(videoSprite)

      texture.baseTexture.resource.autoPlay = true

      const video = texture.baseTexture.resource.source
      video.muted = true

      return video
    }

    function setCircles() {
      refs.circlesMasked.current = new Graphics()
      // Circle
      refs.containerFront.current.addChild(refs.circlesMasked.current)
      // mask container into circle(s)
      if (props.type === 'game') {
        refs.containerMasked.current.mask = refs.circlesMasked.current
      }

      refs.circlesBorder.current = new Graphics()
      refs.containerFront.current.addChild(refs.circlesBorder.current)

      // calculate the size the first time, then it will adapt to the auto resize of the scene every time it's drawn
      refs.stroke.current = ((GRID_UNIT * 0.11) / VB_WIDTH) * refs.el.current.offsetWidth
      // set min and max radius for the circle
      refs.minRadius.current = ((GRID_UNIT * 1.2) / VB_WIDTH) * refs.el.current.offsetWidth
      refs.maxRadius.current = refs.minRadius.current + refs.minRadius.current * 0.35
      refs.minMiddleRadius.current = refs.minRadius.current + (refs.maxRadius.current - refs.minRadius.current) * 0.35
      refs.maxMiddleRadius.current = refs.minRadius.current + (refs.maxRadius.current - refs.minRadius.current) * 0.45

      PlayersManager.players.forEach(() => {
        const circlePoints = setCirclePoints()
        refs.circlesPoints.current.push(circlePoints)
        refs.circlesLastPositions.current.push({ x: 0, y: 0 })
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
          x: Math.cos(angle) * random(refs.minRadius.current, refs.maxRadius.current),
          y: Math.sin(angle) * random(refs.minRadius.current, refs.maxRadius.current),
          targetMinX: Math.cos(angle) * random(refs.minRadius.current, refs.minMiddleRadius.current),
          targetMinY: Math.sin(angle) * random(refs.minRadius.current, refs.minMiddleRadius.current),
          targetMaxX: Math.cos(angle) * random(refs.maxMiddleRadius.current, refs.maxRadius.current),
          targetMaxY: Math.sin(angle) * random(refs.maxMiddleRadius.current, refs.maxRadius.current),
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
    refs.app.current = new Application({
      width: refs.el.current.offsetWidth,
      height: refs.el.current.offsetHeight,
      resolution: window.devicePixelRatio,
      antialias: true,
      autoDensity: true,
      backgroundColor: 0xffffff,
    })

    refs.app.current.stage.interactive = true

    // Add the canvas that Pixi automatically created for you to the HTML document
    refs.app.current.view.classList.add(styles.canvas)
    refs.el.current.appendChild(refs.app.current.view)

    refs.containerFront.current = new Container()
    refs.containerMasked.current = new Container()
    if (props.type === 'game') {
      refs.app.current.stage.addChild(refs.containerFront.current)
    }
    refs.app.current.stage.addChild(refs.containerMasked.current)
    if (props.type === 'tutorial') {
      refs.app.current.stage.addChild(refs.containerFront.current)
    }

    // set elements into scene
    const videoPixiBack = setVideo(props.videoBack, refs.containerMasked.current)
    const videoPixiFront = setVideo(props.videoFront, refs.containerFront.current)
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
      // destroy app
      refs.app.current.destroy(true, true)
    }
  }, [props.videoBack, props.videoFront])
}


export function useResizeScene(refs) {
  useEffect(() => {
    // funcs
    function resizeHandler() {
      if (refs.app) {
        refs.app.current.view.style.width = `${refs.el.current.offsetWidth}px`
        refs.app.current.view.style.height = `${refs.el.current.offsetHeight}px`
      }
    }

    function initSizes() {
      refs.initWidth.current = refs.el.current.offsetWidth
      refs.initHeight.current = refs.el.current.offsetHeight
    }

    // init
    resizeHandler()
    initSizes()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])
}

export function useUpdateItems(refs, props) {
  useEffect(() => {
    const container = refs.containerMasked.current
    // funcs
    function setItem(item) {
      const sprite = Sprite.from(item.image)
      sprite.height = (item.size / VB_WIDTH) * refs.initWidth.current
      sprite.width = (item.size / VB_WIDTH) * refs.initWidth.current

      sprite.position.x = item.x * refs.initWidth.current - ((GRID_UNIT / VB_WIDTH) * refs.initWidth.current) / 2
      sprite.position.y = item.y * refs.initHeight.current - ((GRID_UNIT / VB_WIDTH) * refs.initWidth.current) / 2

      sprite.anchor.set(0, 0)

      container.addChild(sprite)

      return sprite
    }

    // init
    const sprites = []

    props.items.forEach(item => {
      const sprite = setItem(item)
      sprites.push(sprite)
    })

    return () => {
      // remove all sprite items
      sprites.forEach(sprite => {
        container.removeChild(sprite)
      })
    }
  }, [props.items])
}

export function useUpdatePowers(refs, props) {
  // update powers
  useEffect(() => {
    // func
    function updateRadius(points, increment) {
      const now = getNow()
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        // Increase each points
        // if player has grown power, increase player radius
        const newMaxRadius = refs.maxRadius.current + increment
        const newMaxMiddleRadius = refs.maxMiddleRadius.current + increment
        const newMinRadius = refs.minRadius.current + increment
        const newMinMiddleRadius = refs.minMiddleRadius.current + increment

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
      if (!props.powers[index]) {
        updateRadius(refs.circlesPoints.current[index], 0)
      } else {
        if (props.powers[index].type === 'grow') {
          updateRadius(refs.circlesPoints.current[index], refs.maxRadius.current * 1.45)
        } else if (props.powers[index].type === 'freeze') {
          refs.timeFrozen.current = getNow()
        } else if (props.powers[index].type === 'time' && typeof props.setTime === 'function') {
          props.setTime(time => time + 20)
        }

        if (props.powers[index].type) {
          const timeout = setTimeout(
            () => {
              props.cancelPower(index)
            },
            props.powers[index].type === 'grow' ? 6000 : 4000,
          )

          return () => clearTimeout(timeout)
        }
      }

      return undefined
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.powers, props.setTime])
}


export function useRAF(refs, props) {
  // RAF
  useEffect(() => {
    // funcs
    function updateFrame(now) {
      refs.circlesMasked.current.clear()
      refs.circlesBorder.current.clear()

      PlayersManager.players.forEach((player, index) => {
        let color = hexStToNb(COLORS[player.color])

        // draw circles
        let points
        let newPosition
        if (props.powers[index] && props.powers[index].type === 'freeze') {
          // position has to stay and color is gray
          color = hexStToNb(COLORS.blue)
          newPosition = refs.circlesLastPositions.current[index]
          points = getPointsAroundCircle(
            refs.timeFrozen.current,
            refs.circlesPoints.current[index],
            refs.circlesLastPositions.current[index],
          )
        } else {
          newPosition = getDelayedPosition(refs.circlesLastPositions.current[index], props.positions[index])
          points = getPointsAroundCircle(now, refs.circlesPoints.current[index], newPosition)
        }
        refs.circlesLastPositions.current[index] = newPosition
        drawCubicBezier(points, newPosition, color)
      })

      refs.circlesMasked.current.endFill()

      // draw transition out rect
      if (refs.startTransitionOut.current > 0) {
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
        point.x = relativeX + (x + 0.5) * refs.initWidth.current
        point.y = relativeY + (y + 0.5) * refs.initHeight.current
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
      refs.circlesMasked.current.moveTo(points[0].x, points[0].y)
      refs.circlesMasked.current.beginFill(0xffffff, props.circleAlpha)

      // draw border circles
      refs.circlesBorder.current.moveTo(points[0].x, points[0].y)
      refs.circlesBorder.current.lineStyle(refs.stroke.current, color, 1)

      for (let i = 0; i < nbPoints; i++) {
        const p0 = points[(i - 1 + nbPoints) % nbPoints]
        const p1 = points[i]
        const p2 = points[(i + 1) % nbPoints]
        const p3 = points[(i + 2) % nbPoints]

        const x1 = p1.x + ((p2.x - p0.x) / 6) * tension
        const y1 = p1.y + ((p2.y - p0.y) / 6) * tension

        const x2 = p2.x - ((p3.x - p1.x) / 6) * tension
        const y2 = p2.y - ((p3.y - p1.y) / 6) * tension

        refs.circlesMasked.current.bezierCurveTo(x1, y1, x2, y2, p2.x, p2.y)
        refs.circlesBorder.current.bezierCurveTo(x1, y1, x2, y2, p2.x, p2.y)
      }
    }

    // draw transition out
    function drawTransitionOut(now) {
      const percent = (now - refs.startTransitionOut.current) / transitionOutDuration
      const positionX = refs.initWidth.current - refs.initWidth.current * inOutQuad(percent)

      refs.circlesMasked.current.beginFill(0xffffff)

      if (percent < 1) {
        refs.circlesMasked.current.drawRect(positionX, 0, refs.initWidth.current, refs.initHeight.current)
      } else {
        refs.circlesMasked.current.drawRect(0, 0, refs.initWidth.current, refs.initHeight.current)
      }
      refs.circlesMasked.current.endFill()
    }

    // init RAF
    AnimationFrameManager.addSubscriber(updateFrame)

    return () => {
      AnimationFrameManager.removeSubscriber(updateFrame)
    }
  }, [props.positions, props.powers, props.circleAlpha])
}

export function useUpdateGameState(refs, props) {
  useEffect(() => {
    if (props.gameState === 'after-game') {
      refs.startTransitionOut.current = getNow()
    }
  }, [props.gameState])
}

function hexStToNb(str) {
  return parseInt(str.replace(/^#/, ''), 16)
}
