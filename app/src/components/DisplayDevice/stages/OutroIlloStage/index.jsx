import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'
import { DEBUG } from '~constants'
import AutoplayVideo from '~components/AutoplayVideo'

import backgroundVideo from '~assets/images/outro-illo/background.mp4'
import backgroundImage from '~assets/images/outro-illo/background.jpg'

const OutroIlloStage = props => {
  const { extraClassName, onFinish } = props

  useEffect(() => {
    setTimeout(onFinish, DEBUG ? 1000 : 5000)
  }, [onFinish])

  return (
    <div className={classNames(styles.introIllo, extraClassName)}>
      <AutoplayVideo
        src={backgroundVideo}
        extraClassName={styles.video}
        poster={backgroundImage}
      />
    </div>
  )
}

export default OutroIlloStage
