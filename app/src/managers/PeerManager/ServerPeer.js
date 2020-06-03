import PeerManager from './index'

class ServerPeer extends PeerManager {
  constructor() {
    super()

    if (!ServerPeer.instance) {
      ServerPeer.instance = this
    }

    return ServerPeer.instance
  }
}

export default new ServerPeer()
