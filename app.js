'use strict';

const express = require('express')
const helmet = require('helmet')
const SocketServer = require('ws').Server
const SocketPeer = require('socketpeer')
const path = require('path')
const fs = require('fs')

const frontEndRoot = 'app/build/'

const initDisplay = require('./wss/display.js')
const initControl = require('./wss/control.js')

const PORT = process.env.PORT || 8000
const page = path.join(__dirname, `${frontEndRoot}index.html`)

const sixtyDaysInSeconds = 5184000

const server = express()
  .use(helmet.hsts({
    maxAge: sixtyDaysInSeconds
  }))
  .use('/', express.static(frontEndRoot))
  .use((req, res) => res.sendFile(page))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

new SocketPeer({
  httpServer: server,
  wsServer: new SocketServer({server: server, path: '/socket-peer'}),
});

const existingTokenDict = {}

const wssDisplay = new SocketServer({server: server, path: '/display'})
const wssControl = new SocketServer({server: server, path: '/control'})

initDisplay(wssDisplay, existingTokenDict)
initControl(wssControl, existingTokenDict)
