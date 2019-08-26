import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '../../../MarqueeText'

import resultBg from '../../../../assets/images/round_3/r3-intro.mp4'

const ResultStage = props => {
  return (
    <div className={styles.result}>
      <video className={styles.background} loop autoPlay muted src={resultBg} />
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <MarqueeText extraClassName={styles.title} text='winner!' duration='5s' />
        </div>
        <div class="final__player text-40--bold uppercase"></div>
        <div class="final__players-img">
          <img src="../../assets/game/images/character1.png" class="final__player-img" />
        </div>
        <div class="final__score text-120--bold">37</div>
        <div class="final__circle" />
        <div className={classNames(styles.timebar, styles.resultTimebar)} />
      </div>
    </div>
  )
}

export default ResultStage
