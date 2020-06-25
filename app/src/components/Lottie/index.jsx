import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import lottie from '~vendors/lottie_light'
import styles from './style.module.scss'

const Lottie = props => {
  const { data, extraClassName, path } = props
  const lottieDom = useRef(null)
  const lottiePlayer = useRef(null)
  useEffect(() => {
    const animConf = {
      container: lottieDom.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    }

    if (data) {
      animConf.animationData = data
    } else if (path) {
      animConf.path = path
    }

    lottiePlayer.current = lottie.loadAnimation(animConf)

    return () => {
      if (lottiePlayer.current) {
        lottiePlayer.current.destroy()
      }
    }
  }, [data, path])

  return (
    <div className={classNames(styles.lottie, extraClassName)} ref={lottieDom} />
  )
}

export default Lottie
