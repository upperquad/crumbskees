export default class Player {
  _score = 0

  constructor({ character, id, playerPeer, token }) {
    const {
      color,
      finger,
      lottie,
      mouthSprite,
      name,
      secondaryColor,
      slug,
    } = character
    this.id = id
    this.token = token
    this.lost = false
    this.playerPeer = playerPeer

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
    // Do all clean ups here
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
}
