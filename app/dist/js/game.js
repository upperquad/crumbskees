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
      var _this2 = this;

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
        _this2.dom();

        _this2.setPlayers();

        var scene = _this2.scenes[_this2.currentSceneIndex];
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

      if (!end) {
        setTimeout(function () {
          div.remove();
        }, 3000);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvbWFuYWdlcnMvUkFGTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvY3JlYXRlQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjEuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2dhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJ4IiwiY29zIiwieSIsInNpbiIsInRhcmdldE1pblgiLCJ0YXJnZXRNaW5ZIiwidGFyZ2V0TWF4WCIsInRhcmdldE1heFkiLCJzdGFydFgiLCJzdGFydFkiLCJkZXN0WCIsImRlc3RZIiwicHVzaCIsIlNjZW5lIiwiYmtnIiwiaXRlbSIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJlIiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsInRhcmdldFgiLCJ3aWR0aCIsInRhcmdldFkiLCJoZWlnaHQiLCJvZmZzZXRUb3AiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsInBsYXllciIsInBsYXllcnMiLCJpdGVtcyIsImxlbmd0aCIsImZvdW5kIiwic2NvcmUiLCJpdGVtSW1nIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjdXJzb3IiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJkb20iLCJzZXQiLCJzdmdTY2VuZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwiZml0U2NlbmVUb0ltYWdlIiwiaW5jcmVhc2VNYXgiLCJpdGVtU2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiZ2V0T2Zmc2V0TGVmdCIsInBhcmVudE5vZGUiLCJnZXRPZmZzZXRUb3AiLCJzZXRDbGlwUGF0aElkIiwic2V0R3JpZCIsInNldEl0ZW1zIiwiZXZlbnRzIiwiZXZlbnRzUkFGIiwiaWQiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInRva2VuIiwiaG9zdCIsImxvY2F0aW9uIiwib3JpZ2luIiwicmVwbGFjZSIsIndlYnNvY2tldCIsIldlYlNvY2tldCIsIm51bWJlcnMiLCJnZXRFbGVtZW50QnlJZCIsImJ1YmJsZSIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsInNwbGl0IiwiaW5pdCIsInJlbG9hZCIsImlubmVySFRNTCIsIm1haW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRQbGF5ZXJzIiwic2NlbmUiLCJjdXJyZW50U2NlbmUiLCJpbWFnZVBsYWNlaG9sZGVyIiwiY3Vyc29ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzYWdlIiwic2NvcmVDZW50ZXJSZWNhcCIsInNjb3JlSXRlbXMiLCJjb2xvcnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwb3BVcE1lc3NhZ2UiLCJlbmQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJkZXN0cm95IiwiRnVuY3Rpb24iLCJSQUZNYW5hZ2VyIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGlzcGF0Y2hFdmVudCIsImNyZWF0ZUN1c3RvbUV2ZW50IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsInNodWZmbGVBcnJheSIsIm8iLCJmbG9vciIsImdldEFuY2VzdG9yIiwiY2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiZ2V0SW5kZXgiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsImluZGV4T2YiLCJnZXRVUkxQYXJhbWV0ZXJzIiwicGFyYW1zIiwic2VhcmNoIiwicGFydHMiLCJzdWJzdHJpbmciLCJudiIsImlzV2ViR0wiLCJjYW52YXMiLCJnbCIsImdldENvbnRleHQiLCJXZWJHTFJlbmRlcmluZ0NvbnRleHQiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJpc0ZhY2Vib29rQXBwIiwidWEiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImF1dG9CaW5kIiwic2VsZiIsImdldE93blByb3BlcnR5TmFtZXMiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImtleSIsInZhbCIsImJpbmQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJwYXJzZV9xdWVyeV9zdHJpbmciLCJxdWVyeSIsInZhcnMiLCJxdWVyeV9zdHJpbmciLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyIiwiSUVWZXJzaW9uIiwibXlOYXYiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlSW50IiwiaXNJblZpZXdwb3J0IiwicmVjdCIsImh0bWwiLCJib3R0b20iLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImdldENvb2tpZSIsImNuYW1lIiwibmFtZSIsImRlY29kZWRDb29raWUiLCJjb29raWUiLCJjYSIsImMiLCJjaGFyQXQiLCJicm93c2VyIiwidGVtIiwiTSIsIm1hdGNoIiwidGVzdCIsImV4ZWMiLCJqb2luIiwiYXBwTmFtZSIsImFwcFZlcnNpb24iLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIiwib3V0RXhwbyIsIm4iLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwicmFuZ2UiLCJvbGRNaW4iLCJvbGRNYXgiLCJuZXdNaW4iLCJuZXdNYXgiLCJ0bXAiLCJyYW5kb21GbG9hdCIsImRlY2ltYWxzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b0RlZ3JlZSIsInJhZGlhbnMiLCJ0b1JhZGlhbiIsImRlZ3JlZXMiLCJjYWxjdWxhdGVBc3BlY3RSYXRpb0ZpdCIsInNyY1dpZHRoIiwic3JjSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjb3ZlciIsImZuIiwicmF0aW8iLCJ3IiwiaCIsImdldFBvaW50c0Rpc3QiLCJzcXJ0IiwiZ2V0Q29lZmZEaXJlY3RldXIiLCJtIiwicCIsInByZXBlbmRaZXJvIiwic3RyIiwidG90YWxOYnIiLCJ0b1N0cmluZyIsInJvdW5kIiwiZGVjIiwiZ2V0TWluIiwicmVkdWNlIiwiYSIsImIiLCJnZXRNYXgiLCJyZW1vdmVEdXBsaWNhdGVzIiwidW5pcXVlX2FycmF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FB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O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0EsVUFBVSxtQkFBTyxDQUFDLHlEQUFXO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrdEJBQSt0QixtQkFBTyxDQUFDLDBGQUE0QyxnS0FBZ0ssbUJBQU8sQ0FBQywwRkFBNEMscWNBQXFjLG1CQUFPLENBQUMsd0ZBQTJDLHliIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgICBudW1Qb2ludHMsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IG51bVBvaW50c1xuICAgIHRoaXMuY2VudGVyWCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMubWluUmFkaXVzID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1IC8vIDcwJSBvZiBmdWxsIHNpemUgLyAyIC0tPiBzaG91bGQgYmUgYmFzZWQgb24gd2lkdGggdmlld2JveFxuICAgIHRoaXMubWF4UmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLm1pblJhZGl1cyAqIDAuMlxuICAgIHRoaXMubWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjQ1XG4gICAgdGhpcy5tYXhNaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNTVcbiAgICB0aGlzLm1pbkR1cmF0aW9uID0gNzAwXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDkwMFxuXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3csIGdldE9mZnNldFRvcCwgZ2V0T2Zmc2V0TGVmdCB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IGluT3V0U2luZSB9IGZyb20gJy4uL3V0aWxzL2Vhc2UnXG5pbXBvcnQgeyByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBpdGVtSW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGVsLCBia2csIGl0ZW0sIG51bUl0ZW1zLCBncmlkQ29scywgZ3JpZExpbmVzLCBpbmRleCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsXG4gICAgdGhpcy5ia2cgPSBia2dcbiAgICB0aGlzLml0ZW0gPSBpdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IGdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuZml0U2NlbmVUb0ltYWdlKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG5cbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDVcblxuICAgIC8vIHZhbHVlcyBmb3IgbW91c2UgZXZlbnRcbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIGl0ZW1JbWcpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGVsOiBzdmdJbWFnZSxcbiAgICAgICAgZGVidWdFbDogZGl2LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgfVxuICAgICAgLy8gYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLml0ZW1zLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIGZpdFNjZW5lVG9JbWFnZSgpIHtcbiAgICAvLyBzZXQgdmlld2JveCB2YWx1ZXNcbiAgICB0aGlzLmRvbS5zdmdTY2VuZS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0fWApXG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgdGhpcy5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHRoaXMuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHRoaXMuZXZlbnRZID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcbiAgICB0aGlzLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICB0aGlzLnRhcmdldFggPSB0aGlzLmV2ZW50WCAvIHRoaXMud2lkdGggKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIHZpZXdib3ggdW5pdHMgaGVyZVxuICAgIHRoaXMudGFyZ2V0WCAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyB0aGlzLmNlbnRlclhcbiAgICB0aGlzLnRhcmdldFkgPSB0aGlzLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICB0aGlzLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gZSB3aWxsIGJlIGN1cnJlbnQgY3Vyc29yIHdpdGggcG9zaXRpb25zXG4gICAgLy8gaWYgY3Vyc29yIHBvc2l0aW9uXG4gICAgLy8gQ2hlY2sgaWYgY3Vyc29yIGl0ZW0gaXMgZm91bmRcbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbMF1cbiAgICBjb25zdCB4ID0gdGhpcy5ldmVudFggLyB0aGlzLndpZHRoXG4gICAgY29uc3QgeSA9IHRoaXMuZXZlbnRZIC8gdGhpcy5oZWlnaHRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIGl0ZW1JbWcpXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5udW1JdGVtRm91bmQgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICB0aGlzLnggPSB0aGlzLnggKyAodGhpcy50YXJnZXRYIC0gdGhpcy54KSAqIDAuMVxuICAgIHRoaXMueSA9IHRoaXMueSArICh0aGlzLnRhcmdldFkgLSB0aGlzLnkpICogMC4xXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t5XVxuXG4gICAgICAvLyBGb3IgZWFjaCBwb2ludHMgb2YgdGhlIGN1cnNvciAob3JnYW5pYyBzaGFwZSlcbiAgICAgIC8vIENyZWF0ZSBvcmdhbmljIHNoYXBlIC8gVHdlZW4gYWxsIHBvaW50c1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJzb3IucG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gY3Vyc29yLnBvaW50c1tpXVxuXG4gICAgICAgIC8vIEZyb20gc2NyYXRjaCB0d2VlbjpcbiAgICAgICAgLy8gcGVyY2VudCBpcyBnb2luZyBmcm9tIDAgdG8gMSBpbiBYIHNlY29uZHMgd2hlcmUgWCBpcyB0aGUgXCJkdXJhdGlvbiB2YXJpYWJsZVwiLlxuICAgICAgICAvLyBFYWNoIHBvaW50cyBzdGFydGluZyB2YWx1ZSBpcyBnb2luZyB0byBoaXMgZGVzdGluYXRpb24gdmFsdWUgaW4gWCBzZWNvbmRzXG4gICAgICAgIC8vIHRoZW4gSSB1c2UgZWFzaW5nIGZ1bmN0aW9ucyB0byBtb2RpZnkgdGhlIHZhbHVlIGN1cnZlIHRocm91Z2ggdGltZS5cbiAgICAgICAgY29uc3QgcGVyY2VudCA9IChub3cgLSBwb2ludC5zdGFydEFuaW0pIC8gcG9pbnQuZHVyYXRpb24gKiB0aGlzLmFjY2VsZXJhdGlvblxuXG4gICAgICAgIHBvaW50LnggPSBwb2ludC5zdGFydFggKyAocG9pbnQuZGVzdFggLSBwb2ludC5zdGFydFgpICogaW5PdXRTaW5lKHBlcmNlbnQpXG4gICAgICAgIHBvaW50LnkgPSBwb2ludC5zdGFydFkgKyAocG9pbnQuZGVzdFkgLSBwb2ludC5zdGFydFkpICogaW5PdXRTaW5lKHBlcmNlbnQpXG5cbiAgICAgICAgaWYgKHBlcmNlbnQgPj0gMSkge1xuICAgICAgICAgIC8vIGVuZCBvZiBhbmltYXRpb24sXG4gICAgICAgICAgLy8gcmVzdGFydCBhbmltYXRpb24gYnkgZ29pbmcgYmFja1xuICAgICAgICAgIGlmIChwb2ludC5yZXZlcnNlQW5pbSkge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gZmFsc2VcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWluWFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNaW5ZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IHRydWVcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0QW5pbSA9IGdldE5vdygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW92ZSBjdXJzb3IgYmFzZWQgb24gbW91c2VcbiAgICAgICAgaWYgKHkgPT09IDApIHtcbiAgICAgICAgICBwb2ludC54ICs9IHRoaXMueFxuICAgICAgICAgIHBvaW50LnkgKz0gdGhpcy55XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBjdXJzb3JcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgY3Vyc29yIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBjdXJzb3IuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gY3Vyc29yLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBjdXJzb3IubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IGN1cnNvci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gY3Vyc29yLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gY3Vyc29yLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IGN1cnNvci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gY3Vyc29yLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IGN1cnNvci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwoY3Vyc29yLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbmltcG9ydCBzY2VuZTFJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xuXG5jb25zdCBpZCA9ICdld3BpamYnXG5jb25zdCB0b2tlbiA9ICd3ZWlqZndlcGZpandmcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhvc3QgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luLnJlcGxhY2UoL15odHRwLywgJ3dzJylcbiAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYCR7dGhpcy5ob3N0fS9nYW1lYClcbiAgICB0aGlzLm51bWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVycycpXG4gICAgdGhpcy5idWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlJylcblxuICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnNwbGl0KCcsJylcblxuICAgICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAgIGlmIChkYXRhWzFdID09PSBpZCAmJiBkYXRhWzJdID09PSB0b2tlbikge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8vIGNhbiBiZSBhbiBlcnJvciBvYmplY3RcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY29tbWFuZCcpIHtcbiAgICAgICAgaWYgKGRhdGFbMV0gPT09ICdyZXNldCcpIHtcbiAgICAgICAgICAvLyBUT0RPLCBjYW4gZXZlbiBkbyBcIktpY2sgUGxheWVyIDEgT3V0XCIsIFwiS2ljayBQbGF5ZXIgMiBPdXRcIixcbiAgICAgICAgICAvLyBcIktpY2snZW0gQm90aCBPdXRcIiBidXR0b25zXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVsxXSA9PT0gJ3JlZnJlc2gnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZChmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY29udHJvbCcpIHtcbiAgICAgICAgdGhpcy5idWJibGUuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZGF0YVsxXX0gKiAxMDAlKWBcbiAgICAgICAgdGhpcy5idWJibGUuc3R5bGUudG9wID0gYGNhbGMoJHtkYXRhWzJdfSAqIDEwMCUpYFxuICAgICAgfVxuXG4gICAgICB0aGlzLm51bWJlcnMuaW5uZXJIVE1MID0gZXZlbnQuZGF0YVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgLy8gc2NvcmVzXG4gICAgdGhpcy5zY2VuZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogMTAsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDQsXG4gICAgICAgIGdyaWRMaW5lczogNCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIHRoaXMuc2V0UGxheWVycygpXG5cbiAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoXG4gICAgICAgIHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBzY2VuZS5ia2csXG4gICAgICAgIHNjZW5lLml0ZW0sXG4gICAgICAgIHNjZW5lLm51bUl0ZW1zLFxuICAgICAgICBzY2VuZS5ncmlkQ29scyxcbiAgICAgICAgc2NlbmUuZ3JpZExpbmVzLFxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBpbWFnZVBsYWNlaG9sZGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19wbGFjZWhvbGRlcicpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fbWVzc2FnZScpLFxuICAgICAgc2NvcmVDZW50ZXJSZWNhcDogdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19jZW50ZXJfX3JlY2FwJyksXG4gICAgICBzY29yZUl0ZW1zOiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgfVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLnZiV2lkdGggPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldFdpZHRoXG4gICAgdGhpcy52YkhlaWdodCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0SGVpZ2h0XG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG5cbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBudW1Qb2ludHM6IHRoaXMubnVtUG9pbnRzLFxuICAgIH1cblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICdyZWQnLFxuICAgICAgJ2JsdWUnLFxuICAgIF1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uY3Vyc29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKG9iaiwgeyBlbDogdGhpcy5kb20uY3Vyc29yc1tpXSwgaW5kZXg6IGksIGNvbG9yOiBjb2xvcnNbaV0gfSlcbiAgICAgIHRoaXMucGxheWVycy5wdXNoKG5ldyBQbGF5ZXIocHJvcHMpKVxuICAgIH1cbiAgfVxuXG4gIHNjb3JlKHBsYXllciwgaXRlbSkge1xuICAgIHRoaXMucG9wVXBNZXNzYWdlKCcrMScsIHBsYXllci5jb2xvcikgLy8gKyBjb2xvciBwbGF5ZXJcblxuICAgIHRoaXMuc2NvcmVzW3BsYXllci5pbmRleF0gKz0gMVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvdW5kJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHBsYXllci5pbmRleCkge1xuICAgICAgICB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwW2ldLmlubmVySFRNTCA9IGBQLSR7cGxheWVyLmluZGV4ICsgMX0gOiAke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2NvcmVfX2l0ZW0nKVxuICAgIHRoaXMuZG9tLnNjb3JlSXRlbXNbcGxheWVyLmluZGV4XS5hcHBlbmRDaGlsZChpbWcpXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgaWYgKCFlbmQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXYucmVtb3ZlKClcbiAgICAgIH0sIDMwMDApXG4gICAgfVxuICB9XG5cbiAgZW5kU2NlbmUoKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJ2VuZCBvZiBzY2VuZScsICdibGFjaycsIHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lSW5kZXggKyAxKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICB1cGRhdGVTY2VuZShpbmRleCkge1xuICAgIHRoaXMuZGVzdHJveVNjZW5lKHRoaXMuY3VycmVudFNjZW5lKVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IGluZGV4XG4gICAgY29uc3Qgc2NlbmUgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgU2NlbmUoXG4gICAgICB0aGlzLmRvbS5zY2VuZSxcbiAgICAgIHNjZW5lLmJrZyxcbiAgICAgIHNjZW5lLml0ZW0sXG4gICAgICBzY2VuZS5udW1JdGVtcyxcbiAgICAgIHNjZW5lLmdyaWRDb2xzLFxuICAgICAgc2NlbmUuZ3JpZExpbmVzLFxuICAgICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICApXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVBcnJheShvKSB7XG5cbiAgZm9yIChsZXQgaiwgeCwgaSA9IG8ubGVuZ3RoOyBpOyBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSksIHggPSBvWy0taV0sIG9baV0gPSBvW2pdLCBvW2pdID0geCk7XG5cbiAgcmV0dXJuIG9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuY2VzdG9yKGVsLCBjbGFzc05hbWUpIHtcblxuICB3aGlsZSAoKGVsID0gZWwucGFyZW50RWxlbWVudCkgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKTtcblxuICByZXR1cm4gZWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZGV4KGVsKSB7XG5cbiAgcmV0dXJuIEFycmF5LmZyb20oZWwucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihlbClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTFBhcmFtZXRlcnMoKSB7XG5cbiAgY29uc3QgcGFyYW1zID0ge31cblxuICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG5cbiAgICBjb25zdCBwYXJ0cyA9IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoJyYnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICBjb25zdCBudiA9IHBhcnRzW2ldLnNwbGl0KCc9JylcblxuICAgICAgaWYgKCFudlswXSkgY29udGludWVcblxuICAgICAgcGFyYW1zW252WzBdXSA9IG52WzFdIHx8IHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyYW1zXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dlYkdMKCkge1xuICAvLyBPbiBjcsOpZSB1biDDqWzDqW1lbnQgY2FudmFzLiBMZSBjYW52YXMgbidlc3QgcGFzXG4gIC8vIGFqb3V0w6kgYXUgZG9jdW1lbnQgZXQgaWwgbidlc3QgZG9uYyBqYW1haXNcbiAgLy8gYWZmaWNow6kgZGFucyBsYSBmZW7DqnRyZSBkdSBuYXZpZ2F0ZXVyXG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuXG4gIC8vIE9uIHLDqWN1cMOocmUgbGUgY29udGV4dGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gIC8vIGRlcHVpcyBsJ8OpbMOpbWVudCBjYW52YXMuXG4gIGxldCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKVxuXG4gIC8vIE9uIGFmZmljaGUgbGUgcsOpc3VsdGF0LlxuICBpZiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHJldHVybiB0cnVlXG4gIGVsc2UgcmV0dXJuIGZhbHNlXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG91Y2goKSB7XG5cbiAgcmV0dXJuICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmFjZWJvb2tBcHAoKSB7XG5cbiAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhXG5cbiAgcmV0dXJuIHVhLmluZGV4T2YoJ0ZCQU4nKSA+IC0xIHx8IHVhLmluZGV4T2YoJ0ZCQVYnKSA+IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQmluZChzZWxmKSB7XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2VsZi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSB7XG5cbiAgICBjb25zdCB2YWwgPSBzZWxmW2tleV1cblxuICAgIGlmIChrZXkgIT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykgc2VsZltrZXldID0gdmFsLmJpbmQoc2VsZilcbiAgfVxuXG4gIHJldHVybiBzZWxmXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGNvbnN0IGJvZHlUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcFxuXG4gIHJldHVybiBib3VuZHMudG9wICsgYm9keVRvcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICByZXR1cm4gYm91bmRzLmxlZnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX3F1ZXJ5X3N0cmluZyAocXVlcnkpIHtcbiAgbGV0IHZhcnMgPSBxdWVyeS5zcGxpdCgnJicpXG4gIGxldCBxdWVyeV9zdHJpbmcgPSB7fVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKVxuICAgIC8vIElmIGZpcnN0IGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgaWYgKHR5cGVvZiBxdWVyeV9zdHJpbmdbcGFpclswXV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeV9zdHJpbmdbcGFpclswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSlcbiAgICAgIC8vIElmIHNlY29uZCBlbnRyeSB3aXRoIHRoaXMgbmFtZVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxldCBhcnIgPSBbcXVlcnlfc3RyaW5nW3BhaXJbMF1dLCBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSldXG4gICAgICBxdWVyeV9zdHJpbmdbcGFpclswXV0gPSBhcnJcbiAgICAgIC8vIElmIHRoaXJkIG9yIGxhdGVyIGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXS5wdXNoKGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5X3N0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSUVWZXJzaW9uKCkge1xuXG4gIGxldCBteU5hdiA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxuXG4gIHJldHVybiBteU5hdi5pbmRleE9mKCdtc2llJykgIT09IC0xID8gcGFyc2VJbnQobXlOYXYuc3BsaXQoJ21zaWUnKVsxXSkgOiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNJblZpZXdwb3J0KGVsZW1lbnQpIHsgLy8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcbiAgbGV0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIGxldCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gIHJldHVybiAoXG4gICAgcmVjdC50b3AgPj0gMCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICYmIC8vIHNwZWNpZmljIG1vZGlmaWNhdGlvblxuICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgcmVjdC5ib3R0b20gPD0gZWxlbWVudC5vZmZzZXRIZWlnaHQgJiYgLy8gc3BlY2lmaWMgbW9kaWZpY2F0aW9uXG4gICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgaHRtbC5jbGllbnRXaWR0aClcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XG4gIGxldCBuYW1lID0gYCR7Y25hbWV9PWBcbiAgbGV0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKVxuICBsZXQgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7JylcbiAgZm9yKGxldCBpID0gMDsgaSA8Y2EubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IGNhW2ldXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKVxuICAgIH1cbiAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gJydcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXIoKSB7XG4gIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgdGVtLFxuICAgIE0gPSB1YS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdXG4gIGlmICgvdHJpZGVudC9pLnRlc3QoTVsxXSkpIHtcbiAgICB0ZW0gPSAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdXG4gICAgcmV0dXJuIGBJRSAkeyh0ZW1bMV0gfHwgJycpfWBcbiAgfVxuICBpZiAoTVsxXSA9PT0gJ0Nocm9tZScpIHtcbiAgICB0ZW0gPSB1YS5tYXRjaCgvXFxiKE9QUnxFZGdlKVxcLyhcXGQrKS8pXG4gICAgaWYgKHRlbSAhPT0gbnVsbCkgcmV0dXJuIHRlbS5zbGljZSgxKS5qb2luKCcgJykucmVwbGFjZSgnT1BSJywgJ09wZXJhJylcbiAgfVxuICBNID0gTVsyXSA/IFtNWzFdLCBNWzJdXSA6IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddXG4gIHRlbSA9IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpXG4gIGlmICh0ZW0gIT09IG51bGwpIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSlcbiAgcmV0dXJuIE0uam9pbignICcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3coKSB7XG4gIHJldHVybiAnbm93JyBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3V0RXhwbyhuKSB7XG4gIGlmIChuID09PSAxKSB7XG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIHJldHVybiAxIC0gKDIgKiogKC0xMCAqIG4pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRTaW5lKG4pIHtcblx0cmV0dXJuIC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogbikpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHZhbCwgb2xkTWluLCBvbGRNYXgsIG5ld01pbiwgbmV3TWF4KSB7XG5cblx0cmV0dXJuICh2YWwgLSBvbGRNaW4pICogKG5ld01heCAtIG5ld01pbikgLyAob2xkTWF4IC0gb2xkTWluKSArIG5ld01pblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdCAvLyByZXR1cm4gcmFuZG9tIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIGNvbnN0IHRtcCA9IG1pblxuICAgIG1pbiA9IG1heFxuICAgIG1heCA9IHRtcFxuICB9XG4gIHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdChtaW4sIG1heCwgZGVjaW1hbHMgPSAxKSB7XG5cblx0cmV0dXJuIHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAobWluIC0gbWF4KSArIG1heCkudG9GaXhlZChkZWNpbWFscyksIDEwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUocmFkaWFucykge1xuXG5cdHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oZGVncmVlcykge1xuXG5cdHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQXNwZWN0UmF0aW9GaXQoc3JjV2lkdGgsIHNyY0hlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCwgY292ZXIgPSB0cnVlKSB7XG5cblx0Y29uc3QgZm4gPSBjb3ZlciA/IE1hdGgubWF4IDogTWF0aC5taW5cblx0Y29uc3QgcmF0aW8gPSBmbihtYXhXaWR0aCAvIHNyY1dpZHRoLCBtYXhIZWlnaHQgLyBzcmNIZWlnaHQpXG5cblx0cmV0dXJuIHtcblx0XHR3OiBwYXJzZUludChzcmNXaWR0aCAqIHJhdGlvLCAxMCksXG5cdFx0aDogcGFyc2VJbnQoc3JjSGVpZ2h0ICogcmF0aW8sIDEwKSxcblx0XHRyYXRpb1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludHNEaXN0KHAxLCBwMikge1xuXG5cdHJldHVybiBNYXRoLnNxcnQoKHAxLnggLSBwMi54KSAqIChwMS54IC0gcDIueCkgKyAocDEueSAtIHAyLnkpICogKHAxLnkgLSBwMi55KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvZWZmRGlyZWN0ZXVyKHAxLCBwMikge1xuXG5cdGNvbnN0IG0gPSAocDEueSAtIHAyLnkpIC8gKHAxLnggLSBwMi54KVxuXHRjb25zdCBwID0gcDEueSAtIG0gKiBwMS54XG5cblx0cmV0dXJuIHtcblx0XHRtLFxuXHRcdHBcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGVuZFplcm8oc3RyLCB0b3RhbE5iciwgdmFsID0gMCkge1xuXG5cdHJldHVybiBzdHIudG9TdHJpbmcoKS5sZW5ndGggPCB0b3RhbE5iciA/IHByZXBlbmRaZXJvKHZhbC50b1N0cmluZygpICsgc3RyLCB0b3RhbE5icikgOiBzdHJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKHZhbHVlLCBkZWMpIHtcblxuXHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIGRlYykgLyBkZWNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbihhcnIpIHtcblxuXHRsZXQgbWluID0gYXJyLnJlZHVjZSgoYSxiKSA9PiB7XG5cdFx0cmV0dXJuIE1hdGgubWluKGEsIGIpXG5cdH0pXG5cblx0cmV0dXJuIG1pblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4KGFycikge1xuXG5cdGxldCBtYXggPSBhcnIucmVkdWNlKChhLGIpID0+IHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoYSwgYilcblx0fSlcblxuXHRyZXR1cm4gbWF4XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEdXBsaWNhdGVzKGFycikge1xuXHRsZXQgdW5pcXVlX2FycmF5ID0gW11cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodW5pcXVlX2FycmF5LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcblx0XHRcdHVuaXF1ZV9hcnJheS5wdXNoKGFycltpXSlcblx0XHR9XG5cdH1cblx0cmV0dXJuIHVuaXF1ZV9hcnJheVxufVxuXG4iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJ1xuXG4vLyBpbXBvcnQgR2FtZUNvbW11bmljYXRvciBmcm9tICcuL2NvbXBvbmVudHMvR2FtZUNvbW11bmljYXRvcidcblxuLy8gbmV3IEdhbWVDb21tdW5pY2F0b3IoKVxuXG5pbXBvcnQgJy4vZnJvbnQtZW5kL2FwcCdcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJnYW1lXFxcIiBnYW1lPlxcbiAgPCEtLSBwbGF5aW5nIHNjZW5lIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NlbmVcXFwiIHNjZW5lPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fd3JhcHBlclxcXCI+XFxuICAgICAgPCEtLSBzdmcgc2NlbmUgZm9yIG1hc2tzIGV0Yy4uLiAtLT5cXG4gICAgICA8c3ZnIGNsYXNzPVxcXCJzY2VuZS1zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDM2IDYzMlxcXCIgc3Ryb2tlPVxcXCJibGFja1xcXCI+XFxuICAgICAgICA8ZGVmcz5cXG4gICAgICAgICAgPGNsaXBQYXRoIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoXFxcIj5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIxXFxcIiAvPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjJcXFwiIC8+XFxuICAgICAgICAgIDwvY2xpcFBhdGg+XFxuICAgICAgICA8L2RlZnM+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMVxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8cGF0aCBpZD1cXFwicGxheWVyMlxcXCIgY2xhc3M9XFxcImN1cnNvclxcXCIgc3Ryb2tlLXdpZHRoPVxcXCI2XFxcIj48L3BhdGg+XFxuICAgICAgICA8ZyBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aC1yZWZcXFwiPlxcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XFxcInNjZW5lLXN2Z19faW1hZ2VcXFwiIHhsaW5rOmhyZWY9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZ1wiKSArIFwiXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBzbGljZVxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY2VuZV9fcGxhY2Vob2xkZXJcXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gc2NvcmUgYm9hcmQgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY29yZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTE6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2NlbnRlclxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInQtMzItLWJvbGRcXFwiPkl0ZW0gdG8gZmluZDo8L3A+XFxuICAgICAgPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMSA6IDA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMiA6IDA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMjo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=