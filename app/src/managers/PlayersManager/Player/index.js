export default class Player {
  _score = 0

  constructor({ character, id, playerPeer, token }) {
    const {
      color,
      image,
      name,
      secondaryColor,
      video,
      videoWhite,
    } = character
    this.id = id
    this.token = token
    this.lost = false
    this.playerPeer = playerPeer

    // REVIEW: check if this is aligned with the control device
    this.color = color
    this.secondaryColor = secondaryColor
    this.video = video
    this.videoWhite = videoWhite
    this.image = image
    this.name = name

    this.connected = false

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

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    this.playerPeer.send('score', { score: this._score })
  }

  score = () => this._score
}
