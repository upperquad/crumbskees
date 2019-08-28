const initDisplay = (wssDisplay, wssController, wssAdmin) => {
  wssDisplay.on('connection', ws => {
    if (wssDisplay.clients.length > 1) {
      ws.close(1000, 'active_game_exist')
      return
    }

    cleanupGame()

    ws.on('message', message => {
      const messageList = message.split(',')
    
      switch(messageList[0]) {
        case 'auth_result':
          onAuthResult(messageList)
          break
        case 'score':
          onScore(messageList)
          break
        case 'tutorial_start':
          wssController.clients.forEach(client => {
            client.send('tutorial_start')
          })        
          break
        case 'game_start':
          onGameStart()
          break
        case 'disconnect_users':
          onDisconnectAll()
          break
        case 'result':
          onResult(messageList)
          break
        default:
          break
      }
    })
  })

  function cleanupGame() {
    console.log(`new page`)
    wssController.clients.forEach(client => {
      client.close(1000, 'new_game_started')
    })
  }

  function onAuthResult(messageList) {
    if (messageList.length !== 4) {
      return
    }
    const id = messageList[1]
    const result = messageList[2]
    const playerIndex = messageList[3]
    const wsPhone = wssController.clients.find(elem => elem.id === id)
    if (!wsPhone) {
      return
    }
    if (result === '1') {
      wsPhone.accepted = true
      wsPhone.send(`accepted,${playerIndex},${wsPhone.id}`)
    } else {
      wsPhone.close(1000, 'invalid_token')
    }
  }

  function onScore(messageList) {
    if (messageList.length !== 3) {
      return
    }
    const id = messageList[1]
    const score = messageList[2]
    const wsPhone = wssController.clients.find(elem => elem.id === id)
    if (!wsPhone) {
      return
    }
    wsPhone.send(`score,${score}`)
  }

  function onResult(messageList) {
    if (messageList.length !== 2) {
      return
    }
    const result = messageList[1]
    if (result === 'tied') {
      wssController.clients.forEach(client => {
        client.send('result,tied')
      })
    } else {
      wssController.clients.forEach(client => {
        client.send(`result,${client.id === result ? 'won' : 'lost'}`)
      })
    }
  }

  function onGameStart() {
    wssController.clients.forEach(client => {
      client.send('game_start')
    })
  }

  function onDisconnectAll() {
    wssController.clients.forEach(client => {
      client.close(1000, 'game_over')
    })
  }
}

module.exports = initDisplay