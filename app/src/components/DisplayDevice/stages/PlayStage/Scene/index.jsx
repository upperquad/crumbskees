import React from 'react'

const Scene = () => {
  console.log('ok')
  return (
    <div class="scene" scene>
      <img class="scene__frontBkg" />
      <img class="scene__reveal" />
      <div class="scene__wrapper">
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
  )
}

export default Scene