import React, { useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { itemImage, scores, time } = props
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    PlayersManager.addSubscriber('player_connection_change', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_connection_change', forceUpdate)
    }
  }, [forceUpdate])

  const renderPlayerBlock = (player, score) => {
    const items = [...new Array(score)]

    return (
      <div className={styles.player}>
        <div className={classNames(styles.character, { [styles.characterLost]: player.lost })}>
          <AutoplayVideo src={player.video} extraClassName={styles.characterVideo} />
        </div>
        <div className={styles.score}>{zeroUnit(player.score())}</div>
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
      {PlayersManager.players[0] && renderPlayerBlock(PlayersManager.players[0], scores[0])}
      <div className={styles.center}>
        <div className={styles.timer}>{zeroUnit(time)}</div>
      </div>
      {PlayersManager.players[1] && renderPlayerBlock(PlayersManager.players[1], scores[1])}
    </div>
  )
}

function zeroUnit(number) {
  return number < 10 ? `0${number}` : number
}

export default Board
