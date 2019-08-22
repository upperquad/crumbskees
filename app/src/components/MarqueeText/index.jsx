import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const MarqueeText = props => {
  const { text, extraClassName, duration, type, invert, winner } = props
  const animationDuration = duration ? duration : '12s'

  return (
    <div className={classNames(styles.marquee, extraClassName, {[styles.marqueeInvert]: invert}, {[styles.marqueeWinner]: winner})}>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
    </div>
  )
}

export default MarqueeText
