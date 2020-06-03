import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const ModeStage = props => {
  const { extraClassName, onFinish } = props

  return (
    <div className={classNames(styles.landing, extraClassName)}>
      <div className={styles.modeOption} onClick={onFinish}>Start</div>
    </div>
  )
}

export default ModeStage
