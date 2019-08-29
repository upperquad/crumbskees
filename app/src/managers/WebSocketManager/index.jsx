const HOST = window.location.origin.replace(/^http/, 'ws')
// const HOST = 'wss://uq.fyi'

class WebSocketManager {
  constructor() {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = this
      this._ws = null
    }

    return WebSocketManager.instance
  }

  static _broadcast(eventType, detail = null) {
    window.dispatchEvent(new CustomEvent(eventType, { detail }))
  }

  init = deviceType => {
    if (!this._deviceType) {
      this._deviceType = deviceType
    }
  }

  connect = ({ id = null, token = null } = {}) => {
    if (this._ws) {
      return console.error('Connection already exists')
    }

    if (!this._deviceType) {
      return console.error('WebSocketManager has not been initiated')
    }

    let url
    switch (this._deviceType) {
      case 'control':
        url = `${HOST}/control`
        if (token) {
          url += `?token=${token}`
        } else if (id) {
          url += `?id=${id}`
        }
        break
      case 'display':
        url = `${HOST}/display`
        break
      default:
        return console.error('Invalid WebSocketManager deviceType')
    }

    this._ws = new WebSocket(url)
    this._ws.onopen = this.onWsOpen
    // handle connection and reconnection

    return true
  }

  onWsOpen = () => {
    this._ws.onclose = this.onWsClose
    this._ws.onmessage = this.onWsMessage
  }

  onWsClose = event => {
    const { reason } = event
    this._broadcast('WS_CLOSE', { reason })
    console.warn('Connection closed:', reason)
    this._ws = null

    if (!reason && this._id) {
      this.connect({ id: this._id })
    }

    // TODO: need better defined conditions
    if (reason) {
      this._id = null
    }
  }

  onWsMessage = event => {
    const { data = '' } = event
    const [type, ...params] = data.split(',')
    switch (type) {
      case 'accepted':
        if (this._deviceType === 'control') {
          [, this._id] = params
        }
        break
      default:
        break
    }
    this._broadcast('MESSAGE', { type, params })
  }

  disconnect = () => {}

  // TODO: make this into json/named ones
  send = (messageType, attributes = []) => {
    if (!this._ws) {
      if (this._id) {
        this.connect({ id: this._id })
      } else {
        return console.error('No conenction')
      }
    }

    this._ws.send([messageType, ...attributes].join(','))
    return null
  }
}

export default new WebSocketManager()
