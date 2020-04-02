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
// import PlayersManager from '~managers/PlayersManager'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import { COLORS } from '~constants'

import styles from './style.module.scss'

// globals var
let circlesMasked
let circlesBorder
let playerCursorsUpdated
let app
let elRef
let appWidth
let appHeight

const circleRadius = 50

const PixiScene = props => {
  const { playerCursors, videoBack, videoFront } = props
  elRef = useRef()

  // init scene
  useEffect(() => {
    app = new Application({ width: elRef.current.offsetWidth, height: elRef.current.offsetHeight, resolution: window.devicePixelRatio, antialias: true, autoDensity: true, backgroundColor: 0xFFFFFF }) // , backgroundColor: 0xF7F7F7
    // console.log(this.app.renderer.resolution)

    app.stage.interactive = true

    // Add the canvas that Pixi automatically created for you to the HTML document
    app.view.classList.add(styles.canvas)
    elRef.current.appendChild(app.view)

    const containerFront = new Container()
    const containerMasked = new Container()
    app.stage.addChild(containerFront)
    app.stage.addChild(containerMasked)

    // // set scene
    const videoPixiBack = setVideo(videoBack, containerMasked)
    const videoPixiFront = setVideo(videoFront, containerFront)
    setCircles(containerFront, containerMasked)

    // this.events(true)
    // this.mainEvents(true)
    // loop videos
    // Force syncro, because loop is creating an offset
    videoPixiFront.addEventListener('ended', () => {
      videoPixiBack.currentTime = 0
      videoPixiBack.play()
      videoPixiFront.currentTime = 0
      videoPixiFront.play()
    })

    return () => {
      app.destroy()
    }
  }, [videoBack, videoFront])

  // resize
  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // RAF
  useEffect(() => {
    playerCursorsUpdated = playerCursors
    AnimationFrameManager.addSubscriber(updateFrame)

    return () => {
      AnimationFrameManager.removeSubscriber(updateFrame)
    }
  }, [playerCursors])

  return (
    <div className={styles.pixiScene} ref={elRef} />
  )
}

function setVideo(source, container) {
  const texture = Texture.from(source)
  const videoSprite = new Sprite(texture)

  // videoSprite.alpha = 0.2

  // Stetch the fullscreen
  videoSprite.width = app.screen.width
  videoSprite.height = app.screen.height

  container.addChild(videoSprite)

  texture.baseTexture.resource.autoPlay = true

  const video = texture.baseTexture.resource.source
  video.muted = true

  return video
}

function setCircles(containerFront, containerMasked) {
  circlesMasked = new Graphics()
  // Circle
  containerFront.addChild(circlesMasked)
  // mask container into circle(s)
  containerMasked.mask = circlesMasked

  circlesBorder = new Graphics()
  containerFront.addChild(circlesBorder)
}

function updateFrame() {
  circlesMasked.clear()
  circlesBorder.clear()

  playerCursorsUpdated.forEach(playerCursor => {
    const { color, position } = playerCursor

    const x = (position.x + 0.5) * appWidth
    const y = (position.y + 0.5) * appHeight
    // console.log(position)
    // draw masked circles
    // circlesMasked.lineStyle(10, 0xFFBD01, 1)
    circlesMasked.beginFill(0xFFFFFF, 1)
    // circlesMasked.drawCircle(this.mouse.x, this.mouse.y - this.marginTop, 50)

    circlesMasked.drawCircle(x, y, circleRadius)

    // draw border circles
    const hexNb = hexStToNb(COLORS[color])
    circlesBorder.lineStyle(5, hexNb, 1)
    circlesBorder.drawCircle(x, y, circleRadius)

    if (playerCursor.power === 'freeze') {
      return
    }
  })

  circlesMasked.endFill()

  // const newPosition = getNewPosition(position.current, targetPosition)
  // const newPathD = getPathD(now, points.current, newPosition)
  // position.current = newPosition
  // pathRef.current.setAttribute('d', newPathD).≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥
}

function resizeHandler() {
  if (app) {
    app.view.style.width = `${elRef.current.offsetWidth}px`
    app.view.style.height = `${elRef.current.offsetHeight}px`
    appWidth = elRef.current.offsetWidth
    appHeight = elRef.current.offsetHeight
  }
}

function hexStToNb(str) {
  return parseInt(str.replace(/^#/, ''), 16)
}

export default PixiScene
