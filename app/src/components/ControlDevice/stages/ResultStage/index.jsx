import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import characterVideoWhite1 from '../../../../assets/images/character-white-1.mp4'
import characterVideoWhite2 from '../../../../assets/images/character-white-2.mp4'

import Circle from '../../Circle'
import MarqueeText from '../../../MarqueeText'

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
        <MarqueeText text={resultTop} duration='6s' alternate/>
        <div className={styles.imageWrapper}>
        {/* <div className="image-wrapper {{phoneCtrl.result === 'tied' ? 'image-wrapper--both' : null}}"> */}
          {result === 'won' && <video src={characterVideoWhite1} poster={opponent.image} playsInline autoPlay muted loop></video>}
          {result === 'tied' && <video src={characterVideoWhite1} poster={opponent.image} playsInline autoPlay muted loop></video>}
          {result === 'lost' && <video src={characterVideoWhite2} poster={opponent.image} playsInline autoPlay muted loop></video>}
        </div>
        <MarqueeText text={resultBottom} duration='6s' alternate/>
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
