import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import PreConnectStage from './stages/PreConnectStage'
import MeetCharacterSatge from './stages/MeetCharacterStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'

import WebSocketManager from '../../managers/WebSocketManager'

function effectWebsocket(setToken, setConnectionState) {
  const onWebSocketStateUpdate = event => {
    setConnectionState(event.detail.state)
  }

  window.addEventListener('WS_UPDATE', onWebSocketStateUpdate)
  WebSocketManager.init('control')

  const path = window.location.pathname
  if (/^\/\d{3}$/.test(path)) {
    const token = path.slice(1)
    WebSocketManager.connect({token})
  }

  return () => {
    window.removeEventListener('WS_UPDATE', onWebSocketStateUpdate)
    WebSocketManager.disconnect()
  }
}

function effectWebsocketStateUpdate(setConnectionState) {
  const onWebSocketStateUpdate = event => {
    setConnectionState(event.detail.state)
  }

  window.addEventListener('WS_UPDATE', onWebSocketStateUpdate)

  return () => {
    window.removeEventListener('WS_UPDATE', onWebSocketStateUpdate)
  }
}

function updateToken(key, token, setToken) {
  // this.errorReason = null

  if (key === -1) {
    setToken(token.slice(0, -1))
  } else {
    const newToken = token + key
    if (newToken.length >= 3) {
      WebSocketManager.connect({token: newToken})
      setToken('')
    } else {
      setToken(newToken)
    }
  }
}

const ControlDevice = props => {
  const [connectionState, setConnectionState] = useState('uninitialized')
  const [hasPlayed, setHasPlayed] = useState(false)
  const [stage, setStage] = useState('pre_connect')
  const [token, setToken] = useState('')

  useEffect(() => effectWebsocket(setToken, setConnectionState), [])
  useEffect(() => effectWebsocketStateUpdate(setConnectionState), [setConnectionState])

  return (
    <div>
      {stage === 'pre_connect' && (
        <PreConnectStage
          connectionState={connectionState}
          hasPlayed={hasPlayed}
          token={token}
          updateToken={key => updateToken(key, token, setToken)}
        />
      )}
    </div>
  )
}

export default ControlDevice
