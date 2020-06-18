import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { clickHandler, extraClassName, icon, isFullWidth, isKeyPad, link, text } = props

  const cardElem = (
    <div className={styles.buttonInner}>
      <div
        className={classNames(styles.buttonCard, {
          [styles.isIcon]: icon,
        })}
      >
        {icon ? <img src={icon} alt={text} className={styles.icon} /> : text}
      </div>
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
        rel="noopener noreferrer"
        target="_blank"
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
