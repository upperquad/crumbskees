'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const initPage = require('./wss/page.js')
const initPhone = require('./wss/phone.js')
const initAdmin = require('./wss/admin.js')

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

initPage(wssPage, wssPhone, wssAdmin)
initPhone(wssPage, wssPhone, wssAdmin)
initAdmin(wssPage, wssPhone, wssAdmin)
