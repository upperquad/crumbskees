const host = window.location.origin.replace(/^http/, 'ws')
const websocket = new WebSocket(`${host}/phone`)
const scene = document.getElementById('scene')

scene.ontouchmove = event => {
  event.preventDefault()
  websocket.send(`${event.touches[0].clientX / window.innerWidth}, ${event.touches[0].clientY / window.innerHeight}`)
}
