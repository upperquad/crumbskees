const url = require('url')

const initAdmin = (wssPage, wssPhone, wssAdmin) => {
  wssAdmin.on('connection', ws => {
    console.log('new admin')

    const query = url.parse(ws.upgradeReq.url, true).query
    if (query.command && query.command === 'disconnect_all') {
      wssPage.clients.forEach(client => {
        client.close()
      })
    }

    ws.on('message', message => {
      if (message === 'refresh' || message === 'reset') {
        wssPage.clients.forEach(client => {
          client.send('command,' + message)
        })
      }

      if (message === 'disconnect_all') {
        wssPage.clients.forEach(client => {
          client.close()
        })

        wssPhone.clients.forEach(client => {
          client.close()
        })
      }
    })
  })
}

module.exports = initAdmin