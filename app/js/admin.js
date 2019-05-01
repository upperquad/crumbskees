import '../scss/admin.scss'

const host = window.location.origin.replace(/^http/, 'ws')
const websocket = new WebSocket(`${host}/admin`)
const btnReset = document.getElementById('button-reset')
const btnRefresh = document.getElementById('button-refresh')

btnReset.onclick = event => {
  event.preventDefault()
  websocket.send('reset')
}

btnRefresh.onclick = event => {
  event.preventDefault()
  websocket.send('refresh')
}
