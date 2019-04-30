'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const PORT = process.env.PORT || 3000
const phonePage = path.join(__dirname, 'game/phone.html')
const gamePage = path.join(__dirname, 'game/game.html')

const server = express()
  .use(express.static('game'))
  .get('/', (req, res) => res.sendFile(phonePage) )
  .get('/game', (req, res) => res.sendFile(gamePage) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wssPage = new WebSocket.Server({ noServer: true })
const wssPhone = new WebSocket.Server({ noServer: true })

const wss = new SocketServer({ server })

wssPage.on('connection', ws => {
  // ...
});

wssPhone.on('connection', ws => {
  ws.on('message', ws => {
    wssPage.clients.forEach(client => {
      client.send(ws.data)
    })
  })
});

server.on('upgrade', (request, socket, head) => {
  const pathname = url.parse(request.url).pathname

  if (pathname === '/game') {
    wssPage.handleUpgrade(request, socket, head, ws => {
      wssPage.emit('connection', ws, request)
    });
  } else if (pathname === '/phone') {
    wssPhone.handleUpgrade(request, socket, head, ws => {
      wssPhone.emit('connection', ws, request)
    });
  } else {
    socket.destroy()
  }
})

// wss.clients.forEach(client => {
//   client.send(`123`)
// })
