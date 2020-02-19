import React, { Fragment, useState, useEffect } from 'react'
import { CHARACTERS } from '~constants'
import WebSocketManager from '~managers/WebSocketManager'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

const ControlDevice = () => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(CHARACTERS[0])
  const [characterIndex, setCharacterIndex] = useState(null)
  const [activeTutorial, setActiveTutorial] = useState(false)
  const [score, setScore] = useState(0)
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
        case 'score': {
          setScore(data.score)
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
    <Fragment>
      {stage === 'pre_connect' && (
        <PreConnectStage
          hasPlayed={hasPlayed}
          onFinish={() => {
            setHasPlayed(true)
            setStage('meet_character')
          }}
        />
      )}
      {stage === 'meet_character' && (
        <MeetCharacterStage
          color={character.color}
          video={character.videoWhite}
          image={character.image}
          onFinish={() => setStage('play')}
        />
      )}
      {stage === 'play' && (
        <PlayStage
          activeTutorial={activeTutorial}
          setActiveTutorial={setActiveTutorial}
          characterIndex={characterIndex}
          color={character.color}
          secondaryColor={character.secondaryColor}
          score={score}
          image={character.image}
        />
      )}
      {stage === 'result' && (
        <ResultStage
          winner={winner}
          characterIndex={characterIndex}
          resetGame={() => {
            setScore(0)
            setWinner(null)
            setStage('pre_connect')
            setCharacter(CHARACTERS[0])
            setCharacterIndex(null)
            setActiveTutorial(false)
            WebSocketManager.disconnect()
          }}
        />
      )}
    </Fragment>
  )
}

export default ControlDevice
