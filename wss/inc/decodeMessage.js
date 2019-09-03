const decodeMessage = message => {
  const [type, ...messageArray] = message.split(',')
  const messageAttributes = {}
  messageArray.forEach(attrString => {
    const attrPair = attrString.split('=')
    if (attrPair.length === 2) {
      const [key, value] = attrPair
      messageAttributes[key] = value
    }
  })

  return { type, data: messageAttributes }
}

module.exports = decodeMessage