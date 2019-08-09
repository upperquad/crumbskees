import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

const PlayStage = props => {
  const { color } = props
  const circleClass = classNames(styles.circle, {
    [styles.circleYellow]: color === 'yellow',
    [styles.circlePurple]: color === 'purple',
    [styles.circleRed]: color === 'red',
  })
  return (
    <div className={circleClass}></div>
  )
}

export default PlayStage
