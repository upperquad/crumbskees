import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { ready, text, type } = props
  const [pressed, setPressed] = useState(false)
  const [pressedOnce, setPressedOne] = useState(false)

  useEffect(() => {
    if (ready === true && pressed === false) {
      setPressed(true)

      setTimeout(() => {
        setPressedOne(true)
        setPressed(false)
      }, 300)
    }
  }, [ready])

  return (
    <div
      className={classNames(styles.button, {
        [styles.mobile]: type === 'mobile',
        [styles.pressed]: pressed,
        [styles.pressedOnce]: pressedOnce,
      })}
    >
      <div className={styles.inner}>{text}</div>
    </div>
  )
}

export default Button
