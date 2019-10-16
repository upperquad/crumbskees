import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'

const TRANSITION_TIMEOUTS = { enter: 800, exit: 1300 }

const DisplayDevice = () => {
  const [stage, setStage] = useState('setup')
  const [errorReason, setErrorReason] = useState()
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
    setStage('setup')
    PlayersManager.reset()
    WebSocketManager.init('display')
    WebSocketManager.connect()

    return () => WebSocketManager.disconnect()
  }, [gameCount])

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber('player_change', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_change', forceUpdate)
    }
  }, [forceUpdate])

  // listener for error states
  useEffect(() => {
    const errorListener = reason => {
      setStage('error')
      setErrorReason(reason)
    }
    WebSocketManager.addSubscriber('WS_CLOSE', errorListener)

    return () => {
      WebSocketManager.removeSubscriber('WS_CLOSE', errorListener)
    }
  }, [setStage])

  useEffect(() => {
    const messageHandler = detail => {
      const { data, type } = detail

      switch (type) {
        case 'token_submit': {
          const { id, token } = data
          PlayersManager.newConnect(token, id)
          setBothConnected(PlayersManager.bothConnected())
          break
        }
        case 'reconnect_phone': {
          const { id } = data
          PlayersManager.newConnect(null, id)
          break
        }
        case 'phone_left': {
          const { id } = data
          PlayersManager.closeConnection(id)
          setBothConnected(PlayersManager.bothConnected())
          break
        }
        default:
          break
      }
    }
    WebSocketManager.addSubscriber('MESSAGE', messageHandler)

    return () => {
      WebSocketManager.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [])

  return (
    <div className={styles.displayDevice} style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}>
      <TransitionGroup>
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
                  bothConnected={bothConnected}
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
        {stage === 'error' && (
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
        )}
      </TransitionGroup>
    </div>
  )
}

export default DisplayDevice
