'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const PORT = process.env.PORT || 3000
const phonePage = path.join(__dirname, 'app/dist/phone.html')
const gamePage = path.join(__dirname, 'app/dist/game.html')
const adminPage = path.join(__dirname, 'app/dist/admin.html')

const server = express()
  .get('/', (req, res) => res.sendFile(phonePage) )
  .get('/game', (req, res) => res.sendFile(gamePage) )
  .get('/admin', (req, res) => res.sendFile(adminPage) )
  .use('/static', express.static('app/dist/static'))
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
