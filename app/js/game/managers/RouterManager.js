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
    }

    this.main.classList.remove('transition-in')
    this.main.classList.add('transition-out')

    setTimeout(() => {
      this.main.innerHTML = tmp
      this.main.classList.add('transition-in')
      callback()
    }, 1000)
  }
}
