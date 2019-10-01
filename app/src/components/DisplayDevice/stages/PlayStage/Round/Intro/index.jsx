import React, { Fragment } from 'react'
import styles from './style.module.scss'

import { VB_WIDTH, VB_HEIGHT } from '~constants'

const Intro = () => (
  <Fragment>
    <div className={styles.intros}>
      <div className={styles.intro}>
        <div className={styles.introRound} />
      </div>
      <div className={styles.intro}>
        <div className={styles.introCircle} />
        <div className={styles.introItemToFind}>
          <div className={styles.introItemToFindText}>
            Item
            <br />
            to find
          </div>
        </div>
        <video width={`${VB_WIDTH}px`} height={`${VB_HEIGHT}px`} autoPlay loop muted />
      </div>
      <div className={styles.intro}>
        <div className={styles.introReadyWrapper}>
          <div className={styles.introReady}>Ready</div>
          <div className={styles.introSet}>Set</div>
        </div>
        <div className={styles.introGo}>Go</div>
      </div>
    </div>
    <img src="" className={styles.itemToFind} alt="" />
  </Fragment>
)

export default Intro
