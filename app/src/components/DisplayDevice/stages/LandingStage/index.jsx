import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import Button from '~components/Button'
import MarqueeText from '~components/MarqueeText'

import titleImg from '~assets/images/landing/title.png'

const LandingStage = props => {
  const { extraClassName, onFinish } = props

  return (
    <div className={classNames(styles.landing, extraClassName)}>
      <div className={styles.marqueeTop}>
        <MarqueeText
          extraClassName={styles.marqueeTopText}
          text="Made with <3 by Upperquad ~~~~(~@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@~)~~~~"
          duration="12s"
        />
      </div>
      <div className={styles.marqueeLeft}>
        <MarqueeText
          extraClassName={styles.marqueeSideText}
          text="It’s a munchy lunchy waste of time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          duration="12s"
        />
      </div>
      <div className={styles.marqueeRight}>
        <MarqueeText
          extraClassName={styles.marqueeSideText}
          text="It’s a munchy lunchy waste of time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          duration="12s"
        />
      </div>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          <div className={styles.titlePrefix}>
            It’s
            <br />
            the
          </div>
          <img className={styles.titleMain} src={titleImg} alt="Crumbskees" />
        </h1>
        <Button
          text="Play now"
          extraClassName={styles.button}
          clickHandler={onFinish}
        />
      </div>
    </div>
  )
}

export default LandingStage
