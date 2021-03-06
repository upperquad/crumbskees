import React, { useEffect } from 'react'
import classNames from 'classnames'
import { useSpring, animated } from 'react-spring'
import styles from './style.module.scss'

const DropText = props => {
  const { extraClassName, state, text } = props
  const [animProps, setAnimProps] = useSpring(() => ({
    transform: 'translateY(-150%)',
    config: { mass: 1, tension: 300, friction: 17.5 },
  }))

  useEffect(() => {
    switch (state) {
      case 'in':
        setAnimProps({ transform: 'translateY(0)' })
        break
      case 'after':
        setAnimProps({ transform: 'translateY(150%)' })
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <animated.div
      className={classNames(styles.dropText, extraClassName)}
      style={animProps}
    >
      <span className={styles.dropTextInner} data-text={text}>{text}</span>
    </animated.div>
  )
}

export default DropText
