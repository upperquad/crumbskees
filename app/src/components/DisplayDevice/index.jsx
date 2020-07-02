import React, { useState, useEffect, useRef } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import LandingStage from './stages/LandingStage'
import IntroIlloStage from './stages/IntroIlloStage'
import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
// import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import PlayersManager from '~managers/PlayersManager'

const TRANSITION_TIMEOUTS = { enter: 1600, exit: 800 }
const CHEAT_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter',
]
const CHEAT_CODE_LENGTH = CHEAT_CODE.length

const DisplayDevice = () => {
  const [stage, setStage] = useState('landing')
  // const [errorReason, setErrorReason] = useState()
  const [allConnected, setAllConnected] = useState(false)
  const keyBuffer = useRef([])
  const [godMode, setGodMode] = useState(false)
  const forceUpdate = useForceUpdate()

  const resetGame = () => {
    PlayersManager.reset()
    setStage('setup')
  }

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    const onPlayerUpdate = () => {
      setAllConnected(PlayersManager.allConnected())
      forceUpdate()
    }
    PlayersManager.addSubscriber('player_change', onPlayerUpdate)

    return () => {
      PlayersManager.removeSubscriber('player_change', onPlayerUpdate)
    }
  }, [setAllConnected, forceUpdate])

  useEffect(() => {
    const onKeyDown = event => {
      keyBuffer.current.push(event.code)

      if (keyBuffer.current.length > CHEAT_CODE_LENGTH) {
        keyBuffer.current = keyBuffer.current.slice(keyBuffer.current.length - CHEAT_CODE_LENGTH)
      }

      if (keyBuffer.current.length === CHEAT_CODE_LENGTH &&
        keyBuffer.current.every((key, index) => key === CHEAT_CODE[index])) {
        setGodMode(true)
        // TODO: need a sound for this
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.addEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div className={styles.displayDevice}>
      <TransitionGroup>
        {stage === 'landing' && (
          <Transition key="stage-landing" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <LandingStage
                  onFinish={() => setStage('intro-illo')}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'intro-illo' && (
          <Transition key="stage-intro-illo" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <IntroIlloStage onFinish={() => setStage('setup')} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'setup' && (
          <Transition key="stage-setup" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <SetupStage onFinish={() => setStage('tutorial')} allConnected={allConnected} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'tutorial' && (
          <Transition key="stage-tutorial" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <TutorialStage
                  allConnected={allConnected}
                  rollback={() => setStage('setup')}
                  onFinish={() => {
                    setGodMode(false)
                    setStage('play')
                  }}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'play' && (
          <Transition key="stage-play" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <PlayStage
                  godMode={godMode}
                  onFinish={() => setStage('result')}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'result' && (
          <Transition key="stage-result" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ResultStage onFinish={resetGame} />
              </StageWrapper>
            )}
          </Transition>
        )}
        {/* stage === 'error' && (
          <Transition key={`stage-error-${errorReason}`} timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ErrorStage
                  reason={errorReason}
                  resetGame={resetGame}
                />
              </StageWrapper>
            )}
          </Transition>
        ) */}
      </TransitionGroup>
    </div>
  )
}

export default DisplayDevice
