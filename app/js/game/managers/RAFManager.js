import createCustomEvent from '../utils/createCustomEvent'

class RAFManager {
  constructor() {
    this.handleRAF(0)
  }

  handleRAF = now => {
    // now === time in ms
    this.raf = requestAnimationFrame(this.handleRAF)
    window.dispatchEvent(createCustomEvent('RAF', { now }))
  }

  restart = () => {
    this.handleRAF(0)
  }

  cancel = () => {
    cancelAnimationFrame(this.raf)
  }
}

export default new RAFManager()
