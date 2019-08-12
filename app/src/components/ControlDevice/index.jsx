import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterSatge from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

const ControlDevice = props => {
  // set hasPlayed when game starts
  const [hasPlayed, setHasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')

  return (
    <div>
      {stage === 'pre_connect' && <PreConnectStage hasPlayed={hasPlayed} /> }
    </div>
  )
}

export default ControlDevice
