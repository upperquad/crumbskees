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

    _defineProperty(this, "handleClick", function (playerId) {
      // console.log(e)
      // e will be current cursor with positions
      // if cursor position
      // Check if cursor item is found
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
        _this.currentScene.handleClick(data[1]);
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
      this.websocket.send("score,".concat(playerIds[0], ",0"));
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
      this.websocket.send("score,".concat(player.id, ",").concat(this.scores[player.index]));
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
        this.websocket.send('disconnect_all_users');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvU2VydmVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwiXSwibmFtZXMiOlsid2luZG93IiwiR2FtZU1hbmFnZXIiLCJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaWQiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImlzSW5zaWRlVGltZSIsInNldFBvaW50cyIsInBvaW50cyIsInNsaWNlIiwiTWF0aCIsIlBJIiwic3RhcnRBbmdsZSIsInJhbmRvbSIsImkiLCJtYXJnZUFuZ2xlIiwic3RhcnRBbmltIiwiZ2V0Tm93IiwiYW5nbGUiLCJkdXJhdGlvbiIsInBvaW50IiwiY29zIiwic2luIiwidGFyZ2V0TWluWCIsInRhcmdldE1pblkiLCJ0YXJnZXRNYXhYIiwidGFyZ2V0TWF4WSIsInN0YXJ0WCIsInN0YXJ0WSIsImRlc3RYIiwiZGVzdFkiLCJwdXNoIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJwbGF5ZXJJZHMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwbGF5ZXJJZCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtIiwiZm91bmQiLCJzY29yZSIsInN0eWxlIiwib3BhY2l0eSIsImRlYnVnRWwiLCJudW1JdGVtRm91bmQiLCJlbmRTY2VuZSIsIm5vdyIsImRldGFpbCIsImFjY2VsZXJhdGlvbiIsImRlc3RBY2NlbGVyYXRpb24iLCJjb2VmQWNjZWxlcmF0aW9uIiwiY2xhbXAiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJia2ciLCJtYXNrZWRCa2ciLCJudW1JdGVtcyIsImdyaWRDb2xzIiwiZ3JpZExpbmVzIiwidGltZSIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEJrZ3MiLCJpbmNyZWFzZU1heCIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwicGFyZW50Tm9kZSIsImdldE9mZnNldFRvcCIsInNldENsaXBQYXRoSWQiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJwb3BVcE1lc3NhZ2UiLCJzdGFydFRpbWVyIiwidXVpZHYxIiwicG9zaXRpb25zSW5HcmlkIiwiaiIsIm9iaiIsInJkIiwicmFuZG9tSW50Iiwic3BsaWNlIiwic3ZnSW1hZ2UiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGVOUyIsImFwcGVuZENoaWxkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZXRob2QiLCJldiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUkFGIiwidGVuc2lvbiIsIm5iUG9pbnRzIiwicGF0aCIsInAwIiwicDEiLCJwMiIsInAzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJTZXJ2ZXIiLCJob3N0IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZXBsYWNlIiwiZGVidWciLCJ0b2tlbnMiLCJtYWluIiwiaW5uZXJIVE1MIiwic2V0dXBUbXAiLCJzZXR1cE1lc3NhZ2UiLCJ3ZWJzb2NrZXQiLCJvbm1lc3NhZ2UiLCJsaXN0ZW5TZXJ2ZXIiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInZhbGlkVG9rZW4iLCJmaXJzdFBsYXllcklkIiwic2VuZCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwiV2ViU29ja2V0Iiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZVNjZW5lIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3lTY2VuZSIsImRlc3Ryb3kiLCJGdW5jdGlvbiIsIlJBRk1hbmFnZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZWxlbSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHlUb3AiLCJib2R5Iiwib3V0RXhwbyIsIm4iLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInRtcCIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJEYXRl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Q0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1R0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsazBDQUFrMEMsbUJBQU8sQ0FBQyx3RkFBMkMseWI7Ozs7Ozs7Ozs7O0FDQXIzQywrSiIsImZpbGUiOiJqcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvZ2FtZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjOTBkOTA1YWM0ZGRlMTY3MTE1Y2M4NzRmYmQ5ODE3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZWI4MGE1MjdkZTEwZTIyM2U4MmNkNDg1MWE0MWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3OWU5MzU2YzA1MDAwMzllZjRmNzQ2YmE4MDIyYWRlLnBuZ1wiOyIsImltcG9ydCAnLi4vLi4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcydcblxuaW1wb3J0ICcuL21hbmFnZXJzL1JBRk1hbmFnZXInXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbigoKSA9PiB7XG4gIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbiAgd2luZG93LkdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKClcbn0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaWQsXG4gICAgICBpbmRleCxcbiAgICAgIGNvbG9yLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5udW1Qb2ludHMgPSA4XG4gICAgdGhpcy5jZW50ZXJYID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMuY2VudGVyWSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG4gICAgLy8gY3Vyc29yIHBvc2l0aW9uXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuaXNJbnNpZGVUaW1lID0gMFxuXG4gICAgdGhpcy5zZXRQb2ludHMoKVxuICB9XG5cbiAgc2V0UG9pbnRzKCkge1xuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICAvLyBjcmVhdGUgXCJudW1Qb2ludHNcIiB4IHBvaW50c1xuICAgIGNvbnN0IHNsaWNlID0gKE1hdGguUEkgKiAyKSAvIHRoaXMubnVtUG9pbnRzXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gcmFuZG9tKDAsIE1hdGguUEkgKiAyKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBtYXJnZUFuZ2xlID0gcmFuZG9tKDAsIDAuMjgpIC8vIGkgLyAxLjJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgc3RhcnQgdGltZSBvZiBhbmltYXRpb24gKHdlIGRvbid0IHdhbnQgdGhlIHR3ZWVuIHRvIGdvIGZyb20gMCB0byAxLCBpdCBjYW4gc3RhcnQgZGlyZWN0bHkgZnJvbSAwLjYgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBzdGFydEFuaW0gPSBnZXROb3coKSArIGkgKiByYW5kb20oMCwgdGhpcy5taW5EdXJhdGlvbilcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zdGFydEFuZ2xlICsgaSAqIHNsaWNlICsgbWFyZ2VBbmdsZVxuICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb20odGhpcy5taW5EdXJhdGlvbiwgdGhpcy5tYXhEdXJhdGlvbilcblxuICAgICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRBbmltLFxuICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5ZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgfVxuXG4gICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuXG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgZ2V0T2Zmc2V0TGVmdCB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IGluT3V0U2luZSB9IGZyb20gJy4uL3V0aWxzL2Vhc2UnXG5pbXBvcnQgeyBjbGFtcCwgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbFxuICAgIHRoaXMuYmtnID0gb3B0aW9ucy5ia2dcbiAgICB0aGlzLm1hc2tlZEJrZyA9IG9wdGlvbnMubWFza2VkQmtnXG4gICAgdGhpcy5pdGVtID0gb3B0aW9ucy5pdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG9wdGlvbnMubnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gb3B0aW9ucy5ncmlkQ29sc1xuICAgIHRoaXMuZ3JpZExpbmVzID0gb3B0aW9ucy5ncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gb3B0aW9ucy5pbmRleFxuICAgIHRoaXMudGltZSA9IDYwIC8vIGluIHNlY29uZHNcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z01hc2tlZEltYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19faW1hZ2UnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuc2V0QmtncygpXG5cbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmRlc3RBY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5jb2VmQWNjZWxlcmF0aW9uID0gMC4yXG4gICAgdGhpcy5pbmNyZWFzZU1heCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wN1xuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNVxuXG4gICAgLy8gdmFsdWVzIGZvciBtb3VzZSBldmVudFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnBvcFVwTWVzc2FnZSgnU1RBUlQhJywgJ2JsYWNrJylcbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc3RhcnRUaW1lcih0aGlzLnRpbWUpXG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuaXRlbSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgYCR7eCAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgYCR7eSAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKC0ke3RoaXMuaXRlbVNpemUgLyAyfSAtJHt0aGlzLml0ZW1TaXplIC8gMn0pYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcblxuICAgICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpXG5cbiAgICAgIC8vIGZha2UgaXRlbSBmb3IgZGVidWdnaW5nXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlYnVnJylcbiAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gYCR7eCAqIDEwMH0lYFxuICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgc2V0QmtncygpIHtcbiAgICAvLyBzZXQgdmlld2JveCB2YWx1ZXMsIGZpdCBJbWFnZSB0byBzY2VuZVxuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aH0gJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgICAvLyBBZGQgbWFza2VkIGJrZ1xuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLmJrZylcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG4gICAgLy8gQWRkIFwiZnJvbnRcIiBia2dcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMubWFza2VkQmtnfSlgXG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAvLyB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1swXV1cblxuICAgIHBsYXllci5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHBsYXllci5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgcGxheWVyLmV2ZW50WSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgcGxheWVyLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICBwbGF5ZXIudGFyZ2V0WCA9IHBsYXllci5ldmVudFggLyB0aGlzLndpZHRoICogd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICBwbGF5ZXIudGFyZ2V0WCAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyBwbGF5ZXIuY2VudGVyWFxuICAgIHBsYXllci50YXJnZXRZID0gcGxheWVyLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICBwbGF5ZXIudGFyZ2V0WSAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyXG5cbiAgICAvLyBeVGhlc2Ugc2hvdWRsIGJlIGxpbmtlZCB0byBhIGN1cnNvclxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBwbGF5ZXJJZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyBlIHdpbGwgYmUgY3VycmVudCBjdXJzb3Igd2l0aCBwb3NpdGlvbnNcbiAgICAvLyBpZiBjdXJzb3IgcG9zaXRpb25cbiAgICAvLyBDaGVjayBpZiBjdXJzb3IgaXRlbSBpcyBmb3VuZFxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuY2xpY2tQcmVjaXNpb25cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1twbGF5ZXJJZF1cbiAgICBjb25zdCB4ID0gKHBsYXllci50YXJnZXRYIC8gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGgpICsgMC41XG4gICAgY29uc3QgeSA9IChwbGF5ZXIudGFyZ2V0WSAvIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCkgKyAwLjVcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkcy5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1t5XV1cblxuICAgICAgLy8gY2xhbXAgcGxheWVyIHBvc2l0aW9uIHRvIGxpbWl0IG9mIHRoZSBzY2VuZVxuICAgICAgcGxheWVyLnRhcmdldFggPSBjbGFtcChwbGF5ZXIudGFyZ2V0WCwgLXdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyKVxuICAgICAgcGxheWVyLnRhcmdldFkgPSBjbGFtcChwbGF5ZXIudGFyZ2V0WSwgLXdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIpXG5cbiAgICAgIHBsYXllci54ICs9IChwbGF5ZXIudGFyZ2V0WCAtIHBsYXllci54KSAqIDAuMVxuICAgICAgcGxheWVyLnkgKz0gKHBsYXllci50YXJnZXRZIC0gcGxheWVyLnkpICogMC4xXG5cblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBwbGF5ZXIgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBsYXllci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgcGxheWVyIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIHBsYXllclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBwbGF5ZXIgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIHBsYXllci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBwbGF5ZXIubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IHBsYXllci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gcGxheWVyLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChwbGF5ZXIucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJjb25zdCBTZXJ2ZXIgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKSxcbiAgLy8gd2Vic29ja2V0OiBuZXcgV2ViU29ja2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKX0vZ2FtZWApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJcbiIsImltcG9ydCBnYW1lVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sJ1xuaW1wb3J0IHNldHVwVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBzZXJ2ZXJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vY29uc3RhbnRzL1NlcnZlcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2JrZzEuanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5pbXBvcnQgc2NlbmUyQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbi8vIGltcG9ydCBzY2VuZTJJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xcXG5cbmNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJylcbmNvbnN0IGRlYnVnID0gZmFsc2VcblxuY29uc3QgcGxheWVySWRzID0gZGVidWcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vIFNlcnZlci53ZWJzb2NrZXQub25vcGVuID0gdGhpcy5vbldzT3BlblxuICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldChgJHtob3N0fS9nYW1lYClcbiAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG5cbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLmxpc3RlblNlcnZlclxuICB9XG5cbiAgbGlzdGVuU2VydmVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnNwbGl0KCcsJylcblxuICAgIGlmIChkYXRhWzBdID09PSAndG9rZW5fc3VibWl0Jykge1xuICAgICAgLy8gbG9vcCBpbnRvIHRoZSB0b2tlbnMsIGlmIHRoZSB0b2tlbiBjb3JyZXNwb25kLCBzZXQgdXAgdGhlIGlkXG4gICAgICBsZXQgdmFsaWRUb2tlbiA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9rZW5zW2ldID09PSBkYXRhWzFdICYmIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCkge1xuICAgICAgICAgIC8vIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCBJbiBjYXNlIHNlY29uZCBwbGF5ZXIgdXNlIHRoZSB0b2tlbiBvZiB0aGUgZmlyc3QgcGxheWVyXG4gICAgICAgICAgcGxheWVySWRzLnB1c2goZGF0YVsyXSlcbiAgICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDFgKVxuICAgICAgICAgIHZhbGlkVG9rZW4gPSB0cnVlXG4gICAgICAgICAgdGhpcy5maXJzdFBsYXllcklkID0gZGF0YVsyXVxuICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlLmlubmVySFRNTCA9IGBQbGF5ZXIgJHtwbGF5ZXJJZHMubGVuZ3RofSBpcyByZWFkeWBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRUb2tlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllcklkc1swXX0sMGApXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgdGhpcy5sb2FkQmtnKClcbiAgfVxuXG4gIGxvYWRCa2coKSB7XG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICAvLyBhZGQgaW1hZ2UgcGxhY2hvbGRlclxuICAgICAgdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5zcmMgPSBzY2VuZS5ia2dcblxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgICAuLi5zY2VuZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHRpbWVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLnBsYXllcklkcyA9IHBsYXllcklkc1xuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnZiSGVpZ2h0ID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRIZWlnaHRcbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sIGluZGV4OiAwLCBjb2xvcjogY29sb3JzWzBdLCBpZDogcGxheWVySWRzWzBdIH0pXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzFdXSA9IG5ldyBQbGF5ZXIoeyBlbDogdGhpcy5kb20uY3Vyc29yc1sxXSwgaW5kZXg6IDEsIGNvbG9yOiBjb2xvcnNbMV0sIGlkOiBwbGF5ZXJJZHNbMV0gfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgdGhpcy53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXIuaWR9LCR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKG1lc3NhZ2UgPSAnZW5kIG9mIHNjZW5lJykge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKVxuICAgIHRoaXMucG9wVXBNZXNzYWdlKG1lc3NhZ2UsICdibGFjaycsIHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lSW5kZXggKyAxKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICB1cGRhdGVTY2VuZShpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zY2VuZXMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kIG9mIHBhcnR5JylcbiAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoJ2Rpc2Nvbm5lY3RfYWxsX3VzZXJzJylcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIC4uLnNjZW5lLFxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgc2xpY2VcXFwiIC8+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9zdmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3BsYWNlaG9sZGVyXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR1cF9fbWVzc2FnZSB0LTY0LS1ib2xkXFxcIj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9