import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

const MeetCharacterStage = props => {
  console.log(styles.characterConfirm)
  return (
    <section className={styles.characterConfirm}>
      <div className="circle circle--purple"></div>
      <div className="text"><h2>You're in!</h2><p>Say hello to your avatar.</p></div>
      <div className="block">
        <video src="" poster="" autoPlay muted loop></video>
      </div>
      <div className="placeholder"></div>
      <div className="button" role="button" ng-click="phoneCtrl.handleConfirm()">Ready</div>
    </section>
  )
}

export default MeetCharacterStage
