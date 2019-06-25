import QRCode from 'qrcode'
import { TimelineMax } from 'gsap/TweenMax'
import { splitText } from '../utils/dom'

// components
import Scene from '../components/Scene'
import Player from '../components/Player'

// server
import Server from '../constants/Server'
import DEBUG from '../constants/Debug'

// assets
import scene1Bkg from '../../../assets/game/images/round_3/r3-pattern.gif'
import scene1Mask from '../../../assets/game/images/round_1/r1-mask.jpg'
import scene1Item from '../../../assets/game/images/round_1/r1-target.jpg'
import scene1IntroVideo from '../../../assets/game/images/round_3/r3-intro.mp4'
import scene2Item from '../../../assets/game/images/pattern.png'
import scene2Bkg from '../../../assets/game/images/find-cat.png'
// import scene2Item from '../../../assets/game/images/pattern.png'\

import character1 from '../../../assets/game/images/character1.png'
import character2 from '../../../assets/game/images/character2.png'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

// prepare the CharacterId
// CharacterId --> get the image of the character
// end scene:
//

export default class GameManager {
  constructor() {
    this.playerIds = DEBUG ? ['a', 'b'] : [null, null]
    this.tokens = [this.getNewToken(), this.getNewToken()]

    if (!DEBUG) {
      Server.websocket.onopen = this.onWsOpen
      Server.websocket.onclose = this.onWsClose
    } else {
      window.RouterManager.goTo('game', this.initGame)
    }
  }

  getNewToken = () => Math.random().toString(10).substr(2, 3)

  updateQr = () => {
    this.qrBlocks.forEach((block, index) => {
      if (this.playerIds[index] === null) {
        const tokenUrl = `${BASE_URL}${this.tokens[index]}`
        QRCode.toDataURL(tokenUrl, { margin: 2, scale: 10 })
          .then(dataUrl => {
            block.classList.remove('is-connected')
            block.querySelector('.qr').innerHTML =
              `<div class="qr__qr" style="background-image: url(${dataUrl})"></div><div class="qr__url text-14">Think QR codes are stupid? Go to <span class="color--green">${tokenUrl}</span></div>`
          })
      } else {
        block.classList.add('is-connected')
      }
    })
  }

  onWsOpen = () => {
    window.RouterManager.goTo('setup', this.setup)
  }

  onWsClose = event => {
    if (event.reason === 'active_game_exist') {
      window.RouterManager.goTo('error', this.initErrorGameExists)
    } else {
      window.RouterManager.goTo('error', this.initErrorConnectionLost)
    }
  }

  setup = () => {
    this.qrBlocks = [...document.querySelectorAll('.setup__upper')]
    this.updateQr()
    Server.websocket.onmessage = this.listenServer
  }

  verifyToken = (token, userId) => {
    let isTokenValid = false
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === null && this.tokens[index] === token) {
        this.tokens[index] = null
        this.playerIds[index] = userId
        isTokenValid = true
        break
      }
    }
    Server.websocket.send(`auth_result,${userId},${isTokenValid ? 1 : 0}`)
    this.updateQr()
  }

  removePhone = userId => {
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === userId) {
        this.tokens[index] = this.getNewToken()
        this.playerIds[index] = null
        this.updateQr()
        return
      }
    }
  }

  kickOffGame = () => {
    // handle if someone quits here
    document.querySelector('.instruction').classList.add('is-started')
    const text = splitText(document.querySelector('.instruction__letsplay'))
    text.forEach((el, index) => {
      const tl = new TimelineMax({ delay: index * 0.06 })
      tl.fromTo(el, 0.8, { y: '100%' }, { y: '-70%', ease: window.Expo.easeOut })
        .to(el, 0.6, { y: '0%', ease: window.Bounce.easeOut }, '-=0.3')
        .add(() => {
          tl.kill()
          if (index === text.length - 1) {
            window.RouterManager.goTo('tutorial', this.initTutorial)
          }
        })
    })
  }

  listenServer = event => {
    const data = event.data.split(',')

    switch (data[0]) {
      case 'token_submit':
        this.verifyToken(data[1], data[2])

        if (this.playerIds[0] !== null && this.playerIds[1] !== null) {
          this.kickOffGame()
        }
        break
      case 'phone_left':
        this.removePhone(data[1])
        break
      case 'cursor_move': {
        if (this.currentScene) {
          const x = parseFloat(data[2], 10) * this.vbWidth
          const y = parseFloat(data[3], 10) * this.vbWidth
          // we use vbWidth the same coeficient here to have the same speed movement on touchmove X and Y
          this.players[data[1]].targetX = x + this.players[data[1]].targetX
          this.players[data[1]].targetY = y + this.players[data[1]].targetY

          // this.players[data[1]].targetX
        }
        break
      }
      case 'click':
        // data[1] needs to be the index of player (or id)
        if (this.currentScene && this.currentScene.handleClick) {
          this.currentScene.handleClick(data[1])
        }
        break
      default:
        break
    }
  }

  initTutorial = () => {
    setTimeout(() => {
      window.RouterManager.goTo('game', this.initGame)
    }, 7000)
  }

  initGame = () => {
    if (!DEBUG) Server.websocket.send(`score,${this.playerIds[0]},0`)

    this.element = document.querySelector('[game]')

    // scores
    this.scenes = [
      {
        bkg: scene1Bkg,
        maskedBkg: scene1Mask,
        item: scene1Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 32,
        gridLines: 14,
        effect: '?',
      }, {
        bkg: scene2Bkg,
        maskedBkg: scene2Bkg,
        item: scene2Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 32,
        gridLines: 14,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 32,
        gridLines: 14,
        effect: '?',
      },
    ]
    this.players = []
    this.scores = [0, 0]
    this.currentSceneIndex = 0


    this.loadBkg()
  }

  loadBkg() {
    // Load Current Scene image
    const img = new Image()
    img.src = this.scenes[this.currentSceneIndex].bkg
    img.onload = () => {
      // image loaded
      this.dom()
      // Set the viewbox to the ratio of the scene
      this.vbWidth = 1920
      this.vbHeight = 840
      this.gridUnit = 3.125 / 100 * this.vbWidth // 3.125 == 1 unit grid (1920 / 32)
      this.gridUnitVw = 3.125
      this.gridUnitVh = (60 / this.vbHeight * 100)
      this.setPlayers()

      const scene = this.scenes[this.currentSceneIndex]

      this.currentScene = new Scene({
        el: this.dom.scene,
        index: this.currentSceneIndex,
        ...scene,
      })
    }
  }

  dom() {
    this.dom = {
      scene: this.element.querySelector('.scene'),
      cursors: this.element.querySelectorAll('.cursor'),
      message: this.element.querySelector('.scene__message'),
      boardPlayerScore: this.element.querySelectorAll('.board__player__score'),
      boardPlayerItems: this.element.querySelectorAll('.board__player__items'),
      timer: this.element.querySelector('.board__center__timer'),
    }
  }

  setPlayers() {
    const colors = [
      'purple',
      'red',
    ]

    // each player is an object with a key/id
    this.players = {}
    if (this.playerIds.length === 2) {
      this.players[this.playerIds[0]] = new Player({
        el: this.dom.cursors[0],
        index: 0,
        color: colors[0],
        id: this.playerIds[0],
      })
      this.players[this.playerIds[1]] = new Player({
        el: this.dom.cursors[1],
        index: 1,
        color: colors[1],
        id: this.playerIds[1],
      })
    }
  }

  startTimer(duration) {
    let timer = duration - 1
    let seconds

    this.dom.timer.innerHTML = duration

    this.timerInterval = setInterval(() => {
      seconds = parseInt(timer, 10)
      seconds = seconds < 10 ? `0${seconds}` : seconds

      this.dom.timer.innerHTML = seconds

      if (timer === 0) {
        this.endScene('TIME OUT!')
      }

      timer -= 1
    }, 1000)

    this.element.classList.add('sceneStarted')
  }

  score(player, item, pos = false) {
    this.popUpMessage('+1', player.color, false, pos) // + color player

    this.scores[player.index] += 1
    this.element.classList.add('item-found')

    for (let i = 0; i < this.dom.boardPlayerScore.length; i++) {
      if (i === player.index) {
        const zeroUnit = this.scores[player.index] < 10 ? '0' : ''
        this.dom.boardPlayerScore[i].innerHTML = `${zeroUnit}${this.scores[player.index]}`
      }
    }

    const img = document.createElement('img')
    img.src = item
    img.classList.add('board__player__item')
    this.dom.boardPlayerItems[player.index].appendChild(img)

    Server.websocket.send(`score,${player.id},${this.scores[player.index]}`)
  }

  popUpMessage(message, color = 'gray', end = false, pos = false) {
    const div = document.createElement('div')
    div.classList.add('message', 't-120--bold', `color--${color}`)
    if (end) {
      div.classList.add('message-end')
    }
    if (pos) {
      div.style.left = `${pos.x * 100}%`
      div.style.top = `${pos.y * 100}%`
    }
    div.innerHTML = message
    this.dom.scene.appendChild(div)

    if (!end) {
      setTimeout(() => {
        div.remove()
      }, 2000)
    }
  }

  endScene(message = 'DOPE.') {
    clearInterval(this.timerInterval)
    this.popUpMessage(message, 'red', true)

    this.element.classList.remove('sceneStarted')

    setTimeout(() => {
      this.element.classList.add('isOutro')
    }, 1000)

    setTimeout(() => {
      this.element.classList.remove('isOutro')
      this.element.classList.add('isIntro')
    }, 5000)

    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 6500)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)

    if (index === this.scenes.length) {
      window.RouterManager.goTo('final', this.initFinal)
      Server.websocket.send('disconnect_all_users')
      return
    }

    // reset players pos to 0
    for (let i = 0; i < this.playerIds.length; i++) {
      this.players[this.playerIds[i]].targetX = 0
      this.players[this.playerIds[i]].targetY = 0
      this.players[this.playerIds[i]].x = 0
      this.players[this.playerIds[i]].y = 0

      // reset items in board
      this.dom.boardPlayerItems[i].innerHTML = ''
    }

    this.currentSceneIndex = index
    const scene = this.scenes[this.currentSceneIndex]

    this.currentScene = new Scene({
      el: this.dom.scene,
      index: this.currentSceneIndex,
      ...scene,
    })
  }

  initFinal = () => {
    this.charactersImg = [character1, character2]
    let playerIndex = this.scores[0] > this.scores[1] ? 0 : 1

    if (this.scores[0] > this.scores[1]) {
      playerIndex = 0
    } else if (this.scores[0] < this.scores[1]) {
      playerIndex = 1
    } else {
      console.log('tie!')
      // ???
    }

    const scoreEl = document.querySelector('.final__score')
    const playerEl = document.querySelector('.final__player')
    const playerImgEl = document.querySelector('.final__player-img')

    playerEl.innerHTML = `player ${playerIndex + 1}`
    scoreEl.innerHTML = this.scores[playerIndex]
    playerImgEl.src = this.charactersImg[playerIndex]
  }

  initErrorGameExists = () => {
    const messageEl = document.querySelector('.error__message')
    const buttonEl = document.querySelector('.error__button')

    messageEl.innerHTML = 'Another game is in progress'
    buttonEl.innerHTML = 'Kick\'em off'
    buttonEl.addEventListener('click', event => {
      event.preventDefault()
      const websocket = new WebSocket(`${Server.host}/admin?command=disconnect_all`)
      websocket.onopen = () => {
        websocket.close()
        window.location = '/game'
      }
    })
  }

  initErrorConnectionLost = () => {
    const messageEl = document.querySelector('.error__message')
    const buttonEl = document.querySelector('.error__button')

    messageEl.innerHTML = 'We\'ve lost connection!'
    buttonEl.innerHTML = 'Restart'
  }

  destroyScene(scene) {
    // clean component
    if (scene.destroy instanceof Function) {
      scene.destroy()
    }
  }
}
