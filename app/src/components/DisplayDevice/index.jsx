import React, { useState, useEffect } from 'react'
import { TransitionGroup } from 'react-transition-group'
import useForceUpdate from 'use-force-update'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'
import Player from '~managers/PlayersManager/Player'
import { DEBUG, COLORS } from '~constants'

// assets
import character1 from '~assets/images/character1.mp4'
import character2 from '~assets/images/character2.mp4'

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

    if (DEBUG) { // just for test debug mode
      PlayersManager.players[0] = new Player({ id: 123, character: character1, color: COLORS.purple })
      PlayersManager.players[1] = new Player({ id: 345, character: character2, color: COLORS.red })
    }

    return () => {
      PlayersManager.removeSubscriber('player_change', forceUpdate)
    }
  }, [forceUpdate])

  // listener for error states
  useEffect(() => {
    const errorListener = event => {
      const { detail: { reason } } = event
      setStage('error')
      setErrorReason(reason)
    }
    window.addEventListener('WS_CLOSE', errorListener)

    return () => {
      window.removeEventListener('WS_CLOSE', errorListener)
    }
  }, [setStage, setErrorReason])

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event

      switch (type) {
        case 'token_submit': {
          const { id, token } = data
          PlayersManager.newConnect(token, id)
          setBothConnected(PlayersManager.players.every(item => item.id))
          break
        }
        case 'phone_left': {
          const { id } = data
          PlayersManager.closeConnection(id)
          setBothConnected(PlayersManager.players.every(item => item.id))
          break
        }
        default:
          break
      }
    }
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [])

  return (
    <TransitionGroup>
      {stage === 'setup' && (
        <StageWrapper key="stage-setup">
          <SetupStage
            onFinish={() => setStage('tutorial')}
            bothConnected={bothConnected}
          />
        </StageWrapper>
      )}
      {stage === 'tutorial' && (
        <StageWrapper key="stage-tutorial">
          <TutorialStage
            bothConnected={bothConnected}
            rollback={() => setStage('setup')}
            onFinish={() => setStage('play')}
          />
        </StageWrapper>
      )}
      {stage === 'play' && (
        <StageWrapper key="stage-play">
          <PlayStage onFinish={() => setStage('result')} />
        </StageWrapper>
      )}
      {stage === 'result' && (
        <StageWrapper key="stage-result">
          <ResultStage onFinish={() => setStage('setup')} />
        </StageWrapper>
      )}
      {stage === 'error' && (
        <StageWrapper key="stage-error">
          <ErrorStage reason={errorReason} />
        </StageWrapper>
      )}
    </TransitionGroup>
  )
}

export default DisplayDevice
