import React, { useState, useEffect } from 'react'
import characterVideoWhite1 from '../../../../assets/images/character-white-1.mp4'
import characterVideoWhite2 from '../../../../assets/images/character-white-2.mp4'
import "./style.module.scss"
import "../../../../styles/common/control-device.scss";
import Circle from '../../Circle'

const MeetCharacterStage = props => {

const character = {
  color: 'purple',
  video: characterVideoWhite1
}

  return (
    <section className="character-confirm state is-shown">
      <Circle color={character.color} />
      <div className="text"><h2>You're in!</h2><p>Say hello to your avatar.</p></div>
      <div className="block">
        <video src={character.video} poster="" autoPlay muted loop></video>
      </div>
      <div className="placeholder"></div>
      <div className="button" role="button" ng-click="phoneCtrl.handleConfirm()">Ready</div>
    </section>
  )
}

export default MeetCharacterStage
