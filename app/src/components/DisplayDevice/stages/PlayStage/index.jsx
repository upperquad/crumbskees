import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import scenes from './scenes'
import PlayersManager from '~managers/PlayersManager'

import Scene from './Scene'

const PlayStage = props => {
  const { onFinish } = props
  const [sceneIndex, setSceneIndex] = useState(0)

  const endScene = () => {
    if (sceneIndex === scenes.length - 1) {
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
      <Scene
        {...scenes[sceneIndex]}
        endScene={() => {
          endScene(sceneIndex, setSceneIndex, onFinish)
        }}
      />
    </section>
  )
}

export default PlayStage
