const uuid = require('uuid/v1')
const url = require('url')
const encodeMessage = require('./inc/encodeMessage.js')
const decodeMessage = require('./inc/decodeMessage.js')

const initControl = (wssDisplay, wssControl, wssAdmin) => {
  wssControl.on('connection', ws => {
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
      wssDisplay.clients[0].send(encodeMessage('token_submit', { token: query.token, id: ws.id }))
    } else if (query.id && !wssControl.clients.find(elem => elem.id === query.id)) {
      ws.id = query.id
      console.log(`reconnect phone: ${ws.id}`)
      wssDisplay.clients[0].send(encodeMessage('reconnect_phone', { id: ws.id }))
    }

    ws.on('message', message => {
      if (!ws.accepted) {
        ws.send('not_accepted_yet')
        return
      }

      if (!wssDisplay.clients.length) {
        return
      }

      const { type, data } = decodeMessage(message)
      switch(type) {
        case 'character_pick':
          wssDisplay.clients[0].send(message)
          break
        case 'skip_tutorial':
          wssDisplay.clients[0].send('skip_tutorial')
          break
        case 'tutorial_start':
          wssControl.clients.forEach(wssPhone => {
            wssPhone.send('tutorial_start')
          });
          break
        case 'cursor_move':
          wssDisplay.clients[0].send(encodeMessage('cursor_move', { id: ws.id, ...data }))
          break
        case 'click':
          wssDisplay.clients[0].send(encodeMessage('click', { id: ws.id }))
          break
        default:
          break
      }
    })

    ws.on('close', message => {
      if (wssDisplay.clients.length) {
        wssDisplay.clients[0].send(encodeMessage('phone_left', { id: ws.id }))
      }
      console.log('phone left')
    })
  })
}

module.exports = initControl