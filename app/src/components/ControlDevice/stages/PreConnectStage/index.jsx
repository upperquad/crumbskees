import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import Button from '~components/Button'

import TokenSocketManager from '~managers/TokenSocketManager'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const PreConnectStage = props => {
  const { hasPlayed, onFinish } = props
  const [token, setToken] = useState('')
  const [errorReason, setErrorReason] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connect = connectToken => {
    setIsConnecting(true)
    TokenSocketManager.connect({ token: connectToken })
  }

  const updateToken = key => {
    setErrorReason(null)

    setToken(prevToken => {
      const newToken = prevToken + key

      if (newToken.length >= 4) {
        connect(newToken)
      }

      return newToken
    })
  }

  const clearToken = () => {
    if (!isConnecting) {
      setToken('')
    }
  }

  useEffect(() => {
    const onWebSocketClose = detail => {
      const { reason } = detail
      if (reason === 'invalid_token') {
        setErrorReason('Invalid code!!!')
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

  useEffect(() => {
    if (!hasPlayed) {
      TokenSocketManager.init('control')

      const path = window.location.pathname
      if (/^\/\d{4}$/.test(path)) {
        const urlToken = path.slice(1)
        setToken(urlToken)
        connect(urlToken)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.preConnect}>
      <MarqueeText
        extraClassName={styles.marquee}
        text="You’ll need to open the game on a desktop browser to play!"
        duration="10s"
      />
      <div className={styles.tokenDisplay}><span>{token || '\xa0'}</span></div>
      <div className={styles.label}>
        {errorReason && <span>{errorReason}</span>}
        {isConnecting && <span>Connecting...</span>}
        {!errorReason && !isConnecting && <span>&nbsp;</span>}
      </div>
      <div className={styles.placeholder1} />
      <div
        className={classNames(styles.tokenInput, {
          [styles.isConnecting]: isConnecting,
        })}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key => (
          <Button
            extraClassName={styles.tokenInputKey}
            text={key}
            key={key}
            clickHandler={() => updateToken(key)}
            isKeyPad
          />
        ))}
        <Button
          extraClassName={styles.tokenInputKey}
          text="Clear"
          key="clear"
          clickHandler={clearToken}
          isKeyPad
          isFullWidth
        />
      </div>
      <div className={styles.placeholder2} />
      <div className={styles.instruction}>
        Enter the red code under the QR code to join in on the fun!
      </div>
      <div className={styles.placeholder3} />
    </div>
  )
}

export default PreConnectStage
