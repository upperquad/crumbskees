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
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/front-end/images/bkg1.jpg */ "./assets/front-end/images/bkg1.jpg");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8__);
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
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        maskedBkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        numItems: 5,
        gridCols: 10,
        gridLines: 10,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
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

      if (index === this.scenes.length) {
        console.log('end of party');
        _constants_Server__WEBPACK_IMPORTED_MODULE_4__["default"].websocket.send('disconnect_all_users');
        return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL0dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9SQUZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9jcmVhdGVDdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9lYXNlLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpZCIsImluZGV4IiwiY29sb3IiLCJudW1Qb2ludHMiLCJjZW50ZXJYIiwidmJXaWR0aCIsImNlbnRlclkiLCJ2YkhlaWdodCIsIm1pblJhZGl1cyIsIm1heFJhZGl1cyIsIm1pbk1pZGRsZVJhZGl1cyIsIm1heE1pZGRsZVJhZGl1cyIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJ4IiwieSIsInRhcmdldFgiLCJ0YXJnZXRZIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJjb3MiLCJzaW4iLCJ0YXJnZXRNaW5YIiwidGFyZ2V0TWluWSIsInRhcmdldE1heFgiLCJ0YXJnZXRNYXhZIiwic3RhcnRYIiwic3RhcnRZIiwiZGVzdFgiLCJkZXN0WSIsInB1c2giLCJwbGF5ZXJJZHMiLCJERUJVRyIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicGxheWVySWQiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiZW5kU2NlbmUiLCJub3ciLCJkZXRhaWwiLCJhY2NlbGVyYXRpb24iLCJkZXN0QWNjZWxlcmF0aW9uIiwiY29lZkFjY2VsZXJhdGlvbiIsImNsYW1wIiwicGVyY2VudCIsImluT3V0U2luZSIsInJldmVyc2VBbmltIiwic2V0QXR0cmlidXRlIiwiY2FyZGluYWwiLCJlbGVtZW50IiwiYmtnIiwibWFza2VkQmtnIiwibnVtSXRlbXMiLCJncmlkQ29scyIsImdyaWRMaW5lcyIsInRpbWUiLCJkb20iLCJzZXQiLCJzdmdTY2VuZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdNYXNrZWRJbWFnZSIsInN2Z0NsaXBQYXRoIiwic3ZnQ2xpcFBhdGhSZWYiLCJzZXRCa2dzIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwicG9wVXBNZXNzYWdlIiwic3RhcnRUaW1lciIsInV1aWR2MSIsInBvc2l0aW9uc0luR3JpZCIsImoiLCJvYmoiLCJyZCIsInJhbmRvbUludCIsInNwbGljZSIsInN2Z0ltYWdlIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJhcHBlbmRDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZEltYWdlIiwibWV0aG9kIiwiZXYiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVDbGljayIsImhhbmRsZVJBRiIsInRlbnNpb24iLCJuYlBvaW50cyIsInBhdGgiLCJwMCIsInAxIiwicDIiLCJwMyIsIngxIiwieTEiLCJ4MiIsInkyIiwiU2VydmVyIiwiaG9zdCIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVwbGFjZSIsIndlYnNvY2tldCIsIldlYlNvY2tldCIsInRva2VucyIsIm1haW4iLCJpbm5lckhUTUwiLCJzZXR1cFRtcCIsInNldHVwTWVzc2FnZSIsIm9ubWVzc2FnZSIsImxpc3RlblNlcnZlciIsImV2ZW50IiwiZGF0YSIsInNwbGl0IiwidmFsaWRUb2tlbiIsImZpcnN0UGxheWVySWQiLCJzZW5kIiwic2V0VGltZW91dCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJyZW1vdmUiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsInZhbHVlIiwibWluIiwibWF4IiwidG1wIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsQ0FBQyxZQUFNO0FBQ0w7QUFDQUEsUUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQUlBLDZEQUFKLEVBQXJCO0FBQ0QsQ0FIRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBRWZDLEVBRmUsR0FNYkQsS0FOYSxDQUVmQyxFQUZlO0FBQUEsUUFHZkMsRUFIZSxHQU1iRixLQU5hLENBR2ZFLEVBSGU7QUFBQSxRQUlmQyxLQUplLEdBTWJILEtBTmEsQ0FJZkcsS0FKZTtBQUFBLFFBS2ZDLEtBTGUsR0FNYkosS0FOYSxDQUtmSSxLQUxlO0FBUWpCLFNBQUtILEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWVULE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsQ0FBNUMsQ0FiaUIsQ0FhNkI7O0FBQzlDLFNBQUtDLE9BQUwsR0FBZVgsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFuQixHQUE4QixDQUE3QyxDQWRpQixDQWM4Qjs7QUFDL0MsU0FBS0MsU0FBTCxHQUFpQmIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixJQUE5QyxDQWZpQixDQWVrQzs7QUFDbkQsU0FBS0ksU0FBTCxHQUFpQixLQUFLRCxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsR0FBaUIsR0FBbkQ7QUFDQSxTQUFLRSxlQUFMLEdBQXVCLEtBQUtGLFNBQUwsR0FBaUIsQ0FBQyxLQUFLQyxTQUFMLEdBQWlCLEtBQUtELFNBQXZCLElBQW9DLElBQTVFO0FBQ0EsU0FBS0csZUFBTCxHQUF1QixLQUFLSCxTQUFMLEdBQWlCLENBQUMsS0FBS0MsU0FBTCxHQUFpQixLQUFLRCxTQUF2QixJQUFvQyxJQUE1RTtBQUNBLFNBQUtJLFdBQUwsR0FBbUIsR0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEdBQW5CLENBcEJpQixDQXFCakI7O0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBRUEsU0FBS0MsU0FBTDtBQUNEOzs7O2dDQUVXO0FBQ1YsV0FBS0MsTUFBTCxHQUFjLEVBQWQsQ0FEVSxDQUVWOztBQUNBLFVBQU1DLEtBQUssR0FBSUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBWCxHQUFnQixLQUFLcEIsU0FBbkM7QUFDQSxXQUFLcUIsVUFBTCxHQUFrQkMsMERBQU0sQ0FBQyxDQUFELEVBQUlILElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWQsQ0FBeEI7O0FBRUEsV0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt2QixTQUF6QixFQUFvQ3VCLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBTUMsVUFBVSxHQUFHRiwwREFBTSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQXpCLENBRHVDLENBQ0o7QUFDbkM7O0FBQ0EsWUFBTUcsU0FBUyxHQUFHQywwREFBTSxLQUFLSCxDQUFDLEdBQUdELDBEQUFNLENBQUMsQ0FBRCxFQUFJLEtBQUtiLFdBQVQsQ0FBdkM7QUFDQSxZQUFNa0IsS0FBSyxHQUFHLEtBQUtOLFVBQUwsR0FBa0JFLENBQUMsR0FBR0wsS0FBdEIsR0FBOEJNLFVBQTVDO0FBQ0EsWUFBTUksUUFBUSxHQUFHTiwwREFBTSxDQUFDLEtBQUtiLFdBQU4sRUFBbUIsS0FBS0MsV0FBeEIsQ0FBdkI7QUFFQSxZQUFNbUIsS0FBSyxHQUFHO0FBQ1pGLGVBQUssRUFBTEEsS0FEWTtBQUVaQyxrQkFBUSxFQUFSQSxRQUZZO0FBR1pILG1CQUFTLEVBQVRBLFNBSFk7QUFJWmQsV0FBQyxFQUFFLEtBQUtWLE9BQUwsR0FBZWtCLElBQUksQ0FBQ1csR0FBTCxDQUFTSCxLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtqQixTQUFOLEVBQWlCLEtBQUtDLFNBQXRCLENBSjlCO0FBS1pNLFdBQUMsRUFBRSxLQUFLVCxPQUFMLEdBQWVnQixJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLakIsU0FBTixFQUFpQixLQUFLQyxTQUF0QixDQUw5QjtBQU1aMEIsb0JBQVUsRUFBRSxLQUFLL0IsT0FBTCxHQUFla0IsSUFBSSxDQUFDVyxHQUFMLENBQVNILEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2pCLFNBQU4sRUFBaUIsS0FBS0UsZUFBdEIsQ0FOdkM7QUFPWjBCLG9CQUFVLEVBQUUsS0FBSzlCLE9BQUwsR0FBZWdCLElBQUksQ0FBQ1ksR0FBTCxDQUFTSixLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtqQixTQUFOLEVBQWlCLEtBQUtFLGVBQXRCLENBUHZDO0FBUVoyQixvQkFBVSxFQUFFLEtBQUtqQyxPQUFMLEdBQWVrQixJQUFJLENBQUNXLEdBQUwsQ0FBU0gsS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLZCxlQUFOLEVBQXVCLEtBQUtGLFNBQTVCLENBUnZDO0FBU1o2QixvQkFBVSxFQUFFLEtBQUtoQyxPQUFMLEdBQWVnQixJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLZCxlQUFOLEVBQXVCLEtBQUtGLFNBQTVCO0FBVHZDLFNBQWQ7QUFZQXVCLGFBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsYUFBSyxDQUFDUSxNQUFOLEdBQWVSLEtBQUssQ0FBQ2pCLENBQXJCO0FBQ0FpQixhQUFLLENBQUNTLEtBQU4sR0FBY1QsS0FBSyxDQUFDSyxVQUFwQjtBQUNBTCxhQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDTSxVQUFwQjtBQUVBLGFBQUtsQixNQUFMLENBQVl1QixJQUFaLENBQWlCWCxLQUFqQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1ZLFNBQVMsR0FBR0Msd0RBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQUgsR0FBa0MsRUFBekQ7O0lBRXFCQyxLOzs7QUFDbkIsaUJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSw2Q0FvSkgsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JCLFVBQU1DLE9BQU8sR0FBR3RELE1BQU0sQ0FBQ3NELE9BQVAsSUFBa0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBM0Q7QUFDQSxVQUFNQyxNQUFNLEdBQUcxRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIwRCxPQUFuQixDQUEyQjNELE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQmdELFNBQW5CLENBQTZCLENBQTdCLENBQTNCLENBQWY7QUFFQVMsWUFBTSxDQUFDRSxNQUFQLEdBQWdCUCxDQUFDLENBQUNRLE9BQUYsR0FBWVIsQ0FBQyxDQUFDUSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUF6QixHQUFtQ1QsQ0FBQyxDQUFDUyxPQUFyRDtBQUNBSixZQUFNLENBQUNFLE1BQVAsSUFBaUIsS0FBSSxDQUFDRyxVQUF0QjtBQUNBTCxZQUFNLENBQUNNLE1BQVAsR0FBZ0JYLENBQUMsQ0FBQ1EsT0FBRixHQUFZUixDQUFDLENBQUNRLE9BQUYsQ0FBVSxDQUFWLEVBQWFJLE9BQXpCLEdBQW1DWixDQUFDLENBQUNZLE9BQXJEO0FBQ0FQLFlBQU0sQ0FBQ00sTUFBUCxJQUFpQlYsT0FBakI7QUFFQUksWUFBTSxDQUFDckMsT0FBUCxHQUFpQnFDLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixLQUFJLENBQUNNLEtBQXJCLEdBQTZCbEUsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFqRSxDQVRxQixDQVNvRDs7QUFDekVnRCxZQUFNLENBQUNyQyxPQUFQLElBQWtCckIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixDQUEvQyxDQVZxQixDQVU0Qjs7QUFDakRnRCxZQUFNLENBQUNwQyxPQUFQLEdBQWlCb0MsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEtBQUksQ0FBQ0csTUFBckIsR0FBOEJuRSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQWpELEdBQTRELEtBQUksQ0FBQ3dELFNBQWxGO0FBQ0FWLFlBQU0sQ0FBQ3BDLE9BQVAsSUFBa0J0QixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQW5CLEdBQThCLENBQWhELENBWnFCLENBY3JCO0FBQ0QsS0FuS29COztBQUFBLHlDQXFLUCxVQUFBeUQsUUFBUSxFQUFJO0FBQ3hCLFVBQUluQix3REFBSixFQUFXbUIsUUFBUSxHQUFHcEIsU0FBUyxDQUFDLENBQUQsQ0FBcEI7QUFDWCxVQUFNcUIsU0FBUyxHQUFHLEtBQUksQ0FBQ0MsY0FBdkI7QUFDQSxVQUFNYixNQUFNLEdBQUcxRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUIwRCxPQUFuQixDQUEyQlUsUUFBM0IsQ0FBZjtBQUNBLFVBQU1sRCxDQUFDLEdBQUl1QyxNQUFNLENBQUNyQyxPQUFQLEdBQWlCckIsTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFyQyxHQUFnRCxHQUExRDtBQUNBLFVBQU1VLENBQUMsR0FBSXNDLE1BQU0sQ0FBQ3BDLE9BQVAsR0FBaUJ0QixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQXJDLEdBQWlELEdBQTNEOztBQUVBLFdBQUssSUFBSW1CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBSSxDQUFDeUMsS0FBTCxDQUFXQyxNQUEvQixFQUF1QzFDLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsWUFBTTJDLElBQUksR0FBRyxLQUFJLENBQUNGLEtBQUwsQ0FBV3pDLENBQVgsQ0FBYjs7QUFDQSxZQUFJLENBQUMyQyxJQUFJLENBQUNDLEtBQU4sSUFDRnhELENBQUMsR0FBR3VELElBQUksQ0FBQ3ZELENBQUwsR0FBU21ELFNBRFgsSUFFRm5ELENBQUMsR0FBR3VELElBQUksQ0FBQ3ZELENBQUwsR0FBU21ELFNBRlgsSUFHRmxELENBQUMsR0FBR3NELElBQUksQ0FBQ3RELENBQUwsR0FBU2tELFNBSFgsSUFJRmxELENBQUMsR0FBR3NELElBQUksQ0FBQ3RELENBQUwsR0FBU2tELFNBSmYsRUFJMEI7QUFDeEJ0RSxnQkFBTSxDQUFDQyxXQUFQLENBQW1CMkUsS0FBbkIsQ0FBeUJsQixNQUF6QixFQUFpQyxLQUFJLENBQUNnQixJQUF0QztBQUNBQSxjQUFJLENBQUNDLEtBQUwsR0FBYSxJQUFiO0FBQ0FELGNBQUksQ0FBQ3RFLEVBQUwsQ0FBUXlFLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixDQUF4QjtBQUNBSixjQUFJLENBQUNLLE9BQUwsQ0FBYUYsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsQ0FBN0I7QUFFQSxlQUFJLENBQUNFLFlBQUwsR0FBb0IsS0FBSSxDQUFDQSxZQUFMLEdBQW9CLENBQXhDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJLEtBQUksQ0FBQ0EsWUFBTCxLQUFzQixLQUFJLENBQUNSLEtBQUwsQ0FBV0MsTUFBckMsRUFBNkM7QUFDM0N6RSxjQUFNLENBQUNDLFdBQVAsQ0FBbUJnRixRQUFuQjtBQUNEO0FBQ0YsS0EvTG9COztBQUFBLHVDQWlNVCxVQUFBNUIsQ0FBQyxFQUFJO0FBQUEsVUFDUDZCLEdBRE8sR0FDQzdCLENBQUMsQ0FBQzhCLE1BREgsQ0FDUEQsR0FETztBQUVmLFdBQUksQ0FBQ0UsWUFBTCxHQUFvQixLQUFJLENBQUNBLFlBQUwsR0FBb0IsQ0FBQyxLQUFJLENBQUNDLGdCQUFMLEdBQXdCLEtBQUksQ0FBQ0QsWUFBOUIsSUFBOEMsS0FBSSxDQUFDRSxnQkFBM0YsQ0FGZSxDQUlmOztBQUNBLFdBQUssSUFBSWxFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwQixNQUFNLENBQUNDLFdBQVAsQ0FBbUJnRCxTQUFuQixDQUE2QndCLE1BQWpELEVBQXlEckQsQ0FBQyxFQUExRCxFQUE4RDtBQUM1RCxZQUFNc0MsTUFBTSxHQUFHMUQsTUFBTSxDQUFDQyxXQUFQLENBQW1CMEQsT0FBbkIsQ0FBMkIzRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJnRCxTQUFuQixDQUE2QjdCLENBQTdCLENBQTNCLENBQWYsQ0FENEQsQ0FHNUQ7O0FBQ0FzQyxjQUFNLENBQUNyQyxPQUFQLEdBQWlCa0UseURBQUssQ0FBQzdCLE1BQU0sQ0FBQ3JDLE9BQVIsRUFBaUIsQ0FBQ3JCLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBcEIsR0FBOEIsQ0FBL0MsRUFBa0RWLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsQ0FBL0UsQ0FBdEI7QUFDQWdELGNBQU0sQ0FBQ3BDLE9BQVAsR0FBaUJpRSx5REFBSyxDQUFDN0IsTUFBTSxDQUFDcEMsT0FBUixFQUFpQixDQUFDdEIsTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFwQixHQUErQixDQUFoRCxFQUFtRFosTUFBTSxDQUFDQyxXQUFQLENBQW1CVyxRQUFuQixHQUE4QixDQUFqRixDQUF0QjtBQUVBOEMsY0FBTSxDQUFDdkMsQ0FBUCxJQUFZLENBQUN1QyxNQUFNLENBQUNyQyxPQUFQLEdBQWlCcUMsTUFBTSxDQUFDdkMsQ0FBekIsSUFBOEIsR0FBMUM7QUFDQXVDLGNBQU0sQ0FBQ3RDLENBQVAsSUFBWSxDQUFDc0MsTUFBTSxDQUFDcEMsT0FBUCxHQUFpQm9DLE1BQU0sQ0FBQ3RDLENBQXpCLElBQThCLEdBQTFDLENBUjRELENBVzVEO0FBQ0E7O0FBQ0EsYUFBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMkIsTUFBTSxDQUFDakMsTUFBUCxDQUFjZ0QsTUFBbEMsRUFBMEMxQyxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLGNBQU1NLEtBQUssR0FBR3FCLE1BQU0sQ0FBQ2pDLE1BQVAsQ0FBY00sQ0FBZCxDQUFkLENBRDZDLENBRzdDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGNBQU15RCxPQUFPLEdBQUcsQ0FBQ04sR0FBRyxHQUFHN0MsS0FBSyxDQUFDSixTQUFiLElBQTBCSSxLQUFLLENBQUNELFFBQWhDLEdBQTJDLEtBQUksQ0FBQ2dELFlBQWhFO0FBRUEvQyxlQUFLLENBQUNsQixDQUFOLEdBQVVrQixLQUFLLENBQUNPLE1BQU4sR0FBZSxDQUFDUCxLQUFLLENBQUNTLEtBQU4sR0FBY1QsS0FBSyxDQUFDTyxNQUFyQixJQUErQjZDLDZEQUFTLENBQUNELE9BQUQsQ0FBakU7QUFDQW5ELGVBQUssQ0FBQ2pCLENBQU4sR0FBVWlCLEtBQUssQ0FBQ1EsTUFBTixHQUFlLENBQUNSLEtBQUssQ0FBQ1UsS0FBTixHQUFjVixLQUFLLENBQUNRLE1BQXJCLElBQStCNEMsNkRBQVMsQ0FBQ0QsT0FBRCxDQUFqRTs7QUFFQSxjQUFJQSxPQUFPLElBQUksQ0FBZixFQUFrQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQUluRCxLQUFLLENBQUNxRCxXQUFWLEVBQXVCO0FBQ3JCckQsbUJBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsbUJBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNqQixDQUFyQjtBQUNBaUIsbUJBQUssQ0FBQ1MsS0FBTixHQUFjVCxLQUFLLENBQUNLLFVBQXBCO0FBQ0FMLG1CQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDTSxVQUFwQjtBQUNBTixtQkFBSyxDQUFDcUQsV0FBTixHQUFvQixLQUFwQjtBQUNBckQsbUJBQUssQ0FBQ0osU0FBTixHQUFrQkMsMERBQU0sRUFBeEI7QUFDRCxhQVBELE1BT087QUFDTEcsbUJBQUssQ0FBQ08sTUFBTixHQUFlUCxLQUFLLENBQUNsQixDQUFyQjtBQUNBa0IsbUJBQUssQ0FBQ1EsTUFBTixHQUFlUixLQUFLLENBQUNqQixDQUFyQjtBQUNBaUIsbUJBQUssQ0FBQ1MsS0FBTixHQUFjVCxLQUFLLENBQUNHLFVBQXBCO0FBQ0FILG1CQUFLLENBQUNVLEtBQU4sR0FBY1YsS0FBSyxDQUFDSSxVQUFwQjtBQUNBSixtQkFBSyxDQUFDcUQsV0FBTixHQUFvQixJQUFwQjtBQUNBckQsbUJBQUssQ0FBQ0osU0FBTixHQUFrQkMsMERBQU0sRUFBeEI7QUFDRDtBQUNGLFdBOUI0QyxDQWdDN0M7OztBQUNBRyxlQUFLLENBQUNsQixDQUFOLElBQVd1QyxNQUFNLENBQUN2QyxDQUFsQjtBQUNBa0IsZUFBSyxDQUFDakIsQ0FBTixJQUFXc0MsTUFBTSxDQUFDdEMsQ0FBbEIsQ0FsQzZDLENBb0M3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNEOztBQUVEc0MsY0FBTSxDQUFDdEQsRUFBUCxDQUFVdUYsWUFBVixDQUF1QixHQUF2QixFQUE0QixLQUFJLENBQUNDLFFBQUwsQ0FBY2xDLE1BQU0sQ0FBQ2pDLE1BQXJCLENBQTVCO0FBQ0Q7QUFDRixLQS9Rb0I7O0FBQ25CLFNBQUtvRSxPQUFMLEdBQWV6QyxPQUFPLENBQUNoRCxFQUF2QjtBQUNBLFNBQUswRixHQUFMLEdBQVcxQyxPQUFPLENBQUMwQyxHQUFuQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIzQyxPQUFPLENBQUMyQyxTQUF6QjtBQUNBLFNBQUtyQixJQUFMLEdBQVl0QixPQUFPLENBQUNzQixJQUFwQjtBQUNBLFNBQUtzQixRQUFMLEdBQWdCNUMsT0FBTyxDQUFDNEMsUUFBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCN0MsT0FBTyxDQUFDNkMsUUFBeEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCOUMsT0FBTyxDQUFDOEMsU0FBekI7QUFDQSxTQUFLNUYsS0FBTCxHQUFhOEMsT0FBTyxDQUFDOUMsS0FBckI7QUFDQSxTQUFLNkYsSUFBTCxHQUFZLEVBQVosQ0FUbUIsQ0FTSjs7QUFFZixTQUFLQyxHQUFMO0FBQ0EsU0FBS0MsR0FBTDtBQUNEOzs7OzBCQUVLO0FBQ0osV0FBS0QsR0FBTCxHQUFXO0FBQ1RFLGdCQUFRLEVBQUUsS0FBS1QsT0FBTCxDQUFhVSxhQUFiLENBQTJCLFlBQTNCLENBREQ7QUFFVEMsc0JBQWMsRUFBRSxLQUFLWCxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsbUJBQTNCLENBRlA7QUFHVEUsbUJBQVcsRUFBRSxLQUFLWixPQUFMLENBQWFVLGFBQWIsQ0FBMkIsc0JBQTNCLENBSEo7QUFJVEcsc0JBQWMsRUFBRSxLQUFLYixPQUFMLENBQWFVLGFBQWIsQ0FBMkIsMEJBQTNCO0FBSlAsT0FBWDtBQU1EOzs7MEJBRUs7QUFDSixXQUFLSSxPQUFMLEdBREksQ0FHSjs7QUFDQSxXQUFLdkIsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsV0FBS0MsZ0JBQUwsR0FBd0IsR0FBeEI7QUFDQSxXQUFLc0IsV0FBTCxHQUFtQjVHLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlMsT0FBbkIsR0FBNkIsSUFBaEQsQ0FQSSxDQVFKOztBQUNBLFdBQUttRyxRQUFMLEdBQWdCN0csTUFBTSxDQUFDQyxXQUFQLENBQW1CUyxPQUFuQixHQUE2QixJQUE3QyxDQVRJLENBV0o7O0FBQ0EsV0FBSzZELGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFLUyxZQUFMLEdBQW9CLENBQXBCLENBYkksQ0FlSjs7QUFDQSxXQUFLZCxLQUFMLEdBQWEsS0FBSzJCLE9BQUwsQ0FBYWlCLFdBQTFCO0FBQ0EsV0FBSzNDLE1BQUwsR0FBYyxLQUFLMEIsT0FBTCxDQUFha0IsWUFBM0I7QUFDQSxXQUFLaEQsVUFBTCxHQUFrQmlELGdFQUFhLENBQUMsS0FBS25CLE9BQUwsQ0FBYW9CLFVBQWQsQ0FBL0I7QUFDQSxXQUFLN0MsU0FBTCxHQUFpQjhDLCtEQUFZLENBQUMsS0FBS3JCLE9BQUwsQ0FBYW9CLFVBQWQsQ0FBN0I7O0FBRUEsVUFBSSxLQUFLYixHQUFMLENBQVNLLFdBQWIsRUFBMEI7QUFDeEIsYUFBS1UsYUFBTDtBQUNEOztBQUNELFdBQUtDLE9BQUw7QUFDQSxXQUFLQyxRQUFMLEdBekJJLENBMkJKOztBQUNBLFdBQUtDLE1BQUwsQ0FBWSxJQUFaO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLElBQWY7QUFFQXZILFlBQU0sQ0FBQ0MsV0FBUCxDQUFtQnVILFlBQW5CLENBQWdDLFFBQWhDLEVBQTBDLE9BQTFDO0FBQ0F4SCxZQUFNLENBQUNDLFdBQVAsQ0FBbUJ3SCxVQUFuQixDQUE4QixLQUFLdEIsSUFBbkM7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsR0FBTCxDQUFTSyxXQUFULENBQXFCcEcsRUFBckIsR0FBMEJxSCw4Q0FBTSxFQUFoQztBQUNBLFdBQUt0QixHQUFMLENBQVNNLGNBQVQsQ0FBd0JmLFlBQXhCLENBQXFDLFdBQXJDLGlCQUEwRCxLQUFLUyxHQUFMLENBQVNLLFdBQVQsQ0FBcUJwRyxFQUEvRTtBQUNEOzs7OEJBRVM7QUFDUixXQUFLc0gsZUFBTCxHQUF1QixFQUF2QjtBQUNBLFVBQUl4RyxDQUFKO0FBQ0EsVUFBSUMsQ0FBSjs7QUFFQSxXQUFLLElBQUlXLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2tFLFFBQXpCLEVBQW1DbEUsQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q1osU0FBQyxHQUFHWSxDQUFDLEdBQUcsR0FBUixDQURzQyxDQUMxQjs7QUFDWixhQUFLLElBQUk2RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUsxQixTQUF6QixFQUFvQzBCLENBQUMsRUFBckMsRUFBeUM7QUFDdkN4RyxXQUFDLEdBQUd3RyxDQUFDLEdBQUcsR0FBUixDQUR1QyxDQUMzQjs7QUFDWixjQUFNQyxHQUFHLEdBQUc7QUFBRTFHLGFBQUMsRUFBREEsQ0FBRjtBQUFLQyxhQUFDLEVBQURBO0FBQUwsV0FBWjtBQUNBLGVBQUt1RyxlQUFMLENBQXFCM0UsSUFBckIsQ0FBMEI2RSxHQUExQjtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVO0FBQ1QsV0FBS3JELEtBQUwsR0FBYSxFQUFiOztBQUVBLFdBQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2lFLFFBQXpCLEVBQW1DakUsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QztBQUNBLFlBQU0rRixFQUFFLEdBQUdDLDZEQUFTLENBQUMsQ0FBRCxFQUFJLEtBQUtKLGVBQUwsQ0FBcUJsRCxNQUFyQixHQUE4QixDQUFsQyxDQUFwQjtBQUNBLFlBQU10RCxDQUFDLEdBQUcsS0FBS3dHLGVBQUwsQ0FBcUJHLEVBQXJCLEVBQXlCM0csQ0FBekIsR0FBNkIsS0FBSzhFLFFBQTVDO0FBQ0EsWUFBTTdFLENBQUMsR0FBRyxLQUFLdUcsZUFBTCxDQUFxQkcsRUFBckIsRUFBeUIxRyxDQUF6QixHQUE2QixLQUFLOEUsU0FBNUM7QUFDQSxhQUFLeUIsZUFBTCxDQUFxQkssTUFBckIsQ0FBNEJGLEVBQTVCLEVBQWdDLENBQWhDLEVBTHNDLENBT3RDO0FBQ0E7O0FBQ0EsWUFBTUcsUUFBUSxHQUFHMUUsUUFBUSxDQUFDMkUsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsT0FBdkQsQ0FBakI7QUFDQUQsZ0JBQVEsQ0FBQ0UsY0FBVCxDQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QyxLQUFLdEIsUUFBN0M7QUFDQW9CLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsT0FBOUIsRUFBdUMsS0FBS3RCLFFBQTVDO0FBQ0FvQixnQkFBUSxDQUFDRSxjQUFULENBQXdCLDhCQUF4QixFQUF3RCxNQUF4RCxFQUFnRSxLQUFLekQsSUFBckU7QUFDQXVELGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsWUFBc0NoSCxDQUFDLEdBQUcsR0FBMUM7QUFDQThHLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsWUFBc0MvRyxDQUFDLEdBQUcsR0FBMUM7QUFDQTZHLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsV0FBOUIsdUJBQXlELEtBQUt0QixRQUFMLEdBQWdCLENBQXpFLGVBQStFLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBL0Y7QUFDQW9CLGdCQUFRLENBQUNFLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIscUJBQTlCLEVBQXFELGdCQUFyRDtBQUVBLGFBQUsvQixHQUFMLENBQVNNLGNBQVQsQ0FBd0IwQixXQUF4QixDQUFvQ0gsUUFBcEMsRUFsQnNDLENBb0J0Qzs7QUFDQSxZQUFJSSxHQUFHLFNBQVA7O0FBQ0EsWUFBSW5GLHdEQUFKLEVBQVc7QUFDVG1GLGFBQUcsR0FBRzlFLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTjtBQUNBRCxhQUFHLENBQUNFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixPQUFsQjtBQUNBSCxhQUFHLENBQUN4RCxLQUFKLENBQVU0RCxJQUFWLGFBQW9CdEgsQ0FBQyxHQUFHLEdBQXhCO0FBQ0FrSCxhQUFHLENBQUN4RCxLQUFKLENBQVU2RCxHQUFWLGFBQW1CdEgsQ0FBQyxHQUFHLEdBQXZCO0FBQ0EsZUFBS3lFLE9BQUwsQ0FBYXVDLFdBQWIsQ0FBeUJDLEdBQXpCO0FBQ0Q7O0FBRUQsWUFBTVIsR0FBRyxHQUFHO0FBQ1Z6SCxZQUFFLEVBQUU2SCxRQURNO0FBRVZsRCxpQkFBTyxFQUFFc0QsR0FGQztBQUdWbEgsV0FBQyxFQUFEQSxDQUhVO0FBSVZDLFdBQUMsRUFBREEsQ0FKVSxDQU1aOztBQU5ZLFNBQVo7QUFPQSxhQUFLb0QsS0FBTCxDQUFXeEIsSUFBWCxDQUFnQjZFLEdBQWhCO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1I7QUFDQSxXQUFLekIsR0FBTCxDQUFTRSxRQUFULENBQWtCWCxZQUFsQixDQUErQixTQUEvQixnQkFBaUQzRixNQUFNLENBQUNDLFdBQVAsQ0FBbUJTLE9BQXBFLGNBQStFVixNQUFNLENBQUNDLFdBQVAsQ0FBbUJXLFFBQWxHLEdBRlEsQ0FHUjs7QUFDQSxXQUFLd0YsR0FBTCxDQUFTSSxjQUFULENBQXdCMkIsY0FBeEIsQ0FBdUMsOEJBQXZDLEVBQXVFLE1BQXZFLEVBQStFLEtBQUtyQyxHQUFwRjtBQUNBLFdBQUtNLEdBQUwsQ0FBU0ksY0FBVCxDQUF3QjJCLGNBQXhCLENBQXVDLElBQXZDLEVBQTZDLHFCQUE3QyxFQUFvRSxnQkFBcEUsRUFMUSxDQU1SOztBQUNBLFdBQUt0QyxPQUFMLENBQWFoQixLQUFiLENBQW1COEQsZUFBbkIsaUJBQTRDLEtBQUs1QyxTQUFqRDtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7Ozs7MkJBRU82QyxNLEVBQVE7QUFDYixVQUFNQyxFQUFFLEdBQUdELE1BQU0sR0FBRyxrQkFBSCxHQUF3QixxQkFBekM7QUFDQSxVQUFJMUYsd0RBQUosRUFBV2xELE1BQU0sQ0FBQzZJLEVBQUQsQ0FBTixDQUFXLFdBQVgsRUFBd0IsS0FBS0MsZUFBN0IsRUFBOEMsS0FBOUM7QUFDWDlJLFlBQU0sQ0FBQzZJLEVBQUQsQ0FBTixDQUFXLE9BQVgsRUFBb0IsS0FBS0UsV0FBekIsRUFBc0MsS0FBdEM7QUFDRDs7OzhCQUVTSCxNLEVBQVE7QUFDaEIsVUFBTUMsRUFBRSxHQUFHRCxNQUFNLEdBQUcsa0JBQUgsR0FBd0IscUJBQXpDO0FBQ0E1SSxZQUFNLENBQUM2SSxFQUFELENBQU4sQ0FBVyxLQUFYLEVBQWtCLEtBQUtHLFNBQXZCLEVBQWtDLEtBQWxDO0FBQ0Q7OztBQStIRDtBQUNBOzZCQUNTdkgsTSxFQUF1QjtBQUFBLFVBQWZ3SCxPQUFlLHVFQUFMLEdBQUs7QUFDOUI7QUFDQSxVQUFNQyxRQUFRLEdBQUd6SCxNQUFNLENBQUNnRCxNQUF4QjtBQUNBLFVBQUl5RSxRQUFRLEdBQUcsQ0FBZixFQUFrQixPQUFPLE1BQVA7QUFFbEIsVUFBSUMsSUFBSSxlQUFRMUgsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTixDQUFsQixjQUF1Qk0sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTCxDQUFqQyxPQUFSLENBTDhCLENBTTlCO0FBQ0E7O0FBRUEsV0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbUgsUUFBcEIsRUFBOEJuSCxDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDLFlBQU1xSCxFQUFFLEdBQUczSCxNQUFNLENBQUMsQ0FBQ00sQ0FBQyxHQUFHLENBQUosR0FBUW1ILFFBQVQsSUFBcUJBLFFBQXRCLENBQWpCO0FBQ0EsWUFBTUcsRUFBRSxHQUFHNUgsTUFBTSxDQUFDTSxDQUFELENBQWpCO0FBQ0EsWUFBTXVILEVBQUUsR0FBRzdILE1BQU0sQ0FBQyxDQUFDTSxDQUFDLEdBQUcsQ0FBTCxJQUFVbUgsUUFBWCxDQUFqQjtBQUNBLFlBQU1LLEVBQUUsR0FBRzlILE1BQU0sQ0FBQyxDQUFDTSxDQUFDLEdBQUcsQ0FBTCxJQUFVbUgsUUFBWCxDQUFqQjtBQUVBLFlBQU1NLEVBQUUsR0FBR0gsRUFBRSxDQUFDbEksQ0FBSCxHQUFPLENBQUNtSSxFQUFFLENBQUNuSSxDQUFILEdBQU9pSSxFQUFFLENBQUNqSSxDQUFYLElBQWdCLENBQWhCLEdBQW9COEgsT0FBdEM7QUFDQSxZQUFNUSxFQUFFLEdBQUdKLEVBQUUsQ0FBQ2pJLENBQUgsR0FBTyxDQUFDa0ksRUFBRSxDQUFDbEksQ0FBSCxHQUFPZ0ksRUFBRSxDQUFDaEksQ0FBWCxJQUFnQixDQUFoQixHQUFvQjZILE9BQXRDO0FBRUEsWUFBTVMsRUFBRSxHQUFHSixFQUFFLENBQUNuSSxDQUFILEdBQU8sQ0FBQ29JLEVBQUUsQ0FBQ3BJLENBQUgsR0FBT2tJLEVBQUUsQ0FBQ2xJLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0I4SCxPQUF0QztBQUNBLFlBQU1VLEVBQUUsR0FBR0wsRUFBRSxDQUFDbEksQ0FBSCxHQUFPLENBQUNtSSxFQUFFLENBQUNuSSxDQUFILEdBQU9pSSxFQUFFLENBQUNqSSxDQUFYLElBQWdCLENBQWhCLEdBQW9CNkgsT0FBdEMsQ0FWaUMsQ0FZakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FFLFlBQUksZUFBUUssRUFBUixjQUFjQyxFQUFkLGNBQW9CQyxFQUFwQixjQUEwQkMsRUFBMUIsY0FBZ0NMLEVBQUUsQ0FBQ25JLENBQW5DLGNBQXdDbUksRUFBRSxDQUFDbEksQ0FBM0MsQ0FBSjtBQUNEOztBQUVELHVCQUFVK0gsSUFBVixPQS9COEIsQ0ErQlo7QUFDbkI7Ozs4QkFFUztBQUNSLFdBQUs3QixNQUFMLENBQVksS0FBWjtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxLQUFmO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25VSDtBQUFBLElBQU1yRSxLQUFLLEdBQUcsSUFBZDtBQUVlQSxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBLElBQU0wRyxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFN0osTUFBTSxDQUFDOEosUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLE9BQXZCLENBQStCLE9BQS9CLEVBQXdDLElBQXhDLENBRE87QUFFYkMsV0FBUyxFQUFFLElBQUlDLFNBQUosV0FBaUJsSyxNQUFNLENBQUM4SixRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsT0FBL0IsRUFBd0MsSUFBeEMsQ0FBakI7QUFGRSxDQUFmO0FBS2VKLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTTNHLFNBQVMsR0FBR0Msd0RBQUssR0FBRyxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQUgsR0FBa0MsRUFBekQ7QUFDQSxJQUFNaUgsTUFBTSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBZixDLENBR0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCbEssVzs7O0FBQ25CLHlCQUFjO0FBQUE7O0FBQUE7O0FBQUEsc0NBVUgsWUFBTTtBQUNmLFdBQUksQ0FBQ21LLElBQUwsQ0FBVUMsU0FBVixHQUFzQkMsc0VBQXRCO0FBQ0EsV0FBSSxDQUFDQyxZQUFMLEdBQW9CLEtBQUksQ0FBQ0gsSUFBTCxDQUFVN0QsYUFBVixDQUF3QixpQkFBeEIsQ0FBcEI7QUFDQXFELCtEQUFNLENBQUNLLFNBQVAsQ0FBaUJPLFNBQWpCLEdBQTZCLEtBQUksQ0FBQ0MsWUFBbEM7QUFDRCxLQWRhOztBQUFBLDBDQWdCQyxVQUFBQyxLQUFLLEVBQUk7QUFDdEIsVUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUFiOztBQUVBLFVBQUlELElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxjQUFoQixFQUFnQztBQUM5QjtBQUNBLFlBQUlFLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxhQUFLLElBQUk5SSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0ksTUFBTSxDQUFDMUYsTUFBM0IsRUFBbUMxQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDLGNBQUlvSSxNQUFNLENBQUNwSSxDQUFELENBQU4sS0FBYzRJLElBQUksQ0FBQyxDQUFELENBQWxCLElBQXlCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksS0FBSSxDQUFDRyxhQUE5QyxFQUE2RDtBQUMzRDtBQUNBN0gscUJBQVMsQ0FBQ0QsSUFBVixDQUFlMkgsSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFDQWYscUVBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsdUJBQXFDSixJQUFJLENBQUMsQ0FBRCxDQUF6QztBQUNBRSxzQkFBVSxHQUFHLElBQWI7QUFDQSxpQkFBSSxDQUFDQyxhQUFMLEdBQXFCSCxJQUFJLENBQUMsQ0FBRCxDQUF6QjtBQUNBLGlCQUFJLENBQUNKLFlBQUwsQ0FBa0JGLFNBQWxCLG9CQUF3Q3BILFNBQVMsQ0FBQ3dCLE1BQWxEO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJb0csVUFBVSxLQUFLLEtBQW5CLEVBQTBCO0FBQ3hCakIsbUVBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsdUJBQXFDSixJQUFJLENBQUMsQ0FBRCxDQUF6QztBQUNEOztBQUVELFlBQUkxSCxTQUFTLENBQUN3QixNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCO0FBQ0F1RyxvQkFBVSxDQUFDLFlBQU07QUFDZixpQkFBSSxDQUFDQyxJQUFMO0FBQ0QsV0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0YsT0F4QkQsTUF3Qk8sSUFBSU4sSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZLGFBQWhCLEVBQStCO0FBQ3BDLFlBQU14SixDQUFDLEdBQUcrSixVQUFVLENBQUNQLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVSxFQUFWLENBQVYsR0FBMEIsS0FBSSxDQUFDakssT0FBekM7O0FBQ0EsWUFBTVUsQ0FBQyxHQUFHOEosVUFBVSxDQUFDUCxJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVUsRUFBVixDQUFWLEdBQTBCLEtBQUksQ0FBQ2pLLE9BQXpDLENBRm9DLENBR3BDOzs7QUFDQSxhQUFJLENBQUNpRCxPQUFMLENBQWFnSCxJQUFJLENBQUMsQ0FBRCxDQUFqQixFQUFzQnRKLE9BQXRCLEdBQWdDRixDQUFDLEdBQUcsS0FBSSxDQUFDd0MsT0FBTCxDQUFhZ0gsSUFBSSxDQUFDLENBQUQsQ0FBakIsRUFBc0J0SixPQUExRDtBQUNBLGFBQUksQ0FBQ3NDLE9BQUwsQ0FBYWdILElBQUksQ0FBQyxDQUFELENBQWpCLEVBQXNCckosT0FBdEIsR0FBZ0NGLENBQUMsR0FBRyxLQUFJLENBQUN1QyxPQUFMLENBQWFnSCxJQUFJLENBQUMsQ0FBRCxDQUFqQixFQUFzQnJKLE9BQTFELENBTG9DLENBT3BDO0FBQ0QsT0FSTSxNQVFBLElBQUlxSixJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksT0FBaEIsRUFBeUI7QUFDOUI7QUFDQSxhQUFJLENBQUNRLFlBQUwsQ0FBa0JwQyxXQUFsQixDQUE4QjRCLElBQUksQ0FBQyxDQUFELENBQWxDO0FBQ0Q7QUFDRixLQXZEYTs7QUFDWixTQUFLUCxJQUFMLEdBQVk3RyxRQUFRLENBQUNnRCxhQUFULENBQXVCLE9BQXZCLENBQVo7O0FBRUEsUUFBSSxDQUFDckQsd0RBQUwsRUFBWTtBQUNWMEcsK0RBQU0sQ0FBQ0ssU0FBUCxDQUFpQm1CLE1BQWpCLEdBQTBCLEtBQUtDLFFBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0osSUFBTDtBQUNEO0FBQ0Y7Ozs7MkJBaURNO0FBQ0wsVUFBSSxDQUFDL0gsd0RBQUwsRUFBWTBHLHlEQUFNLENBQUNLLFNBQVAsQ0FBaUJjLElBQWpCLGlCQUErQjlILFNBQVMsQ0FBQyxDQUFELENBQXhDO0FBQ1osV0FBS21ILElBQUwsQ0FBVUMsU0FBVixHQUFzQmlCLHFFQUF0QjtBQUVBLFdBQUt6RixPQUFMLEdBQWV0QyxRQUFRLENBQUNnRCxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FKSyxDQU1MOztBQUNBLFdBQUtnRixNQUFMLEdBQWMsQ0FDWjtBQUNFekYsV0FBRyxFQUFFMEYsd0VBRFA7QUFFRXpGLGlCQUFTLEVBQUV5Rix3RUFGYjtBQUdFOUcsWUFBSSxFQUFFK0csMkVBSFI7QUFJRXpGLGdCQUFRLEVBQUUsQ0FKWjtBQUtFQyxnQkFBUSxFQUFFLENBTFo7QUFNRUMsaUJBQVMsRUFBRSxDQU5iO0FBT0V3RixjQUFNLEVBQUU7QUFQVixPQURZLEVBU1Q7QUFDRDVGLFdBQUcsRUFBRTZGLDRFQURKO0FBRUQ1RixpQkFBUyxFQUFFNEYsNEVBRlY7QUFHRGpILFlBQUksRUFBRStHLDJFQUhMO0FBSUR6RixnQkFBUSxFQUFFLENBSlQ7QUFLREMsZ0JBQVEsRUFBRSxFQUxUO0FBTURDLGlCQUFTLEVBQUUsRUFOVjtBQU9Ed0YsY0FBTSxFQUFFO0FBUFAsT0FUUyxFQWlCVDtBQUNENUYsV0FBRyxFQUFFMEYsd0VBREo7QUFFRHpGLGlCQUFTLEVBQUV5Rix3RUFGVjtBQUdEOUcsWUFBSSxFQUFFK0csMkVBSEw7QUFJRHpGLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxnQkFBUSxFQUFFLENBTFQ7QUFNREMsaUJBQVMsRUFBRSxDQU5WO0FBT0R3RixjQUFNLEVBQUU7QUFQUCxPQWpCUyxFQXlCVDtBQUNENUYsV0FBRyxFQUFFMEYsd0VBREo7QUFFRHpGLGlCQUFTLEVBQUV5Rix3RUFGVjtBQUdEOUcsWUFBSSxFQUFFK0csMkVBSEw7QUFJRHpGLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxnQkFBUSxFQUFFLENBTFQ7QUFNREMsaUJBQVMsRUFBRSxDQU5WO0FBT0R3RixjQUFNLEVBQUU7QUFQUCxPQXpCUyxDQUFkO0FBbUNBLFdBQUsvSCxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtpSSxNQUFMLEdBQWMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFkO0FBQ0EsV0FBS0MsaUJBQUwsR0FBeUIsQ0FBekI7QUFFQSxXQUFLQyxPQUFMO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxTQUFHLENBQUNFLEdBQUosR0FBVSxLQUFLVixNQUFMLENBQVksS0FBS00saUJBQWpCLEVBQW9DL0YsR0FBOUM7O0FBQ0FpRyxTQUFHLENBQUNHLE1BQUosR0FBYSxZQUFNO0FBQ2pCO0FBQ0EsY0FBSSxDQUFDOUYsR0FBTDs7QUFDQSxjQUFJLENBQUMrRixVQUFMOztBQUVBLFlBQU1DLEtBQUssR0FBRyxNQUFJLENBQUNiLE1BQUwsQ0FBWSxNQUFJLENBQUNNLGlCQUFqQixDQUFkLENBTGlCLENBT2pCOztBQUNBLGNBQUksQ0FBQ3pGLEdBQUwsQ0FBU2lHLGdCQUFULENBQTBCSixHQUExQixHQUFnQ0csS0FBSyxDQUFDdEcsR0FBdEM7QUFFQSxjQUFJLENBQUNxRixZQUFMLEdBQW9CLElBQUloSSx5REFBSjtBQUNsQi9DLFlBQUUsRUFBRSxNQUFJLENBQUNnRyxHQUFMLENBQVNnRyxLQURLO0FBRWxCOUwsZUFBSyxFQUFFLE1BQUksQ0FBQ3VMO0FBRk0sV0FHZk8sS0FIZSxFQUFwQjtBQUtELE9BZkQ7QUFnQkQ7OzswQkFFSztBQUNKLFdBQUtoRyxHQUFMLEdBQVc7QUFDVGdHLGFBQUssRUFBRSxLQUFLdkcsT0FBTCxDQUFhVSxhQUFiLENBQTJCLFFBQTNCLENBREU7QUFFVDhGLHdCQUFnQixFQUFFLEtBQUt4RyxPQUFMLENBQWFVLGFBQWIsQ0FBMkIscUJBQTNCLENBRlQ7QUFHVCtGLGVBQU8sRUFBRSxLQUFLekcsT0FBTCxDQUFhMEcsZ0JBQWIsQ0FBOEIsU0FBOUIsQ0FIQTtBQUlUQyxlQUFPLEVBQUUsS0FBSzNHLE9BQUwsQ0FBYVUsYUFBYixDQUEyQixpQkFBM0IsQ0FKQTtBQUtUa0csd0JBQWdCLEVBQUUsS0FBSzVHLE9BQUwsQ0FBYTBHLGdCQUFiLENBQThCLHVCQUE5QixDQUxUO0FBTVRHLGtCQUFVLEVBQUUsS0FBSzdHLE9BQUwsQ0FBYTBHLGdCQUFiLENBQThCLGVBQTlCLENBTkg7QUFPVEksYUFBSyxFQUFFLEtBQUs5RyxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsUUFBM0I7QUFQRSxPQUFYO0FBU0Q7OztpQ0FFWTtBQUNYLFdBQUt0RCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUt2QyxPQUFMLEdBQWUsS0FBSzBGLEdBQUwsQ0FBU2lHLGdCQUFULENBQTBCdkYsV0FBekM7QUFDQSxXQUFLbEcsUUFBTCxHQUFnQixLQUFLd0YsR0FBTCxDQUFTaUcsZ0JBQVQsQ0FBMEJ0RixZQUExQyxDQUhXLENBSVg7O0FBRUEsVUFBTTZGLE1BQU0sR0FBRyxDQUNiLEtBRGEsRUFFYixNQUZhLENBQWYsQ0FOVyxDQVdYOztBQUNBLFdBQUtqSixPQUFMLEdBQWUsRUFBZjs7QUFDQSxVQUFJVixTQUFTLENBQUN3QixNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGFBQUtkLE9BQUwsQ0FBYVYsU0FBUyxDQUFDLENBQUQsQ0FBdEIsSUFBNkIsSUFBSS9DLDBEQUFKLENBQVc7QUFDdENFLFlBQUUsRUFBRSxLQUFLZ0csR0FBTCxDQUFTa0csT0FBVCxDQUFpQixDQUFqQixDQURrQztBQUV0Q2hNLGVBQUssRUFBRSxDQUYrQjtBQUd0Q0MsZUFBSyxFQUFFcU0sTUFBTSxDQUFDLENBQUQsQ0FIeUI7QUFJdEN2TSxZQUFFLEVBQUU0QyxTQUFTLENBQUMsQ0FBRDtBQUp5QixTQUFYLENBQTdCO0FBTUEsYUFBS1UsT0FBTCxDQUFhVixTQUFTLENBQUMsQ0FBRCxDQUF0QixJQUE2QixJQUFJL0MsMERBQUosQ0FBVztBQUN0Q0UsWUFBRSxFQUFFLEtBQUtnRyxHQUFMLENBQVNrRyxPQUFULENBQWlCLENBQWpCLENBRGtDO0FBRXRDaE0sZUFBSyxFQUFFLENBRitCO0FBR3RDQyxlQUFLLEVBQUVxTSxNQUFNLENBQUMsQ0FBRCxDQUh5QjtBQUl0Q3ZNLFlBQUUsRUFBRTRDLFNBQVMsQ0FBQyxDQUFEO0FBSnlCLFNBQVgsQ0FBN0I7QUFNRDtBQUNGOzs7K0JBRVViLFEsRUFBVTtBQUFBOztBQUNuQixVQUFJdUssS0FBSyxHQUFHdkssUUFBWjtBQUNBLFVBQUl5SyxPQUFKO0FBRUEsV0FBS3pHLEdBQUwsQ0FBU3VHLEtBQVQsQ0FBZXRDLFNBQWYsR0FBMkJqSSxRQUEzQjtBQUVBLFdBQUswSyxhQUFMLEdBQXFCQyxXQUFXLENBQUMsWUFBTTtBQUNyQ0YsZUFBTyxHQUFHRyxRQUFRLENBQUNMLEtBQUQsRUFBUSxFQUFSLENBQWxCO0FBQ0FFLGVBQU8sR0FBR0EsT0FBTyxHQUFHLEVBQVYsY0FBbUJBLE9BQW5CLElBQStCQSxPQUF6QztBQUVBLGNBQUksQ0FBQ3pHLEdBQUwsQ0FBU3VHLEtBQVQsQ0FBZXRDLFNBQWYsR0FBMkJ3QyxPQUEzQjs7QUFFQSxZQUFJRixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGdCQUFJLENBQUMxSCxRQUFMLENBQWMsV0FBZDtBQUNEOztBQUVEMEgsYUFBSyxJQUFJLENBQVQ7QUFDRCxPQVgrQixFQVc3QixJQVg2QixDQUFoQztBQVlEOzs7MEJBRUtqSixNLEVBQVFnQixJLEVBQU07QUFDbEIsV0FBSzhDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0I5RCxNQUFNLENBQUNuRCxLQUEvQixFQURrQixDQUNvQjs7QUFFdEMsV0FBS3FMLE1BQUwsQ0FBWWxJLE1BQU0sQ0FBQ3BELEtBQW5CLEtBQTZCLENBQTdCO0FBQ0EsV0FBS3VGLE9BQUwsQ0FBYTBDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFlBQTNCOztBQUVBLFdBQUssSUFBSXpHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3FFLEdBQUwsQ0FBU3FHLGdCQUFULENBQTBCaEksTUFBOUMsRUFBc0QxQyxDQUFDLEVBQXZELEVBQTJEO0FBQ3pELFlBQUlBLENBQUMsS0FBSzJCLE1BQU0sQ0FBQ3BELEtBQWpCLEVBQXdCO0FBQ3RCLGVBQUs4RixHQUFMLENBQVNxRyxnQkFBVCxDQUEwQjFLLENBQTFCLEVBQTZCc0ksU0FBN0IsZUFBOEMzRyxNQUFNLENBQUNwRCxLQUFQLEdBQWUsQ0FBN0QsZ0JBQW9FLEtBQUtzTCxNQUFMLENBQVlsSSxNQUFNLENBQUNwRCxLQUFuQixDQUFwRTtBQUNEO0FBQ0Y7O0FBRUQsVUFBTXlMLEdBQUcsR0FBR3hJLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBeUQsU0FBRyxDQUFDRSxHQUFKLEdBQVV2SCxJQUFWO0FBQ0FxSCxTQUFHLENBQUN4RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsYUFBbEI7QUFDQSxXQUFLcEMsR0FBTCxDQUFTc0csVUFBVCxDQUFvQmhKLE1BQU0sQ0FBQ3BELEtBQTNCLEVBQWtDOEgsV0FBbEMsQ0FBOEMyRCxHQUE5QztBQUVBbkMsK0RBQU0sQ0FBQ0ssU0FBUCxDQUFpQmMsSUFBakIsaUJBQStCckgsTUFBTSxDQUFDckQsRUFBdEMsY0FBNEMsS0FBS3VMLE1BQUwsQ0FBWWxJLE1BQU0sQ0FBQ3BELEtBQW5CLENBQTVDO0FBQ0Q7OztpQ0FFWWtNLE8sRUFBc0M7QUFBQSxVQUE3QmpNLEtBQTZCLHVFQUFyQixNQUFxQjtBQUFBLFVBQWIwTSxHQUFhLHVFQUFQLEtBQU87QUFDakQsVUFBTTVFLEdBQUcsR0FBRzlFLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxTQUFHLENBQUNFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQixFQUE2QixhQUE3QixtQkFBc0RqSSxLQUF0RDs7QUFDQSxVQUFJME0sR0FBSixFQUFTO0FBQ1A1RSxXQUFHLENBQUNFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixhQUFsQjtBQUNEOztBQUNESCxTQUFHLENBQUNnQyxTQUFKLEdBQWdCbUMsT0FBaEI7QUFDQSxXQUFLcEcsR0FBTCxDQUFTZ0csS0FBVCxDQUFlaEUsV0FBZixDQUEyQkMsR0FBM0I7QUFFQTJDLGdCQUFVLENBQUMsWUFBTTtBQUNmM0MsV0FBRyxDQUFDNkUsTUFBSjtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRDs7OytCQUVvQztBQUFBOztBQUFBLFVBQTVCVixPQUE0Qix1RUFBbEIsZ0JBQWtCO0FBQ25DVyxtQkFBYSxDQUFDLEtBQUtMLGFBQU4sQ0FBYjtBQUNBLFdBQUt0RixZQUFMLENBQWtCZ0YsT0FBbEIsRUFBMkIsT0FBM0IsRUFBb0MsSUFBcEM7QUFDQXhCLGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQ29DLFdBQUwsQ0FBaUIsTUFBSSxDQUFDdkIsaUJBQUwsR0FBeUIsQ0FBMUM7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7OztnQ0FFV3ZMLEssRUFBTztBQUNqQixXQUFLK00sWUFBTCxDQUFrQixLQUFLbEMsWUFBdkI7O0FBRUEsVUFBSTdLLEtBQUssS0FBSyxLQUFLaUwsTUFBTCxDQUFZOUcsTUFBMUIsRUFBa0M7QUFDaEM2SSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EzRCxpRUFBTSxDQUFDSyxTQUFQLENBQWlCYyxJQUFqQixDQUFzQixzQkFBdEI7QUFDQTtBQUNEOztBQUVELFdBQUtjLGlCQUFMLEdBQXlCdkwsS0FBekI7QUFDQSxVQUFNOEwsS0FBSyxHQUFHLEtBQUtiLE1BQUwsQ0FBWSxLQUFLTSxpQkFBakIsQ0FBZDtBQUVBLFdBQUtWLFlBQUwsR0FBb0IsSUFBSWhJLHlEQUFKO0FBQ2xCL0MsVUFBRSxFQUFFLEtBQUtnRyxHQUFMLENBQVNnRyxLQURLO0FBRWxCOUwsYUFBSyxFQUFFLEtBQUt1TDtBQUZNLFNBR2ZPLEtBSGUsRUFBcEI7QUFLRDs7O2lDQUVZQSxLLEVBQU87QUFDbEI7QUFDQSxVQUFJQSxLQUFLLENBQUNvQixPQUFOLFlBQXlCQyxRQUE3QixFQUF1QztBQUNyQ3JCLGFBQUssQ0FBQ29CLE9BQU47QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUkg7O0lBRU1FLFUsR0FDSixzQkFBYztBQUFBOztBQUFBOztBQUFBLHFDQUlGLFVBQUF4SSxHQUFHLEVBQUk7QUFDakI7QUFDQSxTQUFJLENBQUN5SSxHQUFMLEdBQVdDLHFCQUFxQixDQUFDLEtBQUksQ0FBQzVFLFNBQU4sQ0FBaEM7QUFDQWhKLFVBQU0sQ0FBQzZOLGFBQVAsQ0FBcUJDLHdFQUFpQixDQUFDLEtBQUQsRUFBUTtBQUFFNUksU0FBRyxFQUFIQTtBQUFGLEtBQVIsQ0FBdEM7QUFDRCxHQVJhOztBQUFBLG1DQVVKLFlBQU07QUFDZCxTQUFJLENBQUM4RCxTQUFMLENBQWUsQ0FBZjtBQUNELEdBWmE7O0FBQUEsa0NBY0wsWUFBTTtBQUNiK0Usd0JBQW9CLENBQUMsS0FBSSxDQUFDSixHQUFOLENBQXBCO0FBQ0QsR0FoQmE7O0FBQ1osT0FBSzNFLFNBQUwsQ0FBZSxDQUFmO0FBQ0QsQzs7QUFpQlksbUVBQUkwRSxVQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUEsU0FBU0ksaUJBQVQsQ0FBMkJFLFNBQTNCLEVBQWlEO0FBQUEsTUFBWHJELElBQVcsdUVBQUosRUFBSTtBQUMvQyxNQUFNRCxLQUFLLEdBQUcsSUFBSXVELFdBQUosQ0FBZ0JELFNBQWhCLEVBQTJCO0FBQ3ZDN0ksVUFBTSxFQUFFd0Y7QUFEK0IsR0FBM0IsQ0FBZDtBQUdBLFNBQU9ELEtBQVA7QUFDRDs7QUFFY29ELGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFPLFNBQVM1RyxZQUFULENBQXNCZ0gsSUFBdEIsRUFBNEI7QUFBRTtBQUVuQyxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNULFdBQU8sQ0FBUDtBQUNEOztBQUVELE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxxQkFBTCxFQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHck8sTUFBTSxDQUFDc0QsT0FBUCxJQUFrQkMsUUFBUSxDQUFDK0ssSUFBVCxDQUFjN0ssU0FBaEQ7QUFFQSxTQUFPMEssTUFBTSxDQUFDekYsR0FBUCxHQUFhMkYsT0FBcEI7QUFDRDtBQUVNLFNBQVNySCxhQUFULENBQXVCa0gsSUFBdkIsRUFBNkI7QUFBRTtBQUVwQyxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNULFdBQU8sQ0FBUDtBQUNEOztBQUVELE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxxQkFBTCxFQUFmO0FBRUEsU0FBT0QsTUFBTSxDQUFDMUYsSUFBZDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBTyxTQUFTOEYsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDekIsTUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYLFdBQU9BLENBQVA7QUFDRDs7QUFFRCxTQUFPLGFBQUssQ0FBTCxFQUFXLENBQUMsRUFBRCxHQUFNQSxDQUFqQixDQUFQO0FBQ0Q7QUFFTSxTQUFTL0ksU0FBVCxDQUFtQitJLENBQW5CLEVBQXNCO0FBQzVCLFNBQU8sTUFBTSxJQUFJN00sSUFBSSxDQUFDVyxHQUFMLENBQVNYLElBQUksQ0FBQ0MsRUFBTCxHQUFVNE0sQ0FBbkIsQ0FBVixDQUFQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTakosS0FBVCxDQUFla0osS0FBZixFQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBRXRDLFNBQU9oTixJQUFJLENBQUMrTSxHQUFMLENBQVMvTSxJQUFJLENBQUNnTixHQUFMLENBQVNGLEtBQVQsRUFBZ0JDLEdBQWhCLENBQVQsRUFBK0JDLEdBQS9CLENBQVA7QUFDQTtBQUVNLFNBQVM3TSxNQUFULENBQWdCNE0sR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQy9CO0FBQ0EsTUFBSUQsR0FBRyxHQUFHQyxHQUFWLEVBQWU7QUFDYixRQUFNQyxHQUFHLEdBQUdGLEdBQVo7QUFDQUEsT0FBRyxHQUFHQyxHQUFOO0FBQ0FBLE9BQUcsR0FBR0MsR0FBTjtBQUNEOztBQUNELFNBQU9GLEdBQUcsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEdBQVAsSUFBYy9NLElBQUksQ0FBQ0csTUFBTCxFQUEzQjtBQUNEO0FBRU0sU0FBU2lHLFNBQVQsQ0FBbUIyRyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFFbkMsU0FBT2hOLElBQUksQ0FBQ2tOLEtBQUwsQ0FBV2xOLElBQUksQ0FBQ0csTUFBTCxNQUFpQjZNLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXJEO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBTyxTQUFTeE0sTUFBVCxHQUFrQjtBQUN2QixTQUFPLFNBQVNsQyxNQUFNLENBQUM4TyxXQUFoQixHQUE4QkEsV0FBVyxDQUFDNUosR0FBWixFQUE5QixHQUFrRCxJQUFJNkosSUFBSixHQUFXQyxPQUFYLEVBQXpEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQSxVQUFVLG1CQUFPLENBQUMseURBQVc7QUFDN0Isa0JBQWtCLG1CQUFPLENBQUMsaUVBQW1COztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGswQ0FBazBDLG1CQUFPLENBQUMsd0ZBQTJDLHliOzs7Ozs7Ozs7OztBQ0FyM0MsK0oiLCJmaWxlIjoianMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2dhbWUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzkwZDkwNWFjNGRkZTE2NzExNWNjODc0ZmJkOTgxNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2ViODBhNTI3ZGUxMGUyMjNlODJjZDQ4NTFhNDFkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzllOTM1NmMwNTAwMDM5ZWY0Zjc0NmJhODAyMmFkZS5wbmdcIjsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MnXG5cbmltcG9ydCAnLi9tYW5hZ2Vycy9SQUZNYW5hZ2VyJ1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvR2FtZU1hbmFnZXInXG5cbi8vIG5vdCB3b3JraW5nIGFueW1vcmUgZm9yIHNvbWUgcmVhc29uXG4oKCkgPT4ge1xuICAvLyBpbXBvcnQgR2FtZU1hbmFuZ2VyIHdoZW4gRE9NIGlzIHJlYWR5XG4gIHdpbmRvdy5HYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpXG59KSgpXG4iLCJpbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGlkLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gOFxuICAgIHRoaXMuY2VudGVyWCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMubWluUmFkaXVzID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1IC8vIDcwJSBvZiBmdWxsIHNpemUgLyAyIC0tPiBzaG91bGQgYmUgYmFzZWQgb24gd2lkdGggdmlld2JveFxuICAgIHRoaXMubWF4UmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLm1pblJhZGl1cyAqIDAuMlxuICAgIHRoaXMubWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjQ1XG4gICAgdGhpcy5tYXhNaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNTVcbiAgICB0aGlzLm1pbkR1cmF0aW9uID0gNzAwXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDkwMFxuICAgIC8vIGN1cnNvciBwb3NpdGlvblxuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gICAgdGhpcy50YXJnZXRYID0gMFxuICAgIHRoaXMudGFyZ2V0WSA9IDBcbiAgICB0aGlzLmlzSW5zaWRlVGltZSA9IDBcblxuICAgIHRoaXMuc2V0UG9pbnRzKClcbiAgfVxuXG4gIHNldFBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgLy8gY3JlYXRlIFwibnVtUG9pbnRzXCIgeCBwb2ludHNcbiAgICBjb25zdCBzbGljZSA9IChNYXRoLlBJICogMikgLyB0aGlzLm51bVBvaW50c1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IHJhbmRvbSgwLCBNYXRoLlBJICogMilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgbWFyZ2VBbmdsZSA9IHJhbmRvbSgwLCAwLjI4KSAvLyBpIC8gMS4yXG4gICAgICAvLyByYW5kb21pemUgdGhlIHN0YXJ0IHRpbWUgb2YgYW5pbWF0aW9uICh3ZSBkb24ndCB3YW50IHRoZSB0d2VlbiB0byBnbyBmcm9tIDAgdG8gMSwgaXQgY2FuIHN0YXJ0IGRpcmVjdGx5IGZyb20gMC42IGZvciBleGFtcGxlKVxuICAgICAgY29uc3Qgc3RhcnRBbmltID0gZ2V0Tm93KCkgKyBpICogcmFuZG9tKDAsIHRoaXMubWluRHVyYXRpb24pXG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuc3RhcnRBbmdsZSArIGkgKiBzbGljZSArIG1hcmdlQW5nbGVcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gcmFuZG9tKHRoaXMubWluRHVyYXRpb24sIHRoaXMubWF4RHVyYXRpb24pXG5cbiAgICAgIGNvbnN0IHBvaW50ID0ge1xuICAgICAgICBhbmdsZSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHN0YXJ0QW5pbSxcbiAgICAgICAgeDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5YOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgIH1cblxuICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcblxuICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGdldE9mZnNldExlZnQgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyBpbk91dFNpbmUgfSBmcm9tICcuLi91dGlscy9lYXNlJ1xuaW1wb3J0IHsgY2xhbXAsIHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmltcG9ydCBERUJVRyBmcm9tICcuLi9jb25zdGFudHMvRGVidWcnXG5cbmNvbnN0IHBsYXllcklkcyA9IERFQlVHID8gWydyZWZpZWpyZmVyJywgJ2VyZmplcmZwaWUnXSA6IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxcbiAgICB0aGlzLmJrZyA9IG9wdGlvbnMuYmtnXG4gICAgdGhpcy5tYXNrZWRCa2cgPSBvcHRpb25zLm1hc2tlZEJrZ1xuICAgIHRoaXMuaXRlbSA9IG9wdGlvbnMuaXRlbVxuICAgIHRoaXMubnVtSXRlbXMgPSBvcHRpb25zLm51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IG9wdGlvbnMuZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IG9wdGlvbnMuZ3JpZExpbmVzXG4gICAgdGhpcy5pbmRleCA9IG9wdGlvbnMuaW5kZXhcbiAgICB0aGlzLnRpbWUgPSA2MCAvLyBpbiBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbSgpXG4gICAgdGhpcy5zZXQoKVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc3ZnU2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnJyksXG4gICAgICBzdmdNYXNrZWRJbWFnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2ltYWdlJyksXG4gICAgICBzdmdDbGlwUGF0aDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoJyksXG4gICAgICBzdmdDbGlwUGF0aFJlZjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoLXJlZicpLFxuICAgIH1cbiAgfVxuXG4gIHNldCgpIHtcbiAgICB0aGlzLnNldEJrZ3MoKVxuXG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDVcblxuICAgIC8vIHZhbHVlcyBmb3IgbW91c2UgZXZlbnRcbiAgICB0aGlzLmNsaWNrUHJlY2lzaW9uID0gMC4wNVxuICAgIHRoaXMubnVtSXRlbUZvdW5kID0gMFxuXG4gICAgLy8gdmFsdWVzIGZvciBET00gc2NlbmVcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICB0aGlzLm9mZnNldFRvcCA9IGdldE9mZnNldFRvcCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIGlmICh0aGlzLmRvbS5zdmdDbGlwUGF0aCkge1xuICAgICAgdGhpcy5zZXRDbGlwUGF0aElkKClcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkKClcbiAgICB0aGlzLnNldEl0ZW1zKClcblxuICAgIC8vIHN0YXJ0IGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzKHRydWUpXG4gICAgdGhpcy5ldmVudHNSQUYodHJ1ZSlcblxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5wb3BVcE1lc3NhZ2UoJ1NUQVJUIScsICdibGFjaycpXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnN0YXJ0VGltZXIodGhpcy50aW1lKVxuICB9XG5cbiAgc2V0Q2xpcFBhdGhJZCgpIHtcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZCA9IHV1aWR2MSgpXG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCBgdXJsKCMke3RoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkfSlgKVxuICB9XG5cbiAgc2V0R3JpZCgpIHtcbiAgICB0aGlzLnBvc2l0aW9uc0luR3JpZCA9IFtdXG4gICAgbGV0IHhcbiAgICBsZXQgeVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRDb2xzOyBpKyspIHtcbiAgICAgIHggPSBpICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZExpbmVzOyBqKyspIHtcbiAgICAgICAgeSA9IGogKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgICAgY29uc3Qgb2JqID0geyB4LCB5IH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSXRlbXM7IGkrKykge1xuICAgICAgLy8gcmFuZG9taXplXG4gICAgICBjb25zdCByZCA9IHJhbmRvbUludCgwLCB0aGlzLnBvc2l0aW9uc0luR3JpZC5sZW5ndGggLSAxKVxuICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS54IC8gdGhpcy5ncmlkQ29sc1xuICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS55IC8gdGhpcy5ncmlkTGluZXNcbiAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnNwbGljZShyZCwgMSlcblxuICAgICAgLy8gc3ZnIGl0ZW1zXG4gICAgICAvLyBuZWVkIHRvIHByZWNpc2UgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc3ZnIG5hbWVzcGFjZVxuICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ltYWdlJylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLml0ZW0pXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgbGV0IGRpdlxuICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gYCR7eCAqIDEwMH0lYFxuICAgICAgICBkaXYuc3R5bGUudG9wID0gYCR7eSAqIDEwMH0lYFxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGVsOiBzdmdJbWFnZSxcbiAgICAgICAgZGVidWdFbDogZGl2LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgfVxuICAgICAgLy8gYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLml0ZW1zLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHNldEJrZ3MoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzLCBmaXQgSW1hZ2UgdG8gc2NlbmVcbiAgICB0aGlzLmRvbS5zdmdTY2VuZS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0fWApXG4gICAgLy8gQWRkIG1hc2tlZCBia2dcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5ia2cpXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuICAgIC8vIEFkZCBcImZyb250XCIgYmtnXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLm1hc2tlZEJrZ30pYFxuICB9XG5cbiAgLy8gLy8vLy8vLy9cbiAgLy8gRXZlbnRzXG4gIC8vIC8vLy8vLy8vXG5cbiAgZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgaWYgKERFQlVHKSB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1swXV1cblxuICAgIHBsYXllci5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHBsYXllci5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgcGxheWVyLmV2ZW50WSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgcGxheWVyLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICBwbGF5ZXIudGFyZ2V0WCA9IHBsYXllci5ldmVudFggLyB0aGlzLndpZHRoICogd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICBwbGF5ZXIudGFyZ2V0WCAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyBwbGF5ZXIuY2VudGVyWFxuICAgIHBsYXllci50YXJnZXRZID0gcGxheWVyLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICBwbGF5ZXIudGFyZ2V0WSAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyXG5cbiAgICAvLyBeVGhlc2Ugc2hvdWRsIGJlIGxpbmtlZCB0byBhIGN1cnNvclxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBwbGF5ZXJJZCA9PiB7XG4gICAgaWYgKERFQlVHKSBwbGF5ZXJJZCA9IHBsYXllcklkc1swXVxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuY2xpY2tQcmVjaXNpb25cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1twbGF5ZXJJZF1cbiAgICBjb25zdCB4ID0gKHBsYXllci50YXJnZXRYIC8gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGgpICsgMC41XG4gICAgY29uc3QgeSA9IChwbGF5ZXIudGFyZ2V0WSAvIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCkgKyAwLjVcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkcy5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1t5XV1cblxuICAgICAgLy8gY2xhbXAgcGxheWVyIHBvc2l0aW9uIHRvIGxpbWl0IG9mIHRoZSBzY2VuZVxuICAgICAgcGxheWVyLnRhcmdldFggPSBjbGFtcChwbGF5ZXIudGFyZ2V0WCwgLXdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyKVxuICAgICAgcGxheWVyLnRhcmdldFkgPSBjbGFtcChwbGF5ZXIudGFyZ2V0WSwgLXdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIpXG5cbiAgICAgIHBsYXllci54ICs9IChwbGF5ZXIudGFyZ2V0WCAtIHBsYXllci54KSAqIDAuMVxuICAgICAgcGxheWVyLnkgKz0gKHBsYXllci50YXJnZXRZIC0gcGxheWVyLnkpICogMC4xXG5cblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBwbGF5ZXIgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBsYXllci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgcGxheWVyIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIHBsYXllclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBwbGF5ZXIgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIHBsYXllci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBwbGF5ZXIubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IHBsYXllci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gcGxheWVyLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChwbGF5ZXIucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJjb25zdCBERUJVRyA9IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgREVCVUdcbiIsImNvbnN0IFNlcnZlciA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpLFxuICB3ZWJzb2NrZXQ6IG5ldyBXZWJTb2NrZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpfS9nYW1lYCksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclxuIiwiXG5pbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcbmltcG9ydCBzZXR1cFRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gc2VydmVyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4uL2NvbnN0YW50cy9TZXJ2ZXInXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGcnXG5pbXBvcnQgc2NlbmUxSXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cblxuLy8gcHJlcGFyZSB0aGUgQ2hhcmFjdGVySWRcbi8vIENoYXJhY3RlcklkIC0tPiBnZXQgdGhlIGltYWdlIG9mIHRoZSBjaGFyYWN0ZXJcbi8vIGVuZCBzY2VuZTpcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgaWYgKCFERUJVRykge1xuICAgICAgU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwxYClcbiAgICAgICAgICB2YWxpZFRva2VuID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ZXJJZCA9IGRhdGFbMl1cbiAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZS5pbm5lckhUTUwgPSBgUGxheWVyICR7cGxheWVySWRzLmxlbmd0aH0gaXMgcmVhZHlgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIURFQlVHKSBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gZ2FtZVRtcFxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2dhbWVdJylcblxuICAgIC8vIHNjb3Jlc1xuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTJCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDEwLFxuICAgICAgICBncmlkTGluZXM6IDEwLFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5wbGF5ZXJzID0gW11cbiAgICB0aGlzLnNjb3JlcyA9IFswLCAwXVxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSAwXG5cbiAgICB0aGlzLmxvYWRCa2coKVxuICB9XG5cbiAgbG9hZEJrZygpIHtcbiAgICAvLyBMb2FkIEN1cnJlbnQgU2NlbmUgaW1hZ2VcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XS5ia2dcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gaW1hZ2UgbG9hZGVkXG4gICAgICB0aGlzLmRvbSgpXG4gICAgICB0aGlzLnNldFBsYXllcnMoKVxuXG4gICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICAgIC8vIGFkZCBpbWFnZSBwbGFjaG9sZGVyXG4gICAgICB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLnNyYyA9IHNjZW5lLmJrZ1xuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAgIC4uLnNjZW5lLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpLFxuICAgICAgaW1hZ2VQbGFjZWhvbGRlcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fcGxhY2Vob2xkZXInKSxcbiAgICAgIGN1cnNvcnM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3Vyc29yJyksXG4gICAgICBtZXNzYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19tZXNzYWdlJyksXG4gICAgICBzY29yZUNlbnRlclJlY2FwOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19jZW50ZXJfX3JlY2FwJyksXG4gICAgICBzY29yZUl0ZW1zOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19pdGVtcycpLFxuICAgICAgdGltZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXInKSxcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJzKCkge1xuICAgIHRoaXMucGxheWVySWRzID0gcGxheWVySWRzXG4gICAgdGhpcy52YldpZHRoID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRXaWR0aFxuICAgIHRoaXMudmJIZWlnaHQgPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldEhlaWdodFxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuXG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgJ3JlZCcsXG4gICAgICAnYmx1ZScsXG4gICAgXVxuXG4gICAgLy8gZWFjaCBwbGF5ZXIgaXMgYW4gb2JqZWN0IHdpdGggYSBrZXkvaWRcbiAgICB0aGlzLnBsYXllcnMgPSB7fVxuICAgIGlmIChwbGF5ZXJJZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzBdXSA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBlbDogdGhpcy5kb20uY3Vyc29yc1swXSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgIGlkOiBwbGF5ZXJJZHNbMF0sXG4gICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1sxXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMV0sXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBjb2xvcjogY29sb3JzWzFdLFxuICAgICAgICBpZDogcGxheWVySWRzWzFdLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllci5pZH0sJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWApXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKClcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgZW5kU2NlbmUobWVzc2FnZSA9ICdzdGFnZSBjb21wbGV0ZScpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbClcbiAgICB0aGlzLnBvcFVwTWVzc2FnZShtZXNzYWdlLCAnYmxhY2snLCB0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZUluZGV4ICsgMSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZSlcblxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zY2VuZXMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kIG9mIHBhcnR5JylcbiAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZCgnZGlzY29ubmVjdF9hbGxfdXNlcnMnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDM2IDYzMlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lciB0LTMyLS1ib2xkXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSBzY29yZSBib2FyZCAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjb3JlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMTo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fY2VudGVyXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidC0zMi0tYm9sZFxcXCI+SXRlbSB0byBmaW5kOjwvcD5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xIDogMDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yIDogMDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gYmlnIGN1cnNvciAtLT5cXG48c2VjdGlvbiBjbGFzcz1cXFwic2V0dXBcXFwiPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2V0dXBfX21lc3NhZ2UgdC02NC0tYm9sZFxcXCI+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==