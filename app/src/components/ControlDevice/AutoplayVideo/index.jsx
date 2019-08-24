import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

const AutoplayVideo = props => {
  const { src, poster, extraClassName } = props
  return (
    <video className={classNames(styles.autoPlayVideo, extraClassName)} src={src} poster={poster} autoPlay playsInline muted loop></video>
  )
}

export default AutoplayVideo
