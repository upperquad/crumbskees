import React, { useState, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'
import MarqueeText from '~components/MarqueeText'
import Button from '~components/Button'
import ServerPeer from '~managers/PeerManager/ServerPeer'


const PlayStage = props => {
  const { color, image, score, secondaryColor } = props
  const [isTouching, setIsTouching] = useState(false)
  const [ready, setReady] = useState(false)
  const forceUpdate = useForceUpdate()

  const coordX = useRef(0)
  const coordY = useRef(0)

  const updatePosition = (clientX, clientY) => {
    const x = (clientX - coordX.current) / window.innerWidth
    const y = (clientY - coordY.current) / window.innerHeight
    ServerPeer.send('cursor_move', { x, y })
    coordX.current = clientX
    coordY.current = clientY
  }

  const touchStartHandler = event => {
    const { clientX, clientY } = event.touches[0]
    coordX.current = clientX
    coordY.current = clientY
    setIsTouching(true)
  }

  const touchMoveHandler = event => {
    event.preventDefault()
    event.stopPropagation()
    const { clientX, clientY } = event.touches[0]
    updatePosition(clientX, clientY)
    forceUpdate()
  }
  const touchMoveHandlerThrottle = throttle(50, touchMoveHandler)

  const touchEndHandler = event => {
    event.stopPropagation()
    setIsTouching(false)
  }

  const tapHandler = event => {
    event.stopPropagation()
    ServerPeer.send('click')
  }

  const onTouchStartButton = () => {
    ServerPeer.send('player_ready')
    setReady(true)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section
      className={styles.play}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandlerThrottle}
      onTouchEnd={touchEndHandler}
      onClick={tapHandler}
    >
      <h2
        className={classNames(styles.title, {
          [styles.titleRed]: secondaryColor === 'red',
          [styles.titlePurple]: secondaryColor === 'purple',
        })}
      >
        The Upperquadrant
      </h2>
      <div onTouchStart={onTouchStartButton}>
        <Button type="mobile" text="ready" ready={ready} />
      </div>
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
        className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })}
      />
    </section>
  )
}

export default PlayStage
