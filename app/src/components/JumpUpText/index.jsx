import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import styles from './style.module.scss'

const JumpUpText = props => {
  const { text } = props
  const [letterArray] = useState(() => text.split(''))
  const [trail, setTrail] = useTrail(letterArray.length, () => ({
    transform: 'translateY(150%)',
    config: { mass: 1, tension: 200, friction: 17.5 },
  }))
  setTrail({ transform: 'translateY(0%)' })

  return (
    <div className={styles.jumpUpText}>
      {trail.map((animationProps, index) => (
        <animated.span
          className={styles.letter}
          style={animationProps}
        >
          {letterArray[index]}
        </animated.span>
      ))}
    </div>
  )
}

export default JumpUpText
