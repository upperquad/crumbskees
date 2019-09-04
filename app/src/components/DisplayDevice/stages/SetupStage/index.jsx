import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

import MarqueeText from '~components/MarqueeText'
import JumpUpText from '~components/JumpUpText'
import DisplayFooter from '~components/DisplayFooter'
import PlayersManager from '~managers/PlayersManager'
import WebSocketManager from '~managers/WebSocketManager'

import homeBgVideo from '~assets/images/home-bg.mp4'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = props => {
  const { extraClassName, onFinish, bothConnected } = props
  const [qrCode, setQrCode] = useState([null, null])

  useEffect(() => {
    let didCancel = false

    Promise.all(PlayersManager.players.map((player, index) => {
      const { token } = player
      if (token) {
        const tokenUrl = `${BASE_URL}${token}`
        return QRCode.toDataURL(tokenUrl, { margin: 2, scale: 10 })
      } else {
        return Promise.resolve('')
      }
    })).then(values => {
      if (!didCancel) {
        setQrCode(values)
      }
    })

    return () => {
      didCancel = true
    }
  }, [...PlayersManager.players])

  useEffect(() => {
    if (bothConnected) {
      const nextStageTimeout = setTimeout(onFinish, 2000)
      return () => clearTimeout(nextStageTimeout)
    }
  }, [bothConnected])

  return (
    <div className={classNames(styles.setup, extraClassName)}>
      <video className={styles.video} src={homeBgVideo} playsInline autoPlay muted loop />
      <MarqueeText extraClassName={styles.pullOutPhone} text="Pull out yo smartphone camera! -" duration="12s" />
      <div className={styles.players}>
        {PlayersManager.players.map((player, index) => (
          <div key={`player-${index}`} className={styles.player}>
            <div className={styles.qrWrapper}>
              <TransitionGroup>
                {player.token && qrCode[index] && (
                  <Transition
                    key={player.token}
                    timeout={{ enter: 100, exit: 300 }}
                  >
                    {status => (
                      <div className={classNames(styles.qr, {
                        [styles.qrTransitioning]: status === 'exiting' || status === 'exited' || status === 'entering'
                      })}>
                        <div className={styles.qrQr} style={{ backgroundImage: `url(${qrCode[index]})` }} />
                        <div className={classNames(styles.qrUrl, typography.text18)}>
                          Think QR codes are stupid?
                          <br />
                          Go to {BASE_URL}<span className={styles.qrUrlToken}>{PlayersManager.players[index].token}</span>
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
                      <div className={classNames(styles.playerConnected, {
                        [styles.playerConnectedTransitioning]: status === 'exiting' || status === 'exited' || status === 'entering'
                      })}>
                        <span className={styles.playerConnectedText}>Connected!</span>
                      </div>
                    )}
                  </Transition>
                )}
              </TransitionGroup>
            </div>
            <div className={styles.playerName}>
              Player {index + 1}
            </div>
          </div>
        ))}
      </div>
      {bothConnected && (
        <div className={styles.instruction}>
          <JumpUpText text='Lets Play' />
        </div>
      )}
      <DisplayFooter />
    </div>
  )
}



// TD:

// Update these functions from app-old in GameManager with the hook
// Most important right now are verifyToken and setPlayer which should be handle by the PlayerManager
// so we keep players' data in this manager

//   function setPlayers() {
//     const colors = [
//       'purple',
//       'red',
//     ]

//     // each player is an object with a key/id
//     this.players = {}
//     if (this.playerIds.length === 2) {
//       this.players[this.playerIds[0]] = new Player({
//         el: this.dom.cursors[0],
//         index: 0,
//         color: colors[0],
//         id: this.playerIds[0],
//         character: this.playersCharacter[0],

//       })
//       this.players[this.playerIds[1]] = new Player({
//         el: this.dom.cursors[1],
//         index: 1,
//         color: colors[1],
//         id: this.playerIds[1],
//         character: this.playersCharacter[1],
//       })
//     }
//     this.updatePlayerConnectionStatus()
//     console.log(this.players)
//   }


export default SetupStage
