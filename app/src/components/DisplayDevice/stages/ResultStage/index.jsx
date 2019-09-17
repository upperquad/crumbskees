import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

import resultBg from '~assets/images/scene_3/s3-intro.mp4'

import PlayersManager from '~managers/PlayersManager'

const ResultStage = () => {
  const [player1, player2] = PlayersManager.players
  const winners = []
  if (player1._score >= player2._score) {
    winners.push(player1)
  }
  if (player2._score >= player1._score) {
    winners.push(player2)
  }

  console.log(PlayersManager.players)

  // TODO: align property names when Players are finalized
  return (
    <div className={styles.result}>
      <AutoplayVideo extraClassName={styles.background} src={resultBg} />
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <MarqueeText
            extraClassName={styles.title}
            text={winners.length === 1 ? 'Winner!' : 'Nobody wins!'}
            isAlternate
            isWhite
            duration="5s"
          />
        </div>
        <div className={styles.player}>{winners.length === 1 ? winners[0].name : 'Tied!'}</div>
        <div className={classNames(styles.playersImages, { [styles.playersImagesTied]: false })}>
          {winners.map(winner => (
            <img src={winner.avatar} className={styles.playerAvatar} alt="" />
          ))}
        </div>
        <div className={styles.score}>{winners[0]._score}</div>
        <div className={styles.circle} />
        <div className={classNames(styles.timebar, styles.resultTimebar)} />
      </div>
    </div>
  )
}

export default ResultStage
