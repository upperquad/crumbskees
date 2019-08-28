const uuid = require('uuid/v1')
const url = require('url')

const initDisplay = (wssDisplay, wssController, wssAdmin) => {
  wssController.on('connection', ws => {
    if (!wssDisplay.clients.length) {
      ws.close(1000, 'no_active_game')
      return
    }

    const query = url.parse(ws.upgradeReq.url, true).query
    if (!query.token && !query.id) {
      ws.close(1000, 'invalid_token')
      return
    }

    if (query.token) {
      ws.id = uuid()
      console.log(`new phone: ${ws.id}`)
      wssDisplay.clients[0].send(`token_submit,${query.token},${ws.id}`)
    } else if (query.id && !wssController.clients.find(elem => elem.id === query.id)) {
      ws.id = query.id
      console.log(`reconnect phone: ${ws.id}`)
      wssDisplay.clients[0].send(`reconnect_phone,${ws.id}`)
    }

    ws.on('message', message => {
      if (!ws.accepted) {
        ws.send('not_accepted_yet')
        return
      }

      if (!wssDisplay.clients.length) {
        return
      }

      const messageList = message.split(',')
      console.log(messageList)
      switch(messageList[0]) {
        case 'character_pick':
          console.log(messageList)
          wssDisplay.clients[0].send(`character_pick,${messageList[1]},${messageList[2]},${messageList[3]}`)
          break
        case 'skip_tutorial':
          wssDisplay.clients[0].send(`skip_tutorial,${ws.id}`)
          break
        case 'tutorial_start':
          wssController.clients.forEach(wssPhone => {
            wssPhone.send('tutorial_start')
          });
          break
        case 'tutorial_over':
          wssController.clients.forEach(wssPhone => {
            wssPhone.send('tutorial_over')
          });
          break
        case 'cursor_move':
          wssDisplay.clients[0].send(`cursor_move,${ws.id},${messageList[1]},${messageList[2]}`)
          break
        case 'click':
          wssDisplay.clients[0].send(`click,${ws.id}`)
          break
        default:
          break
      }
    })

    ws.on('close', message => {
      if (wssDisplay.clients.length) {
        wssDisplay.clients[0].send(`phone_left,${ws.id}`)
      }
      console.log('phone left')
    })
  })
}

module.exports = initDisplay