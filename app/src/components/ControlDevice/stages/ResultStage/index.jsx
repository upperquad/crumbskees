import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import characterVideoWhite1 from '../../../../assets/images/character-white-1.mp4'
import characterVideoWhite2 from '../../../../assets/images/character-white-2.mp4'

import Circle from '../../Circle'
import MarqueeText from '../../../MarqueeText'
import AutoplayVideo from '../../AutoplayVideo'

const ResultStage = props => {

  const result = 'won'
  const character = {
    name: 'Player 1',
    color: 'red',
    image: '',
    videoWhite: '',
  }
  const opponent = {
    name: 'Player 2',
    color: 'purple',
    image: '',
    videoWhite: '',
  }
  const resultTop = 'You won! '
  const resultBottom = `${character.name} `

  return (
    <section className={styles.result}>
      {result === 'won' && <Circle color={character.color} />}
      {result === 'won' && <Circle color={character.color} />}
      {result === 'tied' && <Circle color="yellow" />}
      <div className={`${styles.winner} ${styles.winner}--${result}`}>
        <MarqueeText text={resultTop} duration='6s' isAlternate isWhite/>
        <div className={styles.imageWrapper}>
          {result === 'won' && <AutoplayVideo src={characterVideoWhite1} extraClassName={styles.video} poster={character.image} />}
          {result === 'tied' && <AutoplayVideo src={characterVideoWhite1} extraClassName={styles.video} poster={character.image} />}
          {result === 'tied' && <AutoplayVideo src={characterVideoWhite2} extraClassName={styles.video} poster={opponent.image} />}
          {result === 'lost' && <AutoplayVideo src={characterVideoWhite2} extraClassName={styles.video} poster={opponent.image} />}
        </div>
        <MarqueeText text={resultBottom} duration='6s' isAlternate isWhite/>
      </div>
      <div className={styles.smallText}>
        {result === 'won' && 'Winner!'}
        {result === 'tied' && 'Tie!'}
      </div>
      <div className={styles.button} ng-click="phoneCtrl.playAgain()">Play again</div>
    </section>
  )
}

export default ResultStage
