import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import Circle from '~components/ControlDevice/Circle'

import WebSocketManager from '~managers/WebSocketManager'

const PreConnectStage = props => {
  const { hasPlayed, onFinish } = props
  const [token, setToken] = useState('')
  const [errorReason, setErrorReason] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    if (!hasPlayed) {
      WebSocketManager.init('control')

      const path = window.location.pathname
      if (/^\/\d{3}$/.test(path)) {
        const urlToken = path.slice(1)
        WebSocketManager.connect({ token: urlToken })
      }
    }
  }, [])

  useEffect(() => {
    const onWebSocketClose = detail => {
      const { reason } = detail
      if (reason === 'invalid_token') {
        setErrorReason('Invalid token')
      } else if (reason === 'no_active_game') {
        setErrorReason("There's no active game")
      }
      setIsConnecting(false)
      setToken('')
    }

    WebSocketManager.addSubscriber('WS_CLOSE', onWebSocketClose)

    return () => {
      WebSocketManager.removeSubscriber('WS_CLOSE', onWebSocketClose)
    }
  }, [])

  useEffect(() => {
    const messageHandler = detail => {
      const { type } = detail
      switch (type) {
        case 'accepted': {
          onFinish()
          break
        }
        default:
          break
      }
    }
    WebSocketManager.addSubscriber('MESSAGE', messageHandler)

    return () => {
      WebSocketManager.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [onFinish])

  const updateToken = key => {
    setErrorReason(null)

    if (key === -1) {
      setToken(prevToken => prevToken.slice(0, -1))
    } else {
      setToken(prevToken => {
        const newToken = prevToken + key

        if (newToken.length >= 3) {
          setIsConnecting(true)
          WebSocketManager.connect({ token: newToken })
        }

        return newToken
      })
    }
  }

  return (
    <div className={styles.preConnect}>
      <Circle color="yellow" />
      <h2 className={styles.instruction}>
        {`Enter the red code on the screen ${
          hasPlayed ? 'to play\xA0again' : 'to\xA0join'
        }`}
      </h2>
      <div className={styles.tokenDisplay}>{token}</div>
      <div className={styles.label}>
        {errorReason && <span className={styles.labelError}>{errorReason}</span>}
        {isConnecting && <span className={styles.labelConnecting}>Connecting...</span>}
      </div>
      <div className={styles.tokenInput}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(key => (
          <div
            className={styles.tokenInputKey}
            key={key}
            onClick={() => updateToken(key)}
          >
            {key}
          </div>
        ))}
        <div className={styles.tokenInputKey} key={-1} onClick={() => updateToken(-1)}>
          ←
        </div>
      </div>
      <div className={styles.placeholder} />
      <div className={styles.bottomPattern} />
    </div>
  )
}

export default PreConnectStage
