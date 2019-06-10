const initAdmin = (wssPage, wssPhone, wssAdmin) => {
  wssAdmin.on('connection', ws => {
    console.log('new admin')

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
      }
    })
  })
}

module.exports = initAdmin