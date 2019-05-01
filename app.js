'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const PORT = process.env.PORT || 3000
const phonePage = path.join(__dirname, 'app/dist/phone/index.html')
const gamePage = path.join(__dirname, 'app/dist/game/index.html')
const adminPage = path.join(__dirname, 'app/dist/admin/index.html')

const server = express()
  .get('/', (req, res) => res.sendFile(phonePage) )
  .get('/game', (req, res) => res.sendFile(gamePage) )
  .get('/admin', (req, res) => res.sendFile(adminPage) )
  .use('/', express.static('app/dist/'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wssPage = new SocketServer({server: server, path: '/game'})
const wssPhone = new SocketServer({server: server, path: '/phone'})
const wssAdmin = new SocketServer({server: server, path: '/admin'})

wssPage.on('connection', ws => {
  console.log('new page')
});

wssPhone.on('connection', ws => {
  console.log('new phone')
  console.log(url.parse(ws.upgradeReq.url, true).query)

  ws.on('message', message => {
    wssPage.clients.forEach(client => {
      client.send('control,' + message)
    })
  })
});

wssAdmin.on('connection', ws => {
  console.log('new admin')

  ws.on('message', message => {
    if (message === 'refresh' || message === 'reset') {
      wssPage.clients.forEach(client => {
        client.send('command,' + message)
      })
    }
  })
});
