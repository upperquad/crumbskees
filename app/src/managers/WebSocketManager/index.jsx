// const HOST = window.location.origin.replace(/^http/, 'ws')
const HOST = `wss://uq.fyi`

class WebSocketManager {
  constructor() {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = this
      this._ws = null
    }

    return WebSocketManager.instance
  }

  static _broadcast() {
    // send out events
  }

  init = deviceType => {
    if (!this.deviceType) {
      this.deviceType = deviceType
    }
  }

  connect = ({
    id = null,
    token = null
  } = {}) => {
    if (this._ws) {
      return console.error('Connection already exists')
    }

    if (!this.deviceType) {
      return console.error('WebSocketManager has not been initiated')
    }

    let url
    switch(this.deviceType) {
      case 'control':
        url = `${HOST}/phone`
        if (token) {
          url += `?token=${token}`
        } else if (id) {
          url += `?id=${id}`
        }
        break
      case 'phone':
        url = `${HOST}/game`
        break
      default:
        return console.error('Invalid WebSocketManager deviceType')
    }

    this._ws = new WebSocket(url)
    this._ws.onopen = this.onWsOpen
    // handle connection and reconnection
  }

  onWsOpen = () => {
    window.dispatchEvent(new CustomEvent('WS_UPDATE', { detail: { state: this._ws.readyState } }))
    this._ws.onclose = this.onWsClose
    this._ws.onmessage = this.onWsMessage
  }

  onWsClose = event => {
    window.dispatchEvent(new CustomEvent('WS_UPDATE', { detail: { state: this._ws.readyState } }))
    window.dispatchEvent(new CustomEvent('WS_CLOSE', { detail: { reason: event.reason } }))
    console.log('Connection closed:', event.reason)
    this._ws = null
  }

  onWsMessage = event => {
    const { data = '' } = event
    const [type, ...params] = data.split(',')
    window.dispatchEvent(new CustomEvent('MESSAGE', { detail: { type, params } }))
  }

  disconnect = () => {

  }

  send = () => {
    // check if connected and send things
  }
}

export default new WebSocketManager()
