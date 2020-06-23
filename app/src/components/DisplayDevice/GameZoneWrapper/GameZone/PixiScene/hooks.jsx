// TODO: this file needs to be optimized
import { useEffect } from 'react'
import { Application, Loader, Sprite, Container, Texture, Graphics } from 'pixi.js'
import { DEBUG, GRID_UNIT, VB_WIDTH } from '~constants'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import PlayersManager from '~managers/PlayersManager'
import getNow from '~utils/time'
import { inOutQuad } from '~utils/ease'

import styles from './style.module.scss'

// circles
const CIRCLE_STROKE_COEF = 0.2
const CIRCLE_BASE_RADIUS = 1.29
const CIRCLE_GROW_RATE = 2.263
const CIRCLE_MOVE_DECELERATION_COEF = 0.15
const CIRCLE_GROW_DECELERATION_COEF = 0.1

// mouths
const MOUTH_SIZE = 3.1

// powers
const CANCEL_GROW_DURATION = 6000
const CANCEL_FREEZE_DURATION = 4000
const ADD_SECONDS = 20

// transitions
const TRANSITION_OUT_DURATION = 1000

const MOUTH_SEQUENCE = [
  500 / 597,
  458 / 597,
  403 / 597,
  347 / 597,
  306 / 597,
  236 / 597,
  236 / 597,
  236 / 597,
  306 / 597,
  347 / 597,
  403 / 597,
  458 / 597,
  500 / 597,
]

const MOUTH_SEQUENCE_LENGTH = MOUTH_SEQUENCE.length

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
      const mouths = []
      PlayersManager.players.forEach((player, index) => {
        const sprite = new Sprite(resources[`mouth-${index}`].texture)
        const ratio = sprite.height / sprite.width
        sprite.width = ((GRID_UNIT * MOUTH_SIZE) / VB_WIDTH) * refs.el.current.offsetWidth
        sprite.height = sprite.width * ratio

        sprite.position.x = 0.5 * refs.el.current.offsetWidth
        sprite.position.y = 0.5 * refs.el.current.offsetHeight

        sprite.anchor.set(0.5, 0.5)

        refs.containerMouth.current.addChild(sprite)
        mouths.push(sprite)

        sprite.initScaleX = sprite.scale.x
        sprite.initScaleY = sprite.scale.y
      })

      refs.playersMouths.current = mouths
    }

    function setCircles() {
      refs.circlesMasked.current = new Graphics()
      // Circle
      refs.containerFront.current.addChild(refs.circlesMasked.current)
      // mask container into circle(s)
      if (props.type === 'game') {
        refs.containerMasked.current.mask = refs.circlesMasked.current
      }

      // TODO: DEBUG only
      refs.circlesBorder.current = new Graphics()
      refs.containerFront.current.addChild(refs.circlesBorder.current)

      // calculate the size the first time, then it will adapt to the auto resize of the scene every time it's drawn
      refs.stroke.current = ((GRID_UNIT * CIRCLE_STROKE_COEF) / VB_WIDTH) * refs.el.current.offsetWidth
      // TODO: clean this up
      refs.radiusBase.current = ((GRID_UNIT * CIRCLE_BASE_RADIUS) / VB_WIDTH) * refs.el.current.offsetWidth

      PlayersManager.players.forEach(() => {
        refs.playersPositions.current.push({ x: 0, y: 0 })
        refs.playersRadii.current.push(1)
        refs.playersTargetRadii.current.push(1)
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
  }, [])
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
    // init
    PlayersManager.players.forEach((player, index) => {
      if (!props.powers[index]) {
        refs.playersTargetRadii.current[index] = 1
      } else {
        if (props.powers[index].type === 'grow') {
          refs.playersTargetRadii.current[index] = CIRCLE_GROW_RATE
        } else if (props.powers[index].type === 'freeze') {
          // TODO: Do nothing? remove this then
        } else if (props.powers[index].type === 'time' && typeof props.setTime === 'function') {
          props.setTime(time => time + ADD_SECONDS)
        }

        if (props.powers[index].type) {
          const timeout = setTimeout(
            () => props.cancelPower(index),
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
      if (!refs.playersMouths.current) {
        return
      }

      refs.circlesMasked.current.clear()
      refs.circlesBorder.current.clear()

      PlayersManager.players.forEach((player, index) => {
        const currentPosition = refs.playersPositions.current[index]
        const targetPosition = props.targetPositions[index]
        const currentRadius = refs.playersRadii.current[index]
        const targetRadius = refs.playersTargetRadii.current[index]
        let radius = currentRadius

        if (!props.powers[index] || props.powers[index].type !== 'freeze') {
          currentPosition.x = interpolate(currentPosition.x, targetPosition.x, CIRCLE_MOVE_DECELERATION_COEF)
          currentPosition.y = interpolate(currentPosition.y, targetPosition.y, CIRCLE_MOVE_DECELERATION_COEF)
          radius = interpolate(currentRadius, targetRadius, CIRCLE_GROW_DECELERATION_COEF)
          refs.playersRadii.current[index] = radius
        }

        const x = (currentPosition.x + 0.5) * refs.initWidth.current
        const y = (currentPosition.y + 0.5) * refs.initHeight.current

        let mouthHeightRatio = MOUTH_SEQUENCE[0]
        if (player.closeMouth) {
          mouthHeightRatio = MOUTH_SEQUENCE[player.mouthSequence]
          player.mouthSequence += 1
          if (player.mouthSequence === MOUTH_SEQUENCE_LENGTH) {
            player.mouthSequence = 0
            player.closeMouth = false
          }
        }

        // draw masked circle
        refs.circlesMasked.current.beginFill(0xffffff, props.circleAlpha)
        refs.circlesMasked.current.drawEllipse(
          x,
          y,
          radius * refs.radiusBase.current,
          radius * mouthHeightRatio * refs.radiusBase.current,
        )
        refs.circlesMasked.current.endFill()

        // draw border circle
        refs.circlesBorder.current.lineStyle(refs.stroke.current, 0xff0000, 1)
        refs.circlesBorder.current.drawEllipse(
          x,
          y,
          radius * refs.radiusBase.current,
          radius * mouthHeightRatio * refs.radiusBase.current,
        )

        // update mouth position
        const mouth = refs.playersMouths.current[index]
        const mouthScale = mouth.initScaleX * radius
        mouth.position.x = x
        mouth.position.y = y
        mouth.scale.x = mouthScale
        mouth.scale.y = mouthScale
      })

      // draw transition out rect
      if (refs.startTransitionOut.current > 0) {
        drawTransitionOut(now)
      }
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
  }, [props.targetPositions, props.powers])
}

export function useUpdateGameState(refs, props) {
  useEffect(() => {
    if (props.gameState === 'after-game') {
      refs.startTransitionOut.current = getNow()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gameState])
}

function interpolate(current, target, coef) {
  if (current === target) {
    return current
  }

  if (target - current >= 0.005 && target - current <= 0.005) {
    return target
  }

  return current + (target - current) * coef
}
