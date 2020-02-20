import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import Player1Peer from '~managers/PeerManager/Player1Peer'
import Player2Peer from '~managers/PeerManager/Player2Peer'
import styles from './style.module.scss'

import { DEBUG } from '~constants'

import MarqueeText from '~components/MarqueeText'
import DisplayFooter from '~components/DisplayFooter'
import AutoplayVideo from '~components/AutoplayVideo'

import homeBgVideo from '~assets/images/home-bg.mp4'
import step1Img from '~assets/images/tutorial/tutorial-1.png'
import step2Img from '~assets/images/tutorial/tutorial-2.png'
import step3Img from '~assets/images/tutorial/tutorial-3.png'

const TUTORIALS = [
  {
    key: 'tutorial-step-0',
    img: step1Img,
    text: 'It’s your job to collect the lost shapes.',
  }, {
    key: 'tutorial-step-1',
    img: step2Img,
    text: 'Tap on the shape when you see it using your phone screen.',
  }, {
    key: 'tutorial-step-2',
    img: step3Img,
    text: 'Hint! Be on the lookout for hidden powerups.',
  },
]

const TutorialStage = props => {
  const { bothConnected, extraClassName, onFinish, rollback } = props
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const messageHandler = detail => {
      const { type } = detail

      switch (type) {
        case 'skip_tutorial':
          onFinish()
          break
        default:
          break
      }
    }
    Player1Peer.addSubscriber('MESSAGE', messageHandler)
    Player2Peer.addSubscriber('MESSAGE', messageHandler)

    return () => {
      Player1Peer.removeSubscriber('MESSAGE', messageHandler)
      Player2Peer.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [onFinish])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(counter => {
        if (counter === 33) {
          setStep(1)
        } else if (counter === 66) {
          setStep(2)
        } else if (counter === 100) {
          clearInterval(progressInterval)
          // so we don't kick off the next stage when trying to rollback
          if (bothConnected) {
            onFinish()
          }
          return counter
        }
        return counter + 1
      })
    }, DEBUG ? 1 : 100)

    return () => {
      clearInterval(progressInterval)
    }
  }, [onFinish, bothConnected])

  useEffect(() => {
    if (!bothConnected) {
      rollback()
    }
  }, [bothConnected, rollback])

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <AutoplayVideo extraClassName={styles.video} src={homeBgVideo} />
      <MarqueeText extraClassName={styles.welcome} text="Welcome to The Upperquadrant -" duration="12s" />
      <div className={styles.tutorialCard}>
        <div className={styles.tutorialHeader}>Your instructions</div>
        <TransitionGroup>
          <Transition
            key={TUTORIALS[step].key}
            timeout={{ enter: 150, exit: 300 }}
          >
            {status => (
              <div
                className={classNames(styles.tutorialContent, {
                  [styles.tutorialContentTransitioning]:
                    status === 'entering' || status === 'exiting' || status === 'exited',
                })}
              >
                <img className={styles.tutorialImage} src={TUTORIALS[step].img} alt="" />
                <div className={styles.tutorialText}>{TUTORIALS[step].text}</div>
              </div>
            )}
          </Transition>
        </TransitionGroup>
        <div className={styles.timebar}>
          <div
            className={styles.timebarColor}
            style={{ transform: `scaleX(${progress / 100})` }}
          />
          <div className={styles.timebarText}>{progress}</div>
        </div>
      </div>
      <DisplayFooter />
    </div>
  )
}

export default TutorialStage
