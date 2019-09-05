import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import { getNow } from '~utils/time'
import { inOutSine } from '~utils/ease'
import { VB_WIDTH, VB_HEIGHT } from '~constants'
import { clamp } from '~utils/math'

import PlayersManager from '~managers/PlayersManager'

const PlayerCursor = props => {
  const { extraClassName, index, removeItem, sceneUnits } = props

  // updated on index props change
  useEffect(() => {
    const effectRAF = e => handleRAF(e, index)

    window.addEventListener('RAF', effectRAF)

    return () => {
      window.removeEventListener('RAF', effectRAF)
    }
  }, [index])

  // updated on props change
  useEffect(() => {
    const effectClick = e => handleClick(e, props, item => {
      removeItem(item)
    })

    // window.addEventListener('CLICK_PLAYER', effectClick) --> from WebSocketServer
    window.addEventListener('click', effectClick)

    return () => {
      // window.removeEventListener('CLICK_PLAYER', effectClick) --> from WebSocketServer
      window.removeEventListener('click', effectClick)
    }
  }, [props, removeItem])

  // updated on sceneUnits change
  useEffect(() => {
    const effectMouseMove = e => handleMouseMove(e, sceneUnits)

    window.addEventListener('mousemove', effectMouseMove)

    return () => {
      window.removeEventListener('mousemove', effectMouseMove)
    }
  }, [sceneUnits])

  return (
    <path
      ref={ref => {
        PlayersManager.players[index].el = ref
      }}
      id={`player${index}`}
      className={classNames(styles.cursor, extraClassName)}
      strokeWidth="6"
    />
  )
}

function handleMouseMove(e, sceneUnits) {
  if (!sceneUnits) return
  // if (window.GameManager.players[window.GameManager.playerIds[0]].frozen) return
  const scrollY = window.scrollY || document.documentElement.scrollTop
  const player = PlayersManager.players[0]

  player.eventX = e.touches ? e.touches[0].clientX : e.clientX
  player.eventX -= sceneUnits.offsetLeft
  player.eventY = e.touches ? e.touches[0].clientY : e.clientY
  player.eventY += scrollY

  player.targetX = (player.eventX / sceneUnits.width) * VB_WIDTH // because we're using viewbox units here
  player.targetX -= VB_WIDTH / 2 // because starting point is player.centerX
  player.targetY = (player.eventY / sceneUnits.height) * VB_HEIGHT - sceneUnits.offsetTop
  player.targetY -= VB_HEIGHT / 2
}

function handleClick(e, props, callback) {
  const { index, items, power } = props

  const player = PlayersManager.players[index]
  // if (scene.targetsDestroyed) return // if targets are destroy, don't listen to click event
  const x = (player.targetX / VB_WIDTH) + 0.5
  const y = (player.targetY / VB_HEIGHT) + 0.5

  if (power) {
    const distance = Math.hypot(x - power.x, y - power.y)
    if (!power.found && distance <= 0.08) {
      let playerAffected = player
      if (power.type === 'freeze') {
        // affect other player
        const playerIndex = player.index === 0 ? 1 : 0
        playerAffected = PlayersManager.players[playerIndex]

        player.freezeSound.play()
      } else {
        player.growSound.play()
      }
      playerAffected.setPower(power.type)

      power.found = true
      power.el.style.opacity = 0
      if (power.debugEl) power.debugEl.style.opacity = 0
    }
  }

  let nbItemGet = 0

  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const distance = Math.hypot(x - item.x, y - item.y)

    let minDistance = 0

    if (!player.grown) {
      minDistance = 0.08
    } else {
      minDistance = 0.19
    }

    if (!item.found && distance <= minDistance) {
      item.found = true
      // item.el.style.opacity = 0
      callback(item)
      if (item.debugEl) item.debugEl.style.opacity = 0

      nbItemGet += 1
      // kill player intervalTap
      clearInterval(player.isCloseToItemInterval)

      player.scoreSound.play()
    }
  }

  // if (nbItemGet > 0) {
  //   window.GameManager.score(player, itemImage, { x, y }, nbItemGet)
  //   scene.numItemFound += nbItemGet
  // }

  // if (scene.numItemFound === items.length && !scene.isEnded) {
  //   scene.isEnded = true
  //   window.GameManager.endScene(scene.props.message)
  // }
}

function handleRAF(e, index) {
  // console.log('raf')
  const { now } = e.detail
  // console.log(playersRef)
  // this.acceleration = this.acceleration + (this.destAcceleration - this.acceleration) * this.coefAcceleration

  const player = PlayersManager.players[index]

  if (!player.frozen) {
    // if player not frozen
    // clamp player position to limit of the scene
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
