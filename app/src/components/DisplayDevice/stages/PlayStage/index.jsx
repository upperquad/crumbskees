import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import GAME_ROUNDS from '~constants'
import PlayersManager from '~managers/PlayersManager'

import Round from './Round'

const PlayStage = props => {
  const { onFinish } = props
  const [sceneIndex, setSceneIndex] = useState(0)

  const onRoundEnd = () => {
    if (sceneIndex === GAME_ROUNDS.length - 1) {
      onFinish()
    } else {
      setSceneIndex(sceneIndex + 1)
    }
  }

  useEffect(() => {
    PlayersManager.startGame()
  }, [])

  // REVIEW: add page transition here
  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Round
        {...GAME_ROUNDS[sceneIndex]}
        onSceneEnd={onRoundEnd}
      />
    </section>
  )
}

export default PlayStage
