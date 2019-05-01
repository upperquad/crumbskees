/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/phone.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/components/PhoneController.js":
/*!******************************************!*\
  !*** ./js/components/PhoneController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhoneController = function PhoneController() {
  var _this = this;

  _classCallCheck(this, PhoneController);

  _defineProperty(this, "handleTouchStart", function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this.touchBubble.classList.add('is-touching');
  });

  _defineProperty(this, "handleTouchMove", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    _this.touchBubble.style.left = clientX;
    _this.touchBubble.style.top = clientY;

    _this.websocket.send("".concat(clientX / window.innerWidth, ", ").concat(clientY / window.innerHeight));
  });

  _defineProperty(this, "handleTouchEnd", function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this.touchBubble.classList.remove('is-touching');
  });

  this.host = window.location.origin.replace(/^http/, 'ws');
  this.websocket = new WebSocket("".concat(this.host, "/phone"));
  this.touchpad = document.getElementById('touchpad');
  this.touchBubble = document.getElementById('touch-bubble');
  this.touchpad.addEventListener('touchstart', this.handleTouchStart, {
    passive: false
  });
  this.touchpad.addEventListener('touchmove', this.handleTouchMove, {
    passive: false
  });
  this.touchpad.addEventListener('touchend', this.handleTouchEnd, {
    passive: false
  });
};



/***/ }),

/***/ "./js/phone.js":
/*!*********************!*\
  !*** ./js/phone.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_phone_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/phone.scss */ "./scss/phone.scss");
/* harmony import */ var _scss_phone_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_phone_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PhoneController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PhoneController */ "./js/components/PhoneController.js");


new _components_PhoneController__WEBPACK_IMPORTED_MODULE_1__["default"]();

/***/ }),

/***/ "./scss/phone.scss":
/*!*************************!*\
  !*** ./scss/phone.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9QaG9uZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9waG9uZS5zY3NzPzYwMjgiXSwibmFtZXMiOlsiUGhvbmVDb250cm9sbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvdWNoQnViYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2Vic29ja2V0Iiwic2VuZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlbW92ZSIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJ0b3VjaHBhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG91Y2hTdGFydCIsInBhc3NpdmUiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGcUJBLGUsR0FDbkIsMkJBQWM7QUFBQTs7QUFBQTs7QUFBQSw0Q0FXSyxVQUFBQyxLQUFLLEVBQUk7QUFDMUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBRCxTQUFLLENBQUNFLGVBQU47O0FBQ0EsU0FBSSxDQUFDQyxXQUFMLENBQWlCQyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsYUFBL0I7QUFDRCxHQWZhOztBQUFBLDJDQWlCSSxVQUFBTCxLQUFLLEVBQUk7QUFDekJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBRCxTQUFLLENBQUNFLGVBQU47QUFGeUIsMEJBR0lGLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FISjtBQUFBLFFBR2pCQyxPQUhpQixtQkFHakJBLE9BSGlCO0FBQUEsUUFHUkMsT0FIUSxtQkFHUkEsT0FIUTtBQUl6QixTQUFJLENBQUNMLFdBQUwsQ0FBaUJNLEtBQWpCLENBQXVCQyxJQUF2QixHQUE4QkgsT0FBOUI7QUFDQSxTQUFJLENBQUNKLFdBQUwsQ0FBaUJNLEtBQWpCLENBQXVCRSxHQUF2QixHQUE2QkgsT0FBN0I7O0FBRUEsU0FBSSxDQUFDSSxTQUFMLENBQWVDLElBQWYsV0FBdUJOLE9BQU8sR0FBR08sTUFBTSxDQUFDQyxVQUF4QyxlQUF1RFAsT0FBTyxHQUFHTSxNQUFNLENBQUNFLFdBQXhFO0FBQ0QsR0F6QmE7O0FBQUEsMENBMkJHLFVBQUFoQixLQUFLLEVBQUk7QUFDeEJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBRCxTQUFLLENBQUNFLGVBQU47O0FBQ0EsU0FBSSxDQUFDQyxXQUFMLENBQWlCQyxTQUFqQixDQUEyQmEsTUFBM0IsQ0FBa0MsYUFBbEM7QUFDRCxHQS9CYTs7QUFDWixPQUFLQyxJQUFMLEdBQVlKLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLE9BQXZCLENBQStCLE9BQS9CLEVBQXdDLElBQXhDLENBQVo7QUFDQSxPQUFLVCxTQUFMLEdBQWlCLElBQUlVLFNBQUosV0FBaUIsS0FBS0osSUFBdEIsWUFBakI7QUFDQSxPQUFLSyxRQUFMLEdBQWdCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBaEI7QUFDQSxPQUFLdEIsV0FBTCxHQUFtQnFCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFuQjtBQUVBLE9BQUtGLFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsWUFBL0IsRUFBNkMsS0FBS0MsZ0JBQWxELEVBQW9FO0FBQUVDLFdBQU8sRUFBRTtBQUFYLEdBQXBFO0FBQ0EsT0FBS0wsUUFBTCxDQUFjRyxnQkFBZCxDQUErQixXQUEvQixFQUE0QyxLQUFLRyxlQUFqRCxFQUFrRTtBQUFFRCxXQUFPLEVBQUU7QUFBWCxHQUFsRTtBQUNBLE9BQUtMLFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsVUFBL0IsRUFBMkMsS0FBS0ksY0FBaEQsRUFBZ0U7QUFBRUYsV0FBTyxFQUFFO0FBQVgsR0FBaEU7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ1ZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUk3QixtRUFBSixHOzs7Ozs7Ozs7OztBQ0hBLHVDIiwiZmlsZSI6ImpzL3Bob25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcGhvbmUuanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaG9uZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJylcbiAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5ob3N0fS9waG9uZWApXG4gICAgdGhpcy50b3VjaHBhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3VjaHBhZCcpXG4gICAgdGhpcy50b3VjaEJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3VjaC1idWJibGUnKVxuXG4gICAgdGhpcy50b3VjaHBhZC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgdGhpcy50b3VjaHBhZC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAgIHRoaXMudG91Y2hwYWQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVRvdWNoRW5kLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gIH1cblxuICBoYW5kbGVUb3VjaFN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHRoaXMudG91Y2hCdWJibGUuY2xhc3NMaXN0LmFkZCgnaXMtdG91Y2hpbmcnKVxuICB9XG5cbiAgaGFuZGxlVG91Y2hNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQudG91Y2hlc1swXVxuICAgIHRoaXMudG91Y2hCdWJibGUuc3R5bGUubGVmdCA9IGNsaWVudFhcbiAgICB0aGlzLnRvdWNoQnViYmxlLnN0eWxlLnRvcCA9IGNsaWVudFlcblxuICAgIHRoaXMud2Vic29ja2V0LnNlbmQoYCR7Y2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRofSwgJHtjbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0fWApXG4gIH1cblxuICBoYW5kbGVUb3VjaEVuZCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB0aGlzLnRvdWNoQnViYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXRvdWNoaW5nJylcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zY3NzL3Bob25lLnNjc3MnXG5pbXBvcnQgUGhvbmVDb250cm9sbGVyIGZyb20gJy4vY29tcG9uZW50cy9QaG9uZUNvbnRyb2xsZXInXG5cbm5ldyBQaG9uZUNvbnRyb2xsZXIoKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==