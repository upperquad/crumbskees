import React, { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Character from '~components/Character'

const BoardCharacter = props => {
  const { player, power, result, score } = props
  const lastScore = useRef(null)
  const scoreMoodTimeout = useRef(null)
  const [scoreMood, setScoreMood] = useState(null)

  useEffect(() => {
    if (lastScore.current !== null) {
      clearTimeout(scoreMoodTimeout.current)
      if (score - lastScore.current > 0) {
        setScoreMood('excited')
      } else if (score - lastScore.current < 0) {
        setScoreMood('angry')
      }
      scoreMoodTimeout.current = setTimeout(() => setScoreMood(null), 2000)
    }
    lastScore.current = score
  }, [score])

  let mood = 'happy'

  if (scoreMood) {
    mood = scoreMood
  }

  if (power) {
    switch (power.type) {
      case 'grow':
        mood = 'lsd'
        break
      case 'freeze':
        mood = 'freeze'
        break
      default:
        break
    }
  }

  if (result) {
    switch (result) {
      case 'won':
        mood = 'excited'
        break
      case 'lost':
        mood = 'sad'
        break
      default:
        break
    }
  }

  return (
    <div
      className={
        classNames(
          styles.character,
          styles[`character--${player.color}`],
          { [styles.characterLost]: player.lost },
        )
      }
    >
      <Character character={player} mood={mood} extraClassName={styles.characterLottie} />
    </div>
  )
}

export default BoardCharacter
