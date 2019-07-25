const uuid = require('uuid/v1')
const url = require('url')

const initPhone = (wssPage, wssPhone, wssAdmin) => {
  wssPhone.on('connection', ws => {
    const game = wssPage.clients.find(game => !game.taken)
    if (!game) {
      ws.close(1000, 'no_available_game')
      return
    }

    game.taken = true
    ws.send(`id,${game.id}`)
    ws.id = game.id

    ws.on('message', message => {
      sendToGame(message, ws.id)
    })
  })

  function sendToGame (message, gameId) {
    const game = wssPage.clients.find(game => game.id === gameId)
    if (!game) {
      return
    }
    game.send(message)
  }
}

module.exports = initPhone