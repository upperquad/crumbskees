'use strict';

require('./app/src/globals.js')

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
const replaceMeta = (data, req, isShared = false) => {
  const url = `${req.protocol}://${req.get('host') + req.originalUrl}`
  // All copy below are just placeholder and need to be replaced
  let title = global.SHARING_MESSAGES.title // Should we modify the title when sharing or always keep the same?
  let description = global.SHARING_MESSAGES.description.default
  let image = global.SHARING_MESSAGES.image.default

  if (isShared) {
    const { score, player, result } = req.query
    switch (result) {
      case 'win':
        description = global.parseMessage(global.SHARING_MESSAGES.description.win, score)
        if (player === '0') {
          image = global.SHARING_MESSAGES.image.player0win
        } else if (player === '1') {
          image = global.SHARING_MESSAGES.image.player1win
        }
        break
      case 'lose':
        description = global.SHARING_MESSAGES.description.lose
        if (player === '0') {
          image = global.SHARING_MESSAGES.image.player0lose
        } else if (player === '1') {
          image = global.SHARING_MESSAGES.image.player1lose
        }
        break
      case 'tied':
        description = global.parseMessage(global.SHARING_MESSAGES.description.tied, score)
        image = global.SHARING_MESSAGES.image.tied
        break
      case 'singleMode':
        description = global.parseMessage(global.SHARING_MESSAGES.description.singleMode, score)
        image = global.SHARING_MESSAGES.image.player0win
        break
    }
  }

  data = data.replace(/__OG_TITLE__/g, title)
  data = data.replace(/__OG_DESCRIPTION__/g, description)
  data = data.replace(/__OG_IMAGE__/g, image)
  data = data.replace(/__OG_URL__/g, url)

  return data
}

const server = express()
  .get('/', (req, res) => {
    // read in the index.html file
    fs.readFile(page, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = replaceMeta(data, req)
      res.send(result);
    });
  })
  .get('/share', (req, res) => {
    // read in the index.html file
    fs.readFile(page, 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      const result = replaceMeta(data, req, true)
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
