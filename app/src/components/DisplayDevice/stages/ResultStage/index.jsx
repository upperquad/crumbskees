import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

import resultBg from '~assets/images/round_3/s3-intro.mp4'

import PlayersManager from '~managers/PlayersManager'

const ResultStage = () => {
  const scores = PlayersManager.players.map(player => player.score())
  const maxScore = Math.max(...scores)

  const winners = PlayersManager.players.filter(player => player.score() === maxScore)

  const tie = winners.length !== 1

  return (
    <div className={styles.result}>
      <AutoplayVideo extraClassName={styles.background} src={resultBg} />
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <MarqueeText
            extraClassName={styles.title}
            text={tie ? 'Nobody wins!' : 'Winner!'}
            isAlternate
            isWhite
            duration="5s"
          />
        </div>
        <div className={styles.player}>{tie ? 'Tied!' : winners[0].name}</div>
        <div className={classNames(styles.playersImages, { [styles.playersImagesTied]: tie })}>
          {winners.map(winner => (
            <img src={winner.image} className={styles.playerAvatar} alt="" />
          ))}
        </div>
        <div className={styles.score}>{maxScore}</div>
        <div className={styles.circle} />
        <div className={classNames(styles.timebar, styles.resultTimebar)} />
      </div>
    </div>
  )
}

export default ResultStage
