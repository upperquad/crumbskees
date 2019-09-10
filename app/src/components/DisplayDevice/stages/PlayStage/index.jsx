import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

import Scene from './Scene'

// data for scenes
import scenes from './scenes'

const PlayStage = props => {
  const { onFinish } = props
  const [sceneIndex, setSceneIndex] = useState(0)

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

function endScene(sceneIndex, setSceneIndex, onFinish) {
  PlayersManager.players.forEach(player => {
    player.cleanPowers()
    player._scoreInScene = 0
  })

  sceneIndex += 1
  if (sceneIndex === scenes.length) {
    // Go to ResultPage
    onFinish()
  } else {
    // Do out transitions... etc...
    setSceneIndex(sceneIndex)
    // Do in transitions... etc...
  }
}

export default PlayStage
