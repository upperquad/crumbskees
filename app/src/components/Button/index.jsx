import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { extraClassName, text } = props

  return (
    <div className={classNames(styles.button, extraClassName)}>
      <div className={styles.inner}>
        {text}
      </div>
    </div>
  )
}

export default Button
