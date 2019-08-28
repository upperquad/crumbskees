import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'

import resultBg from '~assets/images/round_3/r3-intro.mp4'
import characterImage1 from '~assets/images/character1.png'

const ResultStage = () => (
  <div className={styles.result}>
    <video className={styles.background} loop autoPlay muted src={resultBg} />
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <MarqueeText extraClassName={styles.title} text="winner!" isAlternate isWhite duration="5s" />
      </div>
      <div className={styles.player}>TODO: Player 1</div>
      <div className={classNames(styles.playersImages, { [styles.playersImagesTied]: false })}>
        <img src={characterImage1} className={styles.playerAvatar} alt="" />
      </div>
      <div className={styles.score}>37</div>
      <div className={styles.circle} />
      <div className={classNames(styles.timebar, styles.resultTimebar)} />
    </div>
  </div>
)


export default ResultStage
