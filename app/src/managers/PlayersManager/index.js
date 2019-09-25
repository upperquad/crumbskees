import Player from './Player'
import WebSocketManager from '~managers/WebSocketManager'

class PlayersManager {
  constructor() {
    if (!PlayersManager.instance) {
      PlayersManager.instance = this
    }

    return PlayersManager.instance
  }

  _gameStarted = false

  _players = [{ token: getNewToken() }, { token: getNewToken() }]

  // REVIEW: players should really be private, but readable
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

  // REVIEW: this should be private
  callObservers = type => {
    if (this.observers[type]) {
      this.observers[type].forEach(observer => observer())
    }
  }

  newConnect = (submittedToken, userId) => {
    if (submittedToken) {
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
    } else if (userId) {
      // REVIEW: todo
    }
  }

  startGame = () => {
    this._gameStarted = true
  }

  startNewRound = () => {
    this.players.forEach(player => {
      player.cleanPowers()
      player._scoreInScene = 0
    })
  }

  closeConnection = submittedId => {
    const matchIndex = this.players.findIndex(player => {
      const { id } = player
      return id === submittedId
    })

    if (matchIndex !== -1) {
      if (this._gameStarted) {
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
