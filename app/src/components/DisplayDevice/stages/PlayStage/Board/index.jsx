import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

const Board = () => {
  const [timer, setTimer] = useState(0)

  if (timer === 0) {
    startTimer(setTimer, 40)
  }

  return (
    <div className={styles.board}>
      <div className={styles.player}>
        <div className={styles.character}>
          <img src="../../assets/game/images/character1.png" alt="" />
        </div>
        <div className={classNames(styles.score, styles.purple, typography.text80Bold)}>
          00
        </div>
        <div className={classNames(styles.name, typography.text48Bold)}>
          PLAYER 1
        </div>
        <div className={styles.items} />
      </div>
      <div className={styles.center}>
        <div className={classNames(styles.timer, typography.text112Bold)}>
          {timer}
        </div>
      </div>
      <div className={styles.player}>
        <div className={styles.character}>
          <img src="../../assets/game/images/character2.png" alt="" />
        </div>
        <div className={classNames(styles.score, styles.red, typography.text80Bold)}>
          00
        </div>
        <div className={classNames(styles.name, typography.text48Bold)}>
          PLAYER 2
        </div>
        <div className={styles.items} />
      </div>
    </div>
  )
}

function startTimer(setTimer, duration) {
  let timer = duration - 1
  let seconds

  setTimer(duration)

  setInterval(() => {
    seconds = parseInt(timer, 10)
    seconds = seconds < 10 ? `0${seconds}` : seconds

    setTimer(seconds)

    if (timer === 0) {
      // this.endScene('TIME\'S UP!')
      // this.destroyTargetScene(this.currentScene)
    }

    if (timer === 10) {
      // play sound countdown
      // this.countdownSound.play()
    }

    timer -= 1
  }, 1000)

  // this.element.classList.add('sceneStarted')
}

export default Board
