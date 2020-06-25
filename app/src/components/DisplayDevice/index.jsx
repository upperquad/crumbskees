import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import LandingStage from './stages/LandingStage'
import IntroIlloStage from './stages/IntroIlloStage'
// import ModeStage from './stages/ModeStage'
import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
// import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import TokenSocketManager from '~managers/TokenSocketManager'
import PlayersManager from '~managers/PlayersManager'
import SoundManager from '~managers/SoundManager'

const TRANSITION_TIMEOUTS = 1600

const DisplayDevice = () => {
  const [stage, setStage] = useState('landing')
  // const [errorReason, setErrorReason] = useState()
  const [bothConnected, setBothConnected] = useState(false)
  const forceUpdate = useForceUpdate()
  const [gameCount, setGameCount] = useState(0)

  const resetGame = () => setGameCount(prevCount => prevCount + 1)

  useEffect(() => {
    const connectHandler = () => {
      // PlayersManager.reset()
      PlayersManager.init('TWO_PLAYERS')
      setStage('landing')
    }

    TokenSocketManager.init('display')
    TokenSocketManager.addSubscriber('CONNECTED', connectHandler)
    TokenSocketManager.connect()

    return () => {
      TokenSocketManager.removeSubscriber('CONNECTED', connectHandler)
      TokenSocketManager.disconnect()
    }
  }, [gameCount])

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    const onPlayerUpdate = () => {
      setBothConnected(PlayersManager.bothConnected())
      forceUpdate()
    }
    PlayersManager.addSubscriber('player_change', onPlayerUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_change', onPlayerUpdate)
    }
  }, [setBothConnected, forceUpdate])

  //   TODO: listener for error states
  //   useEffect(() => {
  //     const errorListener = reason => {
  //       setStage('error')
  //       setErrorReason(reason)
  //     }
  //     PeerManager.addSubscriber('WS_CLOSE', errorListener)
  //
  //     return () => {
  //       PeerManager.removeSubscriber('WS_CLOSE', errorListener)
  //     }
  //   }, [setStage])
  //
  //   useEffect(() => {
  //     const messageHandler = detail => {
  //       const { data, type } = detail
  //
  //       switch (type) {
  //         case 'token_submit': {
  //           const { id, token } = data
  //           PlayersManager.newConnect(token, id)
  //           setBothConnected(PlayersManager.bothConnected())
  //           break
  //         }
  //         case 'reconnect_phone': {
  //           const { id } = data
  //           PlayersManager.newConnect(null, id)
  //           break
  //         }
  //         case 'phone_left': {
  //           const { id } = data
  //           PlayersManager.closeConnection(id)
  //           setBothConnected(PlayersManager.bothConnected())
  //           break
  //         }
  //         default:
  //           break
  //       }
  //     }
  //     TokenSocketManager.addSubscriber('MESSAGE', messageHandler)
  //
  //     return () => {
  //       TokenSocketManager.removeSubscriber('MESSAGE', messageHandler)
  //     }
  //   }, [])

  return (
    <div className={styles.displayDevice}>
      <TransitionGroup>
        {stage === 'landing' && (
          <Transition key="stage-landing" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <LandingStage
                  onFinish={() => {
                    SoundManager.background.play()
                    setStage('intro-illo')
                  }}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'intro-illo' && (
          <Transition key="stage-intro-illo" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <IntroIlloStage onFinish={() => setStage('setup')} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {/* stage === 'mode' && (
          <Transition key="stage-mode" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ModeStage onFinish={() => setStage('setup')} />
              </StageWrapper>
            )}
          </Transition>
        ) */}
        {stage === 'setup' && (
          <Transition key="stage-setup" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <SetupStage onFinish={() => setStage('tutorial')} bothConnected={bothConnected} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'tutorial' && (
          <Transition key="stage-tutorial" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <TutorialStage
                  rollback={() => setStage('setup')}
                  onFinish={() => setStage('play')}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'play' && (
          <Transition key="stage-play" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <PlayStage onFinish={() => setStage('result')} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'result' && (
          <Transition key="stage-result" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ResultStage onFinish={resetGame} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {/* stage === 'error' && (
          <Transition key={`stage-error-${errorReason}`} timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ErrorStage
                  reason={errorReason}
                  resetGame={resetGame}
                />
              </StageWrapper>
            )}
          </Transition>
        ) */}
      </TransitionGroup>
    </div>
  )
}

export default DisplayDevice
