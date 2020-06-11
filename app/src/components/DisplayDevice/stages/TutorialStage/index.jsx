import React from 'react'
import classNames from 'classnames'
// import { TransitionGroup, Transition } from 'react-transition-group'
import styles from './style.module.scss'

import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'

const TutorialStage = props => {
  const { extraClassName, onFinish } = props

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <h2 className={styles.title}>Here’s the deal:</h2>
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
  )
}

export default TutorialStage
