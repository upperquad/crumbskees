import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'

import WebSocketManager from '../../managers/WebSocketManager'

const DisplayDevice = props => {
  const [stage, setStage] = useState('setup')
  useEffect(() => {
    WebSocketManager.init('display')
  }, [])

  const onError = () => setStage('error')

  return (
    <>
      {stage === 'setup' && <SetupStage onFinish={() => setStage('tutorial')} onError={onError} /> }
      {stage === 'tutorial' && <TutorialStage onFinish={() => setStage('play')} onError={onError} /> }
      {stage === 'play' && <PlayStage onFinish={() => setStage('result')} onError={onError} /> }
      {stage === 'result' && <ResultStage onFinish={() => setStage('setup')} onError={onError} /> }
      {stage === 'error' && <ErrorStage /> }
    </>
  )
}

export default DisplayDevice
