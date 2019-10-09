import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import { CHARACTERS } from '~constants'
import WebSocketManager from '~managers/WebSocketManager'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

const STAGE_TRANSITION_OUT = 0
const STAGE_TRANSITION_IN = 0

const ControlDevice = () => {
  // TODO: handle it differently if hasPlayed
  const [hasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(CHARACTERS[0])
  const [characterIndex, setCharacterIndex] = useState(null)
  const [activeTutorial, setActiveTutorial] = useState(false)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    const messageHandler = detail => {
      const { data, type } = detail

      switch (type) {
        case 'accepted': {
          const { playerIndex } = data
          setCharacterIndex(playerIndex)
          if (CHARACTERS[playerIndex]) {
            setCharacter(CHARACTERS[playerIndex])
          }
          break
        }
        case 'tutorial_start': {
          setActiveTutorial(true)
          break
        }
        case 'game_start': {
          setActiveTutorial(false)
          break
        }
        case 'result': {
          setWinner(data.winner)
          setStage('result')
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
            video={character.videoWhite}
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
            activeTutorial={activeTutorial}
            setActiveTutorial={setActiveTutorial}
            characterIndex={characterIndex}
            color={character.color}
            secondaryColor={character.secondaryColor}
            image={character.image}
          />
        </Transition>
      )}
      {stage === 'result' && (
        <Transition
          key="stage-result"
          timeout={500}
        >
          <ResultStage
            winner={winner}
            characterIndex={characterIndex}
            onFinish={() => setStage('pre_connect')}
          />
        </Transition>
      )}
    </TransitionGroup>
  )
}

export default ControlDevice
