import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import getNow from '~utils/time'
import { inOutSine } from '~utils/ease'
import { VB_WIDTH, VB_HEIGHT } from '~constants'
import { clamp } from '~utils/math'

import PlayersManager from '~managers/PlayersManager'

const PlayerCursor = props => {
  const { cancelPower, color, index, position } = props
  const _player = PlayersManager.players[index]

  // updated on index props change
  useEffect(() => {
    const effectRAF = e => handleRAF(e, _player, position)

    // REVIEW: rewrite to sub/pub
    window.addEventListener('RAF', effectRAF)

    return () => {
      window.removeEventListener('RAF', effectRAF)
    }
  }, [])

  return (
    <path
      ref={ref => {
        PlayersManager.players[index].el = ref
      }}
      id={`player${index}`}
      className={classNames(styles.cursor)}
      strokeWidth="6"
      stroke={color}
      style={{ transition: 'stroke 1s ease' }}
    />
  )
}

function handleRAF(e, player, position) {
  const { now } = e.detail
  // this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

  if (!player.frozen) {
    const { x, y } = position
    // if player not frozen
    // clamp player position to limit of the round
    const targetX = clamp(x, -VB_WIDTH / 2, VB_WIDTH / 2)
    const targetY = clamp(y, -VB_HEIGHT / 2, VB_HEIGHT / 2)

    player.x += (targetX - player.x) * 0.1
    player.y += (targetY - player.y) * 0.1

    // For each points of the player (organic shape)
    // Create organic shape / Tween all points
    for (let i = 0; i < player.points.length; i++) {
      const point = player.points[i]

      // From scratch tween:
      // percent is going from 0 to 1 in X seconds where X is the "duration variable".
      // Each points starting value is going to his destination value in X seconds
      // then I use easing functions to modify the value curve through time.
      const percent = (now - point.startAnim) / point.duration
      // const percent = ((now - point.startAnim) / point.duration) * this.acceleration

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
      point.x += player.x
      point.y += player.y
    }
  }

  if (player.el) {
    player.el.setAttribute('d', cardinal(player.points))
  }
}

// Create circle distorsion based on the given coordinates points
// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(points, tension = 1.2) {
  // 1 tension does not make a perfect round, why?
  const nbPoints = points.length
  if (nbPoints < 1) return 'M0 0'

  let path = `M ${points[0].x} ${points[0].y} C`
  // where M is the starting X,Y coords
  // C is the 3 next points coord of a Cubic bezier

  for (let i = 0; i < nbPoints; i++) {
    const p0 = points[(i - 1 + nbPoints) % nbPoints]
    const p1 = points[i]
    const p2 = points[(i + 1) % nbPoints]
    const p3 = points[(i + 2) % nbPoints]

    const x1 = p1.x + ((p2.x - p0.x) / 6) * tension
    const y1 = p1.y + ((p2.y - p0.y) / 6) * tension

    const x2 = p2.x - ((p3.x - p1.x) / 6) * tension
    const y2 = p2.y - ((p3.y - p1.y) / 6) * tension

    // cubic Bezier
    // x1 | The x-axis coordinate of the first control point.
    // y1 | The y-axis coordinate of the first control point.
    // x2 | The x-axis coordinate of the second control point.
    // y2 | The y-axis coordinate of the second control point.
    // p2.x | The x-axis coordinate of the end point.
    // p2.y | The y-axis coordinate of the end point.
    path += ` ${x1} ${y1} ${x2} ${y2} ${p2.x} ${p2.y}`
  }

  return `${path}z` // close path with z
}

export default PlayerCursor
