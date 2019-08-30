import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Scene from './Scene'
import Board from './Board'

// Get character from PlayerManager
// PlayerManager.player[token] ??

// const scene = [{
//   bkg: scene1,
// }, {
//   bkg: scene2,
// }, {
//   bkg: scene3,
// }]
// this can come from a JSON

// when scene is over call onEnding(), go to next current scene

// {/* <Scene bkg="scene[currentScene].bkg" onEnding={() => {}} /> */}

// function onEnding = () => {
//   Do out transitions... etc...
//   currentScene += 1
//   Do in transitions... etc...
// }

const PlayStage = () => {
  console.log('ok')

  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Scene />
      <Board />
    </section>
  )
}

export default PlayStage
