import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

const Board = props => {
  const { itemImage, time } = props

  const forceUpdate = useForceUpdate()

  const seconds = parseInt(time, 10)
  const playersData = [
    { score: PlayersManager.players[0]._score, scoreInScene: PlayersManager.players[0]._scoreInScene, items: [] },
    { score: PlayersManager.players[1]._score, scoreInScene: PlayersManager.players[1]._scoreInScene, items: [] },
  ]

  playersData.forEach(player => {
    for (let i = 0; i < player.scoreInScene; i++) {
      player.items.push(<img className={styles.item} src={itemImage} alt="" />)
    }
  })

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber('player_score', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_score', forceUpdate)
    }
  }, [forceUpdate])

  return (
    <Fragment>
      <img src="" className={styles.itemToFind} alt="" />
      <div className={styles.board}>
        <div className={styles.player}>
          <div className={styles.character}>{/* <img src={players[0].avatar} alt="" /> */}</div>
          <div className={classNames(styles.score, styles.purple)}>{zeroUnit(playersData[0].score)}</div>
          <div className={styles.name}>PLAYER 1</div>
          <div className={styles.items}>{playersData[0].items}</div>
        </div>
        <div className={styles.center}>
          <div className={styles.timer}>{zeroUnit(seconds)}</div>
        </div>
        <div className={styles.player}>
          <div className={styles.character}>{/* <img src={players[1].avatar} alt="" /> */}</div>
          <div className={classNames(styles.score, styles.red)}>{zeroUnit(playersData[1].score)}</div>
          <div className={styles.name}>PLAYER 2</div>
          <div className={styles.items}>{playersData[1].items}</div>
        </div>
      </div>
    </Fragment>
  )
}

function zeroUnit(number) {
  return number < 10 ? `0${number}` : number
}

export default Board
