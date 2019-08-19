import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

const PlayStage = props => {
  return (
    {/* big cursor */}
    <div class="game" game>
      {/* playing scene */}
      <div class="scene" scene>
        <img class="scene__frontBkg" />
        <img class="scene__reveal" />
        <div class="scene__wrapper">
          {/* svg scene for masks etc... */}
          <svg class="scene-svg" viewBox="0 0 1920 840" stroke="black">
            <defs>
              <clipPath class="scene-svg__clippath">
                <use xlinkHref="#player1" />
                <use xlinkHref="#player2" />
              </clipPath>
            </defs>
            <path id="player1" class="cursor" stroke-width="6"></path>
            <path id="player2" class="cursor" stroke-width="6"></path>
            <g class="scene-svg__clippath-ref" width="1920px" height="840px">
              <image class="scene-svg__image" width="1920px" height="840px" />
            </g>
          </svg>
        </div>
        <div class="intros">
          <div class="intro">
            <div class="intro__round t-200--bold color--red">
            </div>
          </div>
          <div class="intro">
            <div class="intro__circle">
            </div>
            <div class="intro__itemToFind t-200--bold color--black text-center">
              <div class="intro__itemToFind__text t-48--bold">ITEM <br /> TO FIND</div>
            </div>
            <video width="1920px" height="840px" autoplay loop muted>
            </video>
          </div>
          <div class="intro">
            <div class="intro__ready-wrapper">
              <div class="intro__ready t-200--bold color--red">
                READY
              </div>
              <div class="intro__set t-200--bold color--red">
                SET
              </div>
            </div>
            <div class="intro__go t-200--bold color--red">
              GO
            </div>
          </div>
        </div>
      </div>
      <img src="" class="itemToFind" />
      {/* score board */}
      <div class="board">
        <div class="board__player">
          <div class="board__player__character">
            <img src="../../assets/game/images/character1.png" alt="" />
          </div>
          <div class="board__player__score color--purple t-80--bold">
            00
          </div>
          <div class="board__player__name t-48--bold">
            Player 1
          </div>
          <div class="board__player__items">
          </div>
        </div>
        <div class="board__center bkg--black">
          <div class="board__center__timer t-112--bold color--white">

          </div>
        </div>
        <div class="board__player">
          <div class="board__player__character">
            <img src="../../assets/game/images/character2.png" alt="" />
          </div>
          <div class="board__player__score color--red t-80--bold">
            00
          </div>
          <div class="board__player__name t-48--bold">
            Player 2
          </div>
          <div class="board__player__items">
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayStage
