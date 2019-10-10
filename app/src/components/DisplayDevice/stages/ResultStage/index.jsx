import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

import resultBg from '~assets/images/round_3/s3-intro.mp4'

import PlayersManager from '~managers/PlayersManager'

const ResultStage = props => {
  const { extraClassName, onFinish } = props
  const [maxScore, setMaxScore] = useState(null)
  const [winners, setWinners] = useState([])
  const [isTie, setIsTie] = useState(null)

  useEffect(() => {
    // special handling for the short amount of time after
    // the game is restarted but before this is unmounted
    const updateWinners = () => {
      const scores = PlayersManager.players.map(player => {
        if (typeof player.score === 'function') {
          return player.score()
        }
        return null
      })
      const newMaxScore = Math.max(...scores)
      if (typeof newMaxScore === 'number') {
        const newWinners = PlayersManager.players.filter(player => player.score() === newMaxScore)
        const newIsTie = newWinners.length !== 1
        setMaxScore(newMaxScore)
        setWinners(newWinners)
        setIsTie(newIsTie)
      }
    }

    updateWinners()
    PlayersManager.addSubscriber('player_change', updateWinners)

    return () => PlayersManager.removeSubscriber('player_change', updateWinners)
  }, [])

  useEffect(() => {
    const restartTimeout = setTimeout(onFinish, 13000)

    return () => clearTimeout(restartTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classNames(styles.result, extraClassName)}>
      <AutoplayVideo extraClassName={styles.background} src={resultBg} />
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <MarqueeText
            extraClassName={styles.title}
            text={isTie ? 'Nobody wins!' : 'Winner!'}
            isAlternate
            isWhite
            duration="5s"
          />
        </div>
        <div className={styles.player}>{isTie ? 'Tied!' : winners[0].name}</div>
        <div className={classNames(styles.playersImages, { [styles.playersImagesTied]: isTie })}>
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
