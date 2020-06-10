import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const Button = props => {
  const { clickHandler, extraClassName, isLit, link, text } = props

  const cardElem = (
    <div className={styles.buttonInner}>
      <div className={styles.buttonCard}>{text}</div>
    </div>
  )

  let buttonElem

  if (link) {
    buttonElem = (
      <a
        className={styles.button}
        href={link}
      >
        {cardElem}
      </a>
    )
  } else if (clickHandler) {
    buttonElem = (
      <div
        className={classNames(styles.button, {
          [styles.isLit]: isLit,
        })}
        role="button"
        tabIndex="0"
        onClick={clickHandler}
      >
        {cardElem}
      </div>
    )
  } else {
    buttonElem = (
      <div
        className={classNames(styles.button, styles.buttonNonClickable, {
          [styles.isLit]: isLit,
        })}
      >
        {cardElem}
      </div>
    )
  }

  return (
    <div className={classNames(styles.buttonWrap, extraClassName)}>{buttonElem}</div>
  )
}

export default Button
