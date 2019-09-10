// Maybe put this file in a Data/ folder?

import { ORANGE, BLUE } from '~utils/colors'

// assets
import scene1Pattern from '~assets/images/scene_1/s1-pattern.gif'
import scene1Front from '~assets/images/scene_1/s1-front.gif'
import scene1Item from '~assets/images/scene_1/s1-item.png'
import scene1IntroVideo from '~assets/images/scene_1/s1-intro.mp4'
import scene2Pattern from '~assets/images/scene_2/s2-pattern.gif'
import scene2Front from '~assets/images/scene_2/s2-front.gif'
import scene2Item from '~assets/images/scene_2/s2-item.png'
import scene2IntroVideo from '~assets/images/scene_2/s2-intro.mp4'
import scene3Pattern from '~assets/images/scene_3/s3-pattern.gif'
import scene3Front from '~assets/images/scene_3/s3-front.gif'
import scene3Item from '~assets/images/scene_3/s3-item.png'
import scene3IntroVideo from '~assets/images/scene_3/s3-intro.mp4'
import growItem from '~assets/images/grow.png'
import freezeItem from '~assets/images/freeze.png'

const scenes = [
  {
    bkg: scene1Pattern,
    frontBkg: scene1Front,
    itemImage: scene1Item,
    videoIntro: scene1IntroVideo,
    numItems: 2,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'DOPE.',
    delayGif: 1000,
    power: {
      type: 'grow',
      image: growItem,
      color: ORANGE,
    },
  }, {
    bkg: scene2Pattern,
    frontBkg: scene2Front,
    itemImage: scene2Item,
    videoIntro: scene2IntroVideo,
    numItems: 10,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'GOOD JOB!',
    delayGif: 2750,
    power: {
      type: 'freeze',
      image: freezeItem,
      color: BLUE,
    },
  }, {
    bkg: scene3Pattern,
    frontBkg: scene3Front,
    itemImage: scene3Item,
    videoIntro: scene3IntroVideo,
    numItems: 1,
    gridCols: 32,
    gridLines: 14,
    endMessage: 'AWESOME!',
    delayGif: 0,
    power: {
      type: 'grow',
      image: growItem,
      color: ORANGE,
    },
  },
]

export default scenes
