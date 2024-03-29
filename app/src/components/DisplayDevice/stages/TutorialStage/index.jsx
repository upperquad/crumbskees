import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useZoom } from '~utils/hooks'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import SoundManager from '~managers/SoundManager'

import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'
import MuteButton from '~components/MuteButton'

const TutorialStage = props => {
  const { allConnected, extraClassName, onCancel, onFinish, rollback } = props
  const [zoom, setZoom] = useState(1)

  useZoom(0.575, setZoom)

  useEffect(() => {
    SoundManager.playMusic('setup')
  }, [])

  // TODO: this should happen every 5 seconds or something just to be safe
  useEffect(PlayersManager.startTutorial, [])

  useEffect(() => {
    if (PlayersManager.mode === 'DUAL' && !allConnected) {
      rollback()
    }
  }, [allConnected, rollback])

  const instructionText = PlayersManager.mode === 'DUAL' ?
    'Use your phone screen to find food and tap the screen to eat it.' :
    'Use your mouse to find food and click to eat it.'

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <div
        className={styles.tutorialInner}
        style={{ transform: `scale(${zoom})` }}
      >
        <div
          className={styles.backButton}
          onClick={onCancel}
        >
          <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5.92126V10.0787H7.78533V16L0 7.979L7.78533 0V5.92126H15Z" fill="black" />
          </svg>
          Back
        </div>
        <h2 className={styles.title} data-text="Here’s the deal:">Here’s the deal:</h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              Find the snacks & munch ‘em up.
            </div>
            <div className={styles.description}>
              {instructionText}
            </div>
            <div className={styles.heading}>
              Go as fast as you can!
            </div>
            <div className={styles.description}>
              It’s a race. There are a few hidden power-ups that will help you
              get ahead. And some rotten stinkers that’ll make you fall behind.
            </div>
          </div>
          <GameZoneWrapper onFinish={onFinish} type="tutorial" />
        </div>
      </div>
      <MuteButton extraClassName={styles.muteButton} />
    </div>
  )
}

export default TutorialStage
