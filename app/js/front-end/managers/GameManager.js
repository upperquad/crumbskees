import gameTmp from '../../../templates/front-end/game.html'

import Scene from '../components/Scene'
import Player from '../components/Player'

// server
import Server from '../constants/Server'

// assets
import scene1Bkg from '../../../assets/front-end/images/bkg1.jpg'
import scene1Item from '../../../assets/front-end/images/pattern.png'
import scene2Bkg from '../../../assets/front-end/images/find-cat.png'
// import scene2Item from '../../../assets/front-end/images/pattern.png'

const id = 'ewpijf'
const tokens = ['123', '456']

export default class GameManager {
  constructor() {
    Server.websocket.onmessage = this.listenServer

    this.init()
  }

  listenServer = event => {
    const data = event.data.split(',')

    if (data[0] === 'token_submit') {
      // loop into the tokens, if the token correspond, set up the id
      if (data[1] === id && data[2] === token) {
        // send
        Server.websocket.send(`auth_result_id,${id},1`)
        this.init()
      } else {
        Server.websocket.send(`auth_result_id,${id},0`)
        return // can be an error object
      }
    } else if (data[0] === 'cursor_move') {
      // data[1] needs to be the index of player (or id)
      // this.players[data[1]].eventX = data[1]
      // this.players[data[1]].eventY = data[2]
    } else if (data[0] === 'click') {
      // data[1] needs to be the index of player (or id)
      // this.players[data[1]].handleClick()
    }

    this.numbers.innerHTML = event.data
  }

  init() {
    this.main = document.querySelector('.main')

    this.main.innerHTML = gameTmp

    this.element = document.querySelector('[game]')

    // scores
    this.scenes = [
      {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?',
      }, {
        bkg: scene2Bkg,
        maskedBkg: scene2Bkg,
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
        gridCols: 4,
        gridLines: 4,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        maskedBkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
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
      this.setPlayers()

      const scene = this.scenes[this.currentSceneIndex]

      // add image placholder
      this.dom.imagePlaceholder.src = scene.bkg

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
      imagePlaceholder: this.element.querySelector('.scene__placeholder'),
      cursors: this.element.querySelectorAll('.cursor'),
      message: this.element.querySelector('.scene__message'),
      scoreCenterRecap: this.element.querySelectorAll('.score__center__recap'),
      scoreItems: this.element.querySelectorAll('.score__items'),
      timer: this.element.querySelector('.timer'),
    }
  }

  setPlayers() {
    this.numPoints = 8
    this.vbWidth = this.dom.imagePlaceholder.offsetWidth
    this.vbHeight = this.dom.imagePlaceholder.offsetHeight
    // assuming we always use a viewbox of 100 x 100

    const obj = {
      numPoints: this.numPoints,
    }

    const colors = [
      'red',
      'blue',
    ]
    // each player is an object with a key/id
    for (let i = 0; i < this.dom.cursors.length; i++) {
      const props = Object.assign(obj, { el: this.dom.cursors[i], index: i, color: colors[i] })
      this.players.push(new Player(props))
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

    for (let i = 0; i < this.dom.scoreCenterRecap.length; i++) {
      if (i === player.index) {
        this.dom.scoreCenterRecap[i].innerHTML = `P-${player.index + 1} : ${this.scores[player.index]}`
      }
    }

    const img = document.createElement('img')
    img.src = item
    img.classList.add('score__item')
    this.dom.scoreItems[player.index].appendChild(img)

    Server.websocket.send(`score,${player.index},${this.scores[player.index]}`)
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

  endScene(message = 'end of scene') {
    clearInterval(this.timerInterval)
    this.popUpMessage(message, 'black', true)
    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 2000)
  }

  updateScene(index) {
    if (index === this.scenes.length) {
      console.log('end of party')
      Server.websocket.send('disconnect_all_users')
    }
    this.destroyScene(this.currentScene)

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
