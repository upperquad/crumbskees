import React, { useState, useEffect } from 'react'
// import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'

import WebSocketManager from '~managers/WebSocketManager'

const DisplayDevice = () => {
  // if (props === null) {
  const [stage, setStage] = useState('setup')
  // }
  useEffect(() => {
    WebSocketManager.init('display')
  }, [])

  // Listen to

  const onError = () => setStage('error')

  return (
    <>
      {stage === 'setup' && <SetupStage key="stage-setup" onFinish={() => setStage('tutorial')} onError={onError} />}
      {stage === 'tutorial' && (
        <TutorialStage key="stage-tutorial" onFinish={() => setStage('play')} onError={onError} />
      )}
      {stage === 'play' && <PlayStage key="stage-play" onFinish={() => setStage('result')} onError={onError} />}
      {stage === 'result' && <ResultStage key="stage-result" onFinish={() => setStage('setup')} onError={onError} />}
      {stage === 'error' && <ErrorStage key="stage-error" />}
    </>
  )
}

export default DisplayDevice
