import round1VideoBack from '~assets/images/round_1/r1-pattern.mp4'
import round1VideoFront from '~assets/images/round_1/r1-pattern-bw.mp4'
import round1Item from '~assets/images/round_1/s1-item.png'
import round1IntroVideo from '~assets/images/round_1/s1-intro.mp4'
import round2Pattern from '~assets/images/round_2/s2-pattern.gif'
import round2Front from '~assets/images/round_2/s2-front.gif'
import round2Item from '~assets/images/round_2/s2-item.png'
import round2IntroVideo from '~assets/images/round_2/s2-intro.mp4'
import round3Pattern from '~assets/images/round_3/s3-pattern.gif'
import round3Front from '~assets/images/round_3/s3-front.gif'
import round3Item from '~assets/images/round_3/s3-item.png'
import round3IntroVideo from '~assets/images/round_3/s3-intro.mp4'
import growItem from '~assets/images/grow.png'
import freezeItem from '~assets/images/freeze.png'

import characterVideoWhite1 from '~assets/images/character-white-1.mp4'
import characterVideo1 from '~assets/images/character1.mp4'
import characterImage1 from '~assets/images/character1.png'
import characterVideoWhite2 from '~assets/images/character-white-2.mp4'
import characterVideo2 from '~assets/images/character2.mp4'
import characterImage2 from '~assets/images/character2.png'

export const DEBUG = typeof DEBUG_VALUE !== 'undefined'

export const BREAKPOINT = 768

export const VB_WIDTH = 1920

export const VB_HEIGHT = 840

export const GRID_UNIT = 60

export const GRID_UNIT_VW = (60 / 1920) * 100

export const GRID_UNIT_VH = (60 / 840) * 100

export const COLORS = {
  purple: '#6d12e3',
  red: '#ff4047',
  orange: '#ff9d21',
  blue: '#00c1ff',
}

export const CHARACTERS = [
  {
    color: 'purple',
    secondaryColor: 'red',
    video: characterVideo1,
    videoWhite: characterVideoWhite1,
    image: characterImage1,
    name: 'Player 1',
  },
  {
    color: 'red',
    secondaryColor: 'purple',
    video: characterVideo2,
    videoWhite: characterVideoWhite2,
    image: characterImage2,
    name: 'Player 2',
  },
]

export const GAME_ROUNDS = [
  {
    key: 'game-round-1',
    videoBack: round1VideoBack,
    videoFront: round1VideoFront,
    itemImage: round1Item,
    videoIntro: round1IntroVideo,
    roundNameText: 'Round\xa001',
    numItems: DEBUG ? 10 : 10,
    gridCols: 32,
    gridLines: 14,
    power: {
      type: 'grow',
      image: growItem,
      color: COLORS.orange,
    },
  }, {
    key: 'game-round-2',
    bkg: round2Pattern,
    frontBkg: round2Front,
    itemImage: round2Item,
    videoIntro: round2IntroVideo,
    roundNameText: 'Round\xa002',
    numItems: DEBUG ? 2 : 10,
    gridCols: 32,
    gridLines: 14,
    power: {
      type: 'freeze',
      image: freezeItem,
      color: COLORS.blue,
    },
  }, {
    key: 'game-round-3',
    bkg: round3Pattern,
    frontBkg: round3Front,
    itemImage: round3Item,
    videoIntro: round3IntroVideo,
    roundNameText: 'Last\xa0round',
    numItems: DEBUG ? 2 : 10,
    gridCols: 32,
    gridLines: 14,
    power: {
      type: 'grow',
      image: growItem,
      color: COLORS.orange,
    },
  },
]
