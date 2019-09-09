import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

const Board = props => {
  const { time } = props

  const forceUpdate = useForceUpdate()

  const seconds = parseInt(time, 10)
  const player1 = PlayersManager.players[0]
  const player2 = PlayersManager.players[1]

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber('player_click', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_click', forceUpdate)
    }
  }, [forceUpdate])

  return (
    <Fragment>
      <img src="" className={styles.itemToFind} alt="" />
      <div className={styles.board}>
        <div className={styles.player}>
          <div className={styles.character}>{/* <img src={players[0].avatar} alt="" /> */}</div>
          <div className={classNames(styles.score, styles.purple)}>{zeroUnit(player1._score)}</div>
          <div className={styles.name}>PLAYER 1</div>
          <div className={styles.items} />
        </div>
        <div className={styles.center}>
          <div className={styles.timer}>{zeroUnit(seconds)}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.character}>{/* <img src={players[1].avatar} alt="" /> */}</div>
          <div className={classNames(styles.score, styles.red)}>{zeroUnit(player2._score)}</div>
          <div className={styles.name}>PLAYER 2</div>
          <div className={styles.items} />
        </div>
      </div>
    </Fragment>
  )
}

function zeroUnit(number) {
  return number < 10 ? `0${number}` : number
}

export default Board
