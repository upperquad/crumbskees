import uuidv1 from 'uuid/v1'
import { getNow } from '../utils/time'
import { getOffsetTop, getOffsetLeft } from '../utils/dom'
import { inOutSine } from '../utils/ease'
import { clamp, randomInt } from '../utils/math'

import { TimelineMax } from 'gsap/TweenMax'

import DEBUG from '../constants/Debug'

const playerIds = DEBUG ? ['refiejrfer', 'erfjerfpie'] : []

export default class Scene {
  constructor(options) {
    this.element = options.el
    this.bkg = options.bkg
    this.maskedBkg = options.maskedBkg
    this.item = options.item
    this.numItems = options.numItems
    this.gridCols = options.gridCols
    this.gridLines = options.gridLines
    this.index = options.index
    this.time = 30 // in seconds

    this.dom()
    this.set()
  }

  dom() {
    this.dom = {
      introRound: this.element.querySelector('.intro__round'),
      svgScene: this.element.querySelector('.scene-svg'),
      svgMaskedImage: this.element.querySelector('.scene-svg__image'),
      svgClipPath: this.element.querySelector('.scene-svg__clippath'),
      svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref'),
    }
  }

  set() {
    this.setBkgs()

    // assuming we always use a viewbox of 100 x 100
    this.acceleration = 1
    this.destAcceleration = 1
    this.coefAcceleration = 0.2
    this.increaseMax = window.GameManager.vbWidth * 0.07
    // items
    this.itemSize = window.GameManager.vbWidth * 0.05

    // values for mouse event
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

    this.intro()
  }

  splitText(el) {
    const spans = []
    const length = el.textContent.length

    for (let i = 0; i < length; i++) {
      const span = document.createElement('span')
      span.innerHTML = el.textContent[i]
      spans.push(span)
    }

    el.innerHTML = ''

    for (let i = 0; i < length; i++) {
      el.appendChild(spans[i])
    }

    return spans
  }

  intro() {
    window.GameManager.element.classList.add('isIntro')
    window.GameManager.dom.timer.innerHTML = this.time

    const tlScaleDown = new TimelineMax({ paused: true })
    this.dom.introRound.innerHTML = `ROUND 0${this.index + 1}`

    const text = this.splitText(this.dom.introRound)
    text.forEach((el, index) => {
      const tl = new TimelineMax({ delay: index * 0.06 })
      tl.fromTo(el, 0.8, { y: '100%' }, { y: '-70%', ease: window.Expo.easeOut })
      tl.to(el, 0.6, { y: '0%', ease: window.Bounce.easeOut }, '-=0.3')
      tl.add(() => {
        tl.kill()
        if (index === text.length - 1) {
          tlScaleDown.play()
        }
      })
    })

    tlScaleDown.add(() => {
      this.dom.introRound.classList.add('blink')
    })
    tlScaleDown.to(this.dom.introRound, 1.4, { scale: 0.27, y: '118%', ease: window.Power4.easeOut }, 0.9)

    // start events
    // this.events(true)
    // this.eventsRAF(true)

    // window.GameManager.popUpMessage('START!', 'black')
    // window.GameManager.startTimer(this.time)
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
      svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.item)
      svgImage.setAttributeNS(null, 'x', `${x * 100}%`)
      svgImage.setAttributeNS(null, 'y', `${y * 100}%`)
      svgImage.setAttributeNS(null, 'transform', `translate(-${this.itemSize / 2} -${this.itemSize / 2})`)
      svgImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice')

      this.dom.svgClipPathRef.appendChild(svgImage)

      // fake item for debugging
      let div
      if (DEBUG) {
        div = document.createElement('div')
        div.classList.add('debug')
        div.style.left = `${x * 100}%`
        div.style.top = `${y * 100}%`
        this.element.appendChild(div)
      }

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

  setBkgs() {
    // set viewbox values, fit Image to scene
    this.dom.svgScene.setAttribute('viewBox', `0 0 ${window.GameManager.vbWidth} ${window.GameManager.vbHeight}`)
    // Add masked bkg
    this.dom.svgMaskedImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.bkg)
    this.dom.svgMaskedImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice')
    // Add "front" bkg
    this.element.style.backgroundImage = `url(${this.maskedBkg})`
  }

  // ////////
  // Events
  // ////////

  events(method) {
    const ev = method ? 'addEventListener' : 'removeEventListener'
    if (DEBUG) window[ev]('mousemove', this.handleMouseMove, false)
    window[ev]('click', this.handleClick, false)
  }

  eventsRAF(method) {
    const ev = method ? 'addEventListener' : 'removeEventListener'
    window[ev]('RAF', this.handleRAF, false)
  }

  handleMouseMove = e => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    const player = window.GameManager.players[window.GameManager.playerIds[0]]

    player.eventX = e.touches ? e.touches[0].clientX : e.clientX
    player.eventX -= this.offsetLeft
    player.eventY = e.touches ? e.touches[0].clientY : e.clientY
    player.eventY += scrollY

    player.targetX = player.eventX / this.width * window.GameManager.vbWidth // because we're using viewbox units here
    player.targetX -= window.GameManager.vbWidth / 2 // because starting point is player.centerX
    player.targetY = player.eventY / this.height * window.GameManager.vbHeight - this.offsetTop
    player.targetY -= window.GameManager.vbHeight / 2

    // ^These shoudl be linked to a cursor
  }

  handleClick = playerId => {
    if (DEBUG) playerId = playerIds[0]
    const precision = this.clickPrecision
    const player = window.GameManager.players[playerId]
    const x = (player.targetX / window.GameManager.vbWidth) + 0.5
    const y = (player.targetY / window.GameManager.vbHeight) + 0.5

    let goodClick = false

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!item.found &&
        x > item.x - precision &&
        x < item.x + precision &&
        y > item.y - precision &&
        y < item.y + precision) {
        window.GameManager.score(player, this.item)
        item.found = true
        item.el.style.opacity = 0
        item.debugEl.style.opacity = 0

        this.numItemFound = this.numItemFound + 1
        goodClick = true
      }
    }

    if (goodClick) {
      player.el.classList.add('good')
    } else {
      player.el.classList.add('wrong')
    }

    // this.dom.svgClipPathRef.style.opacity = 0

    setTimeout(() => {
      player.el.classList.remove('good', 'wrong')
      // add a rect svg element in the clippath following the
      // cursor, opacity:0 by default, display it to fill the cursor.
      // this.dom.svgClipPathRef.style.opacity = 1
    }, 1000)

    if (this.numItemFound === this.items.length && !this.isEnded) {
      this.isEnded = true
      window.GameManager.endScene()
    }
  }

  handleRAF = e => {
    const { now } = e.detail
    this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

    // For each cursor...
    for (let y = 0; y < window.GameManager.playerIds.length; y++) {
      const player = window.GameManager.players[window.GameManager.playerIds[y]]

      // clamp player position to limit of the scene
      player.targetX = clamp(player.targetX, -window.GameManager.vbWidth / 2, window.GameManager.vbWidth / 2)
      player.targetY = clamp(player.targetY, -window.GameManager.vbHeight / 2, window.GameManager.vbHeight / 2)

      player.x += (player.targetX - player.x) * 0.1
      player.y += (player.targetY - player.y) * 0.1


      // For each points of the player (organic shape)
      // Create organic shape / Tween all points
      for (let i = 0; i < player.points.length; i++) {
        const point = player.points[i]

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

        // move player based on mouse
        point.x += player.x
        point.y += player.y

        // For increasing player
        // // if item found, increase player radius
        // if (y === 0 && player.itemFound && !point.isIncrease) {
        //   const newMaxRadius = player.maxRadius + this.increaseMax
        //   const newMaxMiddleRadius = player.maxMiddleRadius + this.increaseMax
        //   const newMinRadius = player.minRadius + this.increaseMax
        //   const newMinMiddleRadius = player.minMiddleRadius + this.increaseMax
        //   point.targetMaxX = player.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        //   point.targetMinX = player.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)

        //   point.destX = point.targetMaxX

        //   point.targetMaxY = player.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
        //   point.targetMinY = player.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)

        //   point.destY = point.targetMaxY
        //   point.startAnim = getNow()

        //   point.isIncrease = true
        // }
      }

      player.el.setAttribute('d', this.cardinal(player.points))
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
