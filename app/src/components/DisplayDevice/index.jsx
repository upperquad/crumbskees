import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import WebSocketManager from '../../managers/WebSocketManager'

const DisplayDevice = props => {
  useEffect(() => {
    WebSocketManager.init('display')
  }, [])

  return (
    <div>
      This is the display
    </div>
  )
}

export default DisplayDevice
