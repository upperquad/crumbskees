import React, { useRef } from 'react'
import classNames from 'classnames'

import { useUpdateItems, useUpdatePowers, useRAF, useResizeScene, useSetScene, useUpdateGameState } from './hooks'

import styles from './style.module.scss'

const PixiScene = props => {
  const {
    addTime,
    cancelPower,
    gameState,
    godMode,
    items,
    mouseHandler,
    powers,
    targetPositions,
    type,
    videoBack,
    videoFront,
  } = props

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
  // circles size
  const radiusBase = useRef(0)
  // players data
  const playersMouths = useRef(null)
  const playersPositions = useRef([])
  const playersRadii = useRef([])
  const playersTargetRadii = useRef([])

  const startTransitionOut = useRef(0)

  const allRefs = {
    el,
    app,
    containerMasked,
    containerFront,
    containerMouth,
    circlesMasked,
    initHeight,
    initWidth,
    startTransitionOut,
    radiusBase,
    playersMouths,
    playersPositions,
    playersRadii,
    playersTargetRadii,
  }

  const allProps = {
    cancelPower,
    gameState,
    godMode,
    items,
    powers,
    addTime,
    targetPositions,
    type,
    videoBack,
    videoFront,
  }

  useSetScene(allRefs, allProps)
  useResizeScene(allRefs)
  useUpdateItems(allRefs, allProps)
  useUpdatePowers(allRefs, allProps)
  useRAF(allRefs, allProps)
  useUpdateGameState(allRefs, allProps)

  const clickHandler = mouseHandler ?
    () => mouseHandler({ type: 'click' }) :
    null

  const mouseMoveHandler = mouseHandler ?
    event => {
      if (el.current) {
        const x = event.nativeEvent.offsetX / el.current.offsetWidth - 0.5
        const y = event.nativeEvent.offsetY / el.current.offsetHeight - 0.5
        mouseHandler({
          type: 'cursor_move',
          data: { x, y },
        })
      }
    } :
    null

  return (
    <div
      className={classNames(styles.pixiScene, { [styles.isWithMouse]: mouseHandler })}
      ref={el}
      onClick={clickHandler}
      onMouseMove={mouseMoveHandler}
    />
  )
}

export default PixiScene
