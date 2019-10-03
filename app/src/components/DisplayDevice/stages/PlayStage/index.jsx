import React, { useEffect, useState } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { extraClassName, onFinish } = props
  const [roundIndex, setRoundIndex] = useState(0)

  const getResult = () => {
    const _players = PlayersManager.players

    if (_players[0]._score > _players[1]._score) {
      return 0
    } if (_players[0]._score < _players[1]._score) {
      return 1
    }
    return 'tied'
  }

  const onRoundEnd = () => {
    if (roundIndex === GAME_ROUNDS.length - 1) {
      const result = getResult()
      WebSocketManager.send('result', { winner: result })
      onFinish()
    } else {
      setRoundIndex(roundIndex + 1)
    }
  }

  useEffect(() => {
    PlayersManager.startGame()
  }, [])

  // TODO: add transition based on transitionStatus
  return (
    <section className={classNames(styles.play, extraClassName)}>
      <TransitionGroup>
        <Transition
          key={GAME_ROUNDS[roundIndex].key}
          timeout={{ enter: 0, exit: 0 }}
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
