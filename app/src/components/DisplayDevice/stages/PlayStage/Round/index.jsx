import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import { GAME_ROUNDS } from '~constants'

import Intro from './Intro'
import AutoplayVideo from '~components/AutoplayVideo'
import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'

const Round = props => {
  const { onRoundEnd, roundIndex, transitionStatus } = props
  const [gameState, setGameState] = useState('before-game')
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const resizeHandler = () => {
      const displayRatio = window.innerHeight / window.innerWidth
      const threshold = 9 / 16
      if (displayRatio < threshold) {
        setZoom((displayRatio / threshold) * 0.9)
      } else {
        setZoom(0.9)
      }
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  return (
    <div className={styles.roundWrapper}>
      <AutoplayVideo
        src={GAME_ROUNDS[roundIndex].background}
        extraClassName={styles.background}
        poster={GAME_ROUNDS[roundIndex].backgroundImage}
      />
      <div
        className={classNames(styles.round, { [styles.roundExiting]: transitionStatus === 'exiting' })}
        style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}
      >
        <GameZoneWrapper
          gameState={gameState}
          onRoundEnd={onRoundEnd}
          roundIndex={roundIndex}
          setGameState={setGameState}
          transitionStatus={transitionStatus}
          type="game"
        />
        <Intro
          roundIndex={roundIndex}
          onFinish={() => {
            setGameState('in-game')
          }}
        />
      </div>
    </div>

  )
}

export default Round
