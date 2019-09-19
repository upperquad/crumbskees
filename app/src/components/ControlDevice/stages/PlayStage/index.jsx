import React, { useState, useEffect, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import styles from './style.module.scss'
import MarqueeText from '~components/MarqueeText'
import WebSocketManager from '~managers/WebSocketManager'

const PlayStage = props => {
  const { color, image, score, secondaryColor } = props
  const [isTouching, setIsTouching] = useState(false)

  const [coordX, setCoordX] = useState(0)
  const [coordY, setCoordY] = useState(0)

  let originCoord = {
    x: 0,
    y: 0,
  }

  useEffect(() => {
    const touchStartHandler = event => {
      const { clientX, clientY } = event.touches[0]
      setCoordX(clientX)
      setCoordY(clientY)
      setIsTouching(true)
    }
    window.addEventListener('touchstart', touchStartHandler, { passive: false })

    return () => {
      window.removeEventListener('touchstart', touchStartHandler)
    }
  }, [])

  useEffect(() => {
    const touchMoveHandler = event => {
      event.preventDefault()
      event.stopPropagation()
      const { clientX, clientY } = event.touches[0]
      originCoord.x = clientX
      originCoord.y = clientY
      updatePosition(clientX, clientY, coordX, coordY)
    }
    const touchMoveHandlerThrottle = throttle(50, touchMoveHandler)

    window.addEventListener('touchmove', touchMoveHandlerThrottle, { passive: false })

    return () => {
      window.removeEventListener('touchmove', touchMoveHandler)
    }
  }, [])

  useEffect(() => {
    const touchEndHandler = event => {
      event.stopPropagation()
      setIsTouching(false)
    }
    window.addEventListener('touchend', touchEndHandler, { passive: false })

    return () => {
      window.removeEventListener('touchend', touchEndHandler)
    }
  }, [])

  const updatePosition = (clientX, clientY, originX, originY) => {
    setCoordX(clientX)
    setCoordY(clientY)
    // this.websocket.send(`cursor_move,${(clientX - originX) / window.innerWidth},${(clientY - originY) / window.innerHeight}`)
    WebSocketManager.send(`cursor_move,${(clientX - originX) / window.innerWidth},${(clientY - originY) / window.innerHeight}`)
  }

  return (
    <section className={styles.play}>
      <h2
        className={classNames(styles.title, {
          [styles.titleRed]: secondaryColor === 'red',
          [styles.titlePurple]: secondaryColor === 'purple',
        })}
      >
        The Upperquadrant
      </h2>
      <div
        className={classNames(styles.block, {
          [styles.blockRed]: color === 'red',
          [styles.blockPurple]: color === 'purple',
        })}
      >
        {!!score && <div className={styles.score}>{score}</div>}
        <img className={styles.image} src={image} alt="" />
      </div>
      <MarqueeText extraClassName={styles.marquee} text="What up tiny type that is distracting —" duration="12s" />
      <div
        style={{top: coordY, left: coordX}}
        className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })} />
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}"
       role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
