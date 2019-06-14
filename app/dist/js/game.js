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
        scoreCenterRecap: this.element.querySelectorAll('.score__center__recap'),
        scoreItems: this.element.querySelectorAll('.score__items'),
        timer: this.element.querySelector('.timer')
      };
    }
  }, {
    key: "setPlayers",
    value: function setPlayers() {
      this.playerIds = playerIds;
      var colors = ['red', 'blue']; // each player is an object with a key/id

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

      for (var i = 0; i < this.dom.scoreCenterRecap.length; i++) {
        if (i === player.index) {
          this.dom.scoreCenterRecap[i].innerHTML = "P-".concat(player.index + 1, " : ").concat(this.scores[player.index]);
        }
      }

      var img = document.createElement('img');
      img.src = item;
      img.classList.add('score__item');
      this.dom.scoreItems[player.index].appendChild(img);
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
        this.players[playerIds[i]].y = 0;
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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1920 840\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\" width=\"1920px\" height=\"1080px\">\n          <image class=\"scene-svg__image\" width=\"1920px\" height=\"1080px\" />\n        </g>\n      </svg>\n    </div>\n    <div class=\"timer t-32--bold\"></div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-32--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtbWFzay5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1wYXR0ZXJuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXRhcmdldC5qcGciLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9EZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29uc3RhbnRzL1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvR2FtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL1JBRk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9nYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sIl0sIm5hbWVzIjpbIndpbmRvdyIsIkdhbWVNYW5hZ2VyIiwiUGxheWVyIiwicHJvcHMiLCJlbCIsImlkIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJ2YldpZHRoIiwiY2VudGVyWSIsInZiSGVpZ2h0IiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwibWluTWlkZGxlUmFkaXVzIiwibWF4TWlkZGxlUmFkaXVzIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIngiLCJ5IiwidGFyZ2V0WCIsInRhcmdldFkiLCJpc0luc2lkZVRpbWUiLCJzZXRQb2ludHMiLCJwb2ludHMiLCJzbGljZSIsIk1hdGgiLCJQSSIsInN0YXJ0QW5nbGUiLCJyYW5kb20iLCJpIiwibWFyZ2VBbmdsZSIsInN0YXJ0QW5pbSIsImdldE5vdyIsImFuZ2xlIiwiZHVyYXRpb24iLCJwb2ludCIsImNvcyIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsInBsYXllcklkcyIsIkRFQlVHIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwbGF5ZXJJZCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwiZ29vZENsaWNrIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtIiwiZm91bmQiLCJzY29yZSIsInN0eWxlIiwib3BhY2l0eSIsImRlYnVnRWwiLCJudW1JdGVtRm91bmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiaXNFbmRlZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjbGFtcCIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ0b2tlbnMiLCJtYWluIiwiaW5uZXJIVE1MIiwic2V0dXBUbXAiLCJzZXR1cE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJsaXN0ZW5TZXJ2ZXIiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInZhbGlkVG9rZW4iLCJmaXJzdFBsYXllcklkIiwic2VuZCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxTWFzayIsInNjZW5lMUl0ZW0iLCJlZmZlY3QiLCJzY2VuZTJCa2ciLCJzY29yZXMiLCJjdXJyZW50U2NlbmVJbmRleCIsImxvYWRCa2ciLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInNldFBsYXllcnMiLCJzY2VuZSIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsInZhbHVlIiwibWluIiwibWF4IiwidG1wIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsQ0FBQyxZQUFNO0FBQ0w7QUFDQUEsUUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQUlBLDZEQUFKLEVBQXJCO0FBQ0QsQ0FIRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBRWZDLEVBRmUsR0FNYkQsS0FOYSxDQUVmQyxFQUZlO0FBQUEsUUFHZkMsRUFIZSxHQU1iRixLQU5hLENBR2ZFLEVBSGU7QUFBQSxRQUlmQyxLQUplLEdBTWJILEtBTmEsQ0FJZkcsS0FKZTtBQUFBLFFBS2ZDLEtBTGUsR0FNYkosS0FOYSxDQUtmSSxLQUxlO0FBUWpCLFNBQUtILEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWVULE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsQ0FBNUMsQ0FiaUIsQ0FhNkI7O0FBQzlDLFNBQUtDLE9BQUwsR0FBZVgsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFuQixHQUE4QixDQUE3QyxDQWRpQixDQWM4Qjs7QUFDL0MsU0FBS0MsU0FBTCxHQUFpQmIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixJQUE5QyxDQWZpQixDQWVrQzs7QUFDbkQsU0FBS0ksU0FBTCxHQUFpQixLQUFLRCxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsR0FBaUIsR0FBbkQ7QUFDQSxTQUFLRSxlQUFMLEdBQXVCLEtBQUtGLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQyxTQUFMLEdBQWlCLEtBQUtELFNBQXZCLElBQW9DLElBQTVFO0FBQ0EsU0FBS0csZUFBTCxHQUF1QixLQUFLSCxTQUFMLEdBQWlCLENBQUMsS0FBS0MsU0FBTCxHQUFpQixLQUFLRCxTQUF2QixJQUFvQyxJQUE1RTtBQUNBLFNBQUtJLFdBQUwsR0FBbUIsR0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEdBQW5CLENBcEJpQixDQXFCakI7O0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBRUEsU0FBS0MsU0FBTDtBQUNEOzs7O2dDQUVXO0FBQ1YsV0FBS0MsTUFBTCxHQUFjLEVBQWQsQ0FEVSxDQUVWOztBQUNBLFVBQU1DLEtBQUssR0FBSUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBWCxHQUFnQixLQUFLcEIsU0FBbkM7QUFDQSxXQUFLcUIsVUFBTCxHQUFrQkMsMERBQU0sQ0FBQyxDQUFELEVBQUlILElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWQsQ0FBeEI7O0FBRUEsV0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt2QixTQUF6QixFQUFvQ3VCLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBTUMsVUFBVSxHQUFHRiwwREFBTSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQXpCLENBRHVDLENBQ0o7QUFDbkM7O0FBQ0EsWUFBTUcsU0FBUyxHQUFHQywwREFBTSxLQUFLSCxDQUFDLEdBQUdELDBEQUFNLENBQUMsQ0FBRCxFQUFJLEtBQUtiLFdBQVQsQ0FBdkM7QUFDQSxZQUFNa0IsS0FBSyxHQUFHLEtBQUtOLFVBQUwsR0FBa0JFLENBQUMsR0FBR0wsS0FBdEIsR0FBOEJNLFVBQTVDO0FBQ0EsWUFBTUksUUFBUSxHQUFHTiwwREFBTSxDQUFDLEtBQUtiLFdBQU4sRUFBbUIsS0FBS0MsV0FBeEIsQ0FBdkI7QUFFQSxZQUFNbUIsS0FBSyxHQUFHO0FBQ1pGLGVBQUssRUFBTEEsS0FEWTtBQUVaQyxrQkFBUSxFQUFSQSxRQUZZO0FBR1pILG1CQUFTLEVBQVRBLFNBSFk7QUFJWmQsV0FBQyxFQUFFLEtBQUtWLE9BQUwsR0FBZWtCLElBQUksQ0FBQ1csR0FBTCxDQUFTSCxLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtqQixTQUFOLEVBQWlCLEtBQUtDLFNBQXRCLENBSjlCO0FBS1pNLFdBQUMsRUFBRSxLQUFLVCxPQUFMLEdBQWVnQixJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLakIsU0FBTixFQUFpQixLQUFLQyxTQUF0QixDQUw5QjtBQU1aMEIsb0JBQVUsRUFBRSxLQUFLL0IsT0FBTCxHQUFla0IsSUFBSSxDQUFDVyxHQUFMLENBQVNILEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2pCLFNBQU4sRUFBaUIsS0FBS0UsZUFBdEIsQ0FOdkM7QUFPWjBCLG9CQUFVLEVBQUUsS0FBSzlCLE9BQUwsR0FBZWdCLElBQUksQ0FBQ1ksR0FBTCxDQUFTSixLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtqQixTQUFOLEVBQWlCLEtBQUtFLGVBQXRCLENBUHZDO0FBUVoyQixvQkFBVSxFQUFFLEtBQUtqQyxPQUFMLEdBQWVrQixJQUFJLENBQUNXLEdBQUwsQ0FBU0gsS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLZCxlQUFOLEVBQXVCLEtBQUtGLFNBQTVCLENBUnZDO0FBU1o2QixvQkFBVSxFQUFFLEtBQUtoQyxPQUFMLEdBQWVnQixJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLZCxlQUFOLEVBQXVCLEtBQUtGLFNBQTVCO0FBVHZDLFNBQWQ7QUFZQXVCLGFBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsYUFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ2pCLENBQXJCO0FBQ0FpQixhQUFLLENBQUNTLEtBQU4sR0FBY1QsS0FBSyxDQUFDSyxVQUFwQjtBQUNBTCxhQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDTSxVQUFwQjtBQUVBLGFBQUtsQixNQUFMLENBQVl1QixJQUFaLENBQWlCWCxLQUFqQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1ZLFNBQVMsR0FBR0Msd0RBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQUgsR0FBa0MsRUFBekQ7O0lBRXFCQyxLOzs7QUFDbkIsaUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSw2Q0FvSkgsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLFVBQU1DLE9BQU8sR0FBR3RELE1BQU0sQ0FBQ3NELE9BQVAsSUFBa0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBM0Q7QUFDQSxVQUFNQyxNQUFNLEdBQUcxRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIwRCxPQUFuQixDQUEyQjNELE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQmdELFNBQW5CLENBQTZCLENBQTdCLENBQTNCLENBQWY7QUFFQVMsWUFBTSxDQUFDRSxNQUFQLEdBQWdCUCxDQUFDLENBQUNRLE9BQUYsR0FBWVIsQ0FBQyxDQUFDUSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUF6QixHQUFtQ1QsQ0FBQyxDQUFDUyxPQUFyRDtBQUNBSixZQUFNLENBQUNFLE1BQVAsSUFBaUIsS0FBSSxDQUFDRyxVQUF0QjtBQUNBTCxZQUFNLENBQUNNLE1BQVAsR0FBZ0JYLENBQUMsQ0FBQ1EsT0FBRixHQUFZUixDQUFDLENBQUNRLE9BQUYsQ0FBVSxDQUFWLEVBQWFJLE9BQXpCLEdBQW1DWixDQUFDLENBQUNZLE9BQXJEO0FBQ0FQLFlBQU0sQ0FBQ00sTUFBUCxJQUFpQlYsT0FBakI7QUFFQUksWUFBTSxDQUFDckMsT0FBUCxHQUFpQnFDLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixLQUFJLENBQUNNLEtBQXJCLEdBQTZCbEUsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFqRSxDQVRxQixDQVNvRDs7QUFDekVnRCxZQUFNLENBQUNyQyxPQUFQLElBQWtCckIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixDQUEvQyxDQVZxQixDQVU0Qjs7QUFDakRnRCxZQUFNLENBQUNwQyxPQUFQLEdBQWlCb0MsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEtBQUksQ0FBQ0csTUFBckIsR0FBOEJuRSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQWpELEdBQTRELEtBQUksQ0FBQ3dELFNBQWxGO0FBQ0FWLFlBQU0sQ0FBQ3BDLE9BQVAsSUFBa0J0QixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQW5CLEdBQThCLENBQWhELENBWnFCLENBY3JCO0FBQ0QsS0FuS29COztBQUFBLHlDQXFLUCxVQUFBeUQsUUFBUSxFQUFJO0FBQ3hCLFVBQUluQix3REFBSixFQUFXbUIsUUFBUSxHQUFHcEIsU0FBUyxDQUFDLENBQUQsQ0FBcEI7QUFDWCxVQUFNcUIsU0FBUyxHQUFHLEtBQUksQ0FBQ0MsY0FBdkI7QUFDQSxVQUFNYixNQUFNLEdBQUcxRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIwRCxPQUFuQixDQUEyQlUsUUFBM0IsQ0FBZjtBQUNBLFVBQU1sRCxDQUFDLEdBQUl1QyxNQUFNLENBQUNyQyxPQUFQLEdBQWlCckIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFyQyxHQUFnRCxHQUExRDtBQUNBLFVBQU1VLENBQUMsR0FBSXNDLE1BQU0sQ0FBQ3BDLE9BQVAsR0FBaUJ0QixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQXJDLEdBQWlELEdBQTNEO0FBRUEsVUFBSTRELFNBQVMsR0FBRyxLQUFoQjs7QUFFQSxXQUFLLElBQUl6QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUksQ0FBQzBDLEtBQUwsQ0FBV0MsTUFBL0IsRUFBdUMzQyxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDLFlBQU00QyxJQUFJLEdBQUcsS0FBSSxDQUFDRixLQUFMLENBQVcxQyxDQUFYLENBQWI7O0FBQ0EsWUFBSSxDQUFDNEMsSUFBSSxDQUFDQyxLQUFOLElBQ0Z6RCxDQUFDLEdBQUd3RCxJQUFJLENBQUN4RCxDQUFMLEdBQVNtRCxTQURYLElBRUZuRCxDQUFDLEdBQUd3RCxJQUFJLENBQUN4RCxDQUFMLEdBQVNtRCxTQUZYLElBR0ZsRCxDQUFDLEdBQUd1RCxJQUFJLENBQUN2RCxDQUFMLEdBQVNrRCxTQUhYLElBSUZsRCxDQUFDLEdBQUd1RCxJQUFJLENBQUN2RCxDQUFMLEdBQVNrRCxTQUpmLEVBSTBCO0FBQ3hCdEUsZ0JBQU0sQ0FBQ0MsV0FBUCxDQUFtQjRFLEtBQW5CLENBQXlCbkIsTUFBekIsRUFBaUMsS0FBSSxDQUFDaUIsSUFBdEM7QUFDQUEsY0FBSSxDQUFDQyxLQUFMLEdBQWEsSUFBYjtBQUNBRCxjQUFJLENBQUN2RSxFQUFMLENBQVEwRSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsQ0FBeEI7QUFDQUosY0FBSSxDQUFDSyxPQUFMLENBQWFGLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLENBQTdCO0FBRUEsZUFBSSxDQUFDRSxZQUFMLEdBQW9CLEtBQUksQ0FBQ0EsWUFBTCxHQUFvQixDQUF4QztBQUNBVCxtQkFBUyxHQUFHLElBQVo7QUFDRDtBQUNGOztBQUVELFVBQUlBLFNBQUosRUFBZTtBQUNiZCxjQUFNLENBQUN0RCxFQUFQLENBQVU4RSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixNQUF4QjtBQUNELE9BRkQsTUFFTztBQUNMekIsY0FBTSxDQUFDdEQsRUFBUCxDQUFVOEUsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsT0FBeEI7QUFDRCxPQTlCdUIsQ0FnQ3hCOzs7QUFFQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YxQixjQUFNLENBQUN0RCxFQUFQLENBQVU4RSxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixNQUEzQixFQUFtQyxPQUFuQyxFQURlLENBRWY7QUFDQTtBQUNBO0FBQ0QsT0FMUyxFQUtQLElBTE8sQ0FBVjs7QUFPQSxVQUFJLEtBQUksQ0FBQ0osWUFBTCxLQUFzQixLQUFJLENBQUNSLEtBQUwsQ0FBV0MsTUFBakMsSUFBMkMsQ0FBQyxLQUFJLENBQUNZLE9BQXJELEVBQThEO0FBQzVELGFBQUksQ0FBQ0EsT0FBTCxHQUFlLElBQWY7QUFDQXRGLGNBQU0sQ0FBQ0MsV0FBUCxDQUFtQnNGLFFBQW5CO0FBQ0Q7QUFDRixLQWxOb0I7O0FBQUEsdUNBb05ULFVBQUFsQyxDQUFDLEVBQUk7QUFBQSxVQUNQbUMsR0FETyxHQUNDbkMsQ0FBQyxDQUFDb0MsTUFESCxDQUNQRCxHQURPO0FBRWYsV0FBSSxDQUFDRSxZQUFMLEdBQW9CLEtBQUksQ0FBQ0EsWUFBTCxHQUFvQixDQUFDLEtBQUksQ0FBQ0MsZ0JBQUwsR0FBd0IsS0FBSSxDQUFDRCxZQUE5QixJQUE4QyxLQUFJLENBQUNFLGdCQUEzRixDQUZlLENBSWY7O0FBQ0EsV0FBSyxJQUFJeEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3BCLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQmdELFNBQW5CLENBQTZCeUIsTUFBakQsRUFBeUR0RCxDQUFDLEVBQTFELEVBQThEO0FBQzVELFlBQU1zQyxNQUFNLEdBQUcxRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIwRCxPQUFuQixDQUEyQjNELE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQmdELFNBQW5CLENBQTZCN0IsQ0FBN0IsQ0FBM0IsQ0FBZixDQUQ0RCxDQUc1RDs7QUFDQXNDLGNBQU0sQ0FBQ3JDLE9BQVAsR0FBaUJ3RSx5REFBSyxDQUFDbkMsTUFBTSxDQUFDckMsT0FBUixFQUFpQixDQUFDckIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFwQixHQUE4QixDQUEvQyxFQUFrRFYsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixDQUEvRSxDQUF0QjtBQUNBZ0QsY0FBTSxDQUFDcEMsT0FBUCxHQUFpQnVFLHlEQUFLLENBQUNuQyxNQUFNLENBQUNwQyxPQUFSLEVBQWlCLENBQUN0QixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQXBCLEdBQStCLENBQWhELEVBQW1EWixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQW5CLEdBQThCLENBQWpGLENBQXRCO0FBRUE4QyxjQUFNLENBQUN2QyxDQUFQLElBQVksQ0FBQ3VDLE1BQU0sQ0FBQ3JDLE9BQVAsR0FBaUJxQyxNQUFNLENBQUN2QyxDQUF6QixJQUE4QixHQUExQztBQUNBdUMsY0FBTSxDQUFDdEMsQ0FBUCxJQUFZLENBQUNzQyxNQUFNLENBQUNwQyxPQUFQLEdBQWlCb0MsTUFBTSxDQUFDdEMsQ0FBekIsSUFBOEIsR0FBMUMsQ0FSNEQsQ0FXNUQ7QUFDQTs7QUFDQSxhQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyQixNQUFNLENBQUNqQyxNQUFQLENBQWNpRCxNQUFsQyxFQUEwQzNDLENBQUMsRUFBM0MsRUFBK0M7QUFDN0MsY0FBTU0sS0FBSyxHQUFHcUIsTUFBTSxDQUFDakMsTUFBUCxDQUFjTSxDQUFkLENBQWQsQ0FENkMsQ0FHN0M7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsY0FBTStELE9BQU8sR0FBRyxDQUFDTixHQUFHLEdBQUduRCxLQUFLLENBQUNKLFNBQWIsSUFBMEJJLEtBQUssQ0FBQ0QsUUFBaEMsR0FBMkMsS0FBSSxDQUFDc0QsWUFBaEU7QUFFQXJELGVBQUssQ0FBQ2xCLENBQU4sR0FBVWtCLEtBQUssQ0FBQ08sTUFBTixHQUFlLENBQUNQLEtBQUssQ0FBQ1MsS0FBTixHQUFjVCxLQUFLLENBQUNPLE1BQXJCLElBQStCbUQsNkRBQVMsQ0FBQ0QsT0FBRCxDQUFqRTtBQUNBekQsZUFBSyxDQUFDakIsQ0FBTixHQUFVaUIsS0FBSyxDQUFDUSxNQUFOLEdBQWUsQ0FBQ1IsS0FBSyxDQUFDVSxLQUFOLEdBQWNWLEtBQUssQ0FBQ1EsTUFBckIsSUFBK0JrRCw2REFBUyxDQUFDRCxPQUFELENBQWpFOztBQUVBLGNBQUlBLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBSXpELEtBQUssQ0FBQzJELFdBQVYsRUFBdUI7QUFDckIzRCxtQkFBSyxDQUFDTyxNQUFOLEdBQWVQLEtBQUssQ0FBQ2xCLENBQXJCO0FBQ0FrQixtQkFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ2pCLENBQXJCO0FBQ0FpQixtQkFBSyxDQUFDUyxLQUFOLEdBQWNULEtBQUssQ0FBQ0ssVUFBcEI7QUFDQUwsbUJBQUssQ0FBQ1UsS0FBTixHQUFjVixLQUFLLENBQUNNLFVBQXBCO0FBQ0FOLG1CQUFLLENBQUMyRCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0EzRCxtQkFBSyxDQUFDSixTQUFOLEdBQWtCQywwREFBTSxFQUF4QjtBQUNELGFBUEQsTUFPTztBQUNMRyxtQkFBSyxDQUFDTyxNQUFOLEdBQWVQLEtBQUssQ0FBQ2xCLENBQXJCO0FBQ0FrQixtQkFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ2pCLENBQXJCO0FBQ0FpQixtQkFBSyxDQUFDUyxLQUFOLEdBQWNULEtBQUssQ0FBQ0csVUFBcEI7QUFDQUgsbUJBQUssQ0FBQ1UsS0FBTixHQUFjVixLQUFLLENBQUNJLFVBQXBCO0FBQ0FKLG1CQUFLLENBQUMyRCxXQUFOLEdBQW9CLElBQXBCO0FBQ0EzRCxtQkFBSyxDQUFDSixTQUFOLEdBQWtCQywwREFBTSxFQUF4QjtBQUNEO0FBQ0YsV0E5QjRDLENBZ0M3Qzs7O0FBQ0FHLGVBQUssQ0FBQ2xCLENBQU4sSUFBV3VDLE1BQU0sQ0FBQ3ZDLENBQWxCO0FBQ0FrQixlQUFLLENBQUNqQixDQUFOLElBQVdzQyxNQUFNLENBQUN0QyxDQUFsQixDQWxDNkMsQ0FvQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0Q7O0FBRURzQyxjQUFNLENBQUN0RCxFQUFQLENBQVU2RixZQUFWLENBQXVCLEdBQXZCLEVBQTRCLEtBQUksQ0FBQ0MsUUFBTCxDQUFjeEMsTUFBTSxDQUFDakMsTUFBckIsQ0FBNUI7QUFDRDtBQUNGLEtBbFNvQjs7QUFDbkIsU0FBSzBFLE9BQUwsR0FBZS9DLE9BQU8sQ0FBQ2hELEVBQXZCO0FBQ0EsU0FBS2dHLEdBQUwsR0FBV2hELE9BQU8sQ0FBQ2dELEdBQW5CO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQmpELE9BQU8sQ0FBQ2lELFNBQXpCO0FBQ0EsU0FBSzFCLElBQUwsR0FBWXZCLE9BQU8sQ0FBQ3VCLElBQXBCO0FBQ0EsU0FBSzJCLFFBQUwsR0FBZ0JsRCxPQUFPLENBQUNrRCxRQUF4QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JuRCxPQUFPLENBQUNtRCxRQUF4QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJwRCxPQUFPLENBQUNvRCxTQUF6QjtBQUNBLFNBQUtsRyxLQUFMLEdBQWE4QyxPQUFPLENBQUM5QyxLQUFyQjtBQUNBLFNBQUttRyxJQUFMLEdBQVksRUFBWixDQVRtQixDQVNKOztBQUVmLFNBQUtDLEdBQUw7QUFDQSxTQUFLQyxHQUFMO0FBQ0Q7Ozs7MEJBRUs7QUFDSixXQUFLRCxHQUFMLEdBQVc7QUFDVEUsZ0JBQVEsRUFBRSxLQUFLVCxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsWUFBM0IsQ0FERDtBQUVUQyxzQkFBYyxFQUFFLEtBQUtYLE9BQUwsQ0FBYVUsYUFBYixDQUEyQixtQkFBM0IsQ0FGUDtBQUdURSxtQkFBVyxFQUFFLEtBQUtaLE9BQUwsQ0FBYVUsYUFBYixDQUEyQixzQkFBM0IsQ0FISjtBQUlURyxzQkFBYyxFQUFFLEtBQUtiLE9BQUwsQ0FBYVUsYUFBYixDQUEyQiwwQkFBM0I7QUFKUCxPQUFYO0FBTUQ7OzswQkFFSztBQUNKLFdBQUtJLE9BQUwsR0FESSxDQUdKOztBQUNBLFdBQUt2QixZQUFMLEdBQW9CLENBQXBCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QixHQUF4QjtBQUNBLFdBQUtzQixXQUFMLEdBQW1CbEgsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixJQUFoRCxDQVBJLENBUUo7O0FBQ0EsV0FBS3lHLFFBQUwsR0FBZ0JuSCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJTLE9BQW5CLEdBQTZCLElBQTdDLENBVEksQ0FXSjs7QUFDQSxXQUFLNkQsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFdBQUtVLFlBQUwsR0FBb0IsQ0FBcEIsQ0FiSSxDQWVKOztBQUNBLFdBQUtmLEtBQUwsR0FBYSxLQUFLaUMsT0FBTCxDQUFhaUIsV0FBMUI7QUFDQSxXQUFLakQsTUFBTCxHQUFjLEtBQUtnQyxPQUFMLENBQWFrQixZQUEzQjtBQUNBLFdBQUt0RCxVQUFMLEdBQWtCdUQsZ0VBQWEsQ0FBQyxLQUFLbkIsT0FBTCxDQUFhb0IsVUFBZCxDQUEvQjtBQUNBLFdBQUtuRCxTQUFMLEdBQWlCb0QsK0RBQVksQ0FBQyxLQUFLckIsT0FBTCxDQUFhb0IsVUFBZCxDQUE3Qjs7QUFFQSxVQUFJLEtBQUtiLEdBQUwsQ0FBU0ssV0FBYixFQUEwQjtBQUN4QixhQUFLVSxhQUFMO0FBQ0Q7O0FBQ0QsV0FBS0MsT0FBTDtBQUNBLFdBQUtDLFFBQUwsR0F6QkksQ0EyQko7O0FBQ0EsV0FBS0MsTUFBTCxDQUFZLElBQVo7QUFDQSxXQUFLQyxTQUFMLENBQWUsSUFBZjtBQUVBN0gsWUFBTSxDQUFDQyxXQUFQLENBQW1CNkgsWUFBbkIsQ0FBZ0MsUUFBaEMsRUFBMEMsT0FBMUM7QUFDQTlILFlBQU0sQ0FBQ0MsV0FBUCxDQUFtQjhILFVBQW5CLENBQThCLEtBQUt0QixJQUFuQztBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQyxHQUFMLENBQVNLLFdBQVQsQ0FBcUIxRyxFQUFyQixHQUEwQjJILDhDQUFNLEVBQWhDO0FBQ0EsV0FBS3RCLEdBQUwsQ0FBU00sY0FBVCxDQUF3QmYsWUFBeEIsQ0FBcUMsV0FBckMsaUJBQTBELEtBQUtTLEdBQUwsQ0FBU0ssV0FBVCxDQUFxQjFHLEVBQS9FO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUs0SCxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsVUFBSTlHLENBQUo7QUFDQSxVQUFJQyxDQUFKOztBQUVBLFdBQUssSUFBSVcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLd0UsUUFBekIsRUFBbUN4RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDWixTQUFDLEdBQUdZLENBQUMsR0FBRyxHQUFSLENBRHNDLENBQzFCOztBQUNaLGFBQUssSUFBSW1HLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSzFCLFNBQXpCLEVBQW9DMEIsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QzlHLFdBQUMsR0FBRzhHLENBQUMsR0FBRyxHQUFSLENBRHVDLENBQzNCOztBQUNaLGNBQU1DLEdBQUcsR0FBRztBQUFFaEgsYUFBQyxFQUFEQSxDQUFGO0FBQUtDLGFBQUMsRUFBREE7QUFBTCxXQUFaO0FBQ0EsZUFBSzZHLGVBQUwsQ0FBcUJqRixJQUFyQixDQUEwQm1GLEdBQTFCO0FBQ0Q7QUFDRjtBQUNGOzs7K0JBRVU7QUFDVCxXQUFLMUQsS0FBTCxHQUFhLEVBQWI7O0FBRUEsV0FBSyxJQUFJMUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdUUsUUFBekIsRUFBbUN2RSxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDO0FBQ0EsWUFBTXFHLEVBQUUsR0FBR0MsNkRBQVMsQ0FBQyxDQUFELEVBQUksS0FBS0osZUFBTCxDQUFxQnZELE1BQXJCLEdBQThCLENBQWxDLENBQXBCO0FBQ0EsWUFBTXZELENBQUMsR0FBRyxLQUFLOEcsZUFBTCxDQUFxQkcsRUFBckIsRUFBeUJqSCxDQUF6QixHQUE2QixLQUFLb0YsUUFBNUM7QUFDQSxZQUFNbkYsQ0FBQyxHQUFHLEtBQUs2RyxlQUFMLENBQXFCRyxFQUFyQixFQUF5QmhILENBQXpCLEdBQTZCLEtBQUtvRixTQUE1QztBQUNBLGFBQUt5QixlQUFMLENBQXFCSyxNQUFyQixDQUE0QkYsRUFBNUIsRUFBZ0MsQ0FBaEMsRUFMc0MsQ0FPdEM7QUFDQTs7QUFDQSxZQUFNRyxRQUFRLEdBQUdoRixRQUFRLENBQUNpRixlQUFULENBQXlCLDRCQUF6QixFQUF1RCxPQUF2RCxDQUFqQjtBQUNBRCxnQkFBUSxDQUFDRSxjQUFULENBQXdCLElBQXhCLEVBQThCLFFBQTlCLEVBQXdDLEtBQUt0QixRQUE3QztBQUNBb0IsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixPQUE5QixFQUF1QyxLQUFLdEIsUUFBNUM7QUFDQW9CLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsOEJBQXhCLEVBQXdELE1BQXhELEVBQWdFLEtBQUs5RCxJQUFyRTtBQUNBNEQsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixZQUFzQ3RILENBQUMsR0FBRyxHQUExQztBQUNBb0gsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixZQUFzQ3JILENBQUMsR0FBRyxHQUExQztBQUNBbUgsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixXQUE5Qix1QkFBeUQsS0FBS3RCLFFBQUwsR0FBZ0IsQ0FBekUsZUFBK0UsS0FBS0EsUUFBTCxHQUFnQixDQUEvRjtBQUNBb0IsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixxQkFBOUIsRUFBcUQsZ0JBQXJEO0FBRUEsYUFBSy9CLEdBQUwsQ0FBU00sY0FBVCxDQUF3QjBCLFdBQXhCLENBQW9DSCxRQUFwQyxFQWxCc0MsQ0FvQnRDOztBQUNBLFlBQUlJLEdBQUcsU0FBUDs7QUFDQSxZQUFJekYsd0RBQUosRUFBVztBQUNUeUYsYUFBRyxHQUFHcEYsUUFBUSxDQUFDcUYsYUFBVCxDQUF1QixLQUF2QixDQUFOO0FBQ0FELGFBQUcsQ0FBQ3pELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixPQUFsQjtBQUNBd0QsYUFBRyxDQUFDN0QsS0FBSixDQUFVK0QsSUFBVixhQUFvQjFILENBQUMsR0FBRyxHQUF4QjtBQUNBd0gsYUFBRyxDQUFDN0QsS0FBSixDQUFVZ0UsR0FBVixhQUFtQjFILENBQUMsR0FBRyxHQUF2QjtBQUNBLGVBQUsrRSxPQUFMLENBQWF1QyxXQUFiLENBQXlCQyxHQUF6QjtBQUNEOztBQUVELFlBQU1SLEdBQUcsR0FBRztBQUNWL0gsWUFBRSxFQUFFbUksUUFETTtBQUVWdkQsaUJBQU8sRUFBRTJELEdBRkM7QUFHVnhILFdBQUMsRUFBREEsQ0FIVTtBQUlWQyxXQUFDLEVBQURBLENBSlUsQ0FNWjs7QUFOWSxTQUFaO0FBT0EsYUFBS3FELEtBQUwsQ0FBV3pCLElBQVgsQ0FBZ0JtRixHQUFoQjtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSO0FBQ0EsV0FBS3pCLEdBQUwsQ0FBU0UsUUFBVCxDQUFrQlgsWUFBbEIsQ0FBK0IsU0FBL0IsZ0JBQWlEakcsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFwRSxjQUErRVYsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFsRyxHQUZRLENBR1I7O0FBQ0EsV0FBSzhGLEdBQUwsQ0FBU0ksY0FBVCxDQUF3QjJCLGNBQXhCLENBQXVDLDhCQUF2QyxFQUF1RSxNQUF2RSxFQUErRSxLQUFLckMsR0FBcEY7QUFDQSxXQUFLTSxHQUFMLENBQVNJLGNBQVQsQ0FBd0IyQixjQUF4QixDQUF1QyxJQUF2QyxFQUE2QyxxQkFBN0MsRUFBb0UsZ0JBQXBFLEVBTFEsQ0FNUjs7QUFDQSxXQUFLdEMsT0FBTCxDQUFhckIsS0FBYixDQUFtQmlFLGVBQW5CLGlCQUE0QyxLQUFLMUMsU0FBakQ7QUFDRCxLLENBRUQ7QUFDQTtBQUNBOzs7OzJCQUVPMkMsTSxFQUFRO0FBQ2IsVUFBTUMsRUFBRSxHQUFHRCxNQUFNLEdBQUcsa0JBQUgsR0FBd0IscUJBQXpDO0FBQ0EsVUFBSTlGLHdEQUFKLEVBQVdsRCxNQUFNLENBQUNpSixFQUFELENBQU4sQ0FBVyxXQUFYLEVBQXdCLEtBQUtDLGVBQTdCLEVBQThDLEtBQTlDO0FBQ1hsSixZQUFNLENBQUNpSixFQUFELENBQU4sQ0FBVyxPQUFYLEVBQW9CLEtBQUtFLFdBQXpCLEVBQXNDLEtBQXRDO0FBQ0Q7Ozs4QkFFU0gsTSxFQUFRO0FBQ2hCLFVBQU1DLEVBQUUsR0FBR0QsTUFBTSxHQUFHLGtCQUFILEdBQXdCLHFCQUF6QztBQUNBaEosWUFBTSxDQUFDaUosRUFBRCxDQUFOLENBQVcsS0FBWCxFQUFrQixLQUFLRyxTQUF2QixFQUFrQyxLQUFsQztBQUNEOzs7QUFrSkQ7QUFDQTs2QkFDUzNILE0sRUFBdUI7QUFBQSxVQUFmNEgsT0FBZSx1RUFBTCxHQUFLO0FBQzlCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHN0gsTUFBTSxDQUFDaUQsTUFBeEI7QUFDQSxVQUFJNEUsUUFBUSxHQUFHLENBQWYsRUFBa0IsT0FBTyxNQUFQO0FBRWxCLFVBQUlDLElBQUksZUFBUTlILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU4sQ0FBbEIsY0FBdUJNLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUwsQ0FBakMsT0FBUixDQUw4QixDQU05QjtBQUNBOztBQUVBLFdBQUssSUFBSVcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VILFFBQXBCLEVBQThCdkgsQ0FBQyxFQUEvQixFQUFtQztBQUNqQyxZQUFNeUgsRUFBRSxHQUFHL0gsTUFBTSxDQUFDLENBQUNNLENBQUMsR0FBRyxDQUFKLEdBQVF1SCxRQUFULElBQXFCQSxRQUF0QixDQUFqQjtBQUNBLFlBQU1HLEVBQUUsR0FBR2hJLE1BQU0sQ0FBQ00sQ0FBRCxDQUFqQjtBQUNBLFlBQU0ySCxFQUFFLEdBQUdqSSxNQUFNLENBQUMsQ0FBQ00sQ0FBQyxHQUFHLENBQUwsSUFBVXVILFFBQVgsQ0FBakI7QUFDQSxZQUFNSyxFQUFFLEdBQUdsSSxNQUFNLENBQUMsQ0FBQ00sQ0FBQyxHQUFHLENBQUwsSUFBVXVILFFBQVgsQ0FBakI7QUFFQSxZQUFNTSxFQUFFLEdBQUdILEVBQUUsQ0FBQ3RJLENBQUgsR0FBTyxDQUFDdUksRUFBRSxDQUFDdkksQ0FBSCxHQUFPcUksRUFBRSxDQUFDckksQ0FBWCxJQUFnQixDQUFoQixHQUFvQmtJLE9BQXRDO0FBQ0EsWUFBTVEsRUFBRSxHQUFHSixFQUFFLENBQUNySSxDQUFILEdBQU8sQ0FBQ3NJLEVBQUUsQ0FBQ3RJLENBQUgsR0FBT29JLEVBQUUsQ0FBQ3BJLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0JpSSxPQUF0QztBQUVBLFlBQU1TLEVBQUUsR0FBR0osRUFBRSxDQUFDdkksQ0FBSCxHQUFPLENBQUN3SSxFQUFFLENBQUN4SSxDQUFILEdBQU9zSSxFQUFFLENBQUN0SSxDQUFYLElBQWdCLENBQWhCLEdBQW9Ca0ksT0FBdEM7QUFDQSxZQUFNVSxFQUFFLEdBQUdMLEVBQUUsQ0FBQ3RJLENBQUgsR0FBTyxDQUFDdUksRUFBRSxDQUFDdkksQ0FBSCxHQUFPcUksRUFBRSxDQUFDckksQ0FBWCxJQUFnQixDQUFoQixHQUFvQmlJLE9BQXRDLENBVmlDLENBWWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBRSxZQUFJLGVBQVFLLEVBQVIsY0FBY0MsRUFBZCxjQUFvQkMsRUFBcEIsY0FBMEJDLEVBQTFCLGNBQWdDTCxFQUFFLENBQUN2SSxDQUFuQyxjQUF3Q3VJLEVBQUUsQ0FBQ3RJLENBQTNDLENBQUo7QUFDRDs7QUFFRCx1QkFBVW1JLElBQVYsT0EvQjhCLENBK0JaO0FBQ25COzs7OEJBRVM7QUFDUixXQUFLM0IsTUFBTCxDQUFZLEtBQVo7QUFDQSxXQUFLQyxTQUFMLENBQWUsS0FBZjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Vkg7QUFBQSxJQUFNM0UsS0FBSyxHQUFHLElBQWQ7QUFFZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQSxJQUFNOEcsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRWpLLE1BQU0sQ0FBQ2tLLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixPQUEvQixFQUF3QyxJQUF4QyxDQURPO0FBRWJDLFdBQVMsRUFBRSxJQUFJQyxTQUFKLFdBQWlCdEssTUFBTSxDQUFDa0ssUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLE9BQXZCLENBQStCLE9BQS9CLEVBQXdDLElBQXhDLENBQWpCO0FBRkUsQ0FBZjtBQUtlSixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNL0csU0FBUyxHQUFHQyx3REFBSyxHQUFHLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FBSCxHQUFrQyxFQUF6RDtBQUNBLElBQU1xSCxNQUFNLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFmLEMsQ0FHQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJ0SyxXOzs7QUFDbkIseUJBQWM7QUFBQTs7QUFBQTs7QUFBQSxzQ0FVSCxZQUFNO0FBQ2YsV0FBSSxDQUFDdUssSUFBTCxDQUFVQyxTQUFWLEdBQXNCQyxzRUFBdEI7QUFDQSxXQUFJLENBQUNDLFlBQUwsR0FBb0IsS0FBSSxDQUFDSCxJQUFMLENBQVUzRCxhQUFWLENBQXdCLGlCQUF4QixDQUFwQjtBQUNBbUQsK0RBQU0sQ0FBQ0ssU0FBUCxDQUFpQk8sU0FBakIsR0FBNkIsS0FBSSxDQUFDQyxZQUFsQztBQUNELEtBZGE7O0FBQUEsMENBZ0JDLFVBQUFDLEtBQUssRUFBSTtBQUN0QixVQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUFYLENBQWlCLEdBQWpCLENBQWI7O0FBRUEsVUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLGNBQWhCLEVBQWdDO0FBQzlCO0FBQ0EsWUFBSUUsVUFBVSxHQUFHLEtBQWpCOztBQUNBLGFBQUssSUFBSWxKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3SSxNQUFNLENBQUM3RixNQUEzQixFQUFtQzNDLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsY0FBSXdJLE1BQU0sQ0FBQ3hJLENBQUQsQ0FBTixLQUFjZ0osSUFBSSxDQUFDLENBQUQsQ0FBbEIsSUFBeUJBLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxLQUFJLENBQUNHLGFBQTlDLEVBQTZEO0FBQzNEO0FBQ0FqSSxxQkFBUyxDQUFDRCxJQUFWLENBQWUrSCxJQUFJLENBQUMsQ0FBRCxDQUFuQjtBQUNBZixxRUFBTSxDQUFDSyxTQUFQLENBQWlCYyxJQUFqQix1QkFBcUNKLElBQUksQ0FBQyxDQUFELENBQXpDO0FBQ0FFLHNCQUFVLEdBQUcsSUFBYjtBQUNBLGlCQUFJLENBQUNDLGFBQUwsR0FBcUJILElBQUksQ0FBQyxDQUFELENBQXpCO0FBQ0EsaUJBQUksQ0FBQ0osWUFBTCxDQUFrQkYsU0FBbEIsb0JBQXdDeEgsU0FBUyxDQUFDeUIsTUFBbEQ7QUFDRDtBQUNGOztBQUVELFlBQUl1RyxVQUFVLEtBQUssS0FBbkIsRUFBMEI7QUFDeEJqQixtRUFBTSxDQUFDSyxTQUFQLENBQWlCYyxJQUFqQix1QkFBcUNKLElBQUksQ0FBQyxDQUFELENBQXpDO0FBQ0Q7O0FBRUQsWUFBSTlILFNBQVMsQ0FBQ3lCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUI7QUFDQVUsb0JBQVUsQ0FBQyxZQUFNO0FBQ2YsaUJBQUksQ0FBQ2dHLElBQUw7QUFDRCxXQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRixPQXhCRCxNQXdCTyxJQUFJTCxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksYUFBaEIsRUFBK0I7QUFDcEMsWUFBTTVKLENBQUMsR0FBR2tLLFVBQVUsQ0FBQ04sSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVLEVBQVYsQ0FBVixHQUEwQixLQUFJLENBQUNySyxPQUF6Qzs7QUFDQSxZQUFNVSxDQUFDLEdBQUdpSyxVQUFVLENBQUNOLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVSxFQUFWLENBQVYsR0FBMEIsS0FBSSxDQUFDckssT0FBekMsQ0FGb0MsQ0FHcEM7OztBQUNBLGFBQUksQ0FBQ2lELE9BQUwsQ0FBYW9ILElBQUksQ0FBQyxDQUFELENBQWpCLEVBQXNCMUosT0FBdEIsR0FBZ0NGLENBQUMsR0FBRyxLQUFJLENBQUN3QyxPQUFMLENBQWFvSCxJQUFJLENBQUMsQ0FBRCxDQUFqQixFQUFzQjFKLE9BQTFEO0FBQ0EsYUFBSSxDQUFDc0MsT0FBTCxDQUFhb0gsSUFBSSxDQUFDLENBQUQsQ0FBakIsRUFBc0J6SixPQUF0QixHQUFnQ0YsQ0FBQyxHQUFHLEtBQUksQ0FBQ3VDLE9BQUwsQ0FBYW9ILElBQUksQ0FBQyxDQUFELENBQWpCLEVBQXNCekosT0FBMUQsQ0FMb0MsQ0FPcEM7QUFDRCxPQVJNLE1BUUEsSUFBSXlKLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxPQUFoQixFQUF5QjtBQUM5QjtBQUNBLGFBQUksQ0FBQ08sWUFBTCxDQUFrQm5DLFdBQWxCLENBQThCNEIsSUFBSSxDQUFDLENBQUQsQ0FBbEM7QUFDRDtBQUNGLEtBdkRhOztBQUNaLFNBQUtQLElBQUwsR0FBWWpILFFBQVEsQ0FBQ3NELGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjs7QUFFQSxRQUFJLENBQUMzRCx3REFBTCxFQUFZO0FBQ1Y4RywrREFBTSxDQUFDSyxTQUFQLENBQWlCa0IsTUFBakIsR0FBMEIsS0FBS0MsUUFBL0I7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLSixJQUFMO0FBQ0Q7QUFDRjs7OzsyQkFpRE07QUFDTCxVQUFJLENBQUNsSSx3REFBTCxFQUFZOEcseURBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsaUJBQStCbEksU0FBUyxDQUFDLENBQUQsQ0FBeEM7QUFDWixXQUFLdUgsSUFBTCxDQUFVQyxTQUFWLEdBQXNCZ0IscUVBQXRCO0FBRUEsV0FBS3RGLE9BQUwsR0FBZTVDLFFBQVEsQ0FBQ3NELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZixDQUpLLENBTUw7O0FBQ0EsV0FBSzZFLE1BQUwsR0FBYyxDQUNaO0FBQ0V0RixXQUFHLEVBQUV1RixzRkFEUDtBQUVFdEYsaUJBQVMsRUFBRXVGLG1GQUZiO0FBR0VqSCxZQUFJLEVBQUVrSCxxRkFIUjtBQUlFdkYsZ0JBQVEsRUFBRSxDQUpaO0FBS0VDLGdCQUFRLEVBQUUsQ0FMWjtBQU1FQyxpQkFBUyxFQUFFLENBTmI7QUFPRXNGLGNBQU0sRUFBRTtBQVBWLE9BRFksRUFTVDtBQUNEMUYsV0FBRyxFQUFFMkYsNEVBREo7QUFFRDFGLGlCQUFTLEVBQUUwRiw0RUFGVjtBQUdEcEgsWUFBSSxFQUFFa0gscUZBSEw7QUFJRHZGLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxnQkFBUSxFQUFFLENBTFQ7QUFNREMsaUJBQVMsRUFBRSxDQU5WO0FBT0RzRixjQUFNLEVBQUU7QUFQUCxPQVRTLEVBaUJUO0FBQ0QxRixXQUFHLEVBQUV1RixzRkFESjtBQUVEdEYsaUJBQVMsRUFBRXNGLHNGQUZWO0FBR0RoSCxZQUFJLEVBQUVrSCxxRkFITDtBQUlEdkYsZ0JBQVEsRUFBRSxDQUpUO0FBS0RDLGdCQUFRLEVBQUUsRUFMVDtBQU1EQyxpQkFBUyxFQUFFLEVBTlY7QUFPRHNGLGNBQU0sRUFBRTtBQVBQLE9BakJTLEVBeUJUO0FBQ0QxRixXQUFHLEVBQUV1RixzRkFESjtBQUVEdEYsaUJBQVMsRUFBRXNGLHNGQUZWO0FBR0RoSCxZQUFJLEVBQUVrSCxxRkFITDtBQUlEdkYsZ0JBQVEsRUFBRSxDQUpUO0FBS0RDLGdCQUFRLEVBQUUsRUFMVDtBQU1EQyxpQkFBUyxFQUFFLEVBTlY7QUFPRHNGLGNBQU0sRUFBRTtBQVBQLE9BekJTLENBQWQ7QUFtQ0EsV0FBS25JLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBS3FJLE1BQUwsR0FBYyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQ7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQUVBLFdBQUtDLE9BQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1I7QUFDQSxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsR0FBSixHQUFVLEtBQUtYLE1BQUwsQ0FBWSxLQUFLTyxpQkFBakIsRUFBb0M3RixHQUE5Qzs7QUFDQStGLFNBQUcsQ0FBQ0csTUFBSixHQUFhLFlBQU07QUFDakI7QUFDQSxjQUFJLENBQUM1RixHQUFMLEdBRmlCLENBR2pCOzs7QUFDQSxjQUFJLENBQUNoRyxPQUFMLEdBQWUsSUFBZjtBQUNBLGNBQUksQ0FBQ0UsUUFBTCxHQUFnQixHQUFoQjs7QUFDQSxjQUFJLENBQUMyTCxVQUFMOztBQUVBLFlBQU1DLEtBQUssR0FBRyxNQUFJLENBQUNkLE1BQUwsQ0FBWSxNQUFJLENBQUNPLGlCQUFqQixDQUFkO0FBRUEsY0FBSSxDQUFDWCxZQUFMLEdBQW9CLElBQUluSSx5REFBSjtBQUNsQi9DLFlBQUUsRUFBRSxNQUFJLENBQUNzRyxHQUFMLENBQVM4RixLQURLO0FBRWxCbE0sZUFBSyxFQUFFLE1BQUksQ0FBQzJMO0FBRk0sV0FHZk8sS0FIZSxFQUFwQjtBQUtELE9BZkQ7QUFnQkQ7OzswQkFFSztBQUNKLFdBQUs5RixHQUFMLEdBQVc7QUFDVDhGLGFBQUssRUFBRSxLQUFLckcsT0FBTCxDQUFhVSxhQUFiLENBQTJCLFFBQTNCLENBREU7QUFFVDRGLGVBQU8sRUFBRSxLQUFLdEcsT0FBTCxDQUFhdUcsZ0JBQWIsQ0FBOEIsU0FBOUIsQ0FGQTtBQUdUQyxlQUFPLEVBQUUsS0FBS3hHLE9BQUwsQ0FBYVUsYUFBYixDQUEyQixpQkFBM0IsQ0FIQTtBQUlUK0Ysd0JBQWdCLEVBQUUsS0FBS3pHLE9BQUwsQ0FBYXVHLGdCQUFiLENBQThCLHVCQUE5QixDQUpUO0FBS1RHLGtCQUFVLEVBQUUsS0FBSzFHLE9BQUwsQ0FBYXVHLGdCQUFiLENBQThCLGVBQTlCLENBTEg7QUFNVEksYUFBSyxFQUFFLEtBQUszRyxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsUUFBM0I7QUFORSxPQUFYO0FBUUQ7OztpQ0FFWTtBQUNYLFdBQUs1RCxTQUFMLEdBQWlCQSxTQUFqQjtBQUVBLFVBQU04SixNQUFNLEdBQUcsQ0FDYixLQURhLEVBRWIsTUFGYSxDQUFmLENBSFcsQ0FRWDs7QUFDQSxXQUFLcEosT0FBTCxHQUFlLEVBQWY7O0FBQ0EsVUFBSVYsU0FBUyxDQUFDeUIsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixhQUFLZixPQUFMLENBQWFWLFNBQVMsQ0FBQyxDQUFELENBQXRCLElBQTZCLElBQUkvQywwREFBSixDQUFXO0FBQ3RDRSxZQUFFLEVBQUUsS0FBS3NHLEdBQUwsQ0FBUytGLE9BQVQsQ0FBaUIsQ0FBakIsQ0FEa0M7QUFFdENuTSxlQUFLLEVBQUUsQ0FGK0I7QUFHdENDLGVBQUssRUFBRXdNLE1BQU0sQ0FBQyxDQUFELENBSHlCO0FBSXRDMU0sWUFBRSxFQUFFNEMsU0FBUyxDQUFDLENBQUQ7QUFKeUIsU0FBWCxDQUE3QjtBQU1BLGFBQUtVLE9BQUwsQ0FBYVYsU0FBUyxDQUFDLENBQUQsQ0FBdEIsSUFBNkIsSUFBSS9DLDBEQUFKLENBQVc7QUFDdENFLFlBQUUsRUFBRSxLQUFLc0csR0FBTCxDQUFTK0YsT0FBVCxDQUFpQixDQUFqQixDQURrQztBQUV0Q25NLGVBQUssRUFBRSxDQUYrQjtBQUd0Q0MsZUFBSyxFQUFFd00sTUFBTSxDQUFDLENBQUQsQ0FIeUI7QUFJdEMxTSxZQUFFLEVBQUU0QyxTQUFTLENBQUMsQ0FBRDtBQUp5QixTQUFYLENBQTdCO0FBTUQ7QUFDRjs7OytCQUVVYixRLEVBQVU7QUFBQTs7QUFDbkIsVUFBSTBLLEtBQUssR0FBRzFLLFFBQVo7QUFDQSxVQUFJNEssT0FBSjtBQUVBLFdBQUt0RyxHQUFMLENBQVNvRyxLQUFULENBQWVyQyxTQUFmLEdBQTJCckksUUFBM0I7QUFFQSxXQUFLNkssYUFBTCxHQUFxQkMsV0FBVyxDQUFDLFlBQU07QUFDckNGLGVBQU8sR0FBR0csUUFBUSxDQUFDTCxLQUFELEVBQVEsRUFBUixDQUFsQjtBQUNBRSxlQUFPLEdBQUdBLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixJQUErQkEsT0FBekM7QUFFQSxjQUFJLENBQUN0RyxHQUFMLENBQVNvRyxLQUFULENBQWVyQyxTQUFmLEdBQTJCdUMsT0FBM0I7O0FBRUEsWUFBSUYsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZixnQkFBSSxDQUFDdkgsUUFBTCxDQUFjLFdBQWQ7QUFDRDs7QUFFRHVILGFBQUssSUFBSSxDQUFUO0FBQ0QsT0FYK0IsRUFXN0IsSUFYNkIsQ0FBaEM7QUFZRDs7OzBCQUVLcEosTSxFQUFRaUIsSSxFQUFNO0FBQ2xCLFdBQUttRCxZQUFMLENBQWtCLElBQWxCLEVBQXdCcEUsTUFBTSxDQUFDbkQsS0FBL0IsRUFEa0IsQ0FDb0I7O0FBRXRDLFdBQUt5TCxNQUFMLENBQVl0SSxNQUFNLENBQUNwRCxLQUFuQixLQUE2QixDQUE3QjtBQUNBLFdBQUs2RixPQUFMLENBQWFqQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixZQUEzQjs7QUFFQSxXQUFLLElBQUlwRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUsyRSxHQUFMLENBQVNrRyxnQkFBVCxDQUEwQmxJLE1BQTlDLEVBQXNEM0MsQ0FBQyxFQUF2RCxFQUEyRDtBQUN6RCxZQUFJQSxDQUFDLEtBQUsyQixNQUFNLENBQUNwRCxLQUFqQixFQUF3QjtBQUN0QixlQUFLb0csR0FBTCxDQUFTa0csZ0JBQVQsQ0FBMEI3SyxDQUExQixFQUE2QjBJLFNBQTdCLGVBQThDL0csTUFBTSxDQUFDcEQsS0FBUCxHQUFlLENBQTdELGdCQUFvRSxLQUFLMEwsTUFBTCxDQUFZdEksTUFBTSxDQUFDcEQsS0FBbkIsQ0FBcEU7QUFDRDtBQUNGOztBQUVELFVBQU02TCxHQUFHLEdBQUc1SSxRQUFRLENBQUNxRixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQXVELFNBQUcsQ0FBQ0UsR0FBSixHQUFVMUgsSUFBVjtBQUNBd0gsU0FBRyxDQUFDakgsU0FBSixDQUFjQyxHQUFkLENBQWtCLGFBQWxCO0FBQ0EsV0FBS3VCLEdBQUwsQ0FBU21HLFVBQVQsQ0FBb0JuSixNQUFNLENBQUNwRCxLQUEzQixFQUFrQ29JLFdBQWxDLENBQThDeUQsR0FBOUM7QUFFQW5DLCtEQUFNLENBQUNLLFNBQVAsQ0FBaUJjLElBQWpCLGlCQUErQnpILE1BQU0sQ0FBQ3JELEVBQXRDLGNBQTRDLEtBQUsyTCxNQUFMLENBQVl0SSxNQUFNLENBQUNwRCxLQUFuQixDQUE1QztBQUNEOzs7aUNBRVlxTSxPLEVBQXNDO0FBQUEsVUFBN0JwTSxLQUE2Qix1RUFBckIsTUFBcUI7QUFBQSxVQUFiNk0sR0FBYSx1RUFBUCxLQUFPO0FBQ2pELFVBQU16RSxHQUFHLEdBQUdwRixRQUFRLENBQUNxRixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsU0FBRyxDQUFDekQsU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLGFBQTdCLG1CQUFzRDVFLEtBQXREOztBQUNBLFVBQUk2TSxHQUFKLEVBQVM7QUFDUHpFLFdBQUcsQ0FBQ3pELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixhQUFsQjtBQUNEOztBQUNEd0QsU0FBRyxDQUFDOEIsU0FBSixHQUFnQmtDLE9BQWhCO0FBQ0EsV0FBS2pHLEdBQUwsQ0FBUzhGLEtBQVQsQ0FBZTlELFdBQWYsQ0FBMkJDLEdBQTNCO0FBRUF2RCxnQkFBVSxDQUFDLFlBQU07QUFDZnVELFdBQUcsQ0FBQ3RELE1BQUo7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7OzsrQkFFb0M7QUFBQTs7QUFBQSxVQUE1QnNILE9BQTRCLHVFQUFsQixnQkFBa0I7QUFDbkNVLG1CQUFhLENBQUMsS0FBS0osYUFBTixDQUFiO0FBQ0EsV0FBS25GLFlBQUwsQ0FBa0I2RSxPQUFsQixFQUEyQixPQUEzQixFQUFvQyxJQUFwQztBQUNBdkgsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSSxDQUFDa0ksV0FBTCxDQUFpQixNQUFJLENBQUNyQixpQkFBTCxHQUF5QixDQUExQztBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRDs7O2dDQUVXM0wsSyxFQUFPO0FBQ2pCLFdBQUtpTixZQUFMLENBQWtCLEtBQUtqQyxZQUF2Qjs7QUFFQSxVQUFJaEwsS0FBSyxLQUFLLEtBQUtvTCxNQUFMLENBQVloSCxNQUFaLEdBQXFCLENBQW5DLEVBQXNDO0FBQ3BDOEksZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBekQsaUVBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsQ0FBc0Isc0JBQXRCO0FBQ0E7QUFDRCxPQVBnQixDQVNqQjs7O0FBQ0EsV0FBSyxJQUFJcEosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tCLFNBQVMsQ0FBQ3lCLE1BQTlCLEVBQXNDM0MsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxhQUFLNEIsT0FBTCxDQUFhVixTQUFTLENBQUNsQixDQUFELENBQXRCLEVBQTJCVixPQUEzQixHQUFxQyxDQUFyQztBQUNBLGFBQUtzQyxPQUFMLENBQWFWLFNBQVMsQ0FBQ2xCLENBQUQsQ0FBdEIsRUFBMkJULE9BQTNCLEdBQXFDLENBQXJDO0FBQ0EsYUFBS3FDLE9BQUwsQ0FBYVYsU0FBUyxDQUFDbEIsQ0FBRCxDQUF0QixFQUEyQlosQ0FBM0IsR0FBK0IsQ0FBL0I7QUFDQSxhQUFLd0MsT0FBTCxDQUFhVixTQUFTLENBQUNsQixDQUFELENBQXRCLEVBQTJCWCxDQUEzQixHQUErQixDQUEvQjtBQUNEOztBQUVELFdBQUs2SyxpQkFBTCxHQUF5QjNMLEtBQXpCO0FBQ0EsVUFBTWtNLEtBQUssR0FBRyxLQUFLZCxNQUFMLENBQVksS0FBS08saUJBQWpCLENBQWQ7QUFFQSxXQUFLWCxZQUFMLEdBQW9CLElBQUluSSx5REFBSjtBQUNsQi9DLFVBQUUsRUFBRSxLQUFLc0csR0FBTCxDQUFTOEYsS0FESztBQUVsQmxNLGFBQUssRUFBRSxLQUFLMkw7QUFGTSxTQUdmTyxLQUhlLEVBQXBCO0FBS0Q7OztpQ0FFWUEsSyxFQUFPO0FBQ2xCO0FBQ0EsVUFBSUEsS0FBSyxDQUFDa0IsT0FBTixZQUF5QkMsUUFBN0IsRUFBdUM7QUFDckNuQixhQUFLLENBQUNrQixPQUFOO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1JIOztJQUVNRSxVLEdBQ0osc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxxQ0FJRixVQUFBcEksR0FBRyxFQUFJO0FBQ2pCO0FBQ0EsU0FBSSxDQUFDcUksR0FBTCxHQUFXQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUMxRSxTQUFOLENBQWhDO0FBQ0FwSixVQUFNLENBQUMrTixhQUFQLENBQXFCQyx3RUFBaUIsQ0FBQyxLQUFELEVBQVE7QUFBRXhJLFNBQUcsRUFBSEE7QUFBRixLQUFSLENBQXRDO0FBQ0QsR0FSYTs7QUFBQSxtQ0FVSixZQUFNO0FBQ2QsU0FBSSxDQUFDNEQsU0FBTCxDQUFlLENBQWY7QUFDRCxHQVphOztBQUFBLGtDQWNMLFlBQU07QUFDYjZFLHdCQUFvQixDQUFDLEtBQUksQ0FBQ0osR0FBTixDQUFwQjtBQUNELEdBaEJhOztBQUNaLE9BQUt6RSxTQUFMLENBQWUsQ0FBZjtBQUNELEM7O0FBaUJZLG1FQUFJd0UsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBLFNBQVNJLGlCQUFULENBQTJCRSxTQUEzQixFQUFpRDtBQUFBLE1BQVhuRCxJQUFXLHVFQUFKLEVBQUk7QUFDL0MsTUFBTUQsS0FBSyxHQUFHLElBQUlxRCxXQUFKLENBQWdCRCxTQUFoQixFQUEyQjtBQUN2Q3pJLFVBQU0sRUFBRXNGO0FBRCtCLEdBQTNCLENBQWQ7QUFHQSxTQUFPRCxLQUFQO0FBQ0Q7O0FBRWNrRCxnRkFBZixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBTyxTQUFTeEcsWUFBVCxDQUFzQjRHLElBQXRCLEVBQTRCO0FBQUU7QUFFbkMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UscUJBQUwsRUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR3ZPLE1BQU0sQ0FBQ3NELE9BQVAsSUFBa0JDLFFBQVEsQ0FBQ2lMLElBQVQsQ0FBYy9LLFNBQWhEO0FBRUEsU0FBTzRLLE1BQU0sQ0FBQ3ZGLEdBQVAsR0FBYXlGLE9BQXBCO0FBQ0Q7QUFFTSxTQUFTakgsYUFBVCxDQUF1QjhHLElBQXZCLEVBQTZCO0FBQUU7QUFFcEMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UscUJBQUwsRUFBZjtBQUVBLFNBQU9ELE1BQU0sQ0FBQ3hGLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQU8sU0FBUzRGLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ3pCLE1BQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWCxXQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxhQUFLLENBQUwsRUFBVyxDQUFDLEVBQUQsR0FBTUEsQ0FBakIsQ0FBUDtBQUNEO0FBRU0sU0FBUzNJLFNBQVQsQ0FBbUIySSxDQUFuQixFQUFzQjtBQUM1QixTQUFPLE1BQU0sSUFBSS9NLElBQUksQ0FBQ1csR0FBTCxDQUFTWCxJQUFJLENBQUNDLEVBQUwsR0FBVThNLENBQW5CLENBQVYsQ0FBUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBUzdJLEtBQVQsQ0FBZThJLEtBQWYsRUFBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUV0QyxTQUFPbE4sSUFBSSxDQUFDaU4sR0FBTCxDQUFTak4sSUFBSSxDQUFDa04sR0FBTCxDQUFTRixLQUFULEVBQWdCQyxHQUFoQixDQUFULEVBQStCQyxHQUEvQixDQUFQO0FBQ0E7QUFFTSxTQUFTL00sTUFBVCxDQUFnQjhNLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUMvQjtBQUNBLE1BQUlELEdBQUcsR0FBR0MsR0FBVixFQUFlO0FBQ2IsUUFBTUMsR0FBRyxHQUFHRixHQUFaO0FBQ0FBLE9BQUcsR0FBR0MsR0FBTjtBQUNBQSxPQUFHLEdBQUdDLEdBQU47QUFDRDs7QUFDRCxTQUFPRixHQUFHLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHRCxHQUFQLElBQWNqTixJQUFJLENBQUNHLE1BQUwsRUFBM0I7QUFDRDtBQUVNLFNBQVN1RyxTQUFULENBQW1CdUcsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBRW5DLFNBQU9sTixJQUFJLENBQUNvTixLQUFMLENBQVdwTixJQUFJLENBQUNHLE1BQUwsTUFBaUIrTSxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDQSxHQUFyRDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUFBO0FBQU8sU0FBUzFNLE1BQVQsR0FBa0I7QUFDdkIsU0FBTyxTQUFTbEMsTUFBTSxDQUFDZ1AsV0FBaEIsR0FBOEJBLFdBQVcsQ0FBQ3hKLEdBQVosRUFBOUIsR0FBa0QsSUFBSXlKLElBQUosR0FBV0MsT0FBWCxFQUF6RDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQUE7QUFBQTtBQUFBO0NBRUE7QUFFQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0EsVUFBVSxtQkFBTyxDQUFDLHlEQUFXO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxreENBQWt4QyxtQkFBTyxDQUFDLHdGQUEyQyx5Yjs7Ozs7Ozs7Ozs7QUNBcjBDLCtKIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EwMzc5YThiODFiZGE3N2M1YzBhMzNkOTBkN2IyNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjIyNWM2ZGRlZGYzOGVmODQ1NTg3MmY1M2IzZjYzYzguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzEwNzBjZWE5ZTQ2NmViMzcxNDcwOWE1NGMxZGNlNTMuanBnXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpZCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IGNsYW1wLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsXG4gICAgdGhpcy5ia2cgPSBvcHRpb25zLmJrZ1xuICAgIHRoaXMubWFza2VkQmtnID0gb3B0aW9ucy5tYXNrZWRCa2dcbiAgICB0aGlzLml0ZW0gPSBvcHRpb25zLml0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gb3B0aW9ucy5udW1JdGVtc1xuICAgIHRoaXMuZ3JpZENvbHMgPSBvcHRpb25zLmdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBvcHRpb25zLmdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy50aW1lID0gNjAgLy8gaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5zZXRCa2dzKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG5cbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIucG9wVXBNZXNzYWdlKCdTVEFSVCEnLCAnYmxhY2snKVxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zdGFydFRpbWVyKHRoaXMudGltZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGxldCBkaXZcbiAgICAgIGlmIChERUJVRykge1xuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBzZXRCa2dzKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlcywgZml0IEltYWdlIHRvIHNjZW5lXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICAgIC8vIEFkZCBtYXNrZWQgYmtnXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICAvLyBBZGQgXCJmcm9udFwiIGJrZ1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5tYXNrZWRCa2d9KWBcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIGlmIChERUJVRykgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbMF1dXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gcGxheWVySWQgPT4ge1xuICAgIGlmIChERUJVRykgcGxheWVySWQgPSBwbGF5ZXJJZHNbMF1cbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbcGxheWVySWRdXG4gICAgY29uc3QgeCA9IChwbGF5ZXIudGFyZ2V0WCAvIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoKSArIDAuNVxuICAgIGNvbnN0IHkgPSAocGxheWVyLnRhcmdldFkgLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQpICsgMC41XG5cbiAgICBsZXQgZ29vZENsaWNrID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgICBnb29kQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdvb2RDbGljaykge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ2dvb2QnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKVxuICAgIH1cblxuICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QucmVtb3ZlKCdnb29kJywgJ3dyb25nJylcbiAgICAgIC8vIGFkZCBhIHJlY3Qgc3ZnIGVsZW1lbnQgaW4gdGhlIGNsaXBwYXRoIGZvbGxvd2luZyB0aGVcbiAgICAgIC8vIGN1cnNvciwgb3BhY2l0eTowIGJ5IGRlZmF1bHQsIGRpc3BsYXkgaXQgdG8gZmlsbCB0aGUgY3Vyc29yLlxuICAgICAgLy8gdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc3R5bGUub3BhY2l0eSA9IDFcbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHRoaXMubnVtSXRlbUZvdW5kID09PSB0aGlzLml0ZW1zLmxlbmd0aCAmJiAhdGhpcy5pc0VuZGVkKSB7XG4gICAgICB0aGlzLmlzRW5kZWQgPSB0cnVlXG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbeV1dXG5cbiAgICAgIC8vIGNsYW1wIHBsYXllciBwb3NpdGlvbiB0byBsaW1pdCBvZiB0aGUgc2NlbmVcbiAgICAgIHBsYXllci50YXJnZXRYID0gY2xhbXAocGxheWVyLnRhcmdldFgsIC13aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMilcbiAgICAgIHBsYXllci50YXJnZXRZID0gY2xhbXAocGxheWVyLnRhcmdldFksIC13aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyLCB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyKVxuXG4gICAgICBwbGF5ZXIueCArPSAocGxheWVyLnRhcmdldFggLSBwbGF5ZXIueCkgKiAwLjFcbiAgICAgIHBsYXllci55ICs9IChwbGF5ZXIudGFyZ2V0WSAtIHBsYXllci55KSAqIDAuMVxuXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgcGxheWVyIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwbGF5ZXIucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIHBsYXllciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBwb2ludC54ICs9IHBsYXllci54XG4gICAgICAgIHBvaW50LnkgKz0gcGxheWVyLnlcblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBwbGF5ZXJcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgcGxheWVyIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBwbGF5ZXIuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gcGxheWVyLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IHBsYXllci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gcGxheWVyLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgcGxheWVyLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwocGxheWVyLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiY29uc3QgREVCVUcgPSB0cnVlXG5cbmV4cG9ydCBkZWZhdWx0IERFQlVHXG4iLCJjb25zdCBTZXJ2ZXIgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKSxcbiAgd2Vic29ja2V0OiBuZXcgV2ViU29ja2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKX0vZ2FtZWApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJcbiIsIlxuaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5pbXBvcnQgc2V0dXBUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInXG5cbi8vIHNlcnZlclxuaW1wb3J0IFNlcnZlciBmcm9tICcuLi9jb25zdGFudHMvU2VydmVyJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4uL2NvbnN0YW50cy9EZWJ1ZydcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtcGF0dGVybi5qcGcnXG5pbXBvcnQgc2NlbmUxTWFzayBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLW1hc2suanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS10YXJnZXQuanBnJ1xuaW1wb3J0IHNjZW5lMkJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmcnXG4vLyBpbXBvcnQgc2NlbmUySXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcXFxuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuY29uc3QgdG9rZW5zID0gWycxMjMnLCAnNDU2J11cblxuXG4vLyBwcmVwYXJlIHRoZSBDaGFyYWN0ZXJJZFxuLy8gQ2hhcmFjdGVySWQgLS0+IGdldCB0aGUgaW1hZ2Ugb2YgdGhlIGNoYXJhY3RlclxuLy8gZW5kIHNjZW5lOlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXG5cbiAgICBpZiAoIURFQlVHKSB7XG4gICAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMub25Xc09wZW5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gIH1cblxuICBvbldzT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gc2V0dXBUbXBcbiAgICB0aGlzLnNldHVwTWVzc2FnZSA9IHRoaXMubWFpbi5xdWVyeVNlbGVjdG9yKCcuc2V0dXBfX21lc3NhZ2UnKVxuICAgIFNlcnZlci53ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5saXN0ZW5TZXJ2ZXJcbiAgfVxuXG4gIGxpc3RlblNlcnZlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5zcGxpdCgnLCcpXG5cbiAgICBpZiAoZGF0YVswXSA9PT0gJ3Rva2VuX3N1Ym1pdCcpIHtcbiAgICAgIC8vIGxvb3AgaW50byB0aGUgdG9rZW5zLCBpZiB0aGUgdG9rZW4gY29ycmVzcG9uZCwgc2V0IHVwIHRoZSBpZFxuICAgICAgbGV0IHZhbGlkVG9rZW4gPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRva2Vuc1tpXSA9PT0gZGF0YVsxXSAmJiBkYXRhWzJdICE9PSB0aGlzLmZpcnN0UGxheWVySWQpIHtcbiAgICAgICAgICAvLyBkYXRhWzJdICE9PSB0aGlzLmZpcnN0UGxheWVySWQgSW4gY2FzZSBzZWNvbmQgcGxheWVyIHVzZSB0aGUgdG9rZW4gb2YgdGhlIGZpcnN0IHBsYXllclxuICAgICAgICAgIHBsYXllcklkcy5wdXNoKGRhdGFbMl0pXG4gICAgICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDFgKVxuICAgICAgICAgIHZhbGlkVG9rZW4gPSB0cnVlXG4gICAgICAgICAgdGhpcy5maXJzdFBsYXllcklkID0gZGF0YVsyXVxuICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlLmlubmVySFRNTCA9IGBQbGF5ZXIgJHtwbGF5ZXJJZHMubGVuZ3RofSBpcyByZWFkeWBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRUb2tlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDBgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBpZiBib3RoIHBsYXllcnMgYXJlIHNldCwgbGV0J3Mgc3RhcnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgfSwgMTAwMClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjdXJzb3JfbW92ZScpIHtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KGRhdGFbMl0sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQoZGF0YVszXSwgMTApICogdGhpcy52YldpZHRoXG4gICAgICAvLyB3ZSB1c2UgdmJXaWR0aCB0aGUgc2FtZSBjb2VmaWNpZW50IGhlcmUgdG8gaGF2ZSB0aGUgc2FtZSBzcGVlZCBtb3ZlbWVudCBvbiB0b3VjaG1vdmUgWCBhbmQgWVxuICAgICAgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFggPSB4ICsgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFhcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRZID0geSArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRZXG5cbiAgICAgIC8vIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY2xpY2snKSB7XG4gICAgICAvLyBkYXRhWzFdIG5lZWRzIHRvIGJlIHRoZSBpbmRleCBvZiBwbGF5ZXIgKG9yIGlkKVxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaGFuZGxlQ2xpY2soZGF0YVsxXSlcbiAgICB9XG4gIH1cblxuICBpbml0KCkge1xuICAgIGlmICghREVCVUcpIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXJJZHNbMF19LDBgKVxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgLy8gc2NvcmVzXG4gICAgdGhpcy5zY2VuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMU1hc2ssXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNixcbiAgICAgICAgZ3JpZExpbmVzOiA2LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTJCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDgsXG4gICAgICAgIGdyaWRMaW5lczogOCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMixcbiAgICAgICAgZ3JpZExpbmVzOiAxMixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIC8vIFNldCB0aGUgdmlld2JveCB0byB0aGUgcmF0aW8gb2YgdGhlIHNjZW5lXG4gICAgICB0aGlzLnZiV2lkdGggPSAxOTIwXG4gICAgICB0aGlzLnZiSGVpZ2h0ID0gODQwXG4gICAgICB0aGlzLnNldFBsYXllcnMoKVxuXG4gICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgICAgLi4uc2NlbmUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHRpbWVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLnBsYXllcklkcyA9IHBsYXllcklkc1xuXG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgJ3JlZCcsXG4gICAgICAnYmx1ZScsXG4gICAgXVxuXG4gICAgLy8gZWFjaCBwbGF5ZXIgaXMgYW4gb2JqZWN0IHdpdGggYSBrZXkvaWRcbiAgICB0aGlzLnBsYXllcnMgPSB7fVxuICAgIGlmIChwbGF5ZXJJZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzBdXSA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBlbDogdGhpcy5kb20uY3Vyc29yc1swXSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgIGlkOiBwbGF5ZXJJZHNbMF0sXG4gICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1sxXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMV0sXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBjb2xvcjogY29sb3JzWzFdLFxuICAgICAgICBpZDogcGxheWVySWRzWzFdLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllci5pZH0sJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWApXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKClcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgZW5kU2NlbmUobWVzc2FnZSA9ICdzdGFnZSBjb21wbGV0ZScpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbClcbiAgICB0aGlzLnBvcFVwTWVzc2FnZShtZXNzYWdlLCAnYmxhY2snLCB0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZUluZGV4ICsgMSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZSlcblxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zY2VuZXMubGVuZ3RoICsgMSkge1xuICAgICAgY29uc29sZS5sb2coJ2VuZCBvZiBwYXJ0eScpXG4gICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoJ2Rpc2Nvbm5lY3RfYWxsX3VzZXJzJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJlc2V0IHBsYXllcnMgcG9zIHRvIDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcklkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0udGFyZ2V0WCA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnRhcmdldFkgPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS54ID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0ueSA9IDBcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIC4uLnNjZW5lLFxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDE5MjAgODQwXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCIgd2lkdGg9XFxcIjE5MjBweFxcXCIgaGVpZ2h0PVxcXCIxMDgwcHhcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHdpZHRoPVxcXCIxOTIwcHhcXFwiIGhlaWdodD1cXFwiMTA4MHB4XFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGltZXIgdC0zMi0tYm9sZFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gc2NvcmUgYm9hcmQgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY29yZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTE6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2NlbnRlclxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInQtMzItLWJvbGRcXFwiPkl0ZW0gdG8gZmluZDo8L3A+XFxuICAgICAgPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMSA6IDA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMiA6IDA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMjo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNldHVwXFxcIj5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNldHVwX19tZXNzYWdlIHQtNjQtLWJvbGRcXFwiPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=