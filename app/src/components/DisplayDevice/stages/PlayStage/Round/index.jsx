import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

import Intro from './Intro'

import GameZoneWrapper from '~components/DisplayDevice/GameZoneWrapper'

const Round = props => {
  const { onRoundEnd, roundIndex, transitionStatus } = props
  const [gameState, setGameState] = useState('before-game')

  return (
    <div className={classNames(styles.round, { [styles.roundExiting]: transitionStatus === 'exiting' })}>
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
  )
}

export default Round
