const uuid = require('uuid/v1')
const url = require('url')

const initPhone = (wssPage, wssPhone, wssAdmin) => {
  wssPhone.on('connection', ws => {
    if (!wssPage.clients.length) {
      ws.close(1000, 'no_active_game')
      return
    }

    const query = url.parse(ws.upgradeReq.url, true).query
    if (!query.token) {
      ws.close(1000, 'invalid_token')
      return
    }

    ws.id = uuid()
    console.log(`new phone: ${ws.id}`)
    wssPage.clients[0].send(`token_submit,${query.token},${ws.id}`)

    ws.on('message', message => {
      if (!ws.accepted) {
        ws.send('not_accepted_yet')
        return
      }

      if (!wssPage.clients.length) {
        return
      }

      // TODO: handle command since it's actually accpeted
      const messageList = message.split(',')
      switch(messageList[0]) {
        case 'cursor_move':
          wssPage.clients[0].send(`cursor_move,${ws.id},${messageList[1]},${messageList[2]}`)
          break
        case 'click':
          wssPage.clients[0].send(`click,${ws.id}`)
          break
        default:
          break
      }
    })

    ws.on('close', message => {
      console.log('phone left')
    })
  })
}

module.exports = initPhone