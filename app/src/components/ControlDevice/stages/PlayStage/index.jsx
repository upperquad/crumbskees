import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import MarqueeText from '~components/MarqueeText'

const PlayStage = props => {
  const { color, image, score, secondaryColor } = props
  const [isTouching, setIsTouching] = useState(false)

  return (
    <section className={styles.play}>
      <h2
        className={classNames(styles.title, {
          [styles.titleRed]: secondaryColor === 'red',
          [styles.titlePurple]: secondaryColor === 'purple',
        })}
      >
        The Upperquadrant
      </h2>
      <div
        className={classNames(styles.block, {
          [styles.blockRed]: color === 'red',
          [styles.blockPurple]: color === 'purple',
        })}
      >
        {!!score && <div className={styles.score}>{score}</div>}
        <img className={styles.image} src={image} alt="" />
      </div>
      <MarqueeText extraClassName={styles.marquee} text="What up tiny type that is distracting —" duration="12s" />
      <div className={classNames(styles.touchBubble, { [styles.touchBubbleVisible]: isTouching })} />
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}"
       role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
