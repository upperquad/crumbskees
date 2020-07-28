import React, { useState, useEffect } from 'react'
import { CHARACTERS } from '~constants'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import PeerManager from '~managers/PeerManager'

const ControlDevice = () => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(null)
  const [score, setScore] = useState(0)
  const [winner, setWinner] = useState(null)
  const [serverPeer, setServerPeer] = useState(() => new PeerManager())

  const reset = () => {
    serverPeer.destroy()
    setServerPeer(new PeerManager())
    setScore(0)
    setWinner(null)
    setGameStarted(false)
    setStage('pre_connect')
    setCharacter(null)
  }

  useEffect(() => {
    const messageHandler = detail => {
      const { data, type } = detail

      switch (type) {
        case 'accepted': {
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
          serverPeer.destroy()
          break
        }
        default:
          break
      }
    }
    serverPeer.addSubscriber('MESSAGE', messageHandler)

    return () => {
      serverPeer.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [serverPeer])

  useEffect(() => {
    const peerClosedHandler = () => {
      if (stage !== 'result') {
        reset()
      }
    }
    serverPeer.addSubscriber('PEER_CLOSED', peerClosedHandler)

    return () => {
      serverPeer.removeSubscriber('PEER_CLOSED', peerClosedHandler)
    }
  }, [reset, serverPeer, stage])

  return (
    <div>
      {stage === 'pre_connect' && (
        <PreConnectStage hasPlayed={hasPlayed} serverPeer={serverPeer} />
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
          serverPeer={serverPeer}
        />
      )}
      {stage === 'result' && (
        <ResultStage
          winner={winner}
          character={character}
          resetGame={reset}
        />
      )}
    </div>
  )
}

export default ControlDevice
