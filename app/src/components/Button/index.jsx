import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import SoundManager from '~managers/SoundManager'

const Button = props => {
  const {
    clickHandler,
    extraCardClassName,
    extraClassName,
    extraInnerClassName,
    icon,
    isFullWidth,
    isKeyPad,
    isMute,
    isSmallShadow,
    link,
    text,
  } = props

  const cardElem = (
    <div className={classNames(styles.buttonInner, extraInnerClassName)}>
      <div
        className={classNames(styles.buttonCard, extraCardClassName, {
          [styles.isIcon]: icon,
        })}
      >
        {icon ? <img src={icon} alt={text} className={styles.icon} /> : text}
      </div>
    </div>
  )

  const buttonClick = event => {
    event.currentTarget.blur()
    SoundManager.playSound('munch')
  }

  let buttonElem
  if (link) {
    buttonElem = (
      <a
        className={styles.button}
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        onClick={buttonClick}
      >
        {cardElem}
      </a>
    )
  } else if (clickHandler) {
    buttonElem = (
      <div
        className={classNames(styles.button, {
          [styles.isKeyPad]: isKeyPad,
          [styles.isMute]: isMute,
          [styles.isFullWidth]: isFullWidth,
          [styles.isSmallShadow]: isSmallShadow,
        })}
        role="button"
        tabIndex="0"
        onClick={event => {
          buttonClick(event)
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
