import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import { CHARACTERS } from '~constants'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

const STAGE_TRANSITION_OUT = 0
const STAGE_TRANSITION_IN = 0

const ControlDevice = () => {
  // set hasPlayed when game starts
  const [hasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(CHARACTERS[0])
  const [score, setScore] = useState(0)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event

      switch (type) {
        case 'accepted': {
          const { id, playerIndex } = data
          setUserId(id)
          if (CHARACTERS[playerIndex]) {
            setCharacter(CHARACTERS[playerIndex])
          }
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
      {stage === 'pre_connect' && (
        <Transition
          key="stage-pre-connect"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          <PreConnectStage hasPlayed={hasPlayed} onFinish={() => setStage('meet_character')} />
        </Transition>
      )}
      {stage === 'meet_character' && (
        <Transition
          key="stage-meet-character"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          <MeetCharacterStage
            color={character.color}
            video={character.video}
            image={character.image}
            onFinish={() => setStage('play')}
          />
        </Transition>
      )}
      {stage === 'play' && (
        <Transition
          key="stage-play"
          timeout={500}
        >
          <PlayStage
            color={character.color}
            secondaryColor={character.secondaryColor}
            image={character.image}
            onFinish={() => setStage('result')}
          />
        </Transition>
      )}
      {stage === 'result' && (
        <Transition
          key="stage-result"
          timeout={500}
        >
          <ResultStage onFinish={() => setStage('pre_connect')} />
        </Transition>
      )}
    </TransitionGroup>
  )
}

export default ControlDevice
