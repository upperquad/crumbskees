import { Howl, Howler } from 'howler'
import { getNow } from '../utils/time'
import { random } from '../utils/math'
import duckSound from '../../../assets/game/sounds/duck.mp3'


export default class Player {
  constructor(props) {
    const {
      el,
      id,
      index,
      color,
    } = props

    this.el = el
    this.id = id
    this.index = index
    this.color = color
    this.numPoints = 8
    this.centerX = window.GameManager.vbWidth / 2 // equal to svg viewbox / 2
    this.centerY = window.GameManager.vbHeight / 2 // equal to svg viewbox / 2
    this.minRadius = window.GameManager.gridUnit * 1.1 // 3.125 == 1 unit grid (1920 / 32)
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
    this.increaseMax = window.GameManager.vbWidth * 0.05
    // values for mouse event
    this.clickPrecisionW = window.GameManager.gridUnitVw * 1.5 / 100 // 1.5 grid unit
    this.clickPrecisionH = window.GameManager.gridUnitVh * 1.5 / 100 // 1.5 grid unit
    this.grown = false
    this.frozen = false

    this.setPoints()

    this.isCloseToItemInterval = setInterval(this.isCloseToItem, 800)

    Howler.volume(0.5)

    this.soundDuck = new Howl({
      src: [duckSound],
    })
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

  setPower = type => {
    let timeClean
    switch (type) {
      default:
        break
      case 'grow':
        this.grown = true
        this.updateRadius(this.increaseMax, 3)
        window.GameManager.popUpMessage('GROW', 'orange', false)
        timeClean = 6000
        break
      case 'freeze':
        this.frozen = true
        window.GameManager.popUpMessage('FREEZE', 'blue', false)
        timeClean = 4000
        this.el.classList.add('frozen')
        break
    }

    setTimeout(() => {
      this.cleanPowers()
    }, timeClean)
  }

  isCloseToItem = () => {
    const scene = window.GameManager.currentScene

    if (scene) {
      const x = (this.targetX / window.GameManager.vbWidth) + 0.5
      const y = (this.targetY / window.GameManager.vbHeight) + 0.5

      for (let i = 0; i < scene.items.length; i++) {
        const item = scene.items[i]
        const distance = Math.hypot(x - item.x, y - item.y)

        if (!item.found && distance <= 0.08) {
          window.GameManager.popUpMessage('TAP', `${this.color}--fade`, false, { x, y })
        }
      }
    }
  }

  click = () => {
    const scene = window.GameManager.currentScene
    if (scene.targetsDestroyed) return // if targets are destroy, don't listen to click event
    const x = (this.targetX / window.GameManager.vbWidth) + 0.5
    const y = (this.targetY / window.GameManager.vbHeight) + 0.5
    const power = scene.props.power

    if (power) {
      const distance = Math.hypot(x - power.x, y - power.y)
      if (!power.found && distance <= 0.08) {
        let playerAffected = this
        if (power.type === 'freeze') {
          // affect other player
          const index = this.index === 0 ? 1 : 0
          playerAffected = window.GameManager.players[window.GameManager.playerIds[index]]
        }
        playerAffected.setPower(power.type)

        power.found = true
        power.el.style.opacity = 0
        if (power.debugEl) power.debugEl.style.opacity = 0
      }
    }

    let nbItemGet = 0

    for (let i = 0; i < scene.items.length; i++) {
      const item = scene.items[i]
      const distance = Math.hypot(x - item.x, y - item.y)

      let minDistance = 0

      if (!this.grown) {
        minDistance = 0.08
      } else {
        minDistance = 0.19
      }

      if (!item.found && distance <= minDistance) {
        item.found = true
        item.el.style.opacity = 0
        if (item.debugEl) item.debugEl.style.opacity = 0

        nbItemGet += 1
        // kill player intervalTap
        clearInterval(this.isCloseToItemInterval)

        this.soundDuck.play()
      }
    }

    if (nbItemGet > 0) {
      window.GameManager.score(this, scene.props.item, { x, y }, nbItemGet)
      scene.numItemFound += nbItemGet
    }

    if (scene.numItemFound === scene.items.length && !scene.isEnded) {
      scene.isEnded = true
      window.GameManager.endScene(scene.props.message)
    }
  }

  updateRadius(incr, clickPrecision) {
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

    setTimeout(() => {
      this.clickPrecisionW = window.GameManager.gridUnitVw * clickPrecision / 100 // 2.5 grid unit
      this.clickPrecisionH = window.GameManager.gridUnitVh * clickPrecision / 100 // 2.5 grid unit
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].duration -= 250
      }
    }, 1000) // to prevent big click on the click getting the power
  }

  cleanPowers = () => {
    this.grown = false
    this.frozen = false
    this.updateRadius(0, 1.5)
    this.el.classList.remove('frozen')
  }
}
