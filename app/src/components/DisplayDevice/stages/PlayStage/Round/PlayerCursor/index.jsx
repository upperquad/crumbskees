import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import getNow from '~utils/time'
import { inOutSine } from '~utils/ease'
import { GRID_UNIT, VB_WIDTH, VB_HEIGHT } from '~constants'
import { clamp, random } from '~utils/math'

import RAFManager from '~managers/RAFManager'

const centerX = VB_WIDTH / 2 // equal to svg viewbox / 2
const centerY = VB_HEIGHT / 2 // equal to svg viewbox / 2
const minRadius = GRID_UNIT * 1.1 // 3.125 == 1 unit grid (1920 / 32)
const maxRadius = minRadius + minRadius * 0.45
const minMiddleRadius = minRadius + (maxRadius - minRadius) * 0.45
const maxMiddleRadius = minRadius + (maxRadius - minRadius) * 0.55
const minDuration = 500
const maxDuration = 700
const pointsCount = 8

const PlayerCursor = props => {
  const { cancelPower, color, index, position: targetPosition, power } = props
  const [pathD, setPathD] = useState('')
  const position = useRef({ x: 0, y: 0 })
  const points = useRef(null)
  if (points.current === null) {
    points.current = setPoints()
  }

  // updated on index props change
  useEffect(() => {
    const updateFrame = event => {
      if (power === 'freeze') {
        return
      }
      const newPosition = getNewPosition(position.current, targetPosition)
      const newPathD = getPathD(event, points.current, newPosition)
      position.current = newPosition
      setPathD(newPathD)
    }

    // REVIEW: rewrite to sub/pub
    window.addEventListener('RAF', updateFrame)

    return () => {
      window.removeEventListener('RAF', updateFrame)
    }
  }, [power, targetPosition])

  useEffect(() => {
    if (power) {
      const timeout = setTimeout(cancelPower, power === 'grow' ? 6000 : 4000)

      return () => clearTimeout(timeout)
    }
    return undefined
  }, [cancelPower, power])

  return (
    <path
      id={`player${index}`}
      className={classNames(styles.playerCursor, { [styles.playerCursorFrozen]: power === 'freeze' })}
      strokeWidth="6"
      stroke={color}
      style={{ transition: 'stroke 1s ease' }}
      d={pathD}
    />
  )
}

function setPoints() {
  const points = []
  const slice = (Math.PI * 2) / pointsCount
  const startAngle = random(0, Math.PI * 2)

  for (let i = 0; i < pointsCount; i++) {
    const margeAngle = random(0, 0.28) // i / 1.2
    // randomize the start time of animation (we don't want the tween to go from 0 to 1, it can start directly from 0.6 for example)
    const startAnim = getNow() + i * random(0, minDuration)
    const angle = startAngle + i * slice + margeAngle
    const duration = random(minDuration, maxDuration)

    const point = {
      angle,
      duration,
      startAnim,
      x: centerX + Math.cos(angle) * random(minRadius, maxRadius),
      y: centerY + Math.sin(angle) * random(minRadius, maxRadius),
      targetMinX: centerX + Math.cos(angle) * random(minRadius, minMiddleRadius),
      targetMinY: centerY + Math.sin(angle) * random(minRadius, minMiddleRadius),
      targetMaxX: centerX + Math.cos(angle) * random(maxMiddleRadius, maxRadius),
      targetMaxY: centerY + Math.sin(angle) * random(maxMiddleRadius, maxRadius),
    }

    point.startX = point.x
    point.startY = point.y
    point.destX = point.targetMaxX
    point.destY = point.targetMaxY

    points.push(point)
  }

  return points
}

function getNewPosition(position, targetPosition) {
  let { x: targetX, y: targetY } = targetPosition
  let { x, y } = position

  targetX = clamp(targetX, -0.5, 0.5) * VB_WIDTH
  targetY = clamp(targetY, -0.5, 0.5) * VB_HEIGHT

  x += (targetX - x) * 0.1
  y += (targetY - y) * 0.1

  return { x, y }
}

function getPathD(event, points, position) {
  const { now } = event.detail
  const { x, y } = position

  // For each points of the player (organic shape)
  // Create organic shape / Tween all points
  for (let i = 0; i < points.length; i++) {
    const point = points[i]

    // From scratch tween:
    // percent is going from 0 to 1 in X seconds where X is the "duration variable".
    // Each points starting value is going to his destination value in X seconds
    // then I use easing functions to modify the value curve through time.
    const percent = (now - point.startAnim) / point.duration

    point.x = point.startX + (point.destX - point.startX) * inOutSine(percent)
    point.y = point.startY + (point.destY - point.startY) * inOutSine(percent)

    if (percent >= 1) {
      // end of animation,
      // restart animation by going back
      if (point.reverseAnim) {
        point.startX = point.x
        point.startY = point.y
        point.destX = point.targetMaxX
        point.destY = point.targetMaxY
        point.reverseAnim = false
        point.startAnim = getNow()
      } else {
        point.startX = point.x
        point.startY = point.y
        point.destX = point.targetMinX
        point.destY = point.targetMinY
        point.reverseAnim = true
        point.startAnim = getNow()
      }
    }

    // move player based on mouse
    point.x += x
    point.y += y
  }

  return cardinal(points)
}

// Create circle distorsion based on the given coordinates points
// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(points, tension = 1.2) {
  const nbPoints = points.length
  if (nbPoints < 1) {
    return 'M0 0'
  }

  let path = `M ${points[0].x} ${points[0].y} C`

  for (let i = 0; i < nbPoints; i++) {
    const p0 = points[(i - 1 + nbPoints) % nbPoints]
    const p1 = points[i]
    const p2 = points[(i + 1) % nbPoints]
    const p3 = points[(i + 2) % nbPoints]

    const x1 = p1.x + ((p2.x - p0.x) / 6) * tension
    const y1 = p1.y + ((p2.y - p0.y) / 6) * tension

    const x2 = p2.x - ((p3.x - p1.x) / 6) * tension
    const y2 = p2.y - ((p3.y - p1.y) / 6) * tension

    path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`
  }

  return `${path}z`
}

export default PlayerCursor
