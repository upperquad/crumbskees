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

const wssPage = new SocketServer({server: server, path: '/game'})
const wssPhone = new SocketServer({server: server, path: '/phone'})

wssPage.on('connection', ws => {
  console.log('new page')
});

wssPhone.on('connection', ws => {
  console.log('new phone')

  ws.on('message', message => {
    wssPage.clients.forEach(client => {
      client.send(message)
    })
  })
});

// wss.clients.forEach(client => {
//   client.send(`123`)
// })
