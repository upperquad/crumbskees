import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import classNames from 'classnames'
import styles from './style.module.scss'
import typography from '~styles/modules/typography.module.scss'

import MarqueeText from '~components/MarqueeText'
import DisplayFooter from '~components/DisplayFooter'
import PlayersManager from '~managers/PlayersManager'
import WebSocketManager from '~managers/WebSocketManager'

import homeBgVideo from '~assets/images/home-bg.mp4'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

const SetupStage = () => {
  // TD:

  // update these variables from app-old in GameManager with the hook

  // this.playerIds = DEBUG ? ['a', 'b'] : [null, null]
  // this.tokens = [this.getNewToken(), this.getNewToken()]
  // this.gameStarted = false
  // this.string = 'foo'
  // this.tutorialStarted = false
  // this.playersCharacter = [0, 1]

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
    const messageHandler = event => {
      const { detail: { type, data } } = event
      
      switch (type) {
        case 'token_submit': {
          const { token, id } = data
          PlayersManager.newConnect(token, id)
          break
        }
        case 'character_pick':
          // handleCharacters(data[1], data[3])
          break
        case 'reconnect_phone':
          // checkReconnectPhone(data[1])
          break
        case 'phone_left':
          // if (this.gameStarted) {
          //   // Mark player lost, or end game if both are lost
          //   markPlayerDisconnected(data[1])
          // } else {
          //   removePhone(data[1])
          // }
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
        {[0, 1].map((number, index) => (
          <div key={number} className={styles.player}>
            <div className={styles.qrWrapper}>
              {qrCode[index] && (
                <div className={styles.qr}>
                  <div className={styles.qrQr} style={{ backgroundImage: `url(${qrCode[index]})` }} />
                  <div className={classNames(styles.qrUrl, typography.text18)}>
                    Think QR codes are stupid?
                    <br />
                    Go to {BASE_URL}<span className={styles.qrUrlToken}>{PlayersManager.players[index].token}</span>
                  </div>
                </div>
              )}
              <div className={styles.playerConnected}>
                <span>Connected!</span>
              </div>
            </div>
            <div className={styles.playerName}>
              Player
              {number + 1}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.instruction}>
        <span className={styles.instructionText}>
          Your smart phone will be your control pad. Open your camera app and scan the code!
        </span>
        <div className={styles.letsPlay}>LETS PLAY</div>
      </div>
      <DisplayFooter />
    </div>
  )
}



// TD:

// Update these functions from app-old in GameManager with the hook
// Most important right now are verifyToken and setPlayer which should be handle by the PlayerManager
// so we keep players' data in this manager

// function verifyToken(token, userId) {
//   let isTokenValid = false
//   let playerIndex = null
//   for (let index = 0; index <= 1; index++) {
//     if (this.playerIds[index] === null && this.tokens[index] === token) {
//       this.tokens[index] = null
//       this.playerIds[index] = userId
//       isTokenValid = true
//       playerIndex = index
//       break
//     }
//   }
//   Server.websocket.send(`auth_result,${userId},${isTokenValid ? 1 : 0},${playerIndex}`)
//   this.updateQr()
// }

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


//   function setCharacters() {
//     console.log(this.dom.boardPlayerCharacters)
//     const characterChoice1 = this.players[Object.keys(this.players)[0]].character
//     const characterChoice2 = this.players[Object.keys(this.players)[1]].character

//     this.dom.boardPlayerCharacters[0].querySelector('img').src = `/character${characterChoice1}.png`
//     this.dom.boardPlayerCharacters[1].querySelector('img').src = `/character${characterChoice2}.png`
//   }
// }

//   function handleCharacters = (playerId, characterId) => {
//     this.playersCharacter[playerId] = characterId
//     console.log(this.playersCharacter)
//   }

//   function removePhone(userId) {
//     for (let index = 0; index <= 1; index++) {
//       if (this.playerIds[index] === userId) {
//         this.tokens[index] = this.getNewToken()
//         this.playerIds[index] = null
//         this.updateQr()
//         if (this.tutorialStarted) {
//           this.tutorialTimeline.kill()
//           window.RouterManager.goTo('setup', this.initSetup)
//         }
//         return
//       }
//     }
//   }

//   function markPlayerDisconnected(userId) {
//     for (let index = 0; index <= 1; index++) {
//       if (this.playerIds[index] === userId) {
//         this.players[userId].disconnected = true
//         this.updatePlayerConnectionStatus()
//         if (this.players[this.playerIds[1 - index]].disconnected) {
//           window.RouterManager.goTo('final', this.initFinal)
//         }
//         return
//       }
//     }
//   }

//   function checkReconnectPhone(userId) {
//     let foundUser = false
//     let playerIndex = null
//     for (let index = 0; index <= 1; index++) {
//       if (this.playerIds[index] === userId && this.players[userId].disconnected) {
//         this.players[userId].disconnected = false
//         foundUser = true
//         playerIndex = index
//         this.updatePlayerConnectionStatus()
//         break
//       }
//     }
//     Server.websocket.send(`auth_result,${userId},${foundUser ? 1 : 0},${playerIndex}`)
//   }

//   function updatePlayerConnectionStatus() {
//     for (let index = 0; index <= 1; index++) {
//       const userId = this.playerIds[index]
//       if (this.players[userId]) {
//         const player = this.players[userId]
//         if (this.dom.boardPlayerCharacters && this.dom.boardPlayerCharacters[index]) {
//           if (player.disconnected) {
//             this.dom.boardPlayerCharacters[index].classList.add('is-dead')
//           } else {
//             this.dom.boardPlayerCharacters[index].classList.remove('is-dead')
//           }
//         }
//       }
//     }
//   }

export default SetupStage
