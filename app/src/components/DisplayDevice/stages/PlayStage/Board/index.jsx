import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

const Board = props => {
  const { time } = props

  let seconds = parseInt(time, 10)
  seconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <Fragment>
      <img src="" className={styles.itemToFind} alt="" />
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
            {seconds}
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
    </Fragment>
  )
}

export default Board
