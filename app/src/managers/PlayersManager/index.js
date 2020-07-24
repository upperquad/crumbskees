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

      this._gameStarted = false
      this.mode = null
    }

    return PlayersManager.instance
  }

  init = mode => {
    switch (mode) {
      case 'SINGLE':
        this.players = [{}]
        this.startSetup()
        break
      case 'DUAL':
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
        break
      default:
        break
    }
    this.mode = mode
    this._callObservers('MODE_UPDATED')
  }

  _onMessage = detail => {
    const { data, type } = detail

    switch (type) {
      case 'new_token_accepted': {
        const { id, token } = data
        const targetPlayerIndex = this.players.findIndex(player => player.token === token)
        this.players[targetPlayerIndex] = new Player({
          type: 'remote',
          id,
          playerIndex: targetPlayerIndex,
          token,
          updateParent: this.updatesFromPlayer,
        })
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
      case 'player_connection_change':
        this._callObservers('player_connection_change')
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
    TokenSocketManager.removeSubscriber('MESSAGE', this._onMessage)
    this.mode = null
    this._callObservers('MODE_UPDATED')
  }

  player = id => this.players.find(player => player.id === id)

  playerIndex = id => this.players.findIndex(player => player.id === id)

  startSetup = () => {
    this.players.forEach((player, index) => {
      if (!player.initialized) {
        switch (this.mode) {
          case 'SINGLE':
            this.players[index] = new Player({
              type: 'mouse',
              updateParent: this.updatesFromPlayer,
            })
            break
          case 'DUAL':
            this.players[index] = { token: getNewToken(index) }
            break
          default:
            break
        }
      }
    })
  }

  startTutorial = () => {
    if (this.mode === 'DUAL') {
      this.players.forEach(player => {
        player.playerPeer.send('tutorial_start')
      })
    }
  }

  startGame = () => {
    if (this.mode === 'DUAL') {
      this.players.forEach(player => {
        player.playerPeer.send('game_start')
      })
    }
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
    if (this.mode === 'DUAL') {
      this.players.forEach(player => {
        player.playerPeer.send('result', { winner: this.getResult() })
      })
    }
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

  allConnected = () => this.players.every(item => item.connected)

  allReady = () => this.players.every(item => item.ready)

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
