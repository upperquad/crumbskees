import React, { useState } from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import PlayersManager from '~managers/PlayersManager'
import styles from './style.module.scss'
import { TUTORIAL_ROUND } from '~constants'

import Button from '~components/Button'
import GameZone from '~components/DisplayDevice/GameZone'

import imageHelper from '~assets/images/tutorial/helper.png'

const TutorialStage = props => {
  const { extraClassName, onFinish } = props
  const [message, setMessage] = useState({ messageCount: 0 })
  const [gameState, setGameState] = useState('before-game')
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))

  return (
    <div className={classNames(styles.tutorial, extraClassName)}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.title}>warm up!</div>
          <div className={styles.description}>
            Practice using your phone or your mouse to catch the objects before the time runs out by clicking or tapping
            them! Hit play when you’re ready. Find powerups to help!
          </div>
          <img className={styles.image} src={imageHelper} alt="" />
        </div>
        <div className={styles.gameContent}>
          <GameZone
            type="tutorial"
            round={TUTORIAL_ROUND}
            onFinish={onFinish}
            roundScoreArray={roundScoreArray}
            setRoundScoreArray={setRoundScoreArray}
            gameState={gameState}
            setGameState={setGameState}
            message={message}
            setMessage={setMessage}
          />
          <div className={styles.buttons}>
            {PlayersManager.players.map((player, index) => {
              const text = `P${index + 1} ready`

              return <Button text={text} ready={player.ready} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialStage
