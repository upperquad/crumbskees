import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const MarqueeText = props => {
  const { text, extraClassName, duration, type, isWhite, isAlternate } = props
  const animationDuration = duration ? duration : '12s'

  return (
    <div className={classNames(styles.marquee, extraClassName, {[styles.marqueeAlternate]: isAlternate}, {[styles.marqueeWhite]: isWhite})}>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
      <div className={styles.marqueeInnerText} style={{animationDuration}}>{text}&nbsp;</div>
    </div>
  )
}

export default MarqueeText
