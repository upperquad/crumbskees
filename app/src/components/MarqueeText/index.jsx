import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const MarqueeText = props => {
  const { text, extraClassName, duration } = props
  const animationDuration = duration ? duration : '6s'
  return (
    <div className={classNames(styles.marquee, extraClassName)}>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}</div>
    </div>
  )
}

export default MarqueeText
