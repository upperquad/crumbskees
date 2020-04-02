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
const circleRadius = 50
const circleLineStroke = 5

const PixiScene = props => {
  const { playerCursors, videoBack, videoFront } = props
  const elRef = useRef()
  const app = useRef()
  const appWidth = useRef()
  const appHeight = useRef()
  const circlesMasked = useRef()
  const circlesBorder = useRef()

  // init scene
  useEffect(() => {
    // funcs
    function setVideo(source, container) {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

      videoSprite.alpha = 0.2

      // Stetch the fullscreen
      videoSprite.width = app.current.screen.width
      videoSprite.height = app.current.screen.height

      container.addChild(videoSprite)

      texture.baseTexture.resource.autoPlay = true

      const video = texture.baseTexture.resource.source
      video.muted = true

      return video
    }

    function setCircles(containerFront, containerMasked) {
      circlesMasked.current = new Graphics()
      // Circle
      containerFront.addChild(circlesMasked.current)
      // mask container into circle(s)
      containerMasked.mask = circlesMasked.current

      circlesBorder.current = new Graphics()
      containerFront.addChild(circlesBorder.current)
    }

    // init
    app.current = new Application({ width: elRef.current.offsetWidth, height: elRef.current.offsetHeight, resolution: window.devicePixelRatio, antialias: true, autoDensity: true, backgroundColor: 0xFFFFFF }) // , backgroundColor: 0xF7F7F7
    // console.log(this.app.currentrenderer.resolution)

    app.current.stage.interactive = true

    // Add the canvas that Pixi automatically created for you to the HTML document
    app.current.view.classList.add(styles.canvas)
    elRef.current.appendChild(app.current.view)

    const containerFront = new Container()
    const containerMasked = new Container()
    app.current.stage.addChild(containerFront)
    app.current.stage.addChild(containerMasked)

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
      app.current.destroy()
    }
  }, [videoBack, videoFront])

  // resize
  useEffect(() => {
    // funcs
    function resizeHandler() {
      if (app) {
        app.current.view.style.width = `${elRef.current.offsetWidth}px`
        app.current.view.style.height = `${elRef.current.offsetHeight}px`
        appWidth.current = elRef.current.offsetWidth
        appHeight.current = elRef.current.offsetHeight
      }
    }

    // init
    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // RAF
  useEffect(() => {
    // funcs
    function updateFrame() {
      circlesMasked.current.clear()
      circlesBorder.current.clear()

      playerCursors.forEach(playerCursor => {
        const { color, position } = playerCursor

        const x = (position.x + 0.5) * appWidth.current
        const y = (position.y + 0.5) * appHeight.current
        // console.log(position)
        // draw masked circles
        // circlesMasked.current.lineStyle(10, 0xFFBD01, 1)
        circlesMasked.current.beginFill(0xFFFFFF, 1)
        // circlesMasked.current.drawCircle(this.mouse.x, this.mouse.y - this.marginTop, 50)

        circlesMasked.current.drawCircle(x, y, circleRadius)

        // draw border circles
        const hexNb = hexStToNb(COLORS[color])
        circlesBorder.current.lineStyle(circleLineStroke, hexNb, 1)
        circlesBorder.current.drawCircle(x, y, circleRadius)

        if (playerCursor.power === 'freeze') {
          return
        }
      })

      circlesMasked.current.endFill()

      // const newPosition = getNewPosition(position.current, targetPosition)
      // const newPathD = getPathD(now, points.current, newPosition)
      // position.current = newPosition
      // pathRef.current.setAttribute('d', newPathD).≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥
    }

    // init
    AnimationFrameManager.addSubscriber(updateFrame)

    return () => {
      AnimationFrameManager.removeSubscriber(updateFrame)
    }
  }, [playerCursors])

  return (
    <div className={styles.pixiScene} ref={elRef} />
  )
}

function hexStToNb(str) {
  return parseInt(str.replace(/^#/, ''), 16)
}

export default PixiScene
