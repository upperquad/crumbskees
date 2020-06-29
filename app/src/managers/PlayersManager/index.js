import Player from './Player'
import TokenSocketManager from '~managers/TokenSocketManager'
import Observable from '~managers/abstracts/Observable'
import { DEBUG } from '~constants'
import { randomInt } from '~utils/math'

class PlayersManager extends Observable {
  constructor() {
    super()

    if (!PlayersManager.instance) {
      PlayersManager.instance = this

      this._players = [{}, {}]

      this.players = new Proxy(this._players, {
        get: (obj, prop) => obj[prop],
        set: (obj, prop, value) => {
          obj[prop] = value
          this._callObservers('player_change')
          return obj[prop]
        },
      })

      TokenSocketManager.addSubscriber('MESSAGE', this._onMessage)
    }

    return PlayersManager.instance
  }

  _gameStarted = false

  _onMessage = detail => {
    const { data, type } = detail

    switch (type) {
      case 'new_token_accepted': {
        const { id, token } = data
        const targetPlayerIndex = this.players.findIndex(player => player.token === token)
        this.players[targetPlayerIndex] = new Player(
          id,
          targetPlayerIndex,
          token,
          this.updatesFromPlayer,
        )
        break
      }
      case 'token_exists': {
        const { token } = data
        const targetPlayerIndex = this.players.findIndex(player => player.token === token)
        if (!this.players[targetPlayerIndex].id) {
          this.players[targetPlayerIndex] = { token: getNewToken(targetPlayerIndex) }
        }
        break
      }
      default:
        break
    }
  }

  updatesFromPlayer = (type, id) => {
    switch (type) {
      case 'player_change':
        this._callObservers('player_change')
        break
      case 'player_ready_change':
        this._callObservers('player_ready_change')
        break
      case 'player_peer_closed':
        this.closeConnection(id)
        break
      default:
        break
    }
  }

  reset = () => {
    if (this.players) {
      this.players.forEach((player, index) => {
        if (typeof player.destroy === 'function') {
          player.destroy()
        }
        this.players[index] = {}
      })
      this._gameStarted = false
    }
  }

  player = id => this.players.find(player => player.id === id)

  playerIndex = id => this.players.findIndex(player => player.id === id)

  // newConnect = (submittedToken, userId) => {
  //   if (submittedToken) {
  //     const matchIndex = this.players.findIndex(playerObj => {
  //       const { token } = playerObj
  //       return token === submittedToken
  //     })
  //     if (matchIndex !== -1) {
  //       this.players[matchIndex] = new Player({ id: userId, character: CHARACTERS[matchIndex] })
  //       PeerManager.send('auth_result', { id: userId, result: 1, playerIndex: matchIndex })
  //     } else {
  //       PeerManager.send('auth_result', { id: userId, result: 0 })
  //     }
  //   } else if (userId) {
  //     const player = this.players.find(ply => ply.id === userId)
  //     if (player) {
  //       PeerManager.send('reconnect_result', { id: userId, result: 1 })
  //       player.setLostStatus(false)
  //       this._callObservers('player_connection_change')
  //     } else {
  //       PeerManager.send('reconnect_result', { id: userId, result: 0 })
  //     }
  //   }
  // }

  startSetup = () => {
    if (this.players) {
      this.players.forEach((player, index) => {
        this.players[index] = { token: getNewToken(index) }
      })
    }
  }

  startTutorial = () => {
    this.players.forEach(player => {
      player.playerPeer.send('tutorial_start')
    })
  }

  startGame = () => {
    this.players.forEach(player => {
      player.playerPeer.send('game_start')
    })
    this._gameStarted = true
  }

  getResult = () => {
    let result

    if (this.players[0].score() > this.players[1].score()) {
      result = 0
    } else if (this.players[0].score() < this.players[1].score()) {
      result = 1
    } else {
      result = 'tied'
    }

    return result
  }

  endGame = () => {
    this.players.forEach(player => {
      player.playerPeer.send('result', { winner: this.getResult() })
    })
    this.reset()
  }

  closeConnection = submittedId => {
    const matchIndex = this.players.findIndex(player => {
      const { id } = player
      return id === submittedId
    })

    if (matchIndex !== -1) {
      if (this._gameStarted) {
        // TODO: restore connection state if reconnected
        this.players[matchIndex].setLostStatus(true)
        this._callObservers('player_connection_change')
      } else {
        if (typeof this.players[matchIndex].destroy === 'function') {
          this.players[matchIndex].destroy()
        }
        this.players[matchIndex] = { token: getNewToken(matchIndex) }
      }
    }
  }

  bothConnected = () => this.players.every(item => item.connected)

  bothReady = () => this.players.every(item => item.ready)

  addScore = (score, id) => {
    const player = this.player(id)

    if (player) {
      player.addScore(score)
      this._callObservers('player_score')
    }
  }

  removeScore = (score, id) => {
    const player = this.player(id)

    if (player) {
      player.removeScore(score)
      this._callObservers('player_score')
    }
  }
}

function getNewToken(index) {
  let token
  if (DEBUG) {
    token = index === 0 ? '0000' : '9999'
  } else {
    token = `${randomInt(1, 9)}${randomInt(1, 9)}${randomInt(1, 9)}${randomInt(1, 9)}`
  }

  TokenSocketManager.send('new_token', { token })
  return token
}

export default new PlayersManager()
