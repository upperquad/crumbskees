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

/***/ "./assets/front-end/images/character1.png":
/*!************************************************!*\
  !*** ./assets/front-end/images/character1.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b93585d0057c43b826817e63ede2c5b.png";

/***/ }),

/***/ "./assets/front-end/images/character2.png":
/*!************************************************!*\
  !*** ./assets/front-end/images/character2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2359a6542a37f231ead0d592a4621847.png";

/***/ }),

/***/ "./assets/front-end/images/find-cat.png":
/*!**********************************************!*\
  !*** ./assets/front-end/images/find-cat.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "37eb80a527de10e223e82cd4851a41d1.png";

/***/ }),

/***/ "./assets/front-end/images/round_1/r1-mask.jpg":
/*!*****************************************************!*\
  !*** ./assets/front-end/images/round_1/r1-mask.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca0379a8b81bda77c5c0a33d90d7b259.jpg";

/***/ }),

/***/ "./assets/front-end/images/round_1/r1-pattern.jpg":
/*!********************************************************!*\
  !*** ./assets/front-end/images/round_1/r1-pattern.jpg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b225c6ddedf38ef8455872f53b3f63c8.jpg";

/***/ }),

/***/ "./assets/front-end/images/round_1/r1-target.jpg":
/*!*******************************************************!*\
  !*** ./assets/front-end/images/round_1/r1-target.jpg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "31070cea9e466eb3714709a54c1dce53.jpg";

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
        id = props.id,
        index = props.index,
        color = props.color;
    this.el = el;
    this.id = id;
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
/* harmony import */ var _constants_Debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/Debug */ "./js/front-end/constants/Debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var playerIds = _constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"] ? ['refiejrfer', 'erfjerfpie'] : [];

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

    _defineProperty(this, "handleClick", function (playerId) {
      if (_constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"]) playerId = playerIds[0];
      var precision = _this.clickPrecision;
      var player = window.GameManager.players[playerId];
      var x = player.targetX / window.GameManager.vbWidth + 0.5;
      var y = player.targetY / window.GameManager.vbHeight + 0.5;
      var goodClick = false;

      for (var i = 0; i < _this.items.length; i++) {
        var item = _this.items[i];

        if (!item.found && x > item.x - precision && x < item.x + precision && y > item.y - precision && y < item.y + precision) {
          window.GameManager.score(player, _this.item);
          item.found = true;
          item.el.style.opacity = 0;
          item.debugEl.style.opacity = 0;
          _this.numItemFound = _this.numItemFound + 1;
          goodClick = true;
        }
      }

      if (goodClick) {
        player.el.classList.add('good');
      } else {
        player.el.classList.add('wrong');
      } // this.dom.svgClipPathRef.style.opacity = 0


      setTimeout(function () {
        player.el.classList.remove('good', 'wrong'); // add a rect svg element in the clippath following the
        // cursor, opacity:0 by default, display it to fill the cursor.
        // this.dom.svgClipPathRef.style.opacity = 1
      }, 1000);

      if (_this.numItemFound === _this.items.length && !_this.isEnded) {
        _this.isEnded = true;
        window.GameManager.endScene();
      }
    });

    _defineProperty(this, "handleRAF", function (e) {
      var now = e.detail.now;
      _this.acceleration = _this.acceleration + (_this.destAcceleration - _this.acceleration) * _this.coefAcceleration; // For each cursor...

      for (var y = 0; y < window.GameManager.playerIds.length; y++) {
        var player = window.GameManager.players[window.GameManager.playerIds[y]]; // clamp player position to limit of the scene

        player.targetX = Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["clamp"])(player.targetX, -window.GameManager.vbWidth / 2, window.GameManager.vbWidth / 2);
        player.targetY = Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["clamp"])(player.targetY, -window.GameManager.vbHeight / 2, window.GameManager.vbHeight / 2);
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
    this.time = 30; // in seconds

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

        var div = void 0;

        if (_constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"]) {
          div = document.createElement('div');
          div.classList.add('debug');
          div.style.left = "".concat(x * 100, "%");
          div.style.top = "".concat(y * 100, "%");
          this.element.appendChild(div);
        }

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
      var ev = method ? 'addEventListener' : 'removeEventListener';
      if (_constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"]) window[ev]('mousemove', this.handleMouseMove, false);
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

/***/ "./js/front-end/constants/Debug.js":
/*!*****************************************!*\
  !*** ./js/front-end/constants/Debug.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DEBUG = true;
/* harmony default export */ __webpack_exports__["default"] = (DEBUG);

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
  host: window.location.origin.replace(/^http/, 'ws'),
  websocket: new WebSocket("".concat(window.location.origin.replace(/^http/, 'ws'), "/game"))
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
/* harmony import */ var _constants_Debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/Debug */ "./js/front-end/constants/Debug.js");
/* harmony import */ var _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/front-end/images/round_1/r1-pattern.jpg */ "./assets/front-end/images/round_1/r1-pattern.jpg");
/* harmony import */ var _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_front_end_images_round_1_r1_mask_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/front-end/images/round_1/r1-mask.jpg */ "./assets/front-end/images/round_1/r1-mask.jpg");
/* harmony import */ var _assets_front_end_images_round_1_r1_mask_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_round_1_r1_mask_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/front-end/images/round_1/r1-target.jpg */ "./assets/front-end/images/round_1/r1-target.jpg");
/* harmony import */ var _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_9__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // server


 // assets




 // import scene2Item from '../../../assets/front-end/images/pattern.png'\

var playerIds = _constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"] ? ['refiejrfer', 'erfjerfpie'] : [];
var tokens = ['123', '456']; // prepare the CharacterId
// CharacterId --> get the image of the character
// end scene:
//

var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    var _this = this;

    _classCallCheck(this, GameManager);

    _defineProperty(this, "onWsOpen", function () {
      _this.main.innerHTML = _templates_front_end_setup_html__WEBPACK_IMPORTED_MODULE_1___default.a;
      _this.setupMessage = _this.main.querySelector('.setup__message');
      _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.onmessage = _this.listenServer;
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
            _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send("auth_result,".concat(data[2], ",1"));
            validToken = true;
            _this.firstPlayerId = data[2];
            _this.setupMessage.innerHTML = "Player ".concat(playerIds.length, " is ready");
          }
        }

        if (validToken === false) {
          _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send("auth_result,".concat(data[2], ",0"));
        }

        if (playerIds.length === 2) {
          // if both players are set, let's start
          setTimeout(function () {
            _this.init();
          }, 1000);
        }
      } else if (data[0] === 'cursor_move') {
        var x = parseFloat(data[2], 10) * _this.vbWidth;

        var y = parseFloat(data[3], 10) * _this.vbWidth; // we use vbWidth the same coeficient here to have the same speed movement on touchmove X and Y


        _this.players[data[1]].targetX = x + _this.players[data[1]].targetX;
        _this.players[data[1]].targetY = y + _this.players[data[1]].targetY; // this.players[data[1]].targetX
      } else if (data[0] === 'click') {
        // data[1] needs to be the index of player (or id)
        _this.currentScene.handleClick(data[1]);
      }
    });

    this.main = document.querySelector('.main');

    if (!_constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"]) {
      _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.onopen = this.onWsOpen;
    } else {
      this.init();
    }
  }

  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      if (!_constants_Debug__WEBPACK_IMPORTED_MODULE_5__["default"]) _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send("score,".concat(playerIds[0], ",0"));
      this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a;
      this.element = document.querySelector('[game]'); // scores

      this.scenes = [{
        bkg: _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_round_1_r1_mask_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        item: _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        numItems: 5,
        gridCols: 6,
        gridLines: 6,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        maskedBkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        item: _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        numItems: 5,
        gridCols: 8,
        gridLines: 8,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        numItems: 5,
        gridCols: 10,
        gridLines: 10,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_round_1_r1_pattern_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_round_1_r1_target_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        numItems: 5,
        gridCols: 12,
        gridLines: 12,
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
        _this2.dom(); // Set the viewbox to the ratio of the scene


        _this2.vbWidth = 1920;
        _this2.vbHeight = 840;

        _this2.setPlayers();

        var scene = _this2.scenes[_this2.currentSceneIndex];
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
        cursors: this.element.querySelectorAll('.cursor'),
        message: this.element.querySelector('.scene__message'),
        boardPlayerScore: this.element.querySelectorAll('.board__player__score'),
        boardPlayerItems: this.element.querySelectorAll('.board__player__items'),
        timer: this.element.querySelector('.board__center__timer')
      };
    }
  }, {
    key: "setPlayers",
    value: function setPlayers() {
      this.playerIds = playerIds;
      var colors = ['purple', 'red']; // each player is an object with a key/id

      this.players = {};

      if (playerIds.length === 2) {
        this.players[playerIds[0]] = new _components_Player__WEBPACK_IMPORTED_MODULE_3__["default"]({
          el: this.dom.cursors[0],
          index: 0,
          color: colors[0],
          id: playerIds[0]
        });
        this.players[playerIds[1]] = new _components_Player__WEBPACK_IMPORTED_MODULE_3__["default"]({
          el: this.dom.cursors[1],
          index: 1,
          color: colors[1],
          id: playerIds[1]
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

      for (var i = 0; i < this.dom.boardPlayerScore.length; i++) {
        if (i === player.index) {
          var zeroUnit = this.scores[player.index] < 10 ? '0' : '';
          this.dom.boardPlayerScore[i].innerHTML = "".concat(zeroUnit).concat(this.scores[player.index]);
        }
      }

      var img = document.createElement('img');
      img.src = item;
      img.classList.add('board__player__item');
      this.dom.boardPlayerItems[player.index].appendChild(img);
      _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send("score,".concat(player.id, ",").concat(this.scores[player.index]));
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

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'stage complete';
      clearInterval(this.timerInterval);
      this.popUpMessage(message, 'black', true);
      setTimeout(function () {
        _this4.updateScene(_this4.currentSceneIndex + 1);
      }, 2000);
    }
  }, {
    key: "updateScene",
    value: function updateScene(index) {
      this.destroyScene(this.currentScene);

      if (index === this.scenes.length + 1) {
        console.log('end of party');
        _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send('disconnect_all_users');
        return;
      } // reset players pos to 0


      for (var i = 0; i < playerIds.length; i++) {
        this.players[playerIds[i]].targetX = 0;
        this.players[playerIds[i]].targetY = 0;
        this.players[playerIds[i]].x = 0;
        this.players[playerIds[i]].y = 0; // reset items in board

        this.dom.boardPlayerItems[i].innerHTML = '';
      }

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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1920 840\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\" width=\"1920px\" height=\"1080px\">\n          <image class=\"scene-svg__image\" width=\"1920px\" height=\"1080px\" />\n        </g>\n      </svg>\n    </div>\n    <div class=\"timer t-32--bold\"></div>\n  </div>\n  <!-- score board -->\n  <div class=\"board\">\n    <div class=\"board__player\">\n      <div class=\"board__player__character\">\n        <img src=\"" + __webpack_require__(/*! ../../assets/front-end/images/character1.png */ "./assets/front-end/images/character1.png") + "\" alt=\"\">\n      </div>\n      <div class=\"board__player__score color--purple t-80--bold\">\n        00\n      </div>\n      <div class=\"board__player__name t-48--bold\">\n        Player 1\n      </div>\n      <div class=\"board__player__items\">\n\n      </div>\n    </div>\n    <div class=\"board__center bkg--black\">\n      <div class=\"board__center__timer t-112--bold color--white\">\n\n      </div>\n    </div>\n    <div class=\"board__player\">\n      <div class=\"board__player__character\">\n        <img src=\"" + __webpack_require__(/*! ../../assets/front-end/images/character2.png */ "./assets/front-end/images/character2.png") + "\" alt=\"\">\n      </div>\n      <div class=\"board__player__score color--red t-80--bold\">\n        00\n      </div>\n      <div class=\"board__player__name t-48--bold\">\n        Player 2\n      </div>\n      <div class=\"board__player__items\">\n\n      </div>\n    </div>\n  </div>\n</section>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvY2hhcmFjdGVyMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvY2hhcmFjdGVyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtbWFzay5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1wYXR0ZXJuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXRhcmdldC5qcGciLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9EZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29uc3RhbnRzL1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvR2FtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL1JBRk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9nYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sIl0sIm5hbWVzIjpbIndpbmRvdyIsIkdhbWVNYW5hZ2VyIiwiUGxheWVyIiwicHJvcHMiLCJlbCIsImlkIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJ2YldpZHRoIiwiY2VudGVyWSIsInZiSGVpZ2h0IiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwibWluTWlkZGxlUmFkaXVzIiwibWF4TWlkZGxlUmFkaXVzIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIngiLCJ5IiwidGFyZ2V0WCIsInRhcmdldFkiLCJpc0luc2lkZVRpbWUiLCJzZXRQb2ludHMiLCJwb2ludHMiLCJzbGljZSIsIk1hdGgiLCJQSSIsInN0YXJ0QW5nbGUiLCJyYW5kb20iLCJpIiwibWFyZ2VBbmdsZSIsInN0YXJ0QW5pbSIsImdldE5vdyIsImFuZ2xlIiwiZHVyYXRpb24iLCJwb2ludCIsImNvcyIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsInBsYXllcklkcyIsIkRFQlVHIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwbGF5ZXJJZCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwiZ29vZENsaWNrIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtIiwiZm91bmQiLCJzY29yZSIsInN0eWxlIiwib3BhY2l0eSIsImRlYnVnRWwiLCJudW1JdGVtRm91bmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiaXNFbmRlZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjbGFtcCIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ0b2tlbnMiLCJtYWluIiwiaW5uZXJIVE1MIiwic2V0dXBUbXAiLCJzZXR1cE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJsaXN0ZW5TZXJ2ZXIiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInZhbGlkVG9rZW4iLCJmaXJzdFBsYXllcklkIiwic2VuZCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxTWFzayIsInNjZW5lMUl0ZW0iLCJlZmZlY3QiLCJzY2VuZTJCa2ciLCJzY29yZXMiLCJjdXJyZW50U2NlbmVJbmRleCIsImxvYWRCa2ciLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInNldFBsYXllcnMiLCJzY2VuZSIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsImJvYXJkUGxheWVyU2NvcmUiLCJib2FyZFBsYXllckl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJ6ZXJvVW5pdCIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGVTY2VuZSIsImRlc3Ryb3lTY2VuZSIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsImVsZW0iLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5VG9wIiwiYm9keSIsIm91dEV4cG8iLCJuIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJ0bXAiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpaENBQWloQyxtQkFBTyxDQUFDLDhGQUE4Qyx1aEJBQXVoQixtQkFBTyxDQUFDLDhGQUE4QyxpVDs7Ozs7Ozs7Ozs7QUNBcHBELCtKIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2I5MzU4NWQwMDU3YzQzYjgyNjgxN2U2M2VkZTJjNWIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjM1OWE2NTQyYTM3ZjIzMWVhZDBkNTkyYTQ2MjE4NDcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EwMzc5YThiODFiZGE3N2M1YzBhMzNkOTBkN2IyNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjIyNWM2ZGRlZGYzOGVmODQ1NTg3MmY1M2IzZjYzYzguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzEwNzBjZWE5ZTQ2NmViMzcxNDcwOWE1NGMxZGNlNTMuanBnXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpZCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IGNsYW1wLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsXG4gICAgdGhpcy5ia2cgPSBvcHRpb25zLmJrZ1xuICAgIHRoaXMubWFza2VkQmtnID0gb3B0aW9ucy5tYXNrZWRCa2dcbiAgICB0aGlzLml0ZW0gPSBvcHRpb25zLml0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gb3B0aW9ucy5udW1JdGVtc1xuICAgIHRoaXMuZ3JpZENvbHMgPSBvcHRpb25zLmdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBvcHRpb25zLmdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy50aW1lID0gMzAgLy8gaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5zZXRCa2dzKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG5cbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIucG9wVXBNZXNzYWdlKCdTVEFSVCEnLCAnYmxhY2snKVxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zdGFydFRpbWVyKHRoaXMudGltZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGxldCBkaXZcbiAgICAgIGlmIChERUJVRykge1xuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBzZXRCa2dzKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlcywgZml0IEltYWdlIHRvIHNjZW5lXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICAgIC8vIEFkZCBtYXNrZWQgYmtnXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICAvLyBBZGQgXCJmcm9udFwiIGJrZ1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5tYXNrZWRCa2d9KWBcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIGlmIChERUJVRykgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbMF1dXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gcGxheWVySWQgPT4ge1xuICAgIGlmIChERUJVRykgcGxheWVySWQgPSBwbGF5ZXJJZHNbMF1cbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbcGxheWVySWRdXG4gICAgY29uc3QgeCA9IChwbGF5ZXIudGFyZ2V0WCAvIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoKSArIDAuNVxuICAgIGNvbnN0IHkgPSAocGxheWVyLnRhcmdldFkgLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQpICsgMC41XG5cbiAgICBsZXQgZ29vZENsaWNrID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgICBnb29kQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdvb2RDbGljaykge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ2dvb2QnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKVxuICAgIH1cblxuICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QucmVtb3ZlKCdnb29kJywgJ3dyb25nJylcbiAgICAgIC8vIGFkZCBhIHJlY3Qgc3ZnIGVsZW1lbnQgaW4gdGhlIGNsaXBwYXRoIGZvbGxvd2luZyB0aGVcbiAgICAgIC8vIGN1cnNvciwgb3BhY2l0eTowIGJ5IGRlZmF1bHQsIGRpc3BsYXkgaXQgdG8gZmlsbCB0aGUgY3Vyc29yLlxuICAgICAgLy8gdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc3R5bGUub3BhY2l0eSA9IDFcbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHRoaXMubnVtSXRlbUZvdW5kID09PSB0aGlzLml0ZW1zLmxlbmd0aCAmJiAhdGhpcy5pc0VuZGVkKSB7XG4gICAgICB0aGlzLmlzRW5kZWQgPSB0cnVlXG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbeV1dXG5cbiAgICAgIC8vIGNsYW1wIHBsYXllciBwb3NpdGlvbiB0byBsaW1pdCBvZiB0aGUgc2NlbmVcbiAgICAgIHBsYXllci50YXJnZXRYID0gY2xhbXAocGxheWVyLnRhcmdldFgsIC13aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMilcbiAgICAgIHBsYXllci50YXJnZXRZID0gY2xhbXAocGxheWVyLnRhcmdldFksIC13aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyLCB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyKVxuXG4gICAgICBwbGF5ZXIueCArPSAocGxheWVyLnRhcmdldFggLSBwbGF5ZXIueCkgKiAwLjFcbiAgICAgIHBsYXllci55ICs9IChwbGF5ZXIudGFyZ2V0WSAtIHBsYXllci55KSAqIDAuMVxuXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgcGxheWVyIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwbGF5ZXIucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIHBsYXllciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBwb2ludC54ICs9IHBsYXllci54XG4gICAgICAgIHBvaW50LnkgKz0gcGxheWVyLnlcblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBwbGF5ZXJcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgcGxheWVyIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBwbGF5ZXIuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gcGxheWVyLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IHBsYXllci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gcGxheWVyLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgcGxheWVyLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwocGxheWVyLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiY29uc3QgREVCVUcgPSB0cnVlXG5cbmV4cG9ydCBkZWZhdWx0IERFQlVHXG4iLCJjb25zdCBTZXJ2ZXIgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKSxcbiAgd2Vic29ja2V0OiBuZXcgV2ViU29ja2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKX0vZ2FtZWApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJcbiIsIlxuaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5pbXBvcnQgc2V0dXBUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInXG5cbi8vIHNlcnZlclxuaW1wb3J0IFNlcnZlciBmcm9tICcuLi9jb25zdGFudHMvU2VydmVyJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4uL2NvbnN0YW50cy9EZWJ1ZydcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtcGF0dGVybi5qcGcnXG5pbXBvcnQgc2NlbmUxTWFzayBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLW1hc2suanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS10YXJnZXQuanBnJ1xuaW1wb3J0IHNjZW5lMkJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmcnXG4vLyBpbXBvcnQgc2NlbmUySXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcXFxuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuY29uc3QgdG9rZW5zID0gWycxMjMnLCAnNDU2J11cblxuXG4vLyBwcmVwYXJlIHRoZSBDaGFyYWN0ZXJJZFxuLy8gQ2hhcmFjdGVySWQgLS0+IGdldCB0aGUgaW1hZ2Ugb2YgdGhlIGNoYXJhY3RlclxuLy8gZW5kIHNjZW5lOlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5cbiAgICBpZiAoIURFQlVHKSB7XG4gICAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25Xc09wZW5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gIH1cblxuICBvbldzT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gc2V0dXBUbXBcbiAgICB0aGlzLnNldHVwTWVzc2FnZSA9IHRoaXMubWFpbi5xdWVyeVNlbGVjdG9yKCcuc2V0dXBfX21lc3NhZ2UnKVxuICAgIFNlcnZlci53ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5saXN0ZW5TZXJ2ZXJcbiAgfVxuXG4gIGxpc3RlblNlcnZlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5zcGxpdCgnLCcpXG5cbiAgICBpZiAoZGF0YVswXSA9PT0gJ3Rva2VuX3N1Ym1pdCcpIHtcbiAgICAgIC8vIGxvb3AgaW50byB0aGUgdG9rZW5zLCBpZiB0aGUgdG9rZW4gY29ycmVzcG9uZCwgc2V0IHVwIHRoZSBpZFxuICAgICAgbGV0IHZhbGlkVG9rZW4gPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRva2Vuc1tpXSA9PT0gZGF0YVsxXSAmJiBkYXRhWzJdICE9PSB0aGlzLmZpcnN0UGxheWVySWQpIHtcbiAgICAgICAgICAvLyBkYXRhWzJdICE9PSB0aGlzLmZpcnN0UGxheWVySWQgSW4gY2FzZSBzZWNvbmQgcGxheWVyIHVzZSB0aGUgdG9rZW4gb2YgdGhlIGZpcnN0IHBsYXllclxuICAgICAgICAgIHBsYXllcklkcy5wdXNoKGRhdGFbMl0pXG4gICAgICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDFgKVxuICAgICAgICAgIHZhbGlkVG9rZW4gPSB0cnVlXG4gICAgICAgICAgdGhpcy5maXJzdFBsYXllcklkID0gZGF0YVsyXVxuICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlLmlubmVySFRNTCA9IGBQbGF5ZXIgJHtwbGF5ZXJJZHMubGVuZ3RofSBpcyByZWFkeWBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRUb2tlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDBgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBpZiBib3RoIHBsYXllcnMgYXJlIHNldCwgbGV0J3Mgc3RhcnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgfSwgMTAwMClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjdXJzb3JfbW92ZScpIHtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KGRhdGFbMl0sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQoZGF0YVszXSwgMTApICogdGhpcy52YldpZHRoXG4gICAgICAvLyB3ZSB1c2UgdmJXaWR0aCB0aGUgc2FtZSBjb2VmaWNpZW50IGhlcmUgdG8gaGF2ZSB0aGUgc2FtZSBzcGVlZCBtb3ZlbWVudCBvbiB0b3VjaG1vdmUgWCBhbmQgWVxuICAgICAgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFggPSB4ICsgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFhcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRZID0geSArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRZXG5cbiAgICAgIC8vIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY2xpY2snKSB7XG4gICAgICAvLyBkYXRhWzFdIG5lZWRzIHRvIGJlIHRoZSBpbmRleCBvZiBwbGF5ZXIgKG9yIGlkKVxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlQ2xpY2soZGF0YVsxXSlcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICghREVCVUcpIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXJJZHNbMF19LDBgKVxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgLy8gc2NvcmVzXG4gICAgdGhpcy5zY2VuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMU1hc2ssXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNixcbiAgICAgICAgZ3JpZExpbmVzOiA2LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTJCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDgsXG4gICAgICAgIGdyaWRMaW5lczogOCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMixcbiAgICAgICAgZ3JpZExpbmVzOiAxMixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIC8vIFNldCB0aGUgdmlld2JveCB0byB0aGUgcmF0aW8gb2YgdGhlIHNjZW5lXG4gICAgICB0aGlzLnZiV2lkdGggPSAxOTIwXG4gICAgICB0aGlzLnZiSGVpZ2h0ID0gODQwXG4gICAgICB0aGlzLnNldFBsYXllcnMoKVxuXG4gICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgICAgLi4uc2NlbmUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgYm9hcmRQbGF5ZXJTY29yZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZF9fcGxheWVyX19zY29yZScpLFxuICAgICAgYm9hcmRQbGF5ZXJJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZF9fcGxheWVyX19pdGVtcycpLFxuICAgICAgdGltZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRfX2NlbnRlcl9fdGltZXInKSxcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJzKCkge1xuICAgIHRoaXMucGxheWVySWRzID0gcGxheWVySWRzXG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncHVycGxlJyxcbiAgICAgICdyZWQnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjb2xvcjogY29sb3JzWzBdLFxuICAgICAgICBpZDogcGxheWVySWRzWzBdLFxuICAgICAgfSlcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbMV1dID0gbmV3IFBsYXllcih7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5jdXJzb3JzWzFdLFxuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgaWQ6IHBsYXllcklkc1sxXSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcihkdXJhdGlvbikge1xuICAgIGxldCB0aW1lciA9IGR1cmF0aW9uXG4gICAgbGV0IHNlY29uZHNcblxuICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IGR1cmF0aW9uXG5cbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZXIsIDEwKVxuICAgICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzXG5cbiAgICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IHNlY29uZHNcblxuICAgICAgaWYgKHRpbWVyID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW5kU2NlbmUoJ1RJTUUgT1VUIScpXG4gICAgICB9XG5cbiAgICAgIHRpbWVyIC09IDFcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgc2NvcmUocGxheWVyLCBpdGVtKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSArPSAxXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5ib2FyZFBsYXllclNjb3JlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIGNvbnN0IHplcm9Vbml0ID0gdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSA8IDEwID8gJzAnIDogJydcbiAgICAgICAgdGhpcy5kb20uYm9hcmRQbGF5ZXJTY29yZVtpXS5pbm5lckhUTUwgPSBgJHt6ZXJvVW5pdH0ke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnYm9hcmRfX3BsYXllcl9faXRlbScpXG4gICAgdGhpcy5kb20uYm9hcmRQbGF5ZXJJdGVtc1twbGF5ZXIuaW5kZXhdLmFwcGVuZENoaWxkKGltZylcblxuICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXIuaWR9LCR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKG1lc3NhZ2UgPSAnc3RhZ2UgY29tcGxldGUnKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpXG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UobWVzc2FnZSwgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc2NlbmVzLmxlbmd0aCArIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgcGFydHknKVxuICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKCdkaXNjb25uZWN0X2FsbF91c2VycycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyByZXNldCBwbGF5ZXJzIHBvcyB0byAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnRhcmdldFggPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS50YXJnZXRZID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0ueCA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnkgPSAwXG5cbiAgICAgIC8vIHJlc2V0IGl0ZW1zIGluIGJvYXJkXG4gICAgICB0aGlzLmRvbS5ib2FyZFBsYXllckl0ZW1zW2ldLmlubmVySFRNTCA9ICcnXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxOTIwIDg0MFxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiIHdpZHRoPVxcXCIxOTIwcHhcXFwiIGhlaWdodD1cXFwiMTA4MHB4XFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB3aWR0aD1cXFwiMTkyMHB4XFxcIiBoZWlnaHQ9XFxcIjEwODBweFxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwiYm9hcmRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19jaGFyYWN0ZXJcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2NoYXJhY3RlcjEucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19zY29yZSBjb2xvci0tcHVycGxlIHQtODAtLWJvbGRcXFwiPlxcbiAgICAgICAgMDBcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19uYW1lIHQtNDgtLWJvbGRcXFwiPlxcbiAgICAgICAgUGxheWVyIDFcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19pdGVtc1xcXCI+XFxuXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fY2VudGVyIGJrZy0tYmxhY2tcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImJvYXJkX19jZW50ZXJfX3RpbWVyIHQtMTEyLS1ib2xkIGNvbG9yLS13aGl0ZVxcXCI+XFxuXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19jaGFyYWN0ZXJcXFwiPlxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2NoYXJhY3RlcjIucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19zY29yZSBjb2xvci0tcmVkIHQtODAtLWJvbGRcXFwiPlxcbiAgICAgICAgMDBcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19uYW1lIHQtNDgtLWJvbGRcXFwiPlxcbiAgICAgICAgUGxheWVyIDJcXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJib2FyZF9fcGxheWVyX19pdGVtc1xcXCI+XFxuXFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNldHVwXFxcIj5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNldHVwX19tZXNzYWdlIHQtNjQtLWJvbGRcXFwiPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=