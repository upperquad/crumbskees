import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import { CHARACTERS } from '~constants'

import Character from '~components/Character'

import MarqueeText from '~components/MarqueeText'
import Button from '~components/Button'
import Lottie from '~components/Lottie'

import TokenSocketManager from '~managers/TokenSocketManager'
import ServerPeer from '~managers/PeerManager/ServerPeer'

const PreConnectStage = props => {
  const { hasPlayed } = props
  const [token, setToken] = useState('')
  const [errorReason, setErrorReason] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showInstructionOverlay, setShowInstructionOverlay] = useState(true)

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
    if (!hasPlayed) {
      TokenSocketManager.init('control')

      const path = window.location.pathname
      if (/^\/\d{4}$/.test(path)) {
        setShowInstructionOverlay(false)
        const urlToken = path.slice(1)
        setToken(urlToken)
        connect(urlToken)
      }
      setIsLoaded(true)
    } else {
      setShowInstructionOverlay(false)
      setIsLoaded(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.preConnect}>
      {isLoaded && !showInstructionOverlay && (
        <React.Fragment>
          <div className={styles.tokenDisplay}>
            <span className={styles.tokenDisplayInner} data-text={token}>
              {token || '\xa0'}
            </span>
          </div>
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
                extraCardClassName={styles.tokenInputKeyCard}
                text={key}
                key={key}
                clickHandler={() => updateToken(key)}
                isKeyPad
              />
            ))}
            <Button
              extraClassName={styles.tokenInputKey}
              extraCardClassName={styles.tokenInputKeyCard}
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
        </React.Fragment>
      )}

      {isLoaded && showInstructionOverlay && (
        <div className={styles.instructionOverlay}>
          <Lottie
            path="/static/mobile-background.json"
            extraClassName={styles.instructionOverlayBg}
          />
          <MarqueeText
            extraClassName={styles.marquee}
            text="You’ll need to open the game on a desktop browser to play!"
            duration="10s"
          />
          <div className={styles.overlayContent}>
            <h1 className={styles.overlayTitle}>
              <span
                className={styles.overlayTitleInner}
                data-text="Wanna play Crumbskees?"
              >
                Wanna play Crumbskees?
              </span>
              <span
                className={styles.overlayTitleInner}
                data-text="Grab a laptop, a friend and your phones"
              >
                Grab a laptop, a friend and your phones
              </span>
            </h1>
            <p className={styles.overlaySubtitle}>
              Visit crumbskees.com on your desktop or laptop and scan the QR with you phones to get started.
              <br />
              &nbsp;
              <br />
              Already have a code?
            </p>
            <div className={styles.overlayButtonWrap}>
              <Button
                extraInnerClassName={styles.overlayButtonInner}
                extraCardClassName={styles.overlayButtonCard}
                text="I have a code"
                clickHandler={() => setShowInstructionOverlay(false)}
              />
            </div>
          </div>
          <div className={styles.overlayCharacters}>
            <Character
              extraClassName={classNames(styles.character, styles.character1)}
              character={CHARACTERS[0]}
              mood="happy"
            />
            <Character
              extraClassName={classNames(styles.character, styles.character2)}
              character={CHARACTERS[1]}
              mood="happy"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PreConnectStage
