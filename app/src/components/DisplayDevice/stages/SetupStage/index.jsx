import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import { useZoom } from '~utils/hooks'
import { CHARACTERS } from '~constants'
import styles from './style.module.scss'

import TokenSocketManager from '~managers/TokenSocketManager'
import PlayersManager from '~managers/PlayersManager'
import SoundManager from '~managers/SoundManager'
import AutoplayVideo from '~components/AutoplayVideo'
import Character from '~components/Character'

import backgroundVideo from '~assets/images/setup/background.mp4'
import backgroundImage from '~assets/images/setup/background.jpg'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = props => {
  const { bothConnected, extraClassName, onFinish } = props
  const [qrCode, setQrCode] = useState([null, null])
  const [player1, player2] = PlayersManager.players
  const [zoom, setZoom] = useState(1)

  useZoom(0.736, setZoom)

  useEffect(() => {
    SoundManager.playMusic('setup')
  }, [])

  useEffect(() => {
    const connectHandler = () => {
      PlayersManager.startSetup()
    }

    TokenSocketManager.init('display')
    TokenSocketManager.addSubscriber('CONNECTED', connectHandler)
    TokenSocketManager.connect()

    return () => {
      TokenSocketManager.removeSubscriber('CONNECTED', connectHandler)
      TokenSocketManager.disconnect()
    }
  }, [])

  useEffect(() => {
    let didCancel = false

    Promise.all(PlayersManager.players.map(player => {
      const { token } = player
      if (token) {
        const tokenUrl = `${BASE_URL}${token}`
        return QRCode.toDataURL(tokenUrl, { margin: 2, scale: 10 })
      }
      return Promise.resolve('')
    })).then(values => {
      if (!didCancel) {
        setQrCode(values)
      }
    })

    return () => {
      didCancel = true
    }
  }, [player1, player2])

  useEffect(() => {
    if (bothConnected) {
      const nextStageTimeout = setTimeout(onFinish, 1000)
      return () => clearTimeout(nextStageTimeout)
    }
    return undefined
  }, [bothConnected, onFinish])

  return (
    <div className={classNames(styles.setup, extraClassName)}>
      <AutoplayVideo extraClassName={styles.video} src={backgroundVideo} poster={backgroundImage} />
      <div
        className={styles.setupInner}
        style={{ transform: `scale(${zoom})` }}
      >
        <h2 className={styles.title} data-text="Grab a friend and your phones">
          Grab a friend and your phones
        </h2>
        <p className={styles.subtitle}>
          You can scan the QR code with your camera app
        </p>
        <div className={styles.players}>
          {PlayersManager.players.map((player, index) => {
            if (player.id || player.token) {
              return (
                <div key={`${player.id}-${player.token}`} className={styles.player}>
                  <div className={styles.qrWrapper}>
                    <TransitionGroup>
                      {!player.connected && player.token && qrCode[index] && (
                        <Transition
                          key={player.token}
                          timeout={{ enter: 100, exit: 300 }}
                        >
                          {status => (
                            <div
                              className={classNames(styles.qr, {
                                [styles.qrTransitioning]:
                                  status === 'exiting' || status === 'exited' || status === 'entering',
                              })}
                            >
                              <div className={styles.qrQr} style={{ backgroundImage: `url(${qrCode[index]})` }} />
                              <div className={styles.qrUrl}>
                                Think QR codes are stupid?
                                <br />
                                {`Open ${BASE_URL}`}
                                <span className={styles.qrUrlToken}>{PlayersManager.players[index].token}</span>
                                {' on your phone'}
                              </div>
                            </div>
                          )}
                        </Transition>
                      )}
                      {player.connected && (
                        <Transition
                          key={player.id}
                          timeout={{ enter: 100, exit: 300 }}
                        >
                          {status => (
                            <div
                              className={classNames(
                                styles.playerConnected,
                                styles[`playerConnected--${CHARACTERS[index].color}`],
                                {
                                  [styles.playerConnectedTransitioning]:
                                    status === 'exiting' || status === 'exited' || status === 'entering',
                                },
                              )}
                            >
                              <Character
                                extraClassName={styles.playerConnectedCharacter}
                                character={CHARACTERS[index]}
                                mood="excited"
                              />
                              <span className={styles.playerConnectedText}>Connected!</span>
                            </div>
                          )}
                        </Transition>
                      )}
                    </TransitionGroup>
                  </div>
                  <div className={styles.playerName}>
                    {CHARACTERS[index].name}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
      {PlayersManager.players.map((player, index) => (
        <div
          className={classNames(styles.cornerCharacter, styles[`cornerCharacter--${index + 1}`], {
            [styles.cornerCharacterOut]: player.connected,
          })}
          key={CHARACTERS[index].body}
        >
          <img className={styles.cornerCharacterBody} src={CHARACTERS[index].body} alt="" />
          <Character
            extraClassName={styles.cornerCharacterHead}
            character={CHARACTERS[index]}
            mood="excited"
          />
        </div>
      ))}
    </div>
  )
}

export default SetupStage
