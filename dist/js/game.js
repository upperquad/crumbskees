const GAME_COUNT = 500
const HOST = window.location.origin.replace(/^http/, 'ws')

const mainEl = document.getElementById("main")
const games = []

class Game {
  constructor() {
    this.gameEl = document.createElement("tr")
    this.gameIdEl = document.createElement("td")
    this.leftPlayerIdEl = document.createElement("td")
    this.leftPlayerDataEl = document.createElement("td")
    this.rightPlayerIdEl = document.createElement("td")
    this.rightPlayerDataEl = document.createElement("td")

    this.gameEl.appendChild(this.gameIdEl)
    this.gameEl.appendChild(this.leftPlayerIdEl)
    this.gameEl.appendChild(this.leftPlayerDataEl)
    this.gameEl.appendChild(this.rightPlayerIdEl)
    this.gameEl.appendChild(this.rightPlayerDataEl)
    mainEl.appendChild(this.gameEl)

    this.webSocket = new WebSocket(`${HOST}/game`)
    this.webSocket.onopen = this._onWsOpen
  }

  _onWsOpen = ws => {
    this.webSocket.onmessage = this._onWsMessage
    this.webSocket.onclose = this._onWsClose
  }

  _onWsMessage = event => {
    const data = event.data.split(',')
    if (data[0] === 'id') {
      this.gameIdEl.textContent = data[1]
    } else if (data[0] !== 'pong') {
      this.leftPlayerDataEl.textContent = event.data
    }
  }

  _onWsClose = event => {
    console.log(event.reason)
    this.gameEl.classList.add('is-dead')
  }

  sendMessage = message => {
    try {
      this.webSocket.send(message)
    } catch (e) {
      return
    }
  }
}

init()

function init() {
  for (let i = 0; i < GAME_COUNT; i++) {
    games.push(new Game())
  }

  const messageInterval = setInterval(() => {
    games.forEach(game => {
      game.sendMessage('ping')
    })
  }, 10000)
}


