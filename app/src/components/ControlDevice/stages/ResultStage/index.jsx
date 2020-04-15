import React from 'react'
import styles from './style.module.scss'
import { CHARACTERS } from '~constants'

import Circle from '~components/ControlDevice/Circle'
import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

const ResultStage = props => {
  const { characterIndex, resetGame, score, winner } = props
  let resultTop
  let resultBottom
  let circleColor
  const video = []
  let shareURL = `${window.location.href}?player=${characterIndex}&score=${score}`
  let shareDescription

  if (winner === 'tied') {
    circleColor = 'yellow'
    resultTop = 'Nobody wins! '
    resultBottom = resultTop
    CHARACTERS.forEach(character => {
      video.push(<AutoplayVideo src={character.videoWhite} extraClassName={styles.video} poster={character.image} />)
    })
    shareURL += '&result=tied'
    shareDescription = `I tied, ${score}pts!`
  } else {
    resultBottom = CHARACTERS[winner].name
    circleColor = CHARACTERS[winner].color
    video.push(
      <AutoplayVideo
        src={CHARACTERS[winner].videoWhite}
        extraClassName={styles.video}
        poster={CHARACTERS[winner].image}
      />,
    )
    if (winner === characterIndex) {
      resultTop = 'You won!'
      shareURL += '&result=win'
      shareDescription = `I tied, ${score}pts!`
    } else {
      resultTop = 'You’re bad!'
      shareURL += '&result=lose'
      shareDescription = 'I lost at this game but I\'ll have my revenge!'
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
      <Circle color={circleColor} />
      <div className={styles.winner}>
        <MarqueeText text={resultTop} duration="6s" isAlternate isWhite />
        <div className={styles.imageWrapper}>{video}</div>
        <MarqueeText text={resultBottom} duration="6s" isAlternate isWhite />
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
