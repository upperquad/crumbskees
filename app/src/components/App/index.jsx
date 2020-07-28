import React, { useState, useEffect } from 'react'
import NoSleep from 'nosleep.js'

import DisplayDevice from '../DisplayDevice'
import ControlDevice from '../ControlDevice'

import { BREAKPOINT } from '~constants'

const App = () => {
  const [isDesktop] = useState(() => window.innerWidth > BREAKPOINT)

  useEffect(() => {
    const noSleep = new NoSleep()
    const enableNoSleep = () => {
      document.removeEventListener('click', enableNoSleep, false)
      noSleep.enable()
    }
    document.addEventListener('click', enableNoSleep, false)
  }, [])

  useEffect(() => {
    if (isDesktop) {
      document.documentElement.classList.add('is-display-device')
      document.documentElement.classList.remove('is-control-device')
      // clear shared url
      window.history.replaceState({}, document.title, '/')
    } else {
      document.documentElement.classList.remove('is-display-device')
      document.documentElement.classList.add('is-control-device')
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
