import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const IntroIlloStage = props => {
  const { extraClassName, onFinish } = props

  useEffect(() => {
    setTimeout(onFinish, 3000)
  }, [onFinish])

  return (
    <div className={classNames(styles.introIllo, extraClassName)}>
      123
    </div>
  )
}

export default IntroIlloStage
