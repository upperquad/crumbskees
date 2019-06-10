const initPage = (wssPage, wssPhone, wssAdmin) => {
  wssPage.on('connection', ws => {
    console.log(`new page`)
    // handler for only accepting the first approved page

    ws.on('message', message => {
      const messageList = message.split(',')

      switch(messageList[0]) {
        case 'auth_result':
          onAuthResult(messageList)
          break
        case 'score':
          onScore(messageList)
          break
        default:
          break
      }
    })
  })

  function onAuthResult(messageList) {
    if (messageList.length !== 3) {
      return
    }
    const id = messageList[1]
    const result = messageList[2]
    const wsPhone = wssPhone.clients.find(elem => {
      elem.id === id
    })
    if (!wsPhone) {
      return
    }
    if (result) {
      wsPhone.accpected = true
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
    const wsPhone = wssPhone.clients.find(elem => {
      elem.id === id
    })
    if (!wsPhone) {
      return
    }
    wsPhone.send(`score,${score}`)
  }

  function onDisconnectAll(messageList) {
    wssPhone.clients.forEach(client => {
      client.close(1000, 'game_over')
    })
  }
}

module.exports = initPage