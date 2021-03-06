import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import AutoplayVideo from '~components/AutoplayVideo'
import Button from '~components/Button'
import Lottie from '~components/Lottie'
import MarqueeText from '~components/MarqueeText'
import MuteButton from '~components/MuteButton'
import SoundManager from '~managers/SoundManager'

import backgroundVideo from '~assets/images/landing/background.mp4'
import backgroundImage from '~assets/images/landing/background.jpg'
import titleJson from '~assets/images/landing/title.json'

const LandingStage = props => {
  const { extraClassName, onFinish } = props

  useEffect(() => {
    SoundManager.playMusic('landing')
  }, [])

  return (
    <div className={classNames(styles.landing, extraClassName)}>
      <AutoplayVideo
        src={backgroundVideo}
        extraClassName={styles.video}
        poster={backgroundImage}
      />
      <a
        className={styles.marqueeTop}
        href="https://upperquad.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MarqueeText
          extraClassName={styles.marqueeTopText}
          text="Made with <3 by Upperquad ~~~~(~@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@~)~~~~"
          duration="12s"
        />
      </a>
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
          <Lottie extraClassName={styles.titleMain} data={titleJson} />
        </h1>
        <Button
          text="Play now"
          extraClassName={styles.button}
          clickHandler={onFinish}
        />
      </div>
      <MuteButton extraClassName={styles.muteButton} />
    </div>
  )
}

export default LandingStage
