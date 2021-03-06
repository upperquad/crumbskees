import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const MarqueeText = props => {
  const { duration, extraClassName, text } = props
  const animationDuration = duration || '12s'

  return (
    <div
      className={classNames(styles.marquee, extraClassName)}
    >
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
      <div className={styles.marqueeInnerText} style={{ animationDuration }}>
        {text}
        &nbsp;
      </div>
    </div>
  )
}

export default MarqueeText
