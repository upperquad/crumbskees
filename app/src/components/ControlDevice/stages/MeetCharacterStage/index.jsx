import React, { useState, useEffect } from 'react'
import characterVideoWhite1 from '../../../../assets/images/character-white-1.mp4'
import "./style.module.scss"
import "../../../../styles/common/control-device.scss";

const MeetCharacterStage = props => {
  return (
    <section className="character-confirm state is-shown">
      <div className="circle circle--purple"></div>
      <div className="text"><h2>You're in!</h2><p>Say hello to your avatar.</p></div>
      <div className="block">
        <video src={characterVideoWhite1} poster="" autoPlay muted loop></video>
      </div>
      <div className="placeholder"></div>
      <div className="button" role="button" ng-click="phoneCtrl.handleConfirm()">Ready</div>
    </section>
  )
}

export default MeetCharacterStage
