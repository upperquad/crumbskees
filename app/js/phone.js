import '../scss/phone.scss'
import PhoneController from './components/PhoneController'

new PhoneController()

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = () => {
    window.history.go(1)
  }
}
