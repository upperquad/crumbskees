import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import { DEBUG } from '~constants'

import backgroundImg from '~assets/images/intro-illo/background.png'

const IntroIlloStage = props => {
  const { extraClassName, onFinish } = props

  useEffect(() => {
    setTimeout(onFinish, DEBUG ? 1000 : 3000)
  }, [onFinish])

  return (
    <div className={classNames(styles.introIllo, extraClassName)}>
      <img className={styles.image} src={backgroundImg} alt="" />
    </div>
  )
}

export default IntroIlloStage
