import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import Circle from '~components/ControlDevice/Circle'

import TokenSocketManager from '~managers/TokenSocketManager'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const PreConnectStage = props => {
  const { hasPlayed, onFinish } = props
  const [token, setToken] = useState('')
  const [errorReason, setErrorReason] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    if (!hasPlayed) {
      TokenSocketManager.init('control')

      const path = window.location.pathname
      if (/^\/\d{3}$/.test(path)) {
        const urlToken = path.slice(1)
        TokenSocketManager.connect({ token: urlToken })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onWebSocketClose = detail => {
      const { reason } = detail
      if (reason === 'invalid_token') {
        setErrorReason('Invalid token')
        setIsConnecting(false)
        setToken('')
      }
    }

    TokenSocketManager.addSubscriber('WS_CLOSE', onWebSocketClose)

    return () => {
      TokenSocketManager.removeSubscriber('WS_CLOSE', onWebSocketClose)
    }
  }, [])

  useEffect(() => {
    const messageHandler = detail => {
      const { data, type } = detail
      switch (type) {
        case 'player_token_accepted': {
          const { id } = data
          ServerPeer.connect(id)
          break
        }
        default:
          break
      }
    }
    TokenSocketManager.addSubscriber('MESSAGE', messageHandler)

    return () => {
      TokenSocketManager.removeSubscriber('MESSAGE', messageHandler)
    }
  }, [])

  useEffect(() => {
    const onPeerTimeout = () => {
      setErrorReason('Cannot connect to the game')
      setIsConnecting(false)
      setToken('')
    }

    ServerPeer.addSubscriber('CONNECTION_TIMEOUT', onPeerTimeout)

    return () => {
      ServerPeer.removeSubscriber('CONNECTION_TIMEOUT', onPeerTimeout)
    }
  }, [])

  useEffect(() => {
    ServerPeer.addSubscriber('CONNECTED', onFinish)

    return () => {
      ServerPeer.removeSubscriber('CONNECTED', onFinish)
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
          TokenSocketManager.connect({ token: newToken })
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
