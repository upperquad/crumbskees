import React, { useEffect, useRef, useState } from 'react'

import PopupMessage from '../PopupMessage'

import { COLORS } from '~constants'
import { hexToRgb } from '~utils/colors'

const PlayerMessage = props => {
  const { color, position, roundScore, tapInstruction } = props
  const prevScore = useRef(0)
  const [message, setMessage] = useState({ messageCount: 0 })

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      x: position.x + 0.5,
      y: position.y + 0.5,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  useEffect(() => {
    const scoreAdded = roundScore - prevScore.current
    if (scoreAdded > 0) {
      addMessage({
        text: `+${scoreAdded}`,
        color: `rgba(${hexToRgb(COLORS[color])}, .8)`,
      })
      prevScore.current = roundScore
    }
  }, [roundScore])

  useEffect(() => {
    if (tapInstruction) {
      const timerInterval = setInterval(() => {
        addMessage({
          text: 'Tap',
          color: `rgba(${hexToRgb(COLORS[color])}, .8)`,
        })
      }, 800)

      return () => {
        clearInterval(timerInterval)
      }
    }
    return undefined
  }, [tapInstruction])

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
