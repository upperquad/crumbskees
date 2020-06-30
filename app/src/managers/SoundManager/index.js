import { Howl, Howler } from 'howler'
import musicLanding from '~assets/sounds/music-landing.mp3'
import musicSetup from '~assets/sounds/music-setup.mp3'
import musicPlay from '~assets/sounds/music-play.mp3'
import musicResult from '~assets/sounds/music-result.mp3'
import soundMunch from '~assets/sounds/munch.wav'
import soundPlayerJoin from '~assets/sounds/player-join.wav'
import soundPlayerReady from '~assets/sounds/player-ready.wav'
import soundPowerFreeze from '~assets/sounds/power-freeze.wav'
import soundPowerGrow from '~assets/sounds/power-grow.wav'
import soundSnackBad from '~assets/sounds/snack-bad.wav'
import soundSnackGood from '~assets/sounds/snack-good.wav'

Howler.autoSuspend = false

class SoundManager {
  constructor() {
    if (!SoundManager.instance) {
      SoundManager.instance = this

      this._musics = {
        landing: new Howl({ src: [musicLanding] }),
        setup: new Howl({ src: [musicSetup] }),
        play: new Howl({ src: [musicPlay] }),
        result: new Howl({ src: [musicResult] }),
      }
      this._sounds = {
        munch: new Howl({ src: [soundMunch] }),
        playerJoin: new Howl({ src: [soundPlayerJoin] }),
        playerReady: new Howl({ src: [soundPlayerReady] }),
        powerFreeze: new Howl({ src: [soundPowerFreeze] }),
        powerGrow: new Howl({ src: [soundPowerGrow] }),
        snackBad: new Howl({ src: [soundSnackBad] }),
        snackGood: new Howl({ src: [soundSnackGood] }),
      }
      this.mute = false
      this.firstMusicPlayed = false
      this.currentMusic = null
    }

    return SoundManager.instance
  }

  playSound = name => {
    if (!this.mute) {
      if (!this.firstMusicPlayed) {
        this._sounds[name].on('play', () => {
          this.firstMusicPlayed = true
        })
      }

      this._sounds[name].play()
    }
  }

  playMusic = (name, isUnmute = false) => {
    if (name === this.currentMusic && !isUnmute) {
      return
    }

    const prevMusic = this.currentMusic
    this.currentMusic = name
    if (prevMusic) {
      this._musics[prevMusic].fade(1, 0, 1000)
    }

    if (!this.mute) {
      if (!this.firstMusicPlayed) {
        this._musics[this.currentMusic].on('play', () => {
          this.firstMusicPlayed = true
        })
      }

      this._musics[this.currentMusic].play()
    }
  }

  mute = () => {
    if (this.currentMusic && !this.mute) {
      this._musics[this.currentMusic].fade(1, 0, 1000)
    }

    this.mute = true
  }

  unmute = () => {
    if (this.currentMusic && this.mute) {
      this.playMusic(this.currentMusic, true)
    }

    this.mute = false
  }
}

export default new SoundManager()
