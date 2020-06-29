// const uuid = require('uuid/v1')
const url = require('url')
const encodeMessage = require('./inc/encodeMessage.js')
const decodeMessage = require('./inc/decodeMessage.js')

const initControl = (wssControl, existingTokenDict) => {
  wssControl.on('connection', ws => {
    const query = url.parse(ws.upgradeReq.url, true).query

    if (!query.token) {
      ws.close(1000, 'invalid_token')
      return
    }

    if (existingTokenDict.hasOwnProperty(query.token)) {
      ws.send(encodeMessage('player_token_accepted', { id: existingTokenDict[query.token] }))
      ws.close(1000)
    } else {
      ws.close(1000, 'invalid_token')
    }
  })
}

module.exports = initControl