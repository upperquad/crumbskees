'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const path = require('path')

const frontEndRoot = 'app/build/'

const initDisplay = require('./wss/display.js')
const initControl = require('./wss/control.js')
const initAdmin = require('./wss/admin.js')

const PORT = process.env.PORT || 8000
const page = path.join(__dirname, `${frontEndRoot}index.html`)

const server = express()
  .get('/', (req, res) => res.sendFile(page) )
  .use('/', express.static(frontEndRoot))
  .use((req, res) => res.sendFile(page))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const wssDisplay = new SocketServer({server: server, path: '/display'})
const wssControl = new SocketServer({server: server, path: '/control'})
const wssAdmin = new SocketServer({server: server, path: '/admin'})

initDisplay(wssDisplay, wssControl, wssAdmin)
initControl(wssDisplay, wssControl, wssAdmin)
initAdmin(wssDisplay, wssControl, wssAdmin)
