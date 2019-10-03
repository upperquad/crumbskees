export default class Observable {
  _observers = {}

  addSubscriber = (type, observer) => {
    if (!{}.hasOwnProperty.call(this._observers, type)) {
      this._observers[type] = []
    }
    this._observers[type].push(observer)
  }

  removeSubscriber = (type, observer) => {
    if ({}.hasOwnProperty.call(this._observers, type)) {
      this._observers[type] = this._observers[type].filter(item => item !== observer)
    }
  }

  _callObservers = (type, detail) => {
    if (this._observers[type]) {
      this._observers[type].forEach(observer => observer(detail))
    }
  }
}
