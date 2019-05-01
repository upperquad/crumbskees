import '../scss/phone.scss'
import PhoneController from './components/PhoneController'

new PhoneController()

if (window.safari) {
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = () => {
    window.history.go(1)
  }
}
