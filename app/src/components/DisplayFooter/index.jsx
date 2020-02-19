import React from 'react'
// import classNames from 'classnames'

import MarqueeText from '~components/MarqueeText'

import styles from './style.module.scss'

const DisplayFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.love}>Made with 🖤 by Upperquad</div>
    <div className={styles.blackBar}>
      <MarqueeText extraClassName={styles.whatup} text="What up tiny type that is scrolling -" duration="6s" />
      <div className={styles.version}>© 2019 Upperquad LLC. Ver. 6.35</div>
    </div>
  </footer>
)

export default DisplayFooter
