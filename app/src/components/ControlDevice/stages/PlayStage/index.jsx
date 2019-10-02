import React, { useState, useEffect, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'
import MarqueeText from '~components/MarqueeText'
import WebSocketManager from '~managers/WebSocketManager'

const PlayStage = props => {
  const { color, onFinish, image, score, secondaryColor } = props
  const [isTouching, setIsTouching] = useState(false)
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { type } } = event
      switch (type) {
        case 'result': {
          onFinish()
        }
      }
    }
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [])

  const coordX = useRef(0)
  const coordY = useRef(0)

  const updatePosition = (clientX, clientY) => {
    const x = (clientX - coordX.current) / window.innerWidth
    const y = (clientY - coordY.current) / window.innerHeight
    WebSocketManager.send('cursor_move', { x, y })
    coordX.current = clientX
    coordY.current = clientY
  }

  useEffect(() => {
    const touchStartHandler = event => {
      const { clientX, clientY } = event.touches[0]
      coordX.current = clientX
      coordY.current = clientY
      setIsTouching(true)
      WebSocketManager.send('click', { x: clientX, y: clientY })
    }
    window.addEventListener('touchstart', touchStartHandler, { passive: false })

    return () => {
      window.removeEventListener('touchstart', touchStartHandler)
    }
  }, [setIsTouching])

  useEffect(() => {
    const touchMoveHandler = event => {
      event.preventDefault()
      event.stopPropagation()
      const { clientX, clientY } = event.touches[0]
      updatePosition(clientX, clientY)
      forceUpdate()
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
        style={{ top: coordY.current, left: coordX.current }}
        className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })} />
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}"
       role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
