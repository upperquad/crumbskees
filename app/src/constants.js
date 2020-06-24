import round1VideoBack from '~assets/images/round-1/r1-pattern.mp4'
import round1VideoFront from '~assets/images/round-1/r1-pattern-bw.mp4'
import round1IntroVideo from '~assets/images/round-1/s1-intro.mp4'
import round1Background from '~assets/images/round-1/s1-bg.mp4'
import round1BackgroundImage from '~assets/images/round-1/s1-bg.jpg'
import round2VideoBack from '~assets/images/round-2/r2-pattern.mp4'
import round2VideoFront from '~assets/images/round-2/r2-pattern-bw.mp4'
import round2IntroVideo from '~assets/images/round-2/s2-intro.mp4'
import round2Background from '~assets/images/round-2/s2-bg.mp4'
import round2BackgroundImage from '~assets/images/round-2/s2-bg.jpg'
import round3VideoBack from '~assets/images/round-3/r3-pattern.mp4'
import round3VideoFront from '~assets/images/round-3/r3-pattern-bw.mp4'
import round3IntroVideo from '~assets/images/round-3/s3-intro.mp4'
import round3Background from '~assets/images/round-3/s3-bg.mp4'
import round3BackgroundImage from '~assets/images/round-3/s3-bg.jpg'

import characterBody1 from '~assets/images/characters/body-1.svg'
import characterBody2 from '~assets/images/characters/body-2.svg'
import characterMouth1 from '~assets/images/characters/mouth-1.svg'
import characterMouth2 from '~assets/images/characters/mouth-2.svg'
import characterFinger1 from '~assets/images/characters/finger-1.json'
import characterFinger2 from '~assets/images/characters/finger-2.json'
import characterMouth1Sequence1 from '~assets/images/characters/mouth-1/1.png'
import characterMouth1Sequence2 from '~assets/images/characters/mouth-1/2.png'
import characterMouth1Sequence3 from '~assets/images/characters/mouth-1/3.png'
import characterMouth1Sequence4 from '~assets/images/characters/mouth-1/4.png'
import characterMouth1Sequence5 from '~assets/images/characters/mouth-1/5.png'
import characterMouth1Sequence6 from '~assets/images/characters/mouth-1/6.png'
import characterMouth2Sequence1 from '~assets/images/characters/mouth-2/1.png'
import characterMouth2Sequence2 from '~assets/images/characters/mouth-2/2.png'
import characterMouth2Sequence3 from '~assets/images/characters/mouth-2/3.png'
import characterMouth2Sequence4 from '~assets/images/characters/mouth-2/4.png'
import characterMouth2Sequence5 from '~assets/images/characters/mouth-2/5.png'
import characterMouth2Sequence6 from '~assets/images/characters/mouth-2/6.png'

import goodSnack1 from '~assets/images/snacks/good/1.svg'
import goodSnack2 from '~assets/images/snacks/good/2.svg'
import goodSnack3 from '~assets/images/snacks/good/3.svg'
import goodSnack4 from '~assets/images/snacks/good/4.svg'
import goodSnack5 from '~assets/images/snacks/good/5.svg'
import goodSnack6 from '~assets/images/snacks/good/6.svg'
import goodSnack7 from '~assets/images/snacks/good/7.svg'
import goodSnack8 from '~assets/images/snacks/good/8.svg'
import goodSnack9 from '~assets/images/snacks/good/9.svg'
import goodSnack10 from '~assets/images/snacks/good/10.svg'
import goodSnack11 from '~assets/images/snacks/good/11.svg'
import goodSnack12 from '~assets/images/snacks/good/12.svg'
import goodSnack13 from '~assets/images/snacks/good/13.svg'

import badSnack1 from '~assets/images/snacks/bad/1.svg'
import badSnack2 from '~assets/images/snacks/bad/2.svg'
import badSnack3 from '~assets/images/snacks/bad/3.svg'
import badSnack4 from '~assets/images/snacks/bad/4.svg'
import badSnack5 from '~assets/images/snacks/bad/5.svg'
import badSnack6 from '~assets/images/snacks/bad/6.svg'

export const DEBUG = typeof DEBUG_VALUE !== 'undefined'

export const BREAKPOINT = 768

export const VB_WIDTH = 1920

export const VB_HEIGHT = 840

export const GRID_UNIT = 60

export const GRID_UNIT_VW = (60 / 1920) * 100

export const GRID_UNIT_VH = (60 / 840) * 100

export const GRID_COLS = 32

export const GRID_LINES = 14

export const COLORS = {
  purple: '#6d12e3',
  red: '#ff4047',
  orange: '#ff9d21',
  blue: '#00c1ff',
  pink: '#f4b7ed',
  yellow: '#ffe945',
  white: '#fff',
}

export const CHARACTERS = [
  {
    color: 'yellow',
    secondaryColor: 'red',
    slug: 'p1',
    name: 'P1',
    lottie: {
      angry: '/static/character1/angry.json',
      excited: '/static/character1/excited.json',
      freeze: '/static/character1/freeze.json',
      happy: '/static/character1/happy.json',
      lsd: '/static/character1/lsd.json',
      sad: '/static/character1/sad.json',
      win: '/static/character1/win.json',
      lose: '/static/character1/lose.json',
    },
    body: characterBody1,
    mouth: characterMouth1,
    finger: characterFinger1,
    mouthSprite: [
      characterMouth1Sequence1,
      characterMouth1Sequence2,
      characterMouth1Sequence3,
      characterMouth1Sequence4,
      characterMouth1Sequence5,
      characterMouth1Sequence6,
    ],
  },
  {
    color: 'pink',
    secondaryColor: 'purple',
    slug: 'p2',
    name: 'P2',
    lottie: {
      angry: '/static/character2/angry.json',
      excited: '/static/character2/excited.json',
      freeze: '/static/character2/freeze.json',
      happy: '/static/character2/happy.json',
      lsd: '/static/character2/lsd.json',
      sad: '/static/character2/sad.json',
      win: '/static/character2/win.json',
      lose: '/static/character2/lose.json',
    },
    body: characterBody2,
    mouth: characterMouth2,
    finger: characterFinger2,
    mouthSprite: [
      characterMouth2Sequence1,
      characterMouth2Sequence2,
      characterMouth2Sequence3,
      characterMouth2Sequence4,
      characterMouth2Sequence5,
      characterMouth2Sequence6,
    ],
  },
]

export const GOOD_SNACKS = [
  goodSnack1,
  goodSnack2,
  goodSnack3,
  goodSnack4,
  goodSnack5,
  goodSnack6,
  goodSnack7,
  goodSnack8,
  goodSnack9,
  goodSnack10,
  goodSnack11,
  goodSnack12,
  goodSnack13,
]

export const BAD_SNACKS = [
  badSnack1,
  badSnack2,
  badSnack3,
  badSnack4,
  badSnack5,
  badSnack6,
]

export const TUTORIAL_ROUND = {
  numBadItems: 0,
  numBigItems: 10,
  numRegularItems: 0,
  powers: [],
}

export const GAME_ROUNDS = [
  {
    key: 'game-round-1',
    numBadItems: 2,
    numBigItems: 5,
    numRegularItems: 5,
    powers: ['grow'],
    roundNameText: 'Round\xa001',
    videoBack: round1VideoBack,
    videoFront: round1VideoFront,
    videoIntro: round1IntroVideo,
    background: round1Background,
    backgroundImage: round1BackgroundImage,
  }, {
    key: 'game-round-2',
    numBadItems: 2,
    numBigItems: 4,
    numRegularItems: 6,
    powers: ['freeze'],
    roundNameText: 'Round\xa002',
    videoBack: round2VideoBack,
    videoFront: round2VideoFront,
    videoIntro: round2IntroVideo,
    background: round2Background,
    backgroundImage: round2BackgroundImage,
  }, {
    key: 'game-round-3',
    numBadItems: 2,
    numBigItems: 3,
    numRegularItems: 7,
    powers: ['grow'],
    roundNameText: 'Last\xa0round',
    videoBack: round3VideoBack,
    videoFront: round3VideoFront,
    videoIntro: round3IntroVideo,
    background: round3Background,
    backgroundImage: round3BackgroundImage,
  },
]
