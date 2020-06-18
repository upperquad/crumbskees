import React, { Fragment, useState, useEffect } from 'react'
import { CHARACTERS } from '~constants'
import ServerPeer from '~managers/PeerManager/ServerPeer'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

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
          setStage('meet_character')
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
    <Fragment>
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
            ServerPeer.disconnect()
          }}
        />
      )}
    </Fragment>
  )
}

export default ControlDevice
