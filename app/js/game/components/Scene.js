import uuidv1 from 'uuid/v1'
import { TweenMax, TimelineMax } from 'gsap/TweenMax'
import { getNow } from '../utils/time'
import { getOffsetTop, getOffsetLeft, splitText } from '../utils/dom'
import { inOutSine } from '../utils/ease'
import { clamp, randomInt } from '../utils/math'

import DEBUG from '../constants/Debug'

export default class Scene {
  constructor(options) {
    this.element = options.el
    this.bkg = options.bkg
    this.frontBkg = options.frontBkg
    this.item = options.item
    this.videoIntro = options.videoIntro
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
      introItemToFindTxt: this.element.querySelector('.intro__itemToFind__text'),
      itemToFind: document.querySelector('.itemToFind'),
      introCircle: this.element.querySelector('.intro__circle'),
      introVideo: this.element.querySelector('.intro video'),
      introReady: this.element.querySelector('.intro__ready'),
      introSet: this.element.querySelector('.intro__set'),
      introGo: this.element.querySelector('.intro__go'),
      reveal: this.element.querySelector('.scene__reveal'),
      svgScene: this.element.querySelector('.scene-svg'),
      svgMaskedImage: this.element.querySelector('.scene-svg__image'),
      svgClipPath: this.element.querySelector('.scene-svg__clippath'),
      svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref'),
    }
  }

  set() {
    window.GameManager.dom.timer.innerHTML = this.time
    this.setBkgs()

    // assuming we always use a viewbox of 100 x 100
    this.acceleration = 1
    this.destAcceleration = 1
    this.coefAcceleration = 0.2
    this.increaseMax = window.GameManager.vbWidth * 0.07
    // items
    this.itemSize = window.GameManager.gridUnit

    // values for mouse event
    this.clickPrecision = window.GameManager.gridUnitVw * 2.5 / 100 // 3 grid unit
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

    setTimeout(() => {
      this.intro()
    }, 1000)
  }

  intro() {
    // Clean previous animation
    TweenMax.set([
      this.dom.itemToFind,
      this.dom.introRound,
      this.dom.introCircle,
      this.dom.introItemToFindTxt,
      this.dom.introReady,
      this.dom.introSet,
      this.dom.introGo,
      this.dom.introVideo,
    ], { clearProps: 'all' })

    if (DEBUG) {
      this.dom.introRound.style.display = 'none'
      this.dom.introVideo.style.display = 'none'
      this.dom.introCircle.style.display = 'none'
      this.start()
      return false
    }

    this.dom.itemToFind.src = this.item
    if (this.videoIntro.match(/\.(jpeg|jpg|gif|png)$/) !== null) {
      this.dom.introVideo.poster = this.videoIntro
    } else {
      this.dom.introVideo.src = this.videoIntro
    }
    this.dom.introRound.innerHTML = `ROUND 0${this.index + 1}`
    this.dom.introRound.classList.remove('blink')

    const tlScaleDown = new TimelineMax({ paused: true })
    const tlItemToFind = new TimelineMax({ paused: true })
    const tlReady = new TimelineMax({ paused: true })

    const text = splitText(this.dom.introRound)
    text.forEach((el, index) => {
      const tl = new TimelineMax({ delay: index * 0.06 })
      tl.fromTo(el, 0.8, { y: '100%' }, { y: '-70%', ease: window.Expo.easeOut })
        .to(el, 0.6, { y: '0%', ease: window.Bounce.easeOut }, '-=0.3')
        .add(() => {
          tl.kill()
          if (index === text.length - 1) {
            tlScaleDown.play()
          }
        })
    })

    tlScaleDown.add(() => {
      this.dom.introRound.classList.add('blink')
    })
      .to(this.dom.introRound, 1.5, { scale: 0.22, y: '120%', ease: window.Expo.easeOut }, 0.9)
      .add(() => {
        tlItemToFind.play()
      }, '-=1.4')

    tlItemToFind.fromTo(this.dom.introCircle, 1.5, {
      x: '-50%',
      y: '-50%',
      scale: 3.8,
    },
    {
      x: '-50%',
      y: '-50%',
      scale: 1,
      ease: window.Expo.easeOut,
    })
      .to(this.dom.introCircle, 0.5, { opacity: 1 }, 0.1)
      .to(this.dom.introItemToFindTxt, 0.5, { opacity: 1 }, '-=0.8')
      .to(this.dom.itemToFind, 0.5, { opacity: 1 }, '-=0.6')
      .to(this.dom.itemToFind, 1.4, {
        scale: 0.55,
        x: '-50%',
        y: '380%',
        ease: window.Power4.easeOut,
      }, '+=3')
      .to(this.dom.introItemToFindTxt, 0.5, { opacity: 0 }, '-=1.4')
      .to(this.dom.introCircle, 2, {
        x: '-50%',
        y: '-50%',
        scale: 3.8,
        ease: window.Expo.easeOut,
      }, '-=1.4')
      .add(() => {
        TweenMax.set(this.dom.introCircle, { opacity: 0 })
        TweenMax.set(this.dom.introVideo, { opacity: 0 })
        tlReady.play()
      }, '-=1.2')

    tlReady.to(this.dom.introReady, 0.6, { y: '0%', ease: window.Bounce.easeOut })
      .to(this.dom.introReady, 0.6, { y: '100%', ease: window.Power4.easeOut }, '+=0.5')
      .to(this.dom.introSet, 0.6, { x: '-50%', y: '0%', ease: window.Bounce.easeOut }, '-=0.65')
      .to(this.dom.introSet, 0.6, { x: '-50%', y: '100%', ease: window.Power4.easeOut }, '+=0.5')
      .to(this.dom.introGo, 0.2, { opacity: 1 }, '-=0.65')
      .to(this.dom.introGo, 3, {
        scale: 3,
        x: '-50%',
        y: '-50%',
        ease: window.Expo.easeOut,
      }, '-=0.6')
      .to(this.dom.introGo, 1, { opacity: 0 }, '-=2.5')
      .add(() => {
        tlItemToFind.kill()
        tlScaleDown.kill()
        this.start()
      }, '-=2.6')

    return true
  }

  start = () => {
    window.GameManager.element.classList.remove('isIntro')
    // start events
    this.events(true)
    this.eventsRAF(true)

    window.GameManager.startTimer(this.time)
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
      x = i
      for (let j = 0; j < this.gridLines; j++) {
        y = j
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
      const x = (this.positionsInGrid[rd].x) / this.gridCols + window.GameManager.gridUnitVw / 200
      const y = (this.positionsInGrid[rd].y) / this.gridLines + window.GameManager.gridUnitVh / 200
      this.positionsInGrid.splice(rd, 1)

      // svg items
      // need to precise that we're using the svg namespace
      const svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image')
      svgImage.setAttributeNS(null, 'height', this.itemSize)
      svgImage.setAttributeNS(null, 'width', this.itemSize)
      svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.item)
      svgImage.setAttributeNS(null, 'x', `${x * 100}%`)
      svgImage.setAttributeNS(null, 'y', `${y * 100}%`)
      svgImage.setAttributeNS(null, 'transform', `translate(-${this.itemSize / 2}, -${this.itemSize / 2})`)
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
    this.element.style.backgroundImage = `url(${this.frontBkg})`
    this.dom.reveal.style.backgroundImage = `url(${this.bkg})`
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
    if (DEBUG) playerId = window.GameManager.playerIds[0]
    const player = window.GameManager.players[playerId]
    const x = (player.targetX / window.GameManager.vbWidth) + 0.5
    const y = (player.targetY / window.GameManager.vbHeight) + 0.5

    // let goodClick = false

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!item.found &&
        x > item.x - this.clickPrecision &&
        x < item.x + this.clickPrecision &&
        y > item.y - this.clickPrecision &&
        y < item.y + this.clickPrecision) {
        window.GameManager.score(player, this.item, { x, y })
        item.found = true
        item.el.style.opacity = 0
        if (item.debugEl) item.debugEl.style.opacity = 0

        this.numItemFound = this.numItemFound + 1
        // goodClick = true
      }
    }

    if (this.numItemFound === this.items.length && !this.isEnded) {
      this.isEnded = true
      window.GameManager.endScene()
    }

    // if (goodClick) {
    //   player.el.classList.add('good')
    // } else {
    //   player.el.classList.add('wrong')
    // }

    // setTimeout(() => {
    //   player.el.classList.remove('good', 'wrong')
    //   // add a rect svg element in the clippath following the
    //   // cursor, opacity:0 by default, display it to fill the cursor.
    //   // this.dom.svgClipPathRef.style.opacity = 1
    // }, 1000)
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
    const debugs = document.querySelectorAll('.debug')
    debugs.forEach(debug => debug.remove())
    this.items.forEach(item => item.el.remove())

    this.events(false)
    this.eventsRAF(false)
  }
}
