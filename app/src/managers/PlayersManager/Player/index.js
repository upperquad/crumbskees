import PeerManager from '~managers/PeerManager'
import { CHARACTERS } from '~constants'

export default class Player {
  _score = 0

  constructor(id, playerIndex, token, callParentObservers) {
    const {
      color,
      finger,
      lottie,
      mouthSprite,
      name,
      secondaryColor,
      slug,
    } = CHARACTERS[playerIndex]
    this.playerIndex = playerIndex
    this.id = id
    this.token = token
    this.lost = false
    this.callParentObservers = callParentObservers
    this.playerPeer = new PeerManager()

    this.addPeerListeners()

    // REVIEW: check if this is aligned with the control device
    this.color = color
    this.finger = finger
    this.lottie = lottie
    this.secondaryColor = secondaryColor
    this.name = name
    this.slug = slug
    this.mouthSprite = mouthSprite

    this.connected = false

    this.ready = false // boolean to know if player is ready after trying the tutorial

    this.closeMouth = false
    this.mouthSequence = 0

    this.playerPeer.connect(id)
  }

  destroy = () => {
    this.playerPeer.destroy()
  }

  setConnected = connected => {
    this.connected = connected
  }

  setLostStatus = status => {
    this.lost = status
  }

  setReady = ready => {
    this.ready = ready
  }

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    this.playerPeer.send('score', { score: this._score })
  }

  removeScore = nbItemsCaught => {
    this._score -= nbItemsCaught
    this._score = Math.max(this._score, 0)
    this.playerPeer.send('score', { score: this._score })
  }

  score = () => this._score

  addPeerListeners = () => {
    this.playerPeer.addSubscriber('CONNECTED', () => {
      this.setConnected(true)
      this.playerPeer.send('accepted', { playerIndex: this.playerIndex })
      this.callParentObservers('player_change')
    })

    this.playerPeer.addSubscriber('MESSAGE', detail => {
      const { type } = detail

      switch (type) {
        case 'player_ready':
          this.setReady(true)
          this.callParentObservers('player_ready_change')
          break
        default:
          break
      }
    })
  }
}
