import getNow from '~utils/time'
import WebSocketManager from '~managers/WebSocketManager'
import { VB_WIDTH } from '~constants'

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

  setPower = type => {
    switch (type) {
      default:
        break
      case 'grow':
        this.updateRadius(VB_WIDTH * 0.05)
        // window.GameManager.popUpMessage('GROW', 'orange', false)
        break
    }
  }

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    WebSocketManager.send('score', { id: this.id, score: this._score })

    // Todo:
    // Add class item-found
    // this.element.classList.add('item-found')
  }

  score = () => this._score

  // updateRadius(incr) {
  //   for (let i = 0; i < this.points.length; i++) {
  //     const point = this.points[i]
  //     // Increase each points
  //     // if player has grown power, increase player radius
  //     const newMaxRadius = this.maxRadius + incr
  //     const newMaxMiddleRadius = this.maxMiddleRadius + incr
  //     const newMinRadius = this.minRadius + incr
  //     const newMinMiddleRadius = this.minMiddleRadius + incr

  //     point.duration += 250

  //     point.targetMaxX = this.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
  //     point.targetMinX = this.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

  //     point.destX = point.targetMaxX

  //     point.targetMaxY = this.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
  //     point.targetMinY = this.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

  //     point.destY = point.targetMaxY
  //     point.startAnim = getNow()
  //   }

  //   setTimeout(() => { // when growing animation finish
  //     for (let i = 0; i < this.points.length; i++) {
  //       this.points[i].duration -= 250
  //     }
  //   }, 1000)
  // }
}
