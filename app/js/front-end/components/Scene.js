import uuidv1 from 'uuid/v1'
import { getNow, getOffsetTop, getOffsetLeft } from '../utils/dom'
import { inOutSine } from '../utils/ease'
import { random, randomInt } from '../utils/math'
import GameManager from '../managers/GameManager'

// assets
import itemImg from '../../../assets/front-end/images/pattern.png'

export default class Scene {
  constructor(el, bkg, item, numItems, gridCols, gridLines, index) {
    this.element = el
    this.bkg = bkg
    this.item = item
    this.numItems = numItems
    this.gridCols = gridCols
    this.gridLines = gridLines
    this.index = index

    this.dom()
    this.set()
  }

  dom() {
    this.dom = {
      svgScene: this.element.querySelector('.scene-svg'),
      svgClipPath: this.element.querySelector('.scene-svg__clippath'),
      svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref'),
    }
  }

  set() {
    this.fitSceneToImage()

    // assuming we always use a viewbox of 100 x 100
    this.acceleration = 1
    this.destAcceleration = 1
    this.coefAcceleration = 0.2
    this.increaseMax = GameManager.vbWidth * 0.07

    // items
    this.itemSize = GameManager.vbWidth * 0.05

    // values for mouse event
    this.x = 0
    this.y = 0
    this.targetX = 0
    this.targetY = 0
    this.clickPrecision = 0.05
    this.numItemFound = 0

    // values for DOM scene
    this.width = this.element.offsetWidth
    this.height = this.element.offsetHeight
    this.offsetLeft = getOffsetLeft(this.element.parentNode)
    this.offsetTop = getOffsetTop(this.element.parentNode)

    if (this.dom.svgClipPath) {
      this.setClipPathId()
    }
    this.setGrid()
    this.setItems()

    // start events
    this.events(true)
    this.eventsRAF(true)
  }

  setClipPathId() {
    this.dom.svgClipPath.id = uuidv1()
    this.dom.svgClipPathRef.setAttribute('clip-path', `url(#${this.dom.svgClipPath.id})`)
  }

  setGrid() {
    this.positionsInGrid = []
    let x
    let y

    for (let i = 0; i < this.gridCols; i++) {
      x = i + 0.5 // add half
      for (let j = 0; j < this.gridLines; j++) {
        y = j + 0.5 // add half
        const obj = { x, y }
        this.positionsInGrid.push(obj)
      }
    }
  }

  setItems() {
    this.items = []

    for (let i = 0; i < this.numItems; i++) {
      // randomize
      const rd = randomInt(0, this.positionsInGrid.length - 1)
      const x = this.positionsInGrid[rd].x / this.gridCols
      const y = this.positionsInGrid[rd].y / this.gridLines
      this.positionsInGrid.splice(rd, 1)

      // svg items
      // need to precise that we're using the svg namespace
      const svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image')
      svgImage.setAttributeNS(null, 'height', this.itemSize)
      svgImage.setAttributeNS(null, 'width', this.itemSize)
      svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', itemImg)
      svgImage.setAttributeNS(null, 'x', `${x * 100}%`)
      svgImage.setAttributeNS(null, 'y', `${y * 100}%`)
      svgImage.setAttributeNS(null, 'transform', `translate(-${this.itemSize / 2} -${this.itemSize / 2})`)
      svgImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice')

      this.dom.svgClipPathRef.appendChild(svgImage)

      // fake item for debugging
      const div = document.createElement('div')
      div.classList.add('debug')
      div.style.left = `${x * 100}%`
      div.style.top = `${y * 100}%`
      this.element.appendChild(div)

      const obj = {
        el: svgImage,
        debugEl: div,
        x,
        y,
      }
      // between 0 and 1
      this.items.push(obj)
    }
  }

  fitSceneToImage() {
    // set viewbox values
    this.dom.svgScene.setAttribute('viewBox', `0 0 ${GameManager.vbWidth} ${GameManager.vbHeight}`)
  }

  // ////////
  // Events
  // ////////

  events(method) {
    const ev = method ? 'addEventListener' : 'removeEventListener'
    window[ev]('mousemove', this.handleMouseMove, false)
    window[ev]('click', this.handleClick, false)
  }

  eventsRAF(method) {
    const ev = method ? 'addEventListener' : 'removeEventListener'
    window[ev]('RAF', this.handleRAF, false)
  }

  handleMouseMove = e => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    this.eventX = e.touches ? e.touches[0].clientX : e.clientX
    this.eventX -= this.offsetLeft
    this.eventY = e.touches ? e.touches[0].clientY : e.clientY
    this.eventY += scrollY

    this.targetX = this.eventX / this.width * GameManager.vbWidth // because we're using viewbox units here
    this.targetX -= GameManager.vbWidth / 2 // because starting point is this.centerX
    this.targetY = this.eventY / this.height * GameManager.vbHeight - this.offsetTop
    this.targetY -= GameManager.vbHeight / 2

    // ^These shoudl be linked to a cursor
  }

  handleClick = () => {
    // console.log(e)
    // e will be current cursor with positions
    // if cursor position
    // Check if cursor item is found
    const precision = this.clickPrecision
    const player = GameManager.players[0]
    const x = this.eventX / this.width
    const y = this.eventY / this.height

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!item.found &&
        x > item.x - precision &&
        x < item.x + precision &&
        y > item.y - precision &&
        y < item.y + precision) {
        GameManager.score(player, itemImg)
        item.found = true
        item.el.style.opacity = 0
        item.debugEl.style.opacity = 0

        this.numItemFound = this.numItemFound + 1
      }
    }

    if (this.numItemFound === this.items.length) {
      GameManager.endScene()
    }
  }

  handleRAF = e => {
    const { now } = e.detail
    this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

    this.x = this.x + (this.targetX - this.x) * 0.1
    this.y = this.y + (this.targetY - this.y) * 0.1

    // For each cursor...
    for (let y = 0; y < GameManager.players.length; y++) {
      const cursor = GameManager.players[y]

      // For each points of the cursor (organic shape)
      // Create organic shape / Tween all points
      for (let i = 0; i < cursor.points.length; i++) {
        const point = cursor.points[i]

        // From scratch tween:
        // percent is going from 0 to 1 in X seconds where X is the "duration variable".
        // Each points starting value is going to his destination value in X seconds
        // then I use easing functions to modify the value curve through time.
        const percent = (now - point.startAnim) / point.duration * this.acceleration

        point.x = point.startX + (point.destX - point.startX) * inOutSine(percent)
        point.y = point.startY + (point.destY - point.startY) * inOutSine(percent)

        if (percent >= 1) {
          // end of animation,
          // restart animation by going back
          if (point.reverseAnim) {
            point.startX = point.x
            point.startY = point.y
            point.destX = point.targetMaxX
            point.destY = point.targetMaxY
            point.reverseAnim = false
            point.startAnim = getNow()
          } else {
            point.startX = point.x
            point.startY = point.y
            point.destX = point.targetMinX
            point.destY = point.targetMinY
            point.reverseAnim = true
            point.startAnim = getNow()
          }
        }

        // move cursor based on mouse
        if (y === 0) {
          point.x += this.x
          point.y += this.y
        }

        // For increasing cursor
        // // if item found, increase cursor radius
        // if (y === 0 && cursor.itemFound && !point.isIncrease) {
        //   const newMaxRadius = cursor.maxRadius + this.increaseMax
        //   const newMaxMiddleRadius = cursor.maxMiddleRadius + this.increaseMax
        //   const newMinRadius = cursor.minRadius + this.increaseMax
        //   const newMinMiddleRadius = cursor.minMiddleRadius + this.increaseMax
        //   point.targetMaxX = cursor.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        //   point.targetMinX = cursor.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

        //   point.destX = point.targetMaxX

        //   point.targetMaxY = cursor.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        //   point.targetMinY = cursor.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

        //   point.destY = point.targetMaxY
        //   point.startAnim = getNow()

        //   point.isIncrease = true
        // }
      }

      cursor.el.setAttribute('d', this.cardinal(cursor.points))
    }
  }

  // Create circle distorsion based on the given coordinates points
  // Cardinal spline - a uniform Catmull-Rom spline with a tension option
  cardinal(points, tension = 1.2) {
    // 1 tension does not make a perfect round, why?
    const nbPoints = points.length
    if (nbPoints < 1) return 'M0 0'

    let path = `M ${points[0].x} ${points[0].y} C`
    // where M is the starting X,Y coords
    // C is the 3 next points coord of a Cubic bezier

    for (let i = 0; i < nbPoints; i++) {
      const p0 = points[(i - 1 + nbPoints) % nbPoints]
      const p1 = points[i]
      const p2 = points[(i + 1) % nbPoints]
      const p3 = points[(i + 2) % nbPoints]

      const x1 = p1.x + (p2.x - p0.x) / 6 * tension
      const y1 = p1.y + (p2.y - p0.y) / 6 * tension

      const x2 = p2.x - (p3.x - p1.x) / 6 * tension
      const y2 = p2.y - (p3.y - p1.y) / 6 * tension

      // cubic Bezier
      // x1 | The x-axis coordinate of the first control point.
      // y1 | The y-axis coordinate of the first control point.
      // x2 | The x-axis coordinate of the second control point.
      // y2 | The y-axis coordinate of the second control point.
      // p2.x | The x-axis coordinate of the end point.
      // p2.y | The y-axis coordinate of the end point.
      path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`
    }

    return `${path}z` // close path with z
  }

  destroy() {
    this.events(false)
    this.eventsRAF(false)
  }
}
