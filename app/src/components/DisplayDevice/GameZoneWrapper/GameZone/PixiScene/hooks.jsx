import { useEffect } from 'react'
import { Application, Loader, Sprite, Container, Texture, Graphics } from 'pixi.js'
import { COLORS, GRID_UNIT, VB_WIDTH } from '~constants'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import PlayersManager from '~managers/PlayersManager'
import { random } from '~utils/math'
import getNow from '~utils/time'
import { inOutSine, inOutQuad } from '~utils/ease'

import lipImage from '~assets/images/mouth.png'

import styles from './style.module.scss'

// circles
const CIRCLE_STROKE_COEF = 0.2
const CIRCLE_MIN_RADIUS = 1.2
const CIRCLE_MAX_RADIUS_COEF = 0.15
const CIRCLE_MAX_ANGLE = 0.35
const CIRCLE_GROWN_RADIUS = 1.45
const CIRCLE_MIN_DURATION = 700
const CIRCLE_MAX_DURATION = 900
const CIRCLE_POINTS = 6
const CIRCLE_DECELERATION_COEF = 0.15

// mouths/lips
const LIP_OFFSET = 0.075
const LIP_OFFSET_CLOSED = 0.03
const LIP_OFFSET_GROWN_TUTORIAL = 0.17
const LIP_OFFSET_GROWN = 0.19
const LIP_SCALE_GROWN_TUTORIAL = 0.27
const LIP_SCALE_GROWN = 0.33
const LIP_SIZE_COEF = 3.1

// powers
const GROW_ANIMATION_DURATION = 2000
const CANCEL_GROW_DURATION = 6000
const CANCEL_FREEZE_DURATION = 4000
const ADD_SECONDS = 20

// transitions
const TRANSITION_OUT_DURATION = 1000

export function useSetScene(refs, props) {
  useEffect(() => {
    // funcs
    function setVideo(source, container) {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

      // Set fullscreen
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

    function setMouths(texture) {
      PlayersManager.players.forEach((player, index) => {
        for (let i = 0; i < 2; i++) {
          const sprite = new Sprite(texture)
          const ratio = sprite.height / sprite.width
          sprite.width = ((GRID_UNIT * LIP_SIZE_COEF) / VB_WIDTH) * refs.el.current.offsetWidth
          sprite.height = sprite.width * ratio

          sprite.position.x = 0.5 * refs.el.current.offsetWidth
          sprite.position.y = 0.5 * refs.el.current.offsetHeight

          sprite.anchor.set(0.5, 0.5)

          if (i === 1) {
            sprite.angle = 180
          }

          refs.containerMouth.current.addChild(sprite)
          refs.mouths.current[index].push(sprite)

          sprite.initScaleX = sprite.scale.x
          sprite.initScaleY = sprite.scale.y
          sprite.offset = LIP_OFFSET
        }

        player.allowCloseMouth = true
      })
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
      refs.stroke.current = ((GRID_UNIT * CIRCLE_STROKE_COEF) / VB_WIDTH) * refs.el.current.offsetWidth
      // set min and max radius for the circle
      refs.minRadius.current = ((GRID_UNIT * CIRCLE_MIN_RADIUS) / VB_WIDTH) * refs.el.current.offsetWidth
      refs.maxRadius.current = refs.minRadius.current + refs.minRadius.current * CIRCLE_MAX_RADIUS_COEF
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
      const slice = (Math.PI * 2) / CIRCLE_POINTS
      const startAngle = random(0, Math.PI * 2)

      for (let i = 0; i < CIRCLE_POINTS; i++) {
        const marginAngle = random(0, CIRCLE_MAX_ANGLE) // i / 1.2
        // randomize the start time of animation (we don't want the tween to go from 0 to 1, it can start directly from 0.6 for example)
        const startAnim = getNow() + i * random(0, CIRCLE_MIN_DURATION)
        const angle = startAngle + i * slice + marginAngle
        const duration = random(CIRCLE_MIN_DURATION, CIRCLE_MAX_DURATION)

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

    // set layers
    refs.containerFront.current = new Container()
    refs.containerMasked.current = new Container()
    refs.containerMouth.current = new Container()
    if (props.type === 'game') {
      refs.app.current.stage.addChild(refs.containerFront.current)
    }
    refs.app.current.stage.addChild(refs.containerMasked.current)
    if (props.type === 'tutorial') {
      refs.app.current.stage.addChild(refs.containerFront.current)
    }
    refs.app.current.stage.addChild(refs.containerMouth.current)

    // set elements into scene
    const videoPixiBack = setVideo(props.videoBack, refs.containerMasked.current)
    const videoPixiFront = setVideo(props.videoFront, refs.containerFront.current)
    setCircles()
    // preload lips
    const loader = new Loader()
    loader.add('lip', lipImage)
    loader.load((currentLoader, resources) => {
      setMouths(resources.lip.texture)
    })

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
    function growCircle(points, increment) {
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
      }, GROW_ANIMATION_DURATION)
    }

    function growMouth(player, lips, close = false) {
      const now = getNow()
      let needsUpdate = false
      lips.forEach(lip => {
        if (!lip.initScaleX) return
        lip.originScaleX = lip.scale.x
        lip.originScaleY = lip.scale.y
        lip.originOffset = lip.offset

        const scaleGrown = props.type === 'tutorial' ? LIP_SCALE_GROWN_TUTORIAL : LIP_SCALE_GROWN
        lip.targetScaleX = close ? lip.initScaleX : scaleGrown
        lip.targetScaleY = close ? lip.initScaleY : scaleGrown

        const offsetGrown = props.type === 'tutorial' ? LIP_OFFSET_GROWN_TUTORIAL : LIP_OFFSET_GROWN
        lip.targetOffset = close ? LIP_OFFSET : offsetGrown
        needsUpdate = true
      })

      if (needsUpdate) {
        player.startGrowMouthAnimation = now
        setTimeout(() => {
          player.startGrowMouthAnimation = false
        }, GROW_ANIMATION_DURATION)

        if (close) {
          setTimeout(() => {
            player.allowCloseMouth = true
          }, GROW_ANIMATION_DURATION)
        } else {
          player.allowCloseMouth = false
        }
      }
    }

    // init
    PlayersManager.players.forEach((player, index) => {
      if (!props.powers[index]) {
        growCircle(refs.circlesPoints.current[index], 0)
        growMouth(player, refs.mouths.current[index], true)
      } else {
        if (props.powers[index].type === 'grow') {
          growCircle(refs.circlesPoints.current[index], refs.maxRadius.current * CIRCLE_GROWN_RADIUS)
          growMouth(player, refs.mouths.current[index])
        } else if (props.powers[index].type === 'freeze') {
          refs.timeFrozen.current = getNow()
        } else if (props.powers[index].type === 'time' && typeof props.setTime === 'function') {
          props.setTime(time => time + ADD_SECONDS)
        }

        if (props.powers[index].type) {
          const timeout = setTimeout(
            () => {
              props.cancelPower(index)
            },
            props.powers[index].type === 'grow' ? CANCEL_GROW_DURATION : CANCEL_FREEZE_DURATION,
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

        // close circle quickly when mouth closes
        if (player.allowCloseMouth) {
          closeCircle(player, index)
        }

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
            newPosition,
          )
        } else {
          newPosition = getDelayedPosition(refs.circlesLastPositions.current[index], props.positions[index])
          points = getPointsAroundCircle(now, refs.circlesPoints.current[index], newPosition, player.mouthIsMoving)
        }
        refs.circlesLastPositions.current[index] = newPosition
        drawCubicBezier(points, newPosition, color)
        drawMouths(now, index, newPosition)
      })

      function closeCircle(player, index) {
        if (player.closeMouth) {
          if (!player.mouthIsMoving) {
            const increment = -refs.maxRadius.current * 0.3
            updateRadiusInstantly(refs.circlesPoints.current[index], increment)
            player.mouthIsMoving = true
          }
        } else if (player.mouthIsMoving === true) {
          updateRadiusInstantly(refs.circlesPoints.current[index])
          player.mouthIsMoving = false
        }
      }

      function updateRadiusInstantly(points, increment = 0) {
        for (let i = 0; i < points.length; i++) {
          const point = points[i]
          // Increase each points
          // if player has grown power, increase player radius
          const newMaxRadius = refs.maxRadius.current + increment
          const newMaxMiddleRadius = refs.maxMiddleRadius.current + increment
          const newMinRadius = refs.minRadius.current + increment
          const newMinMiddleRadius = refs.minMiddleRadius.current + increment

          point.targetMaxX = Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          point.targetMinX = Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

          point.destX = point.targetMaxX
          point.x = point.destX

          point.targetMaxY = Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          point.targetMinY = Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

          point.destY = point.targetMaxY
          point.y = point.destY

          point.startAnim = now
        }
      }

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

      x += (targetX - x) * CIRCLE_DECELERATION_COEF
      y += (targetY - y) * CIRCLE_DECELERATION_COEF

      return { x, y }
    }

    // get points all around the circle to set up cubic bezier curves
    function getPointsAroundCircle(now, points, position, mouthIsMoving) {
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

        let relativeX
        let relativeY

        if (mouthIsMoving) {
          // stop delay animation
          relativeX = point.destX
          relativeY = point.destY
        } else {
          relativeX = point.startX + (point.destX - point.startX) * inOutSine(percent)
          relativeY = point.startY + (point.destY - point.startY) * inOutSine(percent)
        }

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

    // draw mouths
    function drawMouths(now, index, position) {
      const player = PlayersManager.players[index]
      // draw lips
      refs.mouths.current[index].forEach((lip, lipIndex) => {
        const { x, y } = position

        if (player.startGrowMouthAnimation) {
          const percent = (now - player.startGrowMouthAnimation) / (CIRCLE_MAX_DURATION + 100)

          if (percent < 1) {
            lip.scale.x = lip.originScaleX + (lip.targetScaleX - lip.originScaleX) * inOutSine(percent)
            lip.scale.y = lip.originScaleY + (lip.targetScaleY - lip.originScaleY) * inOutSine(percent)

            lip.offset = lip.originOffset + (lip.targetOffset - lip.originOffset) * inOutSine(percent)
          }
        } else if (player.allowCloseMouth) {
          lip.offset = player.closeMouth ? LIP_OFFSET_CLOSED : LIP_OFFSET
        }

        lip.position.x = (x + 0.5) * refs.initWidth.current
        if (lipIndex === 0) {
          lip.position.y = (y + 0.5 - lip.offset) * refs.initHeight.current
        } else {
          lip.position.y = (y + 0.5 + lip.offset) * refs.initHeight.current
        }
      })
    }

    // draw transition out
    function drawTransitionOut(now) {
      const percent = (now - refs.startTransitionOut.current) / TRANSITION_OUT_DURATION
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
