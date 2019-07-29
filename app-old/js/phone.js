import '../scss/phone.scss'
import angular from 'angular'
import NoSleep from 'nosleep.js'
import PhoneController from './components/PhoneController'

const phoneApp = angular.module('phoneApp', [])
phoneApp.controller('PhoneController', ['$scope', '$element', PhoneController])

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = () => {
    window.history.go(1)
  }
}

const noSleep = new NoSleep()
document.addEventListener('click', enableNoSleep, false)
function enableNoSleep() {
  document.removeEventListener('click', enableNoSleep, false)
  noSleep.enable()
}