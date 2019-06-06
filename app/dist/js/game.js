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
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/front-end/utils/dom.js");
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
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4__);
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
          window.GameManager.score(player, _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a);
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
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_4___default.a);
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
    _classCallCheck(this, GameManager);

    this.init();
  }

  _createClass(GameManager, [{
    key: "init",
    value: function init() {
      var _this = this;

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
        numItems: 10,
        gridCols: 10,
        gridLines: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJ4IiwiY29zIiwieSIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwiYmtnIiwiaXRlbSIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJlIiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsInRhcmdldFgiLCJ3aWR0aCIsInRhcmdldFkiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsInBsYXllciIsInBsYXllcnMiLCJpdGVtcyIsImxlbmd0aCIsImZvdW5kIiwic2NvcmUiLCJpdGVtSW1nIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjdXJzb3IiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJkb20iLCJzZXQiLCJzdmdTY2VuZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwiZml0U2NlbmVUb0ltYWdlIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImluaXQiLCJtYWluIiwiaW5uZXJIVE1MIiwiZ2FtZVRtcCIsInNjZW5lcyIsInNjZW5lMUJrZyIsInNjZW5lMUl0ZW0iLCJlZmZlY3QiLCJzY29yZXMiLCJjdXJyZW50U2NlbmVJbmRleCIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiY3VycmVudFNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwiY29sb3JzIiwiT2JqZWN0IiwiYXNzaWduIiwicG9wVXBNZXNzYWdlIiwiZW5kIiwic2V0VGltZW91dCIsInJlbW92ZSIsInVwZGF0ZVNjZW5lIiwiZGVzdHJveVNjZW5lIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiZGF0YSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJzaHVmZmxlQXJyYXkiLCJvIiwiZmxvb3IiLCJnZXRBbmNlc3RvciIsImNsYXNzTmFtZSIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImdldEluZGV4IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiZ2V0VVJMUGFyYW1ldGVycyIsInBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwicGFydHMiLCJzdWJzdHJpbmciLCJzcGxpdCIsIm52IiwiaXNXZWJHTCIsImNhbnZhcyIsImdsIiwiZ2V0Q29udGV4dCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCIsImlzVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsImlzRmFjZWJvb2tBcHAiLCJ1YSIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiYXV0b0JpbmQiLCJzZWxmIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwia2V5IiwidmFsIiwiYmluZCIsImVsZW0iLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib2R5VG9wIiwiYm9keSIsInBhcnNlX3F1ZXJ5X3N0cmluZyIsInF1ZXJ5IiwidmFycyIsInF1ZXJ5X3N0cmluZyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhcnIiLCJJRVZlcnNpb24iLCJteU5hdiIsInRvTG93ZXJDYXNlIiwicGFyc2VJbnQiLCJpc0luVmlld3BvcnQiLCJyZWN0IiwiaHRtbCIsImJvdHRvbSIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiZ2V0Q29va2llIiwiY25hbWUiLCJuYW1lIiwiZGVjb2RlZENvb2tpZSIsImNvb2tpZSIsImNhIiwiYyIsImNoYXJBdCIsImJyb3dzZXIiLCJ0ZW0iLCJNIiwibWF0Y2giLCJ0ZXN0IiwiZXhlYyIsImpvaW4iLCJyZXBsYWNlIiwiYXBwTmFtZSIsImFwcFZlcnNpb24iLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIiwib3V0RXhwbyIsIm4iLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwicmFuZ2UiLCJvbGRNaW4iLCJvbGRNYXgiLCJuZXdNaW4iLCJuZXdNYXgiLCJ0bXAiLCJyYW5kb21GbG9hdCIsImRlY2ltYWxzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b0RlZ3JlZSIsInJhZGlhbnMiLCJ0b1JhZGlhbiIsImRlZ3JlZXMiLCJjYWxjdWxhdGVBc3BlY3RSYXRpb0ZpdCIsInNyY1dpZHRoIiwic3JjSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjb3ZlciIsImZuIiwicmF0aW8iLCJ3IiwiaCIsImdldFBvaW50c0Rpc3QiLCJzcXJ0IiwiZ2V0Q29lZmZEaXJlY3RldXIiLCJtIiwicCIsInByZXBlbmRaZXJvIiwic3RyIiwidG90YWxOYnIiLCJ0b1N0cmluZyIsInJvdW5kIiwiZGVjIiwiZ2V0TWluIiwicmVkdWNlIiwiYSIsImIiLCJnZXRNYXgiLCJyZW1vdmVEdXBsaWNhdGVzIiwidW5pcXVlX2FycmF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNB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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCt0QkFBK3RCLG1CQUFPLENBQUMsMEZBQTRDLGdLQUFnSyxtQkFBTyxDQUFDLDBGQUE0QyxxY0FBcWMsbUJBQU8sQ0FBQyx3RkFBMkMseWIiLCJmaWxlIjoianMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2dhbWUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2ViODBhNTI3ZGUxMGUyMjNlODJjZDQ4NTFhNDFkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzllOTM1NmMwNTAwMDM5ZWY0Zjc0NmJhODAyMmFkZS5wbmdcIjsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MnXG5cbmltcG9ydCAnLi9tYW5hZ2Vycy9SQUZNYW5hZ2VyJ1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvR2FtZU1hbmFnZXInXG5cbi8vIG5vdCB3b3JraW5nIGFueW1vcmUgZm9yIHNvbWUgcmVhc29uXG4oKCkgPT4ge1xuICAvLyBpbXBvcnQgR2FtZU1hbmFuZ2VyIHdoZW4gRE9NIGlzIHJlYWR5XG4gIHdpbmRvdy5HYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpXG59KSgpXG4iLCJpbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICAgIG51bVBvaW50cyxcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gbnVtUG9pbnRzXG4gICAgdGhpcy5jZW50ZXJYID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMuY2VudGVyWSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG5cbiAgICB0aGlzLmlzSW5zaWRlVGltZSA9IDBcblxuICAgIHRoaXMuc2V0UG9pbnRzKClcbiAgfVxuXG4gIHNldFBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgLy8gY3JlYXRlIFwibnVtUG9pbnRzXCIgeCBwb2ludHNcbiAgICBjb25zdCBzbGljZSA9IChNYXRoLlBJICogMikgLyB0aGlzLm51bVBvaW50c1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IHJhbmRvbSgwLCBNYXRoLlBJICogMilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgbWFyZ2VBbmdsZSA9IHJhbmRvbSgwLCAwLjI4KSAvLyBpIC8gMS4yXG4gICAgICAvLyByYW5kb21pemUgdGhlIHN0YXJ0IHRpbWUgb2YgYW5pbWF0aW9uICh3ZSBkb24ndCB3YW50IHRoZSB0d2VlbiB0byBnbyBmcm9tIDAgdG8gMSwgaXQgY2FuIHN0YXJ0IGRpcmVjdGx5IGZyb20gMC42IGZvciBleGFtcGxlKVxuICAgICAgY29uc3Qgc3RhcnRBbmltID0gZ2V0Tm93KCkgKyBpICogcmFuZG9tKDAsIHRoaXMubWluRHVyYXRpb24pXG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuc3RhcnRBbmdsZSArIGkgKiBzbGljZSArIG1hcmdlQW5nbGVcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gcmFuZG9tKHRoaXMubWluRHVyYXRpb24sIHRoaXMubWF4RHVyYXRpb24pXG5cbiAgICAgIGNvbnN0IHBvaW50ID0ge1xuICAgICAgICBhbmdsZSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHN0YXJ0QW5pbSxcbiAgICAgICAgeDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5YOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgIH1cblxuICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcblxuICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7IGdldE5vdywgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbi8vIGFzc2V0c1xuaW1wb3J0IGl0ZW1JbWcgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZWwsIGJrZywgaXRlbSwgbnVtSXRlbXMsIGdyaWRDb2xzLCBncmlkTGluZXMsIGluZGV4KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxcbiAgICB0aGlzLmJrZyA9IGJrZ1xuICAgIHRoaXMuaXRlbSA9IGl0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gbnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IGdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5maXRTY2VuZVRvSW1hZ2UoKVxuXG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcblxuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNVxuXG4gICAgLy8gdmFsdWVzIGZvciBtb3VzZSBldmVudFxuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gICAgdGhpcy50YXJnZXRYID0gMFxuICAgIHRoaXMudGFyZ2V0WSA9IDBcbiAgICB0aGlzLmNsaWNrUHJlY2lzaW9uID0gMC4wNVxuICAgIHRoaXMubnVtSXRlbUZvdW5kID0gMFxuXG4gICAgLy8gdmFsdWVzIGZvciBET00gc2NlbmVcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICB0aGlzLm9mZnNldFRvcCA9IGdldE9mZnNldFRvcCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIGlmICh0aGlzLmRvbS5zdmdDbGlwUGF0aCkge1xuICAgICAgdGhpcy5zZXRDbGlwUGF0aElkKClcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkKClcbiAgICB0aGlzLnNldEl0ZW1zKClcblxuICAgIC8vIHN0YXJ0IGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzKHRydWUpXG4gICAgdGhpcy5ldmVudHNSQUYodHJ1ZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgaXRlbUltZylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgYCR7eCAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgYCR7eSAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKC0ke3RoaXMuaXRlbVNpemUgLyAyfSAtJHt0aGlzLml0ZW1TaXplIC8gMn0pYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcblxuICAgICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpXG5cbiAgICAgIC8vIGZha2UgaXRlbSBmb3IgZGVidWdnaW5nXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlYnVnJylcbiAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gYCR7eCAqIDEwMH0lYFxuICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgZml0U2NlbmVUb0ltYWdlKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlc1xuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aH0gJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3dbZXZdKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgZXZlbnRzUkFGKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnUkFGJywgdGhpcy5oYW5kbGVSQUYsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICB0aGlzLmV2ZW50WCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXG4gICAgdGhpcy5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgdGhpcy5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHRoaXMuZXZlbnRZICs9IHNjcm9sbFlcblxuICAgIHRoaXMudGFyZ2V0WCA9IHRoaXMuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgdGhpcy50YXJnZXRYIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBiZWNhdXNlIHN0YXJ0aW5nIHBvaW50IGlzIHRoaXMuY2VudGVyWFxuICAgIHRoaXMudGFyZ2V0WSA9IHRoaXMuZXZlbnRZIC8gdGhpcy5oZWlnaHQgKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLSB0aGlzLm9mZnNldFRvcFxuICAgIHRoaXMudGFyZ2V0WSAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyXG5cbiAgICAvLyBeVGhlc2Ugc2hvdWRsIGJlIGxpbmtlZCB0byBhIGN1cnNvclxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyBlIHdpbGwgYmUgY3VycmVudCBjdXJzb3Igd2l0aCBwb3NpdGlvbnNcbiAgICAvLyBpZiBjdXJzb3IgcG9zaXRpb25cbiAgICAvLyBDaGVjayBpZiBjdXJzb3IgaXRlbSBpcyBmb3VuZFxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuY2xpY2tQcmVjaXNpb25cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1swXVxuICAgIGNvbnN0IHggPSB0aGlzLmV2ZW50WCAvIHRoaXMud2lkdGhcbiAgICBjb25zdCB5ID0gdGhpcy5ldmVudFkgLyB0aGlzLmhlaWdodFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtLmZvdW5kICYmXG4gICAgICAgIHggPiBpdGVtLnggLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeCA8IGl0ZW0ueCArIHByZWNpc2lvbiAmJlxuICAgICAgICB5ID4gaXRlbS55IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPCBpdGVtLnkgKyBwcmVjaXNpb24pIHtcbiAgICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLnNjb3JlKHBsYXllciwgaXRlbUltZylcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIHRoaXMueCA9IHRoaXMueCArICh0aGlzLnRhcmdldFggLSB0aGlzLngpICogMC4xXG4gICAgdGhpcy55ID0gdGhpcy55ICsgKHRoaXMudGFyZ2V0WSAtIHRoaXMueSkgKiAwLjFcblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3ldXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgY3Vyc29yIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnNvci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBjdXJzb3IucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIGN1cnNvciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBpZiAoeSA9PT0gMCkge1xuICAgICAgICAgIHBvaW50LnggKz0gdGhpcy54XG4gICAgICAgICAgcG9pbnQueSArPSB0aGlzLnlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIGN1cnNvclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBjdXJzb3IgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIGN1cnNvci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBjdXJzb3IubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IGN1cnNvci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gY3Vyc29yLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBjdXJzb3IubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBjdXJzb3IuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gY3Vyc29yLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBjdXJzb3IuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gY3Vyc29yLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChjdXJzb3IucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJpbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvU2NlbmUnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiAxMCxcbiAgICAgICAgZ3JpZENvbHM6IDEwLFxuICAgICAgICBncmlkTGluZXM6IDEwLFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNCxcbiAgICAgICAgZ3JpZExpbmVzOiA0LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMucGxheWVycyA9IFtdXG4gICAgdGhpcy5zY29yZXMgPSBbMCwgMF1cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gMFxuXG4gICAgLy8gTG9hZCBDdXJyZW50IFNjZW5lIGltYWdlXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcbiAgICBpbWcuc3JjID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF0uYmtnXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXRQbGF5ZXJzKClcblxuICAgICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZShcbiAgICAgICAgdGhpcy5kb20uc2NlbmUsXG4gICAgICAgIHNjZW5lLmJrZyxcbiAgICAgICAgc2NlbmUuaXRlbSxcbiAgICAgICAgc2NlbmUubnVtSXRlbXMsXG4gICAgICAgIHNjZW5lLmdyaWRDb2xzLFxuICAgICAgICBzY2VuZS5ncmlkTGluZXMsXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUnKSxcbiAgICAgIGltYWdlUGxhY2Vob2xkZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnNjZW5lX19tZXNzYWdlJyksXG4gICAgICBzY29yZUNlbnRlclJlY2FwOiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJzKCkge1xuICAgIHRoaXMubnVtUG9pbnRzID0gOFxuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnZiSGVpZ2h0ID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRIZWlnaHRcbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcblxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG51bVBvaW50czogdGhpcy5udW1Qb2ludHMsXG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgJ3JlZCcsXG4gICAgICAnYmx1ZScsXG4gICAgXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5jdXJzb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24ob2JqLCB7IGVsOiB0aGlzLmRvbS5jdXJzb3JzW2ldLCBpbmRleDogaSwgY29sb3I6IGNvbG9yc1tpXSB9KVxuICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gobmV3IFBsYXllcihwcm9wcykpXG4gICAgfVxuICB9XG5cbiAgc2NvcmUocGxheWVyLCBpdGVtKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgdGhpcy5zY29yZXNbcGxheWVyLmluZGV4XSArPSAxXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXBbaV0uaW5uZXJIVE1MID0gYFAtJHtwbGF5ZXIuaW5kZXggKyAxfSA6ICR7dGhpcy5zY29yZXNbcGxheWVyLmluZGV4XX1gXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gaXRlbVxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdzY29yZV9faXRlbScpXG4gICAgdGhpcy5kb20uc2NvcmVJdGVtc1twbGF5ZXIuaW5kZXhdLmFwcGVuZENoaWxkKGltZylcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBpZiAoIWVuZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH1cblxuICBlbmRTY2VuZSgpIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnZW5kIG9mIHNjZW5lJywgJ2JsYWNrJywgdHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUodGhpcy5jdXJyZW50U2NlbmVJbmRleCArIDEpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZShcbiAgICAgIHRoaXMuZG9tLnNjZW5lLFxuICAgICAgc2NlbmUuYmtnLFxuICAgICAgc2NlbmUuaXRlbSxcbiAgICAgIHNjZW5lLm51bUl0ZW1zLFxuICAgICAgc2NlbmUuZ3JpZENvbHMsXG4gICAgICBzY2VuZS5ncmlkTGluZXMsXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgIClcbiAgfVxuXG4gIGRlc3Ryb3lTY2VuZShzY2VuZSkge1xuICAgIC8vIGNsZWFuIGNvbXBvbmVudFxuICAgIGlmIChzY2VuZS5kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNjZW5lLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUN1c3RvbUV2ZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50J1xuXG5jbGFzcyBSQUZNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGhhbmRsZVJBRiA9IG5vdyA9PiB7XG4gICAgLy8gbm93ID09PSB0aW1lIGluIG1zXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSQUYpXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ1JBRicsIHsgbm93IH0pKVxuICB9XG5cbiAgcmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSQUZNYW5hZ2VyKClcbiIsImZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgIGRldGFpbDogZGF0YSxcbiAgfSlcbiAgcmV0dXJuIGV2ZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1c3RvbUV2ZW50XG4iLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KG8pIHtcblxuICBmb3IgKGxldCBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcblxuICByZXR1cm4gb1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5jZXN0b3IoZWwsIGNsYXNzTmFtZSkge1xuXG4gIHdoaWxlICgoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXgoZWwpIHtcblxuICByZXR1cm4gQXJyYXkuZnJvbShlbC5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGVsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMUGFyYW1ldGVycygpIHtcblxuICBjb25zdCBwYXJhbXMgPSB7fVxuXG4gIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcblxuICAgIGNvbnN0IHBhcnRzID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgnJicpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGNvbnN0IG52ID0gcGFydHNbaV0uc3BsaXQoJz0nKVxuXG4gICAgICBpZiAoIW52WzBdKSBjb250aW51ZVxuXG4gICAgICBwYXJhbXNbbnZbMF1dID0gbnZbMV0gfHwgdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJhbXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViR0woKSB7XG4gIC8vIE9uIGNyw6llIHVuIMOpbMOpbWVudCBjYW52YXMuIExlIGNhbnZhcyBuJ2VzdCBwYXNcbiAgLy8gYWpvdXTDqSBhdSBkb2N1bWVudCBldCBpbCBuJ2VzdCBkb25jIGphbWFpc1xuICAvLyBhZmZpY2jDqSBkYW5zIGxhIGZlbsOqdHJlIGR1IG5hdmlnYXRldXJcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5cbiAgLy8gT24gcsOpY3Vww6hyZSBsZSBjb250ZXh0ZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgLy8gZGVwdWlzIGwnw6lsw6ltZW50IGNhbnZhcy5cbiAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpXG5cbiAgLy8gT24gYWZmaWNoZSBsZSByw6lzdWx0YXQuXG4gIGlmIChnbCAmJiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIHRydWVcbiAgZWxzZSByZXR1cm4gZmFsc2VcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpIHtcblxuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGYWNlYm9va0FwcCgpIHtcblxuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmFcblxuICByZXR1cm4gdWEuaW5kZXhPZignRkJBTicpID4gLTEgfHwgdWEuaW5kZXhPZignRkJBVicpID4gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9CaW5kKHNlbGYpIHtcblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcblxuICAgIGNvbnN0IHZhbCA9IHNlbGZba2V5XVxuXG4gICAgaWYgKGtleSAhPT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSBzZWxmW2tleV0gPSB2YWwuYmluZChzZWxmKVxuICB9XG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfcXVlcnlfc3RyaW5nIChxdWVyeSkge1xuICBsZXQgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJylcbiAgbGV0IHF1ZXJ5X3N0cmluZyA9IHt9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpXG4gICAgLy8gSWYgZmlyc3QgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICBpZiAodHlwZW9mIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKVxuICAgICAgLy8gSWYgc2Vjb25kIGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IGFyciA9IFtxdWVyeV9zdHJpbmdbcGFpclswXV0sIGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKV1cbiAgICAgIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9IGFyclxuICAgICAgLy8gSWYgdGhpcmQgb3IgbGF0ZXIgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlfc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJRVZlcnNpb24oKSB7XG5cbiAgbGV0IG15TmF2ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG5cbiAgcmV0dXJuIG15TmF2LmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgPyBwYXJzZUludChteU5hdi5zcGxpdCgnbXNpZScpWzFdKSA6IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCkgeyAvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxuICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgbGV0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICByZWN0LnRvcCA+PSAwIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgJiYgLy8gc3BlY2lmaWMgbW9kaWZpY2F0aW9uXG4gICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICByZWN0LmJvdHRvbSA8PSBlbGVtZW50Lm9mZnNldEhlaWdodCAmJiAvLyBzcGVjaWZpYyBtb2RpZmljYXRpb25cbiAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBodG1sLmNsaWVudFdpZHRoKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgbGV0IG5hbWUgPSBgJHtjbmFtZX09YFxuICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpXG4gIGxldCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKVxuICBmb3IobGV0IGkgPSAwOyBpIDxjYS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gY2FbaV1cbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpXG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpXG4gICAgfVxuICB9XG4gIHJldHVybiAnJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlcigpIHtcbiAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICB0ZW0sXG4gICAgTSA9IHVhLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSkgfHwgW11cbiAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xuICAgIHRlbSA9IC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW11cbiAgICByZXR1cm4gYElFICR7KHRlbVsxXSB8fCAnJyl9YFxuICB9XG4gIGlmIChNWzFdID09PSAnQ2hyb21lJykge1xuICAgIHRlbSA9IHVhLm1hdGNoKC9cXGIoT1BSfEVkZ2UpXFwvKFxcZCspLylcbiAgICBpZiAodGVtICE9PSBudWxsKSByZXR1cm4gdGVtLnNsaWNlKDEpLmpvaW4oJyAnKS5yZXBsYWNlKCdPUFInLCAnT3BlcmEnKVxuICB9XG4gIE0gPSBNWzJdID8gW01bMV0sIE1bMl1dIDogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J11cbiAgdGVtID0gdWEubWF0Y2goL3ZlcnNpb25cXC8oXFxkKykvaSlcbiAgaWYgKHRlbSAhPT0gbnVsbCkgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKVxuICByZXR1cm4gTS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UodmFsLCBvbGRNaW4sIG9sZE1heCwgbmV3TWluLCBuZXdNYXgpIHtcblxuXHRyZXR1cm4gKHZhbCAtIG9sZE1pbikgKiAobmV3TWF4IC0gbmV3TWluKSAvIChvbGRNYXggLSBvbGRNaW4pICsgbmV3TWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0KG1pbiwgbWF4LCBkZWNpbWFscyA9IDEpIHtcblxuXHRyZXR1cm4gcGFyc2VGbG9hdCgoTWF0aC5yYW5kb20oKSAqIChtaW4gLSBtYXgpICsgbWF4KS50b0ZpeGVkKGRlY2ltYWxzKSwgMTApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShyYWRpYW5zKSB7XG5cblx0cmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihkZWdyZWVzKSB7XG5cblx0cmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBc3BlY3RSYXRpb0ZpdChzcmNXaWR0aCwgc3JjSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBjb3ZlciA9IHRydWUpIHtcblxuXHRjb25zdCBmbiA9IGNvdmVyID8gTWF0aC5tYXggOiBNYXRoLm1pblxuXHRjb25zdCByYXRpbyA9IGZuKG1heFdpZHRoIC8gc3JjV2lkdGgsIG1heEhlaWdodCAvIHNyY0hlaWdodClcblxuXHRyZXR1cm4ge1xuXHRcdHc6IHBhcnNlSW50KHNyY1dpZHRoICogcmF0aW8sIDEwKSxcblx0XHRoOiBwYXJzZUludChzcmNIZWlnaHQgKiByYXRpbywgMTApLFxuXHRcdHJhdGlvXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50c0Rpc3QocDEsIHAyKSB7XG5cblx0cmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICogKHAxLnggLSBwMi54KSArIChwMS55IC0gcDIueSkgKiAocDEueSAtIHAyLnkpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29lZmZEaXJlY3RldXIocDEsIHAyKSB7XG5cblx0Y29uc3QgbSA9IChwMS55IC0gcDIueSkgLyAocDEueCAtIHAyLngpXG5cdGNvbnN0IHAgPSBwMS55IC0gbSAqIHAxLnhcblxuXHRyZXR1cm4ge1xuXHRcdG0sXG5cdFx0cFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kWmVybyhzdHIsIHRvdGFsTmJyLCB2YWwgPSAwKSB7XG5cblx0cmV0dXJuIHN0ci50b1N0cmluZygpLmxlbmd0aCA8IHRvdGFsTmJyID8gcHJlcGVuZFplcm8odmFsLnRvU3RyaW5nKCkgKyBzdHIsIHRvdGFsTmJyKSA6IHN0clxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQodmFsdWUsIGRlYykge1xuXG5cdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogZGVjKSAvIGRlY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluKGFycikge1xuXG5cdGxldCBtaW4gPSBhcnIucmVkdWNlKChhLGIpID0+IHtcblx0XHRyZXR1cm4gTWF0aC5taW4oYSwgYilcblx0fSlcblxuXHRyZXR1cm4gbWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXgoYXJyKSB7XG5cblx0bGV0IG1heCA9IGFyci5yZWR1Y2UoKGEsYikgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1heChhLCBiKVxuXHR9KVxuXG5cdHJldHVybiBtYXhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSB7XG5cdGxldCB1bmlxdWVfYXJyYXkgPSBbXVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh1bmlxdWVfYXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuXHRcdFx0dW5pcXVlX2FycmF5LnB1c2goYXJyW2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5pcXVlX2FycmF5XG59XG5cbiIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgeGxpbms6aHJlZj1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nXCIpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSBzY29yZSBib2FyZCAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjb3JlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMTo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fY2VudGVyXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidC0zMi0tYm9sZFxcXCI+SXRlbSB0byBmaW5kOjwvcD5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xIDogMDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yIDogMDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==