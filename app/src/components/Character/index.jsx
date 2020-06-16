import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import Lottie from '~components/Lottie'

const Character = props => {
  const { character, extraClassName, mood } = props

  return (
    <div className={classNames(styles.character, extraClassName)}>
      <Lottie path={character.lottie[mood]} extraClassName={styles.lottie} />
    </div>
  )
}

export default Character
