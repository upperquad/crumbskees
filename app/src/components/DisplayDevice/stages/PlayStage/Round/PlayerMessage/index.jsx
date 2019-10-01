import React, { useEffect, useRef, useState } from 'react'

import PopupMessage from '../PopupMessage'

import { COLORS } from '~constants'
import { hexToRgb } from '~utils/colors'

const PlayerMessage = props => {
  const { color, position, roundScore } = props
  const prevScore = useRef(0)
  const [message, setMessage] = useState({ messageCount: 0 })

  const addMessage = messageObj => {
    setMessage(prevMessage => (
      {
        ...messageObj,
        messageCount: prevMessage.messageCount + 1,
      }
    ))
  }

  useEffect(() => {
    const scoreAdded = roundScore - prevScore.current
    if (scoreAdded > 0) {
      addMessage({
        text: `+${scoreAdded}`,
        color: `rgba(${hexToRgb(COLORS[color])}, .8)`,
        x: position.x + 0.5,
        y: position.y + 0.5,
      })
      prevScore.current = roundScore
    }
  }, [roundScore])

  return (
    <PopupMessage
      color={message.color}
      x={message.x}
      y={message.y}
      text={message.text}
      messageCount={message.messageCount}
    />
  )
}

export default PlayerMessage
