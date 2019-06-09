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
        color = props.color,
        numPoints = props.numPoints;
    this.el = el;
    this.index = index;
    this.color = color;
    this.numPoints = numPoints;
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
      var player = window.GameManager.players[0];
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
      var player = window.GameManager.players[0];
      var x = player.eventX / _this.width;
      var y = player.eventY / _this.height;

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
      _this.acceleration = _this.acceleration + (_this.destAcceleration - _this.acceleration) * _this.coefAcceleration;
      var player = window.GameManager.players[0];
      player.x = player.x + (player.targetX - player.x) * 0.1;
      player.y = player.y + (player.targetY - player.y) * 0.1; // For each cursor...

      for (var y = 0; y < window.GameManager.players.length; y++) {
        var cursor = window.GameManager.players[y]; // For each points of the cursor (organic shape)
        // Create organic shape / Tween all points

        for (var i = 0; i < cursor.points.length; i++) {
          var point = cursor.points[i]; // From scratch tween:
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
          } // move cursor based on mouse


          if (y === 0) {
            point.x += player.x;
            point.y += player.y;
          } // For increasing cursor
          // // if item found, increase cursor radius
          // if (y === 0 && cursor.itemFound && !point.isIncrease) {
          //   const newMaxRadius = cursor.maxRadius + this.increaseMax
          //   const newMaxMiddleRadius = cursor.maxMiddleRadius + this.increaseMax
          //   const newMinRadius = cursor.minRadius + this.increaseMax
          //   const newMinMiddleRadius = cursor.minMiddleRadius + this.increaseMax
          //   point.targetMaxX = cursor.centerX + Math.cos(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          //   point.targetMinX = cursor.centerX + Math.cos(point.angle) * random(newMinRadius, newMinMiddleRadius)
          //   point.destX = point.targetMaxX
          //   point.targetMaxY = cursor.centerY + Math.sin(point.angle) * random(newMaxMiddleRadius, newMaxRadius)
          //   point.targetMinY = cursor.centerY + Math.sin(point.angle) * random(newMinRadius, newMinMiddleRadius)
          //   point.destY = point.targetMaxY
          //   point.startAnim = getNow()
          //   point.isIncrease = true
          // }

        }

        cursor.el.setAttribute('d', _this.cardinal(cursor.points));
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
      var ev = method ? 'addEventListener' : 'removeEventListener';
      window[ev]('mousemove', this.handleMouseMove, false);
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
/* harmony import */ var _components_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Scene */ "./js/front-end/components/Scene.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Player */ "./js/front-end/components/Player.js");
/* harmony import */ var _constants_Server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/Server */ "./js/front-end/constants/Server.js");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/front-end/images/bkg1.jpg */ "./assets/front-end/images/bkg1.jpg");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_6__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // server

 // assets



 // import scene2Item from '../../../assets/front-end/images/pattern.png'

var id = 'ewpijf';
var token = 'weijfwepfijwfs';

var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    var _this = this;

    _classCallCheck(this, GameManager);

    _defineProperty(this, "listenServer", function (event) {
      var data = event.data.split(',');

      if (data[0] === 'token_submit') {
        if (data[1] === id && data[2] === token) {
          // send
          // Server.websocket.send(`auth_result_id,${id},1`)
          _this.init();
        } else {
          // Server.websocket.send(`auth_result_id,${id},0`)
          return; // can be an error object
        }
      } else if (data[0] === 'command') {
        if (data[1] === 'reset') {// TODO, can even do "Kick Player 1 Out", "Kick Player 2 Out",
          // "Kick'em Both Out" buttons
        } else if (data[1] === 'refresh') {
          window.location.reload(false);
        }
      } else if (data[0] === 'cursor_move') {// data[1] needs to be the index of player (or id)
        // this.currentScene.player[data[1]].eventX = data[1]
        // this.currentScene.player[data[1]].eventY = data[2]
      } else if (data[0] === 'click') {// data[1] needs to be the index of player (or id)
        // this.currentScene.player[data[1]].handleClick()
      }

      _this.numbers.innerHTML = event.data;
    });

    _constants_Server__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.onmessage = this.listenServer;
    this.init();
  }

  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      this.main = document.querySelector('.main');
      this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a;
      this.element = document.querySelector('[game]'); // scores

      this.scenes = [{
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        numItems: 5,
        gridCols: 10,
        gridLines: 10,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a,
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
        _this2.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({
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
      this.numPoints = 8;
      this.vbWidth = this.dom.imagePlaceholder.offsetWidth;
      this.vbHeight = this.dom.imagePlaceholder.offsetHeight; // assuming we always use a viewbox of 100 x 100

      var obj = {
        numPoints: this.numPoints
      };
      var colors = ['red', 'blue'];

      for (var i = 0; i < this.dom.cursors.length; i++) {
        var props = Object.assign(obj, {
          el: this.dom.cursors[i],
          index: i,
          color: colors[i]
        });
        this.players.push(new _components_Player__WEBPACK_IMPORTED_MODULE_2__["default"](props));
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
      _constants_Server__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send("score,".concat(player.index, ",").concat(this.scores[player.index]));
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
        _constants_Server__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send('disconnect_all_users');
      }

      this.destroyScene(this.currentScene);
      this.currentSceneIndex = index;
      var scene = this.scenes[this.currentSceneIndex];
      this.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvU2VydmVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImlzSW5zaWRlVGltZSIsInNldFBvaW50cyIsInBvaW50cyIsInNsaWNlIiwiTWF0aCIsIlBJIiwic3RhcnRBbmdsZSIsInJhbmRvbSIsImkiLCJtYXJnZUFuZ2xlIiwic3RhcnRBbmltIiwiZ2V0Tm93IiwiYW5nbGUiLCJkdXJhdGlvbiIsInBvaW50IiwiY29zIiwic2luIiwidGFyZ2V0TWluWCIsInRhcmdldE1pblkiLCJ0YXJnZXRNYXhYIiwidGFyZ2V0TWF4WSIsInN0YXJ0WCIsInN0YXJ0WSIsImRlc3RYIiwiZGVzdFkiLCJwdXNoIiwiU2NlbmUiLCJvcHRpb25zIiwiZSIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInBsYXllciIsInBsYXllcnMiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiZW5kU2NlbmUiLCJub3ciLCJkZXRhaWwiLCJhY2NlbGVyYXRpb24iLCJkZXN0QWNjZWxlcmF0aW9uIiwiY29lZkFjY2VsZXJhdGlvbiIsImN1cnNvciIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJpZCIsInV1aWR2MSIsInBvc2l0aW9uc0luR3JpZCIsImoiLCJvYmoiLCJyZCIsInJhbmRvbUludCIsInNwbGljZSIsInN2Z0ltYWdlIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJhcHBlbmRDaGlsZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZWZ0IiwidG9wIiwiYmFja2dyb3VuZEltYWdlIiwibWV0aG9kIiwiZXYiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVDbGljayIsImhhbmRsZVJBRiIsInRlbnNpb24iLCJuYlBvaW50cyIsInBhdGgiLCJwMCIsInAxIiwicDIiLCJwMyIsIngxIiwieTEiLCJ4MiIsInkyIiwiU2VydmVyIiwiaG9zdCIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVwbGFjZSIsIndlYnNvY2tldCIsIldlYlNvY2tldCIsInRva2VuIiwiZXZlbnQiLCJkYXRhIiwic3BsaXQiLCJpbml0IiwicmVsb2FkIiwibnVtYmVycyIsImlubmVySFRNTCIsIm9ubWVzc2FnZSIsImxpc3RlblNlcnZlciIsIm1haW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnJlbnRTY2VuZSIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJzZW5kIiwiZW5kIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsZWFySW50ZXJ2YWwiLCJ1cGRhdGVTY2VuZSIsImNvbnNvbGUiLCJsb2ciLCJkZXN0cm95U2NlbmUiLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsImVsZW0iLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5VG9wIiwiYm9keSIsIm91dEV4cG8iLCJuIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInRtcCIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDLHlEQUFXO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrMENBQWswQyxtQkFBTyxDQUFDLHdGQUEyQyx5YiIsImZpbGUiOiJqcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvZ2FtZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjOTBkOTA1YWM0ZGRlMTY3MTE1Y2M4NzRmYmQ5ODE3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZWI4MGE1MjdkZTEwZTIyM2U4MmNkNDg1MWE0MWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3OWU5MzU2YzA1MDAwMzllZjRmNzQ2YmE4MDIyYWRlLnBuZ1wiOyIsImltcG9ydCAnLi4vLi4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcydcblxuaW1wb3J0ICcuL21hbmFnZXJzL1JBRk1hbmFnZXInXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbigoKSA9PiB7XG4gIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbiAgd2luZG93LkdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKClcbn0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICAgIG51bVBvaW50cyxcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gbnVtUG9pbnRzXG4gICAgdGhpcy5jZW50ZXJYID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMuY2VudGVyWSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG4gICAgLy8gY3Vyc29yIHBvc2l0aW9uXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuaXNJbnNpZGVUaW1lID0gMFxuXG4gICAgdGhpcy5zZXRQb2ludHMoKVxuICB9XG5cbiAgc2V0UG9pbnRzKCkge1xuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICAvLyBjcmVhdGUgXCJudW1Qb2ludHNcIiB4IHBvaW50c1xuICAgIGNvbnN0IHNsaWNlID0gKE1hdGguUEkgKiAyKSAvIHRoaXMubnVtUG9pbnRzXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gcmFuZG9tKDAsIE1hdGguUEkgKiAyKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBtYXJnZUFuZ2xlID0gcmFuZG9tKDAsIDAuMjgpIC8vIGkgLyAxLjJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgc3RhcnQgdGltZSBvZiBhbmltYXRpb24gKHdlIGRvbid0IHdhbnQgdGhlIHR3ZWVuIHRvIGdvIGZyb20gMCB0byAxLCBpdCBjYW4gc3RhcnQgZGlyZWN0bHkgZnJvbSAwLjYgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBzdGFydEFuaW0gPSBnZXROb3coKSArIGkgKiByYW5kb20oMCwgdGhpcy5taW5EdXJhdGlvbilcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zdGFydEFuZ2xlICsgaSAqIHNsaWNlICsgbWFyZ2VBbmdsZVxuICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb20odGhpcy5taW5EdXJhdGlvbiwgdGhpcy5tYXhEdXJhdGlvbilcblxuICAgICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRBbmltLFxuICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5ZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgfVxuXG4gICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuXG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgZ2V0T2Zmc2V0TGVmdCB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IGluT3V0U2luZSB9IGZyb20gJy4uL3V0aWxzL2Vhc2UnXG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsXG4gICAgdGhpcy5ia2cgPSBvcHRpb25zLmJrZ1xuICAgIHRoaXMubWFza2VkQmtnID0gb3B0aW9ucy5tYXNrZWRCa2dcbiAgICB0aGlzLml0ZW0gPSBvcHRpb25zLml0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gb3B0aW9ucy5udW1JdGVtc1xuICAgIHRoaXMuZ3JpZENvbHMgPSBvcHRpb25zLmdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBvcHRpb25zLmdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy50aW1lID0gNjAgLy8gaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5zZXRCa2dzKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG5cbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIucG9wVXBNZXNzYWdlKCdTVEFSVCEnLCAnYmxhY2snKVxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zdGFydFRpbWVyKHRoaXMudGltZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgZGl2LnN0eWxlLmxlZnQgPSBgJHt4ICogMTAwfSVgXG4gICAgICBkaXYuc3R5bGUudG9wID0gYCR7eSAqIDEwMH0lYFxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBzZXRCa2dzKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlcywgZml0IEltYWdlIHRvIHNjZW5lXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICAgIC8vIEFkZCBtYXNrZWQgYmtnXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICAvLyBBZGQgXCJmcm9udFwiIGJrZ1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5tYXNrZWRCa2d9KWBcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3dbZXZdKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgZXZlbnRzUkFGKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnUkFGJywgdGhpcy5oYW5kbGVSQUYsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1swXVxuXG4gICAgcGxheWVyLmV2ZW50WCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXG4gICAgcGxheWVyLmV2ZW50WCAtPSB0aGlzLm9mZnNldExlZnRcbiAgICBwbGF5ZXIuZXZlbnRZID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcbiAgICBwbGF5ZXIuZXZlbnRZICs9IHNjcm9sbFlcblxuICAgIHBsYXllci50YXJnZXRYID0gcGxheWVyLmV2ZW50WCAvIHRoaXMud2lkdGggKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIHZpZXdib3ggdW5pdHMgaGVyZVxuICAgIHBsYXllci50YXJnZXRYIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBiZWNhdXNlIHN0YXJ0aW5nIHBvaW50IGlzIHBsYXllci5jZW50ZXJYXG4gICAgcGxheWVyLnRhcmdldFkgPSBwbGF5ZXIuZXZlbnRZIC8gdGhpcy5oZWlnaHQgKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLSB0aGlzLm9mZnNldFRvcFxuICAgIHBsYXllci50YXJnZXRZIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIGUgd2lsbCBiZSBjdXJyZW50IGN1cnNvciB3aXRoIHBvc2l0aW9uc1xuICAgIC8vIGlmIGN1cnNvciBwb3NpdGlvblxuICAgIC8vIENoZWNrIGlmIGN1cnNvciBpdGVtIGlzIGZvdW5kXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzWzBdXG4gICAgY29uc3QgeCA9IHBsYXllci5ldmVudFggLyB0aGlzLndpZHRoXG4gICAgY29uc3QgeSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtLmZvdW5kICYmXG4gICAgICAgIHggPiBpdGVtLnggLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeCA8IGl0ZW0ueCArIHByZWNpc2lvbiAmJlxuICAgICAgICB5ID4gaXRlbS55IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPCBpdGVtLnkgKyBwcmVjaXNpb24pIHtcbiAgICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLnNjb3JlKHBsYXllciwgdGhpcy5pdGVtKVxuICAgICAgICBpdGVtLmZvdW5kID0gdHJ1ZVxuICAgICAgICBpdGVtLmVsLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICAgIGl0ZW0uZGVidWdFbC5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgICAgIHRoaXMubnVtSXRlbUZvdW5kID0gdGhpcy5udW1JdGVtRm91bmQgKyAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtSXRlbUZvdW5kID09PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLmVuZFNjZW5lKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSQUYgPSBlID0+IHtcbiAgICBjb25zdCB7IG5vdyB9ID0gZS5kZXRhaWxcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uICsgKHRoaXMuZGVzdEFjY2VsZXJhdGlvbiAtIHRoaXMuYWNjZWxlcmF0aW9uKSAqIHRoaXMuY29lZkFjY2VsZXJhdGlvblxuXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbMF1cblxuICAgIHBsYXllci54ID0gcGxheWVyLnggKyAocGxheWVyLnRhcmdldFggLSBwbGF5ZXIueCkgKiAwLjFcbiAgICBwbGF5ZXIueSA9IHBsYXllci55ICsgKHBsYXllci50YXJnZXRZIC0gcGxheWVyLnkpICogMC4xXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t5XVxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIGN1cnNvciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJzb3IucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gY3Vyc29yLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBjdXJzb3IgYmFzZWQgb24gbW91c2VcbiAgICAgICAgaWYgKHkgPT09IDApIHtcbiAgICAgICAgICBwb2ludC54ICs9IHBsYXllci54XG4gICAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIGluY3JlYXNpbmcgY3Vyc29yXG4gICAgICAgIC8vIC8vIGlmIGl0ZW0gZm91bmQsIGluY3JlYXNlIGN1cnNvciByYWRpdXNcbiAgICAgICAgLy8gaWYgKHkgPT09IDAgJiYgY3Vyc29yLml0ZW1Gb3VuZCAmJiAhcG9pbnQuaXNJbmNyZWFzZSkge1xuICAgICAgICAvLyAgIGNvbnN0IG5ld01heFJhZGl1cyA9IGN1cnNvci5tYXhSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4TWlkZGxlUmFkaXVzID0gY3Vyc29yLm1heE1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5SYWRpdXMgPSBjdXJzb3IubWluUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pbk1pZGRsZVJhZGl1cyA9IGN1cnNvci5taW5NaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WCA9IGN1cnNvci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblggPSBjdXJzb3IuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWF4WSA9IGN1cnNvci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1pblkgPSBjdXJzb3IuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNaW5SYWRpdXMsIG5ld01pbk1pZGRsZVJhZGl1cylcblxuICAgICAgICAvLyAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAvLyAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG5cbiAgICAgICAgLy8gICBwb2ludC5pc0luY3JlYXNlID0gdHJ1ZVxuICAgICAgICAvLyB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5lbC5zZXRBdHRyaWJ1dGUoJ2QnLCB0aGlzLmNhcmRpbmFsKGN1cnNvci5wb2ludHMpKVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBjaXJjbGUgZGlzdG9yc2lvbiBiYXNlZCBvbiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgcG9pbnRzXG4gIC8vIENhcmRpbmFsIHNwbGluZSAtIGEgdW5pZm9ybSBDYXRtdWxsLVJvbSBzcGxpbmUgd2l0aCBhIHRlbnNpb24gb3B0aW9uXG4gIGNhcmRpbmFsKHBvaW50cywgdGVuc2lvbiA9IDEuMikge1xuICAgIC8vIDEgdGVuc2lvbiBkb2VzIG5vdCBtYWtlIGEgcGVyZmVjdCByb3VuZCwgd2h5P1xuICAgIGNvbnN0IG5iUG9pbnRzID0gcG9pbnRzLmxlbmd0aFxuICAgIGlmIChuYlBvaW50cyA8IDEpIHJldHVybiAnTTAgMCdcblxuICAgIGxldCBwYXRoID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX0gQ2BcbiAgICAvLyB3aGVyZSBNIGlzIHRoZSBzdGFydGluZyBYLFkgY29vcmRzXG4gICAgLy8gQyBpcyB0aGUgMyBuZXh0IHBvaW50cyBjb29yZCBvZiBhIEN1YmljIGJlemllclxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYlBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1soaSAtIDEgKyBuYlBvaW50cykgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldXG4gICAgICBjb25zdCBwMiA9IHBvaW50c1soaSArIDEpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMyA9IHBvaW50c1soaSArIDIpICUgbmJQb2ludHNdXG5cbiAgICAgIGNvbnN0IHgxID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTEgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIGNvbnN0IHgyID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2ICogdGVuc2lvblxuICAgICAgY29uc3QgeTIgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDYgKiB0ZW5zaW9uXG5cbiAgICAgIC8vIGN1YmljIEJlemllclxuICAgICAgLy8geDEgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHgyIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkyIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHAyLnggfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIC8vIHAyLnkgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGVuZCBwb2ludC5cbiAgICAgIHBhdGggKz0gYCAke3gxfSAke3kxfSAke3gyfSAke3kyfSAke3AyLnh9ICR7cDIueX1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGh9emAgLy8gY2xvc2UgcGF0aCB3aXRoIHpcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ldmVudHMoZmFsc2UpXG4gICAgdGhpcy5ldmVudHNSQUYoZmFsc2UpXG4gIH1cbn1cbiIsImNvbnN0IFNlcnZlciA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpLFxuICB3ZWJzb2NrZXQ6IG5ldyBXZWJTb2NrZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpfS9nYW1lYCksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclxuIiwiaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gc2VydmVyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4uL2NvbnN0YW50cy9TZXJ2ZXInXG5cbi8vIGFzc2V0c1xuaW1wb3J0IHNjZW5lMUJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9ia2cxLmpwZydcbmltcG9ydCBzY2VuZTFJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuaW1wb3J0IHNjZW5lMkJrZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmcnXG4vLyBpbXBvcnQgc2NlbmUySXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcblxuY29uc3QgaWQgPSAnZXdwaWpmJ1xuY29uc3QgdG9rZW4gPSAnd2VpamZ3ZXBmaWp3ZnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgU2VydmVyLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLmxpc3RlblNlcnZlclxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGxpc3RlblNlcnZlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5zcGxpdCgnLCcpXG5cbiAgICBpZiAoZGF0YVswXSA9PT0gJ3Rva2VuX3N1Ym1pdCcpIHtcbiAgICAgIGlmIChkYXRhWzFdID09PSBpZCAmJiBkYXRhWzJdID09PSB0b2tlbikge1xuICAgICAgICAvLyBzZW5kXG4gICAgICAgIC8vIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHRfaWQsJHtpZH0sMWApXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYGF1dGhfcmVzdWx0X2lkLCR7aWR9LDBgKVxuICAgICAgICByZXR1cm4gLy8gY2FuIGJlIGFuIGVycm9yIG9iamVjdFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NvbW1hbmQnKSB7XG4gICAgICBpZiAoZGF0YVsxXSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAvLyBUT0RPLCBjYW4gZXZlbiBkbyBcIktpY2sgUGxheWVyIDEgT3V0XCIsIFwiS2ljayBQbGF5ZXIgMiBPdXRcIixcbiAgICAgICAgLy8gXCJLaWNrJ2VtIEJvdGggT3V0XCIgYnV0dG9uc1xuICAgICAgfSBlbHNlIGlmIChkYXRhWzFdID09PSAncmVmcmVzaCcpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjdXJzb3JfbW92ZScpIHtcbiAgICAgIC8vIGRhdGFbMV0gbmVlZHMgdG8gYmUgdGhlIGluZGV4IG9mIHBsYXllciAob3IgaWQpXG4gICAgICAvLyB0aGlzLmN1cnJlbnRTY2VuZS5wbGF5ZXJbZGF0YVsxXV0uZXZlbnRYID0gZGF0YVsxXVxuICAgICAgLy8gdGhpcy5jdXJyZW50U2NlbmUucGxheWVyW2RhdGFbMV1dLmV2ZW50WSA9IGRhdGFbMl1cbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjbGljaycpIHtcbiAgICAgIC8vIGRhdGFbMV0gbmVlZHMgdG8gYmUgdGhlIGluZGV4IG9mIHBsYXllciAob3IgaWQpXG4gICAgICAvLyB0aGlzLmN1cnJlbnRTY2VuZS5wbGF5ZXJbZGF0YVsxXV0uaGFuZGxlQ2xpY2soKVxuICAgIH1cblxuICAgIHRoaXMubnVtYmVycy5pbm5lckhUTUwgPSBldmVudC5kYXRhXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgLy8gc2NvcmVzXG4gICAgdGhpcy5zY2VuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMkJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTJCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTAsXG4gICAgICAgIGdyaWRMaW5lczogMTAsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIHRoaXMuc2V0UGxheWVycygpXG5cbiAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgICAgLy8gYWRkIGltYWdlIHBsYWNob2xkZXJcbiAgICAgIHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIuc3JjID0gc2NlbmUuYmtnXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgICAgLi4uc2NlbmUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBpbWFnZVBsYWNlaG9sZGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19wbGFjZWhvbGRlcicpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgICB0aW1lcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5udW1Qb2ludHMgPSA4XG4gICAgdGhpcy52YldpZHRoID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRXaWR0aFxuICAgIHRoaXMudmJIZWlnaHQgPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldEhlaWdodFxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuXG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbnVtUG9pbnRzOiB0aGlzLm51bVBvaW50cyxcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncmVkJyxcbiAgICAgICdibHVlJyxcbiAgICBdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLmN1cnNvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihvYmosIHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbaV0sIGluZGV4OiBpLCBjb2xvcjogY29sb3JzW2ldIH0pXG4gICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKHByb3BzKSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllci5pbmRleH0sJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWApXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKClcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgZW5kU2NlbmUobWVzc2FnZSA9ICdlbmQgb2Ygc2NlbmUnKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpXG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UobWVzc2FnZSwgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNjZW5lcy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmQgb2YgcGFydHknKVxuICAgICAgU2VydmVyLndlYnNvY2tldC5zZW5kKCdkaXNjb25uZWN0X2FsbF91c2VycycpXG4gICAgfVxuICAgIHRoaXMuZGVzdHJveVNjZW5lKHRoaXMuY3VycmVudFNjZW5lKVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAuLi5zY2VuZSxcbiAgICB9KVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDM2IDYzMlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lciB0LTMyLS1ib2xkXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSBzY29yZSBib2FyZCAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjb3JlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMTo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fY2VudGVyXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidC0zMi0tYm9sZFxcXCI+SXRlbSB0byBmaW5kOjwvcD5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xIDogMDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yIDogMDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==