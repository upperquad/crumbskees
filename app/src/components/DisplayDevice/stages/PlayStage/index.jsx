import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import usePrevious from '~utils/hooks'
import SoundManager from '~managers/SoundManager'

import Scene from './Scene'
import Board from './Board'

// data for scenes
import scenes from './scenes'

let timeInterval
const TIME = 40

const PlayStage = () => {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [time, setTime] = useState(0)

  const prevSceneIndex = usePrevious(sceneIndex)

  useEffect(() => { // update when scene change
    // reset time if sceneIndex is updated
    startTime(setTime, TIME)

    return () => {
      // clear interval
      clearInterval(timeInterval)
    }
  }, [sceneIndex])

  useEffect(() => { // update when time change
    if (time === 0 && prevSceneIndex === sceneIndex) { // prevent calling above code twice when sceneIndex is updated
      endScene(sceneIndex, setSceneIndex)
      // this.endScene('TIME\'S UP!')
    } else if (time === 10) {
      // play sound countdown
      SoundManager.countdown.play()
    }
  }, [time, sceneIndex, prevSceneIndex])

  return (
    <section className={classNames(styles.game, styles.isIntro)}>
      <Scene
        {...scenes[sceneIndex]}
        endScene={() => {
          endScene(sceneIndex, setSceneIndex)
        }}
      />
      <Board time={time} />
    </section>
  )
}

function endScene(sceneIndex, setSceneIndex) {
  sceneIndex += 1
  if (sceneIndex === scenes.length) {
    // Go to ResultPage
    console.log('go to result page')
  } else {
    console.log('update scene')
    // Do out transitions... etc...
    setSceneIndex(sceneIndex)
    // Do in transitions... etc...
  }
}

function startTime(setTime, duration) {
  let time = duration
  setTime(time)

  timeInterval = setInterval(() => {
    time -= 1
    setTime(time)
  }, 1000)
}

export default PlayStage
