import React, { useEffect, useRef } from 'react'
import {
  Application,
  Sprite,
  WRAP_MODES,
  Container,
  Loader,
  Texture,
  Graphics,
} from 'pixi.js'
// import PlayersManager from '~managers/PlayersManager'
import AnimationFrameManager from '~managers/AnimationFrameManager'

import styles from './style.module.scss'

// globals var
let circles

const PixiScene = props => {
  const { playerCursors, videoBack, videoFront } = props
  const elRef = useRef()

  // init scene
  useEffect(() => {
    const app = new Application({ width: elRef.current.offsetWidth, height: elRef.current.offsetHeight, resolution: window.devicePixelRatio, antialias: true, autoDensity: true, backgroundColor: 0xFFFFFF }) // , backgroundColor: 0xF7F7F7
    // console.log(this.app.renderer.resolution)

    app.stage.interactive = true

    // Add the canvas that Pixi automatically created for you to the HTML document
    app.view.classList.add(styles.canvas)
    elRef.current.appendChild(app.view)

    const containerFront = new Container()
    const containerMasked = new Container()
    app.stage.addChild(containerFront)
    app.stage.addChild(containerMasked)

    const setVideo = (source, container) => {
      const texture = Texture.from(source)
      const videoSprite = new Sprite(texture)

      videoSprite.alpha = 0.2

      // Stetch the fullscreen
      videoSprite.width = app.screen.width
      videoSprite.height = app.screen.height

      container.addChild(videoSprite)

      texture.baseTexture.resource.autoPlay = true

      const video = texture.baseTexture.resource.source
      // video.loop = true
      video.muted = true

      // texture.baseTexture.on('loaded', () => {
      //   console.log('finish loaded')
      //   video.pause()
      //   // pauseVideo(video.baseTexture.source)
      // })

      return video
    }

    const setCircles = () => {
      circles = new Graphics()
      // Circle
      // this.drawCircle()

      containerFront.addChild(circles)
      // mask container into circle(s)
      containerMasked.mask = circles
    }

    // // set scene
    const videoPixiBack = setVideo(videoBack, containerMasked)
    const videoPixiFront = setVideo(videoFront, containerFront)
    setCircles()

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

    console.log('create app')

    return () => {
      console.log('clean up')
      app.destroy()
    }
  }, [videoBack, videoFront])

  // on RAF, update when change position
  useEffect(() => {
    const updateFrame = () => {
      circles.clear()

      playerCursors.forEach(playerCursor => {
        circles.lineStyle(10, 0xFFBD01, 1)
        circles.beginFill(0xC34288, 1)
        // circles.drawCircle(this.mouse.x, this.mouse.y - this.marginTop, 50)
        circles.drawCircle(300, 300, 50)
        if (playerCursor.power === 'freeze') {
          return
        }
      })

      circles.endFill()

      // const newPosition = getNewPosition(position.current, targetPosition)
      // const newPathD = getPathD(now, points.current, newPosition)
      // position.current = newPosition
      // pathRef.current.setAttribute('d', newPathD)
    }

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
