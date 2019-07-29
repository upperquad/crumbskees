import setupTemplate from '../../../templates/game-stages/setup.html'
import tutorialTemplate from '../../../templates/game-stages/tutorial.html'
import gameTemplate from '../../../templates/game-stages/game.html'
import finalTemplate from '../../../templates/game-stages/final.html'
import errorTemplate from '../../../templates/game-stages/error.html'


export default class RouterManager {
  constructor() {
    this.main = document.querySelector('.main')
  }

  goTo(scene, callback) {
    let template = ''
    switch (scene) {
      default:
        break
      case 'setup':
        template = setupTemplate
        break
      case 'tutorial':
        template = tutorialTemplate
        break
      case 'game':
        template = gameTemplate
        break
      case 'final':
        template = finalTemplate
        break
      case 'error':
        template = errorTemplate
    }

    this.main.classList.remove('transition-in')
    this.main.classList.add('transition-out')

    clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      this.main.innerHTML = template
      this.main.classList.add('transition-in')
      if (callback) {
        callback()
      }
    }, 1400)
  }
}
