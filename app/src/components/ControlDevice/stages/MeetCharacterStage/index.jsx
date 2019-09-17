import React from 'react'

import characterVideoWhite1 from '~assets/images/character-white-1.mp4'
import characterVideoWhite2 from '~assets/images/character-white-2.mp4'
import character1 from '~assets/images/character1.png'
import character2 from '~assets/images/character2.png'
import styles from './style.module.scss'
import '~styles/common/control-device.scss'
import Circle from '~components/ControlDevice/Circle'
import AutoplayVideo from '~components/AutoplayVideo'

const MeetCharacterStage = props => {
  const { color, image, onFinish, playerData, video } = props
  const { playerIndex } = playerData

  const character = {
    color: 'purple',
    image: character1,
    video: characterVideoWhite1,
  }

  switch (playerIndex) {
    case '0':
      character.color = 'purple'
      character.image = character1
      character.video = characterVideoWhite1
      break
    case '1':
      character.color = 'red'
      character.image = character2
      character.video = characterVideoWhite2
      break
    default:
      character.color = 'red'
      character.image = character1
      character.video = characterVideoWhite1
      break
  }

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
      <div className={styles.button} onClick={() => onFinish()}>
        Ready
      </div>
    </section>
  )
}

export default MeetCharacterStage
