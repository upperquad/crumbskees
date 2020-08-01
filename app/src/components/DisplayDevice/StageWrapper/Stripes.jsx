import React, { useEffect, useRef } from 'react'
import { Application, Graphics } from 'pixi.js'
import styles from './style.module.scss'

const Stripes = () => {
  const canvas = useRef(null)

  useEffect(() => {
    const baseWidth = window.innerWidth
    const baseHeight = window.innerHeight

    const app = new Application({
      width: baseWidth,
      height: baseHeight,
      resolution: window.devicePixelRatio,
      antialias: true,
      autoDensity: true,
      transparent: true,
      view: canvas.current,
    })

    // total animation time is 1.6 second, 96 (60 * 1.6) frames
    // stroke : stripe = 1 : 28
    const stripeWidth = 3 * baseWidth
    const stripeGap = 0.2 * baseWidth
    const stripeHeight = (28 / (28 * 9 + 10 * 1)) * baseHeight
    const stripeStroke = (1 / (28 * 9 + 10 * 1)) * baseHeight
    const stripeRadius = stripeHeight / 2
    const movementPerFrame = (stripeWidth + stripeGap * 8 + baseWidth) / 96
    const stripes = [
      0x3f1bd0, // purple
      0xec504f, // red
      0xff9d21, // orange
      0xffe945, // yellow
      0xf4b7ed, // pink
      0x3f1bd0, // purple
      0xec504f, // red
      0xff9d21, // orange
      0xffe945, // yellow
    ]

    const graphics = new Graphics()

    app.stage.addChild(graphics)

    let currentFrame = 0

    app.ticker.add(deltaFrames => {
      graphics.clear()

      stripes.forEach((stripe, index) => {
        const stripeX = -stripeWidth - index * stripeGap + movementPerFrame * currentFrame
        const stripeY = stripeStroke + index * (stripeStroke + stripeHeight)
        graphics.beginFill(0x0)
        graphics.drawRoundedRect(
          stripeX - stripeStroke,
          stripeY - stripeStroke,
          stripeWidth + stripeStroke * 2,
          stripeHeight + stripeStroke * 2,
          stripeRadius,
        )
        graphics.endFill()
        graphics.beginFill(stripe)
        graphics.drawRoundedRect(
          stripeX,
          stripeY,
          stripeWidth,
          stripeHeight,
          stripeRadius,
        )
        graphics.endFill()
      })

      currentFrame += deltaFrames
    })

    return () => app.destroy(false, true)
  }, [])

  return <canvas ref={canvas} className={styles.stripes} />
}

export default Stripes
