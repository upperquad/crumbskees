import React, { useState, useEffect } from 'react'
import "./style.module.scss"
import characterVideoWhite1 from '../../../../assets/images/character-white-1.mp4'
import characterVideoWhite2 from '../../../../assets/images/character-white-2.mp4'


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
  const resultTop = 'You won!'
  const resultBottom = character.name

  return (
    <section className="result state is-shown">
      <div className={"circle circle--" + (result === 'won' ? character.color : (result === 'lost' ? opponent.color : 'yellow'))}></div>
      <div className={`winner winner--${result}`}>
        <div className="marquee alternate">
          <span className="invert">{resultTop}&nbsp;</span><span>{resultTop}&nbsp;</span><span className="invert">{resultTop}&nbsp;</span><span>{resultTop}&nbsp;</span>
        </div>
        <div className="image-wrapper {{phoneCtrl.result === 'tied' ? 'image-wrapper--both' : null}}">
          {result === 'won' && <video src={characterVideoWhite1} poster={opponent.image} playsInline autoPlay muted loop></video>}
          {result === 'tied' && <video src={characterVideoWhite1} poster={opponent.image} playsInline autoPlay muted loop></video>}
          {result === 'lost' && <video src={characterVideoWhite2} poster={opponent.image} playsInline autoPlay muted loop></video>}
        </div>
        <div className="marquee alternate">
          <span>{resultBottom}&nbsp;</span><span className="invert">{resultBottom}&nbsp;</span><span>{resultBottom}&nbsp;</span><span className="invert">{resultBottom}&nbsp;</span>
        </div>
      </div>
      <div className="small-text">
        {result === 'won' && 'Winner!'}
        {result === 'tied' && 'Tie!'}
      </div>
      <div className="button" ng-click="phoneCtrl.playAgain()">Play again</div>
    </section>
  )
}

export default ResultStage
