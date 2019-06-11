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
var tokens = ['123', '456'];

var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    var _this = this;

    _classCallCheck(this, GameManager);

    _defineProperty(this, "listenServer", function (event) {
      var data = event.data.split(',');

      if (data[0] === 'token_submit') {
        // loop into the tokens, if the token correspond, set up the id
        if (data[1] === id && data[2] === token) {
          // send
          _constants_Server__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send("auth_result_id,".concat(id, ",1"));

          _this.init();
        } else {
          _constants_Server__WEBPACK_IMPORTED_MODULE_3__["default"].websocket.send("auth_result_id,".concat(id, ",0"));
          return; // can be an error object
        }
      } else if (data[0] === 'cursor_move') {// data[1] needs to be the index of player (or id)
        // this.players[data[1]].eventX = data[1]
        // this.players[data[1]].eventY = data[2]
      } else if (data[0] === 'click') {// data[1] needs to be the index of player (or id)
        // this.players[data[1]].handleClick()
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
      var colors = ['red', 'blue']; // each player is an object with a key/id

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvU2VydmVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2Nzcz84YjRjIiwid2VicGFjazovLy8uL3Njc3MvZ2FtZS5zY3NzPzZhZGMiLCJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwiXSwibmFtZXMiOlsid2luZG93IiwiR2FtZU1hbmFnZXIiLCJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJ2YldpZHRoIiwiY2VudGVyWSIsInZiSGVpZ2h0IiwibWluUmFkaXVzIiwibWF4UmFkaXVzIiwibWluTWlkZGxlUmFkaXVzIiwibWF4TWlkZGxlUmFkaXVzIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIngiLCJ5IiwidGFyZ2V0WCIsInRhcmdldFkiLCJpc0luc2lkZVRpbWUiLCJzZXRQb2ludHMiLCJwb2ludHMiLCJzbGljZSIsIk1hdGgiLCJQSSIsInN0YXJ0QW5nbGUiLCJyYW5kb20iLCJpIiwibWFyZ2VBbmdsZSIsInN0YXJ0QW5pbSIsImdldE5vdyIsImFuZ2xlIiwiZHVyYXRpb24iLCJwb2ludCIsImNvcyIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicHJlY2lzaW9uIiwiY2xpY2tQcmVjaXNpb24iLCJpdGVtcyIsImxlbmd0aCIsIml0ZW0iLCJmb3VuZCIsInNjb3JlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjdXJzb3IiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJia2ciLCJtYXNrZWRCa2ciLCJudW1JdGVtcyIsImdyaWRDb2xzIiwiZ3JpZExpbmVzIiwidGltZSIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEJrZ3MiLCJpbmNyZWFzZU1heCIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwicGFyZW50Tm9kZSIsImdldE9mZnNldFRvcCIsInNldENsaXBQYXRoSWQiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJwb3BVcE1lc3NhZ2UiLCJzdGFydFRpbWVyIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ0b2tlbnMiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInRva2VuIiwic2VuZCIsImluaXQiLCJudW1iZXJzIiwiaW5uZXJIVE1MIiwib25tZXNzYWdlIiwibGlzdGVuU2VydmVyIiwibWFpbiIsImdhbWVUbXAiLCJzY2VuZXMiLCJzY2VuZTFCa2ciLCJzY2VuZTFJdGVtIiwiZWZmZWN0Iiwic2NlbmUyQmtnIiwic2NvcmVzIiwiY3VycmVudFNjZW5lSW5kZXgiLCJsb2FkQmtnIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRQbGF5ZXJzIiwic2NlbmUiLCJpbWFnZVBsYWNlaG9sZGVyIiwiY3VycmVudFNjZW5lIiwiY3Vyc29ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzYWdlIiwic2NvcmVDZW50ZXJSZWNhcCIsInNjb3JlSXRlbXMiLCJ0aW1lciIsImNvbG9ycyIsIk9iamVjdCIsImFzc2lnbiIsInNlY29uZHMiLCJ0aW1lckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveVNjZW5lIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJ0bXAiLCJmbG9vciIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGswQ0FBazBDLG1CQUFPLENBQUMsd0ZBQTJDLHliIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWM5MGQ5MDVhYzRkZGUxNjcxMTVjYzg3NGZiZDk4MTcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpbmRleCxcbiAgICAgIGNvbG9yLFxuICAgICAgbnVtUG9pbnRzLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5udW1Qb2ludHMgPSBudW1Qb2ludHNcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxcbiAgICB0aGlzLmJrZyA9IG9wdGlvbnMuYmtnXG4gICAgdGhpcy5tYXNrZWRCa2cgPSBvcHRpb25zLm1hc2tlZEJrZ1xuICAgIHRoaXMuaXRlbSA9IG9wdGlvbnMuaXRlbVxuICAgIHRoaXMubnVtSXRlbXMgPSBvcHRpb25zLm51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IG9wdGlvbnMuZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IG9wdGlvbnMuZ3JpZExpbmVzXG4gICAgdGhpcy5pbmRleCA9IG9wdGlvbnMuaW5kZXhcbiAgICB0aGlzLnRpbWUgPSA2MCAvLyBpbiBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbSgpXG4gICAgdGhpcy5zZXQoKVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc3ZnU2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnJyksXG4gICAgICBzdmdNYXNrZWRJbWFnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2ltYWdlJyksXG4gICAgICBzdmdDbGlwUGF0aDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoJyksXG4gICAgICBzdmdDbGlwUGF0aFJlZjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoLXJlZicpLFxuICAgIH1cbiAgfVxuXG4gIHNldCgpIHtcbiAgICB0aGlzLnNldEJrZ3MoKVxuXG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDVcblxuICAgIC8vIHZhbHVlcyBmb3IgbW91c2UgZXZlbnRcbiAgICB0aGlzLmNsaWNrUHJlY2lzaW9uID0gMC4wNVxuICAgIHRoaXMubnVtSXRlbUZvdW5kID0gMFxuXG4gICAgLy8gdmFsdWVzIGZvciBET00gc2NlbmVcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICB0aGlzLm9mZnNldFRvcCA9IGdldE9mZnNldFRvcCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIGlmICh0aGlzLmRvbS5zdmdDbGlwUGF0aCkge1xuICAgICAgdGhpcy5zZXRDbGlwUGF0aElkKClcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkKClcbiAgICB0aGlzLnNldEl0ZW1zKClcblxuICAgIC8vIHN0YXJ0IGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzKHRydWUpXG4gICAgdGhpcy5ldmVudHNSQUYodHJ1ZSlcblxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5wb3BVcE1lc3NhZ2UoJ1NUQVJUIScsICdibGFjaycpXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnN0YXJ0VGltZXIodGhpcy50aW1lKVxuICB9XG5cbiAgc2V0Q2xpcFBhdGhJZCgpIHtcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZCA9IHV1aWR2MSgpXG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCBgdXJsKCMke3RoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkfSlgKVxuICB9XG5cbiAgc2V0R3JpZCgpIHtcbiAgICB0aGlzLnBvc2l0aW9uc0luR3JpZCA9IFtdXG4gICAgbGV0IHhcbiAgICBsZXQgeVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRDb2xzOyBpKyspIHtcbiAgICAgIHggPSBpICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZExpbmVzOyBqKyspIHtcbiAgICAgICAgeSA9IGogKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgICAgY29uc3Qgb2JqID0geyB4LCB5IH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSXRlbXM7IGkrKykge1xuICAgICAgLy8gcmFuZG9taXplXG4gICAgICBjb25zdCByZCA9IHJhbmRvbUludCgwLCB0aGlzLnBvc2l0aW9uc0luR3JpZC5sZW5ndGggLSAxKVxuICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS54IC8gdGhpcy5ncmlkQ29sc1xuICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS55IC8gdGhpcy5ncmlkTGluZXNcbiAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnNwbGljZShyZCwgMSlcblxuICAgICAgLy8gc3ZnIGl0ZW1zXG4gICAgICAvLyBuZWVkIHRvIHByZWNpc2UgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc3ZnIG5hbWVzcGFjZVxuICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ltYWdlJylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLml0ZW0pXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGVsOiBzdmdJbWFnZSxcbiAgICAgICAgZGVidWdFbDogZGl2LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgfVxuICAgICAgLy8gYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLml0ZW1zLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHNldEJrZ3MoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzLCBmaXQgSW1hZ2UgdG8gc2NlbmVcbiAgICB0aGlzLmRvbS5zdmdTY2VuZS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0fWApXG4gICAgLy8gQWRkIG1hc2tlZCBia2dcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5ia2cpXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuICAgIC8vIEFkZCBcImZyb250XCIgYmtnXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLm1hc2tlZEJrZ30pYFxuICB9XG5cbiAgLy8gLy8vLy8vLy9cbiAgLy8gRXZlbnRzXG4gIC8vIC8vLy8vLy8vXG5cbiAgZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzWzBdXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gZSB3aWxsIGJlIGN1cnJlbnQgY3Vyc29yIHdpdGggcG9zaXRpb25zXG4gICAgLy8gaWYgY3Vyc29yIHBvc2l0aW9uXG4gICAgLy8gQ2hlY2sgaWYgY3Vyc29yIGl0ZW0gaXMgZm91bmRcbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbMF1cbiAgICBjb25zdCB4ID0gcGxheWVyLmV2ZW50WCAvIHRoaXMud2lkdGhcbiAgICBjb25zdCB5ID0gcGxheWVyLmV2ZW50WSAvIHRoaXMuaGVpZ2h0XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldXG4gICAgICBpZiAoIWl0ZW0uZm91bmQgJiZcbiAgICAgICAgeCA+IGl0ZW0ueCAtIHByZWNpc2lvbiAmJlxuICAgICAgICB4IDwgaXRlbS54ICsgcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPiBpdGVtLnkgLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA8IGl0ZW0ueSArIHByZWNpc2lvbikge1xuICAgICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc2NvcmUocGxheWVyLCB0aGlzLml0ZW0pXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5udW1JdGVtRm91bmQgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1swXVxuXG4gICAgcGxheWVyLnggPSBwbGF5ZXIueCArIChwbGF5ZXIudGFyZ2V0WCAtIHBsYXllci54KSAqIDAuMVxuICAgIHBsYXllci55ID0gcGxheWVyLnkgKyAocGxheWVyLnRhcmdldFkgLSBwbGF5ZXIueSkgKiAwLjFcblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3ldXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgY3Vyc29yIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnNvci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBjdXJzb3IucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIGN1cnNvciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBpZiAoeSA9PT0gMCkge1xuICAgICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgICBwb2ludC55ICs9IHBsYXllci55XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBjdXJzb3JcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgY3Vyc29yIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBjdXJzb3IuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gY3Vyc29yLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBjdXJzb3IubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IGN1cnNvci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gY3Vyc29yLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gY3Vyc29yLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IGN1cnNvci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gY3Vyc29yLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IGN1cnNvci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwoY3Vyc29yLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiY29uc3QgU2VydmVyID0ge1xuICBob3N0OiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyksXG4gIHdlYnNvY2tldDogbmV3IFdlYlNvY2tldChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJyl9L2dhbWVgKSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyXG4iLCJpbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBzZXJ2ZXJcbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi4vY29uc3RhbnRzL1NlcnZlcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2JrZzEuanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5pbXBvcnQgc2NlbmUyQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbi8vIGltcG9ydCBzY2VuZTJJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuXG5jb25zdCBpZCA9ICdld3BpamYnXG5jb25zdCB0b2tlbnMgPSBbJzEyMycsICc0NTYnXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFNlcnZlci53ZWJzb2NrZXQub25tZXNzYWdlID0gdGhpcy5saXN0ZW5TZXJ2ZXJcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGlmIChkYXRhWzFdID09PSBpZCAmJiBkYXRhWzJdID09PSB0b2tlbikge1xuICAgICAgICAvLyBzZW5kXG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHRfaWQsJHtpZH0sMWApXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYGF1dGhfcmVzdWx0X2lkLCR7aWR9LDBgKVxuICAgICAgICByZXR1cm4gLy8gY2FuIGJlIGFuIGVycm9yIG9iamVjdFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2N1cnNvcl9tb3ZlJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIC8vIHRoaXMucGxheWVyc1tkYXRhWzFdXS5ldmVudFggPSBkYXRhWzFdXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0uZXZlbnRZID0gZGF0YVsyXVxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIC8vIHRoaXMucGxheWVyc1tkYXRhWzFdXS5oYW5kbGVDbGljaygpXG4gICAgfVxuXG4gICAgdGhpcy5udW1iZXJzLmlubmVySFRNTCA9IGV2ZW50LmRhdGFcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA0LFxuICAgICAgICBncmlkTGluZXM6IDQsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgdGhpcy5sb2FkQmtnKClcbiAgfVxuXG4gIGxvYWRCa2coKSB7XG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICAvLyBhZGQgaW1hZ2UgcGxhY2hvbGRlclxuICAgICAgdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5zcmMgPSBzY2VuZS5ia2dcblxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoe1xuICAgICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgICAuLi5zY2VuZSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHRpbWVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVyJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLnZiV2lkdGggPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldFdpZHRoXG4gICAgdGhpcy52YkhlaWdodCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0SGVpZ2h0XG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG5cbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBudW1Qb2ludHM6IHRoaXMubnVtUG9pbnRzLFxuICAgIH1cblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cbiAgICAvLyBlYWNoIHBsYXllciBpcyBhbiBvYmplY3Qgd2l0aCBhIGtleS9pZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uY3Vyc29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKG9iaiwgeyBlbDogdGhpcy5kb20uY3Vyc29yc1tpXSwgaW5kZXg6IGksIGNvbG9yOiBjb2xvcnNbaV0gfSlcbiAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIocHJvcHMpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoZHVyYXRpb24pIHtcbiAgICBsZXQgdGltZXIgPSBkdXJhdGlvblxuICAgIGxldCBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBkdXJhdGlvblxuXG4gICAgdGhpcy50aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyLCAxMClcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kc1xuXG4gICAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBzZWNvbmRzXG5cbiAgICAgIGlmICh0aW1lciA9PT0gMCkge1xuICAgICAgICB0aGlzLmVuZFNjZW5lKCdUSU1FIE9VVCEnKVxuICAgICAgfVxuXG4gICAgICB0aW1lciAtPSAxXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIHNjb3JlKHBsYXllciwgaXRlbSkge1xuICAgIHRoaXMucG9wVXBNZXNzYWdlKCcrMScsIHBsYXllci5jb2xvcikgLy8gKyBjb2xvciBwbGF5ZXJcblxuICAgIHRoaXMuc2NvcmVzW3BsYXllci5pbmRleF0gKz0gMVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvdW5kJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHBsYXllci5pbmRleCkge1xuICAgICAgICB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwW2ldLmlubmVySFRNTCA9IGBQLSR7cGxheWVyLmluZGV4ICsgMX0gOiAke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2NvcmVfX2l0ZW0nKVxuICAgIHRoaXMuZG9tLnNjb3JlSXRlbXNbcGxheWVyLmluZGV4XS5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVyLmluZGV4fSwke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YClcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpdi5yZW1vdmUoKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICBlbmRTY2VuZShtZXNzYWdlID0gJ2VuZCBvZiBzY2VuZScpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbClcbiAgICB0aGlzLnBvcFVwTWVzc2FnZShtZXNzYWdlLCAnYmxhY2snLCB0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZUluZGV4ICsgMSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5sb2coJ2VuZCBvZiBwYXJ0eScpXG4gICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoJ2Rpc2Nvbm5lY3RfYWxsX3VzZXJzJylcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIC4uLnNjZW5lLFxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgc2xpY2VcXFwiIC8+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9zdmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3BsYWNlaG9sZGVyXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9