import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useZoom } from '~utils/hooks'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'

const TutorialStage = props => {
  const { extraClassName, onFinish } = props
  const [zoom, setZoom] = useState(1)

  useZoom(0.553, setZoom)

  useEffect(PlayersManager.startTutorial, [])

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <div
        className={styles.tutorialInner}
        style={{ transform: `scale(${zoom})` }}
      >
        <h2 className={styles.title} data-text="Here’s the deal:">Here’s the deal:</h2>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              Find the snacks & munch ‘em up.
            </div>
            <div className={styles.description}>
              Use your phone screen to find food and tap the screen to eat it.
              If you’re on your computer, search and click with your mouse instead.
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
    </div>
  )
}

export default TutorialStage
