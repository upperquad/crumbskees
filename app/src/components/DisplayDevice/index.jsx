import React, { useState, useEffect } from 'react'
import useForceUpdate from 'use-force-update'
// import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'

import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'

const DisplayDevice = () => {
  const [stage, setStage] = useState('setup')
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    WebSocketManager.init('display')
    WebSocketManager.connect()
  }, [])

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber(forceUpdate)

    return () => {
      PlayersManager.removeSubscriber(forceUpdate)
    }
  }, [forceUpdate])

  // listener for error states
  useEffect(() => {
    const errorListener = event => {
      const { detail: { reason } } = event
      if (reason === 'new_game_started' || reason === 'active_game_exist') {
        // maybe also pass the error message to ErrorStage?
        setStage('error')
      }
    }
    window.addEventListener('WS_CLOSE', errorListener)

    return () => {
      window.removeEventListener('WS_CLOSE', errorListener)
    }
  }, [setStage])

  return (
    <>
      {stage === 'setup' && <SetupStage key="stage-setup" onFinish={() => setStage('tutorial')} />}
      {stage === 'tutorial' && (
        <TutorialStage key="stage-tutorial" onFinish={() => setStage('play')} />
      )}
      {stage === 'play' && <PlayStage key="stage-play" onFinish={() => setStage('result')} />}
      {stage === 'result' && <ResultStage key="stage-result" onFinish={() => setStage('setup')} />}
      {stage === 'error' && <ErrorStage key="stage-error" />}
    </>
  )
}

export default DisplayDevice
