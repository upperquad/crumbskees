class PlayersManager {
  constructor() {
    this.players = [null, null]
  }

  setPlayer(token, index) {
    // call this when token has been validate
    // chekc if a player exist already
    this.players.push(new Player({ id: token }))
  }
}

export default new PlayersManager()
