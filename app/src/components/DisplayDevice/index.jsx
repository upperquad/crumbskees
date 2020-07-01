import React, { useState, useEffect } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import LandingStage from './stages/LandingStage'
import IntroIlloStage from './stages/IntroIlloStage'
// import ModeStage from './stages/ModeStage'
import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
// import ErrorStage from './stages/ErrorStage'
import StageWrapper from './StageWrapper'

import PlayersManager from '~managers/PlayersManager'

const TRANSITION_TIMEOUTS = 1600

const DisplayDevice = () => {
  const [stage, setStage] = useState('landing')
  // const [errorReason, setErrorReason] = useState()
  const [allConnected, setAllConnected] = useState(false)
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
        {/* stage === 'mode' && (
          <Transition key="stage-mode" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <ModeStage onFinish={() => setStage('setup')} />
              </StageWrapper>
            )}
          </Transition>
        ) */}
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
                  onFinish={() => setStage('play')}
                />
              </StageWrapper>
            )}
          </Transition>
        )}
        {stage === 'play' && (
          <Transition key="stage-play" timeout={TRANSITION_TIMEOUTS}>
            {status => (
              <StageWrapper status={status}>
                <PlayStage onFinish={() => setStage('result')} />
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
