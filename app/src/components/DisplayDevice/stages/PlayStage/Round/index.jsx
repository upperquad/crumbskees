import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'

import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import { GAME_ROUNDS, COLORS } from '~constants'

import PlayersManager from '~managers/PlayersManager'
import Board from './Board'
import Intro from './Intro'
import GameZone from '~components/DisplayDevice/GameZone'

const TIME = 40

const Round = props => {
  const { onRoundEnd, roundIndex, transitionStatus } = props
  const { itemImage } = GAME_ROUNDS[roundIndex]
  const [time, setTime] = useState(TIME)
  const [message, setMessage] = useState({ messageCount: 0 })
  const [gameState, setGameState] = useState('before-game')
  const [roundScoreArray, setRoundScoreArray] = useState(() => PlayersManager.players.map(() => 0))
  const forceUpdate = useForceUpdate()

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  const addRoundScoreArray = (score, index) => {
    setRoundScoreArray(prevScoreArray => {
      prevScoreArray[index] += score
      return [...prevScoreArray]
    })
  }

  const onUpdate = () => {
    forceUpdate()
  }

  // Timer
  useEffect(() => {
    if (gameState === 'in-game') {
      const timerInterval = setInterval(() => {
        setTime(prevTime => {
          const newTime = prevTime - 1

          if (newTime === 0) {
            addMessage({
              text: "Time's up!",
              color: COLORS.red,
              persistent: true,
              onEnd: () => setGameState('after-game'),
            })
          } else if (newTime === 10) {
            SoundManager.countdown.play()
          }

          return newTime >= 0 ? newTime : 0
        })
      }, 1000)

      return () => {
        clearInterval(timerInterval)
      }
    }

    if (gameState === 'after-game') {
      const timeout = setTimeout(onRoundEnd, 3000)

      return () => {
        clearTimeout(timeout)
      }
    }

    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState])

  return (
    <div className={classNames(styles.round, { [styles.roundExiting]: transitionStatus === 'exiting' })}>
      <TransitionGroup>
        {gameState !== 'before-game' && (
          <Transition key="play-stage-in-game" timeout={{ enter: 0, exit: 1300 }}>
            <div className={classNames(styles.gameContent)}>
              <GameZone
                addMessage={addMessage}
                addRoundScoreArray={addRoundScoreArray}
                gameState={gameState}
                message={message}
                onUpdate={onUpdate}
                round={GAME_ROUNDS[roundIndex]}
                roundScoreArray={roundScoreArray}
                setGameState={setGameState}
                setTime={setTime}
                type="game"
              />
            </div>
          </Transition>
        )}
      </TransitionGroup>

      <Board time={time} itemImage={itemImage} scores={roundScoreArray} transitionStatus={transitionStatus} />
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
