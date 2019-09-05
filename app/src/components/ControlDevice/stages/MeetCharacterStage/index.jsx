import React from 'react'
import styles from './style.module.scss'
import '~styles/common/control-device.scss'
import Circle from '~components/ControlDevice/Circle'
import AutoplayVideo from '~components/AutoplayVideo'

const MeetCharacterStage = props => {
  const { color, image, video, onFinish } = props

  return (
    <section className={styles.meetCharacter}>
      <Circle color={color} />
      <div className={styles.text}>
        <h2 className={styles.title}>You're in!</h2>
        <p className={styles.subtitle}>Say hello to your avatar.</p>
      </div>
      <div className={styles.block}>
        <AutoplayVideo src={video} extraClassName={styles.video} poster={image} />
      </div>
      <div className={styles.placeholder} />
      <div className={styles.button} onClick={onFinish}>
        Ready
      </div>
    </section>
  )
}

export default MeetCharacterStage
