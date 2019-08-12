import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterSatge from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

import WebSocketManager from '../../managers/WebSocketManager'

const ControlDevice = props => {
  // set hasPlayed when game starts
  const [hasPlayed, setHasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [token, setToken] = useState('')
  const [connectError, setConnectError] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => effectWebsocket(), [])
  useEffect(() => effectWebsocketClose(setToken, setConnectError, setIsConnecting), [setConnectError])

  return (
    <div>
      {stage === 'pre_connect' && (
        <PreConnectStage
          isConnecting={isConnecting}
          hasPlayed={hasPlayed}
          token={token}
          updateToken={key => updateToken(key, token, setToken, setConnectError, setIsConnecting)}
          errorReason={connectError}
        />
      )}
    </div>
  )
}

function effectWebsocket() {
  WebSocketManager.init('control')

  const path = window.location.pathname
  if (/^\/\d{3}$/.test(path)) {
    const token = path.slice(1)
    WebSocketManager.connect({token})
  }

  return () => {
    WebSocketManager.disconnect()
  }
}

function effectWebsocketClose(setToken, setConnectError, setIsConnecting) {
  const onWebSocketClose = event => {
    const { detail: { reason } } = event
    if (reason === 'invalid_token') {
      setConnectError('Invalid token')
    } else if (reason === 'no_active_game') {
      setConnectError('There\'s no active game')
    }
    setIsConnecting(false)
    setToken('')
  }

  window.addEventListener('WS_CLOSE', onWebSocketClose)

  return () => {
    window.removeEventListener('WS_CLOSE', onWebSocketClose)
  }
}

function updateToken(key, token, setToken, setConnectError, setIsConnecting) {
  setConnectError(null)

  if (key === -1) {
    setToken(token.slice(0, -1))
  } else {
    const newToken = token + key
    if (newToken.length >= 3) {
      setIsConnecting(true)
      WebSocketManager.connect({token: newToken})
    }

    setToken(newToken)
  }
}

export default ControlDevice
