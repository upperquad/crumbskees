import React, { useState } from 'react'
// import styles from './style.module.scss'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

const ControlDevice = () => {
  // set hasPlayed when game starts
  const [hasPlayed] = useState(false)
  const [stage, setStage] = useState('result')

  return (
    <>
      {stage === 'pre_connect' && <PreConnectStage hasPlayed={hasPlayed} onFinish={() => setStage('meet_character')} />}
      {stage === 'meet_character' && <MeetCharacterStage onFinish={() => setStage('play')} />}
      {stage === 'play' && <PlayStage onFinish={() => setStage('result')} />}
      {stage === 'result' && <ResultStage onFinish={() => setStage('pre_connect')} />}
    </>
  )
}

export default ControlDevice
