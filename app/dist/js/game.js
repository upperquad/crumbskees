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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL0dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9SQUZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9jcmVhdGVDdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9lYXNlLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzPzhiNGMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9nYW1lLnNjc3M/NmFkYyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwiXSwibmFtZXMiOlsid2luZG93IiwiR2FtZU1hbmFnZXIiLCJQbGF5ZXIiLCJwcm9wcyIsImVsIiwiaWQiLCJpbmRleCIsImNvbG9yIiwibnVtUG9pbnRzIiwiY2VudGVyWCIsInZiV2lkdGgiLCJjZW50ZXJZIiwidmJIZWlnaHQiLCJtaW5SYWRpdXMiLCJtYXhSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwieCIsInkiLCJ0YXJnZXRYIiwidGFyZ2V0WSIsImlzSW5zaWRlVGltZSIsInNldFBvaW50cyIsInBvaW50cyIsInNsaWNlIiwiTWF0aCIsIlBJIiwic3RhcnRBbmdsZSIsInJhbmRvbSIsImkiLCJtYXJnZUFuZ2xlIiwic3RhcnRBbmltIiwiZ2V0Tm93IiwiYW5nbGUiLCJkdXJhdGlvbiIsInBvaW50IiwiY29zIiwic2luIiwidGFyZ2V0TWluWCIsInRhcmdldE1pblkiLCJ0YXJnZXRNYXhYIiwidGFyZ2V0TWF4WSIsInN0YXJ0WCIsInN0YXJ0WSIsImRlc3RYIiwiZGVzdFkiLCJwdXNoIiwicGxheWVySWRzIiwiREVCVUciLCJTY2VuZSIsIm9wdGlvbnMiLCJlIiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGxheWVyIiwicGxheWVycyIsImV2ZW50WCIsInRvdWNoZXMiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsImV2ZW50WSIsImNsaWVudFkiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNldFRvcCIsInBsYXllcklkIiwicHJlY2lzaW9uIiwiY2xpY2tQcmVjaXNpb24iLCJnb29kQ2xpY2siLCJpdGVtcyIsImxlbmd0aCIsIml0ZW0iLCJmb3VuZCIsInNjb3JlIiwic3R5bGUiLCJvcGFjaXR5IiwiZGVidWdFbCIsIm51bUl0ZW1Gb3VuZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlbmRTY2VuZSIsIm5vdyIsImRldGFpbCIsImFjY2VsZXJhdGlvbiIsImRlc3RBY2NlbGVyYXRpb24iLCJjb2VmQWNjZWxlcmF0aW9uIiwiY2xhbXAiLCJwZXJjZW50IiwiaW5PdXRTaW5lIiwicmV2ZXJzZUFuaW0iLCJzZXRBdHRyaWJ1dGUiLCJjYXJkaW5hbCIsImVsZW1lbnQiLCJia2ciLCJtYXNrZWRCa2ciLCJudW1JdGVtcyIsImdyaWRDb2xzIiwiZ3JpZExpbmVzIiwidGltZSIsImRvbSIsInNldCIsInN2Z1NjZW5lIiwicXVlcnlTZWxlY3RvciIsInN2Z01hc2tlZEltYWdlIiwic3ZnQ2xpcFBhdGgiLCJzdmdDbGlwUGF0aFJlZiIsInNldEJrZ3MiLCJpbmNyZWFzZU1heCIsIml0ZW1TaXplIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXRPZmZzZXRMZWZ0IiwicGFyZW50Tm9kZSIsImdldE9mZnNldFRvcCIsInNldENsaXBQYXRoSWQiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJwb3BVcE1lc3NhZ2UiLCJzdGFydFRpbWVyIiwidXVpZHYxIiwicG9zaXRpb25zSW5HcmlkIiwiaiIsIm9iaiIsInJkIiwicmFuZG9tSW50Iiwic3BsaWNlIiwic3ZnSW1hZ2UiLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGVOUyIsImFwcGVuZENoaWxkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtZXRob2QiLCJldiIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlUkFGIiwidGVuc2lvbiIsIm5iUG9pbnRzIiwicGF0aCIsInAwIiwicDEiLCJwMiIsInAzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJTZXJ2ZXIiLCJob3N0IiwibG9jYXRpb24iLCJvcmlnaW4iLCJyZXBsYWNlIiwid2Vic29ja2V0IiwiV2ViU29ja2V0IiwidG9rZW5zIiwibWFpbiIsImlubmVySFRNTCIsInNldHVwVG1wIiwic2V0dXBNZXNzYWdlIiwib25tZXNzYWdlIiwibGlzdGVuU2VydmVyIiwiZXZlbnQiLCJkYXRhIiwic3BsaXQiLCJ2YWxpZFRva2VuIiwiZmlyc3RQbGF5ZXJJZCIsInNlbmQiLCJpbml0IiwicGFyc2VGbG9hdCIsImN1cnJlbnRTY2VuZSIsIm9ub3BlbiIsIm9uV3NPcGVuIiwiZ2FtZVRtcCIsInNjZW5lcyIsInNjZW5lMUJrZyIsInNjZW5lMUl0ZW0iLCJlZmZlY3QiLCJzY2VuZTJCa2ciLCJzY29yZXMiLCJjdXJyZW50U2NlbmVJbmRleCIsImxvYWRCa2ciLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInNldFBsYXllcnMiLCJzY2VuZSIsImltYWdlUGxhY2Vob2xkZXIiLCJjdXJzb3JzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lc3NhZ2UiLCJzY29yZUNlbnRlclJlY2FwIiwic2NvcmVJdGVtcyIsInRpbWVyIiwiY29sb3JzIiwic2Vjb25kcyIsInRpbWVySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiZW5kIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZVNjZW5lIiwiZGVzdHJveVNjZW5lIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3kiLCJGdW5jdGlvbiIsIlJBRk1hbmFnZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZWxlbSIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvZHlUb3AiLCJib2R5Iiwib3V0RXhwbyIsIm4iLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInRtcCIsImZsb29yIiwicGVyZm9ybWFuY2UiLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtDQUdBOztBQUNBLENBQUMsWUFBTTtBQUNMO0FBQ0FBLFFBQU0sQ0FBQ0MsV0FBUCxHQUFxQixJQUFJQSw2REFBSixFQUFyQjtBQUNELENBSEQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0lBRXFCQyxNOzs7QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxR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LG1CQUFPLENBQUMsd0ZBQTJDLHliOzs7Ozs7Ozs7OztBQ0FyM0MsK0oiLCJmaWxlIjoianMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2dhbWUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzkwZDkwNWFjNGRkZTE2NzExNWNjODc0ZmJkOTgxNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2ViODBhNTI3ZGUxMGUyMjNlODJjZDQ4NTFhNDFkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzllOTM1NmMwNTAwMDM5ZWY0Zjc0NmJhODAyMmFkZS5wbmdcIjsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MnXG5cbmltcG9ydCAnLi9tYW5hZ2Vycy9SQUZNYW5hZ2VyJ1xuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vbWFuYWdlcnMvR2FtZU1hbmFnZXInXG5cbi8vIG5vdCB3b3JraW5nIGFueW1vcmUgZm9yIHNvbWUgcmVhc29uXG4oKCkgPT4ge1xuICAvLyBpbXBvcnQgR2FtZU1hbmFuZ2VyIHdoZW4gRE9NIGlzIHJlYWR5XG4gIHdpbmRvdy5HYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcigpXG59KSgpXG4iLCJpbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGlkLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gOFxuICAgIHRoaXMuY2VudGVyWCA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyIC8vIGVxdWFsIHRvIHN2ZyB2aWV3Ym94IC8gMlxuICAgIHRoaXMubWluUmFkaXVzID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1IC8vIDcwJSBvZiBmdWxsIHNpemUgLyAyIC0tPiBzaG91bGQgYmUgYmFzZWQgb24gd2lkdGggdmlld2JveFxuICAgIHRoaXMubWF4UmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLm1pblJhZGl1cyAqIDAuMlxuICAgIHRoaXMubWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjQ1XG4gICAgdGhpcy5tYXhNaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNTVcbiAgICB0aGlzLm1pbkR1cmF0aW9uID0gNzAwXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IDkwMFxuICAgIC8vIGN1cnNvciBwb3NpdGlvblxuICAgIHRoaXMueCA9IDBcbiAgICB0aGlzLnkgPSAwXG4gICAgdGhpcy50YXJnZXRYID0gMFxuICAgIHRoaXMudGFyZ2V0WSA9IDBcbiAgICB0aGlzLmlzSW5zaWRlVGltZSA9IDBcblxuICAgIHRoaXMuc2V0UG9pbnRzKClcbiAgfVxuXG4gIHNldFBvaW50cygpIHtcbiAgICB0aGlzLnBvaW50cyA9IFtdXG4gICAgLy8gY3JlYXRlIFwibnVtUG9pbnRzXCIgeCBwb2ludHNcbiAgICBjb25zdCBzbGljZSA9IChNYXRoLlBJICogMikgLyB0aGlzLm51bVBvaW50c1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IHJhbmRvbSgwLCBNYXRoLlBJICogMilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Qb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgbWFyZ2VBbmdsZSA9IHJhbmRvbSgwLCAwLjI4KSAvLyBpIC8gMS4yXG4gICAgICAvLyByYW5kb21pemUgdGhlIHN0YXJ0IHRpbWUgb2YgYW5pbWF0aW9uICh3ZSBkb24ndCB3YW50IHRoZSB0d2VlbiB0byBnbyBmcm9tIDAgdG8gMSwgaXQgY2FuIHN0YXJ0IGRpcmVjdGx5IGZyb20gMC42IGZvciBleGFtcGxlKVxuICAgICAgY29uc3Qgc3RhcnRBbmltID0gZ2V0Tm93KCkgKyBpICogcmFuZG9tKDAsIHRoaXMubWluRHVyYXRpb24pXG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuc3RhcnRBbmdsZSArIGkgKiBzbGljZSArIG1hcmdlQW5nbGVcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gcmFuZG9tKHRoaXMubWluRHVyYXRpb24sIHRoaXMubWF4RHVyYXRpb24pXG5cbiAgICAgIGNvbnN0IHBvaW50ID0ge1xuICAgICAgICBhbmdsZSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHN0YXJ0QW5pbSxcbiAgICAgICAgeDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICAgIHk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNaW5YOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWluTWlkZGxlUmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1heFg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1heE1pZGRsZVJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhZOiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgIH1cblxuICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG4gICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcblxuICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7IGdldE5vdyB9IGZyb20gJy4uL3V0aWxzL3RpbWUnXG5pbXBvcnQgeyBnZXRPZmZzZXRUb3AsIGdldE9mZnNldExlZnQgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyBpbk91dFNpbmUgfSBmcm9tICcuLi91dGlscy9lYXNlJ1xuaW1wb3J0IHsgY2xhbXAsIHJhbmRvbUludCB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmltcG9ydCBERUJVRyBmcm9tICcuLi9jb25zdGFudHMvRGVidWcnXG5cbmNvbnN0IHBsYXllcklkcyA9IERFQlVHID8gWydyZWZpZWpyZmVyJywgJ2VyZmplcmZwaWUnXSA6IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IG9wdGlvbnMuZWxcbiAgICB0aGlzLmJrZyA9IG9wdGlvbnMuYmtnXG4gICAgdGhpcy5tYXNrZWRCa2cgPSBvcHRpb25zLm1hc2tlZEJrZ1xuICAgIHRoaXMuaXRlbSA9IG9wdGlvbnMuaXRlbVxuICAgIHRoaXMubnVtSXRlbXMgPSBvcHRpb25zLm51bUl0ZW1zXG4gICAgdGhpcy5ncmlkQ29scyA9IG9wdGlvbnMuZ3JpZENvbHNcbiAgICB0aGlzLmdyaWRMaW5lcyA9IG9wdGlvbnMuZ3JpZExpbmVzXG4gICAgdGhpcy5pbmRleCA9IG9wdGlvbnMuaW5kZXhcbiAgICB0aGlzLnRpbWUgPSA2MCAvLyBpbiBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbSgpXG4gICAgdGhpcy5zZXQoKVxuICB9XG5cbiAgZG9tKCkge1xuICAgIHRoaXMuZG9tID0ge1xuICAgICAgc3ZnU2NlbmU6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnJyksXG4gICAgICBzdmdNYXNrZWRJbWFnZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2ltYWdlJyksXG4gICAgICBzdmdDbGlwUGF0aDogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoJyksXG4gICAgICBzdmdDbGlwUGF0aFJlZjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZS1zdmdfX2NsaXBwYXRoLXJlZicpLFxuICAgIH1cbiAgfVxuXG4gIHNldCgpIHtcbiAgICB0aGlzLnNldEJrZ3MoKVxuXG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDdcbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAqIDAuMDVcblxuICAgIC8vIHZhbHVlcyBmb3IgbW91c2UgZXZlbnRcbiAgICB0aGlzLmNsaWNrUHJlY2lzaW9uID0gMC4wNVxuICAgIHRoaXMubnVtSXRlbUZvdW5kID0gMFxuXG4gICAgLy8gdmFsdWVzIGZvciBET00gc2NlbmVcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICB0aGlzLm9mZnNldFRvcCA9IGdldE9mZnNldFRvcCh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIGlmICh0aGlzLmRvbS5zdmdDbGlwUGF0aCkge1xuICAgICAgdGhpcy5zZXRDbGlwUGF0aElkKClcbiAgICB9XG4gICAgdGhpcy5zZXRHcmlkKClcbiAgICB0aGlzLnNldEl0ZW1zKClcblxuICAgIC8vIHN0YXJ0IGV2ZW50c1xuICAgIHRoaXMuZXZlbnRzKHRydWUpXG4gICAgdGhpcy5ldmVudHNSQUYodHJ1ZSlcblxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5wb3BVcE1lc3NhZ2UoJ1NUQVJUIScsICdibGFjaycpXG4gICAgd2luZG93LkdhbWVNYW5hZ2VyLnN0YXJ0VGltZXIodGhpcy50aW1lKVxuICB9XG5cbiAgc2V0Q2xpcFBhdGhJZCgpIHtcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZCA9IHV1aWR2MSgpXG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc2V0QXR0cmlidXRlKCdjbGlwLXBhdGgnLCBgdXJsKCMke3RoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkfSlgKVxuICB9XG5cbiAgc2V0R3JpZCgpIHtcbiAgICB0aGlzLnBvc2l0aW9uc0luR3JpZCA9IFtdXG4gICAgbGV0IHhcbiAgICBsZXQgeVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdyaWRDb2xzOyBpKyspIHtcbiAgICAgIHggPSBpICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZExpbmVzOyBqKyspIHtcbiAgICAgICAgeSA9IGogKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgICAgY29uc3Qgb2JqID0geyB4LCB5IH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQucHVzaChvYmopXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbXMoKSB7XG4gICAgdGhpcy5pdGVtcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtSXRlbXM7IGkrKykge1xuICAgICAgLy8gcmFuZG9taXplXG4gICAgICBjb25zdCByZCA9IHJhbmRvbUludCgwLCB0aGlzLnBvc2l0aW9uc0luR3JpZC5sZW5ndGggLSAxKVxuICAgICAgY29uc3QgeCA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS54IC8gdGhpcy5ncmlkQ29sc1xuICAgICAgY29uc3QgeSA9IHRoaXMucG9zaXRpb25zSW5HcmlkW3JkXS55IC8gdGhpcy5ncmlkTGluZXNcbiAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnNwbGljZShyZCwgMSlcblxuICAgICAgLy8gc3ZnIGl0ZW1zXG4gICAgICAvLyBuZWVkIHRvIHByZWNpc2UgdGhhdCB3ZSdyZSB1c2luZyB0aGUgc3ZnIG5hbWVzcGFjZVxuICAgICAgY29uc3Qgc3ZnSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ltYWdlJylcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3dpZHRoJywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgJ2hyZWYnLCB0aGlzLml0ZW0pXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgbGV0IGRpdlxuICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gYCR7eCAqIDEwMH0lYFxuICAgICAgICBkaXYuc3R5bGUudG9wID0gYCR7eSAqIDEwMH0lYFxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGVsOiBzdmdJbWFnZSxcbiAgICAgICAgZGVidWdFbDogZGl2LFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgfVxuICAgICAgLy8gYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLml0ZW1zLnB1c2gob2JqKVxuICAgIH1cbiAgfVxuXG4gIHNldEJrZ3MoKSB7XG4gICAgLy8gc2V0IHZpZXdib3ggdmFsdWVzLCBmaXQgSW1hZ2UgdG8gc2NlbmVcbiAgICB0aGlzLmRvbS5zdmdTY2VuZS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGh9ICR7d2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0fWApXG4gICAgLy8gQWRkIG1hc2tlZCBia2dcbiAgICB0aGlzLmRvbS5zdmdNYXNrZWRJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5ia2cpXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuICAgIC8vIEFkZCBcImZyb250XCIgYmtnXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLm1hc2tlZEJrZ30pYFxuICB9XG5cbiAgLy8gLy8vLy8vLy9cbiAgLy8gRXZlbnRzXG4gIC8vIC8vLy8vLy8vXG5cbiAgZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IGV2ID0gbWV0aG9kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgaWYgKERFQlVHKSB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1swXV1cblxuICAgIHBsYXllci5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHBsYXllci5ldmVudFggLT0gdGhpcy5vZmZzZXRMZWZ0XG4gICAgcGxheWVyLmV2ZW50WSA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZXG4gICAgcGxheWVyLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICBwbGF5ZXIudGFyZ2V0WCA9IHBsYXllci5ldmVudFggLyB0aGlzLndpZHRoICogd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICBwbGF5ZXIudGFyZ2V0WCAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gYmVjYXVzZSBzdGFydGluZyBwb2ludCBpcyBwbGF5ZXIuY2VudGVyWFxuICAgIHBsYXllci50YXJnZXRZID0gcGxheWVyLmV2ZW50WSAvIHRoaXMuaGVpZ2h0ICogd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICBwbGF5ZXIudGFyZ2V0WSAtPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyXG5cbiAgICAvLyBeVGhlc2Ugc2hvdWRsIGJlIGxpbmtlZCB0byBhIGN1cnNvclxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBwbGF5ZXJJZCA9PiB7XG4gICAgaWYgKERFQlVHKSBwbGF5ZXJJZCA9IHBsYXllcklkc1swXVxuICAgIGNvbnN0IHByZWNpc2lvbiA9IHRoaXMuY2xpY2tQcmVjaXNpb25cbiAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuR2FtZU1hbmFnZXIucGxheWVyc1twbGF5ZXJJZF1cbiAgICBjb25zdCB4ID0gKHBsYXllci50YXJnZXRYIC8gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGgpICsgMC41XG4gICAgY29uc3QgeSA9IChwbGF5ZXIudGFyZ2V0WSAvIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCkgKyAwLjVcblxuICAgIGxldCBnb29kQ2xpY2sgPSBmYWxzZVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtLmZvdW5kICYmXG4gICAgICAgIHggPiBpdGVtLnggLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeCA8IGl0ZW0ueCArIHByZWNpc2lvbiAmJlxuICAgICAgICB5ID4gaXRlbS55IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPCBpdGVtLnkgKyBwcmVjaXNpb24pIHtcbiAgICAgICAgd2luZG93LkdhbWVNYW5hZ2VyLnNjb3JlKHBsYXllciwgdGhpcy5pdGVtKVxuICAgICAgICBpdGVtLmZvdW5kID0gdHJ1ZVxuICAgICAgICBpdGVtLmVsLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICAgIGl0ZW0uZGVidWdFbC5zdHlsZS5vcGFjaXR5ID0gMFxuXG4gICAgICAgIHRoaXMubnVtSXRlbUZvdW5kID0gdGhpcy5udW1JdGVtRm91bmQgKyAxXG4gICAgICAgIGdvb2RDbGljayA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ29vZENsaWNrKSB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LmFkZCgnZ29vZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QuYWRkKCd3cm9uZycpXG4gICAgfVxuXG4gICAgLy8gdGhpcy5kb20uc3ZnQ2xpcFBhdGhSZWYuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2dvb2QnLCAnd3JvbmcnKVxuICAgICAgLy8gYWRkIGEgcmVjdCBzdmcgZWxlbWVudCBpbiB0aGUgY2xpcHBhdGggZm9sbG93aW5nIHRoZVxuICAgICAgLy8gY3Vyc29yLCBvcGFjaXR5OjAgYnkgZGVmYXVsdCwgZGlzcGxheSBpdCB0byBmaWxsIHRoZSBjdXJzb3IuXG4gICAgICAvLyB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zdHlsZS5vcGFjaXR5ID0gMVxuICAgIH0sIDEwMDApXG5cbiAgICBpZiAodGhpcy5udW1JdGVtRm91bmQgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB3aW5kb3cuR2FtZU1hbmFnZXIuZW5kU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJBRiA9IGUgPT4ge1xuICAgIGNvbnN0IHsgbm93IH0gPSBlLmRldGFpbFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gdGhpcy5hY2NlbGVyYXRpb24gKyAodGhpcy5kZXN0QWNjZWxlcmF0aW9uIC0gdGhpcy5hY2NlbGVyYXRpb24pICogdGhpcy5jb2VmQWNjZWxlcmF0aW9uXG5cbiAgICAvLyBGb3IgZWFjaCBjdXJzb3IuLi5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbeV1dXG5cbiAgICAgIC8vIGNsYW1wIHBsYXllciBwb3NpdGlvbiB0byBsaW1pdCBvZiB0aGUgc2NlbmVcbiAgICAgIHBsYXllci50YXJnZXRYID0gY2xhbXAocGxheWVyLnRhcmdldFgsIC13aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMilcbiAgICAgIHBsYXllci50YXJnZXRZID0gY2xhbXAocGxheWVyLnRhcmdldFksIC13aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyLCB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQgLyAyKVxuXG4gICAgICBwbGF5ZXIueCArPSAocGxheWVyLnRhcmdldFggLSBwbGF5ZXIueCkgKiAwLjFcbiAgICAgIHBsYXllci55ICs9IChwbGF5ZXIudGFyZ2V0WSAtIHBsYXllci55KSAqIDAuMVxuXG5cbiAgICAgIC8vIEZvciBlYWNoIHBvaW50cyBvZiB0aGUgcGxheWVyIChvcmdhbmljIHNoYXBlKVxuICAgICAgLy8gQ3JlYXRlIG9yZ2FuaWMgc2hhcGUgLyBUd2VlbiBhbGwgcG9pbnRzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwbGF5ZXIucG9pbnRzW2ldXG5cbiAgICAgICAgLy8gRnJvbSBzY3JhdGNoIHR3ZWVuOlxuICAgICAgICAvLyBwZXJjZW50IGlzIGdvaW5nIGZyb20gMCB0byAxIGluIFggc2Vjb25kcyB3aGVyZSBYIGlzIHRoZSBcImR1cmF0aW9uIHZhcmlhYmxlXCIuXG4gICAgICAgIC8vIEVhY2ggcG9pbnRzIHN0YXJ0aW5nIHZhbHVlIGlzIGdvaW5nIHRvIGhpcyBkZXN0aW5hdGlvbiB2YWx1ZSBpbiBYIHNlY29uZHNcbiAgICAgICAgLy8gdGhlbiBJIHVzZSBlYXNpbmcgZnVuY3Rpb25zIHRvIG1vZGlmeSB0aGUgdmFsdWUgY3VydmUgdGhyb3VnaCB0aW1lLlxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKG5vdyAtIHBvaW50LnN0YXJ0QW5pbSkgLyBwb2ludC5kdXJhdGlvbiAqIHRoaXMuYWNjZWxlcmF0aW9uXG5cbiAgICAgICAgcG9pbnQueCA9IHBvaW50LnN0YXJ0WCArIChwb2ludC5kZXN0WCAtIHBvaW50LnN0YXJ0WCkgKiBpbk91dFNpbmUocGVyY2VudClcbiAgICAgICAgcG9pbnQueSA9IHBvaW50LnN0YXJ0WSArIChwb2ludC5kZXN0WSAtIHBvaW50LnN0YXJ0WSkgKiBpbk91dFNpbmUocGVyY2VudClcblxuICAgICAgICBpZiAocGVyY2VudCA+PSAxKSB7XG4gICAgICAgICAgLy8gZW5kIG9mIGFuaW1hdGlvbixcbiAgICAgICAgICAvLyByZXN0YXJ0IGFuaW1hdGlvbiBieSBnb2luZyBiYWNrXG4gICAgICAgICAgaWYgKHBvaW50LnJldmVyc2VBbmltKSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWF4WVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSBmYWxzZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9pbnQuc3RhcnRYID0gcG9pbnQueFxuICAgICAgICAgICAgcG9pbnQuc3RhcnRZID0gcG9pbnQueVxuICAgICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNaW5YXG4gICAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1pbllcbiAgICAgICAgICAgIHBvaW50LnJldmVyc2VBbmltID0gdHJ1ZVxuICAgICAgICAgICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIHBsYXllciBiYXNlZCBvbiBtb3VzZVxuICAgICAgICBwb2ludC54ICs9IHBsYXllci54XG4gICAgICAgIHBvaW50LnkgKz0gcGxheWVyLnlcblxuICAgICAgICAvLyBGb3IgaW5jcmVhc2luZyBwbGF5ZXJcbiAgICAgICAgLy8gLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgcGxheWVyIHJhZGl1c1xuICAgICAgICAvLyBpZiAoeSA9PT0gMCAmJiBwbGF5ZXIuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWF4UmFkaXVzID0gcGxheWVyLm1heFJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhNaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWF4TWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01pblJhZGl1cyA9IHBsYXllci5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gcGxheWVyLm1pbk1pZGRsZVJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhYID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWCA9IHBsYXllci5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNYXhZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWF4TWlkZGxlUmFkaXVzLCBuZXdNYXhSYWRpdXMpXG4gICAgICAgIC8vICAgcG9pbnQudGFyZ2V0TWluWSA9IHBsYXllci5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgIC8vICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgIC8vICAgcG9pbnQuc3RhcnRBbmltID0gZ2V0Tm93KClcblxuICAgICAgICAvLyAgIHBvaW50LmlzSW5jcmVhc2UgPSB0cnVlXG4gICAgICAgIC8vIH1cbiAgICAgIH1cblxuICAgICAgcGxheWVyLmVsLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwocGxheWVyLnBvaW50cykpXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNpcmNsZSBkaXN0b3JzaW9uIGJhc2VkIG9uIHRoZSBnaXZlbiBjb29yZGluYXRlcyBwb2ludHNcbiAgLy8gQ2FyZGluYWwgc3BsaW5lIC0gYSB1bmlmb3JtIENhdG11bGwtUm9tIHNwbGluZSB3aXRoIGEgdGVuc2lvbiBvcHRpb25cbiAgY2FyZGluYWwocG9pbnRzLCB0ZW5zaW9uID0gMS4yKSB7XG4gICAgLy8gMSB0ZW5zaW9uIGRvZXMgbm90IG1ha2UgYSBwZXJmZWN0IHJvdW5kLCB3aHk/XG4gICAgY29uc3QgbmJQb2ludHMgPSBwb2ludHMubGVuZ3RoXG4gICAgaWYgKG5iUG9pbnRzIDwgMSkgcmV0dXJuICdNMCAwJ1xuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fSBDYFxuICAgIC8vIHdoZXJlIE0gaXMgdGhlIHN0YXJ0aW5nIFgsWSBjb29yZHNcbiAgICAvLyBDIGlzIHRoZSAzIG5leHQgcG9pbnRzIGNvb3JkIG9mIGEgQ3ViaWMgYmV6aWVyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzWyhpIC0gMSArIG5iUG9pbnRzKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV1cbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzWyhpICsgMSkgJSBuYlBvaW50c11cbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzWyhpICsgMikgJSBuYlBvaW50c11cblxuICAgICAgY29uc3QgeDEgPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgY29uc3QgeDIgPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDYgKiB0ZW5zaW9uXG4gICAgICBjb25zdCB5MiA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNiAqIHRlbnNpb25cblxuICAgICAgLy8gY3ViaWMgQmV6aWVyXG4gICAgICAvLyB4MSB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgY29udHJvbCBwb2ludC5cbiAgICAgIC8vIHkxIHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geDIgfCBUaGUgeC1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTIgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBjb250cm9sIHBvaW50LlxuICAgICAgLy8gcDIueCB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgLy8gcDIueSB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgZW5kIHBvaW50LlxuICAgICAgcGF0aCArPSBgICR7eDF9ICR7eTF9ICR7eDJ9ICR7eTJ9ICR7cDIueH0gJHtwMi55fWBcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cGF0aH16YCAvLyBjbG9zZSBwYXRoIHdpdGggelxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgICB0aGlzLmV2ZW50c1JBRihmYWxzZSlcbiAgfVxufVxuIiwiY29uc3QgREVCVUcgPSB0cnVlXG5cbmV4cG9ydCBkZWZhdWx0IERFQlVHXG4iLCJjb25zdCBTZXJ2ZXIgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKSxcbiAgd2Vic29ja2V0OiBuZXcgV2ViU29ja2V0KGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW4ucmVwbGFjZSgvXmh0dHAvLCAnd3MnKX0vZ2FtZWApLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJcbiIsIlxuaW1wb3J0IGdhbWVUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9nYW1lLmh0bWwnXG5pbXBvcnQgc2V0dXBUbXAgZnJvbSAnLi4vLi4vLi4vdGVtcGxhdGVzL2Zyb250LWVuZC9zZXR1cC5odG1sJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9TY2VuZSdcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInXG5cbi8vIHNlcnZlclxuaW1wb3J0IFNlcnZlciBmcm9tICcuLi9jb25zdGFudHMvU2VydmVyJ1xuaW1wb3J0IERFQlVHIGZyb20gJy4uL2NvbnN0YW50cy9EZWJ1ZydcblxuLy8gYXNzZXRzXG5pbXBvcnQgc2NlbmUxQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2JrZzEuanBnJ1xuaW1wb3J0IHNjZW5lMUl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXG5pbXBvcnQgc2NlbmUyQmtnIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL2ZpbmQtY2F0LnBuZydcbi8vIGltcG9ydCBzY2VuZTJJdGVtIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nJ1xcXG5cbmNvbnN0IHBsYXllcklkcyA9IERFQlVHID8gWydyZWZpZWpyZmVyJywgJ2VyZmplcmZwaWUnXSA6IFtdXG5jb25zdCB0b2tlbnMgPSBbJzEyMycsICc0NTYnXVxuXG5cbi8vIHByZXBhcmUgdGhlIENoYXJhY3RlcklkXG4vLyBDaGFyYWN0ZXJJZCAtLT4gZ2V0IHRoZSBpbWFnZSBvZiB0aGUgY2hhcmFjdGVyXG4vLyBlbmQgc2NlbmU6XG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIGlmICghREVCVUcpIHtcbiAgICAgIFNlcnZlci53ZWJzb2NrZXQub25vcGVuID0gdGhpcy5vbldzT3BlblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgIH1cbiAgfVxuXG4gIG9uV3NPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBzZXR1cFRtcFxuICAgIHRoaXMuc2V0dXBNZXNzYWdlID0gdGhpcy5tYWluLnF1ZXJ5U2VsZWN0b3IoJy5zZXR1cF9fbWVzc2FnZScpXG4gICAgU2VydmVyLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLmxpc3RlblNlcnZlclxuICB9XG5cbiAgbGlzdGVuU2VydmVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLnNwbGl0KCcsJylcblxuICAgIGlmIChkYXRhWzBdID09PSAndG9rZW5fc3VibWl0Jykge1xuICAgICAgLy8gbG9vcCBpbnRvIHRoZSB0b2tlbnMsIGlmIHRoZSB0b2tlbiBjb3JyZXNwb25kLCBzZXQgdXAgdGhlIGlkXG4gICAgICBsZXQgdmFsaWRUb2tlbiA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9rZW5zW2ldID09PSBkYXRhWzFdICYmIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCkge1xuICAgICAgICAgIC8vIGRhdGFbMl0gIT09IHRoaXMuZmlyc3RQbGF5ZXJJZCBJbiBjYXNlIHNlY29uZCBwbGF5ZXIgdXNlIHRoZSB0b2tlbiBvZiB0aGUgZmlyc3QgcGxheWVyXG4gICAgICAgICAgcGxheWVySWRzLnB1c2goZGF0YVsyXSlcbiAgICAgICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYGF1dGhfcmVzdWx0LCR7ZGF0YVsyXX0sMWApXG4gICAgICAgICAgdmFsaWRUb2tlbiA9IHRydWVcbiAgICAgICAgICB0aGlzLmZpcnN0UGxheWVySWQgPSBkYXRhWzJdXG4gICAgICAgICAgdGhpcy5zZXR1cE1lc3NhZ2UuaW5uZXJIVE1MID0gYFBsYXllciAke3BsYXllcklkcy5sZW5ndGh9IGlzIHJlYWR5YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZFRva2VuID09PSBmYWxzZSkge1xuICAgICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYGF1dGhfcmVzdWx0LCR7ZGF0YVsyXX0sMGApXG4gICAgICB9XG5cbiAgICAgIGlmIChwbGF5ZXJJZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIGlmIGJvdGggcGxheWVycyBhcmUgc2V0LCBsZXQncyBzdGFydFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmluaXQoKVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2N1cnNvcl9tb3ZlJykge1xuICAgICAgY29uc3QgeCA9IHBhcnNlRmxvYXQoZGF0YVsyXSwgMTApICogdGhpcy52YldpZHRoXG4gICAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChkYXRhWzNdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIC8vIHdlIHVzZSB2YldpZHRoIHRoZSBzYW1lIGNvZWZpY2llbnQgaGVyZSB0byBoYXZlIHRoZSBzYW1lIHNwZWVkIG1vdmVtZW50IG9uIHRvdWNobW92ZSBYIGFuZCBZXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WCA9IHggKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgICAgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFkgPSB5ICsgdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFlcblxuICAgICAgLy8gdGhpcy5wbGF5ZXJzW2RhdGFbMV1dLnRhcmdldFhcbiAgICB9IGVsc2UgaWYgKGRhdGFbMF0gPT09ICdjbGljaycpIHtcbiAgICAgIC8vIGRhdGFbMV0gbmVlZHMgdG8gYmUgdGhlIGluZGV4IG9mIHBsYXllciAob3IgaWQpXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5oYW5kbGVDbGljayhkYXRhWzFdKVxuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKCFERUJVRykgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllcklkc1swXX0sMGApXG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IGdhbWVUbXBcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tnYW1lXScpXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjZW5lcyA9IFtcbiAgICAgIHtcbiAgICAgICAgYmtnOiBzY2VuZTFCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUxQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDYsXG4gICAgICAgIGdyaWRMaW5lczogNixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUyQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMkJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiA4LFxuICAgICAgICBncmlkTGluZXM6IDgsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTAsXG4gICAgICAgIGdyaWRMaW5lczogMTAsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogMTIsXG4gICAgICAgIGdyaWRMaW5lczogMTIsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5wbGF5ZXJzID0gW11cbiAgICB0aGlzLnNjb3JlcyA9IFswLCAwXVxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSAwXG5cbiAgICB0aGlzLmxvYWRCa2coKVxuICB9XG5cbiAgbG9hZEJrZygpIHtcbiAgICAvLyBMb2FkIEN1cnJlbnQgU2NlbmUgaW1hZ2VcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSB0aGlzLnNjZW5lc1t0aGlzLmN1cnJlbnRTY2VuZUluZGV4XS5ia2dcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgLy8gaW1hZ2UgbG9hZGVkXG4gICAgICB0aGlzLmRvbSgpXG4gICAgICB0aGlzLnNldFBsYXllcnMoKVxuXG4gICAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICAgIC8vIGFkZCBpbWFnZSBwbGFjaG9sZGVyXG4gICAgICB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLnNyYyA9IHNjZW5lLmJrZ1xuXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgICAgaW5kZXg6IHRoaXMuY3VycmVudFNjZW5lSW5kZXgsXG4gICAgICAgIC4uLnNjZW5lLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBkb20oKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBzY2VuZTogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZScpLFxuICAgICAgaW1hZ2VQbGFjZWhvbGRlcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2VuZV9fcGxhY2Vob2xkZXInKSxcbiAgICAgIGN1cnNvcnM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3Vyc29yJyksXG4gICAgICBtZXNzYWdlOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19tZXNzYWdlJyksXG4gICAgICBzY29yZUNlbnRlclJlY2FwOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19jZW50ZXJfX3JlY2FwJyksXG4gICAgICBzY29yZUl0ZW1zOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlX19pdGVtcycpLFxuICAgICAgdGltZXI6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZXInKSxcbiAgICB9XG4gIH1cblxuICBzZXRQbGF5ZXJzKCkge1xuICAgIHRoaXMucGxheWVySWRzID0gcGxheWVySWRzXG4gICAgdGhpcy52YldpZHRoID0gdGhpcy5kb20uaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRXaWR0aFxuICAgIHRoaXMudmJIZWlnaHQgPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldEhlaWdodFxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuXG4gICAgY29uc3QgY29sb3JzID0gW1xuICAgICAgJ3JlZCcsXG4gICAgICAnYmx1ZScsXG4gICAgXVxuXG4gICAgLy8gZWFjaCBwbGF5ZXIgaXMgYW4gb2JqZWN0IHdpdGggYSBrZXkvaWRcbiAgICB0aGlzLnBsYXllcnMgPSB7fVxuICAgIGlmIChwbGF5ZXJJZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzBdXSA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBlbDogdGhpcy5kb20uY3Vyc29yc1swXSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbMF0sXG4gICAgICAgIGlkOiBwbGF5ZXJJZHNbMF0sXG4gICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1sxXV0gPSBuZXcgUGxheWVyKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLmN1cnNvcnNbMV0sXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBjb2xvcjogY29sb3JzWzFdLFxuICAgICAgICBpZDogcGxheWVySWRzWzFdLFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKGR1cmF0aW9uKSB7XG4gICAgbGV0IHRpbWVyID0gZHVyYXRpb25cbiAgICBsZXQgc2Vjb25kc1xuXG4gICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gZHVyYXRpb25cblxuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lciwgMTApXG4gICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHNcblxuICAgICAgdGhpcy5kb20udGltZXIuaW5uZXJIVE1MID0gc2Vjb25kc1xuXG4gICAgICBpZiAodGltZXIgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbmRTY2VuZSgnVElNRSBPVVQhJylcbiAgICAgIH1cblxuICAgICAgdGltZXIgLT0gMVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBzY29yZShwbGF5ZXIsIGl0ZW0pIHtcbiAgICB0aGlzLnBvcFVwTWVzc2FnZSgnKzEnLCBwbGF5ZXIuY29sb3IpIC8vICsgY29sb3IgcGxheWVyXG5cbiAgICB0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdICs9IDFcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3VuZCcpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSBwbGF5ZXIuaW5kZXgpIHtcbiAgICAgICAgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcFtpXS5pbm5lckhUTUwgPSBgUC0ke3BsYXllci5pbmRleCArIDF9IDogJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBpdGVtXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Njb3JlX19pdGVtJylcbiAgICB0aGlzLmRvbS5zY29yZUl0ZW1zW3BsYXllci5pbmRleF0uYXBwZW5kQ2hpbGQoaW1nKVxuXG4gICAgU2VydmVyLndlYnNvY2tldC5zZW5kKGBzY29yZSwke3BsYXllci5pZH0sJHt0aGlzLnNjb3Jlc1twbGF5ZXIuaW5kZXhdfWApXG4gIH1cblxuICBwb3BVcE1lc3NhZ2UobWVzc2FnZSwgY29sb3IgPSAnZ3JheScsIGVuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScsICd0LTEyMC0tYm9sZCcsIGBjb2xvci0tJHtjb2xvcn1gKVxuICAgIGlmIChlbmQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWVuZCcpXG4gICAgfVxuICAgIGRpdi5pbm5lckhUTUwgPSBtZXNzYWdlXG4gICAgdGhpcy5kb20uc2NlbmUuYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXYucmVtb3ZlKClcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgZW5kU2NlbmUobWVzc2FnZSA9ICdzdGFnZSBjb21wbGV0ZScpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbClcbiAgICB0aGlzLnBvcFVwTWVzc2FnZShtZXNzYWdlLCAnYmxhY2snLCB0cnVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZUluZGV4ICsgMSlcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgdXBkYXRlU2NlbmUoaW5kZXgpIHtcbiAgICB0aGlzLmRlc3Ryb3lTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZSlcblxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zY2VuZXMubGVuZ3RoICsgMSkge1xuICAgICAgY29uc29sZS5sb2coJ2VuZCBvZiBwYXJ0eScpXG4gICAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoJ2Rpc2Nvbm5lY3RfYWxsX3VzZXJzJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHJlc2V0IHBsYXllcnMgcG9zIHRvIDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcklkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0udGFyZ2V0WCA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnRhcmdldFkgPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS54ID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0ueSA9IDBcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZUluZGV4ID0gaW5kZXhcbiAgICBjb25zdCBzY2VuZSA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdXG5cbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IG5ldyBTY2VuZSh7XG4gICAgICBlbDogdGhpcy5kb20uc2NlbmUsXG4gICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgIC4uLnNjZW5lLFxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95U2NlbmUoc2NlbmUpIHtcbiAgICAvLyBjbGVhbiBjb21wb25lbnRcbiAgICBpZiAoc2NlbmUuZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzY2VuZS5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDdXN0b21FdmVudCBmcm9tICcuLi91dGlscy9jcmVhdGVDdXN0b21FdmVudCdcblxuY2xhc3MgUkFGTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGFuZGxlUkFGKDApXG4gIH1cblxuICBoYW5kbGVSQUYgPSBub3cgPT4ge1xuICAgIC8vIG5vdyA9PT0gdGltZSBpbiBtc1xuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlUkFGKVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGNyZWF0ZUN1c3RvbUV2ZW50KCdSQUYnLCB7IG5vdyB9KSlcbiAgfVxuXG4gIHJlc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGNhbmNlbCA9ICgpID0+IHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUkFGTWFuYWdlcigpXG4iLCJmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtcbiAgICBkZXRhaWw6IGRhdGEsXG4gIH0pXG4gIHJldHVybiBldmVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDdXN0b21FdmVudFxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8obikge1xuICBpZiAobiA9PT0gMSkge1xuICAgIHJldHVybiBuXG4gIH1cblxuICByZXR1cm4gMSAtICgyICoqICgtMTAgKiBuKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShuKSB7XG5cdHJldHVybiAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIG4pKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Tm93KCkge1xuICByZXR1cm4gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWU+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCIgc2NlbmU+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgc2xpY2VcXFwiIC8+XFxuICAgICAgICA8L2c+XFxuICAgICAgPC9zdmc+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3BsYWNlaG9sZGVyXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbWVyIHQtMzItLWJvbGRcXFwiPjwvZGl2PlxcbiAgPC9kaXY+XFxuICA8IS0tIHNjb3JlIGJvYXJkIC0tPlxcbiAgPGRpdiBjbGFzcz1cXFwic2NvcmVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0LTMyLS1ib2xkXFxcIj5JdGVtIHRvIGZpbmQ6PC9wPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIlwiICsgcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nXCIpICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTEgOiAwPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTIgOiAwPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tYmx1ZSB0LTMyLS1ib2xkXFxcIj5QLTI6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBiaWcgY3Vyc29yIC0tPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzZXR1cF9fbWVzc2FnZSB0LTY0LS1ib2xkXFxcIj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cIjsiXSwic291cmNlUm9vdCI6IiJ9