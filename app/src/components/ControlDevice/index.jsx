import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import WebSocketManager from '../../managers/WebSocketManager'

const effectWebsocket = () => {
  WebSocketManager.init('control')

  const path = window.location.pathname
  if (/^\/\d{3}$/.test(path)) {
    WebSocketManager.connect(path.slice(1))
  }

  console.log(WebSocket)

  return () => {
    WebSocketManager.disconnect()
  }
}

const ControlDevice = props => {
  const [stage, setStage] = useState('pre_connect')

  useEffect(effectWebsocket, [])

  return (
    <div>
      This is the phone
    </div>
  )
}

export default ControlDevice
