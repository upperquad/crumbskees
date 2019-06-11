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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/front-end/images/bkg1.jpg":
/*!******************************************!*\
  !*** ./assets/front-end/images/bkg1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1c90d905ac4dde167115cc874fbd9817.jpg";

/***/ }),

/***/ "./assets/front-end/images/find-cat.png":
/*!**********************************************!*\
  !*** ./assets/front-end/images/find-cat.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37eb80a527de10e223e82cd4851a41d1.png";

/***/ }),

/***/ "./assets/front-end/images/pattern.png":
/*!*********************************************!*\
  !*** ./assets/front-end/images/pattern.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "479e9356c0500039ef4f746ba8022ade.png";

/***/ }),

/***/ "./js/front-end/app.js":
/*!*****************************!*\
  !*** ./js/front-end/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_front_end_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/front-end/style.scss */ "./scss/front-end/style.scss");
/* harmony import */ var _scss_front_end_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_front_end_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _managers_RAFManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/RAFManager */ "./js/front-end/managers/RAFManager.js");
/* harmony import */ var _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers/GameManager */ "./js/front-end/managers/GameManager.js");


 // not working anymore for some reason

(function () {
  // import GameMananger when DOM is ready
  window.GameManager = new _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
})();

/***/ }),

/***/ "./js/front-end/components/Player.js":
/*!*******************************************!*\
  !*** ./js/front-end/components/Player.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/time */ "./js/front-end/utils/time.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./js/front-end/utils/math.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Player =
/*#__PURE__*/
function () {
  function Player(props) {
    _classCallCheck(this, Player);

    var el = props.el,
        index = props.index,
        color = props.color;
    this.el = el;
    this.index = index;
    this.color = color;
    this.numPoints = 8;
    this.centerX = window.GameManager.vbWidth / 2; // equal to svg viewbox / 2

    this.centerY = window.GameManager.vbHeight / 2; // equal to svg viewbox / 2

    this.minRadius = window.GameManager.vbWidth * 0.05; // 70% of full size / 2 --> should be based on width viewbox

    this.maxRadius = this.minRadius + this.minRadius * 0.2;
    this.minMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.45;
    this.maxMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.55;
    this.minDuration = 700;
    this.maxDuration = 900; // cursor position

    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.isInsideTime = 0;
    this.setPoints();
  }

  _createClass(Player, [{
    key: "setPoints",
    value: function setPoints() {
      this.points = []; // create "numPoints" x points

      var slice = Math.PI * 2 / this.numPoints;
      this.startAngle = Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(0, Math.PI * 2);

      for (var i = 0; i < this.numPoints; i++) {
        var margeAngle = Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(0, 0.28); // i / 1.2
        // randomize the start time of animation (we don't want the tween to go from 0 to 1, it can start directly from 0.6 for example)

        var startAnim = Object(_utils_time__WEBPACK_IMPORTED_MODULE_0__["getNow"])() + i * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(0, this.minDuration);
        var angle = this.startAngle + i * slice + margeAngle;
        var duration = Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.minDuration, this.maxDuration);
        var point = {
          angle: angle,
          duration: duration,
          startAnim: startAnim,
          x: this.centerX + Math.cos(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.minRadius, this.maxRadius),
          y: this.centerY + Math.sin(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.minRadius, this.maxRadius),
          targetMinX: this.centerX + Math.cos(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.minRadius, this.minMiddleRadius),
          targetMinY: this.centerY + Math.sin(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.minRadius, this.minMiddleRadius),
          targetMaxX: this.centerX + Math.cos(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.maxMiddleRadius, this.maxRadius),
          targetMaxY: this.centerY + Math.sin(angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(this.maxMiddleRadius, this.maxRadius)
        };
        point.startX = point.x;
        point.startY = point.y;
        point.destX = point.targetMaxX;
        point.destY = point.targetMaxY;
        this.points.push(point);
      }
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./js/front-end/components/Scene.js":
/*!******************************************!*\
  !*** ./js/front-end/components/Scene.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/time */ "./js/front-end/utils/time.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ "./js/front-end/utils/dom.js");
/* harmony import */ var _utils_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ease */ "./js/front-end/utils/ease.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/math */ "./js/front-end/utils/math.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Scene =
/*#__PURE__*/
function () {
  function Scene(options) {
    var _this = this;

    _classCallCheck(this, Scene);

    _defineProperty(this, "handleMouseMove", function (e) {
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      var player = window.GameManager.players[window.GameManager.playerIds[0]];
      player.eventX = e.touches ? e.touches[0].clientX : e.clientX;
      player.eventX -= _this.offsetLeft;
      player.eventY = e.touches ? e.touches[0].clientY : e.clientY;
      player.eventY += scrollY;
      player.targetX = player.eventX / _this.width * window.GameManager.vbWidth; // because we're using viewbox units here

      player.targetX -= window.GameManager.vbWidth / 2; // because starting point is player.centerX

      player.targetY = player.eventY / _this.height * window.GameManager.vbHeight - _this.offsetTop;
      player.targetY -= window.GameManager.vbHeight / 2; // ^These shoudl be linked to a cursor
    });

    _defineProperty(this, "handleClick", function () {
      // console.log(e)
      // e will be current cursor with positions
      // if cursor position
      // Check if cursor item is found
      var precision = _this.clickPrecision;
      var player = window.GameManager.players[window.GameManager.playerIds[0]];
      var x = player.targetX / _this.width;
      var y = player.targetY / _this.height;

      for (var i = 0; i < _this.items.length; i++) {
        var item = _this.items[i];

        if (!item.found && x > item.x - precision && x < item.x + precision && y > item.y - precision && y < item.y + precision) {
          window.GameManager.score(player, _this.item);
          item.found = true;
          item.el.style.opacity = 0;
          item.debugEl.style.opacity = 0;
          _this.numItemFound = _this.numItemFound + 1;
        }
      }

      if (_this.numItemFound === _this.items.length) {
        window.GameManager.endScene();
      }
    });

    _defineProperty(this, "handleRAF", function (e) {
      var now = e.detail.now;
      _this.acceleration = _this.acceleration + (_this.destAcceleration - _this.acceleration) * _this.coefAcceleration; // For each cursor...

      for (var y = 0; y < window.GameManager.playerIds.length; y++) {
        var player = window.GameManager.players[window.GameManager.playerIds[y]];
        player.x += (player.targetX - player.x) * 0.1;
        player.y += (player.targetY - player.y) * 0.1; // For each points of the player (organic shape)
        // Create organic shape / Tween all points

        for (var i = 0; i < player.points.length; i++) {
          var point = player.points[i]; // From scratch tween:
          // percent is going from 0 to 1 in X seconds where X is the "duration variable".
          // Each points starting value is going to his destination value in X seconds
          // then I use easing functions to modify the value curve through time.

          var percent = (now - point.startAnim) / point.duration * _this.acceleration;
          point.x = point.startX + (point.destX - point.startX) * Object(_utils_ease__WEBPACK_IMPORTED_MODULE_3__["inOutSine"])(percent);
          point.y = point.startY + (point.destY - point.startY) * Object(_utils_ease__WEBPACK_IMPORTED_MODULE_3__["inOutSine"])(percent);

          if (percent >= 1) {
            // end of animation,
            // restart animation by going back
            if (point.reverseAnim) {
              point.startX = point.x;
              point.startY = point.y;
              point.destX = point.targetMaxX;
              point.destY = point.targetMaxY;
              point.reverseAnim = false;
              point.startAnim = Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["getNow"])();
            } else {
              point.startX = point.x;
              point.startY = point.y;
              point.destX = point.targetMinX;
              point.destY = point.targetMinY;
              point.reverseAnim = true;
              point.startAnim = Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["getNow"])();
            }
          } // move player based on mouse


          point.x += player.x;
          point.y += player.y; // For increasing player
          // // if item found, increase player radius
          // if (y === 0 && player.itemFound && !point.isIncrease) {
          //   const newMaxRadius = player.maxRadius + this.increaseMax
          //   const newMaxMiddleRadius = player.maxMiddleRadius + this.increaseMax
          //   const newMinRadius = player.minRadius + this.increaseMax
          //   const newMinMiddleRadius = player.minMiddleRadius + this.increaseMax
          //   point.targetMaxX = player.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          //   point.targetMinX = player.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)
          //   point.destX = point.targetMaxX
          //   point.targetMaxY = player.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          //   point.targetMinY = player.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)
          //   point.destY = point.targetMaxY
          //   point.startAnim = getNow()
          //   point.isIncrease = true
          // }
        }

        player.el.setAttribute('d', _this.cardinal(player.points));
      }
    });

    this.element = options.el;
    this.bkg = options.bkg;
    this.maskedBkg = options.maskedBkg;
    this.item = options.item;
    this.numItems = options.numItems;
    this.gridCols = options.gridCols;
    this.gridLines = options.gridLines;
    this.index = options.index;
    this.time = 60; // in seconds

    this.dom();
    this.set();
  }

  _createClass(Scene, [{
    key: "dom",
    value: function dom() {
      this.dom = {
        svgScene: this.element.querySelector('.scene-svg'),
        svgMaskedImage: this.element.querySelector('.scene-svg__image'),
        svgClipPath: this.element.querySelector('.scene-svg__clippath'),
        svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref')
      };
    }
  }, {
    key: "set",
    value: function set() {
      this.setBkgs(); // assuming we always use a viewbox of 100 x 100

      this.acceleration = 1;
      this.destAcceleration = 1;
      this.coefAcceleration = 0.2;
      this.increaseMax = window.GameManager.vbWidth * 0.07; // items

      this.itemSize = window.GameManager.vbWidth * 0.05; // values for mouse event

      this.clickPrecision = 0.05;
      this.numItemFound = 0; // values for DOM scene

      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.offsetLeft = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getOffsetLeft"])(this.element.parentNode);
      this.offsetTop = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["getOffsetTop"])(this.element.parentNode);

      if (this.dom.svgClipPath) {
        this.setClipPathId();
      }

      this.setGrid();
      this.setItems(); // start events

      this.events(true);
      this.eventsRAF(true);
      window.GameManager.popUpMessage('START!', 'black');
      window.GameManager.startTimer(this.time);
    }
  }, {
    key: "setClipPathId",
    value: function setClipPathId() {
      this.dom.svgClipPath.id = uuid_v1__WEBPACK_IMPORTED_MODULE_0___default()();
      this.dom.svgClipPathRef.setAttribute('clip-path', "url(#".concat(this.dom.svgClipPath.id, ")"));
    }
  }, {
    key: "setGrid",
    value: function setGrid() {
      this.positionsInGrid = [];
      var x;
      var y;

      for (var i = 0; i < this.gridCols; i++) {
        x = i + 0.5; // add half

        for (var j = 0; j < this.gridLines; j++) {
          y = j + 0.5; // add half

          var obj = {
            x: x,
            y: y
          };
          this.positionsInGrid.push(obj);
        }
      }
    }
  }, {
    key: "setItems",
    value: function setItems() {
      this.items = [];

      for (var i = 0; i < this.numItems; i++) {
        // randomize
        var rd = Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["randomInt"])(0, this.positionsInGrid.length - 1);
        var x = this.positionsInGrid[rd].x / this.gridCols;
        var y = this.positionsInGrid[rd].y / this.gridLines;
        this.positionsInGrid.splice(rd, 1); // svg items
        // need to precise that we're using the svg namespace

        var svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        svgImage.setAttributeNS(null, 'height', this.itemSize);
        svgImage.setAttributeNS(null, 'width', this.itemSize);
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.item);
        svgImage.setAttributeNS(null, 'x', "".concat(x * 100, "%"));
        svgImage.setAttributeNS(null, 'y', "".concat(y * 100, "%"));
        svgImage.setAttributeNS(null, 'transform', "translate(-".concat(this.itemSize / 2, " -").concat(this.itemSize / 2, ")"));
        svgImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice');
        this.dom.svgClipPathRef.appendChild(svgImage); // fake item for debugging

        var div = document.createElement('div');
        div.classList.add('debug');
        div.style.left = "".concat(x * 100, "%");
        div.style.top = "".concat(y * 100, "%");
        this.element.appendChild(div);
        var obj = {
          el: svgImage,
          debugEl: div,
          x: x,
          y: y // between 0 and 1

        };
        this.items.push(obj);
      }
    }
  }, {
    key: "setBkgs",
    value: function setBkgs() {
      // set viewbox values, fit Image to scene
      this.dom.svgScene.setAttribute('viewBox', "0 0 ".concat(window.GameManager.vbWidth, " ").concat(window.GameManager.vbHeight)); // Add masked bkg

      this.dom.svgMaskedImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.bkg);
      this.dom.svgMaskedImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice'); // Add "front" bkg

      this.element.style.backgroundImage = "url(".concat(this.maskedBkg, ")");
    } // ////////
    // Events
    // ////////

  }, {
    key: "events",
    value: function events(method) {
      var ev = method ? 'addEventListener' : 'removeEventListener'; // window[ev]('mousemove', this.handleMouseMove, false)

      window[ev]('click', this.handleClick, false);
    }
  }, {
    key: "eventsRAF",
    value: function eventsRAF(method) {
      var ev = method ? 'addEventListener' : 'removeEventListener';
      window[ev]('RAF', this.handleRAF, false);
    }
  }, {
    key: "cardinal",
    // Create circle distorsion based on the given coordinates points
    // Cardinal spline - a uniform Catmull-Rom spline with a tension option
    value: function cardinal(points) {
      var tension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.2;
      // 1 tension does not make a perfect round, why?
      var nbPoints = points.length;
      if (nbPoints < 1) return 'M0 0';
      var path = "M ".concat(points[0].x, " ").concat(points[0].y, " C"); // where M is the starting X,Y coords
      // C is the 3 next points coord of a Cubic bezier

      for (var i = 0; i < nbPoints; i++) {
        var p0 = points[(i - 1 + nbPoints) % nbPoints];
        var p1 = points[i];
        var p2 = points[(i + 1) % nbPoints];
        var p3 = points[(i + 2) % nbPoints];
        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;
        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension; // cubic Bezier
        // x1 | The x-axis coordinate of the first control point.
        // y1 | The y-axis coordinate of the first control point.
        // x2 | The x-axis coordinate of the second control point.
        // y2 | The y-axis coordinate of the second control point.
        // p2.x | The x-axis coordinate of the end point.
        // p2.y | The y-axis coordinate of the end point.

        path += " ".concat(x1, " ").concat(y1, " ").concat(x2, " ").concat(y2, " ").concat(p2.x, " ").concat(p2.y);
      }

      return "".concat(path, "z"); // close path with z
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.events(false);
      this.eventsRAF(false);
    }
  }]);

  return Scene;
}();



/***/ }),

/***/ "./js/front-end/constants/Server.js":
/*!******************************************!*\
  !*** ./js/front-end/constants/Server.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Server = {
  host: window.location.origin.replace(/^http/, 'ws') // websocket: new WebSocket(`${window.location.origin.replace(/^http/, 'ws')}/game`),

};
/* harmony default export */ __webpack_exports__["default"] = (Server);

/***/ }),

/***/ "./js/front-end/managers/GameManager.js":
/*!**********************************************!*\
  !*** ./js/front-end/managers/GameManager.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameManager; });
/* harmony import */ var _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../templates/front-end/game.html */ "./templates/front-end/game.html");
/* harmony import */ var _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_front_end_setup_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../templates/front-end/setup.html */ "./templates/front-end/setup.html");
/* harmony import */ var _templates_front_end_setup_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_front_end_setup_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Scene */ "./js/front-end/components/Scene.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Player */ "./js/front-end/components/Player.js");
/* harmony import */ var _constants_Server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/Server */ "./js/front-end/constants/Server.js");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/front-end/images/bkg1.jpg */ "./assets/front-end/images/bkg1.jpg");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_7__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // server

 // assets



 // import scene2Item from '../../../assets/front-end/images/pattern.png'\

var host = window.location.origin.replace(/^http/, 'ws');
var debug = false;
var playerIds = debug ? ['refiejrfer', 'erfjerfpie'] : [];
var tokens = ['123', '456'];

var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    var _this = this;

    _classCallCheck(this, GameManager);

    _defineProperty(this, "onWsOpen", function () {
      _this.main.innerHTML = _templates_front_end_setup_html__WEBPACK_IMPORTED_MODULE_1___default.a;
      _this.setupMessage = _this.main.querySelector('.setup__message');
      _this.websocket.onmessage = _this.listenServer;
    });

    _defineProperty(this, "listenServer", function (event) {
      var data = event.data.split(',');

      if (data[0] === 'token_submit') {
        // loop into the tokens, if the token correspond, set up the id
        var validToken = false;

        for (var i = 0; i < tokens.length; i++) {
          if (tokens[i] === data[1] && data[2] !== _this.firstPlayerId) {
            // data[2] !== this.firstPlayerId In case second player use the token of the first player
            playerIds.push(data[2]);

            _this.websocket.send("auth_result,".concat(data[2], ",1"));

            validToken = true;
            _this.firstPlayerId = data[2];
            _this.setupMessage.innerHTML = "Player ".concat(playerIds.length, " is ready");
          }
        }

        if (validToken === false) {
          _this.websocket.send("auth_result,".concat(data[2], ",0"));
        }

        if (playerIds.length === 2) {
          // if both players are set, let's start
          _this.init();
        }
      } else if (data[0] === 'cursor_move') {
        var x = parseFloat(data[2], 10) * _this.vbWidth;

        var y = parseFloat(data[3], 10) * _this.vbWidth; // we use vbWidth the same coeficient here to have the same speed movement on touchmove X and Y


        _this.players[data[1]].targetX = x + _this.players[data[1]].targetX;
        _this.players[data[1]].targetY = y + _this.players[data[1]].targetY; // this.players[data[1]].targetX
      } else if (data[0] === 'click') {
        // data[1] needs to be the index of player (or id)
        console.log(data);

        _this.players[data[1]].handleClick();
      }
    });

    this.main = document.querySelector('.main'); // Server.websocket.onopen = this.onWsOpen

    this.websocket = new WebSocket("".concat(host, "/game"));
    this.websocket.onopen = this.onWsOpen;

    if (debug === true) {
      this.init();
    }
  }

  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a;
      this.element = document.querySelector('[game]'); // scores

      this.scenes = [{
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        maskedBkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        numItems: 5,
        gridCols: 10,
        gridLines: 10,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }];
      this.players = [];
      this.scores = [0, 0];
      this.currentSceneIndex = 0;
      this.loadBkg();
    }
  }, {
    key: "loadBkg",
    value: function loadBkg() {
      var _this2 = this;

      // Load Current Scene image
      var img = new Image();
      img.src = this.scenes[this.currentSceneIndex].bkg;

      img.onload = function () {
        // image loaded
        _this2.dom();

        _this2.setPlayers();

        var scene = _this2.scenes[_this2.currentSceneIndex]; // add image placholder

        _this2.dom.imagePlaceholder.src = scene.bkg;
        _this2.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_2__["default"](_objectSpread({
          el: _this2.dom.scene,
          index: _this2.currentSceneIndex
        }, scene));
      };
    }
  }, {
    key: "dom",
    value: function dom() {
      this.dom = {
        scene: this.element.querySelector('.scene'),
        imagePlaceholder: this.element.querySelector('.scene__placeholder'),
        cursors: this.element.querySelectorAll('.cursor'),
        message: this.element.querySelector('.scene__message'),
        scoreCenterRecap: this.element.querySelectorAll('.score__center__recap'),
        scoreItems: this.element.querySelectorAll('.score__items'),
        timer: this.element.querySelector('.timer')
      };
    }
  }, {
    key: "setPlayers",
    value: function setPlayers() {
      this.playerIds = playerIds;
      this.vbWidth = this.dom.imagePlaceholder.offsetWidth;
      this.vbHeight = this.dom.imagePlaceholder.offsetHeight; // assuming we always use a viewbox of 100 x 100

      var colors = ['red', 'blue']; // each player is an object with a key/id

      this.players = {};

      if (playerIds.length === 2) {
        this.players[playerIds[0]] = new _components_Player__WEBPACK_IMPORTED_MODULE_3__["default"]({
          el: this.dom.cursors[0],
          index: 0,
          color: colors[0]
        });
        this.players[playerIds[1]] = new _components_Player__WEBPACK_IMPORTED_MODULE_3__["default"]({
          el: this.dom.cursors[1],
          index: 1,
          color: colors[1]
        });
      }
    }
  }, {
    key: "startTimer",
    value: function startTimer(duration) {
      var _this3 = this;

      var timer = duration;
      var seconds;
      this.dom.timer.innerHTML = duration;
      this.timerInterval = setInterval(function () {
        seconds = parseInt(timer, 10);
        seconds = seconds < 10 ? "0".concat(seconds) : seconds;
        _this3.dom.timer.innerHTML = seconds;

        if (timer === 0) {
          _this3.endScene('TIME OUT!');
        }

        timer -= 1;
      }, 1000);
    }
  }, {
    key: "score",
    value: function score(player, item) {
      this.popUpMessage('+1', player.color); // + color player

      this.scores[player.index] += 1;
      this.element.classList.add('item-found');

      for (var i = 0; i < this.dom.scoreCenterRecap.length; i++) {
        if (i === player.index) {
          this.dom.scoreCenterRecap[i].innerHTML = "P-".concat(player.index + 1, " : ").concat(this.scores[player.index]);
        }
      }

      var img = document.createElement('img');
      img.src = item;
      img.classList.add('score__item');
      this.dom.scoreItems[player.index].appendChild(img);
      _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send("score,".concat(player.index, ",").concat(this.scores[player.index]));
    }
  }, {
    key: "popUpMessage",
    value: function popUpMessage(message) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gray';
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var div = document.createElement('div');
      div.classList.add('message', 't-120--bold', "color--".concat(color));

      if (end) {
        div.classList.add('message-end');
      }

      div.innerHTML = message;
      this.dom.scene.appendChild(div);
      setTimeout(function () {
        div.remove();
      }, 2000);
    }
  }, {
    key: "endScene",
    value: function endScene() {
      var _this4 = this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'end of scene';
      clearInterval(this.timerInterval);
      this.popUpMessage(message, 'black', true);
      setTimeout(function () {
        _this4.updateScene(_this4.currentSceneIndex + 1);
      }, 2000);
    }
  }, {
    key: "updateScene",
    value: function updateScene(index) {
      if (index === this.scenes.length) {
        console.log('end of party');
        _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send('disconnect_all_users');
      }

      this.destroyScene(this.currentScene);
      this.currentSceneIndex = index;
      var scene = this.scenes[this.currentSceneIndex];
      this.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_2__["default"](_objectSpread({
        el: this.dom.scene,
        index: this.currentSceneIndex
      }, scene));
    }
  }, {
    key: "destroyScene",
    value: function destroyScene(scene) {
      // clean component
      if (scene.destroy instanceof Function) {
        scene.destroy();
      }
    }
  }]);

  return GameManager;
}();



/***/ }),

/***/ "./js/front-end/managers/RAFManager.js":
/*!*********************************************!*\
  !*** ./js/front-end/managers/RAFManager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createCustomEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createCustomEvent */ "./js/front-end/utils/createCustomEvent.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var RAFManager = function RAFManager() {
  var _this = this;

  _classCallCheck(this, RAFManager);

  _defineProperty(this, "handleRAF", function (now) {
    // now === time in ms
    _this.raf = requestAnimationFrame(_this.handleRAF);
    window.dispatchEvent(Object(_utils_createCustomEvent__WEBPACK_IMPORTED_MODULE_0__["default"])('RAF', {
      now: now
    }));
  });

  _defineProperty(this, "restart", function () {
    _this.handleRAF(0);
  });

  _defineProperty(this, "cancel", function () {
    cancelAnimationFrame(_this.raf);
  });

  this.handleRAF(0);
};

/* harmony default export */ __webpack_exports__["default"] = (new RAFManager());

/***/ }),

/***/ "./js/front-end/utils/createCustomEvent.js":
/*!*************************************************!*\
  !*** ./js/front-end/utils/createCustomEvent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createCustomEvent(eventName) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var event = new CustomEvent(eventName, {
    detail: data
  });
  return event;
}

/* harmony default export */ __webpack_exports__["default"] = (createCustomEvent);

/***/ }),

/***/ "./js/front-end/utils/dom.js":
/*!***********************************!*\
  !*** ./js/front-end/utils/dom.js ***!
  \***********************************/
/*! exports provided: getOffsetTop, getOffsetLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
function getOffsetTop(elem) {
  // issues on ie11
  if (!elem) {
    return 0;
  }

  var bounds = elem.getBoundingClientRect();
  var bodyTop = window.scrollY || document.body.scrollTop;
  return bounds.top + bodyTop;
}
function getOffsetLeft(elem) {
  // issues on ie11
  if (!elem) {
    return 0;
  }

  var bounds = elem.getBoundingClientRect();
  return bounds.left;
}

/***/ }),

/***/ "./js/front-end/utils/ease.js":
/*!************************************!*\
  !*** ./js/front-end/utils/ease.js ***!
  \************************************/
/*! exports provided: outExpo, inOutSine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outExpo", function() { return outExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inOutSine", function() { return inOutSine; });
function outExpo(n) {
  if (n === 1) {
    return n;
  }

  return 1 - Math.pow(2, -10 * n);
}
function inOutSine(n) {
  return .5 * (1 - Math.cos(Math.PI * n));
}

/***/ }),

/***/ "./js/front-end/utils/math.js":
/*!************************************!*\
  !*** ./js/front-end/utils/math.js ***!
  \************************************/
/*! exports provided: clamp, random, randomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function random(min, max) {
  // return random value between min and max
  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }

  return min + (max - min) * Math.random();
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),

/***/ "./js/front-end/utils/time.js":
/*!************************************!*\
  !*** ./js/front-end/utils/time.js ***!
  \************************************/
/*! exports provided: getNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNow", function() { return getNow; });
function getNow() {
  return 'now' in window.performance ? performance.now() : new Date().getTime();
}

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_game_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/game.scss */ "./scss/game.scss");
/* harmony import */ var _scss_game_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_game_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _front_end_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./front-end/app */ "./js/front-end/app.js");
 // import GameCommunicator from './components/GameCommunicator'
// new GameCommunicator()



/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./scss/front-end/style.scss":
/*!***********************************!*\
  !*** ./scss/front-end/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./scss/game.scss":
/*!************************!*\
  !*** ./scss/game.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./templates/front-end/game.html":
/*!***************************************!*\
  !*** ./templates/front-end/game.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1036 632\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\">\n          <image class=\"scene-svg__image\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid slice\" />\n        </g>\n      </svg>\n      <div class=\"scene__placeholder\"></div>\n    </div>\n    <div class=\"timer t-32--bold\"></div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-32--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

/***/ }),

/***/ "./templates/front-end/setup.html":
/*!****************************************!*\
  !*** ./templates/front-end/setup.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- big cursor -->\n<section class=\"setup\">\n  <!-- playing scene -->\n  <div class=\"setup__message t-64--bold\">\n  </div>\n</section>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvU2VydmVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwiXSwibmFtZXMiOlsid2luZG93IiwiR2FtZU1hbmFnZXIiLCJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJ2YldpZHRoIiwiY2VudGVyWSIsInZiSGVpZ2h0IiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwibWluTWlkZGxlUmFkaXVzIiwibWF4TWlkZGxlUmFkaXVzIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIngiLCJ5IiwidGFyZ2V0WCIsInRhcmdldFkiLCJpc0luc2lkZVRpbWUiLCJzZXRQb2ludHMiLCJwb2ludHMiLCJzbGljZSIsIk1hdGgiLCJQSSIsInN0YXJ0QW5nbGUiLCJyYW5kb20iLCJpIiwibWFyZ2VBbmdsZSIsInN0YXJ0QW5pbSIsImdldE5vdyIsImFuZ2xlIiwiZHVyYXRpb24iLCJwb2ludCIsImNvcyIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwicGxheWVySWRzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicHJlY2lzaW9uIiwiY2xpY2tQcmVjaXNpb24iLCJpdGVtcyIsImxlbmd0aCIsIml0ZW0iLCJmb3VuZCIsInNjb3JlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJia2ciLCJtYXNrZWRCa2ciLCJudW1JdGVtcyIsImdyaWRDb2xzIiwiZ3JpZExpbmVzIiwidGltZSIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEJrZ3MiLCJpbmNyZWFzZU1heCIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwicGFyZW50Tm9kZSIsImdldE9mZnNldFRvcCIsInNldENsaXBQYXRoSWQiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJwb3BVcE1lc3NhZ2UiLCJzdGFydFRpbWVyIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJkZWJ1ZyIsInRva2VucyIsIm1haW4iLCJpbm5lckhUTUwiLCJzZXR1cFRtcCIsInNldHVwTWVzc2FnZSIsIndlYnNvY2tldCIsIm9ubWVzc2FnZSIsImxpc3RlblNlcnZlciIsImV2ZW50IiwiZGF0YSIsInNwbGl0IiwidmFsaWRUb2tlbiIsImZpcnN0UGxheWVySWQiLCJzZW5kIiwiaW5pdCIsInBhcnNlRmxvYXQiLCJjb25zb2xlIiwibG9nIiwiV2ViU29ja2V0Iiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnJlbnRTY2VuZSIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZVNjZW5lIiwiZGVzdHJveVNjZW5lIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJ0bXAiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUi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QUFrMEMsbUJBQU8sQ0FBQyx3RkFBMkMseWI7Ozs7Ozs7Ozs7O0FDQXIzQywrSiIsImZpbGUiOiJqcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvZ2FtZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjOTBkOTA1YWM0ZGRlMTY3MTE1Y2M4NzRmYmQ5ODE3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZWI4MGE1MjdkZTEwZTIyM2U4MmNkNDg1MWE0MWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3OWU5MzU2YzA1MDAwMzllZjRmNzQ2YmE4MDIyYWRlLnBuZ1wiOyIsImltcG9ydCAnLi4vLi4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcydcblxuaW1wb3J0ICcuL21hbmFnZXJzL1JBRk1hbmFnZXInXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbigoKSA9PiB7XG4gIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbiAgd2luZG93LkdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKClcbn0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gOFxuICAgIHRoaXMuY2VudGVyWCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMubWluUmFkaXVzID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1IC8vIDcwJSBvZiBmdWxsIHNpemUgLyAyIC0tPiBzaG91bGQgYmUgYmFzZWQgb24gd2lkdGggdmlld2JveFxuICAgIHRoaXMubWF4UmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLm1pblJhZGl1cyAqIDAuMlxuICAgIHRoaXMubWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjQ1XG4gICAgdGhpcy5tYXhNaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNTVcbiAgICB0aGlzLm1pbkR1cmF0aW9uID0gNzAwXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDkwMFxuICAgIC8vIGN1cnNvciBwb3NpdGlvblxuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gICAgdGhpcy50YXJnZXRYID0gMFxuICAgIHRoaXMudGFyZ2V0WSA9IDBcbiAgICB0aGlzLmlzSW5zaWRlVGltZSA9IDBcblxuICAgIHRoaXMuc2V0UG9pbnRzKClcbiAgfVxuXG4gIHNldFBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgLy8gY3JlYXRlIFwibnVtUG9pbnRzXCIgeCBwb2ludHNcbiAgICBjb25zdCBzbGljZSA9IChNYXRoLlBJICogMikgLyB0aGlzLm51bVBvaW50c1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IHJhbmRvbSgwLCBNYXRoLlBJICogMilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgbWFyZ2VBbmdsZSA9IHJhbmRvbSgwLCAwLjI4KSAvLyBpIC8gMS4yXG4gICAgICAvLyByYW5kb21pemUgdGhlIHN0YXJ0IHRpbWUgb2YgYW5pbWF0aW9uICh3ZSBkb24ndCB3YW50IHRoZSB0d2VlbiB0byBnbyBmcm9tIDAgdG8gMSwgaXQgY2FuIHN0YXJ0IGRpcmVjdGx5IGZyb20gMC42IGZvciBleGFtcGxlKVxuICAgICAgY29uc3Qgc3RhcnRBbmltID0gZ2V0Tm93KCkgKyBpICogcmFuZG9tKDAsIHRoaXMubWluRHVyYXRpb24pXG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuc3RhcnRBbmdsZSArIGkgKiBzbGljZSArIG1hcmdlQW5nbGVcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gcmFuZG9tKHRoaXMubWluRHVyYXRpb24sIHRoaXMubWF4RHVyYXRpb24pXG5cbiAgICAgIGNvbnN0IHBvaW50ID0ge1xuICAgICAgICBhbmdsZSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHN0YXJ0QW5pbSxcbiAgICAgICAgeDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5YOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgIH1cblxuICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcblxuICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGdldE9mZnNldExlZnQgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyBpbk91dFNpbmUgfSBmcm9tICcuLi91dGlscy9lYXNlJ1xuaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbFxuICAgIHRoaXMuYmtnID0gb3B0aW9ucy5ia2dcbiAgICB0aGlzLm1hc2tlZEJrZyA9IG9wdGlvbnMubWFza2VkQmtnXG4gICAgdGhpcy5pdGVtID0gb3B0aW9ucy5pdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG9wdGlvbnMubnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gb3B0aW9ucy5ncmlkQ29sc1xuICAgIHRoaXMuZ3JpZExpbmVzID0gb3B0aW9ucy5ncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gb3B0aW9ucy5pbmRleFxuICAgIHRoaXMudGltZSA9IDYwIC8vIGluIHNlY29uZHNcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z01hc2tlZEltYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19faW1hZ2UnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuc2V0QmtncygpXG5cbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmRlc3RBY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5jb2VmQWNjZWxlcmF0aW9uID0gMC4yXG4gICAgdGhpcy5pbmNyZWFzZU1heCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wN1xuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNVxuXG4gICAgLy8gdmFsdWVzIGZvciBtb3VzZSBldmVudFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnBvcFVwTWVzc2FnZSgnU1RBUlQhJywgJ2JsYWNrJylcbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc3RhcnRUaW1lcih0aGlzLnRpbWUpXG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuaXRlbSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgYCR7eCAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgYCR7eSAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKC0ke3RoaXMuaXRlbVNpemUgLyAyfSAtJHt0aGlzLml0ZW1TaXplIC8gMn0pYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcblxuICAgICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpXG5cbiAgICAgIC8vIGZha2UgaXRlbSBmb3IgZGVidWdnaW5nXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlYnVnJylcbiAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gYCR7eCAqIDEwMH0lYFxuICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgc2V0QmtncygpIHtcbiAgICAvLyBzZXQgdmlld2JveCB2YWx1ZXMsIGZpdCBJbWFnZSB0byBzY2VuZVxuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aH0gJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgICAvLyBBZGQgbWFza2VkIGJrZ1xuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLmJrZylcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG4gICAgLy8gQWRkIFwiZnJvbnRcIiBia2dcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMubWFza2VkQmtnfSlgXG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAvLyB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1swXV1cblxuICAgIHBsYXllci5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHBsYXllci5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgcGxheWVyLmV2ZW50WSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgcGxheWVyLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICBwbGF5ZXIudGFyZ2V0WCA9IHBsYXllci5ldmVudFggLyB0aGlzLndpZHRoICogd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICBwbGF5ZXIudGFyZ2V0WCAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyBwbGF5ZXIuY2VudGVyWFxuICAgIHBsYXllci50YXJnZXRZID0gcGxheWVyLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICBwbGF5ZXIudGFyZ2V0WSAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyXG5cbiAgICAvLyBeVGhlc2Ugc2hvdWRsIGJlIGxpbmtlZCB0byBhIGN1cnNvclxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyBlIHdpbGwgYmUgY3VycmVudCBjdXJzb3Igd2l0aCBwb3NpdGlvbnNcbiAgICAvLyBpZiBjdXJzb3IgcG9zaXRpb25cbiAgICAvLyBDaGVjayBpZiBjdXJzb3IgaXRlbSBpcyBmb3VuZFxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuY2xpY2tQcmVjaXNpb25cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzWzBdXVxuICAgIGNvbnN0IHggPSBwbGF5ZXIudGFyZ2V0WCAvIHRoaXMud2lkdGhcbiAgICBjb25zdCB5ID0gcGxheWVyLnRhcmdldFkgLyB0aGlzLmhlaWdodFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtLmZvdW5kICYmXG4gICAgICAgIHggPiBpdGVtLnggLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeCA8IGl0ZW0ueCArIHByZWNpc2lvbiAmJlxuICAgICAgICB5ID4gaXRlbS55IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPCBpdGVtLnkgKyBwcmVjaXNpb24pIHtcbiAgICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLnNjb3JlKHBsYXllciwgdGhpcy5pdGVtKVxuICAgICAgICBpdGVtLmZvdW5kID0gdHJ1ZVxuICAgICAgICBpdGVtLmVsLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICAgIGl0ZW0uZGVidWdFbC5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgICAgIHRoaXMubnVtSXRlbUZvdW5kID0gdGhpcy5udW1JdGVtRm91bmQgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtSXRlbUZvdW5kID09PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLmVuZFNjZW5lKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSQUYgPSBlID0+IHtcbiAgICBjb25zdCB7IG5vdyB9ID0gZS5kZXRhaWxcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uICsgKHRoaXMuZGVzdEFjY2VsZXJhdGlvbiAtIHRoaXMuYWNjZWxlcmF0aW9uKSAqIHRoaXMuY29lZkFjY2VsZXJhdGlvblxuXG4gICAgLy8gRm9yIGVhY2ggY3Vyc29yLi4uXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzW3ldXVxuXG4gICAgICBwbGF5ZXIueCArPSAocGxheWVyLnRhcmdldFggLSBwbGF5ZXIueCkgKiAwLjFcbiAgICAgIHBsYXllci55ICs9IChwbGF5ZXIudGFyZ2V0WSAtIHBsYXllci55KSAqIDAuMVxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIHBsYXllciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gcGxheWVyLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBwbGF5ZXIgYmFzZWQgb24gbW91c2VcbiAgICAgICAgcG9pbnQueCArPSBwbGF5ZXIueFxuICAgICAgICBwb2ludC55ICs9IHBsYXllci55XG5cbiAgICAgICAgLy8gRm9yIGluY3JlYXNpbmcgcGxheWVyXG4gICAgICAgIC8vIC8vIGlmIGl0ZW0gZm91bmQsIGluY3JlYXNlIHBsYXllciByYWRpdXNcbiAgICAgICAgLy8gaWYgKHkgPT09IDAgJiYgcGxheWVyLml0ZW1Gb3VuZCAmJiAhcG9pbnQuaXNJbmNyZWFzZSkge1xuICAgICAgICAvLyAgIGNvbnN0IG5ld01heFJhZGl1cyA9IHBsYXllci5tYXhSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4TWlkZGxlUmFkaXVzID0gcGxheWVyLm1heE1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5SYWRpdXMgPSBwbGF5ZXIubWluUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pbk1pZGRsZVJhZGl1cyA9IHBsYXllci5taW5NaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAvLyAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG5cbiAgICAgICAgLy8gICBwb2ludC5pc0luY3JlYXNlID0gdHJ1ZVxuICAgICAgICAvLyB9XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5lbC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLmNhcmRpbmFsKHBsYXllci5wb2ludHMpKVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBjaXJjbGUgZGlzdG9yc2lvbiBiYXNlZCBvbiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgcG9pbnRzXG4gIC8vIENhcmRpbmFsIHNwbGluZSAtIGEgdW5pZm9ybSBDYXRtdWxsLVJvbSBzcGxpbmUgd2l0aCBhIHRlbnNpb24gb3B0aW9uXG4gIGNhcmRpbmFsKHBvaW50cywgdGVuc2lvbiA9IDEuMikge1xuICAgIC8vIDEgdGVuc2lvbiBkb2VzIG5vdCBtYWtlIGEgcGVyZmVjdCByb3VuZCwgd2h5P1xuICAgIGNvbnN0IG5iUG9pbnRzID0gcG9pbnRzLmxlbmd0aFxuICAgIGlmIChuYlBvaW50cyA8IDEpIHJldHVybiAnTTAgMCdcblxuICAgIGxldCBwYXRoID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX0gQ2BcbiAgICAvLyB3aGVyZSBNIGlzIHRoZSBzdGFydGluZyBYLFkgY29vcmRzXG4gICAgLy8gQyBpcyB0aGUgMyBuZXh0IHBvaW50cyBjb29yZCBvZiBhIEN1YmljIGJlemllclxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1soaSAtIDEgKyBuYlBvaW50cykgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldXG4gICAgICBjb25zdCBwMiA9IHBvaW50c1soaSArIDEpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMyA9IHBvaW50c1soaSArIDIpICUgbmJQb2ludHNdXG5cbiAgICAgIGNvbnN0IHgxID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTEgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIGNvbnN0IHgyID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTIgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIC8vIGN1YmljIEJlemllclxuICAgICAgLy8geDEgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHgyIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkyIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHAyLnggfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIC8vIHAyLnkgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIHBhdGggKz0gYCAke3gxfSAke3kxfSAke3gyfSAke3kyfSAke3AyLnh9ICR7cDIueX1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGh9emAgLy8gY2xvc2UgcGF0aCB3aXRoIHpcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHMoZmFsc2UpXG4gICAgdGhpcy5ldmVudHNSQUYoZmFsc2UpXG4gIH1cbn1cbiIsImNvbnN0IFNlcnZlciA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpLFxuICAvLyB3ZWJzb2NrZXQ6IG5ldyBXZWJTb2NrZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpfS9nYW1lYCksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclxuIiwiaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5pbXBvcnQgc2V0dXBUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInXG5cbi8vIHNlcnZlclxuaW1wb3J0IFNlcnZlciBmcm9tICcuLi9jb25zdGFudHMvU2VydmVyJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGcnXG5pbXBvcnQgc2NlbmUxSXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKVxuY29uc3QgZGVidWcgPSBmYWxzZVxuXG5jb25zdCBwbGF5ZXJJZHMgPSBkZWJ1ZyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuY29uc3QgdG9rZW5zID0gWycxMjMnLCAnNDU2J11cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG4gICAgLy8gU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGAke2hvc3R9L2dhbWVgKVxuICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25Xc09wZW5cblxuICAgIGlmIChkZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gIH1cblxuICBvbldzT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gc2V0dXBUbXBcbiAgICB0aGlzLnNldHVwTWVzc2FnZSA9IHRoaXMubWFpbi5xdWVyeVNlbGVjdG9yKCcuc2V0dXBfX21lc3NhZ2UnKVxuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoYGF1dGhfcmVzdWx0LCR7ZGF0YVsyXX0sMWApXG4gICAgICAgICAgdmFsaWRUb2tlbiA9IHRydWVcbiAgICAgICAgICB0aGlzLmZpcnN0UGxheWVySWQgPSBkYXRhWzJdXG4gICAgICAgICAgdGhpcy5zZXR1cE1lc3NhZ2UuaW5uZXJIVE1MID0gYFBsYXllciAke3BsYXllcklkcy5sZW5ndGh9IGlzIHJlYWR5YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZFRva2VuID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDBgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBpZiBib3RoIHBsYXllcnMgYXJlIHNldCwgbGV0J3Mgc3RhcnRcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjdXJzb3JfbW92ZScpIHtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KGRhdGFbMl0sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQoZGF0YVszXSwgMTApICogdGhpcy52YldpZHRoIFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0uaGFuZGxlQ2xpY2soKVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgdGhpcy5sb2FkQmtnKClcbiAgfVxuXG4gIGxvYWRCa2coKSB7XG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICAvLyBhZGQgaW1hZ2UgcGxhY2hvbGRlclxuICAgICAgdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5zcmMgPSBzY2VuZS5ia2dcblxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgICAuLi5zY2VuZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHRpbWVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLnBsYXllcklkcyA9IHBsYXllcklkc1xuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnZiSGVpZ2h0ID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRIZWlnaHRcbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sIGluZGV4OiAwLCBjb2xvcjogY29sb3JzWzBdIH0pXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzFdXSA9IG5ldyBQbGF5ZXIoeyBlbDogdGhpcy5kb20uY3Vyc29yc1sxXSwgaW5kZXg6IDEsIGNvbG9yOiBjb2xvcnNbMV0gfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllci5pbmRleH0sJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWApXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKClcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgZW5kU2NlbmUobWVzc2FnZSA9ICdlbmQgb2Ygc2NlbmUnKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpXG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UobWVzc2FnZSwgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNjZW5lcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgcGFydHknKVxuICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKCdkaXNjb25uZWN0X2FsbF91c2VycycpXG4gICAgfVxuICAgIHRoaXMuZGVzdHJveVNjZW5lKHRoaXMuY3VycmVudFNjZW5lKVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDM2IDYzMlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lciB0LTMyLS1ib2xkXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSBzY29yZSBib2FyZCAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjb3JlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMTo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fY2VudGVyXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidC0zMi0tYm9sZFxcXCI+SXRlbSB0byBmaW5kOjwvcD5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xIDogMDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yIDogMDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gYmlnIGN1cnNvciAtLT5cXG48c2VjdGlvbiBjbGFzcz1cXFwic2V0dXBcXFwiPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2V0dXBfX21lc3NhZ2UgdC02NC0tYm9sZFxcXCI+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==