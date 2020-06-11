import React, { useState, useEffect } from 'react'
import useForceUpdate from 'use-force-update'
import { TransitionGroup, Transition } from 'react-transition-group'
import PlayersManager from '~managers/PlayersManager'
import styles from './style.module.scss'
import SoundManager from '~managers/SoundManager'
import { TUTORIAL_ROUND, GAME_ROUNDS, COLORS } from '~constants'

import Button from '~components/Button'
import GameZone from './GameZone'
import Board from '~components/DisplayDevice/stages/PlayStage/Round/Board'

const TIME = 40

const GameZoneWrapper = props => {
  const { gameState, onFinish, onRoundEnd, roundIndex = 0, setGameState, transitionStatus, type } = props
  const { itemImage } = GAME_ROUNDS[roundIndex]
  const [time, setTime] = useState(TIME)
  const [message, setMessage] = useState({ messageCount: 0 })
  const [scoresLevel, setScoresLevel] = useState(() => PlayersManager.players.map(() => []))
  const forceUpdate = useForceUpdate()

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  const addScoresLevel = (targetsCaught, index) => {
    setScoresLevel(prevScoreArray => {
      prevScoreArray[index] = [...prevScoreArray[index], ...targetsCaught]
      return [...prevScoreArray]
    })
  }

  const removeScoresLevel = (badPoints, index) => {
    setScoresLevel(prevScoreArray => {
      for (let i = 0; i < badPoints; i++) {
        prevScoreArray[index].pop()
      }
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
              text: 'Time\'s up!',
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
    <React.Fragment>
      {type === 'tutorial' && (
        <div>
          <div className={styles.gameContentTutorial}>
            <GameZone
              addMessage={addMessage}
              addScoresLevel={addScoresLevel}
              gameState={gameState}
              message={message}
              onFinish={onFinish}
              onUpdate={onUpdate}
              removeScoresLevel={removeScoresLevel}
              round={TUTORIAL_ROUND}
              scoresLevel={scoresLevel}
              setGameState={setGameState}
              type={type}
            />
          </div>
          <div className={styles.buttons}>
            {PlayersManager.players.map((player, index) => {
              const text = `P${index + 1} ready`

              return <Button text={text} isLit={player.ready} />
            })}
          </div>
        </div>
      )}
      {type === 'game' && (
        <React.Fragment>
          <TransitionGroup>
            {gameState !== 'before-game' && (
              <Transition key="play-stage-in-game" timeout={{ enter: 0, exit: 1300 }}>
                <div className={styles.gameContent}>
                  <GameZone
                    addMessage={addMessage}
                    addScoresLevel={addScoresLevel}
                    gameState={gameState}
                    message={message}
                    onUpdate={onUpdate}
                    removeScoresLevel={removeScoresLevel}
                    round={GAME_ROUNDS[roundIndex]}
                    scoresLevel={scoresLevel}
                    setGameState={setGameState}
                    setTime={setTime}
                    type={type}
                  />
                </div>
              </Transition>
            )}
          </TransitionGroup>

          <Board time={time} itemImage={itemImage} scores={scoresLevel} transitionStatus={transitionStatus} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default GameZoneWrapper
