import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

const Scene = () => {
  console.log('ok')
  return (
    <div className={styles.scene}>
      <img className={styles.frontBkg} alt="" />
      <img className={styles.reveal} alt="" />
      <div className={styles.wrapper}>
        <svg className={styles.svg} viewBox="0 0 1920 840" stroke="black">
          <defs>
            <clipPath className={styles.svgClipPath}>
              <use xlinkHref="#player1" />
              <use xlinkHref="#player2" />
            </clipPath>
          </defs>
          <path id="player1" className={styles.cursor} strokeWidth="6" />
          <path id="player2" className={styles.cursor} strokeWidth="6" />
          <g className={styles.svgClipPathRef} width="1920px" height="840px">
            <image className={styles.svgImage} width="1920px" height="840px" />
          </g>
        </svg>
      </div>
      <div className={styles.intros}>
        <div className={styles.intro}>
          <div className={classNames(styles.introRound, typography.text200Bold, styles.red)} />
        </div>
        <div className={styles.intro}>
          <div className={styles.introCircle} />
          <div className={classNames(styles.introItemToFind, typography.text200Bold, styles.black)}>
            <div className={classNames(styles.introItemToFindText, typography.text48old)}>
              ITEM
              <br />
              TO FIND
            </div>
          </div>
          <video width="1920px" height="840px" autoPlay loop muted />
        </div>
        <div className={styles.intro}>
          <div className={styles.introReadyWrapper}>
            <div className={classNames(styles.introReady, typography.text200Bold, styles.red)}>
              READY
            </div>
            <div className={classNames(styles.introSet, typography.text200Bold, styles.red)}>
              SET
            </div>
          </div>
          <div className={classNames(styles.introGo, typography.text200Bold, styles.red)}>
            GO
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scene
