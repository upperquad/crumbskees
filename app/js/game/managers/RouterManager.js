import setupTmp from '../../../templates/game-stages/setup.html'
import tutorialTmp from '../../../templates/game-stages/tutorial.html'
import gameTmp from '../../../templates/game-stages/game.html'
import finalTmp from '../../../templates/game-stages/final.html'


export default class RouterManager {
  constructor() {
    this.main = document.querySelector('.main')
  }

  goTo(scene, callback) {
    let tmp = ''
    switch (scene) {
      default:
        break
      case 'setup':
        tmp = setupTmp
        break
      case 'tutorial':
        tmp = tutorialTmp
        break
      case 'game':
        tmp = gameTmp
        break
      case 'final':
        tmp = finalTmp
        break
      case 'error_game_exist':
        tmp = 'An active game is running somewhere else'
    }

    this.main.classList.remove('transition-in')
    this.main.classList.add('transition-out')

    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.main.innerHTML = tmp
      this.main.classList.add('transition-in')
      if (callback) {
        callback()
      }
    }, 1400)
  }
}
