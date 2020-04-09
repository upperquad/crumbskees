import React, { useRef } from 'react'

import { useUpdateItems, useUpdatePowers, useRAF, useResizeScene, useSetScene } from './hooks'

import styles from './style.module.scss'

const PixiSceneTutorial = props => {
  const { cancelPower, items, positions, powers, videoBack, videoFront } = props
  // re-used references through hooks
  const el = useRef(null)
  const app = useRef(null)
  // keep the width and height the first time the app is initiated
  // the autoresizing of pixi is handling the rest, no need to update with new width/height
  // pixi scene
  const initWidth = useRef(0)
  const initHeight = useRef(0)
  const containerMasked = useRef(null)
  const containerFront = useRef(null)
  // circles
  const circlesMasked = useRef(null)
  const circlesBorder = useRef(null)
  const circlesPoints = useRef([])
  const circlesLastPositions = useRef([])
  // circles size
  const stroke = useRef(0)
  const minRadius = useRef(0)
  const maxRadius = useRef(0)
  const minMiddleRadius = useRef(0)
  const maxMiddleRadius = useRef(0)

  const timeFrozen = useRef(null)

  // set up scene
  useSetScene(
    {
      el,
      app,
      containerMasked,
      containerFront,
      circlesMasked,
      circlesBorder,
      circlesPoints,
      circlesLastPositions,
      stroke,
      minRadius,
      maxRadius,
      minMiddleRadius,
      maxMiddleRadius,
    },
    { videoBack, videoFront },
  )

  // Resize scene
  useResizeScene({
    el,
    app,
    initHeight,
    initWidth,
  })

  // update items
  useUpdateItems(
    {
      containerMasked,
      initHeight,
      initWidth,
    },
    {
      items,
    },
  )

  // update powers
  useUpdatePowers(
    {
      circlesPoints,
      minRadius,
      maxRadius,
      minMiddleRadius,
      maxMiddleRadius,
      timeFrozen,
    },
    {
      cancelPower,
      powers,
    },
  )

  useRAF(
    {
      circlesMasked,
      circlesBorder,
      circlesLastPositions,
      circlesPoints,
      timeFrozen,
      initHeight,
      initWidth,
      stroke,
    },
    {
      positions,
      powers,
    },
  )

  return <div className={styles.pixiScene} ref={el} />
}

export default PixiSceneTutorial
