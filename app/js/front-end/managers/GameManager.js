
import gameTmp from '../../../templates/front-end/game.html'
import setupTmp from '../../../templates/front-end/setup.html'

import Scene from '../components/Scene'
import Player from '../components/Player'

// server
import Server from '../constants/Server'
import DEBUG from '../constants/Debug'

// assets
import scene1Bkg from '../../../assets/front-end/images/round_1/r1-pattern.jpg'
import scene1Mask from '../../../assets/front-end/images/round_1/r1-mask.jpg'
import scene1Item from '../../../assets/front-end/images/round_1/r1-target.jpg'
import scene2Bkg from '../../../assets/front-end/images/find-cat.png'
// import scene2Item from '../../../assets/front-end/images/pattern.png'\

const playerIds = DEBUG ? ['refiejrfer', 'erfjerfpie'] : []
const tokens = ['123', '456']


// prepare the CharacterId
// CharacterId --> get the image of the character
// end scene:
//

export default class GameManager {
  constructor() {
    this.main = document.querySelector('.main')

    if (!DEBUG) {
      Server.websocket.onopen = this.onWsOpen
    } else {
      this.init()
    }
  }

  onWsOpen = () => {
    this.main.innerHTML = setupTmp
    this.setupMessage = this.main.querySelector('.setup__message')
    Server.websocket.onmessage = this.listenServer
  }

  listenServer = event => {
    const data = event.data.split(',')

    if (data[0] === 'token_submit') {
      // loop into the tokens, if the token correspond, set up the id
      let validToken = false
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === data[1] && data[2] !== this.firstPlayerId) {
          // data[2] !== this.firstPlayerId In case second player use the token of the first player
          playerIds.push(data[2])
          Server.websocket.send(`auth_result,${data[2]},1`)
          validToken = true
          this.firstPlayerId = data[2]
          this.setupMessage.innerHTML = `Player ${playerIds.length} is ready`
        }
      }

      if (validToken === false) {
        Server.websocket.send(`auth_result,${data[2]},0`)
      }

      if (playerIds.length === 2) {
        // if both players are set, let's start
        setTimeout(() => {
          this.init()
        }, 1000)
      }
    } else if (data[0] === 'cursor_move') {
      const x = parseFloat(data[2], 10) * this.vbWidth
      const y = parseFloat(data[3], 10) * this.vbWidth
      // we use vbWidth the same coeficient here to have the same speed movement on touchmove X and Y
      this.players[data[1]].targetX = x + this.players[data[1]].targetX
      this.players[data[1]].targetY = y + this.players[data[1]].targetY

      // this.players[data[1]].targetX
    } else if (data[0] === 'click') {
      // data[1] needs to be the index of player (or id)
      this.currentScene.handleClick(data[1])
    }
  }

  init() {
    if (!DEBUG) Server.websocket.send(`score,${playerIds[0]},0`)
    this.main.innerHTML = gameTmp

    this.element = document.querySelector('[game]')

    // scores
    this.scenes = [
      {
        bkg: scene1Bkg,
        maskedBkg: scene1Mask,
        item: scene1Item,
        numItems: 5,
        gridCols: 6,
        gridLines: 6,
        effect: '?',
      }, {
        bkg: scene2Bkg,
        maskedBkg: scene2Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 8,
        gridLines: 8,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 10,
        gridLines: 10,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 12,
        gridLines: 12,
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
    this.playerIds = playerIds

    const colors = [
      'purple',
      'red',
    ]

    // each player is an object with a key/id
    this.players = {}
    if (playerIds.length === 2) {
      this.players[playerIds[0]] = new Player({
        el: this.dom.cursors[0],
        index: 0,
        color: colors[0],
        id: playerIds[0],
      })
      this.players[playerIds[1]] = new Player({
        el: this.dom.cursors[1],
        index: 1,
        color: colors[1],
        id: playerIds[1],
      })
    }
  }

  startTimer(duration) {
    let timer = duration
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

  endScene(message = 'stage complete') {
    clearInterval(this.timerInterval)
    this.popUpMessage(message, 'black', true)
    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 2000)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)

    if (index === this.scenes.length + 1) {
      console.log('end of party')
      Server.websocket.send('disconnect_all_users')
      return
    }

    // reset players pos to 0
    for (let i = 0; i < playerIds.length; i++) {
      this.players[playerIds[i]].targetX = 0
      this.players[playerIds[i]].targetY = 0
      this.players[playerIds[i]].x = 0
      this.players[playerIds[i]].y = 0

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
