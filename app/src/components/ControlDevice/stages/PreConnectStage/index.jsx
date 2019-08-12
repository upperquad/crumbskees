import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './style.module.scss'

import Circle from '../../Circle'

const PreConnectStage = props => {
  const { isConnecting, errorReason, hasPlayed, token, updateToken } = props
  return (
    <div className={styles.preConnect}>
      <Circle color="yellow" />
      <h2 className={styles.instruction}>{`Enter the red code on the screen ${hasPlayed ? 'to play\xA0again' : 'to\xA0join'}`}</h2>
      <div className={styles.tokenDisplay}>
        {token}
      </div>
      <div className={styles.label}>
        {errorReason && <span className={styles.labelError}>{errorReason}</span>}
        {isConnecting && <span className={styles.labelConnecting}>Connecting...</span>}
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
      <div className={styles.placeholder}></div>
      <div className={styles.bottomPattern}>
      </div>
    </div>
  )
}

export default PreConnectStage
