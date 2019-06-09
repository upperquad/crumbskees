import { getNow } from '../utils/time'
import { random } from '../utils/math'

export default class Player {
  constructor(props) {
    const {
      el,
      index,
      color,
      numPoints,
    } = props

    this.el = el
    this.index = index
    this.color = color
    this.numPoints = numPoints
    this.centerX = window.GameManager.vbWidth / 2 // equal to svg viewbox / 2
    this.centerY = window.GameManager.vbHeight / 2 // equal to svg viewbox / 2
    this.minRadius = window.GameManager.vbWidth * 0.05 // 70% of full size / 2 --> should be based on width viewbox
    this.maxRadius = this.minRadius + this.minRadius * 0.2
    this.minMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.45
    this.maxMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.55
    this.minDuration = 700
    this.maxDuration = 900
    // cursor position
    this.x = 0
    this.y = 0
    this.targetX = 0
    this.targetY = 0
    this.isInsideTime = 0

    this.setPoints()
  }

  setPoints() {
    this.points = []
    // create "numPoints" x points
    const slice = (Math.PI * 2) / this.numPoints
    this.startAngle = random(0, Math.PI * 2)

    for (let i = 0; i < this.numPoints; i++) {
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
}
