import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import classNames from 'classnames'
import styles from './style.module.scss'

const Lottie = props => {
  const { data, extraClassName } = props
  const lottieDom = useRef(null)
  const lottiePlayer = useRef(null)
  useEffect(() => {
    lottiePlayer.current = lottie.loadAnimation({
      container: lottieDom.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: data,
    })

    return () => {
      if (lottiePlayer.current) {
        lottiePlayer.current.destroy()
      }
    }
  }, [data])

  return (
    <div className={classNames(styles.lottie, extraClassName)} ref={lottieDom} />
  )
}

export default Lottie
