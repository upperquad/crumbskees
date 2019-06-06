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
// (() => {
//   // import GameMananger when DOM is ready
//   import('./managers/GameManager')
// })()

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
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/front-end/utils/dom.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math */ "./js/front-end/utils/math.js");
/* harmony import */ var _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../managers/GameManager */ "./js/front-end/managers/GameManager.js");
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
    this.centerX = _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__["default"].vbWidth / 2; // equal to svg viewbox / 2

    this.centerY = _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__["default"].vbHeight / 2; // equal to svg viewbox / 2

    this.minRadius = _managers_GameManager__WEBPACK_IMPORTED_MODULE_2__["default"].vbWidth * 0.05; // 70% of full size / 2 --> should be based on width viewbox

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

        var startAnim = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getNow"])() + i * Object(_utils_math__WEBPACK_IMPORTED_MODULE_1__["random"])(0, this.minDuration);
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
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/front-end/utils/dom.js");
/* harmony import */ var _utils_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ease */ "./js/front-end/utils/ease.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math */ "./js/front-end/utils/math.js");
/* harmony import */ var _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../managers/GameManager */ "./js/front-end/managers/GameManager.js");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // assets



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
      _this.targetX = _this.eventX / _this.width * _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbWidth; // because we're using viewbox units here

      _this.targetX -= _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbWidth / 2; // because starting point is this.centerX

      _this.targetY = _this.eventY / _this.height * _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbHeight - _this.offsetTop;
      _this.targetY -= _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbHeight / 2; // ^These shoudl be linked to a cursor
    });

    _defineProperty(this, "handleClick", function () {
      // console.log(e)
      // e will be current cursor with positions
      // if cursor position
      // Check if cursor item is found
      var precision = _this.clickPrecision;
      var player = _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].players[0];
      var x = _this.eventX / _this.width;
      var y = _this.eventY / _this.height;

      for (var i = 0; i < _this.items.length; i++) {
        var item = _this.items[i];

        if (!item.found && x > item.x - precision && x < item.x + precision && y > item.y - precision && y < item.y + precision) {
          _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].score(player, _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a);
          item.found = true;
          item.el.style.opacity = 0;
          item.debugEl.style.opacity = 0;
          _this.numItemFound = _this.numItemFound + 1;
        }
      }

      if (_this.numItemFound === _this.items.length) {
        _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].endScene();
      }
    });

    _defineProperty(this, "handleRAF", function (e) {
      var now = e.detail.now;
      _this.acceleration = _this.acceleration + (_this.destAcceleration - _this.acceleration) * _this.coefAcceleration;
      _this.x = _this.x + (_this.targetX - _this.x) * 0.1;
      _this.y = _this.y + (_this.targetY - _this.y) * 0.1; // For each cursor...

      for (var y = 0; y < _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].players.length; y++) {
        var cursor = _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].players[y]; // For each points of the cursor (organic shape)
        // Create organic shape / Tween all points

        for (var i = 0; i < cursor.points.length; i++) {
          var point = cursor.points[i]; // From scratch tween:
          // percent is going from 0 to 1 in X seconds where X is the "duration variable".
          // Each points starting value is going to his destination value in X seconds
          // then I use easing functions to modify the value curve through time.

          var percent = (now - point.startAnim) / point.duration * _this.acceleration;
          point.x = point.startX + (point.destX - point.startX) * Object(_utils_ease__WEBPACK_IMPORTED_MODULE_2__["inOutSine"])(percent);
          point.y = point.startY + (point.destY - point.startY) * Object(_utils_ease__WEBPACK_IMPORTED_MODULE_2__["inOutSine"])(percent);

          if (percent >= 1) {
            // end of animation,
            // restart animation by going back
            if (point.reverseAnim) {
              point.startX = point.x;
              point.startY = point.y;
              point.destX = point.targetMaxX;
              point.destY = point.targetMaxY;
              point.reverseAnim = false;
              point.startAnim = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getNow"])();
            } else {
              point.startX = point.x;
              point.startY = point.y;
              point.destX = point.targetMinX;
              point.destY = point.targetMinY;
              point.reverseAnim = true;
              point.startAnim = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getNow"])();
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
        svgClipPath: this.element.querySelector('.scene-svg__clippath'),
        svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref')
      };
    }
  }, {
    key: "set",
    value: function set() {
      this.fitSceneToImage(); // assuming we always use a viewbox of 100 x 100

      this.acceleration = 1;
      this.destAcceleration = 1;
      this.coefAcceleration = 0.2;
      this.increaseMax = _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbWidth * 0.07; // items

      this.itemSize = _managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbWidth * 0.05; // values for mouse event

      this.x = 0;
      this.y = 0;
      this.targetX = 0;
      this.targetY = 0;
      this.clickPrecision = 0.05;
      this.numItemFound = 0; // values for DOM scene

      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.offsetLeft = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getOffsetLeft"])(this.element.parentNode);
      this.offsetTop = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getOffsetTop"])(this.element.parentNode);

      if (this.dom.svgClipPath) {
        this.setClipPathId();
      }

      this.setGrid();
      this.setItems(); // start events

      this.events(true);
      this.eventsRAF(true);
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
        var rd = Object(_utils_math__WEBPACK_IMPORTED_MODULE_3__["randomInt"])(0, this.positionsInGrid.length - 1);
        var x = this.positionsInGrid[rd].x / this.gridCols;
        var y = this.positionsInGrid[rd].y / this.gridLines;
        this.positionsInGrid.splice(rd, 1); // svg items
        // need to precise that we're using the svg namespace

        var svgImage = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        svgImage.setAttributeNS(null, 'height', this.itemSize);
        svgImage.setAttributeNS(null, 'width', this.itemSize);
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_5___default.a);
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
      this.dom.svgScene.setAttribute('viewBox', "0 0 ".concat(_managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbWidth, " ").concat(_managers_GameManager__WEBPACK_IMPORTED_MODULE_4__["default"].vbHeight));
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
/* harmony import */ var _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../templates/front-end/game.html */ "./templates/front-end/game.html");
/* harmony import */ var _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Scene */ "./js/front-end/components/Scene.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Player */ "./js/front-end/components/Player.js");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png");
/* harmony import */ var _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // assets




var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    var _this = this;

    _classCallCheck(this, GameManager);

    this.main = document.querySelector('.main');
    this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a;
    this.element = document.querySelector('[game]'); // scores

    this.scenes = [{
      bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      numItems: 5,
      gridCols: 4,
      gridLines: 4,
      effect: '?'
    }, {
      bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      numItems: 5,
      gridCols: 4,
      gridLines: 4,
      effect: '?'
    }, {
      bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      numItems: 5,
      gridCols: 4,
      gridLines: 4,
      effect: '?'
    }, {
      bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      numItems: 5,
      gridCols: 4,
      gridLines: 4,
      effect: '?'
    }];
    this.players = [];
    this.scores = [0, 0];
    this.currentSceneIndex = 0; // Load Current Scene image

    var img = new Image();
    img.src = this.scenes[this.currentSceneIndex].bkg;

    img.onload = function () {
      // image loaded
      _this.dom();

      _this.setPlayers();

      var scene = _this.scenes[_this.currentSceneIndex];
      _this.currentScene = new _components_Scene__WEBPACK_IMPORTED_MODULE_1__["default"](_this.dom.scene, scene.bkg, scene.item, scene.numItems, scene.gridCols, scene.gridLines, _this.currentSceneIndex);
    };
  }

  _createClass(GameManager, [{
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

      if (!end) {
        setTimeout(function () {
          div.remove();
        }, 3000);
      }
    }
  }, {
    key: "endScene",
    value: function endScene() {
      var _this2 = this;

      this.popUpMessage('end of scene', 'black', true);
      setTimeout(function () {
        _this2.updateScene(_this2.currentSceneIndex + 1);
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

/* harmony default export */ __webpack_exports__["default"] = (new GameManager());

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
/*! exports provided: shuffleArray, getAncestor, getIndex, getURLParameters, isWebGL, isTouch, isFacebookApp, autoBind, getOffsetTop, getOffsetLeft, parse_query_string, IEVersion, isInViewport, getCookie, browser, getNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArray", function() { return shuffleArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAncestor", function() { return getAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURLParameters", function() { return getURLParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebGL", function() { return isWebGL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFacebookApp", function() { return isFacebookApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoBind", function() { return autoBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_query_string", function() { return parse_query_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IEVersion", function() { return IEVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browser", function() { return browser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNow", function() { return getNow; });
function shuffleArray(o) {
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
    ;
  }

  return o;
}
function getAncestor(el, className) {
  while ((el = el.parentElement) && !el.classList.contains(className)) {
    ;
  }

  return el;
}
function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
}
function getURLParameters() {
  var params = {};

  if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
      var nv = parts[i].split('=');
      if (!nv[0]) continue;
      params[nv[0]] = nv[1] || true;
    }
  }

  return params;
}
function isWebGL() {
  // On crée un élément canvas. Le canvas n'est pas
  // ajouté au document et il n'est donc jamais
  // affiché dans la fenêtre du navigateur
  var canvas = document.createElement('canvas'); // On récupère le contexte WebGLRenderingContext
  // depuis l'élément canvas.

  var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'); // On affiche le résultat.

  if (gl && gl instanceof WebGLRenderingContext) return true;else return false;
}
function isTouch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
}
function autoBind(self) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.getOwnPropertyNames(self.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      var val = self[key];
      if (key !== 'constructor' && typeof val === 'function') self[key] = val.bind(self);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return self;
}
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
function parse_query_string(query) {
  var vars = query.split('&');
  var query_string = {};

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('='); // If first entry with this name

    if (typeof query_string[pair[0]] === 'undefined') {
      query_string[pair[0]] = decodeURIComponent(pair[1]); // If second entry with this name
    } else if (typeof query_string[pair[0]] === 'string') {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr; // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }

  return query_string;
}
function IEVersion() {
  var myNav = navigator.userAgent.toLowerCase();
  return myNav.indexOf('msie') !== -1 ? parseInt(myNav.split('msie')[1]) : false;
}
function isInViewport(element) {
  // Determine if an element is in the visible viewport
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return rect.top >= 0 - element.offsetHeight && // specific modification
  rect.left >= 0 && rect.bottom <= element.offsetHeight && // specific modification
  rect.right <= (window.innerWidth || html.clientWidth);
}
function getCookie(cname) {
  var name = "".concat(cname, "=");
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function browser() {
  var ua = navigator.userAgent,
      tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE ".concat(tem[1] || '');
  }

  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem !== null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }

  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  tem = ua.match(/version\/(\d+)/i);
  if (tem !== null) M.splice(1, 1, tem[1]);
  return M.join(' ');
}
function getNow() {
  return 'now' in window.performance ? performance.now() : new Date().getTime();
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
/*! exports provided: clamp, range, random, randomInt, randomFloat, toDegree, toRadian, calculateAspectRatioFit, getPointsDist, getCoeffDirecteur, prependZero, round, getMin, getMax, removeDuplicates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFloat", function() { return randomFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAspectRatioFit", function() { return calculateAspectRatioFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointsDist", function() { return getPointsDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoeffDirecteur", function() { return getCoeffDirecteur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependZero", function() { return prependZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMin", function() { return getMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMax", function() { return getMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDuplicates", function() { return removeDuplicates; });
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function range(val, oldMin, oldMax, newMin, newMax) {
  return (val - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
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
function randomFloat(min, max) {
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return parseFloat((Math.random() * (min - max) + max).toFixed(decimals), 10);
}
function toDegree(radians) {
  return radians * 180 / Math.PI;
}
function toRadian(degrees) {
  return degrees * Math.PI / 180;
}
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  var cover = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var fn = cover ? Math.max : Math.min;
  var ratio = fn(maxWidth / srcWidth, maxHeight / srcHeight);
  return {
    w: parseInt(srcWidth * ratio, 10),
    h: parseInt(srcHeight * ratio, 10),
    ratio: ratio
  };
}
function getPointsDist(p1, p2) {
  return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}
function getCoeffDirecteur(p1, p2) {
  var m = (p1.y - p2.y) / (p1.x - p2.x);
  var p = p1.y - m * p1.x;
  return {
    m: m,
    p: p
  };
}
function prependZero(str, totalNbr) {
  var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return str.toString().length < totalNbr ? prependZero(val.toString() + str, totalNbr) : str;
}
function round(value, dec) {
  return Math.round(value * dec) / dec;
}
function getMin(arr) {
  var min = arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
  return min;
}
function getMax(arr) {
  var max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
}
function removeDuplicates(arr) {
  var unique_array = [];

  for (var i = 0; i < arr.length; i++) {
    if (unique_array.indexOf(arr[i]) === -1) {
      unique_array.push(arr[i]);
    }
  }

  return unique_array;
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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game>\n  <!-- playing scene -->\n  <div class=\"scene\" scene>\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1036 632\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\">\n          <image class=\"scene-svg__image\" xlink:href=\"" + __webpack_require__(/*! ../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png") + "\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid slice\" />\n        </g>\n      </svg>\n      <img class=\"scene__placeholder\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png") + "\" alt=\"\">\n    </div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-32--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaW5kZXgiLCJjb2xvciIsIm51bVBvaW50cyIsImNlbnRlclgiLCJHYW1lTWFuYWdlciIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJ4IiwiY29zIiwieSIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwiYmtnIiwiaXRlbSIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJlIiwic2Nyb2xsWSIsIndpbmRvdyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsInRhcmdldFgiLCJ3aWR0aCIsInRhcmdldFkiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsInBsYXllciIsInBsYXllcnMiLCJpdGVtcyIsImxlbmd0aCIsImZvdW5kIiwic2NvcmUiLCJpdGVtSW1nIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjdXJzb3IiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJkb20iLCJzZXQiLCJzdmdTY2VuZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwiZml0U2NlbmVUb0ltYWdlIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIm1haW4iLCJpbm5lckhUTUwiLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRQbGF5ZXJzIiwic2NlbmUiLCJjdXJyZW50U2NlbmUiLCJpbWFnZVBsYWNlaG9sZGVyIiwiY3Vyc29ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzYWdlIiwic2NvcmVDZW50ZXJSZWNhcCIsInNjb3JlSXRlbXMiLCJjb2xvcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwb3BVcE1lc3NhZ2UiLCJlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJkYXRhIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsInNodWZmbGVBcnJheSIsIm8iLCJmbG9vciIsImdldEFuY2VzdG9yIiwiY2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiZ2V0SW5kZXgiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsImluZGV4T2YiLCJnZXRVUkxQYXJhbWV0ZXJzIiwicGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJwYXJ0cyIsInN1YnN0cmluZyIsInNwbGl0IiwibnYiLCJpc1dlYkdMIiwiY2FudmFzIiwiZ2wiLCJnZXRDb250ZXh0IiwiV2ViR0xSZW5kZXJpbmdDb250ZXh0IiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiaXNGYWNlYm9va0FwcCIsInVhIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJhdXRvQmluZCIsInNlbGYiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJrZXkiLCJ2YWwiLCJiaW5kIiwiZWxlbSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHlUb3AiLCJib2R5IiwicGFyc2VfcXVlcnlfc3RyaW5nIiwicXVlcnkiLCJ2YXJzIiwicXVlcnlfc3RyaW5nIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImFyciIsIklFVmVyc2lvbiIsIm15TmF2IiwidG9Mb3dlckNhc2UiLCJwYXJzZUludCIsImlzSW5WaWV3cG9ydCIsInJlY3QiLCJodG1sIiwiYm90dG9tIiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRDb29raWUiLCJjbmFtZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiY29va2llIiwiY2EiLCJjIiwiY2hhckF0IiwiYnJvd3NlciIsInRlbSIsIk0iLCJtYXRjaCIsInRlc3QiLCJleGVjIiwiam9pbiIsInJlcGxhY2UiLCJhcHBOYW1lIiwiYXBwVmVyc2lvbiIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUiLCJvdXRFeHBvIiwibiIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJyYW5nZSIsIm9sZE1pbiIsIm9sZE1heCIsIm5ld01pbiIsIm5ld01heCIsInRtcCIsInJhbmRvbUZsb2F0IiwiZGVjaW1hbHMiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvRGVncmVlIiwicmFkaWFucyIsInRvUmFkaWFuIiwiZGVncmVlcyIsImNhbGN1bGF0ZUFzcGVjdFJhdGlvRml0Iiwic3JjV2lkdGgiLCJzcmNIZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvdmVyIiwiZm4iLCJyYXRpbyIsInciLCJoIiwiZ2V0UG9pbnRzRGlzdCIsInNxcnQiLCJnZXRDb2VmZkRpcmVjdGV1ciIsIm0iLCJwIiwicHJlcGVuZFplcm8iLCJzdHIiLCJ0b3RhbE5iciIsInRvU3RyaW5nIiwicm91bmQiLCJkZWMiLCJnZXRNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImdldE1heCIsInJlbW92ZUR1cGxpY2F0ZXMiLCJ1bmlxdWVfYXJyYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlE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O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrdEJBQSt0QixtQkFBTyxDQUFDLDBGQUE0QyxnS0FBZ0ssbUJBQU8sQ0FBQywwRkFBNEMscWNBQXFjLG1CQUFPLENBQUMsd0ZBQTJDLHliIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbi8vICgoKSA9PiB7XG4vLyAgIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbi8vICAgaW1wb3J0KCcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJylcbi8vIH0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlcnMvR2FtZU1hbmFnZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpbmRleCxcbiAgICAgIGNvbG9yLFxuICAgICAgbnVtUG9pbnRzLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5udW1Qb2ludHMgPSBudW1Qb2ludHNcbiAgICB0aGlzLmNlbnRlclggPSBHYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSBHYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSBHYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcblxuICAgIHRoaXMuaXNJbnNpZGVUaW1lID0gMFxuXG4gICAgdGhpcy5zZXRQb2ludHMoKVxuICB9XG5cbiAgc2V0UG9pbnRzKCkge1xuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICAvLyBjcmVhdGUgXCJudW1Qb2ludHNcIiB4IHBvaW50c1xuICAgIGNvbnN0IHNsaWNlID0gKE1hdGguUEkgKiAyKSAvIHRoaXMubnVtUG9pbnRzXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gcmFuZG9tKDAsIE1hdGguUEkgKiAyKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBtYXJnZUFuZ2xlID0gcmFuZG9tKDAsIDAuMjgpIC8vIGkgLyAxLjJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgc3RhcnQgdGltZSBvZiBhbmltYXRpb24gKHdlIGRvbid0IHdhbnQgdGhlIHR3ZWVuIHRvIGdvIGZyb20gMCB0byAxLCBpdCBjYW4gc3RhcnQgZGlyZWN0bHkgZnJvbSAwLjYgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBzdGFydEFuaW0gPSBnZXROb3coKSArIGkgKiByYW5kb20oMCwgdGhpcy5taW5EdXJhdGlvbilcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zdGFydEFuZ2xlICsgaSAqIHNsaWNlICsgbWFyZ2VBbmdsZVxuICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb20odGhpcy5taW5EdXJhdGlvbiwgdGhpcy5tYXhEdXJhdGlvbilcblxuICAgICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRBbmltLFxuICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5ZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgfVxuXG4gICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuXG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93LCBnZXRPZmZzZXRUb3AsIGdldE9mZnNldExlZnQgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyBpbk91dFNpbmUgfSBmcm9tICcuLi91dGlscy9lYXNlJ1xuaW1wb3J0IHsgcmFuZG9tLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBpdGVtSW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBia2csIGl0ZW0sIG51bUl0ZW1zLCBncmlkQ29scywgZ3JpZExpbmVzLCBpbmRleCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsXG4gICAgdGhpcy5ia2cgPSBia2dcbiAgICB0aGlzLml0ZW0gPSBpdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IGdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuZml0U2NlbmVUb0ltYWdlKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcblxuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IEdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuICB9XG5cbiAgc2V0Q2xpcFBhdGhJZCgpIHtcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZCA9IHV1aWR2MSgpXG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCBgdXJsKCMke3RoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkfSlgKVxuICB9XG5cbiAgc2V0R3JpZCgpIHtcbiAgICB0aGlzLnBvc2l0aW9uc0luR3JpZCA9IFtdXG4gICAgbGV0IHhcbiAgICBsZXQgeVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRDb2xzOyBpKyspIHtcbiAgICAgIHggPSBpICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZExpbmVzOyBqKyspIHtcbiAgICAgICAgeSA9IGogKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgICAgY29uc3Qgb2JqID0geyB4LCB5IH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSXRlbXM7IGkrKykge1xuICAgICAgLy8gcmFuZG9taXplXG4gICAgICBjb25zdCByZCA9IHJhbmRvbUludCgwLCB0aGlzLnBvc2l0aW9uc0luR3JpZC5sZW5ndGggLSAxKVxuICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS54IC8gdGhpcy5ncmlkQ29sc1xuICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS55IC8gdGhpcy5ncmlkTGluZXNcbiAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnNwbGljZShyZCwgMSlcblxuICAgICAgLy8gc3ZnIGl0ZW1zXG4gICAgICAvLyBuZWVkIHRvIHByZWNpc2UgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc3ZnIG5hbWVzcGFjZVxuICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ltYWdlJylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCBpdGVtSW1nKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgZGl2LnN0eWxlLmxlZnQgPSBgJHt4ICogMTAwfSVgXG4gICAgICBkaXYuc3R5bGUudG9wID0gYCR7eSAqIDEwMH0lYFxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBmaXRTY2VuZVRvSW1hZ2UoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke0dhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7R2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3dbZXZdKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgZXZlbnRzUkFGKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnUkFGJywgdGhpcy5oYW5kbGVSQUYsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB0aGlzLmV2ZW50WCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXG4gICAgdGhpcy5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgdGhpcy5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHRoaXMuZXZlbnRZICs9IHNjcm9sbFlcblxuICAgIHRoaXMudGFyZ2V0WCA9IHRoaXMuZXZlbnRYIC8gdGhpcy53aWR0aCAqIEdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICB0aGlzLnRhcmdldFggLT0gR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyB0aGlzLmNlbnRlclhcbiAgICB0aGlzLnRhcmdldFkgPSB0aGlzLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogR2FtZU1hbmFnZXIudmJIZWlnaHQgLSB0aGlzLm9mZnNldFRvcFxuICAgIHRoaXMudGFyZ2V0WSAtPSBHYW1lTWFuYWdlci52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIGUgd2lsbCBiZSBjdXJyZW50IGN1cnNvciB3aXRoIHBvc2l0aW9uc1xuICAgIC8vIGlmIGN1cnNvciBwb3NpdGlvblxuICAgIC8vIENoZWNrIGlmIGN1cnNvciBpdGVtIGlzIGZvdW5kXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IEdhbWVNYW5hZ2VyLnBsYXllcnNbMF1cbiAgICBjb25zdCB4ID0gdGhpcy5ldmVudFggLyB0aGlzLndpZHRoXG4gICAgY29uc3QgeSA9IHRoaXMuZXZlbnRZIC8gdGhpcy5oZWlnaHRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIEdhbWVNYW5hZ2VyLnNjb3JlKHBsYXllciwgaXRlbUltZylcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIEdhbWVNYW5hZ2VyLmVuZFNjZW5lKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVSQUYgPSBlID0+IHtcbiAgICBjb25zdCB7IG5vdyB9ID0gZS5kZXRhaWxcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IHRoaXMuYWNjZWxlcmF0aW9uICsgKHRoaXMuZGVzdEFjY2VsZXJhdGlvbiAtIHRoaXMuYWNjZWxlcmF0aW9uKSAqIHRoaXMuY29lZkFjY2VsZXJhdGlvblxuXG4gICAgdGhpcy54ID0gdGhpcy54ICsgKHRoaXMudGFyZ2V0WCAtIHRoaXMueCkgKiAwLjFcbiAgICB0aGlzLnkgPSB0aGlzLnkgKyAodGhpcy50YXJnZXRZIC0gdGhpcy55KSAqIDAuMVxuXG4gICAgLy8gRm9yIGVhY2ggY3Vyc29yLi4uXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBHYW1lTWFuYWdlci5wbGF5ZXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBHYW1lTWFuYWdlci5wbGF5ZXJzW3ldXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgY3Vyc29yIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnNvci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBjdXJzb3IucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIGN1cnNvciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBpZiAoeSA9PT0gMCkge1xuICAgICAgICAgIHBvaW50LnggKz0gdGhpcy54XG4gICAgICAgICAgcG9pbnQueSArPSB0aGlzLnlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIGN1cnNvclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBjdXJzb3IgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIGN1cnNvci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBjdXJzb3IubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IGN1cnNvci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gY3Vyc29yLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBjdXJzb3IubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBjdXJzb3IuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gY3Vyc29yLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBjdXJzb3IuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gY3Vyc29yLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChjdXJzb3IucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJpbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5cbmNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZShcbiAgICAgICAgdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIHNjZW5lLmJrZyxcbiAgICAgICAgc2NlbmUuaXRlbSxcbiAgICAgICAgc2NlbmUubnVtSXRlbXMsXG4gICAgICAgIHNjZW5lLmdyaWRDb2xzLFxuICAgICAgICBzY2VuZS5ncmlkTGluZXMsXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnNjZW5lX19tZXNzYWdlJyksXG4gICAgICBzY29yZUNlbnRlclJlY2FwOiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJzKCkge1xuICAgIHRoaXMubnVtUG9pbnRzID0gOFxuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnZiSGVpZ2h0ID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRIZWlnaHRcbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcblxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG51bVBvaW50czogdGhpcy5udW1Qb2ludHMsXG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgJ3JlZCcsXG4gICAgICAnYmx1ZScsXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5jdXJzb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24ob2JqLCB7IGVsOiB0aGlzLmRvbS5jdXJzb3JzW2ldLCBpbmRleDogaSwgY29sb3I6IGNvbG9yc1tpXSB9KVxuICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcihwcm9wcykpXG4gICAgfVxuICB9XG5cbiAgc2NvcmUocGxheWVyLCBpdGVtKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSArPSAxXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXBbaV0uaW5uZXJIVE1MID0gYFAtJHtwbGF5ZXIuaW5kZXggKyAxfSA6ICR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gaXRlbVxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzY29yZV9faXRlbScpXG4gICAgdGhpcy5kb20uc2NvcmVJdGVtc1twbGF5ZXIuaW5kZXhdLmFwcGVuZENoaWxkKGltZylcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBpZiAoIWVuZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH1cblxuICBlbmRTY2VuZSgpIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnZW5kIG9mIHNjZW5lJywgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcblxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZSlcblxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSBpbmRleFxuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKFxuICAgICAgdGhpcy5kb20uc2NlbmUsXG4gICAgICBzY2VuZS5ia2csXG4gICAgICBzY2VuZS5pdGVtLFxuICAgICAgc2NlbmUubnVtSXRlbXMsXG4gICAgICBzY2VuZS5ncmlkQ29scyxcbiAgICAgIHNjZW5lLmdyaWRMaW5lcyxcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgKVxuICB9XG5cbiAgZGVzdHJveVNjZW5lKHNjZW5lKSB7XG4gICAgLy8gY2xlYW4gY29tcG9uZW50XG4gICAgaWYgKHNjZW5lLmRlc3Ryb3kgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2NlbmUuZGVzdHJveSgpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHYW1lTWFuYWdlcigpXG4iLCJpbXBvcnQgY3JlYXRlQ3VzdG9tRXZlbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQnXG5cbmNsYXNzIFJBRk1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgaGFuZGxlUkFGID0gbm93ID0+IHtcbiAgICAvLyBub3cgPT09IHRpbWUgaW4gbXNcbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZVJBRilcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjcmVhdGVDdXN0b21FdmVudCgnUkFGJywgeyBub3cgfSkpXG4gIH1cblxuICByZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBjYW5jZWwgPSAoKSA9PiB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJBRk1hbmFnZXIoKVxuIiwiZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgZGV0YWlsOiBkYXRhLFxuICB9KVxuICByZXR1cm4gZXZlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ3VzdG9tRXZlbnRcbiIsImV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkobykge1xuXG4gIGZvciAobGV0IGosIHgsIGkgPSBvLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHgpO1xuXG4gIHJldHVybiBvXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmNlc3RvcihlbCwgY2xhc3NOYW1lKSB7XG5cbiAgd2hpbGUgKChlbCA9IGVsLnBhcmVudEVsZW1lbnQpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSk7XG5cbiAgcmV0dXJuIGVsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleChlbCkge1xuXG4gIHJldHVybiBBcnJheS5mcm9tKGVsLnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YoZWwpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkxQYXJhbWV0ZXJzKCkge1xuXG4gIGNvbnN0IHBhcmFtcyA9IHt9XG5cbiAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuXG4gICAgY29uc3QgcGFydHMgPSBsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KCcmJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgY29uc3QgbnYgPSBwYXJ0c1tpXS5zcGxpdCgnPScpXG5cbiAgICAgIGlmICghbnZbMF0pIGNvbnRpbnVlXG5cbiAgICAgIHBhcmFtc1tudlswXV0gPSBudlsxXSB8fCB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmFtc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXZWJHTCgpIHtcbiAgLy8gT24gY3LDqWUgdW4gw6lsw6ltZW50IGNhbnZhcy4gTGUgY2FudmFzIG4nZXN0IHBhc1xuICAvLyBham91dMOpIGF1IGRvY3VtZW50IGV0IGlsIG4nZXN0IGRvbmMgamFtYWlzXG4gIC8vIGFmZmljaMOpIGRhbnMgbGEgZmVuw6p0cmUgZHUgbmF2aWdhdGV1clxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcblxuICAvLyBPbiByw6ljdXDDqHJlIGxlIGNvbnRleHRlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICAvLyBkZXB1aXMgbCfDqWzDqW1lbnQgY2FudmFzLlxuICBsZXQgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJylcblxuICAvLyBPbiBhZmZpY2hlIGxlIHLDqXN1bHRhdC5cbiAgaWYgKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KSByZXR1cm4gdHJ1ZVxuICBlbHNlIHJldHVybiBmYWxzZVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoKCkge1xuXG4gIHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZhY2Vib29rQXBwKCkge1xuXG4gIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYVxuXG4gIHJldHVybiB1YS5pbmRleE9mKCdGQkFOJykgPiAtMSB8fCB1YS5pbmRleE9mKCdGQkFWJykgPiAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0b0JpbmQoc2VsZikge1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKSkge1xuXG4gICAgY29uc3QgdmFsID0gc2VsZltrZXldXG5cbiAgICBpZiAoa2V5ICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHNlbGZba2V5XSA9IHZhbC5iaW5kKHNlbGYpXG4gIH1cblxuICByZXR1cm4gc2VsZlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBjb25zdCBib2R5VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcblxuICByZXR1cm4gYm91bmRzLnRvcCArIGJvZHlUb3Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldExlZnQoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgcmV0dXJuIGJvdW5kcy5sZWZ0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9xdWVyeV9zdHJpbmcgKHF1ZXJ5KSB7XG4gIGxldCB2YXJzID0gcXVlcnkuc3BsaXQoJyYnKVxuICBsZXQgcXVlcnlfc3RyaW5nID0ge31cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHBhaXIgPSB2YXJzW2ldLnNwbGl0KCc9JylcbiAgICAvLyBJZiBmaXJzdCBlbnRyeSB3aXRoIHRoaXMgbmFtZVxuICAgIGlmICh0eXBlb2YgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pXG4gICAgICAvLyBJZiBzZWNvbmQgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBxdWVyeV9zdHJpbmdbcGFpclswXV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgYXJyID0gW3F1ZXJ5X3N0cmluZ1twYWlyWzBdXSwgZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pXVxuICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID0gYXJyXG4gICAgICAvLyBJZiB0aGlyZCBvciBsYXRlciBlbnRyeSB3aXRoIHRoaXMgbmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeV9zdHJpbmdbcGFpclswXV0ucHVzaChkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkpXG4gICAgfVxuICB9XG4gIHJldHVybiBxdWVyeV9zdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElFVmVyc2lvbigpIHtcblxuICBsZXQgbXlOYXYgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcblxuICByZXR1cm4gbXlOYXYuaW5kZXhPZignbXNpZScpICE9PSAtMSA/IHBhcnNlSW50KG15TmF2LnNwbGl0KCdtc2llJylbMV0pIDogZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5WaWV3cG9ydChlbGVtZW50KSB7IC8vIERldGVybWluZSBpZiBhbiBlbGVtZW50IGlzIGluIHRoZSB2aXNpYmxlIHZpZXdwb3J0XG4gIGxldCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBsZXQgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICByZXR1cm4gKFxuICAgIHJlY3QudG9wID49IDAgLSBlbGVtZW50Lm9mZnNldEhlaWdodCAmJiAvLyBzcGVjaWZpYyBtb2RpZmljYXRpb25cbiAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgIHJlY3QuYm90dG9tIDw9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICYmIC8vIHNwZWNpZmljIG1vZGlmaWNhdGlvblxuICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGh0bWwuY2xpZW50V2lkdGgpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShjbmFtZSkge1xuICBsZXQgbmFtZSA9IGAke2NuYW1lfT1gXG4gIGxldCBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSlcbiAgbGV0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpXG4gIGZvcihsZXQgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXVxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSlcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aClcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyKCkge1xuICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgIHRlbSxcbiAgICBNID0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXVxuICBpZiAoL3RyaWRlbnQvaS50ZXN0KE1bMV0pKSB7XG4gICAgdGVtID0gL1xcYnJ2WyA6XSsoXFxkKykvZy5leGVjKHVhKSB8fCBbXVxuICAgIHJldHVybiBgSUUgJHsodGVtWzFdIHx8ICcnKX1gXG4gIH1cbiAgaWYgKE1bMV0gPT09ICdDaHJvbWUnKSB7XG4gICAgdGVtID0gdWEubWF0Y2goL1xcYihPUFJ8RWRnZSlcXC8oXFxkKykvKVxuICAgIGlmICh0ZW0gIT09IG51bGwpIHJldHVybiB0ZW0uc2xpY2UoMSkuam9pbignICcpLnJlcGxhY2UoJ09QUicsICdPcGVyYScpXG4gIH1cbiAgTSA9IE1bMl0gPyBbTVsxXSwgTVsyXV0gOiBbbmF2aWdhdG9yLmFwcE5hbWUsIG5hdmlnYXRvci5hcHBWZXJzaW9uLCAnLT8nXVxuICB0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKVxuICBpZiAodGVtICE9PSBudWxsKSBNLnNwbGljZSgxLCAxLCB0ZW1bMV0pXG4gIHJldHVybiBNLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5nZSh2YWwsIG9sZE1pbiwgb2xkTWF4LCBuZXdNaW4sIG5ld01heCkge1xuXG5cdHJldHVybiAodmFsIC0gb2xkTWluKSAqIChuZXdNYXggLSBuZXdNaW4pIC8gKG9sZE1heCAtIG9sZE1pbikgKyBuZXdNaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuXHQgLy8gcmV0dXJuIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gIGlmIChtaW4gPiBtYXgpIHtcbiAgICBjb25zdCB0bXAgPSBtaW5cbiAgICBtaW4gPSBtYXhcbiAgICBtYXggPSB0bXBcbiAgfVxuICByZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXQobWluLCBtYXgsIGRlY2ltYWxzID0gMSkge1xuXG5cdHJldHVybiBwYXJzZUZsb2F0KChNYXRoLnJhbmRvbSgpICogKG1pbiAtIG1heCkgKyBtYXgpLnRvRml4ZWQoZGVjaW1hbHMpLCAxMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKHJhZGlhbnMpIHtcblxuXHRyZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUElcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGRlZ3JlZXMpIHtcblxuXHRyZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFzcGVjdFJhdGlvRml0KHNyY1dpZHRoLCBzcmNIZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQsIGNvdmVyID0gdHJ1ZSkge1xuXG5cdGNvbnN0IGZuID0gY292ZXIgPyBNYXRoLm1heCA6IE1hdGgubWluXG5cdGNvbnN0IHJhdGlvID0gZm4obWF4V2lkdGggLyBzcmNXaWR0aCwgbWF4SGVpZ2h0IC8gc3JjSGVpZ2h0KVxuXG5cdHJldHVybiB7XG5cdFx0dzogcGFyc2VJbnQoc3JjV2lkdGggKiByYXRpbywgMTApLFxuXHRcdGg6IHBhcnNlSW50KHNyY0hlaWdodCAqIHJhdGlvLCAxMCksXG5cdFx0cmF0aW9cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRzRGlzdChwMSwgcDIpIHtcblxuXHRyZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiAocDEueCAtIHAyLngpICsgKHAxLnkgLSBwMi55KSAqIChwMS55IC0gcDIueSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2VmZkRpcmVjdGV1cihwMSwgcDIpIHtcblxuXHRjb25zdCBtID0gKHAxLnkgLSBwMi55KSAvIChwMS54IC0gcDIueClcblx0Y29uc3QgcCA9IHAxLnkgLSBtICogcDEueFxuXG5cdHJldHVybiB7XG5cdFx0bSxcblx0XHRwXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRaZXJvKHN0ciwgdG90YWxOYnIsIHZhbCA9IDApIHtcblxuXHRyZXR1cm4gc3RyLnRvU3RyaW5nKCkubGVuZ3RoIDwgdG90YWxOYnIgPyBwcmVwZW5kWmVybyh2YWwudG9TdHJpbmcoKSArIHN0ciwgdG90YWxOYnIpIDogc3RyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZCh2YWx1ZSwgZGVjKSB7XG5cblx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBkZWMpIC8gZGVjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW4oYXJyKSB7XG5cblx0bGV0IG1pbiA9IGFyci5yZWR1Y2UoKGEsYikgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1pbihhLCBiKVxuXHR9KVxuXG5cdHJldHVybiBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heChhcnIpIHtcblxuXHRsZXQgbWF4ID0gYXJyLnJlZHVjZSgoYSxiKSA9PiB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KGEsIGIpXG5cdH0pXG5cblx0cmV0dXJuIG1heFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRHVwbGljYXRlcyhhcnIpIHtcblx0bGV0IHVuaXF1ZV9hcnJheSA9IFtdXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHVuaXF1ZV9hcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB7XG5cdFx0XHR1bmlxdWVfYXJyYXkucHVzaChhcnJbaV0pXG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmlxdWVfYXJyYXlcbn1cblxuIiwiaW1wb3J0ICcuLi9zY3NzL2dhbWUuc2NzcydcblxuLy8gaW1wb3J0IEdhbWVDb21tdW5pY2F0b3IgZnJvbSAnLi9jb21wb25lbnRzL0dhbWVDb21tdW5pY2F0b3InXG5cbi8vIG5ldyBHYW1lQ29tbXVuaWNhdG9yKClcblxuaW1wb3J0ICcuL2Zyb250LWVuZC9hcHAnXG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gYmlnIGN1cnNvciAtLT5cXG48c2VjdGlvbiBjbGFzcz1cXFwiZ2FtZVxcXCIgZ2FtZT5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjZW5lXFxcIiBzY2VuZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3dyYXBwZXJcXFwiPlxcbiAgICAgIDwhLS0gc3ZnIHNjZW5lIGZvciBtYXNrcyBldGMuLi4gLS0+XFxuICAgICAgPHN2ZyBjbGFzcz1cXFwic2NlbmUtc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAzNiA2MzJcXFwiIHN0cm9rZT1cXFwiYmxhY2tcXFwiPlxcbiAgICAgICAgPGRlZnM+XFxuICAgICAgICAgIDxjbGlwUGF0aCBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aFxcXCI+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMVxcXCIgLz5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIyXFxcIiAvPlxcbiAgICAgICAgICA8L2NsaXBQYXRoPlxcbiAgICAgICAgPC9kZWZzPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjFcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjJcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPGcgY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmXFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB4bGluazpocmVmPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmdcIikgKyBcIlxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgc2xpY2VcXFwiIC8+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9zdmc+XFxuICAgICAgPGltZyBjbGFzcz1cXFwic2NlbmVfX3BsYWNlaG9sZGVyXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9