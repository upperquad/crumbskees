import React, { Children, cloneElement } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const STRIPE_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
      {STRIPE_ARRAY.map(num => (
        <div key={num} className={classNames(styles.stripe, styles[`stripe--${num}`])} />
      ))}
    </div>
  )
}

export default StageWrapper
