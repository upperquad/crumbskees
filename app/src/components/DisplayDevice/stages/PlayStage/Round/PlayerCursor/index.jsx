import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import getNow from '~utils/time'
import { inOutSine } from '~utils/ease'
import { VB_WIDTH, VB_HEIGHT, DEBUG } from '~constants'
import { clamp } from '~utils/math'

import PlayersManager from '~managers/PlayersManager'

const INTERVAL_TAP = 800

const PlayerCursor = props => {
  const { extraClassName, index, items, onCatchItems, onShowTap, roundUnits } = props
  const _player = PlayersManager.players[index]

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event

      switch (type) {
        case 'cursor_move': {
          if (_player.id === data.id) {
            _player.targetX = data.x * VB_WIDTH
            _player.targetX -= VB_WIDTH / 2
            _player.targetY = data.y * VB_HEIGHT
            _player.targetY -= VB_HEIGHT / 2
          }
          break
        }
        default:
          break
      }
    }
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [])

  // updated on index props change
  useEffect(() => {
    const effectRAF = e => handleRAF(e, index)

    // REVIEW: rewrite to sub/pub
    window.addEventListener('RAF', effectRAF)

    return () => {
      window.removeEventListener('RAF', effectRAF)
    }
  }, [index])

  // updated on index, items change
  useEffect(() => {
    const effectClick = e => handleClick(e, index, items, itemsCaught => {
      onCatchItems(itemsCaught)
    })

    // REVIEW: we really need a better way to debug, this isn't even gonna be consistent
    if (DEBUG && index === 0) { // only click for player one on debug
      window.addEventListener('click', effectClick)
    } else {
      window.addEventListener('CLICK_PLAYER', effectClick) // --> from WebSocketServer
    }

    let showTapInterval

    // if player's score is 0, show tap message
    if (PlayersManager.players[index]._score === 0) {
      // call it at 0 second
      // set interval
      // Bug to fix, when clicking on a target, it clear the interval of the second player
      showTapInterval = setInterval(() => {
        showTap(index, items, () => {
          onShowTap()
        })
      }, INTERVAL_TAP)
    }

    return () => {
      if (DEBUG && index === 0) {
        window.removeEventListener('click', effectClick)
      } else {
        window.removeEventListener('CLICK_PLAYER', effectClick) // --> from WebSocketServer
      }

      clearInterval(showTapInterval)
    }
  }, [index, items, onCatchItems, onShowTap])

  // REVIEW: note to reviewer: check this again after merging
  // with control device is complete.
  // updated on roundUnits change
  useEffect(() => {
    if (DEBUG) {
      const effectMouseMove = e => handleMouseMove(e, roundUnits)

      window.addEventListener('mousemove', effectMouseMove)

      return () => {
        window.removeEventListener('mousemove', effectMouseMove)
      }
    }
    return undefined
  }, [roundUnits])


  return (
    <path
      ref={ref => {
        PlayersManager.players[index].el = ref
      }}
      id={`player${index}`}
      className={classNames(styles.cursor, extraClassName)}
      strokeWidth="6"
      stroke={PlayersManager.players[index].color}
      style={{ transition: 'stroke 1s ease' }}
    />
  )
}

function handleMouseMove(e, roundUnits) {
  if (!roundUnits) return
  // if (window.GameManager.players[window.GameManager.playerIds[0]].frozen) return
  const scrollY = window.scrollY || document.documentElement.scrollTop
  const player = PlayersManager.players[0]

  player.eventX = e.touches ? e.touches[0].clientX : e.clientX
  player.eventX -= roundUnits.offsetLeft
  player.eventY = e.touches ? e.touches[0].clientY : e.clientY
  player.eventY += scrollY

  player.targetX = (player.eventX / roundUnits.width) * VB_WIDTH // because we're using viewbox units here
  player.targetX -= VB_WIDTH / 2 // because starting point is player.centerX
  player.targetY = (player.eventY / roundUnits.height) * VB_HEIGHT - roundUnits.offsetTop
  player.targetY -= VB_HEIGHT / 2
}

function handleClick(e, index, items, onCatchItems) {
  const powers = items.filter(item => item.type !== 'target')
  const targets = items.filter(item => item.type === 'target')

  const targetsCaught = itemsInCursor(targets, index)

  const powersCaught = itemsInCursor(powers, index)

  if (targetsCaught.length > 0) {
    PlayersManager.players[index].addScore(targetsCaught.length)
  }

  // Remove items from the round
  if (targetsCaught.length > 0 || powersCaught.length > 0) {
    onCatchItems([...targetsCaught, ...powersCaught])
  }
}

function itemsInCursor(items, index, triggerPower = true) {
  const itemsCaught = []

  const player = PlayersManager.players[index]

  const x = (player.x / VB_WIDTH) + 0.5
  const y = (player.y / VB_HEIGHT) + 0.5

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    // --> need a calcul based on Ratio round
    const xPx = x * VB_WIDTH
    const itemXPx = item.x * VB_WIDTH
    const yPx = y * VB_HEIGHT
    const itemYPx = item.y * VB_HEIGHT
    const distance = Math.hypot(xPx - itemXPx, yPx - itemYPx)
    const minDistance = player.grown ? 185 : 95

    if (distance <= minDistance) {
      itemsCaught.push(item)

      if (triggerPower) {
        switch (item.type) {
          default:
            break
          case 'grow':
            player.setPower(item.type)
            break
          case 'freeze': {
            // affect other player
            const playerIndex = index === 0 ? 1 : 0
            const playerAffected = PlayersManager.players[playerIndex]
            playerAffected.setPower(item.type)
            break
          }
        }
      }
    }
  }

  return itemsCaught
}

function showTap(index, items, onShowTap) {
  // REVIEWER: optimization: stop when you find one
  const itemsCaught = itemsInCursor(items, index, false)

  if (itemsCaught.length > 0) {
    onShowTap()
  }
}

function handleRAF(e, index) {
  const { now } = e.detail
  // this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

  const player = PlayersManager.players[index]

  if (!player.frozen) {
    // if player not frozen
    // clamp player position to limit of the round
    player.targetX = clamp(player.targetX, -VB_WIDTH / 2, VB_WIDTH / 2)
    player.targetY = clamp(player.targetY, -VB_HEIGHT / 2, VB_HEIGHT / 2)

    player.x += (player.targetX - player.x) * 0.1
    player.y += (player.targetY - player.y) * 0.1

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
