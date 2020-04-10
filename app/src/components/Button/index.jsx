import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { text, type } = props

  return (
    <div className={classNames(styles.button, { [styles.mobile]: type === 'mobile' })}>
      <div className={styles.inner}>
        {text}
      </div>
    </div>
  )
}

export default Button
