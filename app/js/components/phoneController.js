export default class phoneController {
  constructor() {
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = new WebSocket(`${this.host}/phone`)
    this.touchpad = document.getElementById('touchpad')
    this.touchBubble = document.getElementById('touch-bubble')

    document.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    document.addEventListener('touchmove', this.handleTouchMove, { passive: false })
    document.addEventListener('touchend', this.handleTouchEnd, { passive: false })
  }

  handleTouchStart = event => {
    event.preventDefault()
    this.touchBubble.classList.add('is-touching')
  }

  handleTouchMove = event => {
    event.preventDefault()
    const { clientX, clientY } = event.touches[0]
    this.touchBubble.style.left = clientX
    this.touchBubble.style.top = clientY

    this.websocket.send(`${clientX / window.innerWidth}, ${clientY / window.innerHeight}`)
  }

  handleTouchEnd = event => {
    event.preventDefault()
    this.touchBubble.classList.remove('is-touching')
  }
}
