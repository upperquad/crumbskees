import Observable from '~managers/abstracts/Observable'

const HOST = window.location.origin.replace(/^http/, 'ws')

class TokenSocketManager extends Observable {
  constructor() {
    super()

    if (!TokenSocketManager.instance) {
      TokenSocketManager.instance = this
      this._ws = null
    }

    return TokenSocketManager.instance
  }

  init = deviceType => {
    if (!this._deviceType) {
      this._deviceType = deviceType
    }
  }

  connect = ({ token = null } = {}) => {
    if (this._ws) {
      return console.error('Connection already exists')
    }

    if (!this._deviceType) {
      return console.error('TokenSocketManager has not been initiated')
    }

    let url
    switch (this._deviceType) {
      case 'control':
        url = `${HOST}/control`
        if (token) {
          url += `?token=${token}`
        }
        break
      case 'display':
        url = `${HOST}/display`
        break
      default:
        return console.error('Invalid TokenSocketManager deviceType')
    }

    this._ws = new WebSocket(url)
    this._ws.onopen = this.onOpen
    // handle connection and reconnection

    return true
  }

  onOpen = () => {
    this._ws.onclose = this.onClose
    this._ws.onmessage = this.onMessage

    this._callObservers('CONNECTED')
  }

  onClose = event => {
    const { reason } = event
    this._callObservers('WS_CLOSE', { reason })
    console.warn('Connection closed:', reason)
    this._ws = null
  }

  onMessage = event => {
    const { data = '' } = event
    const [type, ...messageArray] = data.split(',')
    const messageAttributes = {}
    messageArray.forEach(attrString => {
      const attrPair = attrString.split('=')
      if (attrPair.length === 2) {
        const [key, value] = attrPair
        messageAttributes[key] = value
      }
    })

    this._callObservers('MESSAGE', { type, data: messageAttributes })
  }

  disconnect = () => {
    if (this._ws) {
      this._ws.onclose = undefined
      this._ws.onmessage = undefined
      this._ws.close(1000, 'disconnect')
      this._ws = null
    }
  }

  send = (messageType, attributes = {}) => {
    if (!this._ws) {
      return console.error('No connection')
    }

    const messageArray = []
    Object.keys(attributes).forEach(key => {
      const value = attributes[key]
      switch (typeof value) {
        case 'string':
          if (!value.includes(',') && !value.includes('=')) {
            messageArray.push(`${key}=${value}`)
          }
          break
        case 'number':
          messageArray.push(`${key}=${value}`)
          break
        default:
          break
      }
    })

    this._ws.send([messageType, ...messageArray].join(','))
    return null
  }
}

export default new TokenSocketManager()
