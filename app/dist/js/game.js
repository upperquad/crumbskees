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
        player.el.classList.remove('good', 'wrong'); // this.dom.svgClipPathRef.style.opacity = 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9jb25zdGFudHMvRGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbnN0YW50cy9TZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL0dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9SQUZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9jcmVhdGVDdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9lYXNlLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy90aW1lLmpzIiwid2VicGFjazovLy8uL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvc2V0dXAuaHRtbCJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHYW1lTWFuYWdlciIsIlBsYXllciIsInByb3BzIiwiZWwiLCJpZCIsImluZGV4IiwiY29sb3IiLCJudW1Qb2ludHMiLCJjZW50ZXJYIiwidmJXaWR0aCIsImNlbnRlclkiLCJ2YkhlaWdodCIsIm1pblJhZGl1cyIsIm1heFJhZGl1cyIsIm1pbk1pZGRsZVJhZGl1cyIsIm1heE1pZGRsZVJhZGl1cyIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJ4IiwieSIsInRhcmdldFgiLCJ0YXJnZXRZIiwiaXNJbnNpZGVUaW1lIiwic2V0UG9pbnRzIiwicG9pbnRzIiwic2xpY2UiLCJNYXRoIiwiUEkiLCJzdGFydEFuZ2xlIiwicmFuZG9tIiwiaSIsIm1hcmdlQW5nbGUiLCJzdGFydEFuaW0iLCJnZXROb3ciLCJhbmdsZSIsImR1cmF0aW9uIiwicG9pbnQiLCJjb3MiLCJzaW4iLCJ0YXJnZXRNaW5YIiwidGFyZ2V0TWluWSIsInRhcmdldE1heFgiLCJ0YXJnZXRNYXhZIiwic3RhcnRYIiwic3RhcnRZIiwiZGVzdFgiLCJkZXN0WSIsInB1c2giLCJwbGF5ZXJJZHMiLCJERUJVRyIsIlNjZW5lIiwib3B0aW9ucyIsImUiLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwbGF5ZXIiLCJwbGF5ZXJzIiwiZXZlbnRYIiwidG91Y2hlcyIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiZXZlbnRZIiwiY2xpZW50WSIsIndpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0VG9wIiwicGxheWVySWQiLCJwcmVjaXNpb24iLCJjbGlja1ByZWNpc2lvbiIsImdvb2RDbGljayIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImVuZFNjZW5lIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjbGFtcCIsInBlcmNlbnQiLCJpbk91dFNpbmUiLCJyZXZlcnNlQW5pbSIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImJrZyIsIm1hc2tlZEJrZyIsIm51bUl0ZW1zIiwiZ3JpZENvbHMiLCJncmlkTGluZXMiLCJ0aW1lIiwiZG9tIiwic2V0Iiwic3ZnU2NlbmUiLCJxdWVyeVNlbGVjdG9yIiwic3ZnTWFza2VkSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwic2V0QmtncyIsImluY3JlYXNlTWF4IiwiaXRlbVNpemUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldExlZnQiLCJwYXJlbnROb2RlIiwiZ2V0T2Zmc2V0VG9wIiwic2V0Q2xpcFBhdGhJZCIsInNldEdyaWQiLCJzZXRJdGVtcyIsImV2ZW50cyIsImV2ZW50c1JBRiIsInBvcFVwTWVzc2FnZSIsInN0YXJ0VGltZXIiLCJ1dWlkdjEiLCJwb3NpdGlvbnNJbkdyaWQiLCJqIiwib2JqIiwicmQiLCJyYW5kb21JbnQiLCJzcGxpY2UiLCJzdmdJbWFnZSIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwibGVmdCIsInRvcCIsImJhY2tncm91bmRJbWFnZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIlNlcnZlciIsImhvc3QiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInJlcGxhY2UiLCJ3ZWJzb2NrZXQiLCJXZWJTb2NrZXQiLCJ0b2tlbnMiLCJtYWluIiwiaW5uZXJIVE1MIiwic2V0dXBUbXAiLCJzZXR1cE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJsaXN0ZW5TZXJ2ZXIiLCJldmVudCIsImRhdGEiLCJzcGxpdCIsInZhbGlkVG9rZW4iLCJmaXJzdFBsYXllcklkIiwic2VuZCIsImluaXQiLCJwYXJzZUZsb2F0IiwiY3VycmVudFNjZW5lIiwib25vcGVuIiwib25Xc09wZW4iLCJnYW1lVG1wIiwic2NlbmVzIiwic2NlbmUxQmtnIiwic2NlbmUxSXRlbSIsImVmZmVjdCIsInNjZW5lMkJrZyIsInNjb3JlcyIsImN1cnJlbnRTY2VuZUluZGV4IiwibG9hZEJrZyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0UGxheWVycyIsInNjZW5lIiwiaW1hZ2VQbGFjZWhvbGRlciIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInNjb3JlQ2VudGVyUmVjYXAiLCJzY29yZUl0ZW1zIiwidGltZXIiLCJjb2xvcnMiLCJzZWNvbmRzIiwidGltZXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJlbmQiLCJjbGVhckludGVydmFsIiwidXBkYXRlU2NlbmUiLCJkZXN0cm95U2NlbmUiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsIkZ1bmN0aW9uIiwiUkFGTWFuYWdlciIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJjcmVhdGVDdXN0b21FdmVudCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZXZlbnROYW1lIiwiQ3VzdG9tRXZlbnQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJvdXRFeHBvIiwibiIsInZhbHVlIiwibWluIiwibWF4IiwidG1wIiwiZmxvb3IiLCJwZXJmb3JtYW5jZSIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiwwQzs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0NBR0E7O0FBQ0EsQ0FBQyxZQUFNO0FBQ0w7QUFDQUEsUUFBTSxDQUFDQyxXQUFQLEdBQXFCLElBQUlBLDZEQUFKLEVBQXJCO0FBQ0QsQ0FIRCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBRWZDLEVBRmUs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Yjs7Ozs7Ozs7Ozs7QUNBcjNDLCtKIiwiZmlsZSI6ImpzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9nYW1lLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWM5MGQ5MDVhYzRkZGUxNjcxMTVjYzg3NGZiZDk4MTcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzdlYjgwYTUyN2RlMTBlMjIzZTgyY2Q0ODUxYTQxZDEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDc5ZTkzNTZjMDUwMDAzOWVmNGY3NDZiYTgwMjJhZGUucG5nXCI7IiwiaW1wb3J0ICcuLi8uLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgJy4vbWFuYWdlcnMvUkFGTWFuYWdlcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuKCgpID0+IHtcbiAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuICB3aW5kb3cuR2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoKVxufSkoKVxuIiwiaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi4vdXRpbHMvdGltZSdcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uL3V0aWxzL21hdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpZCxcbiAgICAgIGluZGV4LFxuICAgICAgY29sb3IsXG4gICAgfSA9IHByb3BzXG5cbiAgICB0aGlzLmVsID0gZWxcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLm51bVBvaW50cyA9IDhcbiAgICB0aGlzLmNlbnRlclggPSB3aW5kb3cuR2FtZU1hbmFnZXIudmJXaWR0aCAvIDIgLy8gZXF1YWwgdG8gc3ZnIHZpZXdib3ggLyAyXG4gICAgdGhpcy5jZW50ZXJZID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoICogMC4wNSAvLyA3MCUgb2YgZnVsbCBzaXplIC8gMiAtLT4gc2hvdWxkIGJlIGJhc2VkIG9uIHdpZHRoIHZpZXdib3hcbiAgICB0aGlzLm1heFJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgdGhpcy5taW5SYWRpdXMgKiAwLjJcbiAgICB0aGlzLm1pbk1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC40NVxuICAgIHRoaXMubWF4TWlkZGxlUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyAodGhpcy5tYXhSYWRpdXMgLSB0aGlzLm1pblJhZGl1cykgKiAwLjU1XG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IDcwMFxuICAgIHRoaXMubWF4RHVyYXRpb24gPSA5MDBcbiAgICAvLyBjdXJzb3IgcG9zaXRpb25cbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICAgIHRoaXMudGFyZ2V0WCA9IDBcbiAgICB0aGlzLnRhcmdldFkgPSAwXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgdXVpZHYxIGZyb20gJ3V1aWQvdjEnXG5pbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy90aW1lJ1xuaW1wb3J0IHsgZ2V0T2Zmc2V0VG9wLCBnZXRPZmZzZXRMZWZ0IH0gZnJvbSAnLi4vdXRpbHMvZG9tJ1xuaW1wb3J0IHsgaW5PdXRTaW5lIH0gZnJvbSAnLi4vdXRpbHMvZWFzZSdcbmltcG9ydCB7IGNsYW1wLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG5jb25zdCBwbGF5ZXJJZHMgPSBERUJVRyA/IFsncmVmaWVqcmZlcicsICdlcmZqZXJmcGllJ10gOiBbXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBvcHRpb25zLmVsXG4gICAgdGhpcy5ia2cgPSBvcHRpb25zLmJrZ1xuICAgIHRoaXMubWFza2VkQmtnID0gb3B0aW9ucy5tYXNrZWRCa2dcbiAgICB0aGlzLml0ZW0gPSBvcHRpb25zLml0ZW1cbiAgICB0aGlzLm51bUl0ZW1zID0gb3B0aW9ucy5udW1JdGVtc1xuICAgIHRoaXMuZ3JpZENvbHMgPSBvcHRpb25zLmdyaWRDb2xzXG4gICAgdGhpcy5ncmlkTGluZXMgPSBvcHRpb25zLmdyaWRMaW5lc1xuICAgIHRoaXMuaW5kZXggPSBvcHRpb25zLmluZGV4XG4gICAgdGhpcy50aW1lID0gNjAgLy8gaW4gc2Vjb25kc1xuXG4gICAgdGhpcy5kb20oKVxuICAgIHRoaXMuc2V0KClcbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnTWFza2VkSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5zZXRCa2dzKClcblxuICAgIC8vIGFzc3VtaW5nIHdlIGFsd2F5cyB1c2UgYSB2aWV3Ym94IG9mIDEwMCB4IDEwMFxuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuZGVzdEFjY2VsZXJhdGlvbiA9IDFcbiAgICB0aGlzLmNvZWZBY2NlbGVyYXRpb24gPSAwLjJcbiAgICB0aGlzLmluY3JlYXNlTWF4ID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA3XG4gICAgLy8gaXRlbXNcbiAgICB0aGlzLml0ZW1TaXplID0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy5jbGlja1ByZWNpc2lvbiA9IDAuMDVcbiAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IDBcblxuICAgIC8vIHZhbHVlcyBmb3IgRE9NIHNjZW5lXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMub2Zmc2V0TGVmdCA9IGdldE9mZnNldExlZnQodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuICAgIHRoaXMuc2V0R3JpZCgpXG4gICAgdGhpcy5zZXRJdGVtcygpXG5cbiAgICAvLyBzdGFydCBldmVudHNcbiAgICB0aGlzLmV2ZW50cyh0cnVlKVxuICAgIHRoaXMuZXZlbnRzUkFGKHRydWUpXG5cbiAgICB3aW5kb3cuR2FtZU1hbmFnZXIucG9wVXBNZXNzYWdlKCdTVEFSVCEnLCAnYmxhY2snKVxuICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zdGFydFRpbWVyKHRoaXMudGltZSlcbiAgfVxuXG4gIHNldENsaXBQYXRoSWQoKSB7XG4gICAgdGhpcy5kb20uc3ZnQ2xpcFBhdGguaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnNldEF0dHJpYnV0ZSgnY2xpcC1wYXRoJywgYHVybCgjJHt0aGlzLmRvbS5zdmdDbGlwUGF0aC5pZH0pYClcbiAgfVxuXG4gIHNldEdyaWQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQgPSBbXVxuICAgIGxldCB4XG4gICAgbGV0IHlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkQ29sczsgaSsrKSB7XG4gICAgICB4ID0gaSArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRMaW5lczsgaisrKSB7XG4gICAgICAgIHkgPSBqICsgMC41IC8vIGFkZCBoYWxmXG4gICAgICAgIGNvbnN0IG9iaiA9IHsgeCwgeSB9XG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5HcmlkLnB1c2gob2JqKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUl0ZW1zOyBpKyspIHtcbiAgICAgIC8vIHJhbmRvbWl6ZVxuICAgICAgY29uc3QgcmQgPSByYW5kb21JbnQoMCwgdGhpcy5wb3NpdGlvbnNJbkdyaWQubGVuZ3RoIC0gMSlcbiAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueCAvIHRoaXMuZ3JpZENvbHNcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uc0luR3JpZFtyZF0ueSAvIHRoaXMuZ3JpZExpbmVzXG4gICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5zcGxpY2UocmQsIDEpXG5cbiAgICAgIC8vIHN2ZyBpdGVtc1xuICAgICAgLy8gbmVlZCB0byBwcmVjaXNlIHRoYXQgd2UncmUgdXNpbmcgdGhlIHN2ZyBuYW1lc3BhY2VcbiAgICAgIGNvbnN0IHN2Z0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdpbWFnZScpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgdGhpcy5pdGVtU2l6ZSlcbiAgICAgIHN2Z0ltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsICdocmVmJywgdGhpcy5pdGVtKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCBgJHt4ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3knLCBgJHt5ICogMTAwfSVgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9IC0ke3RoaXMuaXRlbVNpemUgLyAyfSlgKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pZFlNaWQgc2xpY2UnKVxuXG4gICAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5hcHBlbmRDaGlsZChzdmdJbWFnZSlcblxuICAgICAgLy8gZmFrZSBpdGVtIGZvciBkZWJ1Z2dpbmdcbiAgICAgIGxldCBkaXZcbiAgICAgIGlmIChERUJVRykge1xuICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGVidWcnKVxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IGAke3kgKiAxMDB9JWBcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBlbDogc3ZnSW1hZ2UsXG4gICAgICAgIGRlYnVnRWw6IGRpdixcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgIH1cbiAgICAgIC8vIGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5pdGVtcy5wdXNoKG9iailcbiAgICB9XG4gIH1cblxuICBzZXRCa2dzKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlcywgZml0IEltYWdlIHRvIHNjZW5lXG4gICAgdGhpcy5kb20uc3ZnU2NlbmUuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3dpbmRvdy5HYW1lTWFuYWdlci52YldpZHRofSAke3dpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodH1gKVxuICAgIC8vIEFkZCBtYXNrZWQgYmtnXG4gICAgdGhpcy5kb20uc3ZnTWFza2VkSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIHRoaXMuYmtnKVxuICAgIHRoaXMuZG9tLnN2Z01hc2tlZEltYWdlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaWRZTWlkIHNsaWNlJylcbiAgICAvLyBBZGQgXCJmcm9udFwiIGJrZ1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5tYXNrZWRCa2d9KWBcbiAgfVxuXG4gIC8vIC8vLy8vLy8vXG4gIC8vIEV2ZW50c1xuICAvLyAvLy8vLy8vL1xuXG4gIGV2ZW50cyhtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIGlmIChERUJVRykgd2luZG93W2V2XSgnbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUsIGZhbHNlKVxuICAgIHdpbmRvd1tldl0oJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljaywgZmFsc2UpXG4gIH1cblxuICBldmVudHNSQUYobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdSQUYnLCB0aGlzLmhhbmRsZVJBRiwgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIGNvbnN0IHBsYXllciA9IHdpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJzW3dpbmRvdy5HYW1lTWFuYWdlci5wbGF5ZXJJZHNbMF1dXG5cbiAgICBwbGF5ZXIuZXZlbnRYID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcbiAgICBwbGF5ZXIuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHBsYXllci5ldmVudFkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuICAgIHBsYXllci5ldmVudFkgKz0gc2Nyb2xsWVxuXG4gICAgcGxheWVyLnRhcmdldFggPSBwbGF5ZXIuZXZlbnRYIC8gdGhpcy53aWR0aCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgdmlld2JveCB1bml0cyBoZXJlXG4gICAgcGxheWVyLnRhcmdldFggLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyIC8vIGJlY2F1c2Ugc3RhcnRpbmcgcG9pbnQgaXMgcGxheWVyLmNlbnRlclhcbiAgICBwbGF5ZXIudGFyZ2V0WSA9IHBsYXllci5ldmVudFkgLyB0aGlzLmhlaWdodCAqIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAtIHRoaXMub2Zmc2V0VG9wXG4gICAgcGxheWVyLnRhcmdldFkgLT0gd2luZG93LkdhbWVNYW5hZ2VyLnZiSGVpZ2h0IC8gMlxuXG4gICAgLy8gXlRoZXNlIHNob3VkbCBiZSBsaW5rZWQgdG8gYSBjdXJzb3JcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gcGxheWVySWQgPT4ge1xuICAgIGlmIChERUJVRykgcGxheWVySWQgPSBwbGF5ZXJJZHNbMF1cbiAgICBjb25zdCBwcmVjaXNpb24gPSB0aGlzLmNsaWNrUHJlY2lzaW9uXG4gICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbcGxheWVySWRdXG4gICAgY29uc3QgeCA9IChwbGF5ZXIudGFyZ2V0WCAvIHdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoKSArIDAuNVxuICAgIGNvbnN0IHkgPSAocGxheWVyLnRhcmdldFkgLyB3aW5kb3cuR2FtZU1hbmFnZXIudmJIZWlnaHQpICsgMC41XG5cbiAgICBsZXQgZ29vZENsaWNrID0gZmFsc2VcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaV1cbiAgICAgIGlmICghaXRlbS5mb3VuZCAmJlxuICAgICAgICB4ID4gaXRlbS54IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHggPCBpdGVtLnggKyBwcmVjaXNpb24gJiZcbiAgICAgICAgeSA+IGl0ZW0ueSAtIHByZWNpc2lvbiAmJlxuICAgICAgICB5IDwgaXRlbS55ICsgcHJlY2lzaW9uKSB7XG4gICAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5zY29yZShwbGF5ZXIsIHRoaXMuaXRlbSlcbiAgICAgICAgaXRlbS5mb3VuZCA9IHRydWVcbiAgICAgICAgaXRlbS5lbC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICBpdGVtLmRlYnVnRWwuc3R5bGUub3BhY2l0eSA9IDBcblxuICAgICAgICB0aGlzLm51bUl0ZW1Gb3VuZCA9IHRoaXMubnVtSXRlbUZvdW5kICsgMVxuICAgICAgICBnb29kQ2xpY2sgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdvb2RDbGljaykge1xuICAgICAgcGxheWVyLmVsLmNsYXNzTGlzdC5hZGQoJ2dvb2QnKVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIuZWwuY2xhc3NMaXN0LmFkZCgnd3JvbmcnKVxuICAgIH1cblxuICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXllci5lbC5jbGFzc0xpc3QucmVtb3ZlKCdnb29kJywgJ3dyb25nJylcbiAgICAgIC8vIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgfSwgMTAwMClcblxuICAgIGlmICh0aGlzLm51bUl0ZW1Gb3VuZCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5HYW1lTWFuYWdlci5lbmRTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkcy5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3QgcGxheWVyID0gd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcnNbd2luZG93LkdhbWVNYW5hZ2VyLnBsYXllcklkc1t5XV1cblxuICAgICAgLy8gY2xhbXAgcGxheWVyIHBvc2l0aW9uIHRvIGxpbWl0IG9mIHRoZSBzY2VuZVxuICAgICAgcGxheWVyLnRhcmdldFggPSBjbGFtcChwbGF5ZXIudGFyZ2V0WCwgLXdpbmRvdy5HYW1lTWFuYWdlci52YldpZHRoIC8gMiwgd2luZG93LkdhbWVNYW5hZ2VyLnZiV2lkdGggLyAyKVxuICAgICAgcGxheWVyLnRhcmdldFkgPSBjbGFtcChwbGF5ZXIudGFyZ2V0WSwgLXdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIsIHdpbmRvdy5HYW1lTWFuYWdlci52YkhlaWdodCAvIDIpXG5cbiAgICAgIHBsYXllci54ICs9IChwbGF5ZXIudGFyZ2V0WCAtIHBsYXllci54KSAqIDAuMVxuICAgICAgcGxheWVyLnkgKz0gKHBsYXllci50YXJnZXRZIC0gcGxheWVyLnkpICogMC4xXG5cblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBwbGF5ZXIgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBsYXllci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgcGxheWVyIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIHBvaW50LnggKz0gcGxheWVyLnhcbiAgICAgICAgcG9pbnQueSArPSBwbGF5ZXIueVxuXG4gICAgICAgIC8vIEZvciBpbmNyZWFzaW5nIHBsYXllclxuICAgICAgICAvLyAvLyBpZiBpdGVtIGZvdW5kLCBpbmNyZWFzZSBwbGF5ZXIgcmFkaXVzXG4gICAgICAgIC8vIGlmICh5ID09PSAwICYmIHBsYXllci5pdGVtRm91bmQgJiYgIXBvaW50LmlzSW5jcmVhc2UpIHtcbiAgICAgICAgLy8gICBjb25zdCBuZXdNYXhSYWRpdXMgPSBwbGF5ZXIubWF4UmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIGNvbnN0IG5ld01heE1pZGRsZVJhZGl1cyA9IHBsYXllci5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgIC8vICAgY29uc3QgbmV3TWluUmFkaXVzID0gcGxheWVyLm1pblJhZGl1cyArIHRoaXMuaW5jcmVhc2VNYXhcbiAgICAgICAgLy8gICBjb25zdCBuZXdNaW5NaWRkbGVSYWRpdXMgPSBwbGF5ZXIubWluTWlkZGxlUmFkaXVzICsgdGhpcy5pbmNyZWFzZU1heFxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFggPSBwbGF5ZXIuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5YID0gcGxheWVyLmNlbnRlclggKyBNYXRoLmNvcyhwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1heFhcblxuICAgICAgICAvLyAgIHBvaW50LnRhcmdldE1heFkgPSBwbGF5ZXIuY2VudGVyWSArIE1hdGguc2luKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgLy8gICBwb2ludC50YXJnZXRNaW5ZID0gcGxheWVyLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgLy8gICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgLy8gICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgIC8vICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChwbGF5ZXIucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJjb25zdCBERUJVRyA9IHRydWVcblxuZXhwb3J0IGRlZmF1bHQgREVCVUdcbiIsImNvbnN0IFNlcnZlciA9IHtcbiAgaG9zdDogd2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpLFxuICB3ZWJzb2NrZXQ6IG5ldyBXZWJTb2NrZXQoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbi5yZXBsYWNlKC9eaHR0cC8sICd3cycpfS9nYW1lYCksXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlclxuIiwiXG5pbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcbmltcG9ydCBzZXR1cFRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL3NldHVwLmh0bWwnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL1NjZW5lJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcblxuLy8gc2VydmVyXG5pbXBvcnQgU2VydmVyIGZyb20gJy4uL2NvbnN0YW50cy9TZXJ2ZXInXG5pbXBvcnQgREVCVUcgZnJvbSAnLi4vY29uc3RhbnRzL0RlYnVnJ1xuXG4vLyBhc3NldHNcbmltcG9ydCBzY2VuZTFCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvYmtnMS5qcGcnXG5pbXBvcnQgc2NlbmUxSXRlbSBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcbmltcG9ydCBzY2VuZTJCa2cgZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nJ1xuLy8gaW1wb3J0IHNjZW5lMkl0ZW0gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmcnXFxcblxuY29uc3QgcGxheWVySWRzID0gREVCVUcgPyBbJ3JlZmllanJmZXInLCAnZXJmamVyZnBpZSddIDogW11cbmNvbnN0IHRva2VucyA9IFsnMTIzJywgJzQ1NiddXG5cblxuLy8gcHJlcGFyZSB0aGUgQ2hhcmFjdGVySWRcbi8vIENoYXJhY3RlcklkIC0tPiBnZXQgdGhlIGltYWdlIG9mIHRoZSBjaGFyYWN0ZXJcbi8vIGVuZCBzY2VuZTpcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuXG4gICAgaWYgKCFERUJVRykge1xuICAgICAgU2VydmVyLndlYnNvY2tldC5vbm9wZW4gPSB0aGlzLm9uV3NPcGVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICB9XG5cbiAgb25Xc09wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluLmlubmVySFRNTCA9IHNldHVwVG1wXG4gICAgdGhpcy5zZXR1cE1lc3NhZ2UgPSB0aGlzLm1haW4ucXVlcnlTZWxlY3RvcignLnNldHVwX19tZXNzYWdlJylcbiAgICBTZXJ2ZXIud2Vic29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMubGlzdGVuU2VydmVyXG4gIH1cblxuICBsaXN0ZW5TZXJ2ZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEuc3BsaXQoJywnKVxuXG4gICAgaWYgKGRhdGFbMF0gPT09ICd0b2tlbl9zdWJtaXQnKSB7XG4gICAgICAvLyBsb29wIGludG8gdGhlIHRva2VucywgaWYgdGhlIHRva2VuIGNvcnJlc3BvbmQsIHNldCB1cCB0aGUgaWRcbiAgICAgIGxldCB2YWxpZFRva2VuID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2tlbnNbaV0gPT09IGRhdGFbMV0gJiYgZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkKSB7XG4gICAgICAgICAgLy8gZGF0YVsyXSAhPT0gdGhpcy5maXJzdFBsYXllcklkIEluIGNhc2Ugc2Vjb25kIHBsYXllciB1c2UgdGhlIHRva2VuIG9mIHRoZSBmaXJzdCBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXJJZHMucHVzaChkYXRhWzJdKVxuICAgICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwxYClcbiAgICAgICAgICB2YWxpZFRva2VuID0gdHJ1ZVxuICAgICAgICAgIHRoaXMuZmlyc3RQbGF5ZXJJZCA9IGRhdGFbMl1cbiAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZS5pbm5lckhUTUwgPSBgUGxheWVyICR7cGxheWVySWRzLmxlbmd0aH0gaXMgcmVhZHlgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZChgYXV0aF9yZXN1bHQsJHtkYXRhWzJdfSwwYClcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gaWYgYm90aCBwbGF5ZXJzIGFyZSBzZXQsIGxldCdzIHN0YXJ0XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhWzBdID09PSAnY3Vyc29yX21vdmUnKSB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChkYXRhWzJdLCAxMCkgKiB0aGlzLnZiV2lkdGhcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KGRhdGFbM10sIDEwKSAqIHRoaXMudmJXaWR0aFxuICAgICAgLy8gd2UgdXNlIHZiV2lkdGggdGhlIHNhbWUgY29lZmljaWVudCBoZXJlIHRvIGhhdmUgdGhlIHNhbWUgc3BlZWQgbW92ZW1lbnQgb24gdG91Y2htb3ZlIFggYW5kIFlcbiAgICAgIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYID0geCArIHRoaXMucGxheWVyc1tkYXRhWzFdXS50YXJnZXRYXG4gICAgICB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WSA9IHkgKyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WVxuXG4gICAgICAvLyB0aGlzLnBsYXllcnNbZGF0YVsxXV0udGFyZ2V0WFxuICAgIH0gZWxzZSBpZiAoZGF0YVswXSA9PT0gJ2NsaWNrJykge1xuICAgICAgLy8gZGF0YVsxXSBuZWVkcyB0byBiZSB0aGUgaW5kZXggb2YgcGxheWVyIChvciBpZClcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmhhbmRsZUNsaWNrKGRhdGFbMV0pXG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIURFQlVHKSBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVySWRzWzBdfSwwYClcbiAgICB0aGlzLm1haW4uaW5uZXJIVE1MID0gZ2FtZVRtcFxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2dhbWVdJylcblxuICAgIC8vIHNjb3Jlc1xuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6IHNjZW5lMUJrZyxcbiAgICAgICAgbWFza2VkQmtnOiBzY2VuZTFCa2csXG4gICAgICAgIGl0ZW06IHNjZW5lMUl0ZW0sXG4gICAgICAgIG51bUl0ZW1zOiA1LFxuICAgICAgICBncmlkQ29sczogNixcbiAgICAgICAgZ3JpZExpbmVzOiA2LFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiBzY2VuZTJCa2csXG4gICAgICAgIG1hc2tlZEJrZzogc2NlbmUyQmtnLFxuICAgICAgICBpdGVtOiBzY2VuZTFJdGVtLFxuICAgICAgICBudW1JdGVtczogNSxcbiAgICAgICAgZ3JpZENvbHM6IDgsXG4gICAgICAgIGdyaWRMaW5lczogOCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMCxcbiAgICAgICAgZ3JpZExpbmVzOiAxMCxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogc2NlbmUxQmtnLFxuICAgICAgICBtYXNrZWRCa2c6IHNjZW5lMUJrZyxcbiAgICAgICAgaXRlbTogc2NlbmUxSXRlbSxcbiAgICAgICAgbnVtSXRlbXM6IDUsXG4gICAgICAgIGdyaWRDb2xzOiAxMixcbiAgICAgICAgZ3JpZExpbmVzOiAxMixcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnBsYXllcnMgPSBbXVxuICAgIHRoaXMuc2NvcmVzID0gWzAsIDBdXG4gICAgdGhpcy5jdXJyZW50U2NlbmVJbmRleCA9IDBcblxuICAgIHRoaXMubG9hZEJrZygpXG4gIH1cblxuICBsb2FkQmtnKCkge1xuICAgIC8vIExvYWQgQ3VycmVudCBTY2VuZSBpbWFnZVxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLnNyYyA9IHRoaXMuc2NlbmVzW3RoaXMuY3VycmVudFNjZW5lSW5kZXhdLmJrZ1xuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvLyBpbWFnZSBsb2FkZWRcbiAgICAgIHRoaXMuZG9tKClcbiAgICAgIHRoaXMuc2V0UGxheWVycygpXG5cbiAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgICAgLy8gYWRkIGltYWdlIHBsYWNob2xkZXJcbiAgICAgIHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIuc3JjID0gc2NlbmUuYmtnXG5cbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgICAgZWw6IHRoaXMuZG9tLnNjZW5lLFxuICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50U2NlbmVJbmRleCxcbiAgICAgICAgLi4uc2NlbmUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBpbWFnZVBsYWNlaG9sZGVyOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lX19wbGFjZWhvbGRlcicpLFxuICAgICAgY3Vyc29yczogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJzb3InKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX21lc3NhZ2UnKSxcbiAgICAgIHNjb3JlQ2VudGVyUmVjYXA6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2l0ZW1zJyksXG4gICAgICB0aW1lcjogdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lcicpLFxuICAgIH1cbiAgfVxuXG4gIHNldFBsYXllcnMoKSB7XG4gICAgdGhpcy5wbGF5ZXJJZHMgPSBwbGF5ZXJJZHNcbiAgICB0aGlzLnZiV2lkdGggPSB0aGlzLmRvbS5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldFdpZHRoXG4gICAgdGhpcy52YkhlaWdodCA9IHRoaXMuZG9tLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0SGVpZ2h0XG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncmVkJyxcbiAgICAgICdibHVlJyxcbiAgICBdXG5cbiAgICAvLyBlYWNoIHBsYXllciBpcyBhbiBvYmplY3Qgd2l0aCBhIGtleS9pZFxuICAgIHRoaXMucGxheWVycyA9IHt9XG4gICAgaWYgKHBsYXllcklkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbMF1dID0gbmV3IFBsYXllcih7XG4gICAgICAgIGVsOiB0aGlzLmRvbS5jdXJzb3JzWzBdLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY29sb3I6IGNvbG9yc1swXSxcbiAgICAgICAgaWQ6IHBsYXllcklkc1swXSxcbiAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzWzFdXSA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICBlbDogdGhpcy5kb20uY3Vyc29yc1sxXSxcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGNvbG9yOiBjb2xvcnNbMV0sXG4gICAgICAgIGlkOiBwbGF5ZXJJZHNbMV0sXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoZHVyYXRpb24pIHtcbiAgICBsZXQgdGltZXIgPSBkdXJhdGlvblxuICAgIGxldCBzZWNvbmRzXG5cbiAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBkdXJhdGlvblxuXG4gICAgdGhpcy50aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyLCAxMClcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kc1xuXG4gICAgICB0aGlzLmRvbS50aW1lci5pbm5lckhUTUwgPSBzZWNvbmRzXG5cbiAgICAgIGlmICh0aW1lciA9PT0gMCkge1xuICAgICAgICB0aGlzLmVuZFNjZW5lKCdUSU1FIE9VVCEnKVxuICAgICAgfVxuXG4gICAgICB0aW1lciAtPSAxXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIHNjb3JlKHBsYXllciwgaXRlbSkge1xuICAgIHRoaXMucG9wVXBNZXNzYWdlKCcrMScsIHBsYXllci5jb2xvcikgLy8gKyBjb2xvciBwbGF5ZXJcblxuICAgIHRoaXMuc2NvcmVzW3BsYXllci5pbmRleF0gKz0gMVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvdW5kJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb20uc2NvcmVDZW50ZXJSZWNhcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHBsYXllci5pbmRleCkge1xuICAgICAgICB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwW2ldLmlubmVySFRNTCA9IGBQLSR7cGxheWVyLmluZGV4ICsgMX0gOiAke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1cbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2NvcmVfX2l0ZW0nKVxuICAgIHRoaXMuZG9tLnNjb3JlSXRlbXNbcGxheWVyLmluZGV4XS5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICBTZXJ2ZXIud2Vic29ja2V0LnNlbmQoYHNjb3JlLCR7cGxheWVyLmlkfSwke3RoaXMuc2NvcmVzW3BsYXllci5pbmRleF19YClcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpdi5yZW1vdmUoKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICBlbmRTY2VuZShtZXNzYWdlID0gJ3N0YWdlIGNvbXBsZXRlJykge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKVxuICAgIHRoaXMucG9wVXBNZXNzYWdlKG1lc3NhZ2UsICdibGFjaycsIHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lSW5kZXggKyAxKVxuICAgIH0sIDIwMDApXG4gIH1cblxuICB1cGRhdGVTY2VuZShpbmRleCkge1xuICAgIHRoaXMuZGVzdHJveVNjZW5lKHRoaXMuY3VycmVudFNjZW5lKVxuXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnNjZW5lcy5sZW5ndGggKyAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnZW5kIG9mIHBhcnR5JylcbiAgICAgIFNlcnZlci53ZWJzb2NrZXQuc2VuZCgnZGlzY29ubmVjdF9hbGxfdXNlcnMnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmVzZXQgcGxheWVycyBwb3MgdG8gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVySWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS50YXJnZXRYID0gMFxuICAgICAgdGhpcy5wbGF5ZXJzW3BsYXllcklkc1tpXV0udGFyZ2V0WSA9IDBcbiAgICAgIHRoaXMucGxheWVyc1twbGF5ZXJJZHNbaV1dLnggPSAwXG4gICAgICB0aGlzLnBsYXllcnNbcGxheWVySWRzW2ldXS55ID0gMFxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lSW5kZXggPSBpbmRleFxuICAgIGNvbnN0IHNjZW5lID0gdGhpcy5zY2VuZXNbdGhpcy5jdXJyZW50U2NlbmVJbmRleF1cblxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gbmV3IFNjZW5lKHtcbiAgICAgIGVsOiB0aGlzLmRvbS5zY2VuZSxcbiAgICAgIGluZGV4OiB0aGlzLmN1cnJlbnRTY2VuZUluZGV4LFxuICAgICAgLi4uc2NlbmUsXG4gICAgfSlcbiAgfVxuXG4gIGRlc3Ryb3lTY2VuZShzY2VuZSkge1xuICAgIC8vIGNsZWFuIGNvbXBvbmVudFxuICAgIGlmIChzY2VuZS5kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNjZW5lLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUN1c3RvbUV2ZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50J1xuXG5jbGFzcyBSQUZNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGhhbmRsZVJBRiA9IG5vdyA9PiB7XG4gICAgLy8gbm93ID09PSB0aW1lIGluIG1zXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSQUYpXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ1JBRicsIHsgbm93IH0pKVxuICB9XG5cbiAgcmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSQUZNYW5hZ2VyKClcbiIsImZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgIGRldGFpbDogZGF0YSxcbiAgfSlcbiAgcmV0dXJuIGV2ZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1c3RvbUV2ZW50XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICBjb25zdCBib2R5VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcblxuICByZXR1cm4gYm91bmRzLnRvcCArIGJvZHlUb3Bcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldExlZnQoZWxlbSkgeyAvLyBpc3N1ZXMgb24gaWUxMVxuXG4gIGlmICghZWxlbSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICBjb25zdCBib3VuZHMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgcmV0dXJuIGJvdW5kcy5sZWZ0XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gb3V0RXhwbyhuKSB7XG4gIGlmIChuID09PSAxKSB7XG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIHJldHVybiAxIC0gKDIgKiogKC0xMCAqIG4pKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRTaW5lKG4pIHtcblx0cmV0dXJuIC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogbikpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuXHQgLy8gcmV0dXJuIHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gIGlmIChtaW4gPiBtYXgpIHtcbiAgICBjb25zdCB0bXAgPSBtaW5cbiAgICBtaW4gPSBtYXhcbiAgICBtYXggPSB0bXBcbiAgfVxuICByZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcblxuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXROb3coKSB7XG4gIHJldHVybiAnbm93JyBpbiB3aW5kb3cucGVyZm9ybWFuY2UgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59IiwiaW1wb3J0ICcuLi9zY3NzL2dhbWUuc2NzcydcblxuLy8gaW1wb3J0IEdhbWVDb21tdW5pY2F0b3IgZnJvbSAnLi9jb21wb25lbnRzL0dhbWVDb21tdW5pY2F0b3InXG5cbi8vIG5ldyBHYW1lQ29tbXVuaWNhdG9yKClcblxuaW1wb3J0ICcuL2Zyb250LWVuZC9hcHAnXG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gcm5nKCk7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtcbiAgICAgICAgc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICAgICAgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1cbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IGJ5dGVzVG9VdWlkKGIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHYxO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gYmlnIGN1cnNvciAtLT5cXG48c2VjdGlvbiBjbGFzcz1cXFwiZ2FtZVxcXCIgZ2FtZT5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjZW5lXFxcIiBzY2VuZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NlbmVfX3dyYXBwZXJcXFwiPlxcbiAgICAgIDwhLS0gc3ZnIHNjZW5lIGZvciBtYXNrcyBldGMuLi4gLS0+XFxuICAgICAgPHN2ZyBjbGFzcz1cXFwic2NlbmUtc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAzNiA2MzJcXFwiIHN0cm9rZT1cXFwiYmxhY2tcXFwiPlxcbiAgICAgICAgPGRlZnM+XFxuICAgICAgICAgIDxjbGlwUGF0aCBjbGFzcz1cXFwic2NlbmUtc3ZnX19jbGlwcGF0aFxcXCI+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMVxcXCIgLz5cXG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XFxcIiNwbGF5ZXIyXFxcIiAvPlxcbiAgICAgICAgICA8L2NsaXBQYXRoPlxcbiAgICAgICAgPC9kZWZzPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjFcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPHBhdGggaWQ9XFxcInBsYXllcjJcXFwiIGNsYXNzPVxcXCJjdXJzb3JcXFwiIHN0cm9rZS13aWR0aD1cXFwiNlxcXCI+PC9wYXRoPlxcbiAgICAgICAgPGcgY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGgtcmVmXFxcIj5cXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2ltYWdlXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBzbGljZVxcXCIgLz5cXG4gICAgICAgIDwvZz5cXG4gICAgICA8L3N2Zz5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY2VuZV9fcGxhY2Vob2xkZXJcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGltZXIgdC0zMi0tYm9sZFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG4gIDwhLS0gc2NvcmUgYm9hcmQgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY29yZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLXJlZCB0LTMyLS1ib2xkXFxcIj5QLTE6PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2l0ZW1zXFxcIj5cXG4gICAgICAgIDwhLS0gPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiLi4vaW1hZ2VzL3BhdHRlcm4ucG5nXFxcIiBhbHQ9XFxcIlxcXCI+IC0tPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX2NlbnRlclxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInQtMzItLWJvbGRcXFwiPkl0ZW0gdG8gZmluZDo8L3A+XFxuICAgICAgPGltZyBjbGFzcz1cXFwic2NvcmVfX2l0ZW1cXFwiIHNyYz1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvcGF0dGVybi5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJzY29yZV9fY2VudGVyX19yZWNhcCBjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMSA6IDA8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMiA6IDA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fcmVjYXBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbG9yLS1ibHVlIHQtMzItLWJvbGRcXFwiPlAtMjo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcInNldHVwXFxcIj5cXG4gIDwhLS0gcGxheWluZyBzY2VuZSAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNldHVwX19tZXNzYWdlIHQtNjQtLWJvbGRcXFwiPlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlwiOyJdLCJzb3VyY2VSb290IjoiIn0=