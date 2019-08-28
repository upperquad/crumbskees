import React, { useState } from 'react'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import DisplayFooter from '~components/DisplayFooter'

import homeBgVideo from '~assets/images/home-bg.mp4'
import step1Img from '~assets/images/tutorial/tutorial-1.png'
import step2Img from '~assets/images/tutorial/tutorial-2.png'
import step3Img from '~assets/images/tutorial/tutorial-3.png'

const TutorialStage = () => {
  const [step] = useState(1)
  return (
    <div className={styles.tutorial}>
      <video className={styles.video} src={homeBgVideo} playsInline autoPlay muted loop />
      <MarqueeText extraClassName={styles.welcome} text="Welcome to The Upperquadrant -" duration="12s" />
      <div className={styles.tutorialCard} id="tutorial-content">
        <div className={styles.tutorialHeader}>Your instructions</div>
        {step === 1 && (
          <div className={styles.tutorialContent}>
            <img className={styles.tutorialImage} src={step1Img} alt="" />
            <div className={styles.tutorialText}>It’s your job to collect the lost shapes.</div>
          </div>
        )}
        {step === 2 && (
          <div className={styles.tutorialContent}>
            <img className={styles.tutorialImage} src={step2Img} alt="" />
            <div className={styles.tutorialText}>Tap on the shape when you see it using your phone screen.</div>
          </div>
        )}
        {step === 3 && (
          <div className={styles.tutorialContent}>
            <img className={styles.tutorialImage} src={step3Img} alt="" />
            <div className={styles.tutorialText}>Hint! Be on the lookout for hidden powerups.</div>
          </div>
        )}
        <div className={styles.timebar}>
          <div className={styles.timebarColor} id="tutorial-timebar-color" />
          <div className={styles.timebarText} id="tutorial-timebar-number" />
        </div>
      </div>
      <DisplayFooter />
    </div>
  )
}

export default TutorialStage
