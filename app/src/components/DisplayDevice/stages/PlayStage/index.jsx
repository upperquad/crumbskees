import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Scene from './Scene'
import Board from './Board'

// assets
import scene1Pattern from '~assets/images/round_1/r1-pattern.gif'
import scene1Front from '~assets/images/round_1/r1-front.gif'
import scene1Item from '~assets/images/round_1/r1-item.png'
import scene1IntroVideo from '~assets/images/round_1/r1-intro.mp4'
import growItem from '~assets/images/grow.png'

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
  const currentSceneIndex = 0

  const scenes = [
    {
      bkg: scene1Pattern,
      frontBkg: scene1Front,
      itemImage: scene1Item,
      videoIntro: scene1IntroVideo,
      numItems: 10,
      gridCols: 32,
      gridLines: 14,
      message: 'DOPE.',
      delayGif: 1000,
      power: {
        type: 'grow',
        image: growItem,
      },
    },
  ]

  const sceneProps = {
    index: currentSceneIndex,
    ...scenes[currentSceneIndex],
  }

  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Scene {...sceneProps} />
      <Board />
    </section>
  )
}

export default PlayStage
