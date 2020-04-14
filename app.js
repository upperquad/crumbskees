'use strict';

const express = require('express')
const SocketServer = require('ws').Server
const SocketPeer = require('socketpeer')
const path = require('path')
const fs = require('fs')

const frontEndRoot = 'app/build/'

const initDisplay = require('./wss/display.js')
const initControl = require('./wss/control.js')

const PORT = process.env.PORT || 8000
const page = path.join(__dirname, `${frontEndRoot}index.html`)

// replace the special strings with server generated strings
const replaceMeta = (data, query = null) => {
  data = data.replace(/\__OG_TITLE__/g, 'Home Page')
  data = data.replace(/\__OG_DESCRIPTION__/g, "Home page description")
  data = data.replace(/\__OG_IMAGE__/g, 'https://i.imgur.com/V7irMl8.png')

  return data
}

const server = express()
  .get('/', (req, res) => {
    // read in the index.html file
    fs.readFile(page, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = replaceMeta(data)
      res.send(result);
    });
  })
  .get('/shared', (req, res) => {
    // read in the index.html file
    fs.readFile(page, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = replaceMeta(data, req.query)
      res.send(result);
    });
  })
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
