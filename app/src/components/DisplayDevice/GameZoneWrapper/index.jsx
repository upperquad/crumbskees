import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import { TransitionGroup, Transition } from 'react-transition-group'
import PlayersManager from '~managers/PlayersManager'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import SoundManager from '~managers/SoundManager'
import { TUTORIAL_ROUND, GAME_ROUNDS, COLORS } from '~constants'

import styles from './style.module.scss'

import GameZone from './GameZone'
import Board from '~components/DisplayDevice/stages/PlayStage/Round/Board'

const TIME = 40

const GameZoneWrapper = props => {
  const { gameState, onFinish, onRoundEnd, roundIndex = 0, setGameState, transitionStatus, type } = props
  const { itemImage } = GAME_ROUNDS[roundIndex]
  const [time, setTime] = useState(TIME)
  const [message, setMessage] = useState({ messageCount: 0 })
  const [itemsLevel, setScoresLevel] = useState(() => PlayersManager.players.map(() => []))
  const forceUpdate = useForceUpdate()
  const countDownStarted = useRef(false)
  const gameEnded = useRef(false)
  const startTime = useRef(null)

  const addMessage = messageObj => {
    setMessage(prevMessage => ({
      ...messageObj,
      messageCount: prevMessage.messageCount + 1,
    }))
  }

  const addItemsLevel = (targetsCaught, index) => {
    setScoresLevel(prevScoreArray => {
      prevScoreArray[index] = [...prevScoreArray[index], ...targetsCaught]
      return [...prevScoreArray]
    })
  }

  const onUpdate = () => {
    forceUpdate()
  }

  // Timer
  useEffect(() => {
    if (gameState === 'in-game') {
      const updateTimer = now => {
        if (startTime.current == null) {
          startTime.current = now
        }

        const deltaTime = (now - startTime.current) / 1000
        const newTime = Math.max((TIME - deltaTime), 0)

        if (newTime <= 10 && !countDownStarted.current) {
          SoundManager.countdown.play()
          countDownStarted.current = true
        }

        if (newTime <= 0) {
          if (!gameEnded.current) {
            addMessage({
              text: 'Time\'s up!',
              color: COLORS.red,
              persistent: true,
              onEnd: () => setGameState('after-game'),
            })
            gameEnded.current = true
          }
        }

        setTime(newTime)
      }

      startTime.current = null
      AnimationFrameManager.addSubscriber(updateTimer)

      return () => {
        AnimationFrameManager.removeSubscriber(updateTimer)
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
              addItemsLevel={addItemsLevel}
              gameState={gameState}
              message={message}
              onFinish={onFinish}
              onUpdate={onUpdate}
              round={TUTORIAL_ROUND}
              itemsLevel={itemsLevel}
              setGameState={setGameState}
              type={type}
            />
          </div>
          <div className={styles.readyIndicators}>
            <div className={styles.readyIndicatorsTitle}>Ready?</div>
            {PlayersManager.players.map((player, index) => (
              <div
                className={classNames(
                  styles.readyIndicator,
                  styles[`readyIndicator--${index + 1}`],
                  { [styles.isReady]: player.ready },
                )}
              />
            ))}
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
                    addItemsLevel={addItemsLevel}
                    gameState={gameState}
                    message={message}
                    onUpdate={onUpdate}
                    round={GAME_ROUNDS[roundIndex]}
                    itemsLevel={itemsLevel}
                    setGameState={setGameState}
                    setTime={setTime}
                    type={type}
                  />
                </div>
              </Transition>
            )}
          </TransitionGroup>

          <Board time={time} totalTime={TIME} itemImage={itemImage} items={itemsLevel} transitionStatus={transitionStatus} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default GameZoneWrapper
