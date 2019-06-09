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
    this.maxDuration = 900;
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
  function Scene(el, bkg, _item, numItems, gridCols, gridLines, index) {
    var _this = this;

    _classCallCheck(this, Scene);

    _defineProperty(this, "handleMouseMove", function (e) {
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      _this.eventX = e.touches ? e.touches[0].clientX : e.clientX;
      _this.eventX -= _this.offsetLeft;
      _this.eventY = e.touches ? e.touches[0].clientY : e.clientY;
      _this.eventY += scrollY;
      _this.targetX = _this.eventX / _this.width * window.GameManager.vbWidth; // because we're using viewbox units here

      _this.targetX -= window.GameManager.vbWidth / 2; // because starting point is this.centerX

      _this.targetY = _this.eventY / _this.height * window.GameManager.vbHeight - _this.offsetTop;
      _this.targetY -= window.GameManager.vbHeight / 2; // ^These shoudl be linked to a cursor
    });

    _defineProperty(this, "handleClick", function () {
      // console.log(e)
      // e will be current cursor with positions
      // if cursor position
      // Check if cursor item is found
      var precision = _this.clickPrecision;
      var player = window.GameManager.players[0];
      var x = _this.eventX / _this.width;
      var y = _this.eventY / _this.height;

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
      _this.x = _this.x + (_this.targetX - _this.x) * 0.1;
      _this.y = _this.y + (_this.targetY - _this.y) * 0.1; // For each cursor...

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
            point.x += _this.x;
            point.y += _this.y;
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

    this.element = el;
    this.bkg = bkg;
    this.item = _item;
    this.numItems = numItems;
    this.gridCols = gridCols;
    this.gridLines = gridLines;
    this.index = index;
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
      this.dom.svgMaskedImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.bkg);
      this.dom.svgMaskedImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice');
      this.fitSceneToImage(); // assuming we always use a viewbox of 100 x 100

      this.acceleration = 1;
      this.destAcceleration = 1;
      this.coefAcceleration = 0.2;
      this.increaseMax = window.GameManager.vbWidth * 0.07; // items

      this.itemSize = window.GameManager.vbWidth * 0.05; // values for mouse event

      this.x = 0;
      this.y = 0;
      this.targetX = 0;
      this.targetY = 0;
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
    key: "fitSceneToImage",
    value: function fitSceneToImage() {
      // set viewbox values
      this.dom.svgScene.setAttribute('viewBox', "0 0 ".concat(window.GameManager.vbWidth, " ").concat(window.GameManager.vbHeight));
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
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/front-end/images/bkg1.jpg */ "./assets/front-end/images/bkg1.jpg");
/* harmony import */ var _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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

    this.host = window.location.origin.replace(/^http/, 'ws');
    this.websocket = new WebSocket("".concat(this.host, "/game"));
    this.numbers = document.getElementById('numbers');
    this.bubble = document.getElementById('bubble');

    this.websocket.onmessage = function (event) {
      var data = event.data.split(',');

      if (data[0] === 'token_submit') {
        if (data[1] === id && data[2] === token) {
          _this.init();
        } else {
          return; // can be an error object
        }
      } else if (data[0] === 'command') {
        if (data[1] === 'reset') {// TODO, can even do "Kick Player 1 Out", "Kick Player 2 Out",
          // "Kick'em Both Out" buttons
        } else if (data[1] === 'refresh') {
          window.location.reload(false);
        }
      } else if (data[0] === 'control') {
        _this.bubble.style.left = "calc(".concat(data[1], " * 100%)");
        _this.bubble.style.top = "calc(".concat(data[2], " * 100%)");
      }

      _this.numbers.innerHTML = event.data;
    };

    this.init();
  }

  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      this.main = document.querySelector('.main');
      this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a;
      this.element = document.querySelector('[game]'); // scores

      this.scenes = [{
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        numItems: 10,
        gridCols: 10,
        gridLines: 10,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        numItems: 5,
        gridCols: 4,
        gridLines: 4,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
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
        _this2.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_1__["default"](_this2.dom.scene, scene.bkg, scene.item, scene.numItems, scene.gridCols, scene.gridLines, _this2.currentSceneIndex);
      };
    }
  }, {
    key: "dom",
    value: function dom() {
      this.dom = {
        scene: this.element.querySelector('.scene'),
        imagePlaceholder: this.element.querySelector('.scene__placeholder'),
        cursors: this.element.querySelectorAll('.cursor'),
        message: this.element.parentNode.querySelector('.scene__message'),
        scoreCenterRecap: this.element.parentNode.querySelectorAll('.score__center__recap'),
        scoreItems: this.element.parentNode.querySelectorAll('.score__items')
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
      var _this3 = this;

      this.popUpMessage('end of scene', 'black', true);
      setTimeout(function () {
        _this3.updateScene(_this3.currentSceneIndex + 1);
      }, 2000);
    }
  }, {
    key: "updateScene",
    value: function updateScene(index) {
      this.destroyScene(this.currentScene);
      this.currentSceneIndex = index;
      var scene = this.scenes[this.currentSceneIndex];
      this.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_1__["default"](this.dom.scene, scene.bkg, scene.item, scene.numItems, scene.gridCols, scene.gridLines, this.currentSceneIndex);
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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1036 632\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\">\n          <image class=\"scene-svg__image\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid slice\" />\n        </g>\n      </svg>\n      <div class=\"scene__placeholder\"></div>\n    </div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-32--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJ4IiwiY29zIiwieSIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwiYmtnIiwiaXRlbSIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJlIiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsInRhcmdldFgiLCJ3aWR0aCIsInRhcmdldFkiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsInBsYXllciIsInBsYXllcnMiLCJpdGVtcyIsImxlbmd0aCIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiZW5kU2NlbmUiLCJub3ciLCJkZXRhaWwiLCJhY2NlbGVyYXRpb24iLCJkZXN0QWNjZWxlcmF0aW9uIiwiY29lZkFjY2VsZXJhdGlvbiIsImN1cnNvciIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEF0dHJpYnV0ZU5TIiwiZml0U2NlbmVUb0ltYWdlIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwicG9wVXBNZXNzYWdlIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsImFwcGVuZENoaWxkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxlZnQiLCJ0b3AiLCJtZXRob2QiLCJldiIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUkFGIiwidGVuc2lvbiIsIm5iUG9pbnRzIiwicGF0aCIsInAwIiwicDEiLCJwMiIsInAzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ0b2tlbiIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJudW1iZXJzIiwiZ2V0RWxlbWVudEJ5SWQiLCJidWJibGUiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsImluaXQiLCJyZWxvYWQiLCJpbm5lckhUTUwiLCJtYWluIiwiZ2FtZVRtcCIsInNjZW5lcyIsInNjZW5lMUJrZyIsInNjZW5lMUl0ZW0iLCJlZmZlY3QiLCJzY2VuZTJCa2ciLCJzY29yZXMiLCJjdXJyZW50U2NlbmVJbmRleCIsImxvYWRCa2ciLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInNldFBsYXllcnMiLCJzY2VuZSIsImltYWdlUGxhY2Vob2xkZXIiLCJjdXJyZW50U2NlbmUiLCJjdXJzb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lc3NhZ2UiLCJzY29yZUNlbnRlclJlY2FwIiwic2NvcmVJdGVtcyIsImNvbG9ycyIsIk9iamVjdCIsImFzc2lnbiIsImVuZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJ1cGRhdGVTY2VuZSIsImRlc3Ryb3lTY2VuZSIsImRlc3Ryb3kiLCJGdW5jdGlvbiIsIlJBRk1hbmFnZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZWxlbSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHlUb3AiLCJib2R5Iiwib3V0RXhwbyIsIm4iLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwidG1wIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsQ0FBQyxZQUFNO0FBQ0w7QUFDQUEsUUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQUlBLDZEQUFKLEVBQXJCO0FBQ0QsQ0FIRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBRWZDLEVBRmUsR0FNYkQsS0FOYSxDQUVmQyxFQUZlO0FBQUEsUUFHZkMsS0FIZSxHQU1iRixLQU5hLENBR2ZFLEtBSGU7QUFBQSxRQUlmQyxLQUplLEdBTWJILEtBTmEsQ0FJZkcsS0FKZTtBQUFBLFFBS2ZDLFNBTGUsR0FNYkosS0FOYSxDQUtmSSxTQUxlO0FBUWpCLFNBQUtILEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlUixNQUFNLENBQUNDLFdBQVAsQ0FBbUJRLE9BQW5CLEdBQTZCLENBQTVDLENBWmlCLENBWTZCOztBQUM5QyxTQUFLQyxPQUFMLEdBQWVWLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlUsUUFBbkIsR0FBOEIsQ0FBN0MsQ0FiaUIsQ0FhOEI7O0FBQy9DLFNBQUtDLFNBQUwsR0FBaUJaLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlEsT0FBbkIsR0FBNkIsSUFBOUMsQ0FkaUIsQ0Fja0M7O0FBQ25ELFNBQUtJLFNBQUwsR0FBaUIsS0FBS0QsU0FBTCxHQUFpQixLQUFLQSxTQUFMLEdBQWlCLEdBQW5EO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixLQUFLRixTQUFMLEdBQWlCLENBQUMsS0FBS0MsU0FBTCxHQUFpQixLQUFLRCxTQUF2QixJQUFvQyxJQUE1RTtBQUNBLFNBQUtHLGVBQUwsR0FBdUIsS0FBS0gsU0FBTCxHQUFpQixDQUFDLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0QsU0FBdkIsSUFBb0MsSUFBNUU7QUFDQSxTQUFLSSxXQUFMLEdBQW1CLEdBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixHQUFuQjtBQUVBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFFQSxTQUFLQyxTQUFMO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixXQUFLQyxNQUFMLEdBQWMsRUFBZCxDQURVLENBRVY7O0FBQ0EsVUFBTUMsS0FBSyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFYLEdBQWdCLEtBQUtoQixTQUFuQztBQUNBLFdBQUtpQixVQUFMLEdBQWtCQywwREFBTSxDQUFDLENBQUQsRUFBSUgsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBZCxDQUF4Qjs7QUFFQSxXQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS25CLFNBQXpCLEVBQW9DbUIsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFNQyxVQUFVLEdBQUdGLDBEQUFNLENBQUMsQ0FBRCxFQUFJLElBQUosQ0FBekIsQ0FEdUMsQ0FDSjtBQUNuQzs7QUFDQSxZQUFNRyxTQUFTLEdBQUdDLDBEQUFNLEtBQUtILENBQUMsR0FBR0QsMERBQU0sQ0FBQyxDQUFELEVBQUksS0FBS1QsV0FBVCxDQUF2QztBQUNBLFlBQU1jLEtBQUssR0FBRyxLQUFLTixVQUFMLEdBQWtCRSxDQUFDLEdBQUdMLEtBQXRCLEdBQThCTSxVQUE1QztBQUNBLFlBQU1JLFFBQVEsR0FBR04sMERBQU0sQ0FBQyxLQUFLVCxXQUFOLEVBQW1CLEtBQUtDLFdBQXhCLENBQXZCO0FBRUEsWUFBTWUsS0FBSyxHQUFHO0FBQ1pGLGVBQUssRUFBTEEsS0FEWTtBQUVaQyxrQkFBUSxFQUFSQSxRQUZZO0FBR1pILG1CQUFTLEVBQVRBLFNBSFk7QUFJWkssV0FBQyxFQUFFLEtBQUt6QixPQUFMLEdBQWVjLElBQUksQ0FBQ1ksR0FBTCxDQUFTSixLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtiLFNBQU4sRUFBaUIsS0FBS0MsU0FBdEIsQ0FKOUI7QUFLWnNCLFdBQUMsRUFBRSxLQUFLekIsT0FBTCxHQUFlWSxJQUFJLENBQUNjLEdBQUwsQ0FBU04sS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLYixTQUFOLEVBQWlCLEtBQUtDLFNBQXRCLENBTDlCO0FBTVp3QixvQkFBVSxFQUFFLEtBQUs3QixPQUFMLEdBQWVjLElBQUksQ0FBQ1ksR0FBTCxDQUFTSixLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtiLFNBQU4sRUFBaUIsS0FBS0UsZUFBdEIsQ0FOdkM7QUFPWndCLG9CQUFVLEVBQUUsS0FBSzVCLE9BQUwsR0FBZVksSUFBSSxDQUFDYyxHQUFMLENBQVNOLEtBQVQsSUFBa0JMLDBEQUFNLENBQUMsS0FBS2IsU0FBTixFQUFpQixLQUFLRSxlQUF0QixDQVB2QztBQVFaeUIsb0JBQVUsRUFBRSxLQUFLL0IsT0FBTCxHQUFlYyxJQUFJLENBQUNZLEdBQUwsQ0FBU0osS0FBVCxJQUFrQkwsMERBQU0sQ0FBQyxLQUFLVixlQUFOLEVBQXVCLEtBQUtGLFNBQTVCLENBUnZDO0FBU1oyQixvQkFBVSxFQUFFLEtBQUs5QixPQUFMLEdBQWVZLElBQUksQ0FBQ2MsR0FBTCxDQUFTTixLQUFULElBQWtCTCwwREFBTSxDQUFDLEtBQUtWLGVBQU4sRUFBdUIsS0FBS0YsU0FBNUI7QUFUdkMsU0FBZDtBQVlBbUIsYUFBSyxDQUFDUyxNQUFOLEdBQWVULEtBQUssQ0FBQ0MsQ0FBckI7QUFDQUQsYUFBSyxDQUFDVSxNQUFOLEdBQWVWLEtBQUssQ0FBQ0csQ0FBckI7QUFDQUgsYUFBSyxDQUFDVyxLQUFOLEdBQWNYLEtBQUssQ0FBQ08sVUFBcEI7QUFDQVAsYUFBSyxDQUFDWSxLQUFOLEdBQWNaLEtBQUssQ0FBQ1EsVUFBcEI7QUFFQSxhQUFLcEIsTUFBTCxDQUFZeUIsSUFBWixDQUFpQmIsS0FBakI7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCYyxLOzs7QUFDbkIsaUJBQVkxQyxFQUFaLEVBQWdCMkMsR0FBaEIsRUFBcUJDLEtBQXJCLEVBQTJCQyxRQUEzQixFQUFxQ0MsUUFBckMsRUFBK0NDLFNBQS9DLEVBQTBEOUMsS0FBMUQsRUFBaUU7QUFBQTs7QUFBQTs7QUFBQSw2Q0FnSi9DLFVBQUErQyxDQUFDLEVBQUk7QUFDckIsVUFBTUMsT0FBTyxHQUFHckQsTUFBTSxDQUFDcUQsT0FBUCxJQUFrQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUEzRDtBQUNBLFdBQUksQ0FBQ0MsTUFBTCxHQUFjTCxDQUFDLENBQUNNLE9BQUYsR0FBWU4sQ0FBQyxDQUFDTSxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUF6QixHQUFtQ1AsQ0FBQyxDQUFDTyxPQUFuRDtBQUNBLFdBQUksQ0FBQ0YsTUFBTCxJQUFlLEtBQUksQ0FBQ0csVUFBcEI7QUFDQSxXQUFJLENBQUNDLE1BQUwsR0FBY1QsQ0FBQyxDQUFDTSxPQUFGLEdBQVlOLENBQUMsQ0FBQ00sT0FBRixDQUFVLENBQVYsRUFBYUksT0FBekIsR0FBbUNWLENBQUMsQ0FBQ1UsT0FBbkQ7QUFDQSxXQUFJLENBQUNELE1BQUwsSUFBZVIsT0FBZjtBQUVBLFdBQUksQ0FBQ1UsT0FBTCxHQUFlLEtBQUksQ0FBQ04sTUFBTCxHQUFjLEtBQUksQ0FBQ08sS0FBbkIsR0FBMkJoRSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJRLE9BQTdELENBUHFCLENBT2dEOztBQUNyRSxXQUFJLENBQUNzRCxPQUFMLElBQWdCL0QsTUFBTSxDQUFDQyxXQUFQLENBQW1CUSxPQUFuQixHQUE2QixDQUE3QyxDQVJxQixDQVEwQjs7QUFDL0MsV0FBSSxDQUFDd0QsT0FBTCxHQUFlLEtBQUksQ0FBQ0osTUFBTCxHQUFjLEtBQUksQ0FBQ0ssTUFBbkIsR0FBNEJsRSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJVLFFBQS9DLEdBQTBELEtBQUksQ0FBQ3dELFNBQTlFO0FBQ0EsV0FBSSxDQUFDRixPQUFMLElBQWdCakUsTUFBTSxDQUFDQyxXQUFQLENBQW1CVSxRQUFuQixHQUE4QixDQUE5QyxDQVZxQixDQVlyQjtBQUNELEtBN0pnRTs7QUFBQSx5Q0ErSm5ELFlBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFNeUQsU0FBUyxHQUFHLEtBQUksQ0FBQ0MsY0FBdkI7QUFDQSxVQUFNQyxNQUFNLEdBQUd0RSxNQUFNLENBQUNDLFdBQVAsQ0FBbUJzRSxPQUFuQixDQUEyQixDQUEzQixDQUFmO0FBQ0EsVUFBTXRDLENBQUMsR0FBRyxLQUFJLENBQUN3QixNQUFMLEdBQWMsS0FBSSxDQUFDTyxLQUE3QjtBQUNBLFVBQU03QixDQUFDLEdBQUcsS0FBSSxDQUFDMEIsTUFBTCxHQUFjLEtBQUksQ0FBQ0ssTUFBN0I7O0FBRUEsV0FBSyxJQUFJeEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFJLENBQUM4QyxLQUFMLENBQVdDLE1BQS9CLEVBQXVDL0MsQ0FBQyxFQUF4QyxFQUE0QztBQUMxQyxZQUFNc0IsSUFBSSxHQUFHLEtBQUksQ0FBQ3dCLEtBQUwsQ0FBVzlDLENBQVgsQ0FBYjs7QUFDQSxZQUFJLENBQUNzQixJQUFJLENBQUMwQixLQUFOLElBQ0Z6QyxDQUFDLEdBQUdlLElBQUksQ0FBQ2YsQ0FBTCxHQUFTbUMsU0FEWCxJQUVGbkMsQ0FBQyxHQUFHZSxJQUFJLENBQUNmLENBQUwsR0FBU21DLFNBRlgsSUFHRmpDLENBQUMsR0FBR2EsSUFBSSxDQUFDYixDQUFMLEdBQVNpQyxTQUhYLElBSUZqQyxDQUFDLEdBQUdhLElBQUksQ0FBQ2IsQ0FBTCxHQUFTaUMsU0FKZixFQUkwQjtBQUN4QnBFLGdCQUFNLENBQUNDLFdBQVAsQ0FBbUIwRSxLQUFuQixDQUF5QkwsTUFBekIsRUFBaUMsS0FBSSxDQUFDdEIsSUFBdEM7QUFDQUEsY0FBSSxDQUFDMEIsS0FBTCxHQUFhLElBQWI7QUFDQTFCLGNBQUksQ0FBQzVDLEVBQUwsQ0FBUXdFLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixDQUF4QjtBQUNBN0IsY0FBSSxDQUFDOEIsT0FBTCxDQUFhRixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixDQUE3QjtBQUVBLGVBQUksQ0FBQ0UsWUFBTCxHQUFvQixLQUFJLENBQUNBLFlBQUwsR0FBb0IsQ0FBeEM7QUFDRDtBQUNGOztBQUVELFVBQUksS0FBSSxDQUFDQSxZQUFMLEtBQXNCLEtBQUksQ0FBQ1AsS0FBTCxDQUFXQyxNQUFyQyxFQUE2QztBQUMzQ3pFLGNBQU0sQ0FBQ0MsV0FBUCxDQUFtQitFLFFBQW5CO0FBQ0Q7QUFDRixLQTVMZ0U7O0FBQUEsdUNBOExyRCxVQUFBNUIsQ0FBQyxFQUFJO0FBQUEsVUFDUDZCLEdBRE8sR0FDQzdCLENBQUMsQ0FBQzhCLE1BREgsQ0FDUEQsR0FETztBQUVmLFdBQUksQ0FBQ0UsWUFBTCxHQUFvQixLQUFJLENBQUNBLFlBQUwsR0FBb0IsQ0FBQyxLQUFJLENBQUNDLGdCQUFMLEdBQXdCLEtBQUksQ0FBQ0QsWUFBOUIsSUFBOEMsS0FBSSxDQUFDRSxnQkFBM0Y7QUFFQSxXQUFJLENBQUNwRCxDQUFMLEdBQVMsS0FBSSxDQUFDQSxDQUFMLEdBQVMsQ0FBQyxLQUFJLENBQUM4QixPQUFMLEdBQWUsS0FBSSxDQUFDOUIsQ0FBckIsSUFBMEIsR0FBNUM7QUFDQSxXQUFJLENBQUNFLENBQUwsR0FBUyxLQUFJLENBQUNBLENBQUwsR0FBUyxDQUFDLEtBQUksQ0FBQzhCLE9BQUwsR0FBZSxLQUFJLENBQUM5QixDQUFyQixJQUEwQixHQUE1QyxDQUxlLENBT2Y7O0FBQ0EsV0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkMsTUFBTSxDQUFDQyxXQUFQLENBQW1Cc0UsT0FBbkIsQ0FBMkJFLE1BQS9DLEVBQXVEdEMsQ0FBQyxFQUF4RCxFQUE0RDtBQUMxRCxZQUFNbUQsTUFBTSxHQUFHdEYsTUFBTSxDQUFDQyxXQUFQLENBQW1Cc0UsT0FBbkIsQ0FBMkJwQyxDQUEzQixDQUFmLENBRDBELENBRzFEO0FBQ0E7O0FBQ0EsYUFBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEQsTUFBTSxDQUFDbEUsTUFBUCxDQUFjcUQsTUFBbEMsRUFBMEMvQyxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLGNBQU1NLEtBQUssR0FBR3NELE1BQU0sQ0FBQ2xFLE1BQVAsQ0FBY00sQ0FBZCxDQUFkLENBRDZDLENBRzdDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGNBQU02RCxPQUFPLEdBQUcsQ0FBQ04sR0FBRyxHQUFHakQsS0FBSyxDQUFDSixTQUFiLElBQTBCSSxLQUFLLENBQUNELFFBQWhDLEdBQTJDLEtBQUksQ0FBQ29ELFlBQWhFO0FBRUFuRCxlQUFLLENBQUNDLENBQU4sR0FBVUQsS0FBSyxDQUFDUyxNQUFOLEdBQWUsQ0FBQ1QsS0FBSyxDQUFDVyxLQUFOLEdBQWNYLEtBQUssQ0FBQ1MsTUFBckIsSUFBK0IrQyw2REFBUyxDQUFDRCxPQUFELENBQWpFO0FBQ0F2RCxlQUFLLENBQUNHLENBQU4sR0FBVUgsS0FBSyxDQUFDVSxNQUFOLEdBQWUsQ0FBQ1YsS0FBSyxDQUFDWSxLQUFOLEdBQWNaLEtBQUssQ0FBQ1UsTUFBckIsSUFBK0I4Qyw2REFBUyxDQUFDRCxPQUFELENBQWpFOztBQUVBLGNBQUlBLE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBSXZELEtBQUssQ0FBQ3lELFdBQVYsRUFBdUI7QUFDckJ6RCxtQkFBSyxDQUFDUyxNQUFOLEdBQWVULEtBQUssQ0FBQ0MsQ0FBckI7QUFDQUQsbUJBQUssQ0FBQ1UsTUFBTixHQUFlVixLQUFLLENBQUNHLENBQXJCO0FBQ0FILG1CQUFLLENBQUNXLEtBQU4sR0FBY1gsS0FBSyxDQUFDTyxVQUFwQjtBQUNBUCxtQkFBSyxDQUFDWSxLQUFOLEdBQWNaLEtBQUssQ0FBQ1EsVUFBcEI7QUFDQVIsbUJBQUssQ0FBQ3lELFdBQU4sR0FBb0IsS0FBcEI7QUFDQXpELG1CQUFLLENBQUNKLFNBQU4sR0FBa0JDLDBEQUFNLEVBQXhCO0FBQ0QsYUFQRCxNQU9PO0FBQ0xHLG1CQUFLLENBQUNTLE1BQU4sR0FBZVQsS0FBSyxDQUFDQyxDQUFyQjtBQUNBRCxtQkFBSyxDQUFDVSxNQUFOLEdBQWVWLEtBQUssQ0FBQ0csQ0FBckI7QUFDQUgsbUJBQUssQ0FBQ1csS0FBTixHQUFjWCxLQUFLLENBQUNLLFVBQXBCO0FBQ0FMLG1CQUFLLENBQUNZLEtBQU4sR0FBY1osS0FBSyxDQUFDTSxVQUFwQjtBQUNBTixtQkFBSyxDQUFDeUQsV0FBTixHQUFvQixJQUFwQjtBQUNBekQsbUJBQUssQ0FBQ0osU0FBTixHQUFrQkMsMERBQU0sRUFBeEI7QUFDRDtBQUNGLFdBOUI0QyxDQWdDN0M7OztBQUNBLGNBQUlNLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEgsaUJBQUssQ0FBQ0MsQ0FBTixJQUFXLEtBQUksQ0FBQ0EsQ0FBaEI7QUFDQUQsaUJBQUssQ0FBQ0csQ0FBTixJQUFXLEtBQUksQ0FBQ0EsQ0FBaEI7QUFDRCxXQXBDNEMsQ0FzQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUNEOztBQUVEbUQsY0FBTSxDQUFDbEYsRUFBUCxDQUFVc0YsWUFBVixDQUF1QixHQUF2QixFQUE0QixLQUFJLENBQUNDLFFBQUwsQ0FBY0wsTUFBTSxDQUFDbEUsTUFBckIsQ0FBNUI7QUFDRDtBQUNGLEtBelFnRTs7QUFDL0QsU0FBS3dFLE9BQUwsR0FBZXhGLEVBQWY7QUFDQSxTQUFLMkMsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxLQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSzlDLEtBQUwsR0FBYUEsS0FBYjtBQUVBLFNBQUt3RixHQUFMO0FBQ0EsU0FBS0MsR0FBTDtBQUNEOzs7OzBCQUVLO0FBQ0osV0FBS0QsR0FBTCxHQUFXO0FBQ1RFLGdCQUFRLEVBQUUsS0FBS0gsT0FBTCxDQUFhSSxhQUFiLENBQTJCLFlBQTNCLENBREQ7QUFFVEMsc0JBQWMsRUFBRSxLQUFLTCxPQUFMLENBQWFJLGFBQWIsQ0FBMkIsbUJBQTNCLENBRlA7QUFHVEUsbUJBQVcsRUFBRSxLQUFLTixPQUFMLENBQWFJLGFBQWIsQ0FBMkIsc0JBQTNCLENBSEo7QUFJVEcsc0JBQWMsRUFBRSxLQUFLUCxPQUFMLENBQWFJLGFBQWIsQ0FBMkIsMEJBQTNCO0FBSlAsT0FBWDtBQU1EOzs7MEJBRUs7QUFDSixXQUFLSCxHQUFMLENBQVNJLGNBQVQsQ0FBd0JHLGNBQXhCLENBQXVDLDhCQUF2QyxFQUF1RSxNQUF2RSxFQUErRSxLQUFLckQsR0FBcEY7QUFDQSxXQUFLOEMsR0FBTCxDQUFTSSxjQUFULENBQXdCRyxjQUF4QixDQUF1QyxJQUF2QyxFQUE2QyxxQkFBN0MsRUFBb0UsZ0JBQXBFO0FBQ0EsV0FBS0MsZUFBTCxHQUhJLENBS0o7O0FBQ0EsV0FBS2xCLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLEdBQXhCO0FBQ0EsV0FBS2lCLFdBQUwsR0FBbUJ0RyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJRLE9BQW5CLEdBQTZCLElBQWhELENBVEksQ0FXSjs7QUFDQSxXQUFLOEYsUUFBTCxHQUFnQnZHLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQlEsT0FBbkIsR0FBNkIsSUFBN0MsQ0FaSSxDQWNKOztBQUNBLFdBQUt3QixDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUtFLENBQUwsR0FBUyxDQUFUO0FBQ0EsV0FBSzRCLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS0UsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLSSxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsV0FBS1UsWUFBTCxHQUFvQixDQUFwQixDQXBCSSxDQXNCSjs7QUFDQSxXQUFLZixLQUFMLEdBQWEsS0FBSzRCLE9BQUwsQ0FBYVksV0FBMUI7QUFDQSxXQUFLdEMsTUFBTCxHQUFjLEtBQUswQixPQUFMLENBQWFhLFlBQTNCO0FBQ0EsV0FBSzdDLFVBQUwsR0FBa0I4QyxnRUFBYSxDQUFDLEtBQUtkLE9BQUwsQ0FBYWUsVUFBZCxDQUEvQjtBQUNBLFdBQUt4QyxTQUFMLEdBQWlCeUMsK0RBQVksQ0FBQyxLQUFLaEIsT0FBTCxDQUFhZSxVQUFkLENBQTdCOztBQUVBLFVBQUksS0FBS2QsR0FBTCxDQUFTSyxXQUFiLEVBQTBCO0FBQ3hCLGFBQUtXLGFBQUw7QUFDRDs7QUFDRCxXQUFLQyxPQUFMO0FBQ0EsV0FBS0MsUUFBTCxHQWhDSSxDQWtDSjs7QUFDQSxXQUFLQyxNQUFMLENBQVksSUFBWjtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxJQUFmO0FBRUFqSCxZQUFNLENBQUNDLFdBQVAsQ0FBbUJpSCxZQUFuQixDQUFnQyxRQUFoQyxFQUEwQyxPQUExQztBQUNEOzs7b0NBRWU7QUFDZCxXQUFLckIsR0FBTCxDQUFTSyxXQUFULENBQXFCaUIsRUFBckIsR0FBMEJDLDhDQUFNLEVBQWhDO0FBQ0EsV0FBS3ZCLEdBQUwsQ0FBU00sY0FBVCxDQUF3QlQsWUFBeEIsQ0FBcUMsV0FBckMsaUJBQTBELEtBQUtHLEdBQUwsQ0FBU0ssV0FBVCxDQUFxQmlCLEVBQS9FO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtFLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxVQUFJcEYsQ0FBSjtBQUNBLFVBQUlFLENBQUo7O0FBRUEsV0FBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt3QixRQUF6QixFQUFtQ3hCLENBQUMsRUFBcEMsRUFBd0M7QUFDdENPLFNBQUMsR0FBR1AsQ0FBQyxHQUFHLEdBQVIsQ0FEc0MsQ0FDMUI7O0FBQ1osYUFBSyxJQUFJNEYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLbkUsU0FBekIsRUFBb0NtRSxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDbkYsV0FBQyxHQUFHbUYsQ0FBQyxHQUFHLEdBQVIsQ0FEdUMsQ0FDM0I7O0FBQ1osY0FBTUMsR0FBRyxHQUFHO0FBQUV0RixhQUFDLEVBQURBLENBQUY7QUFBS0UsYUFBQyxFQUFEQTtBQUFMLFdBQVo7QUFDQSxlQUFLa0YsZUFBTCxDQUFxQnhFLElBQXJCLENBQTBCMEUsR0FBMUI7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVTtBQUNULFdBQUsvQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxXQUFLLElBQUk5QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt1QixRQUF6QixFQUFtQ3ZCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEM7QUFDQSxZQUFNOEYsRUFBRSxHQUFHQyw2REFBUyxDQUFDLENBQUQsRUFBSSxLQUFLSixlQUFMLENBQXFCNUMsTUFBckIsR0FBOEIsQ0FBbEMsQ0FBcEI7QUFDQSxZQUFNeEMsQ0FBQyxHQUFHLEtBQUtvRixlQUFMLENBQXFCRyxFQUFyQixFQUF5QnZGLENBQXpCLEdBQTZCLEtBQUtpQixRQUE1QztBQUNBLFlBQU1mLENBQUMsR0FBRyxLQUFLa0YsZUFBTCxDQUFxQkcsRUFBckIsRUFBeUJyRixDQUF6QixHQUE2QixLQUFLZ0IsU0FBNUM7QUFDQSxhQUFLa0UsZUFBTCxDQUFxQkssTUFBckIsQ0FBNEJGLEVBQTVCLEVBQWdDLENBQWhDLEVBTHNDLENBT3RDO0FBQ0E7O0FBQ0EsWUFBTUcsUUFBUSxHQUFHckUsUUFBUSxDQUFDc0UsZUFBVCxDQUF5Qiw0QkFBekIsRUFBdUQsT0FBdkQsQ0FBakI7QUFDQUQsZ0JBQVEsQ0FBQ3ZCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsUUFBOUIsRUFBd0MsS0FBS0csUUFBN0M7QUFDQW9CLGdCQUFRLENBQUN2QixjQUFULENBQXdCLElBQXhCLEVBQThCLE9BQTlCLEVBQXVDLEtBQUtHLFFBQTVDO0FBQ0FvQixnQkFBUSxDQUFDdkIsY0FBVCxDQUF3Qiw4QkFBeEIsRUFBd0QsTUFBeEQsRUFBZ0UsS0FBS3BELElBQXJFO0FBQ0EyRSxnQkFBUSxDQUFDdkIsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixZQUFzQ25FLENBQUMsR0FBRyxHQUExQztBQUNBMEYsZ0JBQVEsQ0FBQ3ZCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsWUFBc0NqRSxDQUFDLEdBQUcsR0FBMUM7QUFDQXdGLGdCQUFRLENBQUN2QixjQUFULENBQXdCLElBQXhCLEVBQThCLFdBQTlCLHVCQUF5RCxLQUFLRyxRQUFMLEdBQWdCLENBQXpFLGVBQStFLEtBQUtBLFFBQUwsR0FBZ0IsQ0FBL0Y7QUFDQW9CLGdCQUFRLENBQUN2QixjQUFULENBQXdCLElBQXhCLEVBQThCLHFCQUE5QixFQUFxRCxnQkFBckQ7QUFFQSxhQUFLUCxHQUFMLENBQVNNLGNBQVQsQ0FBd0IwQixXQUF4QixDQUFvQ0YsUUFBcEMsRUFsQnNDLENBb0J0Qzs7QUFDQSxZQUFNRyxHQUFHLEdBQUd4RSxRQUFRLENBQUN5RSxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsV0FBRyxDQUFDRSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsT0FBbEI7QUFDQUgsV0FBRyxDQUFDbEQsS0FBSixDQUFVc0QsSUFBVixhQUFvQmpHLENBQUMsR0FBRyxHQUF4QjtBQUNBNkYsV0FBRyxDQUFDbEQsS0FBSixDQUFVdUQsR0FBVixhQUFtQmhHLENBQUMsR0FBRyxHQUF2QjtBQUNBLGFBQUt5RCxPQUFMLENBQWFpQyxXQUFiLENBQXlCQyxHQUF6QjtBQUVBLFlBQU1QLEdBQUcsR0FBRztBQUNWbkgsWUFBRSxFQUFFdUgsUUFETTtBQUVWN0MsaUJBQU8sRUFBRWdELEdBRkM7QUFHVjdGLFdBQUMsRUFBREEsQ0FIVTtBQUlWRSxXQUFDLEVBQURBLENBSlUsQ0FNWjs7QUFOWSxTQUFaO0FBT0EsYUFBS3FDLEtBQUwsQ0FBVzNCLElBQVgsQ0FBZ0IwRSxHQUFoQjtBQUNEO0FBQ0Y7OztzQ0FFaUI7QUFDaEI7QUFDQSxXQUFLMUIsR0FBTCxDQUFTRSxRQUFULENBQWtCTCxZQUFsQixDQUErQixTQUEvQixnQkFBaUQxRixNQUFNLENBQUNDLFdBQVAsQ0FBbUJRLE9BQXBFLGNBQStFVCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJVLFFBQWxHO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTs7OzsyQkFFT3lILE0sRUFBUTtBQUNiLFVBQU1DLEVBQUUsR0FBR0QsTUFBTSxHQUFHLGtCQUFILEdBQXdCLHFCQUF6QztBQUNBcEksWUFBTSxDQUFDcUksRUFBRCxDQUFOLENBQVcsV0FBWCxFQUF3QixLQUFLQyxlQUE3QixFQUE4QyxLQUE5QztBQUNBdEksWUFBTSxDQUFDcUksRUFBRCxDQUFOLENBQVcsT0FBWCxFQUFvQixLQUFLRSxXQUF6QixFQUFzQyxLQUF0QztBQUNEOzs7OEJBRVNILE0sRUFBUTtBQUNoQixVQUFNQyxFQUFFLEdBQUdELE1BQU0sR0FBRyxrQkFBSCxHQUF3QixxQkFBekM7QUFDQXBJLFlBQU0sQ0FBQ3FJLEVBQUQsQ0FBTixDQUFXLEtBQVgsRUFBa0IsS0FBS0csU0FBdkIsRUFBa0MsS0FBbEM7QUFDRDs7O0FBNkhEO0FBQ0E7NkJBQ1NwSCxNLEVBQXVCO0FBQUEsVUFBZnFILE9BQWUsdUVBQUwsR0FBSztBQUM5QjtBQUNBLFVBQU1DLFFBQVEsR0FBR3RILE1BQU0sQ0FBQ3FELE1BQXhCO0FBQ0EsVUFBSWlFLFFBQVEsR0FBRyxDQUFmLEVBQWtCLE9BQU8sTUFBUDtBQUVsQixVQUFJQyxJQUFJLGVBQVF2SCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVhLENBQWxCLGNBQXVCYixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVlLENBQWpDLE9BQVIsQ0FMOEIsQ0FNOUI7QUFDQTs7QUFFQSxXQUFLLElBQUlULENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnSCxRQUFwQixFQUE4QmhILENBQUMsRUFBL0IsRUFBbUM7QUFDakMsWUFBTWtILEVBQUUsR0FBR3hILE1BQU0sQ0FBQyxDQUFDTSxDQUFDLEdBQUcsQ0FBSixHQUFRZ0gsUUFBVCxJQUFxQkEsUUFBdEIsQ0FBakI7QUFDQSxZQUFNRyxFQUFFLEdBQUd6SCxNQUFNLENBQUNNLENBQUQsQ0FBakI7QUFDQSxZQUFNb0gsRUFBRSxHQUFHMUgsTUFBTSxDQUFDLENBQUNNLENBQUMsR0FBRyxDQUFMLElBQVVnSCxRQUFYLENBQWpCO0FBQ0EsWUFBTUssRUFBRSxHQUFHM0gsTUFBTSxDQUFDLENBQUNNLENBQUMsR0FBRyxDQUFMLElBQVVnSCxRQUFYLENBQWpCO0FBRUEsWUFBTU0sRUFBRSxHQUFHSCxFQUFFLENBQUM1RyxDQUFILEdBQU8sQ0FBQzZHLEVBQUUsQ0FBQzdHLENBQUgsR0FBTzJHLEVBQUUsQ0FBQzNHLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0J3RyxPQUF0QztBQUNBLFlBQU1RLEVBQUUsR0FBR0osRUFBRSxDQUFDMUcsQ0FBSCxHQUFPLENBQUMyRyxFQUFFLENBQUMzRyxDQUFILEdBQU95RyxFQUFFLENBQUN6RyxDQUFYLElBQWdCLENBQWhCLEdBQW9Cc0csT0FBdEM7QUFFQSxZQUFNUyxFQUFFLEdBQUdKLEVBQUUsQ0FBQzdHLENBQUgsR0FBTyxDQUFDOEcsRUFBRSxDQUFDOUcsQ0FBSCxHQUFPNEcsRUFBRSxDQUFDNUcsQ0FBWCxJQUFnQixDQUFoQixHQUFvQndHLE9BQXRDO0FBQ0EsWUFBTVUsRUFBRSxHQUFHTCxFQUFFLENBQUMzRyxDQUFILEdBQU8sQ0FBQzRHLEVBQUUsQ0FBQzVHLENBQUgsR0FBTzBHLEVBQUUsQ0FBQzFHLENBQVgsSUFBZ0IsQ0FBaEIsR0FBb0JzRyxPQUF0QyxDQVZpQyxDQVlqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUUsWUFBSSxlQUFRSyxFQUFSLGNBQWNDLEVBQWQsY0FBb0JDLEVBQXBCLGNBQTBCQyxFQUExQixjQUFnQ0wsRUFBRSxDQUFDN0csQ0FBbkMsY0FBd0M2RyxFQUFFLENBQUMzRyxDQUEzQyxDQUFKO0FBQ0Q7O0FBRUQsdUJBQVV3RyxJQUFWLE9BL0I4QixDQStCWjtBQUNuQjs7OzhCQUVTO0FBQ1IsV0FBSzNCLE1BQUwsQ0FBWSxLQUFaO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEtBQWY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRIO0FBRUE7Q0FHQTs7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUUsRUFBRSxHQUFHLFFBQVg7QUFDQSxJQUFNaUMsS0FBSyxHQUFHLGdCQUFkOztJQUVxQm5KLFc7OztBQUNuQix5QkFBYztBQUFBOztBQUFBOztBQUNaLFNBQUtvSixJQUFMLEdBQVlySixNQUFNLENBQUNzSixRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsT0FBdkIsQ0FBK0IsT0FBL0IsRUFBd0MsSUFBeEMsQ0FBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMsU0FBSixXQUFpQixLQUFLTCxJQUF0QixXQUFqQjtBQUNBLFNBQUtNLE9BQUwsR0FBZXJHLFFBQVEsQ0FBQ3NHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY3ZHLFFBQVEsQ0FBQ3NHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDs7QUFFQSxTQUFLSCxTQUFMLENBQWVLLFNBQWYsR0FBMkIsVUFBQUMsS0FBSyxFQUFJO0FBQ2xDLFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQVgsQ0FBaUIsR0FBakIsQ0FBYjs7QUFFQSxVQUFJRCxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksY0FBaEIsRUFBZ0M7QUFDOUIsWUFBSUEsSUFBSSxDQUFDLENBQUQsQ0FBSixLQUFZN0MsRUFBWixJQUFrQjZDLElBQUksQ0FBQyxDQUFELENBQUosS0FBWVosS0FBbEMsRUFBeUM7QUFDdkMsZUFBSSxDQUFDYyxJQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBREssQ0FDRTtBQUNSO0FBQ0YsT0FORCxNQU1PLElBQUlGLElBQUksQ0FBQyxDQUFELENBQUosS0FBWSxTQUFoQixFQUEyQjtBQUNoQyxZQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksT0FBaEIsRUFBeUIsQ0FDdkI7QUFDQTtBQUNELFNBSEQsTUFHTyxJQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksU0FBaEIsRUFBMkI7QUFDaENoSyxnQkFBTSxDQUFDc0osUUFBUCxDQUFnQmEsTUFBaEIsQ0FBdUIsS0FBdkI7QUFDRDtBQUNGLE9BUE0sTUFPQSxJQUFJSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEtBQVksU0FBaEIsRUFBMkI7QUFDaEMsYUFBSSxDQUFDSCxNQUFMLENBQVlqRixLQUFaLENBQWtCc0QsSUFBbEIsa0JBQWlDOEIsSUFBSSxDQUFDLENBQUQsQ0FBckM7QUFDQSxhQUFJLENBQUNILE1BQUwsQ0FBWWpGLEtBQVosQ0FBa0J1RCxHQUFsQixrQkFBZ0M2QixJQUFJLENBQUMsQ0FBRCxDQUFwQztBQUNEOztBQUVELFdBQUksQ0FBQ0wsT0FBTCxDQUFhUyxTQUFiLEdBQXlCTCxLQUFLLENBQUNDLElBQS9CO0FBQ0QsS0F0QkQ7O0FBd0JBLFNBQUtFLElBQUw7QUFDRDs7OzsyQkFFTTtBQUNMLFdBQUtHLElBQUwsR0FBWS9HLFFBQVEsQ0FBQzBDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUVBLFdBQUtxRSxJQUFMLENBQVVELFNBQVYsR0FBc0JFLHFFQUF0QjtBQUVBLFdBQUsxRSxPQUFMLEdBQWV0QyxRQUFRLENBQUMwQyxhQUFULENBQXVCLFFBQXZCLENBQWYsQ0FMSyxDQU9MOztBQUNBLFdBQUt1RSxNQUFMLEdBQWMsQ0FDWjtBQUNFeEgsV0FBRyxFQUFFeUgsd0VBRFA7QUFFRXhILFlBQUksRUFBRXlILDJFQUZSO0FBR0V4SCxnQkFBUSxFQUFFLENBSFo7QUFJRUMsZ0JBQVEsRUFBRSxDQUpaO0FBS0VDLGlCQUFTLEVBQUUsQ0FMYjtBQU1FdUgsY0FBTSxFQUFFO0FBTlYsT0FEWSxFQVFUO0FBQ0QzSCxXQUFHLEVBQUU0SCw0RUFESjtBQUVEM0gsWUFBSSxFQUFFeUgsMkVBRkw7QUFHRHhILGdCQUFRLEVBQUUsRUFIVDtBQUlEQyxnQkFBUSxFQUFFLEVBSlQ7QUFLREMsaUJBQVMsRUFBRSxFQUxWO0FBTUR1SCxjQUFNLEVBQUU7QUFOUCxPQVJTLEVBZVQ7QUFDRDNILFdBQUcsRUFBRXlILHdFQURKO0FBRUR4SCxZQUFJLEVBQUV5SCwyRUFGTDtBQUdEeEgsZ0JBQVEsRUFBRSxDQUhUO0FBSURDLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxpQkFBUyxFQUFFLENBTFY7QUFNRHVILGNBQU0sRUFBRTtBQU5QLE9BZlMsRUFzQlQ7QUFDRDNILFdBQUcsRUFBRXlILHdFQURKO0FBRUR4SCxZQUFJLEVBQUV5SCwyRUFGTDtBQUdEeEgsZ0JBQVEsRUFBRSxDQUhUO0FBSURDLGdCQUFRLEVBQUUsQ0FKVDtBQUtEQyxpQkFBUyxFQUFFLENBTFY7QUFNRHVILGNBQU0sRUFBRTtBQU5QLE9BdEJTLENBQWQ7QUErQkEsV0FBS25HLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBS3FHLE1BQUwsR0FBYyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQ7QUFDQSxXQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQUVBLFdBQUtDLE9BQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1I7QUFDQSxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsR0FBSixHQUFVLEtBQUtWLE1BQUwsQ0FBWSxLQUFLTSxpQkFBakIsRUFBb0M5SCxHQUE5Qzs7QUFDQWdJLFNBQUcsQ0FBQ0csTUFBSixHQUFhLFlBQU07QUFDakI7QUFDQSxjQUFJLENBQUNyRixHQUFMOztBQUNBLGNBQUksQ0FBQ3NGLFVBQUw7O0FBRUEsWUFBTUMsS0FBSyxHQUFHLE1BQUksQ0FBQ2IsTUFBTCxDQUFZLE1BQUksQ0FBQ00saUJBQWpCLENBQWQsQ0FMaUIsQ0FPakI7O0FBQ0EsY0FBSSxDQUFDaEYsR0FBTCxDQUFTd0YsZ0JBQVQsQ0FBMEJKLEdBQTFCLEdBQWdDRyxLQUFLLENBQUNySSxHQUF0QztBQUVBLGNBQUksQ0FBQ3VJLFlBQUwsR0FBb0IsSUFBSXhJLHlEQUFKLENBQ2xCLE1BQUksQ0FBQytDLEdBQUwsQ0FBU3VGLEtBRFMsRUFFbEJBLEtBQUssQ0FBQ3JJLEdBRlksRUFHbEJxSSxLQUFLLENBQUNwSSxJQUhZLEVBSWxCb0ksS0FBSyxDQUFDbkksUUFKWSxFQUtsQm1JLEtBQUssQ0FBQ2xJLFFBTFksRUFNbEJrSSxLQUFLLENBQUNqSSxTQU5ZLEVBT2xCLE1BQUksQ0FBQzBILGlCQVBhLENBQXBCO0FBU0QsT0FuQkQ7QUFvQkQ7OzswQkFFSztBQUNKLFdBQUtoRixHQUFMLEdBQVc7QUFDVHVGLGFBQUssRUFBRSxLQUFLeEYsT0FBTCxDQUFhSSxhQUFiLENBQTJCLFFBQTNCLENBREU7QUFFVHFGLHdCQUFnQixFQUFFLEtBQUt6RixPQUFMLENBQWFJLGFBQWIsQ0FBMkIscUJBQTNCLENBRlQ7QUFHVHVGLGVBQU8sRUFBRSxLQUFLM0YsT0FBTCxDQUFhNEYsZ0JBQWIsQ0FBOEIsU0FBOUIsQ0FIQTtBQUlUQyxlQUFPLEVBQUUsS0FBSzdGLE9BQUwsQ0FBYWUsVUFBYixDQUF3QlgsYUFBeEIsQ0FBc0MsaUJBQXRDLENBSkE7QUFLVDBGLHdCQUFnQixFQUFFLEtBQUs5RixPQUFMLENBQWFlLFVBQWIsQ0FBd0I2RSxnQkFBeEIsQ0FBeUMsdUJBQXpDLENBTFQ7QUFNVEcsa0JBQVUsRUFBRSxLQUFLL0YsT0FBTCxDQUFhZSxVQUFiLENBQXdCNkUsZ0JBQXhCLENBQXlDLGVBQXpDO0FBTkgsT0FBWDtBQVFEOzs7aUNBRVk7QUFDWCxXQUFLakwsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFdBQUtFLE9BQUwsR0FBZSxLQUFLb0YsR0FBTCxDQUFTd0YsZ0JBQVQsQ0FBMEI3RSxXQUF6QztBQUNBLFdBQUs3RixRQUFMLEdBQWdCLEtBQUtrRixHQUFMLENBQVN3RixnQkFBVCxDQUEwQjVFLFlBQTFDLENBSFcsQ0FJWDs7QUFFQSxVQUFNYyxHQUFHLEdBQUc7QUFDVmhILGlCQUFTLEVBQUUsS0FBS0E7QUFETixPQUFaO0FBSUEsVUFBTXFMLE1BQU0sR0FBRyxDQUNiLEtBRGEsRUFFYixNQUZhLENBQWY7O0FBS0EsV0FBSyxJQUFJbEssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLbUUsR0FBTCxDQUFTMEYsT0FBVCxDQUFpQjlHLE1BQXJDLEVBQTZDL0MsQ0FBQyxFQUE5QyxFQUFrRDtBQUNoRCxZQUFNdkIsS0FBSyxHQUFHMEwsTUFBTSxDQUFDQyxNQUFQLENBQWN2RSxHQUFkLEVBQW1CO0FBQUVuSCxZQUFFLEVBQUUsS0FBS3lGLEdBQUwsQ0FBUzBGLE9BQVQsQ0FBaUI3SixDQUFqQixDQUFOO0FBQTJCckIsZUFBSyxFQUFFcUIsQ0FBbEM7QUFBcUNwQixlQUFLLEVBQUVzTCxNQUFNLENBQUNsSyxDQUFEO0FBQWxELFNBQW5CLENBQWQ7QUFDQSxhQUFLNkMsT0FBTCxDQUFhMUIsSUFBYixDQUFrQixJQUFJM0MsMERBQUosQ0FBV0MsS0FBWCxDQUFsQjtBQUNEO0FBQ0Y7OzswQkFFS21FLE0sRUFBUXRCLEksRUFBTTtBQUNsQixXQUFLa0UsWUFBTCxDQUFrQixJQUFsQixFQUF3QjVDLE1BQU0sQ0FBQ2hFLEtBQS9CLEVBRGtCLENBQ29COztBQUV0QyxXQUFLc0ssTUFBTCxDQUFZdEcsTUFBTSxDQUFDakUsS0FBbkIsS0FBNkIsQ0FBN0I7QUFDQSxXQUFLdUYsT0FBTCxDQUFhb0MsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsWUFBM0I7O0FBRUEsV0FBSyxJQUFJdkcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLbUUsR0FBTCxDQUFTNkYsZ0JBQVQsQ0FBMEJqSCxNQUE5QyxFQUFzRC9DLENBQUMsRUFBdkQsRUFBMkQ7QUFDekQsWUFBSUEsQ0FBQyxLQUFLNEMsTUFBTSxDQUFDakUsS0FBakIsRUFBd0I7QUFDdEIsZUFBS3dGLEdBQUwsQ0FBUzZGLGdCQUFULENBQTBCaEssQ0FBMUIsRUFBNkIwSSxTQUE3QixlQUE4QzlGLE1BQU0sQ0FBQ2pFLEtBQVAsR0FBZSxDQUE3RCxnQkFBb0UsS0FBS3VLLE1BQUwsQ0FBWXRHLE1BQU0sQ0FBQ2pFLEtBQW5CLENBQXBFO0FBQ0Q7QUFDRjs7QUFFRCxVQUFNMEssR0FBRyxHQUFHekgsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FnRCxTQUFHLENBQUNFLEdBQUosR0FBVWpJLElBQVY7QUFDQStILFNBQUcsQ0FBQy9DLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixhQUFsQjtBQUNBLFdBQUtwQyxHQUFMLENBQVM4RixVQUFULENBQW9CckgsTUFBTSxDQUFDakUsS0FBM0IsRUFBa0N3SCxXQUFsQyxDQUE4Q2tELEdBQTlDO0FBQ0Q7OztpQ0FFWVUsTyxFQUFzQztBQUFBLFVBQTdCbkwsS0FBNkIsdUVBQXJCLE1BQXFCO0FBQUEsVUFBYnlMLEdBQWEsdUVBQVAsS0FBTztBQUNqRCxVQUFNakUsR0FBRyxHQUFHeEUsUUFBUSxDQUFDeUUsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELFNBQUcsQ0FBQ0UsU0FBSixDQUFjQyxHQUFkLENBQWtCLFNBQWxCLEVBQTZCLGFBQTdCLG1CQUFzRDNILEtBQXREOztBQUNBLFVBQUl5TCxHQUFKLEVBQVM7QUFDUGpFLFdBQUcsQ0FBQ0UsU0FBSixDQUFjQyxHQUFkLENBQWtCLGFBQWxCO0FBQ0Q7O0FBQ0RILFNBQUcsQ0FBQ3NDLFNBQUosR0FBZ0JxQixPQUFoQjtBQUNBLFdBQUs1RixHQUFMLENBQVN1RixLQUFULENBQWV2RCxXQUFmLENBQTJCQyxHQUEzQjtBQUVBa0UsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZsRSxXQUFHLENBQUNtRSxNQUFKO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOzs7K0JBRVU7QUFBQTs7QUFDVCxXQUFLL0UsWUFBTCxDQUFrQixjQUFsQixFQUFrQyxPQUFsQyxFQUEyQyxJQUEzQztBQUNBOEUsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSSxDQUFDRSxXQUFMLENBQWlCLE1BQUksQ0FBQ3JCLGlCQUFMLEdBQXlCLENBQTFDO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOzs7Z0NBRVd4SyxLLEVBQU87QUFDakIsV0FBSzhMLFlBQUwsQ0FBa0IsS0FBS2IsWUFBdkI7QUFFQSxXQUFLVCxpQkFBTCxHQUF5QnhLLEtBQXpCO0FBQ0EsVUFBTStLLEtBQUssR0FBRyxLQUFLYixNQUFMLENBQVksS0FBS00saUJBQWpCLENBQWQ7QUFFQSxXQUFLUyxZQUFMLEdBQW9CLElBQUl4SSx5REFBSixDQUNsQixLQUFLK0MsR0FBTCxDQUFTdUYsS0FEUyxFQUVsQkEsS0FBSyxDQUFDckksR0FGWSxFQUdsQnFJLEtBQUssQ0FBQ3BJLElBSFksRUFJbEJvSSxLQUFLLENBQUNuSSxRQUpZLEVBS2xCbUksS0FBSyxDQUFDbEksUUFMWSxFQU1sQmtJLEtBQUssQ0FBQ2pJLFNBTlksRUFPbEIsS0FBSzBILGlCQVBhLENBQXBCO0FBU0Q7OztpQ0FFWU8sSyxFQUFPO0FBQ2xCO0FBQ0EsVUFBSUEsS0FBSyxDQUFDZ0IsT0FBTixZQUF5QkMsUUFBN0IsRUFBdUM7QUFDckNqQixhQUFLLENBQUNnQixPQUFOO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5IOztJQUVNRSxVLEdBQ0osc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxxQ0FJRixVQUFBckgsR0FBRyxFQUFJO0FBQ2pCO0FBQ0EsU0FBSSxDQUFDc0gsR0FBTCxHQUFXQyxxQkFBcUIsQ0FBQyxLQUFJLENBQUNoRSxTQUFOLENBQWhDO0FBQ0F4SSxVQUFNLENBQUN5TSxhQUFQLENBQXFCQyx3RUFBaUIsQ0FBQyxLQUFELEVBQVE7QUFBRXpILFNBQUcsRUFBSEE7QUFBRixLQUFSLENBQXRDO0FBQ0QsR0FSYTs7QUFBQSxtQ0FVSixZQUFNO0FBQ2QsU0FBSSxDQUFDdUQsU0FBTCxDQUFlLENBQWY7QUFDRCxHQVphOztBQUFBLGtDQWNMLFlBQU07QUFDYm1FLHdCQUFvQixDQUFDLEtBQUksQ0FBQ0osR0FBTixDQUFwQjtBQUNELEdBaEJhOztBQUNaLE9BQUsvRCxTQUFMLENBQWUsQ0FBZjtBQUNELEM7O0FBaUJZLG1FQUFJOEQsVUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBLFNBQVNJLGlCQUFULENBQTJCRSxTQUEzQixFQUFpRDtBQUFBLE1BQVg1QyxJQUFXLHVFQUFKLEVBQUk7QUFDL0MsTUFBTUQsS0FBSyxHQUFHLElBQUk4QyxXQUFKLENBQWdCRCxTQUFoQixFQUEyQjtBQUN2QzFILFVBQU0sRUFBRThFO0FBRCtCLEdBQTNCLENBQWQ7QUFHQSxTQUFPRCxLQUFQO0FBQ0Q7O0FBRWMyQyxnRkFBZixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBTyxTQUFTOUYsWUFBVCxDQUFzQmtHLElBQXRCLEVBQTRCO0FBQUU7QUFFbkMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UscUJBQUwsRUFBZjtBQUNBLE1BQU1DLE9BQU8sR0FBR2pOLE1BQU0sQ0FBQ3FELE9BQVAsSUFBa0JDLFFBQVEsQ0FBQzRKLElBQVQsQ0FBYzFKLFNBQWhEO0FBRUEsU0FBT3VKLE1BQU0sQ0FBQzVFLEdBQVAsR0FBYThFLE9BQXBCO0FBQ0Q7QUFFTSxTQUFTdkcsYUFBVCxDQUF1Qm9HLElBQXZCLEVBQTZCO0FBQUU7QUFFcEMsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UscUJBQUwsRUFBZjtBQUVBLFNBQU9ELE1BQU0sQ0FBQzdFLElBQWQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQU8sU0FBU2lGLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ3pCLE1BQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWCxXQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxhQUFLLENBQUwsRUFBVyxDQUFDLEVBQUQsR0FBTUEsQ0FBakIsQ0FBUDtBQUNEO0FBRU0sU0FBUzVILFNBQVQsQ0FBbUI0SCxDQUFuQixFQUFzQjtBQUM1QixTQUFPLE1BQU0sSUFBSTlMLElBQUksQ0FBQ1ksR0FBTCxDQUFTWixJQUFJLENBQUNDLEVBQUwsR0FBVTZMLENBQW5CLENBQVYsQ0FBUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFFdEMsU0FBT2xNLElBQUksQ0FBQ2lNLEdBQUwsQ0FBU2pNLElBQUksQ0FBQ2tNLEdBQUwsQ0FBU0YsS0FBVCxFQUFnQkMsR0FBaEIsQ0FBVCxFQUErQkMsR0FBL0IsQ0FBUDtBQUNBO0FBRU0sU0FBUy9MLE1BQVQsQ0FBZ0I4TCxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDL0I7QUFDQSxNQUFJRCxHQUFHLEdBQUdDLEdBQVYsRUFBZTtBQUNiLFFBQU1DLEdBQUcsR0FBR0YsR0FBWjtBQUNBQSxPQUFHLEdBQUdDLEdBQU47QUFDQUEsT0FBRyxHQUFHQyxHQUFOO0FBQ0Q7O0FBQ0QsU0FBT0YsR0FBRyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsR0FBUCxJQUFjak0sSUFBSSxDQUFDRyxNQUFMLEVBQTNCO0FBQ0Q7QUFFTSxTQUFTZ0csU0FBVCxDQUFtQjhGLEdBQW5CLEVBQXdCQyxHQUF4QixFQUE2QjtBQUVuQyxTQUFPbE0sSUFBSSxDQUFDb00sS0FBTCxDQUFXcE0sSUFBSSxDQUFDRyxNQUFMLE1BQWlCK0wsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBckQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFPLFNBQVMxTCxNQUFULEdBQWtCO0FBQ3ZCLFNBQU8sU0FBUzdCLE1BQU0sQ0FBQzJOLFdBQWhCLEdBQThCQSxXQUFXLENBQUMxSSxHQUFaLEVBQTlCLEdBQWtELElBQUkySSxJQUFKLEdBQVdDLE9BQVgsRUFBekQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtDQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1R0EsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc3hDQUFzeEMsbUJBQU8sQ0FBQyx3RkFBMkMseWIiLCJmaWxlIjoianMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2dhbWUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzkwZDkwNWFjNGRkZTE2NzExNWNjODc0ZmJkOTgxNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2ViODBhNTI3ZGUxMGUyMjNlODJjZDQ4NTFhNDFkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzllOTM1NmMwNTAwMDM5ZWY0Zjc0NmJhODAyMmFkZS5wbmdcIjsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MnXG5cbmltcG9ydCAnLi9tYW5hZ2Vycy9SQUZNYW5hZ2VyJ1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvR2FtZU1hbmFnZXInXG5cbi8vIG5vdCB3b3JraW5nIGFueW1vcmUgZm9yIHNvbWUgcmVhc29uXG4oKCkgPT4ge1xuICAvLyBpbXBvcnQgR2FtZU1hbmFuZ2VyIHdoZW4gRE9NIGlzIHJlYWR5XG4gIHdpbmRvdy5HYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpXG59KSgpXG4iLCJpbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgICBudW1Qb2ludHMsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IG51bVBvaW50c1xuICAgIHRoaXMuY2VudGVyWCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMubWluUmFkaXVzID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1IC8vIDcwJSBvZiBmdWxsIHNpemUgLyAyIC0tPiBzaG91bGQgYmUgYmFzZWQgb24gd2lkdGggdmlld2JveFxuICAgIHRoaXMubWF4UmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLm1pblJhZGl1cyAqIDAuMlxuICAgIHRoaXMubWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjQ1XG4gICAgdGhpcy5tYXhNaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNTVcbiAgICB0aGlzLm1pbkR1cmF0aW9uID0gNzAwXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDkwMFxuXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZWwsIGJrZywgaXRlbSwgbnVtSXRlbXMsIGdyaWRDb2xzLCBncmlkTGluZXMsIGluZGV4KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxcbiAgICB0aGlzLmJrZyA9IGJrZ1xuICAgIHRoaXMuaXRlbSA9IGl0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gbnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IGdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICB0aGlzLmZpdFNjZW5lVG9JbWFnZSgpXG5cbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmRlc3RBY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5jb2VmQWNjZWxlcmF0aW9uID0gMC4yXG4gICAgdGhpcy5pbmNyZWFzZU1heCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wN1xuXG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnBvcFVwTWVzc2FnZSgnU1RBUlQhJywgJ2JsYWNrJylcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgZGl2LnN0eWxlLmxlZnQgPSBgJHt4ICogMTAwfSVgXG4gICAgICBkaXYuc3R5bGUudG9wID0gYCR7eSAqIDEwMH0lYFxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBmaXRTY2VuZVRvSW1hZ2UoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICB9XG5cbiAgLy8gLy8vLy8vLy9cbiAgLy8gRXZlbnRzXG4gIC8vIC8vLy8vLy8vXG5cbiAgZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIHRoaXMuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICB0aGlzLmV2ZW50WCAtPSB0aGlzLm9mZnNldExlZnRcbiAgICB0aGlzLmV2ZW50WSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgdGhpcy5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgdGhpcy50YXJnZXRYID0gdGhpcy5ldmVudFggLyB0aGlzLndpZHRoICogd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICB0aGlzLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgdGhpcy5jZW50ZXJYXG4gICAgdGhpcy50YXJnZXRZID0gdGhpcy5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgdGhpcy50YXJnZXRZIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIGUgd2lsbCBiZSBjdXJyZW50IGN1cnNvciB3aXRoIHBvc2l0aW9uc1xuICAgIC8vIGlmIGN1cnNvciBwb3NpdGlvblxuICAgIC8vIENoZWNrIGlmIGN1cnNvciBpdGVtIGlzIGZvdW5kXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzWzBdXG4gICAgY29uc3QgeCA9IHRoaXMuZXZlbnRYIC8gdGhpcy53aWR0aFxuICAgIGNvbnN0IHkgPSB0aGlzLmV2ZW50WSAvIHRoaXMuaGVpZ2h0XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldXG4gICAgICBpZiAoIWl0ZW0uZm91bmQgJiZcbiAgICAgICAgeCA+IGl0ZW0ueCAtIHByZWNpc2lvbiAmJlxuICAgICAgICB4IDwgaXRlbS54ICsgcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPiBpdGVtLnkgLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA8IGl0ZW0ueSArIHByZWNpc2lvbikge1xuICAgICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc2NvcmUocGxheWVyLCB0aGlzLml0ZW0pXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5udW1JdGVtRm91bmQgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICB0aGlzLnggPSB0aGlzLnggKyAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIDAuMVxuICAgIHRoaXMueSA9IHRoaXMueSArICh0aGlzLnRhcmdldFkgLSB0aGlzLnkpICogMC4xXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t5XVxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIGN1cnNvciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJzb3IucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gY3Vyc29yLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBjdXJzb3IgYmFzZWQgb24gbW91c2VcbiAgICAgICAgaWYgKHkgPT09IDApIHtcbiAgICAgICAgICBwb2ludC54ICs9IHRoaXMueFxuICAgICAgICAgIHBvaW50LnkgKz0gdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBjdXJzb3JcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgY3Vyc29yIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBjdXJzb3IuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gY3Vyc29yLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBjdXJzb3IubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IGN1cnNvci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gY3Vyc29yLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gY3Vyc29yLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IGN1cnNvci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gY3Vyc29yLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IGN1cnNvci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwoY3Vyc29yLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2JrZzEuanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5pbXBvcnQgc2NlbmUyQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbi8vIGltcG9ydCBzY2VuZTJJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuXG5jb25zdCBpZCA9ICdld3BpamYnXG5jb25zdCB0b2tlbiA9ICd3ZWlqZndlcGZpandmcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJylcbiAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5ob3N0fS9nYW1lYClcbiAgICB0aGlzLm51bWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVycycpXG4gICAgdGhpcy5idWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlJylcblxuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnNwbGl0KCcsJylcblxuICAgICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAgIGlmIChkYXRhWzFdID09PSBpZCAmJiBkYXRhWzJdID09PSB0b2tlbikge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8vIGNhbiBiZSBhbiBlcnJvciBvYmplY3RcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY29tbWFuZCcpIHtcbiAgICAgICAgaWYgKGRhdGFbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICAvLyBUT0RPLCBjYW4gZXZlbiBkbyBcIktpY2sgUGxheWVyIDEgT3V0XCIsIFwiS2ljayBQbGF5ZXIgMiBPdXRcIixcbiAgICAgICAgICAvLyBcIktpY2snZW0gQm90aCBPdXRcIiBidXR0b25zXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVsxXSA9PT0gJ3JlZnJlc2gnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY29udHJvbCcpIHtcbiAgICAgICAgdGhpcy5idWJibGUuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZGF0YVsxXX0gKiAxMDAlKWBcbiAgICAgICAgdGhpcy5idWJibGUuc3R5bGUudG9wID0gYGNhbGMoJHtkYXRhWzJdfSAqIDEwMCUpYFxuICAgICAgfVxuXG4gICAgICB0aGlzLm51bWJlcnMuaW5uZXJIVE1MID0gZXZlbnQuZGF0YVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgLy8gc2NvcmVzXG4gICAgdGhpcy5zY2VuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogMTAsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIHRoaXMuc2V0UGxheWVycygpXG5cbiAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgICAgLy8gYWRkIGltYWdlIHBsYWNob2xkZXJcbiAgICAgIHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIuc3JjID0gc2NlbmUuYmtnXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKFxuICAgICAgICB0aGlzLmRvbS5zY2VuZSxcbiAgICAgICAgc2NlbmUuYmtnLFxuICAgICAgICBzY2VuZS5pdGVtLFxuICAgICAgICBzY2VuZS5udW1JdGVtcyxcbiAgICAgICAgc2NlbmUuZ3JpZENvbHMsXG4gICAgICAgIHNjZW5lLmdyaWRMaW5lcyxcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpLFxuICAgICAgaW1hZ2VQbGFjZWhvbGRlcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fcGxhY2Vob2xkZXInKSxcbiAgICAgIGN1cnNvcnM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3Vyc29yJyksXG4gICAgICBtZXNzYWdlOiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9fY2VudGVyX19yZWNhcCcpLFxuICAgICAgc2NvcmVJdGVtczogdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19pdGVtcycpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5udW1Qb2ludHMgPSA4XG4gICAgdGhpcy52YldpZHRoID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRXaWR0aFxuICAgIHRoaXMudmJIZWlnaHQgPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldEhlaWdodFxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuXG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgbnVtUG9pbnRzOiB0aGlzLm51bVBvaW50cyxcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncmVkJyxcbiAgICAgICdibHVlJyxcbiAgICBdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLmN1cnNvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihvYmosIHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbaV0sIGluZGV4OiBpLCBjb2xvcjogY29sb3JzW2ldIH0pXG4gICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKHByb3BzKSlcbiAgICB9XG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuICB9XG5cbiAgcG9wVXBNZXNzYWdlKG1lc3NhZ2UsIGNvbG9yID0gJ2dyYXknLCBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnLCAndC0xMjAtLWJvbGQnLCBgY29sb3ItLSR7Y29sb3J9YClcbiAgICBpZiAoZW5kKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1lbmQnKVxuICAgIH1cbiAgICBkaXYuaW5uZXJIVE1MID0gbWVzc2FnZVxuICAgIHRoaXMuZG9tLnNjZW5lLmFwcGVuZENoaWxkKGRpdilcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGl2LnJlbW92ZSgpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGVuZFNjZW5lKCkge1xuICAgIHRoaXMucG9wVXBNZXNzYWdlKCdlbmQgb2Ygc2NlbmUnLCAnYmxhY2snLCB0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZUluZGV4ICsgMSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZSlcblxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSBpbmRleFxuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKFxuICAgICAgdGhpcy5kb20uc2NlbmUsXG4gICAgICBzY2VuZS5ia2csXG4gICAgICBzY2VuZS5pdGVtLFxuICAgICAgc2NlbmUubnVtSXRlbXMsXG4gICAgICBzY2VuZS5ncmlkQ29scyxcbiAgICAgIHNjZW5lLmdyaWRMaW5lcyxcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgKVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDM2IDYzMlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9