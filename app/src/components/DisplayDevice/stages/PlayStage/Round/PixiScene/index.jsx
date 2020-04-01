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

import styles from './style.module.scss'

// let scene

const PixiScene = props => {
  const { videoBack, videoFront } = props
  const elRef = useRef()

  // init scene
  useEffect(() => {
    const app = new Application({ width: elRef.current.offsetWidth, height: elRef.current.offsetHeight, resolution: window.devicePixelRatio, antialias: true, autoDensity: true, backgroundColor: 0x00FF00 }) // , backgroundColor: 0xF7F7F7
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

      // videoSprite.alpha = 0.2

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

    // // set scene
    const videoPixiBack = setVideo(videoBack, containerMasked)
    const videoPixiFront = setVideo(videoFront, containerFront)
    // this.setCircle()


    // this.events(true)
    // this.mainEvents(true)
    // this.el.addEventListener('click', () => {
    //   this.textureVideoFront.baseTexture.resource.source.play()
    // })
    //
    // loop videos
    // Force syncro, because loop is creating an offset
    videoPixiFront.addEventListener('ended', () => {
      videoPixiBack.currentTime = 0
      videoPixiBack.play()
      videoPixiFront.currentTime = 0
      videoPixiFront.play()
    })

    return () => {
      console.log('clean up')
      app.destroy()
    }
  }, [videoBack, videoFront])

  return (
    <div className={styles.pixiScene} ref={elRef} />
  )
}

export default PixiScene
