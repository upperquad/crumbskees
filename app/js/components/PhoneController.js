import { throttle } from 'throttle-debounce'

export default class PhoneController {
  constructor($scope, $element) {
    this.$scope = $scope
    this.$elem = $element
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = null
    this.touchpad = document.getElementById('touchpad')
    this.touchBubble = document.getElementById('touch-bubble')
    this.originCoord = {
      x: 0,
      y: 0,
    }
    this.score = null

    this.token = ''
    this.isConnecting = false
    this.invalidToken = false

    this.throttledTouchMove = throttle(50, this.handleTouchMove)

    this.touchpad.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    this.touchpad.addEventListener('touchmove', this.throttledTouchMove, { passive: false })
    this.touchpad.addEventListener('touchend', this.handleTouchEnd, { passive: false })
    this.touchpad.addEventListener('click', this.handleClick)
    this.ready = true
  }

  tokenKey = key => {
    this.invalidToken = false

    if (key === -1) {
      this.token = this.token.slice(0, -1)
    } else {
      this.token = this.token + key
      if (this.token.length >= 3) {
        this.initConnect()
      }
    }
  }

  initConnect = () => {
    this.isConnecting = true
    this.websocket = new WebSocket(`${this.host}/phone?token=${this.token}`)
    this.websocket.onopen = this.onWsOpen
  }

  onWsOpen = () => {
    this.connected = true
    this.$scope.$apply()

    this.websocket.onclose = this.onWsClose
    this.websocket.onmessage = this.onWsMessage
  }

  onWsClose = event => {
    this.connected = false
    console.log(event.reason)

    if (event.reason === 'invalid-token') {
      this.invalidToken = true
      this.token = ''
    } else {
      this.invalidToken = false
      this.token = ''
    }
    this.$scope.$apply()
  }

  onWsMessage = event => {
    const message = event.data.split(',')

    switch (message[0]) {
      case 'score':
        this.score = message[1]
        break
      default:
        break
    }
  }

  handleTouchStart = event => {
    event.stopPropagation()
    const { clientX, clientY } = event.touches[0]
    this.originCoord.x = clientX
    this.originCoord.y = clientY
    this.touchBubble.classList.add('is-touching')
  }

  handleTouchMove = event => {
    event.preventDefault()
    event.stopPropagation()
    const { x: originX, y: originY } = this.originCoord
    const { clientX, clientY } = event.touches[0]
    this.originCoord.x = clientX
    this.originCoord.y = clientY
    this.updatePosition(clientX, clientY, originX, originY)
  }

  handleTouchEnd = event => {
    event.stopPropagation()
    this.touchBubble.classList.remove('is-touching')
  }

  handleClick = () => {
    this.websocket.send('click')
  }

  updatePosition = (clientX, clientY, originX, originY) => {
    this.touchBubble.style.left = clientX
    this.touchBubble.style.top = clientY

    this.websocket.send(`cursor_move,${(clientX - originX) / window.innerWidth},${(clientY - originY) / window.innerHeight}`)
  }
}
