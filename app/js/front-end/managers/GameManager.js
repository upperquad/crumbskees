import gameTmp from '../../../templates/front-end/game.html'

import Scene from '../components/Scene'
import Player from '../components/Player'

// assets
import scene1Bkg from '../../../assets/front-end/images/find-cat.png'
import scene1Item from '../../../assets/front-end/images/pattern.png'

const id = 'ewpijf'
const token = 'weijfwepfijwfs'

export default class GameManager {
  constructor() {
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = new WebSocket(`${this.host}/game`)
    this.numbers = document.getElementById('numbers')
    this.bubble = document.getElementById('bubble')

    this.websocket.onmessage = event => {
      const data = event.data.split(',')

      if (data[0] === 'token_submit') {
        if (data[1] === id && data[2] === token) {
          this.init()
        } else {
          return // can be an error object
        }
      } else if (data[0] === 'command') {
        if (data[1] === 'reset') {
          // TODO, can even do "Kick Player 1 Out", "Kick Player 2 Out",
          // "Kick'em Both Out" buttons
        } else if (data[1] === 'refresh') {
          window.location.reload(false)
        }
      } else if (data[0] === 'control') {
        this.bubble.style.left = `calc(${data[1]} * 100%)`
        this.bubble.style.top = `calc(${data[2]} * 100%)`
      }

      this.numbers.innerHTML = event.data
    }

    this.init()
  }

  init() {
    this.main = document.querySelector('.main')

    this.main.innerHTML = gameTmp

    this.element = document.querySelector('[game]')

    // scores
    this.scenes = [
      {
        bkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        item: scene1Item,
        numItems: 10,
        gridCols: 10,
        gridLines: 10,
        effect: '?',
      }, {
        bkg: scene1Bkg,
        item: scene1Item,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?',
      }, {
        bkg: scene1Bkg,
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

    // Load Current Scene image
    const img = new Image()
    img.src = this.scenes[this.currentSceneIndex].bkg
    img.onload = () => {
      // image loaded
      this.dom()
      this.setPlayers()

      const scene = this.scenes[this.currentSceneIndex]

      this.currentScene = new Scene(
        this.dom.scene,
        scene.bkg,
        scene.item,
        scene.numItems,
        scene.gridCols,
        scene.gridLines,
        this.currentSceneIndex,
      )
    }
  }

  dom() {
    this.dom = {
      scene: this.element.querySelector('.scene'),
      imagePlaceholder: this.element.querySelector('.scene__placeholder'),
      cursors: this.element.querySelectorAll('.cursor'),
      message: this.element.parentNode.querySelector('.scene__message'),
      scoreCenterRecap: this.element.parentNode.querySelectorAll('.score__center__recap'),
      scoreItems: this.element.parentNode.querySelectorAll('.score__items'),
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

    for (let i = 0; i < this.dom.cursors.length; i++) {
      const props = Object.assign(obj, { el: this.dom.cursors[i], index: i, color: colors[i] })
      this.players.push(new Player(props))
    }
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
  }

  popUpMessage(message, color = 'gray', end = false) {
    const div = document.createElement('div')
    div.classList.add('message', 't-120--bold', `color--${color}`)
    if (end) {
      div.classList.add('message-end')
    }
    div.innerHTML = message
    this.dom.scene.appendChild(div)

    if (!end) {
      setTimeout(() => {
        div.remove()
      }, 3000)
    }
  }

  endScene() {
    this.popUpMessage('end of scene', 'black', true)
    setTimeout(() => {
      this.updateScene(this.currentSceneIndex + 1)
    }, 2000)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)

    this.currentSceneIndex = index
    const scene = this.scenes[this.currentSceneIndex]

    this.currentScene = new Scene(
      this.dom.scene,
      scene.bkg,
      scene.item,
      scene.numItems,
      scene.gridCols,
      scene.gridLines,
      this.currentSceneIndex,
    )
  }

  destroyScene(scene) {
    // clean component
    if (scene.destroy instanceof Function) {
      scene.destroy()
    }
  }
}
