import React, { Children, cloneElement } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const StageWrapper = props => {
  const { children, status } = props

  const childrenWithClasses = Children.map(children, child => (
    cloneElement(child, {
      extraClassName: styles.stage,
    })
  ))

  return (
    <div
      className={classNames(styles.stageWrapper, {
        [styles.stageWrapperEntering]: status === 'entering',
        [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
      })}
    >
      {childrenWithClasses}
    </div>
  )
}

export default StageWrapper
