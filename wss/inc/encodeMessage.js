const encodeMessage = (messageType, attributes = {}) => {
  const messageArray = []
  Object.keys(attributes).forEach(key => {
    const value = attributes[key]
    switch (typeof value) {
      case 'string':
        if (!value.includes(',') && !value.includes('=')) {
          messageArray.push(`${key}=${value}`)
        }
        break
      case 'number':
        messageArray.push(`${key}=${value}`)
        break
      default:
        break
    }
  })

  return [messageType, ...messageArray].join(',')
}

module.exports = encodeMessage