import Player from './Player'
import WebSocketManager from '~managers/WebSocketManager'
import Observable from '~managers/abstracts/Observable'
import { CHARACTERS, DEBUG } from '~constants'

class PlayersManager extends Observable {
  constructor() {
    super()

    if (!PlayersManager.instance) {
      PlayersManager.instance = this
    }

    return PlayersManager.instance
  }

  _gameStarted = false

  _players = [{ token: getNewToken(0) }, { token: getNewToken(1) }]

  players = new Proxy(this._players, {
    get: (obj, prop) => obj[prop],
    set: (obj, prop, value) => {
      obj[prop] = value
      this._callObservers('player_change')
      return obj[prop]
    },
  })

  player = id => this.players.find(player => player.id === id)

  playerIndex = id => this.players.findIndex(player => player.id === id)

  newConnect = (submittedToken, userId) => {
    if (submittedToken) {
      const matchIndex = this.players.findIndex(playerObj => {
        const { token } = playerObj
        return token === submittedToken
      })
      if (matchIndex !== -1) {
        this.players[matchIndex] = new Player({ id: userId, character: CHARACTERS[matchIndex] })
        WebSocketManager.send('auth_result', { id: userId, result: 1, playerIndex: matchIndex })
      } else {
        WebSocketManager.send('auth_result', { id: userId, result: 0 })
      }
    } else if (userId) {
      const player = this.players.find(ply => ply.id === userId)
      if (player) {
        WebSocketManager.send('reconnect_result', { id: userId, result: 1 })
        player.setLostStatus(false)
        this._callObservers('player_connection_change')
      } else {
        WebSocketManager.send('reconnect_result', { id: userId, result: 0 })
      }
    }
  }

  startGame = () => {
    this._gameStarted = true
  }

  closeConnection = submittedId => {
    const matchIndex = this.players.findIndex(player => {
      const { id } = player
      return id === submittedId
    })

    if (matchIndex !== -1) {
      if (this._gameStarted) {
        this.players[matchIndex].setLostStatus(true)
        this._callObservers('player_connection_change')
      } else {
        this.players[matchIndex].destroy()
        this.players[matchIndex] = { token: getNewToken(matchIndex) }
      }
    }
  }

  bothConnected = () => this.players.every(item => item.id)

  addScore = (score, id) => {
    const player = this.player(id)

    if (player) {
      player.addScore(score)
      this._callObservers('player_score')
    }
  }
}

function getNewToken(index) {
  if (DEBUG) {
    return index === 0 ? '000' : '999'
  }
  return Math.random().toString(10).substr(2, 3)
}

export default new PlayersManager()
