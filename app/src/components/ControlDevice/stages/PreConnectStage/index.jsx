import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Circle from '../../Circle'

const PreConnectStage = props => {
  const { connectionState, errorReason, hasPlayed, token, updateToken } = props
  return (
    <div>
      <Circle color="yellow" />
      <h2 className={styles.instruction}>{`Enter the red code on the screen ${hasPlayed ? 'to play&nbsp;again' : 'to&nbsp;join'}`}</h2>
      <div className={styles.display}>
        {token}
      </div>
      <div className={styles.label}>
        <span className={styles.labelError} ng-if="phoneCtrl.errorReason !== null">{errorReason}</span>
        {connectionState === WebSocket.CONNECTION && <span className={styles.labelConnecting}>Connecting...</span>}
      </div>
      <div className={styles.tokenInput}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <div className={styles.tokenInputKey}
            key={number}
            onClick={() => updateToken(number)}>{number}</div>
        ))}
        <div
          className={styles.tokenInputKey}
          key={-1}
          onClick={() => updateToken(-1)}
        >
          ←
        </div>
      </div>
      <div class="placeholder"></div>
      <div class="bottom">
      </div>
    </div>
  )
}

export default PreConnectStage
