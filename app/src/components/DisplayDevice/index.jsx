import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ModeStage from './stages/ModeStage'
// import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import TokenSocketManager from '~managers/TokenSocketManager'
import PlayersManager from '~managers/PlayersManager'

const TRANSITION_TIMEOUTS = { enter: 800, exit: 1300 }

const DisplayDevice = () => {
  const [stage, setStage] = useState('mode')
  // const [errorReason, setErrorReason] = useState()
  const [bothConnected, setBothConnected] = useState(false)
  const forceUpdate = useForceUpdate()
  const [gameCount, setGameCount] = useState(0)
  const [zoom, setZoom] = useState(1)

  const resetGame = () => setGameCount(prevCount => prevCount + 1)

  useEffect(() => {
    const resizeHandler = () => {
      const displayRatio = window.innerHeight / window.innerWidth
      const threshold = 9 / 16
      if (displayRatio < threshold) {
        setZoom(displayRatio / threshold)
      } else {
        setZoom(1)
      }
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  useEffect(() => {
    const connectHandler = () => {
      // PlayersManager.reset()
      setStage('mode')
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

  //   listener for error states
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
    <div className={styles.displayDevice} style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}>
      <TransitionGroup>
        {stage === 'mode' && (
          <Transition key="stage-mode" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ModeStage onFinish={() => setStage('setup')} />
              </StageWrapper>
            )}
          </Transition>
        )}
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
