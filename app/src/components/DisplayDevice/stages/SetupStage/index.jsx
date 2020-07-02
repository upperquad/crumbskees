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
import MuteButton from '~components/MuteButton'

import backgroundVideo from '~assets/images/setup/background.mp4'
import backgroundImage from '~assets/images/setup/background.jpg'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = props => {
  const { allConnected, extraClassName, onFinish } = props
  const [qrCode, setQrCode] = useState([null, null])
  const [player1, player2] = PlayersManager.players || []
  const [zoom, setZoom] = useState(1)
  const [playersManagerInitiated, setPlayersManagerInitiated] = useState(false)
  const [tokenManagerConnected, setTokenManagerConnected] = useState(false)
  const [singlePlayerHovered, setSinglePlayerHovered] = useState(false)
  const [dualPlayerHovered, setDualPlayerHovered] = useState(false)

  useZoom(0.736, setZoom)

  useEffect(() => {
    SoundManager.playMusic('setup')
  }, [])

  useEffect(() => {
    const initiatedHandler = () => {
      setPlayersManagerInitiated(true)
    }

    if (!PlayersManager.mode) {
      PlayersManager.addSubscriber('INITIATED', initiatedHandler)

      return () => PlayersManager.removeSubscriber('INITIATED', initiatedHandler)
    }

    initiatedHandler()
    return undefined
  }, [])

  useEffect(() => {
    if (!playersManagerInitiated) {
      return undefined
    }

    const connectHandler = () => {
      PlayersManager.startSetup()
      setTokenManagerConnected(true)
    }

    switch (PlayersManager.mode) {
      case 'SINGLE':
        PlayersManager.startSetup()
        onFinish()
        return undefined
      case 'DUAL':
        TokenSocketManager.addSubscriber('CONNECTED', connectHandler)
        TokenSocketManager.init('display')
        TokenSocketManager.connect()

        return () => {
          TokenSocketManager.removeSubscriber('CONNECTED', connectHandler)
          TokenSocketManager.disconnect()
          setTokenManagerConnected(false)
        }
      default:
        return undefined
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersManagerInitiated])

  useEffect(() => {
    if (PlayersManager.mode === 'DUAL') {
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
    }

    return undefined
  }, [player1, player2])

  useEffect(() => {
    if (allConnected) {
      const nextStageTimeout = setTimeout(onFinish, 1000)
      return () => clearTimeout(nextStageTimeout)
    }
    return undefined

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allConnected])

  return (
    <div className={classNames(styles.setup, extraClassName)}>
      <AutoplayVideo extraClassName={styles.video} src={backgroundVideo} poster={backgroundImage} />
      <TransitionGroup>
        {!PlayersManager.mode && (
          <Transition
            key="mode-setup"
            timeout={300}
          >
            {wrapStatus => (
              <div
                className={classNames(styles.modes, styles.setupInner, {
                  [styles.isTransitioning]:
                    wrapStatus === 'entering' ||
                    wrapStatus === 'exiting' ||
                    wrapStatus === 'exited',
                })}
                style={{ transform: `scale(${zoom})` }}
              >
                <div
                  onClick={() => {
                    PlayersManager.init('SINGLE')
                  }}
                  onMouseEnter={() => {
                    setSinglePlayerHovered(true)
                  }}
                  onMouseLeave={() => {
                    setSinglePlayerHovered(false)
                  }}
                  className={styles.mode}
                >
                  <div className={styles.modeTitle}>1 Player</div>
                  <div className={styles.modeCharacters}>
                    <Character
                      extraClassName={styles.modeCharacterSingle}
                      character={CHARACTERS[1]}
                      mood={singlePlayerHovered ? 'excited' : 'happy'}
                    />
                  </div>
                  <p className={styles.modeSubtitle}>It’s great! You’ll always win</p>
                  <div className={styles.modeGo}>Go!</div>
                </div>
                <div
                  onClick={() => {
                    PlayersManager.init('DUAL')
                  }}
                  onMouseEnter={() => {
                    setDualPlayerHovered(true)
                  }}
                  onMouseLeave={() => {
                    setDualPlayerHovered(false)
                  }}
                  className={styles.mode}
                >
                  <div className={styles.modeTitle}>2 Players</div>
                  <div className={styles.modeCharacters}>
                    <Character
                      extraClassName={styles.modeCharacter1}
                      character={CHARACTERS[0]}
                      mood={dualPlayerHovered ? 'excited' : 'happy'}
                    />
                    <Character
                      extraClassName={styles.modeCharacter2}
                      character={CHARACTERS[1]}
                      mood={dualPlayerHovered ? 'excited' : 'happy'}
                    />
                  </div>
                  <p className={styles.modeSubtitle}>Got a friend nearby? Grab ‘em</p>
                  <div className={styles.modeGo}>Go!</div>
                </div>
              </div>
            )}
          </Transition>
        )}
        {PlayersManager.mode === 'DUAL' && tokenManagerConnected && (
          <Transition
            key="qr-setup"
            timeout={300}
          >
            {wrapStatus => (
              <div
                className={classNames(styles.setupInner, {
                  [styles.isTransitioning]:
                    wrapStatus === 'entering' ||
                    wrapStatus === 'exiting' ||
                    wrapStatus === 'exited',
                })}
              >
                <div style={{ transform: `scale(${zoom})` }}>
                  <h2 className={styles.title} data-text="Grab a friend and your phones">
                    Grab a friend and your phones
                  </h2>
                  <p className={styles.subtitle}>
                    You can scan the QR code with your camera app
                  </p>
                  <div className={styles.players}>
                    {PlayersManager.players && PlayersManager.players.map((player, index) => {
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
                                        <div
                                          className={styles.qrQr}
                                          style={{ backgroundImage: `url(${qrCode[index]})` }}
                                        />
                                        <div className={styles.qrUrl}>
                                          Think QR codes are stupid?
                                          <br />
                                          {`Open ${BASE_URL}`}
                                          <span className={styles.qrUrlToken}>
                                            {PlayersManager.players[index].token}
                                          </span>
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
                {PlayersManager.players && PlayersManager.players.map((player, index) => (
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
            )}
          </Transition>
        )}
      </TransitionGroup>

      <MuteButton extraClassName={styles.muteButton} />
    </div>
  )
}

export default SetupStage
