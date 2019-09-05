// Maybe put this file in a Data/ folder?

// assets
import scene1Pattern from '~assets/images/round_1/r1-pattern.gif'
import scene1Front from '~assets/images/round_1/r1-front.gif'
import scene1Item from '~assets/images/round_1/r1-item.png'
import scene1IntroVideo from '~assets/images/round_1/r1-intro.mp4'
import scene2Pattern from '~assets/images/round_2/r2-pattern.gif'
import scene2Front from '~assets/images/round_2/r2-front.gif'
import scene2Item from '~assets/images/round_2/r2-item.png'
import scene2IntroVideo from '~assets/images/round_2/r2-intro.mp4'
import scene3Pattern from '~assets/images/round_3/r3-pattern.gif'
import scene3Front from '~assets/images/round_3/r3-front.gif'
import scene3Item from '~assets/images/round_3/r3-item.png'
import scene3IntroVideo from '~assets/images/round_3/r3-intro.mp4'
import growItem from '~assets/images/grow.png'
import freezeItem from '~assets/images/freeze.png'

const scenes = [
  {
    bkg: scene1Pattern,
    frontBkg: scene1Front,
    itemImage: scene1Item,
    videoIntro: scene1IntroVideo,
    numItems: 1,
    gridCols: 32,
    gridLines: 14,
    message: 'DOPE.',
    delayGif: 1000,
    power: {
      type: 'grow',
      image: growItem,
    },
  }, {
    bkg: scene2Pattern,
    frontBkg: scene2Front,
    itemImage: scene2Item,
    videoIntro: scene2IntroVideo,
    numItems: 10,
    gridCols: 32,
    gridLines: 14,
    message: 'GOOD JOB!',
    delayGif: 2750,
    power: {
      type: 'freeze',
      image: freezeItem,
    },
  }, {
    bkg: scene3Pattern,
    frontBkg: scene3Front,
    itemImage: scene3Item,
    videoIntro: scene3IntroVideo,
    numItems: 10,
    gridCols: 32,
    gridLines: 14,
    message: 'AWESOME!',
    delayGif: 0,
    power: {
      type: 'grow',
      image: growItem,
    },
  },
]

export default scenes
