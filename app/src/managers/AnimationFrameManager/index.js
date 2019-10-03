import getNow from '~utils/time'

class AnimationFrameManager {
  _observers = []

  addSubscriber = observer => {
    if (this._observers.length === 0) {
      this.onFrame()
    }
    this._observers.push(observer)
  }

  removeSubscriber = observer => {
    this._observers = this._observers.filter(item => item !== observer)

    if (this._observers.length === 0) {
      cancelAnimationFrame(this.frameRequest)
    }
  }

  onFrame = () => {
    const now = getNow()
    this.frameRequest = requestAnimationFrame(this.onFrame)
    this._observers.forEach(observer => observer(now))
  }
}

export default new AnimationFrameManager()
