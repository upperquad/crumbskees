import '../../scss/game/style.scss'

import './managers/RAFManager'
import GameManager from './managers/GameManager'
import RouterManager from './managers/RouterManager'

// not working anymore for some reason
(() => {
  // use when DOM is ready
  window.RouterManager = new RouterManager()
  window.GameManager = new GameManager()
})()
