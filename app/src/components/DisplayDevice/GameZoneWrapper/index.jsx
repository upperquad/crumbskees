import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import useForceUpdate from 'use-force-update'
import { TransitionGroup, Transition } from 'react-transition-group'
import PlayersManager from '~managers/PlayersManager'
import AnimationFrameManager from '~managers/AnimationFrameManager'
import { TUTORIAL_ROUND, GAME_ROUNDS, COLORS, DEBUG } from '~constants'

import styles from './style.module.scss'

import GameZone from './GameZone'
import Board from '~components/DisplayDevice/stages/PlayStage/Round/Board'
import Character from '~components/Character'

const TIME = DEBUG ? 10 : 40
const ADD_SECONDS = 5

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
  const timeAdded = useRef(0)
  const [powerArray, setPowerArray] = useState(() => PlayersManager.players.map(() => null))
  const [playersCache] = useState(() => (
    PlayersManager.players.map(player => (
      {
        lottie: player.lottie,
        slug: player.slug,
        secondaryColor: player.secondaryColor,
      }
    ))
  ))

  const addTime = () => {
    timeAdded.current = ADD_SECONDS
  }

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
        const newTime = Math.max((timeAdded.current + TIME - deltaTime), 0)

        if (newTime <= 10 && !countDownStarted.current) {
          // TODO: play countdown
          countDownStarted.current = true
        }

        if (newTime <= 0) {
          if (!gameEnded.current) {
            addMessage({
              text: 'Time\'s up!',
              color: COLORS.white,
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

  useEffect(() => {
    if (type === 'tutorial') {
      const handleAllReady = () => {
        forceUpdate()

        if (PlayersManager.allReady()) {
          setTimeout(() => {
            onFinish()
          }, 1000)
        }
      }

      handleAllReady()
      PlayersManager.addSubscriber('player_ready_change', handleAllReady)

      return () => {
        PlayersManager.removeSubscriber('player_ready_change', handleAllReady)
      }
    }

    return undefined
  }, [forceUpdate, onFinish, type])

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
              onUpdate={onUpdate}
              round={TUTORIAL_ROUND}
              itemsLevel={itemsLevel}
              setGameState={setGameState}
              setParentPowerArray={setPowerArray}
              type={type}
            />
          </div>
          <div className={styles.readyIndicators}>
            <div className={styles.readyIndicatorsTitle} data-text="Ready?">Ready?</div>
            {PlayersManager.mode === 'SINGLE' && <div className={styles.readyIndicatorPlaceHolder} />}
            {PlayersManager.players.map((player, index) => {
              const isClickable = PlayersManager.mode === 'SINGLE'
              const clickHandler = isClickable ?
                () => {
                  PlayersManager.players[index].setReady(true)
                } :
                null
              return (
                <div
                  key={playersCache[index].slug}
                  className={classNames(
                    styles.readyIndicatorWrapper,
                    styles[`readyIndicatorWrapper--${playersCache[index].slug}`],
                    { [styles.isClickable]: isClickable },
                  )}
                  role={isClickable ? 'button' : null}
                  onClick={clickHandler}
                >
                  <div
                    className={classNames(
                      styles.readyIndicator,
                      styles[`readyIndicator--${playersCache[index].secondaryColor}`],
                      { [styles.isReady]: player.ready },
                    )}
                  >
                    <div className={styles.readyIndicatorInner}>
                      <Character
                        extraClassName={styles.readyIndicatorCharacter}
                        character={playersCache[index]}
                        mood={player.ready ? 'excited' : 'happy'}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      {type === 'game' && (
        <React.Fragment>
          <div className={styles.gameContentBackground} />
          <TransitionGroup>
            {gameState !== 'before-game' && (
              <Transition key="play-stage-in-game" timeout={{ enter: 0, exit: 1300 }}>
                <div className={styles.gameContentGame}>
                  <GameZone
                    addMessage={addMessage}
                    addItemsLevel={addItemsLevel}
                    gameState={gameState}
                    message={message}
                    onUpdate={onUpdate}
                    round={GAME_ROUNDS[roundIndex]}
                    itemsLevel={itemsLevel}
                    setGameState={setGameState}
                    setParentPowerArray={setPowerArray}
                    addTime={addTime}
                    type={type}
                  />
                </div>
              </Transition>
            )}
          </TransitionGroup>

          <Board
            time={time}
            totalTime={TIME}
            itemImage={itemImage}
            items={itemsLevel}
            transitionStatus={transitionStatus}
            roundName={GAME_ROUNDS[roundIndex].roundNameText}
            powerArray={powerArray}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default GameZoneWrapper
