import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'

import Button from '~components/Button'
import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'
import Lottie from '~components/Lottie'

import p1WinBg from '~assets/images/result/p1-win.mp4'
import p1WinBgImage from '~assets/images/result/p1-win.jpg'
import p2WinBg from '~assets/images/result/p2-win.mp4'
import p2WinBgImage from '~assets/images/result/p2-win.jpg'
import tieBg from '~assets/images/result/tie.mp4'
import tieBgImage from '~assets/images/result/tie.jpg'
import titleJson from '~assets/images/landing/title.json'


const ResultStage = props => {
  const { extraClassName, onFinish } = props
  const [winnerId, setWinnerId] = useState(null)

  useEffect(() => {
    // special handling for the short amount of time after
    // the game is restarted but before this is unmounted
    const scores = PlayersManager.players.map(player => {
      if (typeof player.score === 'function') {
        return player.score()
      }
      return null
    })
    const newMaxScore = Math.max(...scores)
    if (typeof newMaxScore === 'number') {
      const newWinners = PlayersManager.players.filter(player => (
        typeof player.score === 'function' && player.score() === newMaxScore
      ))
      let newWinnerId = 'tie'
      if (newWinners.length === 1) {
        newWinnerId = newWinners[0].id
      }
      setWinnerId(newWinnerId)
      setWinnerId('p1')
    }
  }, [])

  let bg
  let bgImage
  switch (winnerId) {
    case 'p1':
      bg = p1WinBg
      bgImage = p1WinBgImage
      break
    case 'p2':
      bg = p2WinBg
      bgImage = p2WinBgImage
      break
    case 'tie':
      bg = tieBg
      bgImage = tieBgImage
      break
    default:
      break
  }

  return (
    <div className={classNames(styles.result, extraClassName)}>
      {winnerId && (
        <React.Fragment>
          <AutoplayVideo extraClassName={styles.background} src={bg} poster={bgImage} />
          <div className={styles.marqueeLeft}>
            <MarqueeText
              extraClassName={styles.marqueeSideText}
              text="Winner winner chicken dinner! "
              duration="12s"
            />
          </div>
          <div className={styles.marqueeRight}>
            <MarqueeText
              extraClassName={styles.marqueeSideText}
              text="Winner winner chicken dinner! "
              duration="12s"
            />
          </div>
          <div className={classNames(styles.banner, styles[`banner--${winnerId}`])}>
            <h1>
              <Lottie extraClassName={styles.titleMain} data={titleJson} />
            </h1>
            <Button
              text="Play again"
              extraClassName={styles.button}
              clickHandler={onFinish}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default ResultStage
