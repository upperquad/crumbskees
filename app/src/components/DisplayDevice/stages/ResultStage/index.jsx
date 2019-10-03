import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

import resultBg from '~assets/images/round_3/s3-intro.mp4'

import PlayersManager from '~managers/PlayersManager'

const ResultStage = () => {
  const winners = []
  const results = []
  PlayersManager.players.forEach(player => {
    winners.push(player)
  })
  PlayersManager.players.forEach(player => {
    results.push(player.score())
  })
  console.log('result', results)
  const winners_ = []
  let tie = false

  for (let i = 0; i <= PlayersManager.players.length - 1; i++) {
    if (i < PlayersManager.players.length - 1) {
      if (winners[i].score() > winners[i + 1].score()) {
        winners_.push(winners[i])
      }
    } else if (winners[i].score() > winners[i - 1].score()) {
      winners_.push(winners[i])
    }
  }

  if (winners_.length !== 1) {
    tie = true
  }

  console.log(tie, winners_)

  const winnerImage = []

  winners_.forEach(winner => {
    winnerImage.push(<img src={winner.image} className={styles.playerAvatar} alt="" />)
  })

  // TODO: align property names when Players are finalized
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
        <div className={styles.player}>{tie ? 'Tied!' : winners_[0].name}</div>
        <div className={classNames(styles.playersImages, { [styles.playersImagesTied]: tie })}>
          { winnerImage }
        </div>
        <div className={styles.score}>{winners_[0].score()}</div>
        <div className={styles.circle} />
        <div className={classNames(styles.timebar, styles.resultTimebar)} />
      </div>
    </div>
  )
}

export default ResultStage
