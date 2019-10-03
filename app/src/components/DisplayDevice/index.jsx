import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'

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

  useEffect(() => {
    WebSocketManager.init('display')
    WebSocketManager.connect()
  }, [])

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
    const errorListener = detail => {
      const { reason } = detail
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
              <ResultStage onFinish={() => setStage('setup')} />
            </StageWrapper>
          )}
        </Transition>
      )}
      {stage === 'error' && (
        <Transition key="stage-error" timeout={TRANSITION_TIMEOUTS}>
          {status => (
            <StageWrapper status={status}>
              <ErrorStage reason={errorReason} />
            </StageWrapper>
          )}
        </Transition>
      )}
    </TransitionGroup>
  )
}

export default DisplayDevice
