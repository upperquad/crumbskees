import React, { useRef } from 'react'

import { useUpdateItems, useUpdatePowers, useRAF, useResizeScene, useSetScene, useUpdateGameState } from './hooks'

import styles from './style.module.scss'

const PixiScene = props => {
  const { cancelPower, gameState, items, positions, powers, setTime, type, videoBack, videoFront } = props
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
  const containerMouth = useRef(null)
  // circles
  const circlesMasked = useRef(null)
  const circlesBorder = useRef(null)
  const circlesLastPositions = useRef([])
  // circles size
  const stroke = useRef(0)
  const radius = useRef(0)
  // mouths
  const mouths = useRef([[], []])

  const timeFrozen = useRef(null)
  const startTransitionOut = useRef(0)

  const circleAlpha = type === 'tutorial' ? 0 : 1

  // set up scene
  useSetScene(
    {
      el,
      app,
      containerMasked,
      containerFront,
      containerMouth,
      circlesMasked,
      circlesBorder,
      circlesLastPositions,
      stroke,
      radius,
      mouths,
    },
    { type, videoBack, videoFront },
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
      initHeight,
      initWidth,
      radius,
      mouths,
      timeFrozen,
    },
    {
      cancelPower,
      powers,
      setTime,
      type,
    },
  )

  // on RAF
  useRAF(
    {
      circlesBorder,
      circlesLastPositions,
      circlesMasked,
      initHeight,
      initWidth,
      radius,
      mouths,
      startTransitionOut,
      stroke,
      timeFrozen,
    },
    {
      circleAlpha,
      positions,
      powers,
      type,
    },
  )

  // on update game state (for "game" type only)
  useUpdateGameState(
    { startTransitionOut },
    { gameState },
  )

  return <div className={styles.pixiScene} ref={el} />
}

export default PixiScene
