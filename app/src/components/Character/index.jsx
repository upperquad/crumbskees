import React from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import Lottie from '~components/Lottie'

import styles from './style.module.scss'

const Character = props => {
  const { character, extraClassName, mood } = props

  return (
    <div className={classNames(styles.character, extraClassName)}>
      <TransitionGroup>
        <Transition
          key={mood}
          timeout={{ enter: 100, exit: 400 }}
        >
          {status => (
            <Lottie
              path={character.lottie[mood]}
              extraClassName={classNames(styles.lottie, {
                [styles.lottieOut]: status === 'exiting' || status === 'exited',
                [styles.lottieIn]: status === 'entering',
              })}
            />
          )}
        </Transition>
      </TransitionGroup>
    </div>
  )
}

export default Character
