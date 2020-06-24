import React, { useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import styles from './style.module.scss'

const PopupMessage = props => {
  const { color, messageCount, onEnd, persistent, text, x = 0.5, y = 0.5 } = props

  useEffect(() => {
    if (onEnd) {
      const timeout = setTimeout(onEnd, persistent ? 2000 : 1700)

      return () => {
        clearTimeout(timeout)
      }
    }
    return undefined

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEnd])

  return (
    <div className={styles.messageContainer}>
      <TransitionGroup>
        <Transition key={messageCount} timeout={{ enter: 0, exit: 2000 }}>
          <div
            className={classNames(styles.message, {
              [styles.messagePersistent]: persistent,
            })}
            style={{
              color,
              left: `${x * 100}%`,
              top: `${y * 100}%`,
            }}
            data-text={text}
          >
            {text}
          </div>
        </Transition>
      </TransitionGroup>
    </div>
  )
}

export default PopupMessage
