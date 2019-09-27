import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import { GAME_ROUNDS } from '~constants'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { onFinish } = props
  const [roundIndex, setroundIndex] = useState(0)

  const onRoundEnd = () => {
    if (roundIndex === GAME_ROUNDS.length - 1) {
      onFinish()
    } else {
      setroundIndex(roundIndex + 1)
    }
  }

  useEffect(() => {
    PlayersManager.startGame()
  }, [])

  // REVIEW: add page transition here
  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Round
        {...GAME_ROUNDS[roundIndex]}
        onRoundEnd={onRoundEnd}
      />
    </section>
  )
}

export default PlayStage
