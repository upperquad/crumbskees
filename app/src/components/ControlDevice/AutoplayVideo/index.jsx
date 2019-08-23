import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

const AutoplayVideo = props => {
  const { src, poster, setWidth } = props
  console.log(styles[setWidth])
  return (
    <video className={classNames(styles.autoPlayVideo, styles[setWidth])} src={src} poster={poster} autoPlay muted loop></video>
  )
}

export default AutoplayVideo
