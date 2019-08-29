const url = require('url')

const initAdmin = (wssDisplay, wssControl, wssAdmin) => {
  wssAdmin.on('connection', ws => {
    console.log('new admin')

    const query = url.parse(ws.upgradeReq.url, true).query
    if (query.command && query.command === 'disconnect_all') {
      wssDisplay.clients.forEach(client => {
        client.close()
      })
    }

    ws.on('message', message => {
      if (message === 'refresh' || message === 'reset') {
        wssDisplay.clients.forEach(client => {
          client.send('command,' + message)
        })
      }

      if (message === 'disconnect_all') {
        wssDisplay.clients.forEach(client => {
          client.close()
        })
      }
    })
  })
}

module.exports = initAdmin