import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import PlayersManager from '~managers/PlayersManager'
import SoundManager from '~managers/SoundManager'

import Button from '~components/Button'
import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'
import Lottie from '~components/Lottie'
import MuteButton from '~components/MuteButton'

import p1WinBg from '~assets/images/result/p1-win.mp4'
import p1WinBgImage from '~assets/images/result/p1-win.jpg'
import p2WinBg from '~assets/images/result/p2-win.mp4'
import p2WinBgImage from '~assets/images/result/p2-win.jpg'
import tieBg from '~assets/images/result/tie.mp4'
import tieBgImage from '~assets/images/result/tie.jpg'
import singleBg from '~assets/images/result/single.mp4'
import singleBgImage from '~assets/images/result/single.jpg'
import titleJson from '~assets/images/landing/title.json'

import facebook from '~assets/images/icons/facebook.svg'
import twitter from '~assets/images/icons/twitter.svg'

const ResultStage = props => {
  const { extraClassName, onFinish } = props
  const [winnerSlug, setWinnerSlug] = useState(null)
  const [playersCache, setPlayersCache] = useState([])
  const hostURL = `${window.location.protocol}//${window.location.hostname}/`
  const shareURL = encodeURIComponent(hostURL)

  useEffect(() => {
    SoundManager.playMusic('result')
  }, [])

  useEffect(() => {
    // special handling for the short amount of time after
    // the game is restarted but before this is unmounted
    const newPlayersCache = PlayersManager.players.map(player => {
      if (typeof player.score === 'function') {
        return { score: player.score(), slug: player.slug }
      }
      return null
    })

    if (PlayersManager.mode === 'DUAL') {
      const newMaxScore = Math.max(...newPlayersCache.map(player => player.score))
      if (typeof newMaxScore === 'number') {
        const newWinners = newPlayersCache.filter(player => player.score === newMaxScore)
        const newWinnerSlug = newWinners.length === 1 ? newWinners[0].slug : 'tie'
        setPlayersCache(newPlayersCache)
        setWinnerSlug(newWinnerSlug)
      }
    } else if (PlayersManager.mode === 'SINGLE') {
      setPlayersCache(newPlayersCache)
      setWinnerSlug('single')
    }
  }, [])

  let bg
  let bgImage
  switch (winnerSlug) {
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
    case 'single':
      bg = singleBg
      bgImage = singleBgImage
      break
    default:
      break
  }

  return (
    <div className={classNames(styles.result, extraClassName)}>
      {winnerSlug && (
        <React.Fragment>
          <AutoplayVideo extraClassName={styles.background} src={bg} poster={bgImage} />
          <div className={styles.marqueeTop}>
            <MarqueeText
              extraClassName={styles.marqueeTopText}
              text=" Made with <3 BY Upperquad
              ~~~~(~@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•~)~~~~
              Songs: Jayster • Jaar • Tsuwami • Billsepher/Square Therapy (CC BY-NC-ND 3.0)
              ~~~~(~•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◊~)~~~~
              Sounds: Juhani Junkala (CC0 1.0)
              ~~~~(~◊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@~)~~~~"
              duration="36s"
            />
          </div>
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
          <div className={classNames(styles.scores, styles[`scores--${winnerSlug}`])}>
            {playersCache.map(player => (
              <div
                key={player.slug}
                className={classNames(styles.score, styles[`score--${player.slug}`])}
              >
                {zeroUnit(player.score)}
              </div>
            ))}
          </div>
          <div className={classNames(styles.banner, styles[`banner--${winnerSlug}`])}>
            <h1>
              <Lottie extraClassName={styles.titleMain} data={titleJson} />
            </h1>
            <Button
              extraClassName={styles.shareTwitter}
              link={`http://twitter.com/share?url=${shareURL}`}
              icon={twitter}
              text="Share on Twitter"
            />
            <Button
              extraClassName={styles.shareFacebook}
              link={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`}
              icon={facebook}
              text="Share on Facebook"
            />
            <Button
              text="Again!"
              extraClassName={styles.button}
              clickHandler={onFinish}
            />
          </div>
          <MuteButton extraClassName={styles.muteButton} />
        </React.Fragment>
      )}
    </div>
  )
}

function zeroUnit(number) {
  if (number < 0) {
    return '00'
  }
  return number < 10 ? `0${number}` : number
}

export default ResultStage
