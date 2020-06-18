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
      {[...Array(9)].map((e, index) => (
        <div className={classNames(styles.stripe, styles[`stripe--${index + 1}`])} />
      ))}
    </div>
  )
}

export default StageWrapper
