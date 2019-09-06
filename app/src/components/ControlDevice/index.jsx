import React, { useState, useEffect } from 'react'
// import styles from './style.module.scss'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterStage from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

import WebSocketManager from '~managers/WebSocketManager'

import characterVideoWhite1 from '~assets/images/character-white-1.mp4'
import characterVideoWhite2 from '~assets/images/character-white-2.mp4'
import character1 from '~assets/images/character1.png'
import character2 from '~assets/images/character2.png'

// put this somewhere else, shared with DisplayDevice
const CHARACTERS = [
  {
    name: 'Player 1',
    color: 'purple',
    secondaryColor: 'red',
    video: characterVideoWhite1,
    image: character1,
  },
  {
    name: 'Player 2',
    color: 'red',
    secondaryColor: 'purple',
    video: characterVideoWhite2,
    image: character2,
  },
]

const ControlDevice = () => {
  // set hasPlayed when game starts
  const [hasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [character, setCharacter] = useState(CHARACTERS[0])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event

      switch (type) {
        case 'score': {
          // TODO:
          break
        }
        case 'result': {
          // TODO:
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
    <>
      {stage === 'pre_connect' && <PreConnectStage hasPlayed={hasPlayed} onFinish={() => setStage('meet_character')} />}
      {stage === 'meet_character' && <MeetCharacterStage color={character.color} video={character.video} image={character.image} onFinish={() => setStage('play')} />}
      {stage === 'play' && <PlayStage color={character.color} secondaryColor={character.secondaryColor} image={character.image} score={score} onFinish={() => setStage('result')} />}
      {stage === 'result' && <ResultStage onFinish={() => setStage('pre_connect')} />}
    </>
  )
}

export default ControlDevice
