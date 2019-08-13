import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import MarqueeText from '../../../MarqueeText'
import DisplayFooter from '../../../DisplayFooter'

import homeBgVideo from '../../../../assets/images/home-bg.mp4'

const SetupStage = props => {
  return (
    <div className={styles.setup}>
      <video className={styles.video} src={homeBgVideo} playsInline autoPlay muted loop />
      <MarqueeText extraClassName={styles.pullOutPhone} text='Pull out yo smartphone camera! -&nbsp;' duration='6s' />
      <div className={styles.players}>
        {[0, 1].map(number => (
          <div key={number} className={styles.player}>
            <div className={styles.qrWrapper}>
              <div className={styles.qr}></div>
              <div className={styles.playerConnected}><span>Connected!</span></div>
            </div>
            <div className={styles.playerName}>
              Player {number + 1}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.instruction}>
        <span className={styles.instructionText}>Your smart phone will be your control pad. Open your camera app and scan the code!</span>
        <div className={styles.letsPlay}>LETS PLAY</div>
      </div>
      <DisplayFooter />
    </div>
  )
}

export default SetupStage
