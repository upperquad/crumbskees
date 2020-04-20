import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

import MarqueeText from '~components/MarqueeText'
import DisplayFooter from '~components/DisplayFooter'
import AutoplayVideo from '~components/AutoplayVideo'

import homeBgVideo from '~assets/images/home-bg.mp4'

const ModeStage = props => {
  const { extraClassName, onFinish } = props

  function handleClick(mode) {
    PlayersManager.init(mode)

    onFinish()
  }

  return (
    <div className={classNames(styles.mode, extraClassName)}>
      <AutoplayVideo extraClassName={styles.video} src={homeBgVideo} />
      <MarqueeText extraClassName={styles.welcome} text="Welcome to The Upperquadrant -" duration="12s" />
      <div className={styles.modeCard}>
        <div className={styles.modeHeader}>Select mode</div>
        <div className={styles.modeContent}>
          <div className={styles.modeOption} onClick={() => { handleClick('SINGLE_PLAYER') }}>Single player</div>
          <div className={styles.modeOption} onClick={() => { handleClick('TWO_PLAYERS') }}>Two players</div>
        </div>
      </div>
      <DisplayFooter />
    </div>
  )
}

export default ModeStage
