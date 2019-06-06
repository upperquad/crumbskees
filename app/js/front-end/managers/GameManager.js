import gameTmp from '../../../templates/front-end/game.html'

import Game from '../components/Game'

class GameManager {
  constructor() {
    this.main = document.querySelector('.main')

    this.main.innerHTML = gameTmp

    // scores
    this.scores = [0, 0]
    this.scenes = [
      {
        bkg: '../../images/find-cat.png',
        effect: '?',
      }, {
        bkg: '../../images/find-cat.png',
        effect: '?',
      }, {
        bkg: '../../images/find-cat.png',
        effect: '?',
      }, {
        bkg: '../../images/find-cat.png',
        effect: '?',
      },
    ]
    this.currentIndex = 0

    // init components
    const game = document.querySelector('[game]')

    this.currentScene = new Game(game, this.currentIndex)
  }

  updateScene(index) {
    this.destroyScene(this.currentScene)
    this.currentScene = new Game(index)
  }

  destroyScene(scene) {
    // clean component
    if (scene.destroy instanceof Function) {
      scene.destroy()
    }
  }
}

export default new GameManager()
