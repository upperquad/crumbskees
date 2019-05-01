export default class GameCommunicator {
  constructor() {
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = new WebSocket(`${this.host}/game`)
    this.numbers = document.getElementById('numbers')

    this.websocket.onmessage = event => {
      const data = event.data.split(',')
      if (data[0] === 'command') {
        if (data[1] === 'reset') {
          // TODO, can even do "Kick Player 1 Out", "Kick Player 2 Out",
          // "Kick'em Both Out" buttons
        } else if (data[1] === 'refresh') {
          window.location.reload(false)
        }
      }

      this.numbers.innerHTML = event.data
    }
  }
}
