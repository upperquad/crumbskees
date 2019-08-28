import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import character1 from '~assets/images/character1.png'
// import character2 from '~assets/images/character2.png'
import MarqueeText from '~components/MarqueeText'

const PlayStage = () => {
  const character = {
    color: 'purple',
    image: character1,
  }
  const score = ''

  const marqueeText = 'What up tiny type that is distracting —'

  return (
    <section className={styles.inGame}>
      <h2 className={styles.title}>The Upperquadrant</h2>
      <div
        className={classNames(styles.block, {
          [styles.blockRed]: character.color === 'red',
          [styles.blockPurple]: character.color === 'purple',
        })}
      >
        <div className={styles.score}>{score}</div>
        <img className={styles.image} src={character.image} alt="" />
      </div>
      <MarqueeText text={marqueeText} duration="12s" />
      <div className="touch-bubble" />
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}" role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
