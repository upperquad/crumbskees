const uuid = require('uuid/v4')
const encodeMessage = require('./inc/encodeMessage.js')
const decodeMessage = require('./inc/decodeMessage.js')

const initDisplay = (wssDisplay, existingTokenDict) => {
  wssDisplay.on('connection', ws => {
    ws.tokenList = []

    // cleanupGame()

    ws.on('message', message => {
      const { type, data } = decodeMessage(message)

      switch(type) {
        case 'new_token':
          onNewToken(data, ws)
          break
        case 'remove_token':
          onRemoveToken(data, ws)
          break
        default:
          break
      }
    })

    ws.on('close', message => {
      for (const token of ws.tokenList) {
        delete existingTokenDict[token]
      }
    })
  })

  function onNewToken(data, ws) {
    const { token } = data
    if (existingTokenDict.hasOwnProperty(token)) {
      ws.send(encodeMessage('token_exists', { token }))
    } else {
      const newConnectionId = uuid()
      existingTokenDict[token] = newConnectionId
      ws.tokenList.push(token)
      ws.send(encodeMessage('new_token_accepted', { token, id: newConnectionId }))
    }
    console.log('new token')
    console.log(existingTokenDict)
  }

  function onRemoveToken(data, ws) {
    const { token } = data
    if (existingTokenDict.hasOwnProperty(token)) {
      ws.tokenList = ws.tokenList.filter(item => item !== token)
      delete existingTokenDict[token]
    }
    console.log('remove token')
    console.log(existingTokenDict)
  }
}

module.exports = initDisplay