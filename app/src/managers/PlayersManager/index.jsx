import Player from '~components/Player'

class PlayersManager {
  constructor() {
    this.players = []

    this.setPlayer(123, 0)
  }

  setPlayer(token, index) {
    // call this when token has been validate
    // chekc if a player exist already
    this.players.push(new Player({ id: token, index }))
    console.log(token)
  }
}

export default new PlayersManager()
