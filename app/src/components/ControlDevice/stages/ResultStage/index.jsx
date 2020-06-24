import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import { CHARACTERS } from '~constants'

import facebook from '~assets/images/icons/facebook.svg'
import twitter from '~assets/images/icons/twitter.svg'

import Button from '~components/Button'
import Character from '~components/Character'

const ResultStage = props => {
  // const { characterIndex, mode, resetGame, score, winner } = props
  const { character, resetGame, winner } = props
  const hostURL = `${window.location.protocol}//${window.location.hostname}/`
  // let shareURL = `${hostURL}share?player=${characterIndex}&score=${score}`
  // let shareDescription

  // if (winner === 'tied') {
  //   shareURL += '&result=tied'
  //   shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.tied, score)
  // } else if (mode === 'SINGLE_PLAYER') {
  //   shareURL += '&result=singleMode'
  //   shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.singleMode, score)
  // } else if (winner === characterIndex) {
  //   shareURL += '&result=win'
  //   shareDescription = global.parseMessage(global.SHARING_MESSAGES.description.win, score)
  // } else {
  //   shareURL += '&result=lose'
  //   shareDescription = global.SHARING_MESSAGES.description.lose
  // }

  // shareURL = encodeURIComponent(shareURL)
  const shareURL = encodeURIComponent(hostURL)

  let result
  let title
  if (winner === 'tied') {
    result = 'tied'
    title = 'It’s a tie!'
  } else if (CHARACTERS[winner] === character) {
    result = 'won'
    title = 'Winner!'
  } else {
    result = 'lost'
    title = 'Looser!'
  }

  return (
    <section className={classNames(styles.result, styles[`result--${character.slug}`])}>
      <h2 className={styles.title} data-text={title}>
        {title}
      </h2>
      <Character
        extraClassName={styles.character}
        character={character}
        mood={result === 'lost' ? 'lose' : 'win'}
      />
      <Button
        extraClassName={styles.resetButton}
        clickHandler={resetGame}
        text="Play again"
      />
      <div className={styles.shares}>
        <h3 className={styles.shareTitle}>Share:</h3>
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
      </div>

    </section>
  )
}

export default ResultStage
