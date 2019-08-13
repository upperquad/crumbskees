import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import character1 from '../../../../assets/images/character1.png'

const PlayStage = props => {
  return (
    <section id="touchpad" className="in-game state is-shown">
      <h2 className="color--red">The Upperquadrant</h2>
      <div className="block block--purple">
        <div className="score">

        </div>
        <img src={character1} />
      </div>
      <div className="marquee"><span>What up tiny type that is distracting —&nbsp;</span><span>What up tiny type that is distracting —&nbsp;</span><span>What up tiny type that is distracting —&nbsp;</span><span>What up tiny type that is distracting —&nbsp;</span></div>
      <div className="touch-bubble" id="touch-bubble"></div>
      {/* <div className="button skip-tutorial" ng-className="{'is-shown': (phoneCtrl.tutorialActive === true)}" role="button" ng-click="phoneCtrl.skipTutorial()">Skip tutorial</div> */}
    </section>
  )
}

export default PlayStage
