import React, { useEffect } from 'react'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { itemImage, time } = props

  const forceUpdate = useForceUpdate()

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber('player_score', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_score', forceUpdate)
    }
  }, [forceUpdate])

  const renderPlayerBlock = player => {
    // REVIEW: read okay, but read from a function?
    const items = [...new Array(player._scoreInRound)]

    return (
      <div className={styles.player}>
        <div className={styles.character}>
          <AutoplayVideo src={player.video} extraClassName={styles.characterVideo} />
        </div>
        <div className={styles.score}>{zeroUnit(player._score)}</div>
        <div className={styles.name}>
          {player.name}
        </div>
        <div className={styles.items}>
          {items.map(() => <img className={styles.item} src={itemImage} alt="" />)}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.board}>
      {PlayersManager.players[0] && renderPlayerBlock(PlayersManager.players[0])}
      <div className={styles.center}>
        <div className={styles.timer}>{zeroUnit(time)}</div>
      </div>
      {PlayersManager.players[1] && renderPlayerBlock(PlayersManager.players[1])}
    </div>
  )
}

function zeroUnit(number) {
  return number < 10 ? `0${number}` : number
}

export default Board
