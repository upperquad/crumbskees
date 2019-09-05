import React from 'react'
import characterVideoWhite1 from '~assets/images/character-white-1.mp4'
// import characterVideoWhite2 from '~assets/images/character-white-2.mp4'
import character1 from '~assets/images/character1.png'
// import character2 from '~assets/images/character2.png'
import styles from './style.module.scss'
import '~styles/common/control-device.scss'
import Circle from '~components/ControlDevice/Circle'
import AutoplayVideo from '~components/AutoplayVideo'

const MeetCharacterStage = () => {
  const character = {
    color: 'purple',
    image: character1,
    video: characterVideoWhite1,
  }

  return (
    <section className={styles.characterConfirm}>
      <Circle color={character.color} />
      <div className={styles.text}>
        <h2 className={styles.title}>You're in!</h2>
        <p className={styles.subtitle}>Say hello to your avatar.</p>
      </div>
      <div className={styles.block}>
        <AutoplayVideo src={character.video} extraClassName={styles.video} poster={character.image} />
      </div>
      <div className={styles.placeholder} />
      <div className={styles.button} role="button" ng-click="phoneCtrl.handleConfirm()">
        Ready
      </div>
    </section>
  )
}

export default MeetCharacterStage
