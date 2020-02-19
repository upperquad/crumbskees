import { Howl } from 'howler'
import score from '~assets/sounds/score.mp3'
import freeze from '~assets/sounds/freeze.mp3'
import grow from '~assets/sounds/grow.mp3'
import countdown from '~assets/sounds/countdown.mp3'

const SoundManager = {
  score: new Howl({
    src: [score],
  }),
  freeze: new Howl({
    src: [freeze],
  }),
  grow: new Howl({
    src: [grow],
  }),
  countdown: new Howl({
    src: [countdown],
  }),
  // missing winner and woosh sounds
}

export default SoundManager
