const uuid = require('uuid/v1')

const initPage = (wssPage, wssPhone, wssAdmin) => {
  wssPage.on('connection', ws => {
    ws.id = uuid()

    ws.send(`id,${ws.id}`)

    ws.on('message', message => {
      we.send('pong')
    })
  })
}

module.exports = initPage