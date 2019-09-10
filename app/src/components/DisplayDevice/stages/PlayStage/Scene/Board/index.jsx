import React, { Fragment, useEffect } from 'react'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

const Board = props => {
  const { itemImage, time } = props

  const forceUpdate = useForceUpdate()

  const playersContent = []

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber('player_score', forceUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_score', forceUpdate)
    }
  }, [forceUpdate])


  // Generate player content
  PlayersManager.players.forEach((player, index) => {
    const items = [...new Array(player._scoreInScene)]

    const content = (
      <div className={styles.player}>
        <div className={styles.character}>
          <AutoplayVideo src={player.character} extraClassName={styles.characterVideo} />
        </div>
        <div className={styles.score}>{zeroUnit(player._score)}</div>
        <div className={styles.name}>
          PLAYER&nbsp;
          {index + 1}
        </div>
        <div className={styles.items}>
          {items.map(() => (<img className={styles.item} src={itemImage} alt="" />))}
        </div>
      </div>
    )

    playersContent.push(content)
  })

  return (
    <Fragment>
      <img src="" className={styles.itemToFind} alt="" />
      <div className={styles.board}>
        {playersContent[0]}
        <div className={styles.center}>
          <div className={styles.timer}>{zeroUnit(time)}</div>
        </div>
        {playersContent[1]}
      </div>
    </Fragment>
  )
}

function zeroUnit(number) {
  return number < 10 ? `0${number}` : number
}

export default Board
