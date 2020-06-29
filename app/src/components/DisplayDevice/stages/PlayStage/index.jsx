import React, { useEffect, useState } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { extraClassName, onFinish } = props
  const [roundIndex, setRoundIndex] = useState(0)

  const onRoundEnd = () => {
    if (roundIndex === GAME_ROUNDS.length - 1) {
      onFinish()
    } else {
      setRoundIndex(roundIndex + 1)
    }
  }

  useEffect(() => {
    PlayersManager.startGame()

    return () => {
      PlayersManager.endGame()
    }
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

export default PlayStage
