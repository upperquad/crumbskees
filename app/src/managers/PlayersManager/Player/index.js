import getNow from '~utils/time'
import { random } from '~utils/math'
import SoundManager from '~managers/SoundManager'
import WebSocketManager from '~managers/WebSocketManager'
import { VB_WIDTH, VB_HEIGHT, GRID_UNIT } from '~constants'

const POINTS_COUNT = 8

export default class Player {
  _score = 0

  constructor({ character, el, id }) {
    const {
      color,
      image,
      name,
      secondaryColor,
      video,
      videoWhite,
    } = character
    this.el = el
    this.id = id
    this.lost = false

    // REVIEW: check if this is aligned with the control device
    this.color = color
    this.secondaryColor = secondaryColor
    this.video = video
    this.videoWhite = videoWhite
    this.image = image
    this.name = name

    this.centerX = VB_WIDTH / 2 // equal to svg viewbox / 2
    this.centerY = VB_HEIGHT / 2 // equal to svg viewbox / 2
    this.minRadius = GRID_UNIT * 1.1 // 3.125 == 1 unit grid (1920 / 32)
    this.maxRadius = this.minRadius + this.minRadius * 0.45
    this.minMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.45
    this.maxMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.55
    this.minDuration = 500
    this.maxDuration = 700
    // cursor position
    this.x = 0
    this.y = 0
    this.targetX = 0
    this.targetY = 0
    this.isInsideTime = 0
    this.increaseMax = VB_WIDTH * 0.05
    this.grown = false
    this.frozen = false

    this.setPoints()
  }

  destroy = () => {
    // Do all clean ups here
  }

  lost = () => {
    this.lost = true
  }

  setPoints() {
    this.points = []
    const slice = (Math.PI * 2) / POINTS_COUNT
    this.startAngle = random(0, Math.PI * 2)

    for (let i = 0; i < POINTS_COUNT; i++) {
      const margeAngle = random(0, 0.28) // i / 1.2
      // randomize the start time of animation (we don't want the tween to go from 0 to 1, it can start directly from 0.6 for example)
      const startAnim = getNow() + i * random(0, this.minDuration)
      const angle = this.startAngle + i * slice + margeAngle
      const duration = random(this.minDuration, this.maxDuration)

      const point = {
        angle,
        duration,
        startAnim,
        x: this.centerX + Math.cos(angle) * random(this.minRadius, this.maxRadius),
        y: this.centerY + Math.sin(angle) * random(this.minRadius, this.maxRadius),
        targetMinX: this.centerX + Math.cos(angle) * random(this.minRadius, this.minMiddleRadius),
        targetMinY: this.centerY + Math.sin(angle) * random(this.minRadius, this.minMiddleRadius),
        targetMaxX: this.centerX + Math.cos(angle) * random(this.maxMiddleRadius, this.maxRadius),
        targetMaxY: this.centerY + Math.sin(angle) * random(this.maxMiddleRadius, this.maxRadius),
      }

      point.startX = point.x
      point.startY = point.y
      point.destX = point.targetMaxX
      point.destY = point.targetMaxY

      this.points.push(point)
    }
  }

  setPower = type => {
    let timeClean
    switch (type) {
      default:
        break
      case 'grow':
        this.grown = true
        this.updateRadius(this.increaseMax)
        // window.GameManager.popUpMessage('GROW', 'orange', false)
        SoundManager.grow.play()
        timeClean = 6000
        break
      case 'freeze':
        this.frozen = true
        // window.GameManager.popUpMessage('FREEZE', 'blue', false)
        SoundManager.freeze.play()
        timeClean = 4000
        // REVIEW: no direct DOM edit, no global class
        this.el.classList.add('frozenCursor')
        break
    }

    this.timePower = setTimeout(() => {
      this.cleanPowers()
    }, timeClean)
  }

  addScore = nbItemsCaught => {
    this._score += nbItemsCaught
    WebSocketManager.send('score', { id: this.id, score: this._score })


    // Todo:

    // display +1 message
    // this.popUpMessage(`+${score}`, player.color, false, pos) // + color player

    // Add class item-found
    // this.element.classList.add('item-found')
  }

  score = () => this._score

  updateRadius(incr) {
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i]
      // Increase each points
      // if player has grown power, increase player radius
      const newMaxRadius = this.maxRadius + incr
      const newMaxMiddleRadius = this.maxMiddleRadius + incr
      const newMinRadius = this.minRadius + incr
      const newMinMiddleRadius = this.minMiddleRadius + incr

      point.duration += 250

      point.targetMaxX = this.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
      point.targetMinX = this.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

      point.destX = point.targetMaxX

      point.targetMaxY = this.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
      point.targetMinY = this.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

      point.destY = point.targetMaxY
      point.startAnim = getNow()
    }

    setTimeout(() => { // when growing animation finish
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].duration -= 250
      }
    }, 1000)
  }

  cleanPowers = () => {
    clearTimeout(this.timePower)
    this.grown = false
    this.frozen = false
    this.updateRadius(0)
    // REVIEW: no direct DOM edit, no global class
    this.el.classList.remove('frozenCursor')
  }

  startNewRound = () => {
    this.cleanPowers()
  }
}
