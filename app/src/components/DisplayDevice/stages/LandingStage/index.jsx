import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const LandingStage = props => {
  const { extraClassName, onFinish } = props

  return (
    <div className={classNames(styles.landing, extraClassName)}>
      <div>MADE WITH <3 BY UPPERQUAD ~~~~(~@        @~)~~~~</div>
      <button
        type="button"
        className={styles.modeOption}
        onClick={onFinish}
      >
        Start
      </button>
    </div>
  )
}

export default LandingStage
