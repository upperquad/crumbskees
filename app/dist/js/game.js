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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1920 840\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\" width=\"1920px\" height=\"1080px\">\n          <image class=\"scene-svg__image\" width=\"1920px\" height=\"1080px\" />\n        </g>\n      </svg>\n    </div>\n    <div class=\"timer t-32--bold\"></div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-48--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtbWFzay5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1wYXR0ZXJuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXRhcmdldC5qcGciLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9EZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29uc3RhbnRzL1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvR2FtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL1JBRk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3M/OGI0YyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2Nzcz82YWRjIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpZCIsImluZGV4IiwiY29sb3IiLCJudW1Qb2ludHMiLCJjZW50ZXJYIiwidmJXaWR0aCIsImNlbnRlclkiLCJ2YkhlaWdodCIsIm1pblJhZGl1cyIsIm1heFJhZGl1cyIsIm1pbk1pZGRsZVJhZGl1cyIsIm1heE1pZGRsZVJhZGl1cyIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJ4IiwieSIsInRhcmdldFgiLCJ0YXJnZXRZIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJjb3MiLCJzaW4iLCJ0YXJnZXRNaW5YIiwidGFyZ2V0TWluWSIsInRhcmdldE1heFgiLCJ0YXJnZXRNYXhZIiwic3RhcnRYIiwic3RhcnRZIiwiZGVzdFgiLCJkZXN0WSIsInB1c2giLCJwbGF5ZXJJZHMiLCJERUJVRyIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicGxheWVySWQiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsImdvb2RDbGljayIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlzRW5kZWQiLCJlbmRTY2VuZSIsIm5vdyIsImRldGFpbCIsImFjY2VsZXJhdGlvbiIsImRlc3RBY2NlbGVyYXRpb24iLCJjb2VmQWNjZWxlcmF0aW9uIiwiY2xhbXAiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJia2ciLCJtYXNrZWRCa2ciLCJudW1JdGVtcyIsImdyaWRDb2xzIiwiZ3JpZExpbmVzIiwidGltZSIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEJrZ3MiLCJpbmNyZWFzZU1heCIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwicGFyZW50Tm9kZSIsImdldE9mZnNldFRvcCIsInNldENsaXBQYXRoSWQiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJwb3BVcE1lc3NhZ2UiLCJzdGFydFRpbWVyIiwidXVpZHYxIiwicG9zaXRpb25zSW5HcmlkIiwiaiIsIm9iaiIsInJkIiwicmFuZG9tSW50Iiwic3BsaWNlIiwic3ZnSW1hZ2UiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGVOUyIsImFwcGVuZENoaWxkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZXRob2QiLCJldiIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUkFGIiwidGVuc2lvbiIsIm5iUG9pbnRzIiwicGF0aCIsInAwIiwicDEiLCJwMiIsInAzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJTZXJ2ZXIiLCJob3N0IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZXBsYWNlIiwid2Vic29ja2V0IiwiV2ViU29ja2V0IiwidG9rZW5zIiwibWFpbiIsImlubmVySFRNTCIsInNldHVwVG1wIiwic2V0dXBNZXNzYWdlIiwib25tZXNzYWdlIiwibGlzdGVuU2VydmVyIiwiZXZlbnQiLCJkYXRhIiwic3BsaXQiLCJ2YWxpZFRva2VuIiwiZmlyc3RQbGF5ZXJJZCIsInNlbmQiLCJpbml0IiwicGFyc2VGbG9hdCIsImN1cnJlbnRTY2VuZSIsIm9ub3BlbiIsIm9uV3NPcGVuIiwiZ2FtZVRtcCIsInNjZW5lcyIsInNjZW5lMUJrZyIsInNjZW5lMU1hc2siLCJzY2VuZTFJdGVtIiwiZWZmZWN0Iiwic2NlbmUyQmtnIiwic2NvcmVzIiwiY3VycmVudFNjZW5lSW5kZXgiLCJsb2FkQmtnIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRQbGF5ZXJzIiwic2NlbmUiLCJjdXJzb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lc3NhZ2UiLCJzY29yZUNlbnRlclJlY2FwIiwic2NvcmVJdGVtcyIsInRpbWVyIiwiY29sb3JzIiwic2Vjb25kcyIsInRpbWVySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiZW5kIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZVNjZW5lIiwiZGVzdHJveVNjZW5lIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3kiLCJGdW5jdGlvbiIsIlJBRk1hbmFnZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZWxlbSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHlUb3AiLCJib2R5Iiwib3V0RXhwbyIsIm4iLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInRtcCIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtDQUdBOztBQUNBLENBQUMsWUFBTTtBQUNMO0FBQ0FBLFFBQU0sQ0FBQ0MsV0FBUCxHQUFxQixJQUFJQSw2REFBSixFQUFyQjtBQUNELENBSEQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0lBRXFCQyxNOzs7QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxRQUVmQyxFQUZlLEdBTWJELEtBTmEsQ0FFZkMsRUFGZTtBQUFBLFFBR2ZDLEVBSGUsR0FNYkYsS0FOYSxDQUdmRSxFQUhlO0FBQUEsUUFJZkMsS0FKZSxHQU1iSCxLQU5hLENBSWZHLEtBSmU7QUFBQSxRQUtmQyxLQUxlLEdBTWJKLEtBTmEsQ0FLZkksS0FMZTtBQVFqQixTQUFLSCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlVCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJTLE9BQW5CLEdBQTZCLENBQTVDLENBYmlCLENBYTZCOztBQUM5QyxTQUFLQyxPQUFMLEdBQWVYLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlcsUUFBbkIsR0FBOEIsQ0FBN0MsQ0FkaUIsQ0FjOEI7O0FBQy9DLFNBQUtDLFNBQUwsR0FBaUJiLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsSUFBOUMsQ0FmaUIsQ0Fla0M7O0FBQ25ELFNBQUtJLFNBQUwsR0FBaUIsS0FBS0QsU0FBTCxHQUFpQixLQUFLQSxTQUFMLEdBQWlCLEdBQW5EO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixLQUFLRixTQUFMLEdBQWlCLENBQUMsS0FBS0MsU0FBTCxHQUFpQixLQUFLRCxTQUF2QixJQUFvQyxJQUE1RTtBQUNBLFNBQUtHLGVBQUwsR0FBdUIsS0FBS0gsU0FBTCxHQUFpQixDQUFDLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0QsU0FBdkIsSUFBb0MsSUFBNUU7QUFDQSxTQUFLSSxXQUFMLEdBQW1CLEdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixHQUFuQixDQXBCaUIsQ0FxQmpCOztBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUVBLFNBQUtDLFNBQUw7QUFDRDs7OztnQ0FFVztBQUNWLFdBQUtDLE1BQUwsR0FBYyxFQUFkLENBRFUsQ0FFVjs7QUFDQSxVQUFNQyxLQUFLLEdBQUlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQVgsR0FBZ0IsS0FBS3BCLFNBQW5DO0FBQ0EsV0FBS3FCLFVBQUwsR0FBa0JDLDBEQUFNLENBQUMsQ0FBRCxFQUFJSCxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFkLENBQXhCOztBQUVBLFdBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLdkIsU0FBekIsRUFBb0N1QixDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQU1DLFVBQVUsR0FBR0YsMERBQU0sQ0FBQyxDQUFELEVBQUksSUFBSixDQUF6QixDQUR1QyxDQUNKO0FBQ25DOztBQUNBLFlBQU1HLFNBQVMsR0FBR0MsMERBQU0sS0FBS0gsQ0FBQyxHQUFHRCwwREFBTSxDQUFDLENBQUQsRUFBSSxLQUFLYixXQUFULENBQXZDO0FBQ0EsWUFBTWtCLEtBQUssR0FBRyxLQUFLTixVQUFMLEdBQWtCRSxDQUFDLEdBQUdMLEtBQXRCLEdBQThCTSxVQUE1QztBQUNBLFlBQU1JLFFBQVEsR0FBR04sMERBQU0sQ0FBQyxLQUFLYixXQUFOLEVBQW1CLEtBQUtDLFdBQXhCLENBQXZCO0FBRUEsWUFBTW1CLEtBQUssR0FBRztBQUNaRixlQUFLLEVBQUxBLEtBRFk7QUFFWkMsa0JBQVEsRUFBUkEsUUFGWTtBQUdaSCxtQkFBUyxFQUFUQSxTQUhZO0FBSVpkLFdBQUMsRUFBRSxLQUFLVixPQUFMLEdBQWVrQixJQUFJLENBQUNXLEdBQUwsQ0FBU0gsS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLakIsU0FBTixFQUFpQixLQUFLQyxTQUF0QixDQUo5QjtBQUtaTSxXQUFDLEVBQUUsS0FBS1QsT0FBTCxHQUFlZ0IsSUFBSSxDQUFDWSxHQUFMLENBQVNKLEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2pCLFNBQU4sRUFBaUIsS0FBS0MsU0FBdEIsQ0FMOUI7QUFNWjBCLG9CQUFVLEVBQUUsS0FBSy9CLE9BQUwsR0FBZWtCLElBQUksQ0FBQ1csR0FBTCxDQUFTSCxLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtqQixTQUFOLEVBQWlCLEtBQUtFLGVBQXRCLENBTnZDO0FBT1owQixvQkFBVSxFQUFFLEtBQUs5QixPQUFMLEdBQWVnQixJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLakIsU0FBTixFQUFpQixLQUFLRSxlQUF0QixDQVB2QztBQVFaMkIsb0JBQVUsRUFBRSxLQUFLakMsT0FBTCxHQUFla0IsSUFBSSxDQUFDVyxHQUFMLENBQVNILEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2QsZUFBTixFQUF1QixLQUFLRixTQUE1QixDQVJ2QztBQVNaNkIsb0JBQVUsRUFBRSxLQUFLaEMsT0FBTCxHQUFlZ0IsSUFBSSxDQUFDWSxHQUFMLENBQVNKLEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2QsZUFBTixFQUF1QixLQUFLRixTQUE1QjtBQVR2QyxTQUFkO0FBWUF1QixhQUFLLENBQUNPLE1BQU4sR0FBZVAsS0FBSyxDQUFDbEIsQ0FBckI7QUFDQWtCLGFBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNqQixDQUFyQjtBQUNBaUIsYUFBSyxDQUFDUyxLQUFOLEdBQWNULEtBQUssQ0FBQ0ssVUFBcEI7QUFDQUwsYUFBSyxDQUFDVSxLQUFOLEdBQWNWLEtBQUssQ0FBQ00sVUFBcEI7QUFFQSxhQUFLbEIsTUFBTCxDQUFZdUIsSUFBWixDQUFpQlgsS0FBakI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNWSxTQUFTLEdBQUdDLHdEQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsWUFBZixDQUFILEdBQWtDLEVBQXpEOztJQUVxQkMsSzs7O0FBQ25CLGlCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsNkNBb0pILFVBQUFDLENBQUMsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUd0RCxNQUFNLENBQUNzRCxPQUFQLElBQWtCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTNEO0FBQ0EsVUFBTUMsTUFBTSxHQUFHMUQsTUFBTSxDQUFDQyxXQUFQLENBQW1CMEQsT0FBbkIsQ0FBMkIzRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJnRCxTQUFuQixDQUE2QixDQUE3QixDQUEzQixDQUFmO0FBRUFTLFlBQU0sQ0FBQ0UsTUFBUCxHQUFnQlAsQ0FBQyxDQUFDUSxPQUFGLEdBQVlSLENBQUMsQ0FBQ1EsT0FBRixDQUFVLENBQVYsRUFBYUMsT0FBekIsR0FBbUNULENBQUMsQ0FBQ1MsT0FBckQ7QUFDQUosWUFBTSxDQUFDRSxNQUFQLElBQWlCLEtBQUksQ0FBQ0csVUFBdEI7QUFDQUwsWUFBTSxDQUFDTSxNQUFQLEdBQWdCWCxDQUFDLENBQUNRLE9BQUYsR0FBWVIsQ0FBQyxDQUFDUSxPQUFGLENBQVUsQ0FBVixFQUFhSSxPQUF6QixHQUFtQ1osQ0FBQyxDQUFDWSxPQUFyRDtBQUNBUCxZQUFNLENBQUNNLE1BQVAsSUFBaUJWLE9BQWpCO0FBRUFJLFlBQU0sQ0FBQ3JDLE9BQVAsR0FBaUJxQyxNQUFNLENBQUNFLE1BQVAsR0FBZ0IsS0FBSSxDQUFDTSxLQUFyQixHQUE2QmxFLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBakUsQ0FUcUIsQ0FTb0Q7O0FBQ3pFZ0QsWUFBTSxDQUFDckMsT0FBUCxJQUFrQnJCLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsQ0FBL0MsQ0FWcUIsQ0FVNEI7O0FBQ2pEZ0QsWUFBTSxDQUFDcEMsT0FBUCxHQUFpQm9DLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixLQUFJLENBQUNHLE1BQXJCLEdBQThCbkUsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFqRCxHQUE0RCxLQUFJLENBQUN3RCxTQUFsRjtBQUNBVixZQUFNLENBQUNwQyxPQUFQLElBQWtCdEIsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFuQixHQUE4QixDQUFoRCxDQVpxQixDQWNyQjtBQUNELEtBbktvQjs7QUFBQSx5Q0FxS1AsVUFBQXlELFFBQVEsRUFBSTtBQUN4QixVQUFJbkIsd0RBQUosRUFBV21CLFFBQVEsR0FBR3BCLFNBQVMsQ0FBQyxDQUFELENBQXBCO0FBQ1gsVUFBTXFCLFNBQVMsR0FBRyxLQUFJLENBQUNDLGNBQXZCO0FBQ0EsVUFBTWIsTUFBTSxHQUFHMUQsTUFBTSxDQUFDQyxXQUFQLENBQW1CMEQsT0FBbkIsQ0FBMkJVLFFBQTNCLENBQWY7QUFDQSxVQUFNbEQsQ0FBQyxHQUFJdUMsTUFBTSxDQUFDckMsT0FBUCxHQUFpQnJCLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBckMsR0FBZ0QsR0FBMUQ7QUFDQSxVQUFNVSxDQUFDLEdBQUlzQyxNQUFNLENBQUNwQyxPQUFQLEdBQWlCdEIsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFyQyxHQUFpRCxHQUEzRDtBQUVBLFVBQUk0RCxTQUFTLEdBQUcsS0FBaEI7O0FBRUEsV0FBSyxJQUFJekMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFJLENBQUMwQyxLQUFMLENBQVdDLE1BQS9CLEVBQXVDM0MsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFNNEMsSUFBSSxHQUFHLEtBQUksQ0FBQ0YsS0FBTCxDQUFXMUMsQ0FBWCxDQUFiOztBQUNBLFlBQUksQ0FBQzRDLElBQUksQ0FBQ0MsS0FBTixJQUNGekQsQ0FBQyxHQUFHd0QsSUFBSSxDQUFDeEQsQ0FBTCxHQUFTbUQsU0FEWCxJQUVGbkQsQ0FBQyxHQUFHd0QsSUFBSSxDQUFDeEQsQ0FBTCxHQUFTbUQsU0FGWCxJQUdGbEQsQ0FBQyxHQUFHdUQsSUFBSSxDQUFDdkQsQ0FBTCxHQUFTa0QsU0FIWCxJQUlGbEQsQ0FBQyxHQUFHdUQsSUFBSSxDQUFDdkQsQ0FBTCxHQUFTa0QsU0FKZixFQUkwQjtBQUN4QnRFLGdCQUFNLENBQUNDLFdBQVAsQ0FBbUI0RSxLQUFuQixDQUF5Qm5CLE1BQXpCLEVBQWlDLEtBQUksQ0FBQ2lCLElBQXRDO0FBQ0FBLGNBQUksQ0FBQ0MsS0FBTCxHQUFhLElBQWI7QUFDQUQsY0FBSSxDQUFDdkUsRUFBTCxDQUFRMEUsS0FBUixDQUFjQyxPQUFkLEdBQXdCLENBQXhCO0FBQ0FKLGNBQUksQ0FBQ0ssT0FBTCxDQUFhRixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixDQUE3QjtBQUVBLGVBQUksQ0FBQ0UsWUFBTCxHQUFvQixLQUFJLENBQUNBLFlBQUwsR0FBb0IsQ0FBeEM7QUFDQVQsbUJBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQSxTQUFKLEVBQWU7QUFDYmQsY0FBTSxDQUFDdEQsRUFBUCxDQUFVOEUsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsTUFBeEI7QUFDRCxPQUZELE1BRU87QUFDTHpCLGNBQU0sQ0FBQ3RELEVBQVAsQ0FBVThFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE9BQXhCO0FBQ0QsT0E5QnVCLENBZ0N4Qjs7O0FBRUFDLGdCQUFVLENBQUMsWUFBTTtBQUNmMUIsY0FBTSxDQUFDdEQsRUFBUCxDQUFVOEUsU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsTUFBM0IsRUFBbUMsT0FBbkMsRUFEZSxDQUVmO0FBQ0E7QUFDQTtBQUNELE9BTFMsRUFLUCxJQUxPLENBQVY7O0FBT0EsVUFBSSxLQUFJLENBQUNKLFlBQUwsS0FBc0IsS0FBSSxDQUFDUixLQUFMLENBQVdDLE1BQWpDLElBQTJDLENBQUMsS0FBSSxDQUFDWSxPQUFyRCxFQUE4RDtBQUM1RCxhQUFJLENBQUNBLE9BQUwsR0FBZSxJQUFmO0FBQ0F0RixjQUFNLENBQUNDLFdBQVAsQ0FBbUJzRixRQUFuQjtBQUNEO0FBQ0YsS0FsTm9COztBQUFBLHVDQW9OVCxVQUFBbEMsQ0FBQyxFQUFJO0FBQUEsVUFDUG1DLEdBRE8sR0FDQ25DLENBQUMsQ0FBQ29DLE1BREgsQ0FDUEQsR0FETztBQUVmLFdBQUksQ0FBQ0UsWUFBTCxHQUFvQixLQUFJLENBQUNBLFlBQUwsR0FBb0IsQ0FBQyxLQUFJLENBQUNDLGdCQUFMLEdBQXdCLEtBQUksQ0FBQ0QsWUFBOUIsSUFBOEMsS0FBSSxDQUFDRSxnQkFBM0YsQ0FGZSxDQUlmOztBQUNBLFdBQUssSUFBSXhFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQixNQUFNLENBQUNDLFdBQVAsQ0FBbUJnRCxTQUFuQixDQUE2QnlCLE1BQWpELEVBQXlEdEQsQ0FBQyxFQUExRCxFQUE4RDtBQUM1RCxZQUFNc0MsTUFBTSxHQUFHMUQsTUFBTSxDQUFDQyxXQUFQLENBQW1CMEQsT0FBbkIsQ0FBMkIzRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJnRCxTQUFuQixDQUE2QjdCLENBQTdCLENBQTNCLENBQWYsQ0FENEQsQ0FHNUQ7O0FBQ0FzQyxjQUFNLENBQUNyQyxPQUFQLEdBQWlCd0UseURBQUssQ0FBQ25DLE1BQU0sQ0FBQ3JDLE9BQVIsRUFBaUIsQ0FBQ3JCLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBcEIsR0FBOEIsQ0FBL0MsRUFBa0RWLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsQ0FBL0UsQ0FBdEI7QUFDQWdELGNBQU0sQ0FBQ3BDLE9BQVAsR0FBaUJ1RSx5REFBSyxDQUFDbkMsTUFBTSxDQUFDcEMsT0FBUixFQUFpQixDQUFDdEIsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFwQixHQUErQixDQUFoRCxFQUFtRFosTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFuQixHQUE4QixDQUFqRixDQUF0QjtBQUVBOEMsY0FBTSxDQUFDdkMsQ0FBUCxJQUFZLENBQUN1QyxNQUFNLENBQUNyQyxPQUFQLEdBQWlCcUMsTUFBTSxDQUFDdkMsQ0FBekIsSUFBOEIsR0FBMUM7QUFDQXVDLGNBQU0sQ0FBQ3RDLENBQVAsSUFBWSxDQUFDc0MsTUFBTSxDQUFDcEMsT0FBUCxHQUFpQm9DLE1BQU0sQ0FBQ3RDLENBQXpCLElBQThCLEdBQTFDLENBUjRELENBVzVEO0FBQ0E7O0FBQ0EsYUFBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkIsTUFBTSxDQUFDakMsTUFBUCxDQUFjaUQsTUFBbEMsRUFBMEMzQyxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLGNBQU1NLEtBQUssR0FBR3FCLE1BQU0sQ0FBQ2pDLE1BQVAsQ0FBY00sQ0FBZCxDQUFkLENBRDZDLENBRzdDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGNBQU0rRCxPQUFPLEdBQUcsQ0FBQ04sR0FBRyxHQUFHbkQsS0FBSyxDQUFDSixTQUFiLElBQTBCSSxLQUFLLENBQUNELFFBQWhDLEdBQTJDLEtBQUksQ0FBQ3NELFlBQWhFO0FBRUFyRCxlQUFLLENBQUNsQixDQUFOLEdBQVVrQixLQUFLLENBQUNPLE1BQU4sR0FBZSxDQUFDUCxLQUFLLENBQUNTLEtBQU4sR0FBY1QsS0FBSyxDQUFDTyxNQUFyQixJQUErQm1ELDZEQUFTLENBQUNELE9BQUQsQ0FBakU7QUFDQXpELGVBQUssQ0FBQ2pCLENBQU4sR0FBVWlCLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQUNSLEtBQUssQ0FBQ1UsS0FBTixHQUFjVixLQUFLLENBQUNRLE1BQXJCLElBQStCa0QsNkRBQVMsQ0FBQ0QsT0FBRCxDQUFqRTs7QUFFQSxjQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQUl6RCxLQUFLLENBQUMyRCxXQUFWLEVBQXVCO0FBQ3JCM0QsbUJBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsbUJBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNqQixDQUFyQjtBQUNBaUIsbUJBQUssQ0FBQ1MsS0FBTixHQUFjVCxLQUFLLENBQUNLLFVBQXBCO0FBQ0FMLG1CQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDTSxVQUFwQjtBQUNBTixtQkFBSyxDQUFDMkQsV0FBTixHQUFvQixLQUFwQjtBQUNBM0QsbUJBQUssQ0FBQ0osU0FBTixHQUFrQkMsMERBQU0sRUFBeEI7QUFDRCxhQVBELE1BT087QUFDTEcsbUJBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsbUJBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNqQixDQUFyQjtBQUNBaUIsbUJBQUssQ0FBQ1MsS0FBTixHQUFjVCxLQUFLLENBQUNHLFVBQXBCO0FBQ0FILG1CQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDSSxVQUFwQjtBQUNBSixtQkFBSyxDQUFDMkQsV0FBTixHQUFvQixJQUFwQjtBQUNBM0QsbUJBQUssQ0FBQ0osU0FBTixHQUFrQkMsMERBQU0sRUFBeEI7QUFDRDtBQUNGLFdBOUI0QyxDQWdDN0M7OztBQUNBRyxlQUFLLENBQUNsQixDQUFOLElBQVd1QyxNQUFNLENBQUN2QyxDQUFsQjtBQUNBa0IsZUFBSyxDQUFDakIsQ0FBTixJQUFXc0MsTUFBTSxDQUFDdEMsQ0FBbEIsQ0FsQzZDLENBb0M3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNEOztBQUVEc0MsY0FBTSxDQUFDdEQsRUFBUCxDQUFVNkYsWUFBVixDQUF1QixHQUF2QixFQUE0QixLQUFJLENBQUNDLFFBQUwsQ0FBY3hDLE1BQU0sQ0FBQ2pDLE1BQXJCLENBQTVCO0FBQ0Q7QUFDRixLQWxTb0I7O0FBQ25CLFNBQUswRSxPQUFMLEdBQWUvQyxPQUFPLENBQUNoRCxFQUF2QjtBQUNBLFNBQUtnRyxHQUFMLEdBQVdoRCxPQUFPLENBQUNnRCxHQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJqRCxPQUFPLENBQUNpRCxTQUF6QjtBQUNBLFNBQUsxQixJQUFMLEdBQVl2QixPQUFPLENBQUN1QixJQUFwQjtBQUNBLFNBQUsyQixRQUFMLEdBQWdCbEQsT0FBTyxDQUFDa0QsUUFBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCbkQsT0FBTyxDQUFDbUQsUUFBeEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCcEQsT0FBTyxDQUFDb0QsU0FBekI7QUFDQSxTQUFLbEcsS0FBTCxHQUFhOEMsT0FBTyxDQUFDOUMsS0FBckI7QUFDQSxTQUFLbUcsSUFBTCxHQUFZLEVBQVosQ0FUbUIsQ0FTSjs7QUFFZixTQUFLQyxHQUFMO0FBQ0EsU0FBS0MsR0FBTDtBQUNEOzs7OzBCQUVLO0FBQ0osV0FBS0QsR0FBTCxHQUFXO0FBQ1RFLGdCQUFRLEVBQUUsS0FBS1QsT0FBTCxDQUFhVSxhQUFiLENBQTJCLFlBQTNCLENBREQ7QUFFVEMsc0JBQWMsRUFBRSxLQUFLWCxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsbUJBQTNCLENBRlA7QUFHVEUsbUJBQVcsRUFBRSxLQUFLWixPQUFMLENBQWFVLGFBQWIsQ0FBMkIsc0JBQTNCLENBSEo7QUFJVEcsc0JBQWMsRUFBRSxLQUFLYixPQUFMLENBQWFVLGFBQWIsQ0FBMkIsMEJBQTNCO0FBSlAsT0FBWDtBQU1EOzs7MEJBRUs7QUFDSixXQUFLSSxPQUFMLEdBREksQ0FHSjs7QUFDQSxXQUFLdkIsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsR0FBeEI7QUFDQSxXQUFLc0IsV0FBTCxHQUFtQmxILE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsSUFBaEQsQ0FQSSxDQVFKOztBQUNBLFdBQUt5RyxRQUFMLEdBQWdCbkgsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixJQUE3QyxDQVRJLENBV0o7O0FBQ0EsV0FBSzZELGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFLVSxZQUFMLEdBQW9CLENBQXBCLENBYkksQ0FlSjs7QUFDQSxXQUFLZixLQUFMLEdBQWEsS0FBS2lDLE9BQUwsQ0FBYWlCLFdBQTFCO0FBQ0EsV0FBS2pELE1BQUwsR0FBYyxLQUFLZ0MsT0FBTCxDQUFha0IsWUFBM0I7QUFDQSxXQUFLdEQsVUFBTCxHQUFrQnVELGdFQUFhLENBQUMsS0FBS25CLE9BQUwsQ0FBYW9CLFVBQWQsQ0FBL0I7QUFDQSxXQUFLbkQsU0FBTCxHQUFpQm9ELCtEQUFZLENBQUMsS0FBS3JCLE9BQUwsQ0FBYW9CLFVBQWQsQ0FBN0I7O0FBRUEsVUFBSSxLQUFLYixHQUFMLENBQVNLLFdBQWIsRUFBMEI7QUFDeEIsYUFBS1UsYUFBTDtBQUNEOztBQUNELFdBQUtDLE9BQUw7QUFDQSxXQUFLQyxRQUFMLEdBekJJLENBMkJKOztBQUNBLFdBQUtDLE1BQUwsQ0FBWSxJQUFaO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLElBQWY7QUFFQTdILFlBQU0sQ0FBQ0MsV0FBUCxDQUFtQjZILFlBQW5CLENBQWdDLFFBQWhDLEVBQTBDLE9BQTFDO0FBQ0E5SCxZQUFNLENBQUNDLFdBQVAsQ0FBbUI4SCxVQUFuQixDQUE4QixLQUFLdEIsSUFBbkM7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsR0FBTCxDQUFTSyxXQUFULENBQXFCMUcsRUFBckIsR0FBMEIySCw4Q0FBTSxFQUFoQztBQUNBLFdBQUt0QixHQUFMLENBQVNNLGNBQVQsQ0FBd0JmLFlBQXhCLENBQXFDLFdBQXJDLGlCQUEwRCxLQUFLUyxHQUFMLENBQVNLLFdBQVQsQ0FBcUIxRyxFQUEvRTtBQUNEOzs7OEJBRVM7QUFDUixXQUFLNEgsZUFBTCxHQUF1QixFQUF2QjtBQUNBLFVBQUk5RyxDQUFKO0FBQ0EsVUFBSUMsQ0FBSjs7QUFFQSxXQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3dFLFFBQXpCLEVBQW1DeEUsQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q1osU0FBQyxHQUFHWSxDQUFDLEdBQUcsR0FBUixDQURzQyxDQUMxQjs7QUFDWixhQUFLLElBQUltRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUsxQixTQUF6QixFQUFvQzBCLENBQUMsRUFBckMsRUFBeUM7QUFDdkM5RyxXQUFDLEdBQUc4RyxDQUFDLEdBQUcsR0FBUixDQUR1QyxDQUMzQjs7QUFDWixjQUFNQyxHQUFHLEdBQUc7QUFBRWhILGFBQUMsRUFBREEsQ0FBRjtBQUFLQyxhQUFDLEVBQURBO0FBQUwsV0FBWjtBQUNBLGVBQUs2RyxlQUFMLENBQXFCakYsSUFBckIsQ0FBMEJtRixHQUExQjtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVO0FBQ1QsV0FBSzFELEtBQUwsR0FBYSxFQUFiOztBQUVBLFdBQUssSUFBSTFDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3VFLFFBQXpCLEVBQW1DdkUsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QztBQUNBLFlBQU1xRyxFQUFFLEdBQUdDLDZEQUFTLENBQUMsQ0FBRCxFQUFJLEtBQUtKLGVBQUwsQ0FBcUJ2RCxNQUFyQixHQUE4QixDQUFsQyxDQUFwQjtBQUNBLFlBQU12RCxDQUFDLEdBQUcsS0FBSzhHLGVBQUwsQ0FBcUJHLEVBQXJCLEVBQXlCakgsQ0FBekIsR0FBNkIsS0FBS29GLFFBQTVDO0FBQ0EsWUFBTW5GLENBQUMsR0FBRyxLQUFLNkcsZUFBTCxDQUFxQkcsRUFBckIsRUFBeUJoSCxDQUF6QixHQUE2QixLQUFLb0YsU0FBNUM7QUFDQSxhQUFLeUIsZUFBTCxDQUFxQkssTUFBckIsQ0FBNEJGLEVBQTVCLEVBQWdDLENBQWhDLEVBTHNDLENBT3RDO0FBQ0E7O0FBQ0EsWUFBTUcsUUFBUSxHQUFHaEYsUUFBUSxDQUFDaUYsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsT0FBdkQsQ0FBakI7QUFDQUQsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QyxLQUFLdEIsUUFBN0M7QUFDQW9CLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsT0FBOUIsRUFBdUMsS0FBS3RCLFFBQTVDO0FBQ0FvQixnQkFBUSxDQUFDRSxjQUFULENBQXdCLDhCQUF4QixFQUF3RCxNQUF4RCxFQUFnRSxLQUFLOUQsSUFBckU7QUFDQTRELGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsWUFBc0N0SCxDQUFDLEdBQUcsR0FBMUM7QUFDQW9ILGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsWUFBc0NySCxDQUFDLEdBQUcsR0FBMUM7QUFDQW1ILGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsV0FBOUIsdUJBQXlELEtBQUt0QixRQUFMLEdBQWdCLENBQXpFLGVBQStFLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBL0Y7QUFDQW9CLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIscUJBQTlCLEVBQXFELGdCQUFyRDtBQUVBLGFBQUsvQixHQUFMLENBQVNNLGNBQVQsQ0FBd0IwQixXQUF4QixDQUFvQ0gsUUFBcEMsRUFsQnNDLENBb0J0Qzs7QUFDQSxZQUFJSSxHQUFHLFNBQVA7O0FBQ0EsWUFBSXpGLHdEQUFKLEVBQVc7QUFDVHlGLGFBQUcsR0FBR3BGLFFBQVEsQ0FBQ3FGLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTjtBQUNBRCxhQUFHLENBQUN6RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsT0FBbEI7QUFDQXdELGFBQUcsQ0FBQzdELEtBQUosQ0FBVStELElBQVYsYUFBb0IxSCxDQUFDLEdBQUcsR0FBeEI7QUFDQXdILGFBQUcsQ0FBQzdELEtBQUosQ0FBVWdFLEdBQVYsYUFBbUIxSCxDQUFDLEdBQUcsR0FBdkI7QUFDQSxlQUFLK0UsT0FBTCxDQUFhdUMsV0FBYixDQUF5QkMsR0FBekI7QUFDRDs7QUFFRCxZQUFNUixHQUFHLEdBQUc7QUFDVi9ILFlBQUUsRUFBRW1JLFFBRE07QUFFVnZELGlCQUFPLEVBQUUyRCxHQUZDO0FBR1Z4SCxXQUFDLEVBQURBLENBSFU7QUFJVkMsV0FBQyxFQUFEQSxDQUpVLENBTVo7O0FBTlksU0FBWjtBQU9BLGFBQUtxRCxLQUFMLENBQVd6QixJQUFYLENBQWdCbUYsR0FBaEI7QUFDRDtBQUNGOzs7OEJBRVM7QUFDUjtBQUNBLFdBQUt6QixHQUFMLENBQVNFLFFBQVQsQ0FBa0JYLFlBQWxCLENBQStCLFNBQS9CLGdCQUFpRGpHLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBcEUsY0FBK0VWLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlcsUUFBbEcsR0FGUSxDQUdSOztBQUNBLFdBQUs4RixHQUFMLENBQVNJLGNBQVQsQ0FBd0IyQixjQUF4QixDQUF1Qyw4QkFBdkMsRUFBdUUsTUFBdkUsRUFBK0UsS0FBS3JDLEdBQXBGO0FBQ0EsV0FBS00sR0FBTCxDQUFTSSxjQUFULENBQXdCMkIsY0FBeEIsQ0FBdUMsSUFBdkMsRUFBNkMscUJBQTdDLEVBQW9FLGdCQUFwRSxFQUxRLENBTVI7O0FBQ0EsV0FBS3RDLE9BQUwsQ0FBYXJCLEtBQWIsQ0FBbUJpRSxlQUFuQixpQkFBNEMsS0FBSzFDLFNBQWpEO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTs7OzsyQkFFTzJDLE0sRUFBUTtBQUNiLFVBQU1DLEVBQUUsR0FBR0QsTUFBTSxHQUFHLGtCQUFILEdBQXdCLHFCQUF6QztBQUNBLFVBQUk5Rix3REFBSixFQUFXbEQsTUFBTSxDQUFDaUosRUFBRCxDQUFOLENBQVcsV0FBWCxFQUF3QixLQUFLQyxlQUE3QixFQUE4QyxLQUE5QztBQUNYbEosWUFBTSxDQUFDaUosRUFBRCxDQUFOLENBQVcsT0FBWCxFQUFvQixLQUFLRSxXQUF6QixFQUFzQyxLQUF0QztBQUNEOzs7OEJBRVNILE0sRUFBUTtBQUNoQixVQUFNQyxFQUFFLEdBQUdELE1BQU0sR0FBRyxrQkFBSCxHQUF3QixxQkFBekM7QUFDQWhKLFlBQU0sQ0FBQ2lKLEVBQUQsQ0FBTixDQUFXLEtBQVgsRUFBa0IsS0FBS0csU0FBdkIsRUFBa0MsS0FBbEM7QUFDRDs7O0FBa0pEO0FBQ0E7NkJBQ1MzSCxNLEVBQXVCO0FBQUEsVUFBZjRILE9BQWUsdUVBQUwsR0FBSztBQUM5QjtBQUNBLFVBQU1DLFFBQVEsR0FBRzdILE1BQU0sQ0FBQ2lELE1BQXhCO0FBQ0EsVUFBSTRFLFFBQVEsR0FBRyxDQUFmLEVBQWtCLE9BQU8sTUFBUDtBQUVsQixVQUFJQyxJQUFJLGVBQVE5SCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVOLENBQWxCLGNBQXVCTSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVMLENBQWpDLE9BQVIsQ0FMOEIsQ0FNOUI7QUFDQTs7QUFFQSxXQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1SCxRQUFwQixFQUE4QnZILENBQUMsRUFBL0IsRUFBbUM7QUFDakMsWUFBTXlILEVBQUUsR0FBRy9ILE1BQU0sQ0FBQyxDQUFDTSxDQUFDLEdBQUcsQ0FBSixHQUFRdUgsUUFBVCxJQUFxQkEsUUFBdEIsQ0FBakI7QUFDQSxZQUFNRyxFQUFFLEdBQUdoSSxNQUFNLENBQUNNLENBQUQsQ0FBakI7QUFDQSxZQUFNMkgsRUFBRSxHQUFHakksTUFBTSxDQUFDLENBQUNNLENBQUMsR0FBRyxDQUFMLElBQVV1SCxRQUFYLENBQWpCO0FBQ0EsWUFBTUssRUFBRSxHQUFHbEksTUFBTSxDQUFDLENBQUNNLENBQUMsR0FBRyxDQUFMLElBQVV1SCxRQUFYLENBQWpCO0FBRUEsWUFBTU0sRUFBRSxHQUFHSCxFQUFFLENBQUN0SSxDQUFILEdBQU8sQ0FBQ3VJLEVBQUUsQ0FBQ3ZJLENBQUgsR0FBT3FJLEVBQUUsQ0FBQ3JJLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0JrSSxPQUF0QztBQUNBLFlBQU1RLEVBQUUsR0FBR0osRUFBRSxDQUFDckksQ0FBSCxHQUFPLENBQUNzSSxFQUFFLENBQUN0SSxDQUFILEdBQU9vSSxFQUFFLENBQUNwSSxDQUFYLElBQWdCLENBQWhCLEdBQW9CaUksT0FBdEM7QUFFQSxZQUFNUyxFQUFFLEdBQUdKLEVBQUUsQ0FBQ3ZJLENBQUgsR0FBTyxDQUFDd0ksRUFBRSxDQUFDeEksQ0FBSCxHQUFPc0ksRUFBRSxDQUFDdEksQ0FBWCxJQUFnQixDQUFoQixHQUFvQmtJLE9BQXRDO0FBQ0EsWUFBTVUsRUFBRSxHQUFHTCxFQUFFLENBQUN0SSxDQUFILEdBQU8sQ0FBQ3VJLEVBQUUsQ0FBQ3ZJLENBQUgsR0FBT3FJLEVBQUUsQ0FBQ3JJLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0JpSSxPQUF0QyxDQVZpQyxDQVlqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUUsWUFBSSxlQUFRSyxFQUFSLGNBQWNDLEVBQWQsY0FBb0JDLEVBQXBCLGNBQTBCQyxFQUExQixjQUFnQ0wsRUFBRSxDQUFDdkksQ0FBbkMsY0FBd0N1SSxFQUFFLENBQUN0SSxDQUEzQyxDQUFKO0FBQ0Q7O0FBRUQsdUJBQVVtSSxJQUFWLE9BL0I4QixDQStCWjtBQUNuQjs7OzhCQUVTO0FBQ1IsV0FBSzNCLE1BQUwsQ0FBWSxLQUFaO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEtBQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZIO0FBQUEsSUFBTTNFLEtBQUssR0FBRyxJQUFkO0FBRWVBLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUEsSUFBTThHLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUVqSyxNQUFNLENBQUNrSyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsT0FBL0IsRUFBd0MsSUFBeEMsQ0FETztBQUViQyxXQUFTLEVBQUUsSUFBSUMsU0FBSixXQUFpQnRLLE1BQU0sQ0FBQ2tLLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCQyxPQUF2QixDQUErQixPQUEvQixFQUF3QyxJQUF4QyxDQUFqQjtBQUZFLENBQWY7QUFLZUoscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTS9HLFNBQVMsR0FBR0Msd0RBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQUgsR0FBa0MsRUFBekQ7QUFDQSxJQUFNcUgsTUFBTSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBZixDLENBR0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCdEssVzs7O0FBQ25CLHlCQUFjO0FBQUE7O0FBQUE7O0FBQUEsc0NBVUgsWUFBTTtBQUNmLFdBQUksQ0FBQ3VLLElBQUwsQ0FBVUMsU0FBVixHQUFzQkMsc0VBQXRCO0FBQ0EsV0FBSSxDQUFDQyxZQUFMLEdBQW9CLEtBQUksQ0FBQ0gsSUFBTCxDQUFVM0QsYUFBVixDQUF3QixpQkFBeEIsQ0FBcEI7QUFDQW1ELCtEQUFNLENBQUNLLFNBQVAsQ0FBaUJPLFNBQWpCLEdBQTZCLEtBQUksQ0FBQ0MsWUFBbEM7QUFDRCxLQWRhOztBQUFBLDBDQWdCQyxVQUFBQyxLQUFLLEVBQUk7QUFDdEIsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUFiOztBQUVBLFVBQUlELElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxjQUFoQixFQUFnQztBQUM5QjtBQUNBLFlBQUlFLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxhQUFLLElBQUlsSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0ksTUFBTSxDQUFDN0YsTUFBM0IsRUFBbUMzQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLGNBQUl3SSxNQUFNLENBQUN4SSxDQUFELENBQU4sS0FBY2dKLElBQUksQ0FBQyxDQUFELENBQWxCLElBQXlCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksS0FBSSxDQUFDRyxhQUE5QyxFQUE2RDtBQUMzRDtBQUNBakkscUJBQVMsQ0FBQ0QsSUFBVixDQUFlK0gsSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFDQWYscUVBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsdUJBQXFDSixJQUFJLENBQUMsQ0FBRCxDQUF6QztBQUNBRSxzQkFBVSxHQUFHLElBQWI7QUFDQSxpQkFBSSxDQUFDQyxhQUFMLEdBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QjtBQUNBLGlCQUFJLENBQUNKLFlBQUwsQ0FBa0JGLFNBQWxCLG9CQUF3Q3hILFNBQVMsQ0FBQ3lCLE1BQWxEO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJdUcsVUFBVSxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCakIsbUVBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsdUJBQXFDSixJQUFJLENBQUMsQ0FBRCxDQUF6QztBQUNEOztBQUVELFlBQUk5SCxTQUFTLENBQUN5QixNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCO0FBQ0FVLG9CQUFVLENBQUMsWUFBTTtBQUNmLGlCQUFJLENBQUNnRyxJQUFMO0FBQ0QsV0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0YsT0F4QkQsTUF3Qk8sSUFBSUwsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLGFBQWhCLEVBQStCO0FBQ3BDLFlBQU01SixDQUFDLEdBQUdrSyxVQUFVLENBQUNOLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVSxFQUFWLENBQVYsR0FBMEIsS0FBSSxDQUFDckssT0FBekM7O0FBQ0EsWUFBTVUsQ0FBQyxHQUFHaUssVUFBVSxDQUFDTixJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVUsRUFBVixDQUFWLEdBQTBCLEtBQUksQ0FBQ3JLLE9BQXpDLENBRm9DLENBR3BDOzs7QUFDQSxhQUFJLENBQUNpRCxPQUFMLENBQWFvSCxJQUFJLENBQUMsQ0FBRCxDQUFqQixFQUFzQjFKLE9BQXRCLEdBQWdDRixDQUFDLEdBQUcsS0FBSSxDQUFDd0MsT0FBTCxDQUFhb0gsSUFBSSxDQUFDLENBQUQsQ0FBakIsRUFBc0IxSixPQUExRDtBQUNBLGFBQUksQ0FBQ3NDLE9BQUwsQ0FBYW9ILElBQUksQ0FBQyxDQUFELENBQWpCLEVBQXNCekosT0FBdEIsR0FBZ0NGLENBQUMsR0FBRyxLQUFJLENBQUN1QyxPQUFMLENBQWFvSCxJQUFJLENBQUMsQ0FBRCxDQUFqQixFQUFzQnpKLE9BQTFELENBTG9DLENBT3BDO0FBQ0QsT0FSTSxNQVFBLElBQUl5SixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksT0FBaEIsRUFBeUI7QUFDOUI7QUFDQSxhQUFJLENBQUNPLFlBQUwsQ0FBa0JuQyxXQUFsQixDQUE4QjRCLElBQUksQ0FBQyxDQUFELENBQWxDO0FBQ0Q7QUFDRixLQXZEYTs7QUFDWixTQUFLUCxJQUFMLEdBQVlqSCxRQUFRLENBQUNzRCxhQUFULENBQXVCLE9BQXZCLENBQVo7O0FBRUEsUUFBSSxDQUFDM0Qsd0RBQUwsRUFBWTtBQUNWOEcsK0RBQU0sQ0FBQ0ssU0FBUCxDQUFpQmtCLE1BQWpCLEdBQTBCLEtBQUtDLFFBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0osSUFBTDtBQUNEO0FBQ0Y7Ozs7MkJBaURNO0FBQ0wsVUFBSSxDQUFDbEksd0RBQUwsRUFBWThHLHlEQUFNLENBQUNLLFNBQVAsQ0FBaUJjLElBQWpCLGlCQUErQmxJLFNBQVMsQ0FBQyxDQUFELENBQXhDO0FBQ1osV0FBS3VILElBQUwsQ0FBVUMsU0FBVixHQUFzQmdCLHFFQUF0QjtBQUVBLFdBQUt0RixPQUFMLEdBQWU1QyxRQUFRLENBQUNzRCxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FKSyxDQU1MOztBQUNBLFdBQUs2RSxNQUFMLEdBQWMsQ0FDWjtBQUNFdEYsV0FBRyxFQUFFdUYsc0ZBRFA7QUFFRXRGLGlCQUFTLEVBQUV1RixtRkFGYjtBQUdFakgsWUFBSSxFQUFFa0gscUZBSFI7QUFJRXZGLGdCQUFRLEVBQUUsQ0FKWjtBQUtFQyxnQkFBUSxFQUFFLENBTFo7QUFNRUMsaUJBQVMsRUFBRSxDQU5iO0FBT0VzRixjQUFNLEVBQUU7QUFQVixPQURZLEVBU1Q7QUFDRDFGLFdBQUcsRUFBRTJGLDRFQURKO0FBRUQxRixpQkFBUyxFQUFFMEYsNEVBRlY7QUFHRHBILFlBQUksRUFBRWtILHFGQUhMO0FBSUR2RixnQkFBUSxFQUFFLENBSlQ7QUFLREMsZ0JBQVEsRUFBRSxDQUxUO0FBTURDLGlCQUFTLEVBQUUsQ0FOVjtBQU9Ec0YsY0FBTSxFQUFFO0FBUFAsT0FUUyxFQWlCVDtBQUNEMUYsV0FBRyxFQUFFdUYsc0ZBREo7QUFFRHRGLGlCQUFTLEVBQUVzRixzRkFGVjtBQUdEaEgsWUFBSSxFQUFFa0gscUZBSEw7QUFJRHZGLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxnQkFBUSxFQUFFLEVBTFQ7QUFNREMsaUJBQVMsRUFBRSxFQU5WO0FBT0RzRixjQUFNLEVBQUU7QUFQUCxPQWpCUyxFQXlCVDtBQUNEMUYsV0FBRyxFQUFFdUYsc0ZBREo7QUFFRHRGLGlCQUFTLEVBQUVzRixzRkFGVjtBQUdEaEgsWUFBSSxFQUFFa0gscUZBSEw7QUFJRHZGLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxnQkFBUSxFQUFFLEVBTFQ7QUFNREMsaUJBQVMsRUFBRSxFQU5WO0FBT0RzRixjQUFNLEVBQUU7QUFQUCxPQXpCUyxDQUFkO0FBbUNBLFdBQUtuSSxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtxSSxNQUFMLEdBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFkO0FBQ0EsV0FBS0MsaUJBQUwsR0FBeUIsQ0FBekI7QUFFQSxXQUFLQyxPQUFMO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxTQUFHLENBQUNFLEdBQUosR0FBVSxLQUFLWCxNQUFMLENBQVksS0FBS08saUJBQWpCLEVBQW9DN0YsR0FBOUM7O0FBQ0ErRixTQUFHLENBQUNHLE1BQUosR0FBYSxZQUFNO0FBQ2pCO0FBQ0EsY0FBSSxDQUFDNUYsR0FBTCxHQUZpQixDQUdqQjs7O0FBQ0EsY0FBSSxDQUFDaEcsT0FBTCxHQUFlLElBQWY7QUFDQSxjQUFJLENBQUNFLFFBQUwsR0FBZ0IsR0FBaEI7O0FBQ0EsY0FBSSxDQUFDMkwsVUFBTDs7QUFFQSxZQUFNQyxLQUFLLEdBQUcsTUFBSSxDQUFDZCxNQUFMLENBQVksTUFBSSxDQUFDTyxpQkFBakIsQ0FBZDtBQUVBLGNBQUksQ0FBQ1gsWUFBTCxHQUFvQixJQUFJbkkseURBQUo7QUFDbEIvQyxZQUFFLEVBQUUsTUFBSSxDQUFDc0csR0FBTCxDQUFTOEYsS0FESztBQUVsQmxNLGVBQUssRUFBRSxNQUFJLENBQUMyTDtBQUZNLFdBR2ZPLEtBSGUsRUFBcEI7QUFLRCxPQWZEO0FBZ0JEOzs7MEJBRUs7QUFDSixXQUFLOUYsR0FBTCxHQUFXO0FBQ1Q4RixhQUFLLEVBQUUsS0FBS3JHLE9BQUwsQ0FBYVUsYUFBYixDQUEyQixRQUEzQixDQURFO0FBRVQ0RixlQUFPLEVBQUUsS0FBS3RHLE9BQUwsQ0FBYXVHLGdCQUFiLENBQThCLFNBQTlCLENBRkE7QUFHVEMsZUFBTyxFQUFFLEtBQUt4RyxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsaUJBQTNCLENBSEE7QUFJVCtGLHdCQUFnQixFQUFFLEtBQUt6RyxPQUFMLENBQWF1RyxnQkFBYixDQUE4Qix1QkFBOUIsQ0FKVDtBQUtURyxrQkFBVSxFQUFFLEtBQUsxRyxPQUFMLENBQWF1RyxnQkFBYixDQUE4QixlQUE5QixDQUxIO0FBTVRJLGFBQUssRUFBRSxLQUFLM0csT0FBTCxDQUFhVSxhQUFiLENBQTJCLFFBQTNCO0FBTkUsT0FBWDtBQVFEOzs7aUNBRVk7QUFDWCxXQUFLNUQsU0FBTCxHQUFpQkEsU0FBakI7QUFFQSxVQUFNOEosTUFBTSxHQUFHLENBQ2IsS0FEYSxFQUViLE1BRmEsQ0FBZixDQUhXLENBUVg7O0FBQ0EsV0FBS3BKLE9BQUwsR0FBZSxFQUFmOztBQUNBLFVBQUlWLFNBQVMsQ0FBQ3lCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsYUFBS2YsT0FBTCxDQUFhVixTQUFTLENBQUMsQ0FBRCxDQUF0QixJQUE2QixJQUFJL0MsMERBQUosQ0FBVztBQUN0Q0UsWUFBRSxFQUFFLEtBQUtzRyxHQUFMLENBQVMrRixPQUFULENBQWlCLENBQWpCLENBRGtDO0FBRXRDbk0sZUFBSyxFQUFFLENBRitCO0FBR3RDQyxlQUFLLEVBQUV3TSxNQUFNLENBQUMsQ0FBRCxDQUh5QjtBQUl0QzFNLFlBQUUsRUFBRTRDLFNBQVMsQ0FBQyxDQUFEO0FBSnlCLFNBQVgsQ0FBN0I7QUFNQSxhQUFLVSxPQUFMLENBQWFWLFNBQVMsQ0FBQyxDQUFELENBQXRCLElBQTZCLElBQUkvQywwREFBSixDQUFXO0FBQ3RDRSxZQUFFLEVBQUUsS0FBS3NHLEdBQUwsQ0FBUytGLE9BQVQsQ0FBaUIsQ0FBakIsQ0FEa0M7QUFFdENuTSxlQUFLLEVBQUUsQ0FGK0I7QUFHdENDLGVBQUssRUFBRXdNLE1BQU0sQ0FBQyxDQUFELENBSHlCO0FBSXRDMU0sWUFBRSxFQUFFNEMsU0FBUyxDQUFDLENBQUQ7QUFKeUIsU0FBWCxDQUE3QjtBQU1EO0FBQ0Y7OzsrQkFFVWIsUSxFQUFVO0FBQUE7O0FBQ25CLFVBQUkwSyxLQUFLLEdBQUcxSyxRQUFaO0FBQ0EsVUFBSTRLLE9BQUo7QUFFQSxXQUFLdEcsR0FBTCxDQUFTb0csS0FBVCxDQUFlckMsU0FBZixHQUEyQnJJLFFBQTNCO0FBRUEsV0FBSzZLLGFBQUwsR0FBcUJDLFdBQVcsQ0FBQyxZQUFNO0FBQ3JDRixlQUFPLEdBQUdHLFFBQVEsQ0FBQ0wsS0FBRCxFQUFRLEVBQVIsQ0FBbEI7QUFDQUUsZUFBTyxHQUFHQSxPQUFPLEdBQUcsRUFBVixjQUFtQkEsT0FBbkIsSUFBK0JBLE9BQXpDO0FBRUEsY0FBSSxDQUFDdEcsR0FBTCxDQUFTb0csS0FBVCxDQUFlckMsU0FBZixHQUEyQnVDLE9BQTNCOztBQUVBLFlBQUlGLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsZ0JBQUksQ0FBQ3ZILFFBQUwsQ0FBYyxXQUFkO0FBQ0Q7O0FBRUR1SCxhQUFLLElBQUksQ0FBVDtBQUNELE9BWCtCLEVBVzdCLElBWDZCLENBQWhDO0FBWUQ7OzswQkFFS3BKLE0sRUFBUWlCLEksRUFBTTtBQUNsQixXQUFLbUQsWUFBTCxDQUFrQixJQUFsQixFQUF3QnBFLE1BQU0sQ0FBQ25ELEtBQS9CLEVBRGtCLENBQ29COztBQUV0QyxXQUFLeUwsTUFBTCxDQUFZdEksTUFBTSxDQUFDcEQsS0FBbkIsS0FBNkIsQ0FBN0I7QUFDQSxXQUFLNkYsT0FBTCxDQUFhakIsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsWUFBM0I7O0FBRUEsV0FBSyxJQUFJcEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLMkUsR0FBTCxDQUFTa0csZ0JBQVQsQ0FBMEJsSSxNQUE5QyxFQUFzRDNDLENBQUMsRUFBdkQsRUFBMkQ7QUFDekQsWUFBSUEsQ0FBQyxLQUFLMkIsTUFBTSxDQUFDcEQsS0FBakIsRUFBd0I7QUFDdEIsZUFBS29HLEdBQUwsQ0FBU2tHLGdCQUFULENBQTBCN0ssQ0FBMUIsRUFBNkIwSSxTQUE3QixlQUE4Qy9HLE1BQU0sQ0FBQ3BELEtBQVAsR0FBZSxDQUE3RCxnQkFBb0UsS0FBSzBMLE1BQUwsQ0FBWXRJLE1BQU0sQ0FBQ3BELEtBQW5CLENBQXBFO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNNkwsR0FBRyxHQUFHNUksUUFBUSxDQUFDcUYsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0F1RCxTQUFHLENBQUNFLEdBQUosR0FBVTFILElBQVY7QUFDQXdILFNBQUcsQ0FBQ2pILFNBQUosQ0FBY0MsR0FBZCxDQUFrQixhQUFsQjtBQUNBLFdBQUt1QixHQUFMLENBQVNtRyxVQUFULENBQW9CbkosTUFBTSxDQUFDcEQsS0FBM0IsRUFBa0NvSSxXQUFsQyxDQUE4Q3lELEdBQTlDO0FBRUFuQywrREFBTSxDQUFDSyxTQUFQLENBQWlCYyxJQUFqQixpQkFBK0J6SCxNQUFNLENBQUNyRCxFQUF0QyxjQUE0QyxLQUFLMkwsTUFBTCxDQUFZdEksTUFBTSxDQUFDcEQsS0FBbkIsQ0FBNUM7QUFDRDs7O2lDQUVZcU0sTyxFQUFzQztBQUFBLFVBQTdCcE0sS0FBNkIsdUVBQXJCLE1BQXFCO0FBQUEsVUFBYjZNLEdBQWEsdUVBQVAsS0FBTztBQUNqRCxVQUFNekUsR0FBRyxHQUFHcEYsUUFBUSxDQUFDcUYsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFNBQUcsQ0FBQ3pELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQixFQUE2QixhQUE3QixtQkFBc0Q1RSxLQUF0RDs7QUFDQSxVQUFJNk0sR0FBSixFQUFTO0FBQ1B6RSxXQUFHLENBQUN6RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsYUFBbEI7QUFDRDs7QUFDRHdELFNBQUcsQ0FBQzhCLFNBQUosR0FBZ0JrQyxPQUFoQjtBQUNBLFdBQUtqRyxHQUFMLENBQVM4RixLQUFULENBQWU5RCxXQUFmLENBQTJCQyxHQUEzQjtBQUVBdkQsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2Z1RCxXQUFHLENBQUN0RCxNQUFKO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOzs7K0JBRW9DO0FBQUE7O0FBQUEsVUFBNUJzSCxPQUE0Qix1RUFBbEIsZ0JBQWtCO0FBQ25DVSxtQkFBYSxDQUFDLEtBQUtKLGFBQU4sQ0FBYjtBQUNBLFdBQUtuRixZQUFMLENBQWtCNkUsT0FBbEIsRUFBMkIsT0FBM0IsRUFBb0MsSUFBcEM7QUFDQXZILGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQ2tJLFdBQUwsQ0FBaUIsTUFBSSxDQUFDckIsaUJBQUwsR0FBeUIsQ0FBMUM7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7OztnQ0FFVzNMLEssRUFBTztBQUNqQixXQUFLaU4sWUFBTCxDQUFrQixLQUFLakMsWUFBdkI7O0FBRUEsVUFBSWhMLEtBQUssS0FBSyxLQUFLb0wsTUFBTCxDQUFZaEgsTUFBWixHQUFxQixDQUFuQyxFQUFzQztBQUNwQzhJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQXpELGlFQUFNLENBQUNLLFNBQVAsQ0FBaUJjLElBQWpCLENBQXNCLHNCQUF0QjtBQUNBO0FBQ0QsT0FQZ0IsQ0FTakI7OztBQUNBLFdBQUssSUFBSXBKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrQixTQUFTLENBQUN5QixNQUE5QixFQUFzQzNDLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsYUFBSzRCLE9BQUwsQ0FBYVYsU0FBUyxDQUFDbEIsQ0FBRCxDQUF0QixFQUEyQlYsT0FBM0IsR0FBcUMsQ0FBckM7QUFDQSxhQUFLc0MsT0FBTCxDQUFhVixTQUFTLENBQUNsQixDQUFELENBQXRCLEVBQTJCVCxPQUEzQixHQUFxQyxDQUFyQztBQUNBLGFBQUtxQyxPQUFMLENBQWFWLFNBQVMsQ0FBQ2xCLENBQUQsQ0FBdEIsRUFBMkJaLENBQTNCLEdBQStCLENBQS9CO0FBQ0EsYUFBS3dDLE9BQUwsQ0FBYVYsU0FBUyxDQUFDbEIsQ0FBRCxDQUF0QixFQUEyQlgsQ0FBM0IsR0FBK0IsQ0FBL0I7QUFDRDs7QUFFRCxXQUFLNkssaUJBQUwsR0FBeUIzTCxLQUF6QjtBQUNBLFVBQU1rTSxLQUFLLEdBQUcsS0FBS2QsTUFBTCxDQUFZLEtBQUtPLGlCQUFqQixDQUFkO0FBRUEsV0FBS1gsWUFBTCxHQUFvQixJQUFJbkkseURBQUo7QUFDbEIvQyxVQUFFLEVBQUUsS0FBS3NHLEdBQUwsQ0FBUzhGLEtBREs7QUFFbEJsTSxhQUFLLEVBQUUsS0FBSzJMO0FBRk0sU0FHZk8sS0FIZSxFQUFwQjtBQUtEOzs7aUNBRVlBLEssRUFBTztBQUNsQjtBQUNBLFVBQUlBLEtBQUssQ0FBQ2tCLE9BQU4sWUFBeUJDLFFBQTdCLEVBQXVDO0FBQ3JDbkIsYUFBSyxDQUFDa0IsT0FBTjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9SSDs7SUFFTUUsVSxHQUNKLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEscUNBSUYsVUFBQXBJLEdBQUcsRUFBSTtBQUNqQjtBQUNBLFNBQUksQ0FBQ3FJLEdBQUwsR0FBV0MscUJBQXFCLENBQUMsS0FBSSxDQUFDMUUsU0FBTixDQUFoQztBQUNBcEosVUFBTSxDQUFDK04sYUFBUCxDQUFxQkMsd0VBQWlCLENBQUMsS0FBRCxFQUFRO0FBQUV4SSxTQUFHLEVBQUhBO0FBQUYsS0FBUixDQUF0QztBQUNELEdBUmE7O0FBQUEsbUNBVUosWUFBTTtBQUNkLFNBQUksQ0FBQzRELFNBQUwsQ0FBZSxDQUFmO0FBQ0QsR0FaYTs7QUFBQSxrQ0FjTCxZQUFNO0FBQ2I2RSx3QkFBb0IsQ0FBQyxLQUFJLENBQUNKLEdBQU4sQ0FBcEI7QUFDRCxHQWhCYTs7QUFDWixPQUFLekUsU0FBTCxDQUFlLENBQWY7QUFDRCxDOztBQWlCWSxtRUFBSXdFLFVBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQSxTQUFTSSxpQkFBVCxDQUEyQkUsU0FBM0IsRUFBaUQ7QUFBQSxNQUFYbkQsSUFBVyx1RUFBSixFQUFJO0FBQy9DLE1BQU1ELEtBQUssR0FBRyxJQUFJcUQsV0FBSixDQUFnQkQsU0FBaEIsRUFBMkI7QUFDdkN6SSxVQUFNLEVBQUVzRjtBQUQrQixHQUEzQixDQUFkO0FBR0EsU0FBT0QsS0FBUDtBQUNEOztBQUVja0QsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQU8sU0FBU3hHLFlBQVQsQ0FBc0I0RyxJQUF0QixFQUE0QjtBQUFFO0FBRW5DLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLHFCQUFMLEVBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUd2TyxNQUFNLENBQUNzRCxPQUFQLElBQWtCQyxRQUFRLENBQUNpTCxJQUFULENBQWMvSyxTQUFoRDtBQUVBLFNBQU80SyxNQUFNLENBQUN2RixHQUFQLEdBQWF5RixPQUFwQjtBQUNEO0FBRU0sU0FBU2pILGFBQVQsQ0FBdUI4RyxJQUF2QixFQUE2QjtBQUFFO0FBRXBDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLHFCQUFMLEVBQWY7QUFFQSxTQUFPRCxNQUFNLENBQUN4RixJQUFkO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtBQUFPLFNBQVM0RixPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUN6QixNQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFhO0FBQ1gsV0FBT0EsQ0FBUDtBQUNEOztBQUVELFNBQU8sYUFBSyxDQUFMLEVBQVcsQ0FBQyxFQUFELEdBQU1BLENBQWpCLENBQVA7QUFDRDtBQUVNLFNBQVMzSSxTQUFULENBQW1CMkksQ0FBbkIsRUFBc0I7QUFDNUIsU0FBTyxNQUFNLElBQUkvTSxJQUFJLENBQUNXLEdBQUwsQ0FBU1gsSUFBSSxDQUFDQyxFQUFMLEdBQVU4TSxDQUFuQixDQUFWLENBQVA7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVM3SSxLQUFULENBQWU4SSxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFFdEMsU0FBT2xOLElBQUksQ0FBQ2lOLEdBQUwsQ0FBU2pOLElBQUksQ0FBQ2tOLEdBQUwsQ0FBU0YsS0FBVCxFQUFnQkMsR0FBaEIsQ0FBVCxFQUErQkMsR0FBL0IsQ0FBUDtBQUNBO0FBRU0sU0FBUy9NLE1BQVQsQ0FBZ0I4TSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDL0I7QUFDQSxNQUFJRCxHQUFHLEdBQUdDLEdBQVYsRUFBZTtBQUNiLFFBQU1DLEdBQUcsR0FBR0YsR0FBWjtBQUNBQSxPQUFHLEdBQUdDLEdBQU47QUFDQUEsT0FBRyxHQUFHQyxHQUFOO0FBQ0Q7O0FBQ0QsU0FBT0YsR0FBRyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsR0FBUCxJQUFjak4sSUFBSSxDQUFDRyxNQUFMLEVBQTNCO0FBQ0Q7QUFFTSxTQUFTdUcsU0FBVCxDQUFtQnVHLEdBQW5CLEVBQXdCQyxHQUF4QixFQUE2QjtBQUVuQyxTQUFPbE4sSUFBSSxDQUFDb04sS0FBTCxDQUFXcE4sSUFBSSxDQUFDRyxNQUFMLE1BQWlCK00sR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFPLFNBQVMxTSxNQUFULEdBQWtCO0FBQ3ZCLFNBQU8sU0FBU2xDLE1BQU0sQ0FBQ2dQLFdBQWhCLEdBQThCQSxXQUFXLENBQUN4SixHQUFaLEVBQTlCLEdBQWtELElBQUl5SixJQUFKLEdBQVdDLE9BQVgsRUFBekQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1R0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa3hDQUFreEMsbUJBQU8sQ0FBQyx3RkFBMkMseWI7Ozs7Ozs7Ozs7O0FDQXIwQywrSiIsImZpbGUiOiJqcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvZ2FtZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZWI4MGE1MjdkZTEwZTIyM2U4MmNkNDg1MWE0MWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3OWU5MzU2YzA1MDAwMzllZjRmNzQ2YmE4MDIyYWRlLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhMDM3OWE4YjgxYmRhNzdjNWMwYTMzZDkwZDdiMjU5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIyMjVjNmRkZWRmMzhlZjg0NTU4NzJmNTNiM2Y2M2M4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxMDcwY2VhOWU0NjZlYjM3MTQ3MDlhNTRjMWRjZTUzLmpwZ1wiOyIsImltcG9ydCAnLi4vLi4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcydcblxuaW1wb3J0ICcuL21hbmFnZXJzL1JBRk1hbmFnZXInXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbigoKSA9PiB7XG4gIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbiAgd2luZG93LkdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKClcbn0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaWQsXG4gICAgICBpbmRleCxcbiAgICAgIGNvbG9yLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5udW1Qb2ludHMgPSA4XG4gICAgdGhpcy5jZW50ZXJYID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMuY2VudGVyWSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG4gICAgLy8gY3Vyc29yIHBvc2l0aW9uXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuaXNJbnNpZGVUaW1lID0gMFxuXG4gICAgdGhpcy5zZXRQb2ludHMoKVxuICB9XG5cbiAgc2V0UG9pbnRzKCkge1xuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICAvLyBjcmVhdGUgXCJudW1Qb2ludHNcIiB4IHBvaW50c1xuICAgIGNvbnN0IHNsaWNlID0gKE1hdGguUEkgKiAyKSAvIHRoaXMubnVtUG9pbnRzXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gcmFuZG9tKDAsIE1hdGguUEkgKiAyKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBtYXJnZUFuZ2xlID0gcmFuZG9tKDAsIDAuMjgpIC8vIGkgLyAxLjJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgc3RhcnQgdGltZSBvZiBhbmltYXRpb24gKHdlIGRvbid0IHdhbnQgdGhlIHR3ZWVuIHRvIGdvIGZyb20gMCB0byAxLCBpdCBjYW4gc3RhcnQgZGlyZWN0bHkgZnJvbSAwLjYgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBzdGFydEFuaW0gPSBnZXROb3coKSArIGkgKiByYW5kb20oMCwgdGhpcy5taW5EdXJhdGlvbilcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zdGFydEFuZ2xlICsgaSAqIHNsaWNlICsgbWFyZ2VBbmdsZVxuICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb20odGhpcy5taW5EdXJhdGlvbiwgdGhpcy5tYXhEdXJhdGlvbilcblxuICAgICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRBbmltLFxuICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5ZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgfVxuXG4gICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuXG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgZ2V0T2Zmc2V0TGVmdCB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IGluT3V0U2luZSB9IGZyb20gJy4uL3V0aWxzL2Vhc2UnXG5pbXBvcnQgeyBjbGFtcCwgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuaW1wb3J0IERFQlVHIGZyb20gJy4uL2NvbnN0YW50cy9EZWJ1ZydcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbFxuICAgIHRoaXMuYmtnID0gb3B0aW9ucy5ia2dcbiAgICB0aGlzLm1hc2tlZEJrZyA9IG9wdGlvbnMubWFza2VkQmtnXG4gICAgdGhpcy5pdGVtID0gb3B0aW9ucy5pdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG9wdGlvbnMubnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gb3B0aW9ucy5ncmlkQ29sc1xuICAgIHRoaXMuZ3JpZExpbmVzID0gb3B0aW9ucy5ncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gb3B0aW9ucy5pbmRleFxuICAgIHRoaXMudGltZSA9IDMwIC8vIGluIHNlY29uZHNcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z01hc2tlZEltYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19faW1hZ2UnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuc2V0QmtncygpXG5cbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmRlc3RBY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5jb2VmQWNjZWxlcmF0aW9uID0gMC4yXG4gICAgdGhpcy5pbmNyZWFzZU1heCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wN1xuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNVxuXG4gICAgLy8gdmFsdWVzIGZvciBtb3VzZSBldmVudFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnBvcFVwTWVzc2FnZSgnU1RBUlQhJywgJ2JsYWNrJylcbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc3RhcnRUaW1lcih0aGlzLnRpbWUpXG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuaXRlbSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgYCR7eCAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgYCR7eSAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKC0ke3RoaXMuaXRlbVNpemUgLyAyfSAtJHt0aGlzLml0ZW1TaXplIC8gMn0pYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcblxuICAgICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpXG5cbiAgICAgIC8vIGZha2UgaXRlbSBmb3IgZGVidWdnaW5nXG4gICAgICBsZXQgZGl2XG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlYnVnJylcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBgJHt4ICogMTAwfSVgXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgc2V0QmtncygpIHtcbiAgICAvLyBzZXQgdmlld2JveCB2YWx1ZXMsIGZpdCBJbWFnZSB0byBzY2VuZVxuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aH0gJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgICAvLyBBZGQgbWFza2VkIGJrZ1xuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLmJrZylcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG4gICAgLy8gQWRkIFwiZnJvbnRcIiBia2dcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMubWFza2VkQmtnfSlgXG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICBpZiAoREVCVUcpIHdpbmRvd1tldl0oJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3dbZXZdKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgZXZlbnRzUkFGKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnUkFGJywgdGhpcy5oYW5kbGVSQUYsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzWzBdXVxuXG4gICAgcGxheWVyLmV2ZW50WCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXG4gICAgcGxheWVyLmV2ZW50WCAtPSB0aGlzLm9mZnNldExlZnRcbiAgICBwbGF5ZXIuZXZlbnRZID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcbiAgICBwbGF5ZXIuZXZlbnRZICs9IHNjcm9sbFlcblxuICAgIHBsYXllci50YXJnZXRYID0gcGxheWVyLmV2ZW50WCAvIHRoaXMud2lkdGggKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIHZpZXdib3ggdW5pdHMgaGVyZVxuICAgIHBsYXllci50YXJnZXRYIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBiZWNhdXNlIHN0YXJ0aW5nIHBvaW50IGlzIHBsYXllci5jZW50ZXJYXG4gICAgcGxheWVyLnRhcmdldFkgPSBwbGF5ZXIuZXZlbnRZIC8gdGhpcy5oZWlnaHQgKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLSB0aGlzLm9mZnNldFRvcFxuICAgIHBsYXllci50YXJnZXRZIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9IHBsYXllcklkID0+IHtcbiAgICBpZiAoREVCVUcpIHBsYXllcklkID0gcGxheWVySWRzWzBdXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3BsYXllcklkXVxuICAgIGNvbnN0IHggPSAocGxheWVyLnRhcmdldFggLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCkgKyAwLjVcbiAgICBjb25zdCB5ID0gKHBsYXllci50YXJnZXRZIC8gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0KSArIDAuNVxuXG4gICAgbGV0IGdvb2RDbGljayA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldXG4gICAgICBpZiAoIWl0ZW0uZm91bmQgJiZcbiAgICAgICAgeCA+IGl0ZW0ueCAtIHByZWNpc2lvbiAmJlxuICAgICAgICB4IDwgaXRlbS54ICsgcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPiBpdGVtLnkgLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA8IGl0ZW0ueSArIHByZWNpc2lvbikge1xuICAgICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc2NvcmUocGxheWVyLCB0aGlzLml0ZW0pXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgICAgZ29vZENsaWNrID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnb29kQ2xpY2spIHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QuYWRkKCdnb29kJylcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ3dyb25nJylcbiAgICB9XG5cbiAgICAvLyB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZ29vZCcsICd3cm9uZycpXG4gICAgICAvLyBhZGQgYSByZWN0IHN2ZyBlbGVtZW50IGluIHRoZSBjbGlwcGF0aCBmb2xsb3dpbmcgdGhlXG4gICAgICAvLyBjdXJzb3IsIG9wYWNpdHk6MCBieSBkZWZhdWx0LCBkaXNwbGF5IGl0IHRvIGZpbGwgdGhlIGN1cnNvci5cbiAgICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggJiYgIXRoaXMuaXNFbmRlZCkge1xuICAgICAgdGhpcy5pc0VuZGVkID0gdHJ1ZVxuICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLmVuZFNjZW5lKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSQUYgPSBlID0+IHtcbiAgICBjb25zdCB7IG5vdyB9ID0gZS5kZXRhaWxcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uICsgKHRoaXMuZGVzdEFjY2VsZXJhdGlvbiAtIHRoaXMuYWNjZWxlcmF0aW9uKSAqIHRoaXMuY29lZkFjY2VsZXJhdGlvblxuXG4gICAgLy8gRm9yIGVhY2ggY3Vyc29yLi4uXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzW3ldXVxuXG4gICAgICAvLyBjbGFtcCBwbGF5ZXIgcG9zaXRpb24gdG8gbGltaXQgb2YgdGhlIHNjZW5lXG4gICAgICBwbGF5ZXIudGFyZ2V0WCA9IGNsYW1wKHBsYXllci50YXJnZXRYLCAtd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyLCB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIpXG4gICAgICBwbGF5ZXIudGFyZ2V0WSA9IGNsYW1wKHBsYXllci50YXJnZXRZLCAtd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMilcblxuICAgICAgcGxheWVyLnggKz0gKHBsYXllci50YXJnZXRYIC0gcGxheWVyLngpICogMC4xXG4gICAgICBwbGF5ZXIueSArPSAocGxheWVyLnRhcmdldFkgLSBwbGF5ZXIueSkgKiAwLjFcblxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIHBsYXllciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gcGxheWVyLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBwbGF5ZXIgYmFzZWQgb24gbW91c2VcbiAgICAgICAgcG9pbnQueCArPSBwbGF5ZXIueFxuICAgICAgICBwb2ludC55ICs9IHBsYXllci55XG5cbiAgICAgICAgLy8gRm9yIGluY3JlYXNpbmcgcGxheWVyXG4gICAgICAgIC8vIC8vIGlmIGl0ZW0gZm91bmQsIGluY3JlYXNlIHBsYXllciByYWRpdXNcbiAgICAgICAgLy8gaWYgKHkgPT09IDAgJiYgcGxheWVyLml0ZW1Gb3VuZCAmJiAhcG9pbnQuaXNJbmNyZWFzZSkge1xuICAgICAgICAvLyAgIGNvbnN0IG5ld01heFJhZGl1cyA9IHBsYXllci5tYXhSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4TWlkZGxlUmFkaXVzID0gcGxheWVyLm1heE1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5SYWRpdXMgPSBwbGF5ZXIubWluUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pbk1pZGRsZVJhZGl1cyA9IHBsYXllci5taW5NaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAvLyAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG5cbiAgICAgICAgLy8gICBwb2ludC5pc0luY3JlYXNlID0gdHJ1ZVxuICAgICAgICAvLyB9XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5lbC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLmNhcmRpbmFsKHBsYXllci5wb2ludHMpKVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBjaXJjbGUgZGlzdG9yc2lvbiBiYXNlZCBvbiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgcG9pbnRzXG4gIC8vIENhcmRpbmFsIHNwbGluZSAtIGEgdW5pZm9ybSBDYXRtdWxsLVJvbSBzcGxpbmUgd2l0aCBhIHRlbnNpb24gb3B0aW9uXG4gIGNhcmRpbmFsKHBvaW50cywgdGVuc2lvbiA9IDEuMikge1xuICAgIC8vIDEgdGVuc2lvbiBkb2VzIG5vdCBtYWtlIGEgcGVyZmVjdCByb3VuZCwgd2h5P1xuICAgIGNvbnN0IG5iUG9pbnRzID0gcG9pbnRzLmxlbmd0aFxuICAgIGlmIChuYlBvaW50cyA8IDEpIHJldHVybiAnTTAgMCdcblxuICAgIGxldCBwYXRoID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX0gQ2BcbiAgICAvLyB3aGVyZSBNIGlzIHRoZSBzdGFydGluZyBYLFkgY29vcmRzXG4gICAgLy8gQyBpcyB0aGUgMyBuZXh0IHBvaW50cyBjb29yZCBvZiBhIEN1YmljIGJlemllclxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1soaSAtIDEgKyBuYlBvaW50cykgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldXG4gICAgICBjb25zdCBwMiA9IHBvaW50c1soaSArIDEpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMyA9IHBvaW50c1soaSArIDIpICUgbmJQb2ludHNdXG5cbiAgICAgIGNvbnN0IHgxID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTEgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIGNvbnN0IHgyID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTIgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIC8vIGN1YmljIEJlemllclxuICAgICAgLy8geDEgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHgyIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkyIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHAyLnggfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIC8vIHAyLnkgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIHBhdGggKz0gYCAke3gxfSAke3kxfSAke3gyfSAke3kyfSAke3AyLnh9ICR7cDIueX1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGh9emAgLy8gY2xvc2UgcGF0aCB3aXRoIHpcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHMoZmFsc2UpXG4gICAgdGhpcy5ldmVudHNSQUYoZmFsc2UpXG4gIH1cbn1cbiIsImNvbnN0IERFQlVHID0gdHJ1ZVxuXG5leHBvcnQgZGVmYXVsdCBERUJVR1xuIiwiY29uc3QgU2VydmVyID0ge1xuICBob3N0OiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyksXG4gIHdlYnNvY2tldDogbmV3IFdlYlNvY2tldChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyl9L2dhbWVgKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyXG4iLCJcbmltcG9ydCBnYW1lVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sJ1xuaW1wb3J0IHNldHVwVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBzZXJ2ZXJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vY29uc3RhbnRzL1NlcnZlcidcbmltcG9ydCBERUJVRyBmcm9tICcuLi9jb25zdGFudHMvRGVidWcnXG5cbi8vIGFzc2V0c1xuaW1wb3J0IHNjZW5lMUJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXBhdHRlcm4uanBnJ1xuaW1wb3J0IHNjZW5lMU1hc2sgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1tYXNrLmpwZydcbmltcG9ydCBzY2VuZTFJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtdGFyZ2V0LmpwZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cblxuLy8gcHJlcGFyZSB0aGUgQ2hhcmFjdGVySWRcbi8vIENoYXJhY3RlcklkIC0tPiBnZXQgdGhlIGltYWdlIG9mIHRoZSBjaGFyYWN0ZXJcbi8vIGVuZCBzY2VuZTpcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgaWYgKCFERUJVRykge1xuICAgICAgU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwxYClcbiAgICAgICAgICB2YWxpZFRva2VuID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ZXJJZCA9IGRhdGFbMl1cbiAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZS5pbm5lckhUTUwgPSBgUGxheWVyICR7cGxheWVySWRzLmxlbmd0aH0gaXMgcmVhZHlgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIURFQlVHKSBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gZ2FtZVRtcFxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2dhbWVdJylcblxuICAgIC8vIHNjb3Jlc1xuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFNYXNrLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDYsXG4gICAgICAgIGdyaWRMaW5lczogNixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA4LFxuICAgICAgICBncmlkTGluZXM6IDgsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTAsXG4gICAgICAgIGdyaWRMaW5lczogMTAsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTIsXG4gICAgICAgIGdyaWRMaW5lczogMTIsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5wbGF5ZXJzID0gW11cbiAgICB0aGlzLnNjb3JlcyA9IFswLCAwXVxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSAwXG5cbiAgICB0aGlzLmxvYWRCa2coKVxuICB9XG5cbiAgbG9hZEJrZygpIHtcbiAgICAvLyBMb2FkIEN1cnJlbnQgU2NlbmUgaW1hZ2VcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XS5ia2dcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gaW1hZ2UgbG9hZGVkXG4gICAgICB0aGlzLmRvbSgpXG4gICAgICAvLyBTZXQgdGhlIHZpZXdib3ggdG8gdGhlIHJhdGlvIG9mIHRoZSBzY2VuZVxuICAgICAgdGhpcy52YldpZHRoID0gMTkyMFxuICAgICAgdGhpcy52YkhlaWdodCA9IDg0MFxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAgIC4uLnNjZW5lLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgICB0aW1lcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5wbGF5ZXJJZHMgPSBwbGF5ZXJJZHNcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjb2xvcjogY29sb3JzWzBdLFxuICAgICAgICBpZDogcGxheWVySWRzWzBdLFxuICAgICAgfSlcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbMV1dID0gbmV3IFBsYXllcih7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5jdXJzb3JzWzFdLFxuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgaWQ6IHBsYXllcklkc1sxXSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcihkdXJhdGlvbikge1xuICAgIGxldCB0aW1lciA9IGR1cmF0aW9uXG4gICAgbGV0IHNlY29uZHNcblxuICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IGR1cmF0aW9uXG5cbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZXIsIDEwKVxuICAgICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzXG5cbiAgICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IHNlY29uZHNcblxuICAgICAgaWYgKHRpbWVyID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW5kU2NlbmUoJ1RJTUUgT1VUIScpXG4gICAgICB9XG5cbiAgICAgIHRpbWVyIC09IDFcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgc2NvcmUocGxheWVyLCBpdGVtKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSArPSAxXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXBbaV0uaW5uZXJIVE1MID0gYFAtJHtwbGF5ZXIuaW5kZXggKyAxfSA6ICR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gaXRlbVxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzY29yZV9faXRlbScpXG4gICAgdGhpcy5kb20uc2NvcmVJdGVtc1twbGF5ZXIuaW5kZXhdLmFwcGVuZENoaWxkKGltZylcblxuICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXIuaWR9LCR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKG1lc3NhZ2UgPSAnc3RhZ2UgY29tcGxldGUnKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpXG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UobWVzc2FnZSwgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc2NlbmVzLmxlbmd0aCArIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgcGFydHknKVxuICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKCdkaXNjb25uZWN0X2FsbF91c2VycycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyByZXNldCBwbGF5ZXJzIHBvcyB0byAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnRhcmdldFggPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS50YXJnZXRZID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0ueCA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnkgPSAwXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxOTIwIDg0MFxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiIHdpZHRoPVxcXCIxOTIwcHhcXFwiIGhlaWdodD1cXFwiMTA4MHB4XFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB3aWR0aD1cXFwiMTkyMHB4XFxcIiBoZWlnaHQ9XFxcIjEwODBweFxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTQ4LS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR1cF9fbWVzc2FnZSB0LTY0LS1ib2xkXFxcIj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9