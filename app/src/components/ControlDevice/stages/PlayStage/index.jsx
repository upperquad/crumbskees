import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import MarqueeText from '~components/MarqueeText'

const PlayStage = props => {
  const { color, image, score, secondaryColor } = props
  const [isTouching, setIsTouching] = useState(false)
  const touchpadRef = useRef(null)
  const touchBubbleRef = useRef(null)

  let originCoord = {
    x: 0,
    y: 0,
  }

  useEffect(() => {
    const touchStartHandler = event => {
      // event.stopPropagation()
      console.log('touchstart')
      const { clientX, clientY } = event.touches[0]
      originCoord.x = clientX
      originCoord.y = clientY
      updateBubble(clientX, clientY)
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
      const { x: originX, y: originY } = originCoord
      const { clientX, clientY } = event.touches[0]
      originCoord.x = clientX
      originCoord.y = clientY
      updatePosition(clientX, clientY, originX, originY)
    }
    window.addEventListener('touchmove', touchMoveHandler, { passive: false })

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

  const updateBubble = (clientX, clientY) => {
    touchBubbleRef.current.style.left = `${clientX}px`
    touchBubbleRef.current.style.top = `${clientY}px`
  }

  const updatePosition = (clientX, clientY, originX, originY) => {
    updateBubble(clientX, clientY)
    // this.websocket.send(`cursor_move,${(clientX - originX) / window.innerWidth},${(clientY - originY) / window.innerHeight}`)
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
        ref={touchpadRef}
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
        ref={touchBubbleRef}
        className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })} />
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}"
       role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
