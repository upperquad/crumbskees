import React, { useEffect, useState } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { onFinish } = props
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
  }, [])

  // TODO: add transition based on transitionStatus
  return (
    <section className={classNames(styles.game, styles.isIntro)}>
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
