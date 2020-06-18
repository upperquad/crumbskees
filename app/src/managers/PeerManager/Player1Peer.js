import PeerManager from './index'

class Player1Peer extends PeerManager {
  constructor() {
    super()

    if (!Player1Peer.instance) {
      Player1Peer.instance = this
    }

    return Player1Peer.instance
  }
}

export default new Player1Peer()
