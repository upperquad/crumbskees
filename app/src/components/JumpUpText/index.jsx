import React, { useState } from 'react'
import classNames from 'classnames'
import { useTrail, animated } from 'react-spring'
import styles from './style.module.scss'

const JumpUpText = props => {
  const { extraClassName, text } = props
  const [letterArray] = useState(() => text.split(''))
  const [trail, setTrail] = useTrail(letterArray.length, () => ({
    transform: 'translateY(150%)',
    config: { mass: 1, tension: 200, friction: 17.5 },
  }))
  setTrail({ transform: 'translateY(0%)' })

  return (
    <div className={classNames(styles.jumpUpText, extraClassName)}>
      {trail.map((animationProps, index) => {
        const key = `${letterArray[index]}-${index}`
        return (
          <animated.span
            className={styles.letter}
            style={animationProps}
            key={key}
          >
            {letterArray[index]}
          </animated.span>
        )
      })}
    </div>
  )
}

export default JumpUpText
