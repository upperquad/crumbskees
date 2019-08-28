import React from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const AutoplayVideo = props => {
  const { src, poster, extraClassName } = props
  return (
    <video
      className={classNames(styles.autoPlayVideo, extraClassName)}
      src={src}
      poster={poster}
      autoPlay
      playsInline
      muted
      loop
    />
  )
}

export default AutoplayVideo
