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

      if (_this.numItemFound === _this.items.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtbWFzay5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1wYXR0ZXJuLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXRhcmdldC5qcGciLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9EZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29uc3RhbnRzL1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvR2FtZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL1JBRk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50LmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9nYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sIl0sIm5hbWVzIjpbIndpbmRvdyIsIkdhbWVNYW5hZ2VyIiwiUGxheWVyIiwicHJvcHMiLCJlbCIsImlkIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJ2YldpZHRoIiwiY2VudGVyWSIsInZiSGVpZ2h0IiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwibWluTWlkZGxlUmFkaXVzIiwibWF4TWlkZGxlUmFkaXVzIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIngiLCJ5IiwidGFyZ2V0WCIsInRhcmdldFkiLCJpc0luc2lkZVRpbWUiLCJzZXRQb2ludHMiLCJwb2ludHMiLCJzbGljZSIsIk1hdGgiLCJQSSIsInN0YXJ0QW5nbGUiLCJyYW5kb20iLCJpIiwibWFyZ2VBbmdsZSIsInN0YXJ0QW5pbSIsImdldE5vdyIsImFuZ2xlIiwiZHVyYXRpb24iLCJwb2ludCIsImNvcyIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsInBsYXllcklkcyIsIkRFQlVHIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwbGF5ZXJJZCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwiZ29vZENsaWNrIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtIiwiZm91bmQiLCJzY29yZSIsInN0eWxlIiwib3BhY2l0eSIsImRlYnVnRWwiLCJudW1JdGVtRm91bmQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZW5kU2NlbmUiLCJub3ciLCJkZXRhaWwiLCJhY2NlbGVyYXRpb24iLCJkZXN0QWNjZWxlcmF0aW9uIiwiY29lZkFjY2VsZXJhdGlvbiIsImNsYW1wIiwicGVyY2VudCIsImluT3V0U2luZSIsInJldmVyc2VBbmltIiwic2V0QXR0cmlidXRlIiwiY2FyZGluYWwiLCJlbGVtZW50IiwiYmtnIiwibWFza2VkQmtnIiwibnVtSXRlbXMiLCJncmlkQ29scyIsImdyaWRMaW5lcyIsInRpbWUiLCJkb20iLCJzZXQiLCJzdmdTY2VuZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdNYXNrZWRJbWFnZSIsInN2Z0NsaXBQYXRoIiwic3ZnQ2xpcFBhdGhSZWYiLCJzZXRCa2dzIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwicG9wVXBNZXNzYWdlIiwic3RhcnRUaW1lciIsInV1aWR2MSIsInBvc2l0aW9uc0luR3JpZCIsImoiLCJvYmoiLCJyZCIsInJhbmRvbUludCIsInNwbGljZSIsInN2Z0ltYWdlIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJhcHBlbmRDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZEltYWdlIiwibWV0aG9kIiwiZXYiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVDbGljayIsImhhbmRsZVJBRiIsInRlbnNpb24iLCJuYlBvaW50cyIsInBhdGgiLCJwMCIsInAxIiwicDIiLCJwMyIsIngxIiwieTEiLCJ4MiIsInkyIiwiU2VydmVyIiwiaG9zdCIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVwbGFjZSIsIndlYnNvY2tldCIsIldlYlNvY2tldCIsInRva2VucyIsIm1haW4iLCJpbm5lckhUTUwiLCJzZXR1cFRtcCIsInNldHVwTWVzc2FnZSIsIm9ubWVzc2FnZSIsImxpc3RlblNlcnZlciIsImV2ZW50IiwiZGF0YSIsInNwbGl0IiwidmFsaWRUb2tlbiIsImZpcnN0UGxheWVySWQiLCJzZW5kIiwiaW5pdCIsInBhcnNlRmxvYXQiLCJjdXJyZW50U2NlbmUiLCJvbm9wZW4iLCJvbldzT3BlbiIsImdhbWVUbXAiLCJzY2VuZXMiLCJzY2VuZTFCa2ciLCJzY2VuZTFNYXNrIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiY3Vyc29ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzYWdlIiwic2NvcmVDZW50ZXJSZWNhcCIsInNjb3JlSXRlbXMiLCJ0aW1lciIsImNvbG9ycyIsInNlY29uZHMiLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGVTY2VuZSIsImRlc3Ryb3lTY2VuZSIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsImVsZW0iLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5VG9wIiwiYm9keSIsIm91dEV4cG8iLCJuIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJ0bXAiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBDOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFB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LHdGQUEyQyx5Yjs7Ozs7Ozs7Ozs7QUNBcjBDLCtKIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2EwMzc5YThiODFiZGE3N2M1YzBhMzNkOTBkN2IyNTkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjIyNWM2ZGRlZGYzOGVmODQ1NTg3MmY1M2IzZjYzYzguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzEwNzBjZWE5ZTQ2NmViMzcxNDcwOWE1NGMxZGNlNTMuanBnXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpZCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IGNsYW1wLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsXG4gICAgdGhpcy5ia2cgPSBvcHRpb25zLmJrZ1xuICAgIHRoaXMubWFza2VkQmtnID0gb3B0aW9ucy5tYXNrZWRCa2dcbiAgICB0aGlzLml0ZW0gPSBvcHRpb25zLml0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gb3B0aW9ucy5udW1JdGVtc1xuICAgIHRoaXMuZ3JpZENvbHMgPSBvcHRpb25zLmdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBvcHRpb25zLmdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy50aW1lID0gNjAgLy8gaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5zZXRCa2dzKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG5cbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIucG9wVXBNZXNzYWdlKCdTVEFSVCEnLCAnYmxhY2snKVxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zdGFydFRpbWVyKHRoaXMudGltZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGxldCBkaXZcbiAgICAgIGlmIChERUJVRykge1xuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBzZXRCa2dzKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlcywgZml0IEltYWdlIHRvIHNjZW5lXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICAgIC8vIEFkZCBtYXNrZWQgYmtnXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICAvLyBBZGQgXCJmcm9udFwiIGJrZ1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5tYXNrZWRCa2d9KWBcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIGlmIChERUJVRykgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbMF1dXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gcGxheWVySWQgPT4ge1xuICAgIGlmIChERUJVRykgcGxheWVySWQgPSBwbGF5ZXJJZHNbMF1cbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbcGxheWVySWRdXG4gICAgY29uc3QgeCA9IChwbGF5ZXIudGFyZ2V0WCAvIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoKSArIDAuNVxuICAgIGNvbnN0IHkgPSAocGxheWVyLnRhcmdldFkgLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQpICsgMC41XG5cbiAgICBsZXQgZ29vZENsaWNrID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgICBnb29kQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdvb2RDbGljaykge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ2dvb2QnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKVxuICAgIH1cblxuICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QucmVtb3ZlKCdnb29kJywgJ3dyb25nJylcbiAgICAgIC8vIGFkZCBhIHJlY3Qgc3ZnIGVsZW1lbnQgaW4gdGhlIGNsaXBwYXRoIGZvbGxvd2luZyB0aGVcbiAgICAgIC8vIGN1cnNvciwgb3BhY2l0eTowIGJ5IGRlZmF1bHQsIGRpc3BsYXkgaXQgdG8gZmlsbCB0aGUgY3Vyc29yLlxuICAgICAgLy8gdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc3R5bGUub3BhY2l0eSA9IDFcbiAgICB9LCAxMDAwKVxuXG4gICAgaWYgKHRoaXMubnVtSXRlbUZvdW5kID09PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLmVuZFNjZW5lKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSQUYgPSBlID0+IHtcbiAgICBjb25zdCB7IG5vdyB9ID0gZS5kZXRhaWxcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uICsgKHRoaXMuZGVzdEFjY2VsZXJhdGlvbiAtIHRoaXMuYWNjZWxlcmF0aW9uKSAqIHRoaXMuY29lZkFjY2VsZXJhdGlvblxuXG4gICAgLy8gRm9yIGVhY2ggY3Vyc29yLi4uXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzW3ldXVxuXG4gICAgICAvLyBjbGFtcCBwbGF5ZXIgcG9zaXRpb24gdG8gbGltaXQgb2YgdGhlIHNjZW5lXG4gICAgICBwbGF5ZXIudGFyZ2V0WCA9IGNsYW1wKHBsYXllci50YXJnZXRYLCAtd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyLCB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIpXG4gICAgICBwbGF5ZXIudGFyZ2V0WSA9IGNsYW1wKHBsYXllci50YXJnZXRZLCAtd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMilcblxuICAgICAgcGxheWVyLnggKz0gKHBsYXllci50YXJnZXRYIC0gcGxheWVyLngpICogMC4xXG4gICAgICBwbGF5ZXIueSArPSAocGxheWVyLnRhcmdldFkgLSBwbGF5ZXIueSkgKiAwLjFcblxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIHBsYXllciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gcGxheWVyLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBwbGF5ZXIgYmFzZWQgb24gbW91c2VcbiAgICAgICAgcG9pbnQueCArPSBwbGF5ZXIueFxuICAgICAgICBwb2ludC55ICs9IHBsYXllci55XG5cbiAgICAgICAgLy8gRm9yIGluY3JlYXNpbmcgcGxheWVyXG4gICAgICAgIC8vIC8vIGlmIGl0ZW0gZm91bmQsIGluY3JlYXNlIHBsYXllciByYWRpdXNcbiAgICAgICAgLy8gaWYgKHkgPT09IDAgJiYgcGxheWVyLml0ZW1Gb3VuZCAmJiAhcG9pbnQuaXNJbmNyZWFzZSkge1xuICAgICAgICAvLyAgIGNvbnN0IG5ld01heFJhZGl1cyA9IHBsYXllci5tYXhSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4TWlkZGxlUmFkaXVzID0gcGxheWVyLm1heE1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5SYWRpdXMgPSBwbGF5ZXIubWluUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pbk1pZGRsZVJhZGl1cyA9IHBsYXllci5taW5NaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAvLyAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG5cbiAgICAgICAgLy8gICBwb2ludC5pc0luY3JlYXNlID0gdHJ1ZVxuICAgICAgICAvLyB9XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5lbC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLmNhcmRpbmFsKHBsYXllci5wb2ludHMpKVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBjaXJjbGUgZGlzdG9yc2lvbiBiYXNlZCBvbiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgcG9pbnRzXG4gIC8vIENhcmRpbmFsIHNwbGluZSAtIGEgdW5pZm9ybSBDYXRtdWxsLVJvbSBzcGxpbmUgd2l0aCBhIHRlbnNpb24gb3B0aW9uXG4gIGNhcmRpbmFsKHBvaW50cywgdGVuc2lvbiA9IDEuMikge1xuICAgIC8vIDEgdGVuc2lvbiBkb2VzIG5vdCBtYWtlIGEgcGVyZmVjdCByb3VuZCwgd2h5P1xuICAgIGNvbnN0IG5iUG9pbnRzID0gcG9pbnRzLmxlbmd0aFxuICAgIGlmIChuYlBvaW50cyA8IDEpIHJldHVybiAnTTAgMCdcblxuICAgIGxldCBwYXRoID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX0gQ2BcbiAgICAvLyB3aGVyZSBNIGlzIHRoZSBzdGFydGluZyBYLFkgY29vcmRzXG4gICAgLy8gQyBpcyB0aGUgMyBuZXh0IHBvaW50cyBjb29yZCBvZiBhIEN1YmljIGJlemllclxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1soaSAtIDEgKyBuYlBvaW50cykgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldXG4gICAgICBjb25zdCBwMiA9IHBvaW50c1soaSArIDEpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMyA9IHBvaW50c1soaSArIDIpICUgbmJQb2ludHNdXG5cbiAgICAgIGNvbnN0IHgxID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTEgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIGNvbnN0IHgyID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTIgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIC8vIGN1YmljIEJlemllclxuICAgICAgLy8geDEgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHgyIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkyIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHAyLnggfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIC8vIHAyLnkgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIHBhdGggKz0gYCAke3gxfSAke3kxfSAke3gyfSAke3kyfSAke3AyLnh9ICR7cDIueX1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGh9emAgLy8gY2xvc2UgcGF0aCB3aXRoIHpcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHMoZmFsc2UpXG4gICAgdGhpcy5ldmVudHNSQUYoZmFsc2UpXG4gIH1cbn1cbiIsImNvbnN0IERFQlVHID0gdHJ1ZVxuXG5leHBvcnQgZGVmYXVsdCBERUJVR1xuIiwiY29uc3QgU2VydmVyID0ge1xuICBob3N0OiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyksXG4gIHdlYnNvY2tldDogbmV3IFdlYlNvY2tldChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyl9L2dhbWVgKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyXG4iLCJcbmltcG9ydCBnYW1lVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sJ1xuaW1wb3J0IHNldHVwVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBzZXJ2ZXJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vY29uc3RhbnRzL1NlcnZlcidcbmltcG9ydCBERUJVRyBmcm9tICcuLi9jb25zdGFudHMvRGVidWcnXG5cbi8vIGFzc2V0c1xuaW1wb3J0IHNjZW5lMUJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9yb3VuZF8xL3IxLXBhdHRlcm4uanBnJ1xuaW1wb3J0IHNjZW5lMU1hc2sgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcm91bmRfMS9yMS1tYXNrLmpwZydcbmltcG9ydCBzY2VuZTFJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3JvdW5kXzEvcjEtdGFyZ2V0LmpwZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cblxuLy8gcHJlcGFyZSB0aGUgQ2hhcmFjdGVySWRcbi8vIENoYXJhY3RlcklkIC0tPiBnZXQgdGhlIGltYWdlIG9mIHRoZSBjaGFyYWN0ZXJcbi8vIGVuZCBzY2VuZTpcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgaWYgKCFERUJVRykge1xuICAgICAgU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwxYClcbiAgICAgICAgICB2YWxpZFRva2VuID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ZXJJZCA9IGRhdGFbMl1cbiAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZS5pbm5lckhUTUwgPSBgUGxheWVyICR7cGxheWVySWRzLmxlbmd0aH0gaXMgcmVhZHlgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIURFQlVHKSBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gZ2FtZVRtcFxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2dhbWVdJylcblxuICAgIC8vIHNjb3Jlc1xuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFNYXNrLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDYsXG4gICAgICAgIGdyaWRMaW5lczogNixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA4LFxuICAgICAgICBncmlkTGluZXM6IDgsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTAsXG4gICAgICAgIGdyaWRMaW5lczogMTAsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTIsXG4gICAgICAgIGdyaWRMaW5lczogMTIsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5wbGF5ZXJzID0gW11cbiAgICB0aGlzLnNjb3JlcyA9IFswLCAwXVxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSAwXG5cbiAgICB0aGlzLmxvYWRCa2coKVxuICB9XG5cbiAgbG9hZEJrZygpIHtcbiAgICAvLyBMb2FkIEN1cnJlbnQgU2NlbmUgaW1hZ2VcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XS5ia2dcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gaW1hZ2UgbG9hZGVkXG4gICAgICB0aGlzLmRvbSgpXG4gICAgICAvLyBTZXQgdGhlIHZpZXdib3ggdG8gdGhlIHJhdGlvIG9mIHRoZSBzY2VuZVxuICAgICAgdGhpcy52YldpZHRoID0gMTkyMFxuICAgICAgdGhpcy52YkhlaWdodCA9IDg0MFxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAgIC4uLnNjZW5lLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgICB0aW1lcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5wbGF5ZXJJZHMgPSBwbGF5ZXJJZHNcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjb2xvcjogY29sb3JzWzBdLFxuICAgICAgICBpZDogcGxheWVySWRzWzBdLFxuICAgICAgfSlcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbMV1dID0gbmV3IFBsYXllcih7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5jdXJzb3JzWzFdLFxuICAgICAgICBpbmRleDogMSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1sxXSxcbiAgICAgICAgaWQ6IHBsYXllcklkc1sxXSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgc3RhcnRUaW1lcihkdXJhdGlvbikge1xuICAgIGxldCB0aW1lciA9IGR1cmF0aW9uXG4gICAgbGV0IHNlY29uZHNcblxuICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IGR1cmF0aW9uXG5cbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZXIsIDEwKVxuICAgICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzXG5cbiAgICAgIHRoaXMuZG9tLnRpbWVyLmlubmVySFRNTCA9IHNlY29uZHNcblxuICAgICAgaWYgKHRpbWVyID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW5kU2NlbmUoJ1RJTUUgT1VUIScpXG4gICAgICB9XG5cbiAgICAgIHRpbWVyIC09IDFcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgc2NvcmUocGxheWVyLCBpdGVtKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSArPSAxXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXBbaV0uaW5uZXJIVE1MID0gYFAtJHtwbGF5ZXIuaW5kZXggKyAxfSA6ICR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gaXRlbVxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzY29yZV9faXRlbScpXG4gICAgdGhpcy5kb20uc2NvcmVJdGVtc1twbGF5ZXIuaW5kZXhdLmFwcGVuZENoaWxkKGltZylcblxuICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXIuaWR9LCR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKG1lc3NhZ2UgPSAnc3RhZ2UgY29tcGxldGUnKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpXG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UobWVzc2FnZSwgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc2NlbmVzLmxlbmd0aCArIDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgcGFydHknKVxuICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKCdkaXNjb25uZWN0X2FsbF91c2VycycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyByZXNldCBwbGF5ZXJzIHBvcyB0byAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnRhcmdldFggPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS50YXJnZXRZID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0ueCA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnkgPSAwXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxOTIwIDg0MFxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiIHdpZHRoPVxcXCIxOTIwcHhcXFwiIGhlaWdodD1cXFwiMTA4MHB4XFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB3aWR0aD1cXFwiMTkyMHB4XFxcIiBoZWlnaHQ9XFxcIjEwODBweFxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR1cF9fbWVzc2FnZSB0LTY0LS1ib2xkXFxcIj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9