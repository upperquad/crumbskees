const HOST = window.location.origin.replace(/^http/, 'ws')

class WebSocketManager {
  static _ws = null

  constructor() {
    if (!WebSocketManager.instance) {
      WebSocketManager.instance = this
    }

    return WebSocketManager.instance
  }

  static _broadcast() {
    // send out events
  }

  init(deviceType) {
    if (!WebSocketManager.deviceType) {
      WebSocketManager.deviceType = deviceType
    }
  }

  connect() {
    if (!WebSocketManager.deviceType) {
      console.error('WebSocketManager has not been initiated')
    }

    if (WebSocketManager._ws) {
      console.error('Connection already exists')
    }
    // handle connection and reconnection
  }

  disconnect() {

  }

  send() {
    // check if connected and send things
  }
}

// on close, remove it from _ws

export default new WebSocketManager()
