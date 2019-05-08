import '../scss/phone.scss'
import angular from 'angular'
import PhoneController from './components/PhoneController'

const phoneApp = angular.module('phoneApp', [])
phoneApp.controller('PhoneController', ['$scope', '$element', PhoneController])

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = () => {
    window.history.go(1)
  }
}
