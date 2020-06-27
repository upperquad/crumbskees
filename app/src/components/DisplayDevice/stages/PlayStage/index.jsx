import React, { useEffect, useState } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import Player1Peer from '~managers/PeerManager/Player1Peer'
import Player2Peer from '~managers/PeerManager/Player2Peer'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { extraClassName, onFinish } = props
  const [roundIndex, setRoundIndex] = useState(0)

  const onRoundEnd = () => {
    if (roundIndex === GAME_ROUNDS.length - 1) {
      const result = getResult()
      Player1Peer.send('result', { winner: result })
      Player2Peer.send('result', { winner: result })
      Player1Peer.destroy()
      Player2Peer.destroy()
      onFinish()
    } else {
      setRoundIndex(roundIndex + 1)
    }
  }

  useEffect(() => {
    Player1Peer.send('game_start')
    Player2Peer.send('game_start')
    PlayersManager.startGame()
  }, [])

  return (
    <section className={classNames(styles.play, extraClassName)}>
      <TransitionGroup>
        <Transition
          key={GAME_ROUNDS[roundIndex].key}
          timeout={{ enter: 0, exit: 1300 }}
        >
          {status => (
            <Round
              transitionStatus={status}
              roundIndex={roundIndex}
              onRoundEnd={onRoundEnd}
            />
          )}
        </Transition>
      </TransitionGroup>
    </section>
  )
}

function getResult() {
  const { players } = PlayersManager
  let result

  if (players[0].score() > players[1].score()) {
    result = 0
  } else if (players[0].score() < players[1].score()) {
    result = 1
  } else {
    result = 'tied'
  }

  return result
}

export default PlayStage
