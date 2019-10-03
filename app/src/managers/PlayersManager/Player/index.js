import WebSocketManager from '~managers/WebSocketManager'

export default class Player {
  _score = 0

  constructor({ character, id }) {
    const {
      color,
      image,
      name,
      secondaryColor,
      video,
      videoWhite,
    } = character
    this.id = id
    this.lost = false

    // REVIEW: check if this is aligned with the control device
    this.color = color
    this.secondaryColor = secondaryColor
    this.video = video
    this.videoWhite = videoWhite
    this.image = image
    this.name = name
  }

  destroy = () => {
    // Do all clean ups here
  }

  lost = () => {
    this.lost = true
  }

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    WebSocketManager.send('score', { id: this.id, score: this._score })

    // Todo:
    // Add class item-found
    // this.element.classList.add('item-found')
  }

  score = () => this._score
}
