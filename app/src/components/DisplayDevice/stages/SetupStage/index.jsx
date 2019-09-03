import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

import MarqueeText from '~components/MarqueeText'
import JumpUpText from '~components/JumpUpText'
import DisplayFooter from '~components/DisplayFooter'
import PlayersManager from '~managers/PlayersManager'
import WebSocketManager from '~managers/WebSocketManager'

import homeBgVideo from '~assets/images/home-bg.mp4'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = () => {
  const [qrCode, setQrCode] = useState([null, null])
  const [bothConnected, setBothConnected] = useState(false)

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
    const messageHandler = event => {
      const { detail: { type, data } } = event
      
      switch (type) {
        case 'token_submit': {
          const { token, id } = data
          PlayersManager.newConnect(token, id)
          if (PlayersManager.players.every(item => item.id)) {
            setBothConnected(true)
            // TODO: kick start next page, add rollback handling
          }
          break
        }
        case 'phone_left':
          const { id } = data
          PlayersManager.closeConnection(id)
          break
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
    <div className={styles.setup}>
      <video className={styles.video} src={homeBgVideo} playsInline autoPlay muted loop />
      <MarqueeText extraClassName={styles.pullOutPhone} text="Pull out yo smartphone camera! -" duration="12s" />
      <div className={styles.players}>
        {PlayersManager.players.map((player, index) => (
          <div key={`player-${index}`} className={styles.player}>
            <div className={styles.qrWrapper}>
              {player.token && qrCode[index] && (
                <div className={styles.qr} key={player.token}>
                  <div className={styles.qrQr} style={{ backgroundImage: `url(${qrCode[index]})` }} />
                  <div className={classNames(styles.qrUrl, typography.text18)}>
                    Think QR codes are stupid?
                    <br />
                    Go to {BASE_URL}<span className={styles.qrUrlToken}>{PlayersManager.players[index].token}</span>
                  </div>
                </div>
              )}
              {player.id && (
                <div className={styles.playerConnected} key={player.id}>
                  <span>Connected!</span>
                </div>
              )}
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
