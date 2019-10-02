import React, { useEffect, useState } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { characterIndex, extraClassName, onFinish } = props
  const [roundIndex, setRoundIndex] = useState(0)

  const onRoundEnd = () => {
    if (roundIndex === GAME_ROUNDS.length - 1) {
      const result = getResult()
      console.log(getResult())
      WebSocketManager.send('result', { winner: result })
      console.log('result', { winner: result })
      onFinish()
    } else {
      setRoundIndex(roundIndex + 1)
    }
  }

  const getResult = () => {
    const players = PlayersManager.players

    if (players[0]._score > players[1]._score) {
      return 0
    } else if (players[0]._score < players[1]._score) {
      return 1
    } else {
      return 'tied'
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
              {...GAME_ROUNDS[roundIndex]}
              onRoundEnd={onRoundEnd}
            />
          )}
        </Transition>
      </TransitionGroup>
    </section>
  )
}

export default PlayStage
