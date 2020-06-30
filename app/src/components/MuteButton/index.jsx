import React, { useEffect } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import Button from '~components/Button'
import SoundManager from '~managers/SoundManager'

import iconMusic from '~assets/images/icons/music.svg'
import iconMuted from '~assets/images/icons/music-mute.svg'

const MuteButton = props => {
  const { extraClassName } = props
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    const updateCallback = () => {
      forceUpdate()
    }
    SoundManager.addSubscriber('UPDATED', updateCallback)

    return () => SoundManager.removeSubscriber('UPDATED', updateCallback)
  }, [forceUpdate])

  if (!SoundManager.firstMusicPlayed) {
    return null
  }

  return (
    <Button
      extraClassName={classNames(styles.muteButton, extraClassName)}
      icon={SoundManager.muted ? iconMuted : iconMusic}
      clickHandler={SoundManager.toggleMute}
      isMute
    />
  )
}

export default MuteButton
