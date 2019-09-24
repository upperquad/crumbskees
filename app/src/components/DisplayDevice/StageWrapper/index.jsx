import React, { Children } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import styles from './style.module.scss'

const STAGE_TRANSITION_OUT = 1300
const STAGE_TRANSITION_IN = 800

const StageWrapper = props => {
  const { children, key } = props

  const childrenWithClasses = Children.map(children, child => (
    React.cloneElement(child, {
      extraClassName: styles.stage,
    })
  ))

  return (
    <Transition
      key={key}
      timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
    >
      {status => (
        <div
          className={classNames(styles.stageWrapper, {
            [styles.stageWrapperEntering]: status === 'entering',
            [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
          })}
        >
          {childrenWithClasses}
        </div>
      )}
    </Transition>
  )
}

export default StageWrapper
