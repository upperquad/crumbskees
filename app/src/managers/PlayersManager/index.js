import Player from './Player'
import Player1Peer from '~managers/PeerManager/Player1Peer'
import Player2Peer from '~managers/PeerManager/Player2Peer'
import TokenSocketManager from '~managers/TokenSocketManager'
import Observable from '~managers/abstracts/Observable'
import { CHARACTERS, DEBUG, MODE } from '~constants'

class PlayersManager extends Observable {
  constructor() {
    super()

    if (!PlayersManager.instance) {
      PlayersManager.instance = this
    }

    return PlayersManager.instance
  }

  _gameStarted = false

  // _players = [{}, {}]

  // players = new Proxy(this._players, {
  //   get: (obj, prop) => obj[prop],
  //   set: (obj, prop, value) => {
  //     obj[prop] = value
  //     this._callObservers('player_change')
  //     return obj[prop]
  //   },
  // })

  _onMessage = detail => {
    const { data, type } = detail

    switch (type) {
      case 'new_token_accepted': {
        const { id, token } = data
        const targetPlayerIndex = this.players.findIndex(player => player.token === token)
        let playerPeer
        if (targetPlayerIndex === 0) {
          playerPeer = Player1Peer
        } else {
          playerPeer = Player2Peer
        }
        console.log('new token accepted')
        this.players[targetPlayerIndex] = new Player({
          id,
          character: CHARACTERS[targetPlayerIndex],
          playerPeer,
          token,
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

  init = mode => {
    this.mode = mode
    if (mode === 'SINGLE_PLAYER') {
      this._players = [{}]
    } else {
      this._players = [{}, {}]
    }

    this.players = new Proxy(this._players, {
      get: (obj, prop) => obj[prop],
      set: (obj, prop, value) => {
        obj[prop] = value
        this._callObservers('player_change')
        return obj[prop]
      },
    })

    TokenSocketManager.addSubscriber('MESSAGE', this._onMessage)
    Player1Peer.addSubscriber('CONNECTED', () => {
      if (this.players[0].setConnected) {
        this.players[0].setConnected(true)
      }
      this._callObservers('player_change')
    })

    Player2Peer.addSubscriber('CONNECTED', () => {
      if (this.players[1].setConnected) {
        this.players[1].setConnected(true)
      }
      this._callObservers('player_change')
    })

    this.reset()
  }

  reset = () => {
    this.players.forEach((player, index) => {
      if (typeof player.destroy === 'function') {
        player.destroy()
      }
      this.players[index] = { token: getNewToken(index) }
    })
    this._gameStarted = false
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
        if (typeof this.players[matchIndex].destroy === 'function') {
          this.players[matchIndex].destroy()
        }
        this.players[matchIndex] = { token: getNewToken(matchIndex) }
      }
    }
  }

  bothConnected = () => this.players.every(item => item.connected) // if true, it means all players are connected

  addScore = (score, id) => {
    const player = this.player(id)

    if (player) {
      player.addScore(score)
      this._callObservers('player_score')
    }
  }
}

function getNewToken(index) {
  let token
  if (DEBUG) {
    token = index === 0 ? '000' : '999'
  } else {
    token = Math.random().toString(10).substr(2, 3)
  }

  TokenSocketManager.send('new_token', { token })
  return token
}

export default new PlayersManager()
