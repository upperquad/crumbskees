import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import { CHARACTERS } from '~constants'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import JumpUpText from '~components/JumpUpText'
import DisplayFooter from '~components/DisplayFooter'
import PlayersManager from '~managers/PlayersManager'
import AutoplayVideo from '~components/AutoplayVideo'

import homeBgVideo from '~assets/images/home-bg.mp4'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = props => {
  const { bothConnected, extraClassName, onFinish } = props
  const [qrCode, setQrCode] = useState([null, null])
  const [player1, player2] = PlayersManager.players

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
      const nextStageTimeout = setTimeout(onFinish, 2000)
      return () => clearTimeout(nextStageTimeout)
    }
    return undefined
  }, [bothConnected, onFinish])

  return (
    <div className={classNames(styles.setup, extraClassName)}>
      <AutoplayVideo extraClassName={styles.video} src={homeBgVideo} />
      <MarqueeText extraClassName={styles.pullOutPhone} text="Pull out yo smartphone camera! -" duration="12s" />
      <div className={styles.players}>
        {PlayersManager.players.map((player, index) => (
          <div key={`${player.id}-${player.token}`} className={styles.player}>
            <div className={styles.qrWrapper}>
              <TransitionGroup>
                {player.token && qrCode[index] && (
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
                          {`Go to ${BASE_URL}`}
                          <span className={styles.qrUrlToken}>{PlayersManager.players[index].token}</span>
                        </div>
                      </div>
                    )}
                  </Transition>
                )}
                {player.id && (
                  <Transition
                    key={player.id}
                    timeout={{ enter: 100, exit: 300 }}
                  >
                    {status => (
                      <div
                        className={classNames(styles.playerConnected, {
                          [styles.playerConnectedTransitioning]:
                            status === 'exiting' || status === 'exited' || status === 'entering',
                        })}
                      >
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
        ))}
      </div>
      {bothConnected && (
        <div className={styles.instruction}>
          <JumpUpText text="Lets Play" />
        </div>
      )}
      <DisplayFooter />
    </div>
  )
}

export default SetupStage
