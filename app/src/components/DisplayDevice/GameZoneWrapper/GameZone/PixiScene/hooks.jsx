// TODO: this file needs to be optimized
import { useEffect } from 'react'
import { Application, Loader, Sprite, Container, Texture, Graphics } from 'pixi.js'
import { COLORS, DEBUG, GRID_UNIT, VB_WIDTH } from '~constants'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import PlayersManager from '~managers/PlayersManager'
import getNow from '~utils/time'
import { inOutSine, inOutQuad } from '~utils/ease'

import styles from './style.module.scss'

// circles
const CIRCLE_STROKE_COEF = 0.2
const CIRCLE_BASE_RADIUS = 1.29
const CIRCLE_GROWN_RADIUS = 1.45
const CIRCLE_MAX_DURATION = 900
const CIRCLE_DECELERATION_COEF = 0.15

// mouths/lips
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

    function setMouths(resources) {
      PlayersManager.players.forEach((player, index) => {
        const sprite = new Sprite(resources[`mouth-${index}`].texture)
        const ratio = sprite.height / sprite.width
        sprite.width = ((GRID_UNIT * LIP_SIZE_COEF) / VB_WIDTH) * refs.el.current.offsetWidth
        sprite.height = sprite.width * ratio

        sprite.position.x = 0.5 * refs.el.current.offsetWidth
        sprite.position.y = 0.5 * refs.el.current.offsetHeight

        sprite.anchor.set(0.5, 0.5)

        refs.containerMouth.current.addChild(sprite)
        refs.mouths.current[index].push(sprite)

        sprite.initScaleX = sprite.scale.x
        sprite.initScaleY = sprite.scale.y

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
      // TODO: clean this up
      refs.radius.current = ((GRID_UNIT * CIRCLE_BASE_RADIUS) / VB_WIDTH) * refs.el.current.offsetWidth

      PlayersManager.players.forEach(() => {
        refs.circlesLastPositions.current.push({ x: 0, y: 0 })
      })
    }

    // init
    refs.app.current = new Application({
      width: refs.el.current.offsetWidth,
      height: refs.el.current.offsetHeight,
      resolution: window.devicePixelRatio,
      antialias: true,
      autoDensity: true,
      transparent: true,
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

    let videoPixiBack
    let videoPixiFront
    if (props.type === 'game') {
      // set elements into scene
      videoPixiBack = setVideo(props.videoBack, refs.containerMasked.current)
      videoPixiFront = setVideo(props.videoFront, refs.containerFront.current)
    }
    setCircles()
    // preload lips
    const loader = new Loader()
    PlayersManager.players.forEach((player, index) => {
      loader.add(`mouth-${index}`, player.mouthPng)
    })
    loader.load((currentLoader, resources) => {
      setMouths(resources)
    })

    if (props.type === 'game') {
      // Videos looping:
      // Force syncronize because RAF is creating an offset between the 2 videos
      videoPixiFront.addEventListener('ended', () => {
        videoPixiBack.currentTime = 0
        videoPixiBack.play()
        videoPixiFront.currentTime = 0
        videoPixiFront.play()
      })
    }

    return () => {
      // destroy app
      refs.app.current.destroy(true, true)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.items])
}

export function useUpdatePowers(refs, props) {
  // update powers
  useEffect(() => {
    // func
    function growCircle(increment) {
      const now = getNow()
      // TODO: grow radius
      const newRadius = refs.radius.current + increment

      setTimeout(() => {
        // when growing animation finish
      }, GROW_ANIMATION_DURATION)
    }

    // init
    PlayersManager.players.forEach((player, index) => {
      if (!props.powers[index]) {
        growCircle(0)
      } else {
        if (props.powers[index].type === 'grow') {
          growCircle(refs.radius.current * CIRCLE_GROWN_RADIUS)
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
  useEffect(() => {
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
        let newPosition
        if (props.powers[index] && props.powers[index].type === 'freeze') {
          // position has to stay and color is gray
          color = hexStToNb(COLORS.blue)
          newPosition = refs.circlesLastPositions.current[index]
        } else {
          newPosition = getDelayedPosition(refs.circlesLastPositions.current[index], props.positions[index])
        }
        refs.circlesLastPositions.current[index] = newPosition
        drawCircles(newPosition, color)
        drawMouths(now, index, newPosition)
      })

      function closeCircle(player, index) {
        if (player.closeMouth) {
          if (!player.mouthIsMoving) {
            const increment = -refs.radius.current * 0.3
            updateRadiusInstantly(increment)
            player.mouthIsMoving = true
          }
        } else if (player.mouthIsMoving === true) {
          updateRadiusInstantly()
          player.mouthIsMoving = false
        }
      }

      function updateRadiusInstantly(increment = 0) {
        const newRadius = refs.radius.current + increment
      }

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

    function drawCircles(position, color) {
      const x = (position.x + 0.5) * refs.initWidth.current
      const y = (position.y + 0.5) * refs.initHeight.current
      // draw masked circles
      refs.circlesMasked.current.beginFill(0xffffff, props.circleAlpha)
      refs.circlesMasked.current.drawEllipse(x, y, refs.radius.current, refs.radius.current)
      refs.circlesMasked.current.endFill()

      // draw border circles
      refs.circlesBorder.current.lineStyle(refs.stroke.current, color, 1)
      refs.circlesBorder.current.drawEllipse(x, y, refs.radius.current, refs.radius.current)
    }

    // draw mouths
    function drawMouths(now, index, position) {
      const player = PlayersManager.players[index]

      refs.mouths.current[index].forEach(mouth => {
        const { x, y } = position

        if (player.startGrowMouthAnimation) {
          const percent = (now - player.startGrowMouthAnimation) / (CIRCLE_MAX_DURATION + 100)

          if (percent < 1) {
            mouth.scale.x = mouth.originScaleX + (mouth.targetScaleX - mouth.originScaleX) * inOutSine(percent)
            mouth.scale.y = mouth.originScaleY + (mouth.targetScaleY - mouth.originScaleY) * inOutSine(percent)

            mouth.offset = mouth.originOffset + (mouth.targetOffset - mouth.originOffset) * inOutSine(percent)
          }
        }

        mouth.position.x = (x + 0.5) * refs.initWidth.current
        mouth.position.y = (y + 0.5) * refs.initHeight.current
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.positions, props.powers])
}

export function useUpdateGameState(refs, props) {
  useEffect(() => {
    if (props.gameState === 'after-game') {
      refs.startTransitionOut.current = getNow()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState])
}

function hexStToNb(str) {
  return parseInt(str.replace(/^#/, ''), 16)
}
