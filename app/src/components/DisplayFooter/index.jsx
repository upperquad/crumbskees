import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import MarqueeText from '../MarqueeText'

import styles from './style.module.scss'

const DisplayFooter = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.love}>
        Made with 🖤 by Upperquad
      </div>
      <div className={styles.blackBar}>
        <MarqueeText extraClassName={styles.whatup} text='What up tiny type that is scrolling -&nbsp;' duration='3s' />
        <div className={styles.version}>
          © 2019 Upperquad LLC. Ver. 6.35
        </div>
      </div>
    </footer>
  )
}

export default DisplayFooter
