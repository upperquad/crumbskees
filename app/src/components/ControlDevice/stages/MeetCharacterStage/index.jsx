import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Character from '~components/Character'

const MeetCharacterStage = props => {
  const { character } = props
  return (
    <div
      className={classNames(
        styles.meetCharacter,
        styles[`meetCharacter--${character.color}`],
      )}
    >
      <h2 className={styles.title} data-text="Let’s go!">Let’s go!</h2>
      <Character
        extraClassName={styles.character}
        character={character}
        mood="happy"
      />
    </div>
  )
}

export default MeetCharacterStage
