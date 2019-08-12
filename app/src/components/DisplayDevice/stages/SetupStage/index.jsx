import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

import homeBgVideo from '../../../../assets/images/home-bg.mp4'

const SetupStage = props => {
  return (
    <>
      <video src={homeBgVideo} playsinline autoplay muted loop />
      <div class="marquee text-56">
        <div>Pull out yo smartphone camera! -&nbsp;</div><div>Pull out yo smartphone camera! -&nbsp;</div><div>Pull out yo smartphone camera! -&nbsp;</div><div>Pull out yo smartphone camera! -&nbsp;</div>
      </div>
      <div class="setup__players">
        <div class="setup__qr__wrapper">
          <div class="setup__upper">
            <div class="qr"></div>
            <div class="connected text-48--bold color--green uppercase"><span>Connected!</span></div>
          </div>
          <div class="setup__player text-48--bold uppercase">
            Player 1
          </div>
        </div>
        <div class="setup__qr__wrapper">
          <div class="setup__upper">
            <div class="qr"></div>
            <div class="connected text-48--bold color--green uppercase"><span>Connected!</span></div>
          </div>
          <div class="setup__player text-48--bold uppercase">
            Player 2
          </div>
        </div>
      </div>
      <div class="instruction">
        <span class="instruction__text">Your smart phone will be your control pad. Open your camera app and scan the code!</span>
        <div class="instruction__letsplay text-120--bold">LETS PLAY</div>
      </div>
      <footer>
        <div class="love text-14">
          Made with 🖤 by Upperquad
        </div>
        <div class="black-bar">
          <div class="whatup text-14">
            <div>What up tiny type that is scrolling -&nbsp;</div><div>What up tiny type that is scrolling -&nbsp;</div>
          </div>
          <div class="version text-24--bold uppercase">
            © 2019 Upperquad LLC. Ver. 6.35
          </div>
        </div>
      </footer>
    </>
  )
}

export default SetupStage
