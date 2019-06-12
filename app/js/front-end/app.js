import '../../scss/front-end/style.scss'

import './managers/RAFManager'
import GameManager from './managers/GameManager'

// not working anymore for some reason
(() => {
  // import GameMananger when DOM is ready
  window.GameManager = new GameManager()
})()
