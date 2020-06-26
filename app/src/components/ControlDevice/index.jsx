import React, { useState, useEffect } from 'react'
import { CHARACTERS } from '~constants'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const ControlDevice = () => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(null)
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState(null)
  // const [mode, setMode] = useState(null)

  useEffect(() => {
    const messageHandler = detail => {
      const { data, type } = detail

      switch (type) {
        case 'accepted': {
          // const { mode: activatedMode, playerIndex } = data
          // setMode(activatedMode)
          const { playerIndex } = data
          if (CHARACTERS[playerIndex]) {
            setCharacter(CHARACTERS[playerIndex])
          }
          setHasPlayed(true)
          setStage(prevStage => {
            if (prevStage === 'pre_connect') {
              return 'meet_character'
            }
            return prevStage
          })
          break
        }
        case 'tutorial_start': {
          setStage('play')
          break
        }
        case 'game_start': {
          setGameStarted(true)
          break
        }
        case 'score': {
          setScore(data.score)
          break
        }
        case 'result': {
          setWinner(data.winner)
          setStage('result')
          ServerPeer.destroy()
          break
        }
        default:
          break
      }
    }
    ServerPeer.addSubscriber('MESSAGE', messageHandler)

    return () => {
      ServerPeer.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [])

  return (
    <div className="controlDevice">
      {stage === 'pre_connect' && (
        <PreConnectStage hasPlayed={hasPlayed} />
      )}
      {stage === 'meet_character' && (
        <MeetCharacterStage
          character={character}
        />
      )}
      {stage === 'play' && (
        <PlayStage
          gameStarted={gameStarted}
          character={character}
          score={score}
        />
      )}
      {stage === 'result' && (
        <ResultStage
          winner={winner}
          character={character}
          resetGame={() => {
            setScore(0)
            setWinner(null)
            setGameStarted(false)
            setStage('pre_connect')
            setCharacter(null)
          }}
        />
      )}
    </div>
  )
}

export default ControlDevice
