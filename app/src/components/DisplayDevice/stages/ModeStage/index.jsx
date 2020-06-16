import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

const ModeStage = props => {
  const { extraClassName, onFinish } = props

  function handleClick(mode) {
    PlayersManager.init(mode)

    onFinish()
  }

  return (
    <div className={classNames(styles.mode, extraClassName)}>
      <MarqueeText extraClassName={styles.welcome} text="Welcome to The Upperquadrant -" duration="12s" />
      <div className={styles.modeCard}>
        <div className={styles.modeHeader}>Select mode</div>
        <div className={styles.modeContent}>
          <div className={styles.modeOption} onClick={() => { handleClick('SINGLE_PLAYER') }}>Single player</div>
          <div className={styles.modeOption} onClick={() => { handleClick('TWO_PLAYERS') }}>Two players</div>
        </div>
      </div>
    </div>
  )
}

export default ModeStage
