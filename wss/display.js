const encodeMessage = require('./inc/encodeMessage.js')
const decodeMessage = require('./inc/decodeMessage.js')

const initDisplay = (wssDisplay, wssControl, wssAdmin) => {
  wssDisplay.on('connection', ws => {
    if (wssDisplay.clients.length > 1) {
      ws.close(1000, 'active_game_exist')
      return
    }

    cleanupGame()

    ws.on('message', message => {
      const { type, data } = decodeMessage(message)

      switch(type) {
        case 'auth_result':
          onAuthResult(data)
          break
        case 'reconnect_result':
          onReconnectResult(data)
          break
        case 'score':
          onScore(data)
          break
        case 'tutorial_start':
          onTutorialStart()
          break
        case 'game_start':
          onGameStart()
          break
        case 'disconnect_users':
          onDisconnectAll()
          break
        case 'result':
          onResult(data)
          break
        default:
          break
      }
    })
  })

  function cleanupGame() {
    console.log(`new page`)
    wssControl.clients.forEach(client => {
      client.close(1000, 'new_game_started')
    })
  }

  function onAuthResult(data) {
    const { id, result, playerIndex } = data
    const wsPhone = wssControl.clients.find(elem => elem.id === id)
    if (!wsPhone || id === undefined || result === undefined || (result === '1' && playerIndex === undefined) ) {
      return
    }
    if (result === '1') {
      wsPhone.accepted = true
      wsPhone.send(encodeMessage('accepted', { playerIndex, id: wsPhone.id }))
    } else {
      wsPhone.close(1000, 'invalid_token')
    }
  }

  function onReconnectResult(data) {
    const { id, result } = data
    const wsPhone = wssControl.clients.find(elem => elem.id === id)
    if (!wsPhone || id === undefined || result === undefined ) {
      return
    }
    if (result === '1') {
      wsPhone.accepted = true
    } else {
      wsPhone.close(1000, 'invalid_id')
    }
  }

  function onScore(data) {
    const { id, score } = data
    const wsPhone = wssControl.clients.find(elem => elem.id === id)
    if (!wsPhone || id === undefined || score === undefined ) {
      return
    }
    wsPhone.send(encodeMessage('score', { score }))
  }

  function onTutorialStart() {
    wssControl.clients.forEach(client => {
      client.send('tutorial_start')
    })
  }

  function onResult(data) {
    const { winner } = data
    if (winner === undefined) {
      return
    }
    const message = encodeMessage('result', { winner })
    wssControl.clients.forEach(client => {
      client.send(message)
    })
  }

  function onGameStart() {
    wssControl.clients.forEach(client => {
      client.send('game_start')
    })
  }

  function onDisconnectAll() {
    wssControl.clients.forEach(client => {
      client.close(1000, 'game_over')
    })
  }
}

module.exports = initDisplay