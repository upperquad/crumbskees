import React from 'react'
import classNames from 'classnames'
// import { TransitionGroup, Transition } from 'react-transition-group'
import styles from './style.module.scss'

import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'

import imageHelper from '~assets/images/tutorial/helper.png'

const TutorialStage = props => {
  const { extraClassName, onFinish } = props

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.title}>warm up!</div>
          <div className={styles.description}>
            Practice using your phone or your mouse to catch the objects before the time runs out by clicking or tapping
            them! Hit play when you’re ready. Find powerups to help!
          </div>
          <img className={styles.image} src={imageHelper} alt="" />
        </div>
        <GameZoneWrapper onFinish={onFinish} type="tutorial" />
      </div>
    </div>
  )
}

export default TutorialStage
