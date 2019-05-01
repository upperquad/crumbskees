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
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;

    _this.updatePosition(clientX, clientY);

    _this.touchBubble.classList.add('is-touching');
  });

  _defineProperty(this, "handleTouchMove", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var _event$touches$2 = event.touches[0],
        clientX = _event$touches$2.clientX,
        clientY = _event$touches$2.clientY;

    _this.updatePosition(clientX, clientY);
  });

  _defineProperty(this, "handleTouchEnd", function (event) {
    event.preventDefault();
    event.stopPropagation();

    _this.touchBubble.classList.remove('is-touching');
  });

  _defineProperty(this, "updatePosition", function (clientX, clientY) {
    _this.touchBubble.style.left = clientX;
    _this.touchBubble.style.top = clientY;

    _this.websocket.send("".concat(clientX / window.innerWidth, ", ").concat(clientY / window.innerHeight));
  });

  this.host = window.location.origin.replace(/^http/, 'ws');
  this.websocket = new WebSocket("".concat(this.host, "/phone?token=123"));
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

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  window.history.pushState(null, null, window.location.href);

  window.onpopstate = function () {
    window.history.go(1);
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9QaG9uZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcGhvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9waG9uZS5zY3NzIl0sIm5hbWVzIjpbIlBob25lQ29udHJvbGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1cGRhdGVQb3NpdGlvbiIsInRvdWNoQnViYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2Vic29ja2V0Iiwic2VuZCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJXZWJTb2NrZXQiLCJ0b3VjaHBhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlVG91Y2hTdGFydCIsInBhc3NpdmUiLCJoYW5kbGVUb3VjaE1vdmUiLCJoYW5kbGVUb3VjaEVuZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJNU1N0cmVhbSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJocmVmIiwib25wb3BzdGF0ZSIsImdvIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFp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LEM7Ozs7Ozs7Ozs7Ozs7O0FDVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBSTlCLG1FQUFKOztBQUVBLElBQUksbUJBQW1CaUMsSUFBbkIsQ0FBd0JDLFNBQVMsQ0FBQ0MsU0FBbEMsS0FBZ0QsQ0FBQ2xCLE1BQU0sQ0FBQ21CLFFBQTVELEVBQXNFO0FBQ3BFbkIsUUFBTSxDQUFDb0IsT0FBUCxDQUFlQyxTQUFmLENBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDckIsTUFBTSxDQUFDSSxRQUFQLENBQWdCa0IsSUFBckQ7O0FBQ0F0QixRQUFNLENBQUN1QixVQUFQLEdBQW9CLFlBQU07QUFDeEJ2QixVQUFNLENBQUNvQixPQUFQLENBQWVJLEVBQWYsQ0FBa0IsQ0FBbEI7QUFDRCxHQUZEO0FBR0QsQzs7Ozs7Ozs7Ozs7QUNWRCx1QyIsImZpbGUiOiJqcy9waG9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3Bob25lLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ob3N0ID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpXG4gICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGAke3RoaXMuaG9zdH0vcGhvbmU/dG9rZW49MTIzYClcbiAgICB0aGlzLnRvdWNocGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdWNocGFkJylcbiAgICB0aGlzLnRvdWNoQnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdWNoLWJ1YmJsZScpXG5cbiAgICB0aGlzLnRvdWNocGFkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICB0aGlzLnRvdWNocGFkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgdGhpcy50b3VjaHBhZC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgfVxuXG4gIGhhbmRsZVRvdWNoU3RhcnQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudC50b3VjaGVzWzBdXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbihjbGllbnRYLCBjbGllbnRZKVxuICAgIHRoaXMudG91Y2hCdWJibGUuY2xhc3NMaXN0LmFkZCgnaXMtdG91Y2hpbmcnKVxuICB9XG5cbiAgaGFuZGxlVG91Y2hNb3ZlID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQudG91Y2hlc1swXVxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oY2xpZW50WCwgY2xpZW50WSlcbiAgfVxuXG4gIGhhbmRsZVRvdWNoRW5kID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHRoaXMudG91Y2hCdWJibGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdG91Y2hpbmcnKVxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24gPSAoY2xpZW50WCwgY2xpZW50WSkgPT4ge1xuICAgIHRoaXMudG91Y2hCdWJibGUuc3R5bGUubGVmdCA9IGNsaWVudFhcbiAgICB0aGlzLnRvdWNoQnViYmxlLnN0eWxlLnRvcCA9IGNsaWVudFlcblxuICAgIHRoaXMud2Vic29ja2V0LnNlbmQoYCR7Y2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRofSwgJHtjbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0fWApXG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc2Nzcy9waG9uZS5zY3NzJ1xuaW1wb3J0IFBob25lQ29udHJvbGxlciBmcm9tICcuL2NvbXBvbmVudHMvUGhvbmVDb250cm9sbGVyJ1xuXG5uZXcgUGhvbmVDb250cm9sbGVyKClcblxuaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbygxKVxuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9