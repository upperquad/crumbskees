import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import { GAME_ROUNDS } from '~constants'
import AutoplayVideo from '~components/AutoplayVideo'
import DropText from '~components/DropText'
import JumpUpText from '~components/JumpUpText'

const stepsArray = [
  { name: 'initialization', tillNextStep: 100 },
  { name: 'slideIn', tillNextStep: 1000 },
  { name: 'roundPopup', tillNextStep: 1300 },
  { name: 'roundBlink', tillNextStep: 1100 },
  { name: 'roundDown', tillNextStep: 200 },
  { name: 'circleIn', tillNextStep: 600 },
  { name: 'itemText', tillNextStep: 200 },
  { name: 'itemImage', tillNextStep: 2000 },
  { name: 'circleOut', tillNextStep: 0 },
  { name: 'itemTextOut', tillNextStep: 0 },
  { name: 'itemImageDown', tillNextStep: 1000 },
  { name: 'readyIn', tillNextStep: 800 },
  { name: 'readyOut', tillNextStep: 0 },
  { name: 'setIn', tillNextStep: 800 },
  { name: 'setOut', tillNextStep: 0 },
  { name: 'go', tillNextStep: 200, startGame: true },
  { name: 'slideAway', tillNextStep: 1800 },
]

const stepsDict = {}
stepsArray.forEach((step, index) => {
  stepsDict[step.name] = index
})

const Intro = props => {
  const { onFinish, roundIndex } = props
  const { itemImage, roundNameText, videoIntro } = GAME_ROUNDS[roundIndex]
  const [step, setStep] = useState(0)
  const [finished, setFinished] = useState(false)
  const timeout = useRef()

  // steps
  useEffect(() => {
    // onFinish()
    timeout.current = setTimeout(() => setFinished(true), 1000)

    const currentStep = stepsArray[step]
    timeout.current = setTimeout(() => {
      if (currentStep.startGame) {
        onFinish()
        timeout.current = setTimeout(() => setFinished(true), 1000)
      }

      if (step < stepsArray.length - 1) {
        setStep(step + 1)
      }
    }, currentStep.tillNextStep)

    return () => clearTimeout(timeout.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  let readyDropState
  if (step < stepsDict.readyIn) {
    readyDropState = 'before'
  } else if (step < stepsDict.readyOut) {
    readyDropState = 'in'
  } else {
    readyDropState = 'after'
  }

  let setDropState
  if (step < stepsDict.setIn) {
    setDropState = 'before'
  } else if (step < stepsDict.setOut) {
    setDropState = 'in'
  } else {
    setDropState = 'after'
  }

  console.log(videoIntro)

  return (
    <div className={styles.intro}>
      {!finished && (
        <div
          className={classNames(styles.introBgContainer, {
            [styles.introBgContainerVisible]: step >= stepsDict.slideIn && step < stepsDict.slideAway,
          })}
        >
          <AutoplayVideo extraClassName={styles.video} src={videoIntro} />
          <div
            className={classNames(styles.circle, {
              [styles.circleIn]: step >= stepsDict.circleIn && step < stepsDict.circleOut,
            })}
          />
        </div>
      )}
      {step >= stepsDict.roundPopup && (
        <div
          className={classNames(styles.introRoundWrapper, {
            [styles.introRoundWrapperDown]: step >= stepsDict.roundDown,
          })}
        >
          <JumpUpText
            extraClassName={classNames(styles.introRound, {
              [styles.introRoundBlink]: step >= stepsDict.roundBlink,
              [styles.introRoundDown]: step >= stepsDict.roundDown,
            })}
            text={roundNameText}
          />
        </div>
      )}
      {!finished && (
        <div
          className={classNames(styles.itemToFindText, {
            [styles.itemToFindTextIn]: step >= stepsDict.itemText && step < stepsDict.itemTextOut,
          })}
        >
          Item
          <br />
          to find
        </div>
      )}
      <img
        src={itemImage}
        alt=""
        className={classNames(styles.itemToFindImage, {
          [styles.itemToFindImageIn]: step >= stepsDict.itemImage,
          [styles.itemToFindImageDown]: step >= stepsDict.itemImageDown,
        })}
      />
      {!finished && (
        <div className={styles.countdown}>
          <DropText
            text="Ready"
            state={readyDropState}
            extraClassName={styles.ready}
          />
          <DropText
            text="Set"
            state={setDropState}
            extraClassName={styles.set}
          />
        </div>
      )}
      {!finished && (
        <div
          className={classNames(styles.go, {
            [styles.goStart]: step >= stepsDict.go,
          })}
        >
          Go
        </div>
      )}
    </div>
  )
}


export default Intro
