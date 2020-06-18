import React, { useEffect, useRef, useState } from 'react'

import PopupMessage from '../PopupMessage'

import { COLORS } from '~constants'
import { hexToRgb } from '~utils/colors'

const PlayerMessage = props => {
  const { color, position, power, roundScore, tapInstruction } = props
  const prevScore = useRef(0)
  const [message, setMessage] = useState({ messageCount: 0 })
  const initScoreUpdated = useRef(false)

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      x: position.x + 0.5,
      y: position.y + 0.5,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  useEffect(() => {
    let scoreAdded = roundScore - prevScore.current
    let finalColor

    if (scoreAdded !== 0) {
      if (scoreAdded > 0) {
        scoreAdded = `+${scoreAdded}`
        finalColor = hexToRgb(COLORS[color])
      } else if (scoreAdded < 0) {
        finalColor = hexToRgb(COLORS.red)
      }

      if (initScoreUpdated.current) {
        addMessage({
          text: scoreAdded,
          color: `rgba(${finalColor}, .8)`,
        })
      }
      prevScore.current = roundScore
    }

    initScoreUpdated.current = true

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roundScore])

  useEffect(() => {
    if (power) {
      addMessage({
        text: power.text,
        color: power.color,
      })
      // prevScore.current = roundScore
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [power])

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
