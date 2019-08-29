class PlayerManager {
  setPlayer(token) {
    // call this when token has been validate

    this.player = new Player({ id: token })
  }
}

export default new PlayerManager()
