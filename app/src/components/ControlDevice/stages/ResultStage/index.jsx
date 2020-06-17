import React from 'react'
import styles from './style.module.scss'
import { CHARACTERS } from '~constants'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

const ResultStage = props => {
  const { characterIndex, mode, resetGame, score, winner } = props
  let resultTop
  let resultBottom
  const video = []
  const hostURL = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1)
  let shareURL = `${hostURL}share?player=${characterIndex}&score=${score}`
  let shareDescription

  if (winner === 'tied') {
    resultTop = 'Nobody wins! '
    resultBottom = resultTop
    CHARACTERS.forEach(character => {
      video.push(<AutoplayVideo src={character.videoWhite} extraClassName={styles.video} poster={character.image} />)
    })
    shareURL += '&result=tied'
    shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.tied, score)
  } else {
    resultBottom = CHARACTERS[winner].name
    video.push(
      <AutoplayVideo
        src={CHARACTERS[winner].videoWhite}
        extraClassName={styles.video}
        poster={CHARACTERS[winner].image}
      />,
    )

    if (mode === 'SINGLE_PLAYER') {
      resultTop = 'Good job!'
      shareURL += '&result=singleMode'
      shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.singleMode, score)
    } else if (winner === characterIndex) {
      resultTop = 'You won!'
      shareURL += '&result=win'
      shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.win, score)
    } else {
      resultTop = 'You’re bad!'
      shareURL += '&result=lose'
      shareDescription = global.SHARING_MESSAGES.description.lose
    }
  }

  shareURL = encodeURIComponent(shareURL)

  return (
    <section className={styles.result}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.shareButton}
      >
        Share on Facebook
      </a>
      <a
        href={`http://twitter.com/share?text=${shareDescription}&url=${shareURL}`}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.shareButton}
      >
        Share on Twitter
      </a>
      <div className={styles.winner}>
        <MarqueeText text={resultTop} duration="6s" />
        <div className={styles.imageWrapper}>{video}</div>
        <MarqueeText text={resultBottom} duration="6s" />
      </div>
      <div className={styles.smallText}>{winner === 'tied' ? 'Tie!' : 'Winner!'}</div>
      <div className={styles.smallText}>
        Score:
        {score}
      </div>
      <div className={styles.button} onClick={resetGame}>
        Play again
      </div>
    </section>
  )
}

export default ResultStage
