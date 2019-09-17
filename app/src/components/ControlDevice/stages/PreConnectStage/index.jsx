import React, { useState, useEffect } from 'react'
// import classNames from 'classnames'
import styles from './style.module.scss'

import Circle from '~components/ControlDevice/Circle'

import WebSocketManager from '~managers/WebSocketManager'

const PreConnectStage = props => {
  const { onFinish } = props
  const [token, setToken] = useState('')
  const [errorReason, setErrorReason] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => effectWebsocket(), [])
  useEffect(() => effectWebsocketClose(setToken, setErrorReason, setIsConnecting), [
    setToken,
    setErrorReason,
    setIsConnecting,
  ])

  const { hasPlayed } = props

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event
      switch (type) {
        case 'accepted': {
          onFinish()
          break
        }
        default:
          break
      }
    }
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [])

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
            onClick={() => updateToken(key, token, setToken, setErrorReason, setIsConnecting)}
          >
            {key}
          </div>
        ))}
        <div className={styles.tokenInputKey} key={-1} onClick={() => updateToken(-1, token, setToken, setErrorReason)}>
          ←
        </div>
      </div>
      <div className={styles.placeholder} />
      <div className={styles.bottomPattern} />
    </div>
  )
}

function effectWebsocket() {
  WebSocketManager.init('control')

  const path = window.location.pathname
  if (/^\/\d{3}$/.test(path)) {
    const token = path.slice(1)
    WebSocketManager.connect({ token })
  }

  return () => {
    WebSocketManager.disconnect()
  }
}

function effectWebsocketClose(setToken, setErrorReason, setIsConnecting) {
  const onWebSocketClose = event => {
    const {
      detail: { reason },
    } = event
    if (reason === 'invalid_token') {
      setErrorReason('Invalid token')
    } else if (reason === 'no_active_game') {
      setErrorReason("There's no active game")
    }
    setIsConnecting(false)
    setToken('')
  }

  window.addEventListener('WS_CLOSE', onWebSocketClose)

  return () => {
    window.removeEventListener('WS_CLOSE', onWebSocketClose)
  }
}

function updateToken(key, token, setToken, setErrorReason, setIsConnecting) {
  setErrorReason(null)

  if (key === -1) {
    setToken(token.slice(0, -1))
  } else {
    const newToken = token + key
    if (newToken.length >= 3) {
      setIsConnecting(true)
      WebSocketManager.connect({ token: newToken })

      // PlayerManager.setPlayer(token)
    }

    setToken(newToken)
  }
}

export default PreConnectStage
