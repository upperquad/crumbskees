import QRCode from 'qrcode'
import { TimelineMax } from 'gsap/TweenMax'
import { Howl } from 'howler'
import { splitText } from '../utils/dom'

// components
import Scene from '../components/Scene'
import Player from '../components/Player'

// server
import Server from '../constants/Server'
import DEBUG from '../constants/Debug'

// assets
import scene1Pattern from '../../../assets/game/images/round_1/r1-pattern.gif'
import scene1Front from '../../../assets/game/images/round_1/r1-front.gif'
import scene1Item from '../../../assets/game/images/round_1/r1-item.png'
import scene1IntroVideo from '../../../assets/game/images/round_1/r1-intro.mp4'

import scene2Pattern from '../../../assets/game/images/round_2/r2-pattern.gif'
import scene2Front from '../../../assets/game/images/round_2/r2-front.gif'
import scene2Item from '../../../assets/game/images/round_2/r2-item.png'
import scene2IntroVideo from '../../../assets/game/images/round_2/r2-intro.mp4'

import scene3Pattern from '../../../assets/game/images/round_3/r3-pattern.gif'
import scene3Front from '../../../assets/game/images/round_3/r3-front.gif'
import scene3Item from '../../../assets/game/images/round_3/r3-item.png'
import scene3IntroVideo from '../../../assets/game/images/round_3/r3-intro.mp4'

import freezeItem from '../../../assets/game/images/freeze.png'
import growItem from '../../../assets/game/images/grow.png'

import characterVideoWhite1 from '../../../assets/game/images/character-white-1.mp4'
import characterVideoWhite2 from '../../../assets/game/images/character-white-2.mp4'

import countdownSound from '../../../assets/game/sounds/countdown.mp3'
import winnerSound from '../../../assets/game/sounds/winner.mp3'
import wooshSound from '../../../assets/game/sounds/woosh.mp3'

const BASE_URL = `${window.location.protocol}//${window.location.host}/`

// prepare the CharacterId
// CharacterId --> get the image of the character
// end scene:
//

export default class GameManager {
  constructor() {
    this.playerIds = DEBUG ? ['a', 'b'] : [null, null]
    this.tokens = [this.getNewToken(), this.getNewToken()]
    this.gameStarted = false
    this.tutorialStarted = false

    // Sounds
    this.countdownSound = new Howl({
      src: [countdownSound],
      volume: 0.5,
    })

    this.winnerSound = new Howl({
      src: [winnerSound],
      volume: 1,
    })

    this.wooshSound = new Howl({
      src: [wooshSound],
      volume: 1,
    })

    if (!DEBUG) {
      Server.websocket.onopen = this.onWsOpen
      Server.websocket.onclose = this.onWsClose
    } else {
      this.loadAll(() => window.RouterManager.goTo('game', this.initGame))
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
              `<div class="qr__qr" style="background-image: url(${dataUrl})"></div><div class="qr__url text-18">Think QR codes are stupid?<br>Go to ${BASE_URL}<span class="color--red">${this.tokens[index]}</span></div>`
          })
      } else {
        block.classList.add('is-connected')
      }
    })
  }

  onWsOpen = () => {
    window.RouterManager.goTo('setup', this.initSetup)
  }

  onWsClose = event => {
    if (event.reason === 'active_game_exist') {
      window.RouterManager.goTo('error', this.initErrorGameExists)
    } else {
      window.RouterManager.goTo('error', this.initErrorConnectionLost)
    }
  }

  initSetup = () => {
    this.qrBlocks = [...document.querySelectorAll('.setup__upper')]
    this.updateQr()
    Server.websocket.onmessage = this.listenServer
  }

  verifyToken = (token, userId) => {
    let isTokenValid = false
    let playerIndex = null
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === null && this.tokens[index] === token) {
        this.tokens[index] = null
        this.playerIds[index] = userId
        isTokenValid = true
        playerIndex = index
        break
      }
    }
    Server.websocket.send(`auth_result,${userId},${isTokenValid ? 1 : 0},${playerIndex}`)
    this.updateQr()
  }

  removePhone = userId => {
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === userId) {
        this.tokens[index] = this.getNewToken()
        this.playerIds[index] = null
        this.updateQr()
        if (this.tutorialStarted) {
          this.tutorialTimeline.kill()
          window.RouterManager.goTo('setup', this.initSetup)
        }
        return
      }
    }
  }

  markPlayerDisconnected = userId => {
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === userId) {
        this.players[userId].disconnected = true
        this.updatePlayerConnectionStatus()
        if (this.players[this.playerIds[1 - index]].disconnected) {
          window.RouterManager.goTo('final', this.initFinal)
        }
        return
      }
    }
  }

  checkReconnectPhone = userId => {
    let foundUser = false
    let playerIndex = null
    for (let index = 0; index <= 1; index++) {
      if (this.playerIds[index] === userId && this.players[userId].disconnected) {
        this.players[userId].disconnected = false
        foundUser = true
        playerIndex = index
        this.updatePlayerConnectionStatus()
        break
      }
    }
    Server.websocket.send(`auth_result,${userId},${foundUser ? 1 : 0},${playerIndex}`)
  }

  updatePlayerConnectionStatus = () => {
    for (let index = 0; index <= 1; index++) {
      const userId = this.playerIds[index]
      if (this.players[userId]) {
        const player = this.players[userId]
        if (this.dom.boardPlayerCharacters && this.dom.boardPlayerCharacters[index]) {
          if (player.disconnected) {
            this.dom.boardPlayerCharacters[index].classList.add('is-dead')
          } else {
            this.dom.boardPlayerCharacters[index].classList.remove('is-dead')
          }
        }
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
            this.tutorialStarted = true
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
      case 'reconnect_phone':
        this.checkReconnectPhone(data[1])
        break
      case 'phone_left':
        if (this.gameStarted) {
          // Mark player lost, or end game if both are lost
          this.markPlayerDisconnected(data[1])
        } else {
          this.removePhone(data[1])
        }
        break
      case 'cursor_move': {
        if (this.gameStarted) {
          const x = parseFloat(data[2], 10) * this.vbWidth
          const y = parseFloat(data[3], 10) * this.vbWidth
          // we use vbWidth the same coeficient here to have the same speed movement on touchmove X and Y
          if (!this.players[data[1]].frozen) { // if player not frozen
            this.players[data[1]].targetX = x + this.players[data[1]].targetX
            this.players[data[1]].targetY = y + this.players[data[1]].targetY
          }
        }
        break
      }
      case 'click':
        // data[1] needs to be the index of player (or id)
        if (this.gameStarted && this.players[data[1]]) {
          this.players[data[1]].click()
        }
        break
      default:
        break
    }
  }

  initTutorial = () => {
    this.tutorialContentEl = document.querySelector('#tutorial-content')
    this.tutorialTimebarNumberEl = document.querySelector('#tutorial-timebar-number')
    this.tutorialTimebarColorEl = document.querySelector('#tutorial-timebar-color')
    this.tutorialTimeline = new TimelineMax({
      onUpdate: this.tutorialTimelineOnUpdate,
    })
    this.tutorialTimeline.add(this.tutorialTimelineEnd, 15)
    this.tutorialTimeline.play()
    this.loadAll()
  }

  tutorialTimelineOnUpdate = () => {
    const progress = Math.floor(this.tutorialTimeline.progress() * 100)
    this.tutorialTimebarNumberEl.textContent = `${progress}%`
    this.tutorialTimebarColorEl.style.width = `${progress}%`
    this.tutorialContentEl.dataset.step = Math.min(Math.ceil(progress / 33.3), 3)
  }

  tutorialTimelineEnd = () => {
    console.log('end')
    this.loadAll(() => window.RouterManager.goTo('game', this.initGame))
  }

  loadAll = callback => {
    // load all images
    Promise.all([
      this.load(scene1Pattern),
      this.load(scene1Front),
      this.load(scene1Item),
      this.load(scene2Pattern),
      this.load(scene2Front),
      this.load(scene2Item),
      this.load(scene3Pattern),
      this.load(scene3Front),
      this.load(scene3Item),
    ]).then(callback)
  }

  load = src => new Promise(resolve => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve()
    }
  })

  initGame = () => {
    this.gameStarted = true

    if (!DEBUG) {
      Server.websocket.send('game_start')
    }

    this.element = document.querySelector('[game]')

    // scores
    this.scenes = [
      {
        bkg: scene1Pattern,
        frontBkg: scene1Front,
        item: scene1Item,
        videoIntro: scene1IntroVideo,
        numItems: 10,
        gridCols: 32,
        gridLines: 14,
        message: 'DOPE.',
        delayGif: 1000,
        power: {
          type: 'grow',
          item: growItem,
        },
      }, {
        bkg: scene2Pattern,
        frontBkg: scene2Front,
        item: scene2Item,
        videoIntro: scene2IntroVideo,
        numItems: 10,
        gridCols: 32,
        gridLines: 14,
        message: 'GOOD JOB!',
        delayGif: 2750,
        power: {
          type: 'freeze',
          item: freezeItem,
        },
      }, {
        bkg: scene3Pattern,
        frontBkg: scene3Front,
        item: scene3Item,
        videoIntro: scene3IntroVideo,
        numItems: 10,
        gridCols: 32,
        gridLines: 14,
        message: 'AWESOME!',
        delayGif: 0,
        power: {
          type: 'grow',
          item: growItem,
        },
      },
    ]
    this.players = []
    this.scores = [0, 0]
    this.currentSceneIndex = 0
    // Size scene parameter
    this.vbWidth = 1920
    this.vbHeight = 840
    this.gridUnit = 3.125 / 100 * this.vbWidth // 3.125 == 1 unit grid (1920 / 32)
    this.gridUnitVw = 3.125
    this.gridUnitVh = (60 / this.vbHeight * 100)

    this.initDom()
    this.setPlayers()

    const scene = this.scenes[this.currentSceneIndex]

    this.currentScene = new Scene({
      el: this.dom.scene,
      index: this.currentSceneIndex,
      ...scene,
    })
  }

  initDom() {
    this.dom = {
      scene: this.element.querySelector('.scene'),
      cursors: this.element.querySelectorAll('.cursor'),
      message: this.element.querySelector('.scene__message'),
      boardPlayerScore: this.element.querySelectorAll('.board__player__score'),
      boardPlayerItems: this.element.querySelectorAll('.board__player__items'),
      boardPlayerCharacters: this.element.querySelectorAll('.board__player__character'),
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
    this.updatePlayerConnectionStatus()
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
        this.endScene('TIME\'S UP!')
      }

      if (timer === 10) {
        // play sound countdown
        this.countdownSound.play()
      }

      timer -= 1
    }, 1000)

    this.element.classList.add('sceneStarted')
  }

  score(player, item, pos = false, score = 1) {
    this.popUpMessage(`+${score}`, player.color, false, pos) // + color player

    this.scores[player.index] += score
    this.element.classList.add('item-found')

    for (let i = 0; i < this.dom.boardPlayerScore.length; i++) {
      if (i === player.index) {
        const zeroUnit = this.scores[player.index] < 10 ? '0' : ''
        this.dom.boardPlayerScore[i].innerHTML = `${zeroUnit}${this.scores[player.index]}`
      }
    }

    for (let i = 0; i < score; i++) {
      const img = document.createElement('img')
      img.src = item
      img.classList.add('board__player__item')
      this.dom.boardPlayerItems[player.index].appendChild(img)
    }

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
      this.wooshSound.play()
    }, 1000)

    setTimeout(() => {
      this.element.classList.remove('isOutro')
      this.element.classList.add('isIntro')
      this.wooshSound.play()
    }, 5000)

    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 6500)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)

    if (index === this.scenes.length) {
      window.RouterManager.goTo('final', this.initFinal)
      return
    }

    // reset players pos to 0
    for (let i = 0; i < this.playerIds.length; i++) {
      this.players[this.playerIds[i]].targetX = 0
      this.players[this.playerIds[i]].targetY = 0
      this.players[this.playerIds[i]].x = 0
      this.players[this.playerIds[i]].y = 0

      // clean powers
      this.players[this.playerIds[i]].cleanPowers()

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
    const charactersVideos = [characterVideoWhite1, characterVideoWhite2]
    let playerIndex
    let tie = false
    if (this.scores[0] > this.scores[1]) {
      playerIndex = 0
    } else if (this.scores[0] < this.scores[1]) {
      playerIndex = 1
    } else {
      tie = true
    }

    Server.websocket.send(`result,${tie ? 'tied' : this.playerIds[playerIndex]}`)

    const scoreEl = document.querySelector('.final__score')
    const playerEl = document.querySelector('.final__player')
    const playerVideoEl = document.querySelector('.final__player-video')
    const playersVideoEl = document.querySelector('.final__players-video')

    if (!tie) {
      playerEl.innerHTML = `player ${playerIndex + 1}`
      scoreEl.innerHTML = this.scores[playerIndex]
      playerVideoEl.src = charactersVideos[playerIndex]
      playerEl.classList.add(`color--${this.players[this.playerIds[playerIndex]].color}`)
      scoreEl.classList.add(`color--${this.players[this.playerIds[playerIndex]].color}`)
    } else {
      playerEl.innerHTML = 'TIE!'
      scoreEl.innerHTML = this.scores[0]
      const playerVideoEl2 = playerVideoEl.cloneNode(true)
      playerVideoEl2.src = charactersVideos[1]
      playerVideoEl.src = charactersVideos[0]
      playersVideoEl.appendChild(playerVideoEl2)
      playersVideoEl.classList.add('tie')
    }

    this.winnerSound.play()

    setTimeout(() => {
      Server.websocket.send('disconnect_users')
      window.location.reload()
    }, 130000)
  }

  initErrorGameExists = () => {
    const messageEl = document.querySelector('.error__message')
    const buttonEl = document.querySelector('.error__button')
    const timebarEl = document.querySelector('.error__timebar')

    timebarEl.style.display = 'none'
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

    setTimeout(() => {
      window.location.reload()
    }, 7000)
  }

  destroyScene(scene) {
    // clean component
    if (scene.destroy instanceof Function) {
      scene.destroy()
    }
  }
}
