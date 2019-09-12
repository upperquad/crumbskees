import Player from './Player'
import WebSocketManager from '~managers/WebSocketManager'


class PlayersManager {
  constructor() {
    if (!PlayersManager.instance) {
      PlayersManager.instance = this
    }

    return PlayersManager.instance
  }

  gameStarted = false

  _players = [{ token: getNewToken() }, { token: getNewToken() }]

  players = new Proxy(this._players, {
    get: (obj, prop) => obj[prop],
    set: (obj, prop, value) => {
      obj[prop] = value
      this.callObservers('player_change')
      return obj[prop]
    },
  })

  observers = {}

  addSubscriber = (type, observer) => {
    if (!{}.hasOwnProperty.call(this.observers, type)) {
      this.observers[type] = []
    }
    this.observers[type].push(observer)
  }

  removeSubscriber = (type, observer) => {
    if ({}.hasOwnProperty.call(this.observers, type)) {
      this.observers[type] = this.observers[type].filter(item => item !== observer)
    }
  }

  callObservers = type => {
    if (this.observers[type]) {
      this.observers[type].forEach(observer => observer())
    }
  }

  newConnect = (submittedToken, userId) => {
    const matchIndex = this.players.findIndex(playerObj => {
      const { token } = playerObj
      return token === submittedToken
    })
    if (matchIndex !== -1) {
      this.players[matchIndex] = new Player({ id: userId })
      WebSocketManager.send('auth_result', { id: userId, result: 1, playerIndex: matchIndex })
    } else {
      WebSocketManager.send('auth_result', { id: userId, result: 0 })
    }
  }

  startGame = () => {
    this.gameStarted = true
  }

  closeConnection = submittedId => {
    const matchIndex = this.players.findIndex(player => {
      const { id } = player
      return id === submittedId
    })

    if (matchIndex !== -1) {
      if (this.gameStarted) {
        this.players[matchIndex].lost()
      } else {
        this.players[matchIndex].destroy()
        this.players[matchIndex] = { token: getNewToken() }
      }
    }
  }
}

function getNewToken() {
  return Math.random().toString(10).substr(2, 3)
}

export default new PlayersManager()
