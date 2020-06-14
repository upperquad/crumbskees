import React, { useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { scores, time, transitionStatus } = props
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    PlayersManager.addSubscriber('player_connection_change', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_connection_change', forceUpdate)
    }
  }, [forceUpdate])

  const renderCharacter = (player, index) => (
    <div
      className={
        classNames(
          styles.character,
          styles[`character--${index + 1}`],
          { [styles.characterLost]: player.lost },
        )
      }
    >
      <AutoplayVideo src={player.video} extraClassName={styles.characterVideo} poster={player.image} />
    </div>
  )

  const renderPlayerMeta = (player, scoreForThisRound, index) => (
    <div className={classNames(styles.playerMeta, styles[`playerMeta--${index + 1}`])}>
      <div className={styles.score}><span>{zeroUnit(player.score())}</span></div>
      <div className={styles.power}>power</div>
      <div className={styles.items}>
        {scoreForThisRound.map(imageItem => (
          <img className={styles.item} src={imageItem} alt="" />
        ))}
      </div>
    </div>
  )

  return (
    <div className={classNames(styles.board, { [styles.boardEntering]: transitionStatus === 'entering' })}>
      {PlayersManager.players[0] && renderCharacter(PlayersManager.players[0], 0)}
      {PlayersManager.players[0] && renderPlayerMeta(PlayersManager.players[0], scores[0], 0)}
      <div className={styles.timer}>
        {zeroUnit(time)}
      </div>
      {PlayersManager.players[1] && renderPlayerMeta(PlayersManager.players[1], scores[1], 1)}
      {PlayersManager.players[1] && renderCharacter(PlayersManager.players[1], 1)}
    </div>
  )
}

function zeroUnit(number) {
  if (number < 0) {
    return '00'
  }
  return number < 10 ? `0${number}` : number
}

export default Board
