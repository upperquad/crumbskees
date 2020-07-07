import PeerManager from '~managers/PeerManager'
import TokenSocketManager from '~managers/TokenSocketManager'
import SoundManager from '~managers/SoundManager'
import { CHARACTERS } from '~constants'

export default class Player {
  constructor({ id, playerIndex, token, type, updateParent }) {
    this.type = type

    switch (this.type) {
      case 'mouse':
        this.playerIndex = 1
        this.initialized = true
        break
      case 'remote':
        this.playerIndex = playerIndex
        this.id = id
        this.token = token
        this.lost = false
        this.playerPeer = new PeerManager()
        this.initialized = true
        this.connected = false
        this._addPeerListeners()
        break
      default:
        break
    }

    const {
      color,
      finger,
      lottie,
      mouthSprite,
      name,
      secondaryColor,
      slug,
    } = CHARACTERS[this.playerIndex]

    // REVIEW: check if this is aligned with the control device
    this.color = color
    this.finger = finger
    this.lottie = lottie
    this.secondaryColor = secondaryColor
    this.name = name
    this.slug = slug
    this.mouthSprite = mouthSprite

    this.ready = false // boolean to know if player is ready after trying the tutorial
    this.updateParent = updateParent
    this.closeMouth = false
    this.mouthSequence = 0
    this._score = 0

    if (this.type === 'remote') {
      this.playerPeer.connect(id)
    }
  }

  destroy = () => {
    if (this.playerPeer) {
      this.playerPeer.destroy()
    }
  }

  setConnected = connected => {
    this.connected = connected
  }

  setLostStatus = status => {
    this.lost = status
  }

  setReady = ready => {
    this.ready = ready
    this.updateParent('player_ready_change')
    SoundManager.playSound('playerReady')
  }

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    if (this.type === 'remote') {
      this.playerPeer.send('score', { score: this._score })
    }
  }

  removeScore = nbItemsCaught => {
    this._score -= nbItemsCaught
    this._score = Math.max(this._score, 0)
    if (this.type === 'remote') {
      this.playerPeer.send('score', { score: this._score })
    }
  }

  score = () => this._score

  _addPeerListeners = () => {
    this.playerPeer.addSubscriber('CONNECTED', () => {
      this.setConnected(true)
      this.playerPeer.send('accepted', { playerIndex: this.playerIndex })
      this.updateParent('player_change')
      if (this.token) {
        TokenSocketManager.send('remove_token', { token: this.token })
        this.token = null
      }
      SoundManager.playSound('playerJoin')
      this.lost = false
      this.updateParent('player_connection_change')
    })

    this.playerPeer.addSubscriber('MESSAGE', detail => {
      const { type } = detail

      switch (type) {
        case 'player_ready':
          this.setReady(true)
          break
        default:
          break
      }

      this.lost = false
      this.updateParent('player_connection_change')
    })

    this.playerPeer.addSubscriber('PEER_CLOSED', () => {
      this.updateParent('player_peer_closed', this.id)
    })
  }
}
