import { Howl, Howler } from 'howler'
import Observable from '~managers/abstracts/Observable'

import musicLanding from '~assets/sounds/music-landing.mp3'
import musicLandingWebm from '~assets/sounds/music-landing.webm'
import musicSetup from '~assets/sounds/music-setup.mp3'
import musicSetupWebm from '~assets/sounds/music-setup.webm'
import musicPlay from '~assets/sounds/music-play.mp3'
import musicPlayWebm from '~assets/sounds/music-play.webm'
import musicResult from '~assets/sounds/music-result.mp3'
import musicResultWebm from '~assets/sounds/music-result.webm'
import soundMunch from '~assets/sounds/munch.wav'
import soundPlayerJoin from '~assets/sounds/player-join.wav'
import soundPlayerReady from '~assets/sounds/player-ready.wav'
import soundPowerFreeze from '~assets/sounds/power-freeze.wav'
import soundPowerGrow from '~assets/sounds/power-grow.wav'
import soundSnackBad from '~assets/sounds/snack-bad.wav'
import soundSnackGood from '~assets/sounds/snack-good.wav'

Howler.autoSuspend = false

class SoundManager extends Observable {
  constructor() {
    super()

    if (!SoundManager.instance) {
      SoundManager.instance = this

      this._musics = {
        landing: new Howl({ src: [musicLandingWebm, musicLanding], loop: true }),
        setup: new Howl({ src: [musicSetupWebm, musicSetup], loop: true }),
        play: new Howl({ src: [musicPlayWebm, musicPlay], loop: true }),
        result: new Howl({ src: [musicResultWebm, musicResult], loop: true }),
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
      this.muted = false
      this.firstMusicPlayed = false
      this.currentMusic = null
    }

    return SoundManager.instance
  }

  playSound = name => {
    if (!this.muted) {
      if (!this.firstMusicPlayed) {
        this._sounds[name].on('play', () => {
          this.firstMusicPlayed = true
          this._callObservers('UPDATED')
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
    if (prevMusic && !isUnmute) {
      this._musics[prevMusic].off('fade')
      this._musics[prevMusic].once('fade', () => {
        this._musics[prevMusic].stop()
      })
      this._musics[prevMusic].fade(1, 0, 1000)
    }

    if (!this.muted || isUnmute) {
      if (!this.firstMusicPlayed) {
        this._musics[this.currentMusic].on('play', () => {
          this.firstMusicPlayed = true
          this._callObservers('UPDATED')
        })
      }

      this._musics[this.currentMusic].off('fade')
      this._musics[this.currentMusic].volume(1)
      this._musics[this.currentMusic].play()
    }
  }

  mute = () => {
    if (this.currentMusic && !this.muted) {
      this._musics[this.currentMusic].off('fade')
      this._musics[this.currentMusic].once('fade', () => {
        this._musics[this.currentMusic].stop()
      })
      this._musics[this.currentMusic].fade(1, 0, 1000)
    }

    Object.keys(this._sounds).forEach(key => this._sounds[key].stop())

    this.muted = true
  }

  unmute = () => {
    if (this.currentMusic && this.muted) {
      this.playMusic(this.currentMusic, true)
    }
    this.muted = false
  }

  toggleMute = () => {
    if (this.muted) {
      this.unmute()
    } else {
      this.mute()
    }
    this._callObservers('UPDATED')
  }
}

export default new SoundManager()
