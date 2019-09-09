import React, { Fragment } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

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
            {/* <img src={players[0].avatar} alt="" /> */}
          </div>
          <div className={classNames(styles.score, styles.purple)}>
            00
          </div>
          <div className={styles.name}>
            PLAYER 1
          </div>
          <div className={styles.items} />
        </div>
        <div className={styles.center}>
          <div className={styles.timer}>
            {seconds}
          </div>
        </div>
        <div className={styles.player}>
          <div className={styles.character}>
            {/* <img src={players[1].avatar} alt="" /> */}
          </div>
          <div className={classNames(styles.score, styles.red)}>
            00
          </div>
          <div className={styles.name}>
            PLAYER 2
          </div>
          <div className={styles.items} />
        </div>
      </div>
    </Fragment>
  )
}

export default Board
