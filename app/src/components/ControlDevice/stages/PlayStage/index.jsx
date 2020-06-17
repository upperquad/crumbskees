import React, { useState, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import Button from '~components/Button'
import Character from '~components/Character'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const PlayStage = props => {
  const { character, gameStarted, score } = props
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
    const { clientX, clientY } = event.touches[0]
    updatePosition(clientX, clientY)
    forceUpdate()
  }
  const touchMoveHandlerThrottle = throttle(50, touchMoveHandler)

  const touchEndHandler = () => {
    setIsTouching(false)
  }

  const tapHandler = () => {
    ServerPeer.send('click')
  }

  const onReadyTouch = () => {
    ServerPeer.send('player_ready')
    setReady(true)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section
      className={classNames(styles.play, {
        [styles.isReady]: ready,
        [styles.gameStarted]: gameStarted,
      })}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandlerThrottle}
      onTouchEnd={touchEndHandler}
      onClick={tapHandler}
    >
      <div className={styles.top}>
        {!ready && <Button extraClassName={styles.button} clickHandler={onReadyTouch} text="I’m ready!" />}
        {ready && !gameStarted && (
          <span className={styles.hurryUp}>
            Looks like your friend isn’t ready yet, tell em to hurry up!
          </span>
        )}
        {ready && gameStarted && (
          <div>
            <div className={styles.scoreTitle}>Score</div>
            <div className={styles.score}>{score}</div>
          </div>
        )}
      </div>
      <div className={styles.blockWrapper}>
        <div className={styles.block} />
        <Character
          extraClassName={classNames(styles.character, styles[`character--${character.slug}`])}
          character={character}
          mood="happy"
        />
      </div>
      <div
        style={{ top: coordY.current, left: coordX.current }}
        className={classNames(
          styles.touchBubble,
          styles[`touchBubble--${character.secondaryColor}`],
          { [styles.touchBubbleVisible]: isTouching },
        )}
      />
    </section>
  )
}

export default PlayStage
