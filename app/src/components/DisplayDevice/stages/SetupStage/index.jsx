import React from 'react'
import styles from './style.module.scss'

import MarqueeText from '~components/MarqueeText'
import DisplayFooter from '~components/DisplayFooter'

import homeBgVideo from '~assets/images/home-bg.mp4'

const SetupStage = () => {
  console.log('SETUP')

  // this.qrBlocks = [...document.querySelectorAll('.setup__upper')]
  // this.updateQr()
  // Server.websocket.onmessage = this.listenServer

  const getNewToken = () => Math.random().toString(10).substr(2, 3)

  const listenServer = e => {
    const data = e.data.split(',')

    switch (data[0]) {
      case 'token_submit':
        // this.verifyToken(data[1], data[2])
        // if (this.playerIds[0] !== null && this.playerIds[1] !== null) {
        //   this.kickOffGame()
        // }
        break
      default:
        break
    }
  }

  const tokens = [getNewToken(), getNewToken()]

  window.addEventListener('MESSAGE', listenServer)

  console.log(tokens)

  return (
    <div className={styles.setup}>
      <video className={styles.video} src={homeBgVideo} playsInline autoPlay muted loop />
      <MarqueeText extraClassName={styles.pullOutPhone} text="Pull out yo smartphone camera! -" duration="12s" />
      <div className={styles.players}>
        {[0, 1].map(number => (
          <div key={number} className={styles.player}>
            <div className={styles.qrWrapper}>
              <div className={styles.qr} />
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

export default SetupStage

// import QRCode from 'qrcode'
// import { TimelineMax } from 'gsap/TweenMax'
// import { Howl } from 'howler'
// import { splitText } from '../utils/dom'

// // components
// import Scene from '../components/Scene'
// import Player from '../components/Player'

// // server
// import Server from '../constants/Server'
// import DEBUG from '../constants/Debug'

// // assets
// import scene1Pattern from '../../../assets/game/images/round_1/r1-pattern.gif'
// import scene1Front from '../../../assets/game/images/round_1/r1-front.gif'
// import scene1Item from '../../../assets/game/images/round_1/r1-item.png'
// import scene1IntroVideo from '../../../assets/game/images/round_1/r1-intro.mp4'

// import scene2Pattern from '../../../assets/game/images/round_2/r2-pattern.gif'
// import scene2Front from '../../../assets/game/images/round_2/r2-front.gif'
// import scene2Item from '../../../assets/game/images/round_2/r2-item.png'
// import scene2IntroVideo from '../../../assets/game/images/round_2/r2-intro.mp4'

// import scene3Pattern from '../../../assets/game/images/round_3/r3-pattern.gif'
// import scene3Front from '../../../assets/game/images/round_3/r3-front.gif'
// import scene3Item from '../../../assets/game/images/round_3/r3-item.png'
// import scene3IntroVideo from '../../../assets/game/images/round_3/r3-intro.mp4'

// import freezeItem from '../../../assets/game/images/freeze.png'
// import growItem from '../../../assets/game/images/grow.png'

// import characterVideoWhite1 from '../../../assets/game/images/character-white-1.mp4'
// import characterVideoWhite2 from '../../../assets/game/images/character-white-2.mp4'

// import countdownSound from '../../../assets/game/sounds/countdown.mp3'
// import winnerSound from '../../../assets/game/sounds/winner.mp3'
// import wooshSound from '../../../assets/game/sounds/woosh.mp3'

// const BASE_URL = `${window.location.protocol}//${window.location.host}/`

// // prepare the CharacterId
// // CharacterId --> get the image of the character
// // end scene:
// //

// export default class GameManager {
//   constructor() {
//     this.playerIds = DEBUG ? ['a', 'b'] : [null, null]
//     this.tokens = [this.getNewToken(), this.getNewToken()]
//     this.gameStarted = false
//     this.string = 'foo'
//     this.tutorialStarted = false
//     this.playersCharacter = [0, 1]

//     // Sounds
//     this.countdownSound = new Howl({
//       src: [countdownSound],
//       volume: 0.5,
//     })

//     this.winnerSound = new Howl({
//       src: [winnerSound],
//       volume: 1,
//     })

//     this.wooshSound = new Howl({
//       src: [wooshSound],
//       volume: 1,
//     })

//     if (!DEBUG) {
//       Server.websocket.onopen = this.onWsOpen
//       Server.websocket.onclose = this.onWsClose
//     } else {
//       this.loadAll(() => window.RouterManager.goTo('game', this.initGame))
//     }

//     this.qrBlocks = [...document.querySelectorAll('.setup__upper')]
//     this.updateQr()
//     Server.websocket.onmessage = this.listenServer

//   }

//   getNewToken = () => Math.random().toString(10).substr(2, 3)

//   updateQr = () => {
//     this.qrBlocks.forEach((block, index) => {
//       if (this.playerIds[index] === null) {
//         const tokenUrl = `${BASE_URL}${this.tokens[index]}`
//         QRCode.toDataURL(tokenUrl, { margin: 2, scale: 10 })
//           .then(dataUrl => {
//             block.classList.remove('is-connected')
//             block.querySelector('.qr').innerHTML =
//               `<div class="qr__qr" style="background-image: url(${dataUrl})"></div><div class="qr__url text-18">Think QR codes are stupid?<br>Go to ${BASE_URL}<span class="color--red">${this.tokens[index]}</span></div>`
//           })
//       } else {
//         block.classList.add('is-connected')
//       }
//     })
//   }

//   verifyToken = (token, userId) => {
//     let isTokenValid = false
//     let playerIndex = null
//     for (let index = 0; index <= 1; index++) {
//       if (this.playerIds[index] === null && this.tokens[index] === token) {
//         this.tokens[index] = null
//         this.playerIds[index] = userId
//         isTokenValid = true
//         playerIndex = index
//         break
//       }
//     }
//     Server.websocket.send(`auth_result,${userId},${isTokenValid ? 1 : 0},${playerIndex}`)
//     this.updateQr()
//   }

//   handleCharacters = (playerId, characterId) => {
//     this.playersCharacter[playerId] = characterId
//     console.log(this.playersCharacter)
//   }

//   removePhone = userId => {
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

//   markPlayerDisconnected = userId => {
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

//   checkReconnectPhone = userId => {
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

//   updatePlayerConnectionStatus = () => {
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

//   listenServer = event => {
//     const data = event.data.split(',')

//     switch (data[0]) {
//       case 'token_submit':
//         this.verifyToken(data[1], data[2])
//         if (this.playerIds[0] !== null && this.playerIds[1] !== null) {
//           this.kickOffGame()
//         }
//         break
//       case 'character_pick':
//         console.log(data)
//         this.handleCharacters(data[1], data[3])
//         break
//       case 'reconnect_phone':
//         this.checkReconnectPhone(data[1])
//         break
//       case 'phone_left':
//         if (this.gameStarted) {
//           // Mark player lost, or end game if both are lost
//           this.markPlayerDisconnected(data[1])
//         } else {
//           this.removePhone(data[1])
//         }
//         break
//       default:
//         break
//     }
//   }

//   setPlayers() {
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


//   setCharacters() {
//     console.log(this.dom.boardPlayerCharacters)
//     const characterChoice1 = this.players[Object.keys(this.players)[0]].character
//     const characterChoice2 = this.players[Object.keys(this.players)[1]].character

//     this.dom.boardPlayerCharacters[0].querySelector('img').src = `/character${characterChoice1}.png`
//     this.dom.boardPlayerCharacters[1].querySelector('img').src = `/character${characterChoice2}.png`
//   }
// }
