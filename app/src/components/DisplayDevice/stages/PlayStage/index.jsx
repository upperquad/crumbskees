import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Scene from './Scene'
import Board from './Board'

// data for scenes
import scenes from './scenes'

const PlayStage = () => {
  const [sceneIndex, setSceneIndex] = useState(0)

  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Scene
        {...scenes[sceneIndex]}
        endScene={() => {
          endScene(sceneIndex, setSceneIndex)
        }}
      />
      <Board />
    </section>
  )
}

function endScene(sceneIndex, setSceneIndex) {
  console.log('end scene')
  sceneIndex += 1
  if (sceneIndex === scenes.length) {
    // Go to ResultPage
    console.log('go to result page')
  } else {
    // Do out transitions... etc...
    setSceneIndex(sceneIndex)
    // Do in transitions... etc...
  }
}

export default PlayStage
