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
        gridCols: 6,
        gridLines: 6,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        maskedBkg: _assets_front_end_images_find_cat_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        item: _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        numItems: 5,
        gridCols: 8,
        gridLines: 8,
        effect: '?'
      }, {
        bkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        maskedBkg: _assets_front_end_images_bkg1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL0dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9SQUZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9jcmVhdGVDdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9lYXNlLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpZCIsImluZGV4IiwiY29sb3IiLCJudW1Qb2ludHMiLCJjZW50ZXJYIiwidmJXaWR0aCIsImNlbnRlclkiLCJ2YkhlaWdodCIsIm1pblJhZGl1cyIsIm1heFJhZGl1cyIsIm1pbk1pZGRsZVJhZGl1cyIsIm1heE1pZGRsZVJhZGl1cyIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJ4IiwieSIsInRhcmdldFgiLCJ0YXJnZXRZIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJjb3MiLCJzaW4iLCJ0YXJnZXRNaW5YIiwidGFyZ2V0TWluWSIsInRhcmdldE1heFgiLCJ0YXJnZXRNYXhZIiwic3RhcnRYIiwic3RhcnRZIiwiZGVzdFgiLCJkZXN0WSIsInB1c2giLCJwbGF5ZXJJZHMiLCJERUJVRyIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicGxheWVySWQiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsImdvb2RDbGljayIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjbGFtcCIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ0b2tlbnMiLCJtYWluIiwiaW5uZXJIVE1MIiwic2V0dXBUbXAiLCJzZXR1cE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJsaXN0ZW5TZXJ2ZXIiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInZhbGlkVG9rZW4iLCJmaXJzdFBsYXllcklkIiwic2VuZCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsInZhbHVlIiwibWluIiwibWF4IiwidG1wIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsQ0FBQyxZQUFNO0FBQ0w7QUFDQUEsUUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQUlBLDZEQUFKLEVBQXJCO0FBQ0QsQ0FIRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBRWZDLEVBRmUs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Qyx3RkFBMkMseWI7Ozs7Ozs7Ozs7O0FDQXIzQywrSiIsImZpbGUiOiJqcy9nYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvZ2FtZS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjOTBkOTA1YWM0ZGRlMTY3MTE1Y2M4NzRmYmQ5ODE3LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZWI4MGE1MjdkZTEwZTIyM2U4MmNkNDg1MWE0MWQxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ3OWU5MzU2YzA1MDAwMzllZjRmNzQ2YmE4MDIyYWRlLnBuZ1wiOyIsImltcG9ydCAnLi4vLi4vc2Nzcy9mcm9udC1lbmQvc3R5bGUuc2NzcydcblxuaW1wb3J0ICcuL21hbmFnZXJzL1JBRk1hbmFnZXInXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gbm90IHdvcmtpbmcgYW55bW9yZSBmb3Igc29tZSByZWFzb25cbigoKSA9PiB7XG4gIC8vIGltcG9ydCBHYW1lTWFuYW5nZXIgd2hlbiBET00gaXMgcmVhZHlcbiAgd2luZG93LkdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKClcbn0pKClcbiIsImltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaWQsXG4gICAgICBpbmRleCxcbiAgICAgIGNvbG9yLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgdGhpcy5lbCA9IGVsXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5udW1Qb2ludHMgPSA4XG4gICAgdGhpcy5jZW50ZXJYID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMuY2VudGVyWSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5taW5SYWRpdXMgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG4gICAgLy8gY3Vyc29yIHBvc2l0aW9uXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuaXNJbnNpZGVUaW1lID0gMFxuXG4gICAgdGhpcy5zZXRQb2ludHMoKVxuICB9XG5cbiAgc2V0UG9pbnRzKCkge1xuICAgIHRoaXMucG9pbnRzID0gW11cbiAgICAvLyBjcmVhdGUgXCJudW1Qb2ludHNcIiB4IHBvaW50c1xuICAgIGNvbnN0IHNsaWNlID0gKE1hdGguUEkgKiAyKSAvIHRoaXMubnVtUG9pbnRzXG4gICAgdGhpcy5zdGFydEFuZ2xlID0gcmFuZG9tKDAsIE1hdGguUEkgKiAyKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBvaW50czsgaSsrKSB7XG4gICAgICBjb25zdCBtYXJnZUFuZ2xlID0gcmFuZG9tKDAsIDAuMjgpIC8vIGkgLyAxLjJcbiAgICAgIC8vIHJhbmRvbWl6ZSB0aGUgc3RhcnQgdGltZSBvZiBhbmltYXRpb24gKHdlIGRvbid0IHdhbnQgdGhlIHR3ZWVuIHRvIGdvIGZyb20gMCB0byAxLCBpdCBjYW4gc3RhcnQgZGlyZWN0bHkgZnJvbSAwLjYgZm9yIGV4YW1wbGUpXG4gICAgICBjb25zdCBzdGFydEFuaW0gPSBnZXROb3coKSArIGkgKiByYW5kb20oMCwgdGhpcy5taW5EdXJhdGlvbilcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5zdGFydEFuZ2xlICsgaSAqIHNsaWNlICsgbWFyZ2VBbmdsZVxuICAgICAgY29uc3QgZHVyYXRpb24gPSByYW5kb20odGhpcy5taW5EdXJhdGlvbiwgdGhpcy5tYXhEdXJhdGlvbilcblxuICAgICAgY29uc3QgcG9pbnQgPSB7XG4gICAgICAgIGFuZ2xlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgc3RhcnRBbmltLFxuICAgICAgICB4OiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgeTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5ZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgfVxuXG4gICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuXG4gICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IGdldE9mZnNldFRvcCwgZ2V0T2Zmc2V0TGVmdCB9IGZyb20gJy4uL3V0aWxzL2RvbSdcbmltcG9ydCB7IGluT3V0U2luZSB9IGZyb20gJy4uL3V0aWxzL2Vhc2UnXG5pbXBvcnQgeyBjbGFtcCwgcmFuZG9tSW50IH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuaW1wb3J0IERFQlVHIGZyb20gJy4uL2NvbnN0YW50cy9EZWJ1ZydcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gb3B0aW9ucy5lbFxuICAgIHRoaXMuYmtnID0gb3B0aW9ucy5ia2dcbiAgICB0aGlzLm1hc2tlZEJrZyA9IG9wdGlvbnMubWFza2VkQmtnXG4gICAgdGhpcy5pdGVtID0gb3B0aW9ucy5pdGVtXG4gICAgdGhpcy5udW1JdGVtcyA9IG9wdGlvbnMubnVtSXRlbXNcbiAgICB0aGlzLmdyaWRDb2xzID0gb3B0aW9ucy5ncmlkQ29sc1xuICAgIHRoaXMuZ3JpZExpbmVzID0gb3B0aW9ucy5ncmlkTGluZXNcbiAgICB0aGlzLmluZGV4ID0gb3B0aW9ucy5pbmRleFxuICAgIHRoaXMudGltZSA9IDYwIC8vIGluIHNlY29uZHNcblxuICAgIHRoaXMuZG9tKClcbiAgICB0aGlzLnNldCgpXG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzdmdTY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmcnKSxcbiAgICAgIHN2Z01hc2tlZEltYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19faW1hZ2UnKSxcbiAgICAgIHN2Z0NsaXBQYXRoOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgnKSxcbiAgICAgIHN2Z0NsaXBQYXRoUmVmOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmJyksXG4gICAgfVxuICB9XG5cbiAgc2V0KCkge1xuICAgIHRoaXMuc2V0QmtncygpXG5cbiAgICAvLyBhc3N1bWluZyB3ZSBhbHdheXMgdXNlIGEgdmlld2JveCBvZiAxMDAgeCAxMDBcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmRlc3RBY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5jb2VmQWNjZWxlcmF0aW9uID0gMC4yXG4gICAgdGhpcy5pbmNyZWFzZU1heCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wN1xuICAgIC8vIGl0ZW1zXG4gICAgdGhpcy5pdGVtU2l6ZSA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNVxuXG4gICAgLy8gdmFsdWVzIGZvciBtb3VzZSBldmVudFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLm9mZnNldExlZnQgPSBnZXRPZmZzZXRMZWZ0KHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIHRoaXMub2Zmc2V0VG9wID0gZ2V0T2Zmc2V0VG9wKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgaWYgKHRoaXMuZG9tLnN2Z0NsaXBQYXRoKSB7XG4gICAgICB0aGlzLnNldENsaXBQYXRoSWQoKVxuICAgIH1cbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnBvcFVwTWVzc2FnZSgnU1RBUlQhJywgJ2JsYWNrJylcbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc3RhcnRUaW1lcih0aGlzLnRpbWUpXG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuaXRlbSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgYCR7eCAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgYCR7eSAqIDEwMH0lYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKC0ke3RoaXMuaXRlbVNpemUgLyAyfSAtJHt0aGlzLml0ZW1TaXplIC8gMn0pYClcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcblxuICAgICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuYXBwZW5kQ2hpbGQoc3ZnSW1hZ2UpXG5cbiAgICAgIC8vIGZha2UgaXRlbSBmb3IgZGVidWdnaW5nXG4gICAgICBsZXQgZGl2XG4gICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlYnVnJylcbiAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBgJHt4ICogMTAwfSVgXG4gICAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgc2V0QmtncygpIHtcbiAgICAvLyBzZXQgdmlld2JveCB2YWx1ZXMsIGZpdCBJbWFnZSB0byBzY2VuZVxuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aH0gJHt3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHR9YClcbiAgICAvLyBBZGQgbWFza2VkIGJrZ1xuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLmJrZylcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG4gICAgLy8gQWRkIFwiZnJvbnRcIiBia2dcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMubWFza2VkQmtnfSlgXG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICBpZiAoREVCVUcpIHdpbmRvd1tldl0oJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSlcbiAgICB3aW5kb3dbZXZdKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgZXZlbnRzUkFGKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgd2luZG93W2V2XSgnUkFGJywgdGhpcy5oYW5kbGVSQUYsIGZhbHNlKVxuICB9XG5cbiAgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1t3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVySWRzWzBdXVxuXG4gICAgcGxheWVyLmV2ZW50WCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXG4gICAgcGxheWVyLmV2ZW50WCAtPSB0aGlzLm9mZnNldExlZnRcbiAgICBwbGF5ZXIuZXZlbnRZID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcbiAgICBwbGF5ZXIuZXZlbnRZICs9IHNjcm9sbFlcblxuICAgIHBsYXllci50YXJnZXRYID0gcGxheWVyLmV2ZW50WCAvIHRoaXMud2lkdGggKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvLyBiZWNhdXNlIHdlJ3JlIHVzaW5nIHZpZXdib3ggdW5pdHMgaGVyZVxuICAgIHBsYXllci50YXJnZXRYIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBiZWNhdXNlIHN0YXJ0aW5nIHBvaW50IGlzIHBsYXllci5jZW50ZXJYXG4gICAgcGxheWVyLnRhcmdldFkgPSBwbGF5ZXIuZXZlbnRZIC8gdGhpcy5oZWlnaHQgKiB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLSB0aGlzLm9mZnNldFRvcFxuICAgIHBsYXllci50YXJnZXRZIC09IHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9IHBsYXllcklkID0+IHtcbiAgICBpZiAoREVCVUcpIHBsYXllcklkID0gcGxheWVySWRzWzBdXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3BsYXllcklkXVxuICAgIGNvbnN0IHggPSAocGxheWVyLnRhcmdldFggLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCkgKyAwLjVcbiAgICBjb25zdCB5ID0gKHBsYXllci50YXJnZXRZIC8gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0KSArIDAuNVxuXG4gICAgbGV0IGdvb2RDbGljayA9IGZhbHNlXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldXG4gICAgICBpZiAoIWl0ZW0uZm91bmQgJiZcbiAgICAgICAgeCA+IGl0ZW0ueCAtIHByZWNpc2lvbiAmJlxuICAgICAgICB4IDwgaXRlbS54ICsgcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPiBpdGVtLnkgLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA8IGl0ZW0ueSArIHByZWNpc2lvbikge1xuICAgICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuc2NvcmUocGxheWVyLCB0aGlzLml0ZW0pXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgICAgZ29vZENsaWNrID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnb29kQ2xpY2spIHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QuYWRkKCdnb29kJylcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ3dyb25nJylcbiAgICB9XG5cbiAgICAvLyB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LnJlbW92ZSgnZ29vZCcsICd3cm9uZycpXG4gICAgICAvLyBhZGQgYSByZWN0IHN2ZyBlbGVtZW50IGluIHRoZSBjbGlwcGF0aCBmb2xsb3dpbmcgdGhlXG4gICAgICAvLyBjdXJzb3IsIG9wYWNpdHk6MCBieSBkZWZhdWx0LCBkaXNwbGF5IGl0IHRvIGZpbGwgdGhlIGN1cnNvci5cbiAgICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkcy5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1t5XV1cblxuICAgICAgLy8gY2xhbXAgcGxheWVyIHBvc2l0aW9uIHRvIGxpbWl0IG9mIHRoZSBzY2VuZVxuICAgICAgcGxheWVyLnRhcmdldFggPSBjbGFtcChwbGF5ZXIudGFyZ2V0WCwgLXdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyKVxuICAgICAgcGxheWVyLnRhcmdldFkgPSBjbGFtcChwbGF5ZXIudGFyZ2V0WSwgLXdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIpXG5cbiAgICAgIHBsYXllci54ICs9IChwbGF5ZXIudGFyZ2V0WCAtIHBsYXllci54KSAqIDAuMVxuICAgICAgcGxheWVyLnkgKz0gKHBsYXllci50YXJnZXRZIC0gcGxheWVyLnkpICogMC4xXG5cblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBwbGF5ZXIgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBsYXllci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgcGxheWVyIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIHBsYXllclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBwbGF5ZXIgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIHBsYXllci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBwbGF5ZXIubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IHBsYXllci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gcGxheWVyLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChwbGF5ZXIucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJjb25zdCBERUJVRyA9IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgREVCVUdcbiIsImNvbnN0IFNlcnZlciA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpLFxuICB3ZWJzb2NrZXQ6IG5ldyBXZWJTb2NrZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpfS9nYW1lYCksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclxuIiwiXG5pbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcbmltcG9ydCBzZXR1cFRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gc2VydmVyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4uL2NvbnN0YW50cy9TZXJ2ZXInXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGcnXG5pbXBvcnQgc2NlbmUxSXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cblxuLy8gcHJlcGFyZSB0aGUgQ2hhcmFjdGVySWRcbi8vIENoYXJhY3RlcklkIC0tPiBnZXQgdGhlIGltYWdlIG9mIHRoZSBjaGFyYWN0ZXJcbi8vIGVuZCBzY2VuZTpcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgaWYgKCFERUJVRykge1xuICAgICAgU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwxYClcbiAgICAgICAgICB2YWxpZFRva2VuID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ZXJJZCA9IGRhdGFbMl1cbiAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZS5pbm5lckhUTUwgPSBgUGxheWVyICR7cGxheWVySWRzLmxlbmd0aH0gaXMgcmVhZHlgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIURFQlVHKSBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gZ2FtZVRtcFxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2dhbWVdJylcblxuICAgIC8vIHNjb3Jlc1xuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNixcbiAgICAgICAgZ3JpZExpbmVzOiA2LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTJCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDgsXG4gICAgICAgIGdyaWRMaW5lczogOCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMixcbiAgICAgICAgZ3JpZExpbmVzOiAxMixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIHRoaXMuc2V0UGxheWVycygpXG5cbiAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgICAgLy8gYWRkIGltYWdlIHBsYWNob2xkZXJcbiAgICAgIHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIuc3JjID0gc2NlbmUuYmtnXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgICAgLi4uc2NlbmUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBpbWFnZVBsYWNlaG9sZGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19wbGFjZWhvbGRlcicpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgICB0aW1lcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5wbGF5ZXJJZHMgPSBwbGF5ZXJJZHNcbiAgICB0aGlzLnZiV2lkdGggPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldFdpZHRoXG4gICAgdGhpcy52YkhlaWdodCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0SGVpZ2h0XG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncmVkJyxcbiAgICAgICdibHVlJyxcbiAgICBdXG5cbiAgICAvLyBlYWNoIHBsYXllciBpcyBhbiBvYmplY3Qgd2l0aCBhIGtleS9pZFxuICAgIHRoaXMucGxheWVycyA9IHt9XG4gICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbMF1dID0gbmV3IFBsYXllcih7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5jdXJzb3JzWzBdLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgaWQ6IHBsYXllcklkc1swXSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzFdXSA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBlbDogdGhpcy5kb20uY3Vyc29yc1sxXSxcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgIGlkOiBwbGF5ZXJJZHNbMV0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoZHVyYXRpb24pIHtcbiAgICBsZXQgdGltZXIgPSBkdXJhdGlvblxuICAgIGxldCBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBkdXJhdGlvblxuXG4gICAgdGhpcy50aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyLCAxMClcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kc1xuXG4gICAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBzZWNvbmRzXG5cbiAgICAgIGlmICh0aW1lciA9PT0gMCkge1xuICAgICAgICB0aGlzLmVuZFNjZW5lKCdUSU1FIE9VVCEnKVxuICAgICAgfVxuXG4gICAgICB0aW1lciAtPSAxXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIHNjb3JlKHBsYXllciwgaXRlbSkge1xuICAgIHRoaXMucG9wVXBNZXNzYWdlKCcrMScsIHBsYXllci5jb2xvcikgLy8gKyBjb2xvciBwbGF5ZXJcblxuICAgIHRoaXMuc2NvcmVzW3BsYXllci5pbmRleF0gKz0gMVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvdW5kJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHBsYXllci5pbmRleCkge1xuICAgICAgICB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwW2ldLmlubmVySFRNTCA9IGBQLSR7cGxheWVyLmluZGV4ICsgMX0gOiAke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2NvcmVfX2l0ZW0nKVxuICAgIHRoaXMuZG9tLnNjb3JlSXRlbXNbcGxheWVyLmluZGV4XS5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVyLmlkfSwke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YClcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpdi5yZW1vdmUoKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICBlbmRTY2VuZShtZXNzYWdlID0gJ3N0YWdlIGNvbXBsZXRlJykge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKVxuICAgIHRoaXMucG9wVXBNZXNzYWdlKG1lc3NhZ2UsICdibGFjaycsIHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lSW5kZXggKyAxKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICB1cGRhdGVTY2VuZShpbmRleCkge1xuICAgIHRoaXMuZGVzdHJveVNjZW5lKHRoaXMuY3VycmVudFNjZW5lKVxuXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNjZW5lcy5sZW5ndGggKyAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kIG9mIHBhcnR5JylcbiAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZCgnZGlzY29ubmVjdF9hbGxfdXNlcnMnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmVzZXQgcGxheWVycyBwb3MgdG8gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS50YXJnZXRYID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0udGFyZ2V0WSA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnggPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS55ID0gMFxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSBpbmRleFxuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgLi4uc2NlbmUsXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3lTY2VuZShzY2VuZSkge1xuICAgIC8vIGNsZWFuIGNvbXBvbmVudFxuICAgIGlmIChzY2VuZS5kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNjZW5lLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUN1c3RvbUV2ZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50J1xuXG5jbGFzcyBSQUZNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGhhbmRsZVJBRiA9IG5vdyA9PiB7XG4gICAgLy8gbm93ID09PSB0aW1lIGluIG1zXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSQUYpXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ1JBRicsIHsgbm93IH0pKVxuICB9XG5cbiAgcmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSQUZNYW5hZ2VyKClcbiIsImZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgIGRldGFpbDogZGF0YSxcbiAgfSlcbiAgcmV0dXJuIGV2ZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1c3RvbUV2ZW50XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBjb25zdCBib2R5VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcblxuICByZXR1cm4gYm91bmRzLnRvcCArIGJvZHlUb3Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldExlZnQoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgcmV0dXJuIGJvdW5kcy5sZWZ0XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3V0RXhwbyhuKSB7XG4gIGlmIChuID09PSAxKSB7XG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIHJldHVybiAxIC0gKDIgKiogKC0xMCAqIG4pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRTaW5lKG4pIHtcblx0cmV0dXJuIC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogbikpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuXHQgLy8gcmV0dXJuIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gIGlmIChtaW4gPiBtYXgpIHtcbiAgICBjb25zdCB0bXAgPSBtaW5cbiAgICBtaW4gPSBtYXhcbiAgICBtYXggPSB0bXBcbiAgfVxuICByZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXROb3coKSB7XG4gIHJldHVybiAnbm93JyBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59IiwiaW1wb3J0ICcuLi9zY3NzL2dhbWUuc2NzcydcblxuLy8gaW1wb3J0IEdhbWVDb21tdW5pY2F0b3IgZnJvbSAnLi9jb21wb25lbnRzL0dhbWVDb21tdW5pY2F0b3InXG5cbi8vIG5ldyBHYW1lQ29tbXVuaWNhdG9yKClcblxuaW1wb3J0ICcuL2Zyb250LWVuZC9hcHAnXG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gYmlnIGN1cnNvciAtLT5cXG48c2VjdGlvbiBjbGFzcz1cXFwiZ2FtZVxcXCIgZ2FtZT5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjZW5lXFxcIiBzY2VuZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3dyYXBwZXJcXFwiPlxcbiAgICAgIDwhLS0gc3ZnIHNjZW5lIGZvciBtYXNrcyBldGMuLi4gLS0+XFxuICAgICAgPHN2ZyBjbGFzcz1cXFwic2NlbmUtc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAzNiA2MzJcXFwiIHN0cm9rZT1cXFwiYmxhY2tcXFwiPlxcbiAgICAgICAgPGRlZnM+XFxuICAgICAgICAgIDxjbGlwUGF0aCBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aFxcXCI+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMVxcXCIgLz5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIyXFxcIiAvPlxcbiAgICAgICAgICA8L2NsaXBQYXRoPlxcbiAgICAgICAgPC9kZWZzPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjFcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjJcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPGcgY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmXFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBzbGljZVxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fcGxhY2Vob2xkZXJcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGltZXIgdC0zMi0tYm9sZFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gc2NvcmUgYm9hcmQgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY29yZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTE6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2NlbnRlclxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInQtMzItLWJvbGRcXFwiPkl0ZW0gdG8gZmluZDo8L3A+XFxuICAgICAgPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMSA6IDA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMiA6IDA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMjo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNldHVwXFxcIj5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNldHVwX19tZXNzYWdlIHQtNjQtLWJvbGRcXFwiPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=