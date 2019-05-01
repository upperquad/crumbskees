import '../scss/phone.scss'

const host = window.location.origin.replace(/^http/, 'ws')
const websocket = new WebSocket(`${host}/phone`)
const touchpad = document.getElementById('touchpad')
const touchBubble = document.getElementById('touch-bubble')

touchpad.ontouchstart = event => {
  event.preventDefault()
  touchBubble.classList.add('is-touching')
}

touchpad.ontouchmove = event => {
  event.preventDefault()
  const { clientX, clientY } = event.touches[0]
  touchBubble.style.left = clientX
  touchBubble.style.top = clientY

  websocket.send(`${clientX / window.innerWidth}, ${clientY / window.innerHeight}`)
}

touchpad.ontouchend = event => {
  event.preventDefault()
  touchBubble.classList.remove('is-touching')
}
