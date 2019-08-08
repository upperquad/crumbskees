import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import DisplayDevice from '../DisplayDevice'
import ControlDevice from '../ControlDevice'

import { BREAKPOINT } from '../../constants'

const App = props => {
  const [isDesktop] = useState(() => window.innerWidth > BREAKPOINT)

  console.log(isDesktop)

  return (
    <>
      {isDesktop && <DisplayDevice />}
      {!isDesktop && <ControlDevice />}
    </>
  )
}

export default App
