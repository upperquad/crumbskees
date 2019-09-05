import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import usePrevious from '~utils/hooks'

import Scene from './Scene'
import Board from './Board'

// data for scenes
import scenes from './scenes'

let timeInterval

const PlayStage = () => {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [time, setTime] = useState(0)

  const prevSceneIndex = usePrevious(sceneIndex)

  useEffect(() => { // update when scene change
    // reset time if sceneIndex is updated
    startTime(setTime, 5)

    return () => {
      // clear interval
      if (timeInterval) {
        clearInterval(timeInterval)
      }
    }
  }, [sceneIndex])

  useEffect(() => { // update when time change
    if (time === '00' && prevSceneIndex === sceneIndex) { // prevent calling above code twice when sceneIndex is updated
      if (sceneIndex === scenes.length) {
        // Go to ResultPage
        console.log('go to result page')
      } else {
        console.log('update scene')
        // Do out transitions... etc...
        setSceneIndex(sceneIndex + 1)
        // Do in transitions... etc...
      }
      // this.endScene('TIME\'S UP!')
      // this.destroyTargetScene(this.currentScene)
    }

    if (time === '10') {
      // play sound countdown
      // this.countdownSound.play()
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

function startTime(setTime, duration) {
  let time = duration - 1
  let seconds

  setTime(duration)

  timeInterval = setInterval(() => {
    seconds = parseInt(time, 10)
    seconds = seconds < 10 ? `0${seconds}` : seconds

    setTime(seconds)

    time -= 1
  }, 1000)

  // this.element.classList.add('sceneStarted')
}

export default PlayStage
