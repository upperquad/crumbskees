import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { clickHandler, extraClassName, isFullWidth, isKeyPad, link, text } = props

  const cardElem = (
    <div className={styles.buttonInner}>
      <div className={styles.buttonCard}>{text}</div>
    </div>
  )

  const blurFocus = event => {
    event.currentTarget.blur()
  }

  let buttonElem
  if (link) {
    buttonElem = (
      <a
        className={styles.button}
        href={link}
        onClick={blurFocus}
      >
        {cardElem}
      </a>
    )
  } else if (clickHandler) {
    buttonElem = (
      <div
        className={classNames(styles.button, {
          [styles.isKeyPad]: isKeyPad,
          [styles.isFullWidth]: isFullWidth,
        })}
        role="button"
        tabIndex="0"
        onClick={event => {
          blurFocus(event)
          clickHandler(event)
        }}
      >
        {cardElem}
      </div>
    )
  }

  return (
    <div className={classNames(styles.buttonWrap, extraClassName)}>
      {buttonElem}
    </div>
  )
}

export default Button
