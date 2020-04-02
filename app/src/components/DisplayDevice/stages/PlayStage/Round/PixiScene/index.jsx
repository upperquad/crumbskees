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
import { COLORS, GRID_UNIT, VB_WIDTH } from '~constants'

import styles from './style.module.scss'

const PixiScene = props => {
  const { items, playerCursors, videoBack, videoFront } = props
  // re-used references through hooks
  const elRef = useRef()
  const app = useRef()
  // keep the width and height the first time the app is initiated
  // the autoresizing of pixi is handling the rest, no need to update with new width/height
  const initWidth = useRef()
  const initHeight = useRef()
  const circlesMasked = useRef()
  const circlesBorder = useRef()
  const circlesSize = useRef()
  const circlesStroke = useRef()
  const containerMasked = useRef()
  const containerFront = useRef()

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
      circlesSize.current = (GRID_UNIT / VB_WIDTH) * elRef.current.offsetWidth
      circlesStroke.current = ((GRID_UNIT * 0.083) / VB_WIDTH) * elRef.current.offsetWidth
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

    // // set scene
    const videoPixiBack = setVideo(videoBack, containerMasked.current)
    const videoPixiFront = setVideo(videoFront, containerFront.current)
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
    // funcs
    function setItem(item) {
      const sprite = Sprite.from(item.image)
      sprite.height = (item.size / VB_WIDTH) * initWidth.current
      sprite.width = (item.size / VB_WIDTH) * initWidth.current

      sprite.position.x = item.x * initWidth.current
      sprite.position.y = item.y * initHeight.current

      sprite.anchor.set(0.5, 0.5)

      containerFront.current.addChild(sprite)

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
        containerFront.current.removeChild(sprite)
      })
    }
  }, [items])

  // RAF
  useEffect(() => {
    // funcs
    function updateFrame() {
      circlesMasked.current.clear()
      circlesBorder.current.clear()

      playerCursors.forEach(playerCursor => {
        const { color, position } = playerCursor

        const x = (position.x + 0.5) * initWidth.current
        const y = (position.y + 0.5) * initHeight.current
        // console.log(position)
        // draw masked circles
        // circlesMasked.current.lineStyle(10, 0xFFBD01, 1)
        circlesMasked.current.beginFill(0xFFFFFF, 1)
        // circlesMasked.current.drawCircle(this.mouse.x, this.mouse.y - this.marginTop, 50)
        //

        circlesMasked.current.drawCircle(x, y, circlesSize.current)

        // draw border circles
        const hexNb = hexStToNb(COLORS[color])
        circlesBorder.current.lineStyle(circlesStroke.current, hexNb, 1)
        circlesBorder.current.drawCircle(x, y, circlesSize.current)

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
