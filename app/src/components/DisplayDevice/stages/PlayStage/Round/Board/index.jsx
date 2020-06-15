import React, { useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { items, powerArray, roundName, time, totalTime, transitionStatus } = props
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

  const renderPlayerMeta = (player, itemsForThisRound, power, index) => (
    <div className={classNames(styles.playerMeta, styles[`playerMeta--${index + 1}`])}>
      <div className={styles.score}><span>{zeroUnit(player.score())}</span></div>
      <div className={styles.power}>
        <TransitionGroup>
          {power && (
            <Transition
              key="board-power"
              timeout={{
                enter: 5,
                exit: 300,
              }}
            >
              {status => (
                <div
                  className={classNames(styles.powerInner, {
                    [styles.powerInnerEntering]: status === 'entering',
                    [styles.powerInnerExiting]: status === 'exiting' || status === 'exited',
                  })}
                >
                  <svg
                    className={classNames(styles.powerCircle, styles[`powerCircle--${power.type}`])}
                    viewBox="0 0 59 59"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path className={styles.powerCircleStroke} d="M29.6 1C37.2 1 44.4 4 49.7 9.3C55 14.7 58.1 22 58 29.6C58 37.2 54.9 44.4 49.6 49.7C44.2 55 37 58 29.4 58C21.8 58 14.6 55 9.3 49.6C4 44.2 1 37 1 29.4C1 21.8 4 14.6 9.4 9.3C14.8 4 22.1 1 29.6 1V1Z" />
                  </svg>
                  <img src={power.image} alt="" className={styles.powerImage} />
                </div>
              )}
            </Transition>
          )}
        </TransitionGroup>
      </div>
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
      {PlayersManager.players[0] && renderPlayerMeta(PlayersManager.players[0], items[0], powerArray[0], 0)}
      <div className={styles.timer}>
        <div className={styles.timerMaskLeft} style={{ width: `${(time / totalTime) * 100}%` }} />
        <div className={styles.timerMaskRight} style={{ width: `${(1 - time / totalTime) * 100}%` }} />
        <span className={styles.timerInt}>{zeroUnit(parseInt(time, 10))}</span>
        <span className={styles.timerFrac}>{getFractionPart(time)}</span>
        <div className={styles.timerRoundName}>{roundName}</div>
      </div>
      {PlayersManager.players[1] && renderPlayerMeta(PlayersManager.players[1], items[1], powerArray[1], 1)}
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
