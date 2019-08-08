'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const frontEndRoot = 'app/build/'

const initPage = require('./wss/page.js')
const initPhone = require('./wss/phone.js')
const initAdmin = require('./wss/admin.js')

const PORT = process.env.PORT || 8000
const page = path.join(__dirname, `${frontEndRoot}index.html`)

const server = express()
  .get('/', (req, res) => res.sendFile(page) )
  .use('/', express.static(frontEndRoot))
  .use((req, res) => res.sendFile(page))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wssPage = new SocketServer({server: server, path: '/game'})
const wssPhone = new SocketServer({server: server, path: '/phone'})
const wssAdmin = new SocketServer({server: server, path: '/admin'})

initPage(wssPage, wssPhone, wssAdmin)
initPhone(wssPage, wssPhone, wssAdmin)
initAdmin(wssPage, wssPhone, wssAdmin)
