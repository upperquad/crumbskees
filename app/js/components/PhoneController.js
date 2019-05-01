export default class PhoneController {
  constructor() {
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = new WebSocket(`${this.host}/phone`)
    this.touchpad = document.getElementById('touchpad')
    this.touchBubble = document.getElementById('touch-bubble')

    this.touchpad.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    this.touchpad.addEventListener('touchmove', this.handleTouchMove, { passive: false })
    this.touchpad.addEventListener('touchend', this.handleTouchEnd, { passive: false })
  }

  handleTouchStart = event => {
    event.preventDefault()
    event.stopPropagation()
    const { clientX, clientY } = event.touches[0]
    this.updatePosition(clientX, clientY)
    this.touchBubble.classList.add('is-touching')
  }

  handleTouchMove = event => {
    event.preventDefault()
    event.stopPropagation()
    const { clientX, clientY } = event.touches[0]
    this.updatePosition(clientX, clientY)
  }

  handleTouchEnd = event => {
    event.preventDefault()
    event.stopPropagation()
    this.touchBubble.classList.remove('is-touching')
  }

  updatePosition = (clientX, clientY) => {
    this.touchBubble.style.left = clientX
    this.touchBubble.style.top = clientY

    this.websocket.send(`${clientX / window.innerWidth}, ${clientY / window.innerHeight}`)
  }
}
