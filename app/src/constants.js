import round1Pattern from '~assets/images/round_1/s1-pattern.gif'
import round1Front from '~assets/images/round_1/s1-front.gif'
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

export const DEBUG = false

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

export const GAME_ROUNDS = [
  {
    bkg: round1Pattern,
    frontBkg: round1Front,
    itemImage: round1Item,
    videoIntro: round1IntroVideo,
    numItems: 10,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'DOPE.',
    delayGif: 1000,
    power: {
      type: 'grow',
      image: growItem,
      color: COLORS.orange,
    },
  }, {
    bkg: round2Pattern,
    frontBkg: round2Front,
    itemImage: round2Item,
    videoIntro: round2IntroVideo,
    numItems: 10,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'GOOD JOB!',
    delayGif: 2750,
    power: {
      type: 'freeze',
      image: freezeItem,
      color: COLORS.blue,
    },
  }, {
    bkg: round3Pattern,
    frontBkg: round3Front,
    itemImage: round3Item,
    videoIntro: round3IntroVideo,
    numItems: 1,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'AWESOME!',
    delayGif: 0,
    power: {
      type: 'grow',
      image: growItem,
      color: COLORS.orange,
    },
  },
]
