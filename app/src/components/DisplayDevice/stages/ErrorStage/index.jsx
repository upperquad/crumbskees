import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import AutoplayVideo from '~components/AutoplayVideo'

import resultBg from '~assets/images/round_3/r3-intro.mp4'

const ERROR_DISPLAYS = {
  active_game_exist: {
    message: 'Another game is in progress',
    buttonText: 'Kick\'em off',
    buttonFunc: () => {
      // move this to the WebsocketManager? Or maybe just keep this until we kill it?
      const websocket = new WebSocket(`${window.location.origin.replace(/^http/, 'ws')}/admin?command=disconnect_all`)
      websocket.onopen = () => {
        websocket.close()
        window.location.reload()
      }
    },
  },
  default: {
    message: 'We\'ve lost connection!',
    buttonText: 'Restart',
    buttonFunc: () => {
      window.location.reload()
    },
    hasTimebar: true,
  },
}

const ErrorStage = props => {
  const { extraClassName, reason } = props
  const reasonObj = ERROR_DISPLAYS[reason] ? ERROR_DISPLAYS[reason] : ERROR_DISPLAYS.default

  useEffect(() => {
    if (reason && reasonObj.hasTimebar) {
      const timeout = setTimeout(reasonObj.buttonFunc, 13000)

      return () => {
        clearTimeout(timeout)
      }
    }

    return () => {}
  }, [reason, reasonObj])

  return (
    <div className={classNames(styles.error, extraClassName)}>
      <AutoplayVideo extraClassName={styles.background} src={resultBg} />
      <div className={styles.card}>
        <div className={styles.titleWrapper}>
          <MarqueeText extraClassName={styles.title} text="Whoops!" isAlternate isWhite duration="5s" />
        </div>
        <div className={styles.text}>
          <div className={styles.message}>{reasonObj.message}</div>
          <a
            className={styles.button}
            href="/"
            onClick={event => {
              event.preventDefault()
              reasonObj.buttonFunc()
            }}
          >
            {reasonObj.buttonText}
          </a>
        </div>
        {reasonObj.hasTimebar && <div className={classNames(styles.timebar, styles.resultTimebar)} />}
        <div className={styles.titleWrapper}>
          <MarqueeText extraClassName={styles.title} text="Whoops!" isAlternate isWhite duration="5s" />
        </div>
      </div>
    </div>
  )
}

export default ErrorStage
