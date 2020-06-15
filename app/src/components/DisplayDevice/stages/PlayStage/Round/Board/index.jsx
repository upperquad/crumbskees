import React, { useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { items, time, totalTime, transitionStatus } = props
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

  const renderPlayerMeta = (player, itemsForThisRound, index) => (
    <div className={classNames(styles.playerMeta, styles[`playerMeta--${index + 1}`])}>
      <div className={styles.score}><span>{zeroUnit(player.score())}</span></div>
      <div className={styles.power}>power</div>
      <div className={styles.items}>
        {itemsForThisRound.map((imageItem, itemIndex) => {
          const key = `${imageItem}-${itemIndex}`
          return (
            <img
              className={classNames(styles.item, styles.itemSnack)}
              src={imageItem}
              key={key}
              alt=""
            />
          )
        })}
        {[...Array(12 - itemsForThisRound.length)].map((e, i) => {
          const key = `placeholder-${i}`
          return (
            <div className={classNames(styles.item, styles.itemPlaceholder)} key={key} />
          )
        })}
      </div>
    </div>
  )

  return (
    <div className={classNames(styles.board, { [styles.boardEntering]: transitionStatus === 'entering' })}>
      {PlayersManager.players[0] && renderCharacter(PlayersManager.players[0], 0)}
      {PlayersManager.players[0] && renderPlayerMeta(PlayersManager.players[0], items[0], 0)}
      <div className={styles.timer}>
        <div className={styles.timerMaskLeft} style={{ width: `${(time / totalTime) * 100}%` }} />
        <div className={styles.timerMaskRight} style={{ width: `${(1 - time / totalTime) * 100}%` }} />
        <span className={styles.timerInt}>{zeroUnit(parseInt(time, 10))}</span>
        <span className={styles.timerFrac}>{getFractionPart(time)}</span>
      </div>
      {PlayersManager.players[1] && renderPlayerMeta(PlayersManager.players[1], items[1], 1)}
      {PlayersManager.players[1] && renderCharacter(PlayersManager.players[1], 1)}
    </div>
  )
}

function getFractionPart(number) {
  return (number - parseInt(number, 10)).toFixed(2).slice(1)
}

function zeroUnit(number) {
  if (number < 0) {
    return '00'
  }
  return number < 10 ? `0${number}` : number
}

export default Board
