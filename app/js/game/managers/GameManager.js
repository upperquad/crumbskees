import QRCode from 'qrcode'
// components
import Scene from '../components/Scene'
import Player from '../components/Player'

// server
import Server from '../constants/Server'
import DEBUG from '../constants/Debug'

// assets
import scene1Bkg from '../../../assets/front-end/images/round_3/r3-pattern.gif'
import scene1Mask from '../../../assets/front-end/images/round_1/r1-mask.jpg'
import scene1Item from '../../../assets/front-end/images/round_1/r1-target.jpg'
import scene1IntroVideo from '../../../assets/front-end/images/round_3/r3-intro.mp4'
import scene2Item from '../../../assets/front-end/images/pattern.png'
import scene2Bkg from '../../../assets/front-end/images/find-cat.png'
// import scene2Item from '../../../assets/front-end/images/pattern.png'\

const BASE_URL = `http://${window.location.host}/`

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
    } else {
      window.RouterManager.goTo('game', this.init)
    }
  }

  getNewToken = () => Math.random().toString(10).substr(2, 3)

  updateQr = () => {
    this.qrBlocks.forEach((block, index) => {
      if (this.playerIds[index] === null) {
        const tokenUrl = `${BASE_URL}${this.tokens[index]}`
        QRCode.toDataURL(tokenUrl, {margin: 0, scale: 10})
          .then(dataUrl => {
            block.innerHTML = `<div class="qr__url">${tokenUrl}</div><div class="qr__qr" style="background-image: url(${dataUrl})"></div>`
          })
      } else {
        block.innerHTML = '<div class="qr__connected">User connected!</div>'
      }
    })
  }

  onWsOpen = () => {
    window.RouterManager.goTo('setup', this.setup)
  }

  setup = () => {
    this.qrBlocks = [...document.querySelectorAll('.setup__qr')]
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

  listenServer = event => {
    const data = event.data.split(',')

    switch (data[0]) {
      case 'token_submit':
        this.verifyToken(data[1], data[2])

        if (this.playerIds[0] !== null && this.playerIds[1] !== null) {
          window.RouterManager.goTo('game', this.init)
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

  init = () => {
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
        gridCols: 16,
        gridLines: 7,
        effect: '?',
      }, {
        bkg: scene2Bkg,
        maskedBkg: scene2Bkg,
        item: scene2Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 16,
        gridLines: 7,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 16,
        gridLines: 7,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        videoIntro: scene1IntroVideo,
        numItems: 5,
        gridCols: 16,
        gridLines: 7,
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

  score(player, item) {
    this.popUpMessage('+1', player.color) // + color player

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

  popUpMessage(message, color = 'gray', end = false) {
    const div = document.createElement('div')
    div.classList.add('message', 't-120--bold', `color--${color}`)
    if (end) {
      div.classList.add('message-end')
    }
    div.innerHTML = message
    this.dom.scene.appendChild(div)

    setTimeout(() => {
      div.remove()
    }, 2000)
  }

  endScene(message = 'ROUND COMPLETE') {
    clearInterval(this.timerInterval)
    this.popUpMessage(message, 'red', true)

    this.element.classList.remove('sceneStarted')

    setTimeout(() => {
      this.element.classList.add('isIntro')
    }, 2000)

    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 5000)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)

    if (index === this.scenes.length) {
      // console.log('end of party')
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

  destroyScene(scene) {
    // clean component
    if (scene.destroy instanceof Function) {
      scene.destroy()
    }
  }
}
