import SocketPeer from 'socketpeer'
import Observable from '~managers/abstracts/Observable'

const URL = `${window.location.origin}/socket-peer`

class PeerManager extends Observable {
  constructor() {
    super()

    this._peer = null
    this._id = null
    this.connected = false
  }

  connect = id => {
    if (this._peer && this._id !== id) {
      this.destroy()
    }

    this._peer = new SocketPeer({
      pairCode: id,
      url: URL,
    })
    this._peer.on('connect', this.onConnect)

    return true
  }

  onConnect = () => {
    this.connected = true
    this._peer.on('close', this.onClose)
    this._peer.on('data', this.onMessage)
    this._callObservers('CONNECTED')
  }

  onClose = () => {
    this._peer = null
    this._id = null
    this.connected = false
    this._callObservers('CLOSED')
  }

  onMessage = data => {
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

  destroy = () => {
    if (this._peer) {
      this._peer.destroy()
      this._peer.close()
      this._peer = null
      this._id = null
      this.connected = false
    }

    this._removeAllSubscribers()
  }

  send = (messageType, attributes = {}) => {
    if (!this._peer) {
      if (this._id) {
        this.connect(this._id)
      } else {
        return console.error('No connection')
      }
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

    this._peer.send([messageType, ...messageArray].join(','))
    return null
  }
}

export default PeerManager
