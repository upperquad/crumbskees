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
      var x = player.targetX / _this.width;
      console.log(player, player.targetX, x);
      var y = player.targetY / _this.height;

      for (var i = 0; i < _this.items.length; i++) {
        var item = _this.items[i];
        console.log(item.x);

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
      console.log("score,".concat(playerIds[0], ",0"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvU2VydmVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwiXSwibmFtZXMiOlsid2luZG93IiwiR2FtZU1hbmFnZXIiLCJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaWQiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImlzSW5zaWRlVGltZSIsInNldFBvaW50cyIsInBvaW50cyIsInNsaWNlIiwiTWF0aCIsIlBJIiwic3RhcnRBbmdsZSIsInJhbmRvbSIsImkiLCJtYXJnZUFuZ2xlIiwic3RhcnRBbmltIiwiZ2V0Tm93IiwiYW5nbGUiLCJkdXJhdGlvbiIsInBvaW50IiwiY29zIiwic2luIiwidGFyZ2V0TWluWCIsInRhcmdldE1pblkiLCJ0YXJnZXRNYXhYIiwidGFyZ2V0TWF4WSIsInN0YXJ0WCIsInN0YXJ0WSIsImRlc3RYIiwiZGVzdFkiLCJwdXNoIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJwbGF5ZXJJZHMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwbGF5ZXJJZCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiZW5kU2NlbmUiLCJub3ciLCJkZXRhaWwiLCJhY2NlbGVyYXRpb24iLCJkZXN0QWNjZWxlcmF0aW9uIiwiY29lZkFjY2VsZXJhdGlvbiIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJkZWJ1ZyIsInRva2VucyIsIm1haW4iLCJpbm5lckhUTUwiLCJzZXR1cFRtcCIsInNldHVwTWVzc2FnZSIsIndlYnNvY2tldCIsIm9ubWVzc2FnZSIsImxpc3RlblNlcnZlciIsImV2ZW50IiwiZGF0YSIsInNwbGl0IiwidmFsaWRUb2tlbiIsImZpcnN0UGxheWVySWQiLCJzZW5kIiwiaW5pdCIsInBhcnNlRmxvYXQiLCJjdXJyZW50U2NlbmUiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJvbldzT3BlbiIsImdhbWVUbXAiLCJzY2VuZXMiLCJzY2VuZTFCa2ciLCJzY2VuZTFJdGVtIiwiZWZmZWN0Iiwic2NlbmUyQmtnIiwic2NvcmVzIiwiY3VycmVudFNjZW5lSW5kZXgiLCJsb2FkQmtnIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRQbGF5ZXJzIiwic2NlbmUiLCJpbWFnZVBsYWNlaG9sZGVyIiwiY3Vyc29ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzYWdlIiwic2NvcmVDZW50ZXJSZWNhcCIsInNjb3JlSXRlbXMiLCJ0aW1lciIsImNvbG9ycyIsInNlY29uZHMiLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsImVsZW0iLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5VG9wIiwiYm9keSIsIm91dEV4cG8iLCJuIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInRtcCIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJEYXRl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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrMENBQWswQyxtQkFBTyxDQUFDLHdGQUEyQyx5Yjs7Ozs7Ozs7Ozs7QUNBcjNDLCtKIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWM5MGQ5MDVhYzRkZGUxNjcxMTVjYzg3NGZiZDk4MTcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpZCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxcbiAgICB0aGlzLmJrZyA9IG9wdGlvbnMuYmtnXG4gICAgdGhpcy5tYXNrZWRCa2cgPSBvcHRpb25zLm1hc2tlZEJrZ1xuICAgIHRoaXMuaXRlbSA9IG9wdGlvbnMuaXRlbVxuICAgIHRoaXMubnVtSXRlbXMgPSBvcHRpb25zLm51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IG9wdGlvbnMuZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IG9wdGlvbnMuZ3JpZExpbmVzXG4gICAgdGhpcy5pbmRleCA9IG9wdGlvbnMuaW5kZXhcbiAgICB0aGlzLnRpbWUgPSA2MCAvLyBpbiBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbSgpXG4gICAgdGhpcy5zZXQoKVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc3ZnU2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnJyksXG4gICAgICBzdmdNYXNrZWRJbWFnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2ltYWdlJyksXG4gICAgICBzdmdDbGlwUGF0aDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoJyksXG4gICAgICBzdmdDbGlwUGF0aFJlZjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoLXJlZicpLFxuICAgIH1cbiAgfVxuXG4gIHNldCgpIHtcbiAgICB0aGlzLnNldEJrZ3MoKVxuXG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDVcblxuICAgIC8vIHZhbHVlcyBmb3IgbW91c2UgZXZlbnRcbiAgICB0aGlzLmNsaWNrUHJlY2lzaW9uID0gMC4wNVxuICAgIHRoaXMubnVtSXRlbUZvdW5kID0gMFxuXG4gICAgLy8gdmFsdWVzIGZvciBET00gc2NlbmVcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICB0aGlzLm9mZnNldFRvcCA9IGdldE9mZnNldFRvcCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIGlmICh0aGlzLmRvbS5zdmdDbGlwUGF0aCkge1xuICAgICAgdGhpcy5zZXRDbGlwUGF0aElkKClcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkKClcbiAgICB0aGlzLnNldEl0ZW1zKClcblxuICAgIC8vIHN0YXJ0IGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzKHRydWUpXG4gICAgdGhpcy5ldmVudHNSQUYodHJ1ZSlcblxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5wb3BVcE1lc3NhZ2UoJ1NUQVJUIScsICdibGFjaycpXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnN0YXJ0VGltZXIodGhpcy50aW1lKVxuICB9XG5cbiAgc2V0Q2xpcFBhdGhJZCgpIHtcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZCA9IHV1aWR2MSgpXG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCBgdXJsKCMke3RoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkfSlgKVxuICB9XG5cbiAgc2V0R3JpZCgpIHtcbiAgICB0aGlzLnBvc2l0aW9uc0luR3JpZCA9IFtdXG4gICAgbGV0IHhcbiAgICBsZXQgeVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRDb2xzOyBpKyspIHtcbiAgICAgIHggPSBpICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZExpbmVzOyBqKyspIHtcbiAgICAgICAgeSA9IGogKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgICAgY29uc3Qgb2JqID0geyB4LCB5IH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSXRlbXM7IGkrKykge1xuICAgICAgLy8gcmFuZG9taXplXG4gICAgICBjb25zdCByZCA9IHJhbmRvbUludCgwLCB0aGlzLnBvc2l0aW9uc0luR3JpZC5sZW5ndGggLSAxKVxuICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS54IC8gdGhpcy5ncmlkQ29sc1xuICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS55IC8gdGhpcy5ncmlkTGluZXNcbiAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnNwbGljZShyZCwgMSlcblxuICAgICAgLy8gc3ZnIGl0ZW1zXG4gICAgICAvLyBuZWVkIHRvIHByZWNpc2UgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc3ZnIG5hbWVzcGFjZVxuICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ltYWdlJylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLml0ZW0pXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGVsOiBzdmdJbWFnZSxcbiAgICAgICAgZGVidWdFbDogZGl2LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgfVxuICAgICAgLy8gYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLml0ZW1zLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHNldEJrZ3MoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzLCBmaXQgSW1hZ2UgdG8gc2NlbmVcbiAgICB0aGlzLmRvbS5zdmdTY2VuZS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0fWApXG4gICAgLy8gQWRkIG1hc2tlZCBia2dcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5ia2cpXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuICAgIC8vIEFkZCBcImZyb250XCIgYmtnXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLm1hc2tlZEJrZ30pYFxuICB9XG5cbiAgLy8gLy8vLy8vLy9cbiAgLy8gRXZlbnRzXG4gIC8vIC8vLy8vLy8vXG5cbiAgZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLy8gd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbMF1dXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gcGxheWVySWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gZSB3aWxsIGJlIGN1cnJlbnQgY3Vyc29yIHdpdGggcG9zaXRpb25zXG4gICAgLy8gaWYgY3Vyc29yIHBvc2l0aW9uXG4gICAgLy8gQ2hlY2sgaWYgY3Vyc29yIGl0ZW0gaXMgZm91bmRcbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbcGxheWVySWRdXG4gICAgY29uc3QgeCA9IHBsYXllci50YXJnZXRYIC8gdGhpcy53aWR0aFxuICAgIGNvbnNvbGUubG9nKHBsYXllciwgcGxheWVyLnRhcmdldFgsIHgpXG4gICAgY29uc3QgeSA9IHBsYXllci50YXJnZXRZIC8gdGhpcy5oZWlnaHRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0ueClcbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkcy5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1t5XV1cblxuICAgICAgcGxheWVyLnggKz0gKHBsYXllci50YXJnZXRYIC0gcGxheWVyLngpICogMC4xXG4gICAgICBwbGF5ZXIueSArPSAocGxheWVyLnRhcmdldFkgLSBwbGF5ZXIueSkgKiAwLjFcblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBwbGF5ZXIgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBsYXllci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgcGxheWVyIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIHBsYXllclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBwbGF5ZXIgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIHBsYXllci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBwbGF5ZXIubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IHBsYXllci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gcGxheWVyLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChwbGF5ZXIucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJjb25zdCBTZXJ2ZXIgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKSxcbiAgLy8gd2Vic29ja2V0OiBuZXcgV2ViU29ja2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKX0vZ2FtZWApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJcbiIsImltcG9ydCBnYW1lVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sJ1xuaW1wb3J0IHNldHVwVG1wIGZyb20gJy4uLy4uLy4uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBzZXJ2ZXJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vY29uc3RhbnRzL1NlcnZlcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2JrZzEuanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5pbXBvcnQgc2NlbmUyQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbi8vIGltcG9ydCBzY2VuZTJJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xcXG5cbmNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJylcbmNvbnN0IGRlYnVnID0gZmFsc2VcblxuY29uc3QgcGxheWVySWRzID0gZGVidWcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIC8vIFNlcnZlci53ZWJzb2NrZXQub25vcGVuID0gdGhpcy5vbldzT3BlblxuICAgIHRoaXMud2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldChgJHtob3N0fS9nYW1lYClcbiAgICB0aGlzLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG5cbiAgICBpZiAoZGVidWcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLmxpc3RlblNlcnZlclxuICB9XG5cbiAgbGlzdGVuU2VydmVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnNwbGl0KCcsJylcblxuICAgIGlmIChkYXRhWzBdID09PSAndG9rZW5fc3VibWl0Jykge1xuICAgICAgLy8gbG9vcCBpbnRvIHRoZSB0b2tlbnMsIGlmIHRoZSB0b2tlbiBjb3JyZXNwb25kLCBzZXQgdXAgdGhlIGlkXG4gICAgICBsZXQgdmFsaWRUb2tlbiA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9rZW5zW2ldID09PSBkYXRhWzFdICYmIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCkge1xuICAgICAgICAgIC8vIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCBJbiBjYXNlIHNlY29uZCBwbGF5ZXIgdXNlIHRoZSB0b2tlbiBvZiB0aGUgZmlyc3QgcGxheWVyXG4gICAgICAgICAgcGxheWVySWRzLnB1c2goZGF0YVsyXSlcbiAgICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKGBhdXRoX3Jlc3VsdCwke2RhdGFbMl19LDFgKVxuICAgICAgICAgIHZhbGlkVG9rZW4gPSB0cnVlXG4gICAgICAgICAgdGhpcy5maXJzdFBsYXllcklkID0gZGF0YVsyXVxuICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlLmlubmVySFRNTCA9IGBQbGF5ZXIgJHtwbGF5ZXJJZHMubGVuZ3RofSBpcyByZWFkeWBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRUb2tlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVDbGljayhkYXRhWzFdKVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllcklkc1swXX0sMGApXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgdGhpcy5sb2FkQmtnKClcbiAgfVxuXG4gIGxvYWRCa2coKSB7XG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICAvLyBhZGQgaW1hZ2UgcGxhY2hvbGRlclxuICAgICAgdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5zcmMgPSBzY2VuZS5ia2dcblxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgICAuLi5zY2VuZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHRpbWVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLnBsYXllcklkcyA9IHBsYXllcklkc1xuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnZiSGVpZ2h0ID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRIZWlnaHRcbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIC8vIGVhY2ggcGxheWVyIGlzIGFuIG9iamVjdCB3aXRoIGEga2V5L2lkXG4gICAgdGhpcy5wbGF5ZXJzID0ge31cbiAgICBpZiAocGxheWVySWRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1swXV0gPSBuZXcgUGxheWVyKHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMF0sIGluZGV4OiAwLCBjb2xvcjogY29sb3JzWzBdLCBpZDogcGxheWVySWRzWzBdIH0pXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzFdXSA9IG5ldyBQbGF5ZXIoeyBlbDogdGhpcy5kb20uY3Vyc29yc1sxXSwgaW5kZXg6IDEsIGNvbG9yOiBjb2xvcnNbMV0sIGlkOiBwbGF5ZXJJZHNbMV0gfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgdGhpcy53ZWJzb2NrZXQuc2VuZChgc2NvcmUsJHtwbGF5ZXIuaWR9LCR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKG1lc3NhZ2UgPSAnZW5kIG9mIHNjZW5lJykge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKVxuICAgIHRoaXMucG9wVXBNZXNzYWdlKG1lc3NhZ2UsICdibGFjaycsIHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lSW5kZXggKyAxKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICB1cGRhdGVTY2VuZShpbmRleCkge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zY2VuZXMubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kIG9mIHBhcnR5JylcbiAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoJ2Rpc2Nvbm5lY3RfYWxsX3VzZXJzJylcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIC4uLnNjZW5lLFxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgc2xpY2VcXFwiIC8+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9zdmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3BsYWNlaG9sZGVyXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR1cF9fbWVzc2FnZSB0LTY0LS1ib2xkXFxcIj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9