import React, { useState, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'
import Button from '~components/Button'
import ServerPeer from '~managers/PeerManager/ServerPeer'


const PlayStage = props => {
  const { image, score } = props
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

  const onReadyTouch = () => {
    ServerPeer.send('player_ready')
    setReady(true)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section className={styles.play}>
      <Button clickHandler={onReadyTouch} text="Ready" isLit={ready} />
      <div
        className={styles.touchZone}
        onTouchStart={touchStartHandler}
        onTouchMove={touchMoveHandlerThrottle}
        onTouchEnd={touchEndHandler}
        onClick={tapHandler}
      >
        <div
          className={classNames(styles.block, {
            // [styles.blockRed]: color === 'red',
            // [styles.blockPurple]: color === 'purple',
          })}
        >
          {!!score && <div className={styles.score}>{score}</div>}
          <img className={styles.image} src={image} alt="" />
        </div>
        <div
          style={{ top: coordY.current, left: coordX.current }}
          className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })}
        />
      </div>
    </section>
  )
}

export default PlayStage
