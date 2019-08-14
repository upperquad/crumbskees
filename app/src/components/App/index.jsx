import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import DisplayDevice from '../DisplayDevice'
import ControlDevice from '../ControlDevice'

import { BREAKPOINT } from '../../constants'

const App = props => {
  const [isDesktop] = useState(() => window.innerWidth > BREAKPOINT)

  useEffect(() => {
    if (isDesktop) {
      document.documentElement.classList.add('is-desktop')
    } else {
      document.documentElement.classList.remove('is-desktop')
    }
  }, [isDesktop])

  return (
    <>
      {isDesktop && <DisplayDevice />}
      {!isDesktop && <ControlDevice />}
    </>
  )
}

export default App