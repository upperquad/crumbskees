import PeerManager from './index'

class Player2Peer extends PeerManager {
  constructor() {
    super()

    if (!Player2Peer.instance) {
      Player2Peer.instance = this
    }

    return Player2Peer.instance
  }
}

export default new Player2Peer()
