import React, { Fragment, useEffect, useState, useRef } from 'react'
import styles from './style.module.scss'

import { GAME_ROUNDS } from '~constants'
import AutoplayVideo from '~components/AutoplayVideo'

const stepsArray = [
  { name: 'initialization', tillNextStep: 0 },
  { name: 'roundPopup', tillNextStep: 1000 },
  { name: 'roundBlink', tillNextStep: 600 },
  { name: 'roundDown', tillNextStep: 0 },
  { name: 'circleIn', tillNextStep: 200 },
  { name: 'itemText', tillNextStep: 200 },
  { name: 'itemImage', tillNextStep: 1000 },
  { name: 'circleOut', tillNextStep: 0 },
  { name: 'itemTextOut', tillNextStep: 0 },
  { name: 'itemImageDown', tillNextStep: 1000 },
  { name: 'ready', tillNextStep: 600 },
  { name: 'set', tillNextStep: 600 },
  { name: 'go', tillNextStep: 200, startGame: true },
  { name: 'slideAway', tillNextStep: 800 },
]

const stepsDict = {}
stepsArray.forEach((step, index) => {
  stepsDict[step.name] = index
})

const Intro = props => {
  const { onFinish, roundIndex } = props
  const { itemImage, roundNameText, videoIntro } = GAME_ROUNDS[roundIndex]
  const [step, setStep] = useState(0)
  const timeout = useRef()

  // steps
  useEffect(() => {
    const currentStep = stepsArray[step]
    timeout.current = setTimeout(() => {
      if (currentStep.startGame) {
        onFinish()
      }

      if (step < stepsArray.length - 1) {
        setStep(step + 1)
      }
    }, currentStep.tillNextStep)

    return () => clearTimeout(timeout.current)
  }, [step])

  return (
    <Fragment>
      <div className={styles.introBgContainer}>
        <AutoplayVideo extraClassName={styles.video} src={videoIntro} />
        <div className={styles.circle} />
      </div>
      <div className={styles.introRound}>{roundNameText}</div>
      <div className={styles.itemToFind}>
        <div className={styles.itemToFindText}>
          {'Item\nto find'}
        </div>
        <img src={itemImage} className={styles.itemToFindImage} alt="" />
      </div>
      <div className={styles.countdown}>
        <div className={styles.introReady}>Ready</div>
        <div className={styles.introSet}>Set</div>
        <div className={styles.introGo}>Go</div>
      </div>
    </Fragment>
  )
}


export default Intro
