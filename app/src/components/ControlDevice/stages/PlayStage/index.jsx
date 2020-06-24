import React, { useState, useRef } from 'react'
import { throttle } from 'throttle-debounce'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import Button from '~components/Button'
import Character from '~components/Character'
import Lottie from '~components/Lottie'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const PlayStage = props => {
  const { character, gameStarted, score } = props
  const [showInstruction, setShowInstruction] = useState(true)
  const [isTouching, setIsTouching] = useState(false)
  const [ready, setReady] = useState(false)
  const forceUpdate = useForceUpdate()

  const isMovedSinceTouchStart = useRef(false)
  const isClickSentSinceTouchStart = useRef(false)

  const coordX = useRef(0)
  const coordY = useRef(0)

  const hideInstruction = () => setShowInstruction(false)

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
    isMovedSinceTouchStart.current = false
    isClickSentSinceTouchStart.current = false
  }

  const touchMoveHandler = event => {
    event.preventDefault()
    const { clientX, clientY } = event.touches[0]
    updatePosition(clientX, clientY)
    forceUpdate()
    isMovedSinceTouchStart.current = true
  }
  const touchMoveHandlerThrottle = throttle(200, touchMoveHandler)

  const touchEndHandler = () => {
    setIsTouching(false)

    if (!isMovedSinceTouchStart.current) {
      ServerPeer.send('click')
      isClickSentSinceTouchStart.current = true
    }
  }

  const tapHandler = event => {
    event.preventDefault()

    if (!isClickSentSinceTouchStart.current) {
      ServerPeer.send('click')
    }
  }

  const onReadyTouch = () => {
    ServerPeer.send('player_ready')
    setReady(true)
  }

  const zeroUnitScore = zeroUnit(score)

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <section
      className={classNames(styles.play, {
        [styles.isReady]: ready,
        [styles.isGameStarted]: gameStarted,
      })}
      onTouchStart={showInstruction ? hideInstruction : touchStartHandler}
      onTouchMove={showInstruction ? null : touchMoveHandlerThrottle}
      onTouchEnd={showInstruction ? null : touchEndHandler}
      onClick={showInstruction ? hideInstruction : tapHandler}
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
            <div className={styles.score} data-text={zeroUnitScore}>{zeroUnitScore}</div>
          </div>
        )}
      </div>
      <div className={styles.blockWrapper}>
        <div className={styles.block} />
        {!showInstruction && (
          <Character
            extraClassName={classNames(styles.character, styles[`character--${character.slug}`])}
            character={character}
            mood="happy"
          />
        )}
      </div>
      <div
        style={{ top: coordY.current, left: coordX.current }}
        className={classNames(
          styles.touchBubble,
          styles[`touchBubble--${character.secondaryColor}`],
          { [styles.touchBubbleVisible]: isTouching },
        )}
      />
      {showInstruction && (
        <div className={styles.instruction}>
          <img className={styles.instructionMouth} src={character.mouth} alt="" />
          <h2
            className={styles.instructionTitle}
            data-text="Use your finger to move your mouth."
          >
            Use your finger to move your mouth.
          </h2>
          <p className={styles.instructionSubtitle}>When you’re ready to chomp on a snack, tap the screen!</p>
          <Lottie extraClassName={styles.instructionFinger} data={character.finger} />
        </div>
      )}
    </section>
  )
}

function zeroUnit(number) {
  if (number < 0) {
    return '00'
  }
  return number < 10 ? `0${number}` : number
}

export default PlayStage
