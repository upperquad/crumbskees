import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { TransitionGroup, Transition } from 'react-transition-group'
import useForceUpdate from 'use-force-update'
import styles from './style.module.scss'

import SetupStage from './stages/SetupStage'
import TutorialStage from './stages/TutorialStage'
import PlayStage from './stages/PlayStage'
import ResultStage from './stages/ResultStage'
import ErrorStage from './stages/ErrorStage'

import WebSocketManager from '~managers/WebSocketManager'
import PlayersManager from '~managers/PlayersManager'

const STAGE_TRANSITION_OUT = 1300
const STAGE_TRANSITION_IN = 800

const DisplayDevice = () => {
  const [stage, setStage] = useState('play')
  const [bothConnected, setBothConnected] = useState(false)
  const forceUpdate = useForceUpdate()

  useEffect(() => {
    WebSocketManager.init('display')
    WebSocketManager.connect()
  }, [])

  // subscribe to PlayersManager
  useEffect(() => {
    // This should trigger on all children components so don't have to do this anywhere else
    PlayersManager.addSubscriber(forceUpdate)

    return () => {
      PlayersManager.removeSubscriber(forceUpdate)
    }
  }, [forceUpdate])

  // listener for error states
  useEffect(() => {
    const errorListener = event => {
      const { detail: { reason } } = event
      if (reason === 'new_game_started' || reason === 'active_game_exist') {
        // maybe also pass the error message to ErrorStage?
        setStage('error')
      }
    }
    window.addEventListener('WS_CLOSE', errorListener)

    return () => {
      window.removeEventListener('WS_CLOSE', errorListener)
    }
  }, [setStage])

  useEffect(() => {
    const messageHandler = event => {
      const { detail: { data, type } } = event

      switch (type) {
        case 'token_submit': {
          const { id, token } = data
          PlayersManager.newConnect(token, id)
          setBothConnected(PlayersManager.players.every(item => item.id))
          break
        }
        case 'phone_left': {
          const { id } = data
          PlayersManager.closeConnection(id)
          setBothConnected(PlayersManager.players.every(item => item.id))
          break
        }
        default:
          break
      }
    }
    window.addEventListener('MESSAGE', messageHandler)

    return () => {
      window.removeEventListener('MESSAGE', messageHandler)
    }
  }, [])

  return (
    <TransitionGroup>
      {stage === 'setup' && (
        <Transition
          key="stage-setup"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          {status => (
            <div
              className={classNames(styles.stageWrapper, {
                [styles.stageWrapperEntering]: status === 'entering',
                [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
              })}
            >
              <SetupStage
                extraClassName={styles.stage}
                onFinish={() => setStage('tutorial')}
                bothConnected={bothConnected}
              />
            </div>
          )}
        </Transition>
      )}
      {stage === 'tutorial' && (
        <Transition
          key="stage-tutorial"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          {status => (
            <div
              className={classNames(styles.stageWrapper, {
                [styles.stageWrapperEntering]: status === 'entering',
                [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
              })}
            >
              <TutorialStage
                extraClassName={styles.stage}
                bothConnected={bothConnected}
                rollback={() => setStage('setup')}
                onFinish={() => setStage('play')}
              />
            </div>
          )}
        </Transition>
      )}
      {stage === 'play' && (
        <Transition
          key="stage-play"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          {status => (
            <div
              className={classNames(styles.stageWrapper, {
                [styles.stageWrapperEntering]: status === 'entering',
                [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
              })}
            >
              <PlayStage extraClassName={styles.stage} onFinish={() => setStage('result')} />
            </div>
          )}
        </Transition>
      )}
      {stage === 'result' && (
        <Transition
          key="stage-result"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          {status => (
            <div
              className={classNames(styles.stageWrapper, {
                [styles.stageWrapperEntering]: status === 'entering',
                [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
              })}
            >
              <ResultStage extraClassName={styles.stage} onFinish={() => setStage('setup')} />
            </div>
          )}
        </Transition>
      )}
      {stage === 'error' && (
        <Transition
          key="stage-error"
          timeout={{ enter: STAGE_TRANSITION_IN, exit: STAGE_TRANSITION_OUT }}
        >
          {status => (
            <div
              className={classNames(styles.stageWrapper, {
                [styles.stageWrapperEntering]: status === 'entering',
                [styles.stageWrapperExiting]: status === 'exiting' || status === 'exited',
              })}
            >
              <ErrorStage extraClassName={styles.stage} />
            </div>
          )}
        </Transition>
      )}
    </TransitionGroup>
  )
}

export default DisplayDevice
