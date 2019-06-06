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

/***/ "./js/front-end/components/Game.js":
/*!*****************************************!*\
  !*** ./js/front-end/components/Game.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/front-end/utils/dom.js");
/* harmony import */ var _utils_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ease */ "./js/front-end/utils/ease.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/math */ "./js/front-end/utils/math.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./js/front-end/components/Player.js");
/* harmony import */ var _managers_GameManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../managers/GameManager */ "./js/front-end/managers/GameManager.js");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png");
/* harmony import */ var _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // assets



var Game =
/*#__PURE__*/
function () {
  function Game(el) {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "handleMouseMove", function (e) {
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      _this.eventX = e.touches ? e.touches[0].clientX : e.clientX;
      _this.eventX -= _this.offsetLeft;
      _this.eventY = e.touches ? e.touches[0].clientY : e.clientY;
      _this.eventY += scrollY;
      _this.targetX = _this.eventX / _this.width * _this.vbWidth; // because we're using viewbox units here

      _this.targetX -= _this.vbWidth / 2; // because starting point is this.centerX

      _this.targetY = _this.eventY / _this.height * _this.vbHeight - _this.offsetTop;
      _this.targetY -= _this.vbHeight / 2; // ^These shoudl be linked to a cursor
    });

    _defineProperty(this, "handleClick", function () {
      // console.log(e)
      // e will be current cursor with positions
      // if cursor position
      // Check if cursor item is found
      var precision = _this.clickPrecision;
      var player = _this.players[0];
      var x = _this.eventX / _this.width;
      var y = _this.eventY / _this.height;

      for (var i = 0; i < _this.items.length; i++) {
        var item = _this.items[i];

        if (!item.found && x > item.x - precision && x < item.x + precision && y > item.y - precision && y < item.y + precision) {
          _this.score(player);

          item.found = true;
          item.el.style.opacity = 0;
          item.debugEl.style.opacity = 0;
          _this.numItemFound = _this.numItemFound + 1;
        }
      }

      if (_this.numItemFound === _this.items.length) {
        _this.end();
      }
    });

    _defineProperty(this, "handleRAF", function (e) {
      var now = e.detail.now;
      _this.acceleration = _this.acceleration + (_this.destAcceleration - _this.acceleration) * _this.coefAcceleration;
      _this.x = _this.x + (_this.targetX - _this.x) * 0.1;
      _this.y = _this.y + (_this.targetY - _this.y) * 0.1; // For each cursor...

      for (var y = 0; y < _this.players.length; y++) {
        var cursor = _this.players[y]; // For each points of the cursor (organic shape)
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
          } // if item found, increase cursor radius


          if (y === 0 && cursor.itemFound && !point.isIncrease) {
            var newMaxRadius = _this.maxRadius + _this.increaseMax;
            var newMaxMiddleRadius = _this.maxMiddleRadius + _this.increaseMax;
            var newMinRadius = _this.minRadius + _this.increaseMax;
            var newMinMiddleRadius = _this.minMiddleRadius + _this.increaseMax;
            point.targetMaxX = _this.centerX + Math.cos(point.angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_3__["random"])(newMaxMiddleRadius, newMaxRadius);
            point.targetMinX = _this.centerX + Math.cos(point.angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_3__["random"])(newMinRadius, newMinMiddleRadius);
            point.destX = point.targetMaxX;
            point.targetMaxY = _this.centerY + Math.sin(point.angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_3__["random"])(newMaxMiddleRadius, newMaxRadius);
            point.targetMinY = _this.centerY + Math.sin(point.angle) * Object(_utils_math__WEBPACK_IMPORTED_MODULE_3__["random"])(newMinRadius, newMinMiddleRadius);
            point.destY = point.targetMaxY;
            point.startAnim = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getNow"])();
            point.isIncrease = true;
          }
        }

        cursor.el.setAttribute('d', _this.cardinal(cursor.points));
      }
    });

    this.element = el;
    this.imagePlaceholder = this.element.querySelector('.scene__placeholder'); // Load image

    var img = new Image();
    img.src = this.imagePlaceholder.src;

    img.onload = function () {
      // image loaded
      _this.dom();

      _this.set();
    };
  }

  _createClass(Game, [{
    key: "dom",
    value: function dom() {
      this.dom = {
        scene: this.element.querySelector('.scene'),
        cursors: this.element.querySelectorAll('.cursor'),
        message: this.element.parentNode.querySelector('.scene__message'),
        scoreCenterRecap: this.element.parentNode.querySelectorAll('.score__center__recap'),
        scoreItems: this.element.parentNode.querySelectorAll('.score__items'),
        svgScene: this.element.querySelector('.scene-svg'),
        svgImage: this.element.querySelector('.scene-svg__image'),
        svgClipPath: this.element.querySelector('.scene-svg__clippath'),
        svgClipPathRef: this.element.querySelector('.scene-svg__clippath-ref')
      };
    }
  }, {
    key: "set",
    value: function set() {
      this.fitSceneToImage();
      this.numPoints = parseInt(this.element.dataset.numPoints, 10);
      this.numItems = parseInt(this.element.dataset.numItems, 10);
      this.gridCols = parseInt(this.element.dataset.gridCols, 10);
      this.gridLines = parseInt(this.element.dataset.gridLines, 10); // values for SVG scene

      this.vbX = 0;
      this.vbY = 0;
      this.vbWidth = this.imagePlaceholder.offsetWidth;
      this.vbHeight = this.imagePlaceholder.offsetHeight; // assuming we always use a viewbox of 100 x 100

      this.centerX = this.vbWidth / 2; // equal to svg viewbox / 2

      this.centerY = this.vbHeight / 2; // equal to svg viewbox / 2

      this.minRadius = this.vbWidth * 0.05; // 70% of full size / 2 --> should be based on width viewbox

      this.maxRadius = this.minRadius + this.minRadius * 0.2;
      this.minMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.45;
      this.maxMiddleRadius = this.minRadius + (this.maxRadius - this.minRadius) * 0.55;
      this.minDuration = 700;
      this.maxDuration = 900;
      this.acceleration = 1;
      this.destAcceleration = 1;
      this.coefAcceleration = 0.2;
      this.increaseMax = this.vbWidth * 0.07; // items

      this.itemSize = this.vbWidth * 0.05; // values for mouse event

      this.x = 0;
      this.y = 0;
      this.targetX = 0;
      this.targetY = 0;
      this.clickPrecision = 0.05;
      this.numItemFound = 0; // values for DOM scene

      this.width = this.dom.scene.offsetWidth;
      this.height = this.dom.scene.offsetHeight;
      this.offsetLeft = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getOffsetLeft"])(this.element);
      this.offsetTop = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getOffsetTop"])(this.element);
      this.setPlayers();
      this.setGrid();
      this.setItems(); // start events

      this.events(true);
      this.eventsRAF(true);
    }
  }, {
    key: "setPlayers",
    value: function setPlayers() {
      if (this.dom.svgClipPath) {
        this.setClipPathId();
      } // this.svgPath.setAttribute('d', this.cardinal(this.points))


      var obj = {
        numPoints: this.numPoints,
        minDuration: this.minDuration,
        maxDuration: this.maxDuration,
        centerX: this.centerX,
        centerY: this.centerY,
        minRadius: this.minRadius,
        maxRadius: this.maxRadius,
        minMiddleRadius: this.minMiddleRadius,
        maxMiddleRadius: this.maxMiddleRadius
      };
      var colors = ['red', 'blue']; // set players

      this.players = [];

      for (var i = 0; i < this.dom.cursors.length; i++) {
        var props = Object.assign(obj, {
          el: this.dom.cursors[i],
          index: i,
          color: colors[i]
        });
        this.players.push(new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](props));
      }
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
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a);
        svgImage.setAttributeNS(null, 'x', "".concat(x * 100, "%"));
        svgImage.setAttributeNS(null, 'y', "".concat(y * 100, "%"));
        svgImage.setAttributeNS(null, 'transform', "translate(-".concat(this.itemSize / 2, " -").concat(this.itemSize / 2, ")"));
        svgImage.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid slice');
        this.dom.svgClipPathRef.appendChild(svgImage); // fake item for debugging

        var div = document.createElement('div');
        div.classList.add('debug');
        div.style.left = "".concat(x * 100, "%");
        div.style.top = "".concat(y * 100, "%");
        this.dom.scene.appendChild(div);
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
      this.dom.svgScene.setAttribute('viewBox', "0 0 ".concat(this.imagePlaceholder.offsetWidth, " ").concat(this.imagePlaceholder.offsetHeight));
    }
  }, {
    key: "score",
    value: function score(player) {
      this.popUpMessage('+1', player.color); // + color player

      _managers_GameManager__WEBPACK_IMPORTED_MODULE_5__["default"].scores[player.index] += 1;
      this.element.parentNode.classList.add('item-found');

      for (var i = 0; i < this.dom.scoreCenterRecap.length; i++) {
        if (i === player.index) {
          this.dom.scoreCenterRecap[i].innerHTML = "P-".concat(player.index + 1, " : ").concat(_managers_GameManager__WEBPACK_IMPORTED_MODULE_5__["default"].scores[player.index]);
        }
      }

      var img = document.createElement('img');
      img.src = _assets_front_end_images_pattern_png__WEBPACK_IMPORTED_MODULE_6___default.a;
      img.classList.add('score__item');
      this.dom.scoreItems[player.index].appendChild(img);
    }
  }, {
    key: "end",
    value: function end() {
      this.popUpMessage('end of game', 'black', true); // this.events(false)
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

  return Game;
}();



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
        numPoints = props.numPoints,
        minDuration = props.minDuration,
        maxDuration = props.maxDuration,
        centerX = props.centerX,
        centerY = props.centerY,
        minRadius = props.minRadius,
        maxRadius = props.maxRadius,
        minMiddleRadius = props.minMiddleRadius,
        maxMiddleRadius = props.maxMiddleRadius;
    this.el = el;
    this.index = index;
    this.color = color;
    this.numPoints = numPoints;
    this.minDuration = minDuration;
    this.maxDuration = maxDuration;
    this.centerX = centerX;
    this.centerY = centerY;
    this.minRadius = minRadius;
    this.maxRadius = maxRadius;
    this.minMiddleRadius = minMiddleRadius;
    this.maxMiddleRadius = maxMiddleRadius;
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
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Game */ "./js/front-end/components/Game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GameManager =
/*#__PURE__*/
function () {
  function GameManager() {
    _classCallCheck(this, GameManager);

    this.main = document.querySelector('.main');
    this.main.innerHTML = _templates_front_end_game_html__WEBPACK_IMPORTED_MODULE_0___default.a; // scores

    this.scores = [0, 0];
    this.scenes = [{
      bkg: '../../images/find-cat.png',
      effect: '?'
    }, {
      bkg: '../../images/find-cat.png',
      effect: '?'
    }, {
      bkg: '../../images/find-cat.png',
      effect: '?'
    }, {
      bkg: '../../images/find-cat.png',
      effect: '?'
    }];
    this.currentIndex = 0; // init components

    var game = document.querySelector('[game]');
    this.currentScene = new _components_Game__WEBPACK_IMPORTED_MODULE_1__["default"](game, this.currentIndex);
  }

  _createClass(GameManager, [{
    key: "updateScene",
    value: function updateScene(index) {
      this.destroyScene(this.currentScene);
      this.currentScene = new _components_Game__WEBPACK_IMPORTED_MODULE_1__["default"](index);
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

module.exports = "<!-- big cursor -->\n<section class=\"game\" game data-num-items=\"5\" data-num-points=\"7\" data-grid-cols=\"4\" data-grid-lines=\"4\">\n  <!-- playing scene -->\n  <div class=\"scene\">\n    <div class=\"scene__wrapper\">\n      <!-- svg scene for masks etc... -->\n      <svg class=\"scene-svg\" viewBox=\"0 0 1036 632\" stroke=\"black\">\n        <defs>\n          <clipPath class=\"scene-svg__clippath\">\n            <use xlink:href=\"#player1\" />\n            <use xlink:href=\"#player2\" />\n          </clipPath>\n        </defs>\n        <path id=\"player1\" class=\"cursor\" stroke-width=\"6\"></path>\n        <path id=\"player2\" class=\"cursor\" stroke-width=\"6\"></path>\n        <g class=\"scene-svg__clippath-ref\">\n          <image class=\"scene-svg__image\" xlink:href=\"" + __webpack_require__(/*! ../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png") + "\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"xMidYMid slice\" />\n        </g>\n      </svg>\n      <img class=\"scene__placeholder\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/find-cat.png */ "./assets/front-end/images/find-cat.png") + "\" alt=\"\">\n    </div>\n  </div>\n  <!-- score board -->\n  <div class=\"score\">\n    <div class=\"score__recap\">\n      <div class=\"color--red t-32--bold\">P-1:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n    <div class=\"score__center\">\n      <p class=\"t-32--bold\">Item to find:</p>\n      <img class=\"score__item\" src=\"" + __webpack_require__(/*! ../../assets/front-end/images/pattern.png */ "./assets/front-end/images/pattern.png") + "\" alt=\"\">\n      <p class=\"score__center__recap color--red t-32--bold\">P-1 : 0</p>\n      <p class=\"score__center__recap color--blue t-32--bold\">P-2 : 0</p>\n    </div>\n    <div class=\"score__recap\">\n      <div class=\"color--blue t-32--bold\">P-2:</div>\n      <div class=\"score__items\">\n        <!-- <img class=\"score__item\" src=\"../images/pattern.png\" alt=\"\"> -->\n      </div>\n    </div>\n  </div>\n</section>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9mcm9udC1lbmQvaW1hZ2VzL3BhdHRlcm4ucG5nIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL2NvbXBvbmVudHMvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvY29tcG9uZW50cy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvZnJvbnQtZW5kL21hbmFnZXJzL0dhbWVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC9tYW5hZ2Vycy9SQUZNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9jcmVhdGVDdXN0b21FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9mcm9udC1lbmQvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9lYXNlLmpzIiwid2VicGFjazovLy8uL2pzL2Zyb250LWVuZC91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Zyb250LWVuZC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL3RlbXBsYXRlcy9mcm9udC1lbmQvZ2FtZS5odG1sIl0sIm5hbWVzIjpbIkdhbWUiLCJlbCIsImUiLCJzY3JvbGxZIiwid2luZG93IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJldmVudFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJldmVudFkiLCJjbGllbnRZIiwidGFyZ2V0WCIsIndpZHRoIiwidmJXaWR0aCIsInRhcmdldFkiLCJoZWlnaHQiLCJ2YkhlaWdodCIsIm9mZnNldFRvcCIsInByZWNpc2lvbiIsImNsaWNrUHJlY2lzaW9uIiwicGxheWVyIiwicGxheWVycyIsIngiLCJ5IiwiaSIsIml0ZW1zIiwibGVuZ3RoIiwiaXRlbSIsImZvdW5kIiwic2NvcmUiLCJzdHlsZSIsIm9wYWNpdHkiLCJkZWJ1Z0VsIiwibnVtSXRlbUZvdW5kIiwiZW5kIiwibm93IiwiZGV0YWlsIiwiYWNjZWxlcmF0aW9uIiwiZGVzdEFjY2VsZXJhdGlvbiIsImNvZWZBY2NlbGVyYXRpb24iLCJjdXJzb3IiLCJwb2ludHMiLCJwb2ludCIsInBlcmNlbnQiLCJzdGFydEFuaW0iLCJkdXJhdGlvbiIsInN0YXJ0WCIsImRlc3RYIiwiaW5PdXRTaW5lIiwic3RhcnRZIiwiZGVzdFkiLCJyZXZlcnNlQW5pbSIsInRhcmdldE1heFgiLCJ0YXJnZXRNYXhZIiwiZ2V0Tm93IiwidGFyZ2V0TWluWCIsInRhcmdldE1pblkiLCJpdGVtRm91bmQiLCJpc0luY3JlYXNlIiwibmV3TWF4UmFkaXVzIiwibWF4UmFkaXVzIiwiaW5jcmVhc2VNYXgiLCJuZXdNYXhNaWRkbGVSYWRpdXMiLCJtYXhNaWRkbGVSYWRpdXMiLCJuZXdNaW5SYWRpdXMiLCJtaW5SYWRpdXMiLCJuZXdNaW5NaWRkbGVSYWRpdXMiLCJtaW5NaWRkbGVSYWRpdXMiLCJjZW50ZXJYIiwiTWF0aCIsImNvcyIsImFuZ2xlIiwicmFuZG9tIiwiY2VudGVyWSIsInNpbiIsInNldEF0dHJpYnV0ZSIsImNhcmRpbmFsIiwiZWxlbWVudCIsImltYWdlUGxhY2Vob2xkZXIiLCJxdWVyeVNlbGVjdG9yIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkb20iLCJzZXQiLCJzY2VuZSIsImN1cnNvcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVzc2FnZSIsInBhcmVudE5vZGUiLCJzY29yZUNlbnRlclJlY2FwIiwic2NvcmVJdGVtcyIsInN2Z1NjZW5lIiwic3ZnSW1hZ2UiLCJzdmdDbGlwUGF0aCIsInN2Z0NsaXBQYXRoUmVmIiwiZml0U2NlbmVUb0ltYWdlIiwibnVtUG9pbnRzIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwibnVtSXRlbXMiLCJncmlkQ29scyIsImdyaWRMaW5lcyIsInZiWCIsInZiWSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIml0ZW1TaXplIiwiZ2V0T2Zmc2V0TGVmdCIsImdldE9mZnNldFRvcCIsInNldFBsYXllcnMiLCJzZXRHcmlkIiwic2V0SXRlbXMiLCJldmVudHMiLCJldmVudHNSQUYiLCJzZXRDbGlwUGF0aElkIiwib2JqIiwiY29sb3JzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImNvbG9yIiwicHVzaCIsIlBsYXllciIsImlkIiwidXVpZHYxIiwicG9zaXRpb25zSW5HcmlkIiwiaiIsInJkIiwicmFuZG9tSW50Iiwic3BsaWNlIiwiY3JlYXRlRWxlbWVudE5TIiwic2V0QXR0cmlidXRlTlMiLCJpdGVtSW1nIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVmdCIsInRvcCIsInBvcFVwTWVzc2FnZSIsIkdhbWVNYW5hZ2VyIiwic2NvcmVzIiwiaW5uZXJIVE1MIiwic2V0VGltZW91dCIsInJlbW92ZSIsIm1ldGhvZCIsImV2IiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVSQUYiLCJ0ZW5zaW9uIiwibmJQb2ludHMiLCJwYXRoIiwicDAiLCJwMSIsInAyIiwicDMiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImlzSW5zaWRlVGltZSIsInNldFBvaW50cyIsInNsaWNlIiwiUEkiLCJzdGFydEFuZ2xlIiwibWFyZ2VBbmdsZSIsIm1haW4iLCJnYW1lVG1wIiwic2NlbmVzIiwiYmtnIiwiZWZmZWN0IiwiY3VycmVudEluZGV4IiwiZ2FtZSIsImN1cnJlbnRTY2VuZSIsImRlc3Ryb3lTY2VuZSIsImRlc3Ryb3kiLCJGdW5jdGlvbiIsIlJBRk1hbmFnZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImV2ZW50TmFtZSIsImRhdGEiLCJldmVudCIsIkN1c3RvbUV2ZW50Iiwic2h1ZmZsZUFycmF5IiwibyIsImZsb29yIiwiZ2V0QW5jZXN0b3IiLCJjbGFzc05hbWUiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJnZXRJbmRleCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImdldFVSTFBhcmFtZXRlcnMiLCJwYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcnRzIiwic3Vic3RyaW5nIiwic3BsaXQiLCJudiIsImlzV2ViR0wiLCJjYW52YXMiLCJnbCIsImdldENvbnRleHQiLCJXZWJHTFJlbmRlcmluZ0NvbnRleHQiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJpc0ZhY2Vib29rQXBwIiwidWEiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImF1dG9CaW5kIiwic2VsZiIsImdldE93blByb3BlcnR5TmFtZXMiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImtleSIsInZhbCIsImJpbmQiLCJlbGVtIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiYm9keVRvcCIsImJvZHkiLCJwYXJzZV9xdWVyeV9zdHJpbmciLCJxdWVyeSIsInZhcnMiLCJxdWVyeV9zdHJpbmciLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXJyIiwiSUVWZXJzaW9uIiwibXlOYXYiLCJ0b0xvd2VyQ2FzZSIsImlzSW5WaWV3cG9ydCIsInJlY3QiLCJodG1sIiwiYm90dG9tIiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRDb29raWUiLCJjbmFtZSIsIm5hbWUiLCJkZWNvZGVkQ29va2llIiwiY29va2llIiwiY2EiLCJjIiwiY2hhckF0IiwiYnJvd3NlciIsInRlbSIsIk0iLCJtYXRjaCIsInRlc3QiLCJleGVjIiwiam9pbiIsInJlcGxhY2UiLCJhcHBOYW1lIiwiYXBwVmVyc2lvbiIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdldFRpbWUiLCJvdXRFeHBvIiwibiIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJyYW5nZSIsIm9sZE1pbiIsIm9sZE1heCIsIm5ld01pbiIsIm5ld01heCIsInRtcCIsInJhbmRvbUZsb2F0IiwiZGVjaW1hbHMiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvRGVncmVlIiwicmFkaWFucyIsInRvUmFkaWFuIiwiZGVncmVlcyIsImNhbGN1bGF0ZUFzcGVjdFJhdGlvRml0Iiwic3JjV2lkdGgiLCJzcmNIZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNvdmVyIiwiZm4iLCJyYXRpbyIsInciLCJoIiwiZ2V0UG9pbnRzRGlzdCIsInNxcnQiLCJnZXRDb2VmZkRpcmVjdGV1ciIsIm0iLCJwIiwicHJlcGVuZFplcm8iLCJzdHIiLCJ0b3RhbE5iciIsInRvU3RyaW5nIiwicm91bmQiLCJkZWMiLCJnZXRNaW4iLCJyZWR1Y2UiLCJhIiwiYiIsImdldE1heCIsInJlbW92ZUR1cGxpY2F0ZXMiLCJ1bmlxdWVfYXJyYXkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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QUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDNUdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCt5QkFBK3lCLG1CQUFPLENBQUMsMEZBQTRDLGdLQUFnSyxtQkFBTyxDQUFDLDBGQUE0QyxxY0FBcWMsbUJBQU8sQ0FBQyx3RkFBMkMseWIiLCJmaWxlIjoianMvZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2dhbWUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2ViODBhNTI3ZGUxMGUyMjNlODJjZDQ4NTFhNDFkMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0NzllOTM1NmMwNTAwMDM5ZWY0Zjc0NmJhODAyMmFkZS5wbmdcIjsiLCJpbXBvcnQgJy4uLy4uL3Njc3MvZnJvbnQtZW5kL3N0eWxlLnNjc3MnXG5cbmltcG9ydCAnLi9tYW5hZ2Vycy9SQUZNYW5hZ2VyJ1xuaW1wb3J0ICcuL21hbmFnZXJzL0dhbWVNYW5hZ2VyJ1xuXG4vLyBub3Qgd29ya2luZyBhbnltb3JlIGZvciBzb21lIHJlYXNvblxuLy8gKCgpID0+IHtcbi8vICAgLy8gaW1wb3J0IEdhbWVNYW5hbmdlciB3aGVuIERPTSBpcyByZWFkeVxuLy8gICBpbXBvcnQoJy4vbWFuYWdlcnMvR2FtZU1hbmFnZXInKVxuLy8gfSkoKVxuIiwiaW1wb3J0IHV1aWR2MSBmcm9tICd1dWlkL3YxJ1xuaW1wb3J0IHsgZ2V0Tm93LCBnZXRPZmZzZXRUb3AsIGdldE9mZnNldExlZnQgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyBpbk91dFNpbmUgfSBmcm9tICcuLi91dGlscy9lYXNlJ1xuaW1wb3J0IHsgcmFuZG9tLCByYW5kb21JbnQgfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcidcbmltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuLi9tYW5hZ2Vycy9HYW1lTWFuYWdlcidcblxuLy8gYXNzZXRzXG5pbXBvcnQgaXRlbUltZyBmcm9tICcuLi8uLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxcblxuICAgIHRoaXMuaW1hZ2VQbGFjZWhvbGRlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmVfX3BsYWNlaG9sZGVyJylcblxuICAgIC8vIExvYWQgaW1hZ2VcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgIGltZy5zcmMgPSB0aGlzLmltYWdlUGxhY2Vob2xkZXIuc3JjXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vIGltYWdlIGxvYWRlZFxuICAgICAgdGhpcy5kb20oKVxuICAgICAgdGhpcy5zZXQoKVxuICAgIH1cbiAgfVxuXG4gIGRvbSgpIHtcbiAgICB0aGlzLmRvbSA9IHtcbiAgICAgIHNjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lJyksXG4gICAgICBjdXJzb3JzOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnNvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnNjZW5lX19tZXNzYWdlJyksXG4gICAgICBzY29yZUNlbnRlclJlY2FwOiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmVfX2NlbnRlcl9fcmVjYXAnKSxcbiAgICAgIHNjb3JlSXRlbXM6IHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZV9faXRlbXMnKSxcbiAgICAgIHN2Z1NjZW5lOiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNjZW5lLXN2ZycpLFxuICAgICAgc3ZnSW1hZ2U6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19pbWFnZScpLFxuICAgICAgc3ZnQ2xpcFBhdGg6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aCcpLFxuICAgICAgc3ZnQ2xpcFBhdGhSZWY6IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2NlbmUtc3ZnX19jbGlwcGF0aC1yZWYnKSxcbiAgICB9XG4gIH1cblxuICBzZXQoKSB7XG4gICAgdGhpcy5maXRTY2VuZVRvSW1hZ2UoKVxuXG4gICAgdGhpcy5udW1Qb2ludHMgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZGF0YXNldC5udW1Qb2ludHMsIDEwKVxuICAgIHRoaXMubnVtSXRlbXMgPSBwYXJzZUludCh0aGlzLmVsZW1lbnQuZGF0YXNldC5udW1JdGVtcywgMTApXG4gICAgdGhpcy5ncmlkQ29scyA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5kYXRhc2V0LmdyaWRDb2xzLCAxMClcbiAgICB0aGlzLmdyaWRMaW5lcyA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5kYXRhc2V0LmdyaWRMaW5lcywgMTApXG5cbiAgICAvLyB2YWx1ZXMgZm9yIFNWRyBzY2VuZVxuICAgIHRoaXMudmJYID0gMFxuICAgIHRoaXMudmJZID0gMFxuICAgIHRoaXMudmJXaWR0aCA9IHRoaXMuaW1hZ2VQbGFjZWhvbGRlci5vZmZzZXRXaWR0aFxuICAgIHRoaXMudmJIZWlnaHQgPSB0aGlzLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0SGVpZ2h0XG4gICAgLy8gYXNzdW1pbmcgd2UgYWx3YXlzIHVzZSBhIHZpZXdib3ggb2YgMTAwIHggMTAwXG4gICAgdGhpcy5jZW50ZXJYID0gdGhpcy52YldpZHRoIC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLmNlbnRlclkgPSB0aGlzLnZiSGVpZ2h0IC8gMiAvLyBlcXVhbCB0byBzdmcgdmlld2JveCAvIDJcbiAgICB0aGlzLm1pblJhZGl1cyA9IHRoaXMudmJXaWR0aCAqIDAuMDUgLy8gNzAlIG9mIGZ1bGwgc2l6ZSAvIDIgLS0+IHNob3VsZCBiZSBiYXNlZCBvbiB3aWR0aCB2aWV3Ym94XG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArIHRoaXMubWluUmFkaXVzICogMC4yXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSB0aGlzLm1pblJhZGl1cyArICh0aGlzLm1heFJhZGl1cyAtIHRoaXMubWluUmFkaXVzKSAqIDAuNDVcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IHRoaXMubWluUmFkaXVzICsgKHRoaXMubWF4UmFkaXVzIC0gdGhpcy5taW5SYWRpdXMpICogMC41NVxuICAgIHRoaXMubWluRHVyYXRpb24gPSA3MDBcbiAgICB0aGlzLm1heER1cmF0aW9uID0gOTAwXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAxXG4gICAgdGhpcy5kZXN0QWNjZWxlcmF0aW9uID0gMVxuICAgIHRoaXMuY29lZkFjY2VsZXJhdGlvbiA9IDAuMlxuICAgIHRoaXMuaW5jcmVhc2VNYXggPSB0aGlzLnZiV2lkdGggKiAwLjA3XG5cbiAgICAvLyBpdGVtc1xuICAgIHRoaXMuaXRlbVNpemUgPSB0aGlzLnZiV2lkdGggKiAwLjA1XG5cbiAgICAvLyB2YWx1ZXMgZm9yIG1vdXNlIGV2ZW50XG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLnRhcmdldFggPSAwXG4gICAgdGhpcy50YXJnZXRZID0gMFxuICAgIHRoaXMuY2xpY2tQcmVjaXNpb24gPSAwLjA1XG4gICAgdGhpcy5udW1JdGVtRm91bmQgPSAwXG5cbiAgICAvLyB2YWx1ZXMgZm9yIERPTSBzY2VuZVxuICAgIHRoaXMud2lkdGggPSB0aGlzLmRvbS5zY2VuZS5vZmZzZXRXaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kb20uc2NlbmUub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5vZmZzZXRMZWZ0ID0gZ2V0T2Zmc2V0TGVmdCh0aGlzLmVsZW1lbnQpXG4gICAgdGhpcy5vZmZzZXRUb3AgPSBnZXRPZmZzZXRUb3AodGhpcy5lbGVtZW50KVxuXG4gICAgdGhpcy5zZXRQbGF5ZXJzKClcbiAgICB0aGlzLnNldEdyaWQoKVxuICAgIHRoaXMuc2V0SXRlbXMoKVxuXG4gICAgLy8gc3RhcnQgZXZlbnRzXG4gICAgdGhpcy5ldmVudHModHJ1ZSlcbiAgICB0aGlzLmV2ZW50c1JBRih0cnVlKVxuICB9XG5cbiAgc2V0UGxheWVycygpIHtcbiAgICBpZiAodGhpcy5kb20uc3ZnQ2xpcFBhdGgpIHtcbiAgICAgIHRoaXMuc2V0Q2xpcFBhdGhJZCgpXG4gICAgfVxuXG4gICAgLy8gdGhpcy5zdmdQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHRoaXMuY2FyZGluYWwodGhpcy5wb2ludHMpKVxuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIG51bVBvaW50czogdGhpcy5udW1Qb2ludHMsXG4gICAgICBtaW5EdXJhdGlvbjogdGhpcy5taW5EdXJhdGlvbixcbiAgICAgIG1heER1cmF0aW9uOiB0aGlzLm1heER1cmF0aW9uLFxuICAgICAgY2VudGVyWDogdGhpcy5jZW50ZXJYLFxuICAgICAgY2VudGVyWTogdGhpcy5jZW50ZXJZLFxuICAgICAgbWluUmFkaXVzOiB0aGlzLm1pblJhZGl1cyxcbiAgICAgIG1heFJhZGl1czogdGhpcy5tYXhSYWRpdXMsXG4gICAgICBtaW5NaWRkbGVSYWRpdXM6IHRoaXMubWluTWlkZGxlUmFkaXVzLFxuICAgICAgbWF4TWlkZGxlUmFkaXVzOiB0aGlzLm1heE1pZGRsZVJhZGl1cyxcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAncmVkJyxcbiAgICAgICdibHVlJyxcbiAgICBdXG5cbiAgICAvLyBzZXQgcGxheWVyc1xuICAgIHRoaXMucGxheWVycyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9tLmN1cnNvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihvYmosIHsgZWw6IHRoaXMuZG9tLmN1cnNvcnNbaV0sIGluZGV4OiBpLCBjb2xvcjogY29sb3JzW2ldIH0pXG4gICAgICB0aGlzLnBsYXllcnMucHVzaChuZXcgUGxheWVyKHByb3BzKSlcbiAgICB9XG4gIH1cblxuICBzZXRDbGlwUGF0aElkKCkge1xuICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoLmlkID0gdXVpZHYxKClcbiAgICB0aGlzLmRvbS5zdmdDbGlwUGF0aFJlZi5zZXRBdHRyaWJ1dGUoJ2NsaXAtcGF0aCcsIGB1cmwoIyR7dGhpcy5kb20uc3ZnQ2xpcFBhdGguaWR9KWApXG4gIH1cblxuICBzZXRHcmlkKCkge1xuICAgIHRoaXMucG9zaXRpb25zSW5HcmlkID0gW11cbiAgICBsZXQgeFxuICAgIGxldCB5XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZENvbHM7IGkrKykge1xuICAgICAgeCA9IGkgKyAwLjUgLy8gYWRkIGhhbGZcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkTGluZXM7IGorKykge1xuICAgICAgICB5ID0gaiArIDAuNSAvLyBhZGQgaGFsZlxuICAgICAgICBjb25zdCBvYmogPSB7IHgsIHkgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uc0luR3JpZC5wdXNoKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtcygpIHtcbiAgICB0aGlzLml0ZW1zID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1JdGVtczsgaSsrKSB7XG4gICAgICAvLyByYW5kb21pemVcbiAgICAgIGNvbnN0IHJkID0gcmFuZG9tSW50KDAsIHRoaXMucG9zaXRpb25zSW5HcmlkLmxlbmd0aCAtIDEpXG4gICAgICBjb25zdCB4ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnggLyB0aGlzLmdyaWRDb2xzXG4gICAgICBjb25zdCB5ID0gdGhpcy5wb3NpdGlvbnNJbkdyaWRbcmRdLnkgLyB0aGlzLmdyaWRMaW5lc1xuICAgICAgdGhpcy5wb3NpdGlvbnNJbkdyaWQuc3BsaWNlKHJkLCAxKVxuXG4gICAgICAvLyBzdmcgaXRlbXNcbiAgICAgIC8vIG5lZWQgdG8gcHJlY2lzZSB0aGF0IHdlJ3JlIHVzaW5nIHRoZSBzdmcgbmFtZXNwYWNlXG4gICAgICBjb25zdCBzdmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnaW1hZ2UnKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIHRoaXMuaXRlbVNpemUpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCB0aGlzLml0ZW1TaXplKVxuICAgICAgc3ZnSW1hZ2Uuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAnaHJlZicsIGl0ZW1JbWcpXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIGAke3ggKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIGAke3kgKiAxMDB9JWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgtJHt0aGlzLml0ZW1TaXplIC8gMn0gLSR7dGhpcy5pdGVtU2l6ZSAvIDJ9KWApXG4gICAgICBzdmdJbWFnZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pZCBzbGljZScpXG5cbiAgICAgIHRoaXMuZG9tLnN2Z0NsaXBQYXRoUmVmLmFwcGVuZENoaWxkKHN2Z0ltYWdlKVxuXG4gICAgICAvLyBmYWtlIGl0ZW0gZm9yIGRlYnVnZ2luZ1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZWJ1ZycpXG4gICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3ggKiAxMDB9JWBcbiAgICAgIGRpdi5zdHlsZS50b3AgPSBgJHt5ICogMTAwfSVgXG4gICAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgZWw6IHN2Z0ltYWdlLFxuICAgICAgICBkZWJ1Z0VsOiBkaXYsXG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICB9XG4gICAgICAvLyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgIHRoaXMuaXRlbXMucHVzaChvYmopXG4gICAgfVxuICB9XG5cbiAgZml0U2NlbmVUb0ltYWdlKCkge1xuICAgIC8vIHNldCB2aWV3Ym94IHZhbHVlc1xuICAgIHRoaXMuZG9tLnN2Z1NjZW5lLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt0aGlzLmltYWdlUGxhY2Vob2xkZXIub2Zmc2V0V2lkdGh9ICR7dGhpcy5pbWFnZVBsYWNlaG9sZGVyLm9mZnNldEhlaWdodH1gKVxuICB9XG5cbiAgc2NvcmUocGxheWVyKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJysxJywgcGxheWVyLmNvbG9yKSAvLyArIGNvbG9yIHBsYXllclxuXG4gICAgR2FtZU1hbmFnZXIuc2NvcmVzW3BsYXllci5pbmRleF0gKz0gMVxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm91bmQnKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvbS5zY29yZUNlbnRlclJlY2FwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gcGxheWVyLmluZGV4KSB7XG4gICAgICAgIHRoaXMuZG9tLnNjb3JlQ2VudGVyUmVjYXBbaV0uaW5uZXJIVE1MID0gYFAtJHtwbGF5ZXIuaW5kZXggKyAxfSA6ICR7R2FtZU1hbmFnZXIuc2NvcmVzW3BsYXllci5pbmRleF19YFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IGl0ZW1JbWdcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnc2NvcmVfX2l0ZW0nKVxuICAgIHRoaXMuZG9tLnNjb3JlSXRlbXNbcGxheWVyLmluZGV4XS5hcHBlbmRDaGlsZChpbWcpXG4gIH1cblxuICBlbmQoKSB7XG4gICAgdGhpcy5wb3BVcE1lc3NhZ2UoJ2VuZCBvZiBnYW1lJywgJ2JsYWNrJywgdHJ1ZSlcbiAgICAvLyB0aGlzLmV2ZW50cyhmYWxzZSlcbiAgfVxuXG4gIHBvcFVwTWVzc2FnZShtZXNzYWdlLCBjb2xvciA9ICdncmF5JywgZW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlJywgJ3QtMTIwLS1ib2xkJywgYGNvbG9yLS0ke2NvbG9yfWApXG4gICAgaWYgKGVuZCkge1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZW5kJylcbiAgICB9XG4gICAgZGl2LmlubmVySFRNTCA9IG1lc3NhZ2VcbiAgICB0aGlzLmRvbS5zY2VuZS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBpZiAoIWVuZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpdi5yZW1vdmUoKVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH1cblxuICAvLyAvLy8vLy8vL1xuICAvLyBFdmVudHNcbiAgLy8gLy8vLy8vLy9cblxuICBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3QgZXYgPSBtZXRob2QgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICB3aW5kb3dbZXZdKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSwgZmFsc2UpXG4gICAgd2luZG93W2V2XSgnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLCBmYWxzZSlcbiAgfVxuXG4gIGV2ZW50c1JBRihtZXRob2QpIHtcbiAgICBjb25zdCBldiA9IG1ldGhvZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgIHdpbmRvd1tldl0oJ1JBRicsIHRoaXMuaGFuZGxlUkFGLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgdGhpcy5ldmVudFggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WFxuICAgIHRoaXMuZXZlbnRYIC09IHRoaXMub2Zmc2V0TGVmdFxuICAgIHRoaXMuZXZlbnRZID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcbiAgICB0aGlzLmV2ZW50WSArPSBzY3JvbGxZXG5cbiAgICB0aGlzLnRhcmdldFggPSB0aGlzLmV2ZW50WCAvIHRoaXMud2lkdGggKiB0aGlzLnZiV2lkdGggLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyB2aWV3Ym94IHVuaXRzIGhlcmVcbiAgICB0aGlzLnRhcmdldFggLT0gdGhpcy52YldpZHRoIC8gMiAvLyBiZWNhdXNlIHN0YXJ0aW5nIHBvaW50IGlzIHRoaXMuY2VudGVyWFxuICAgIHRoaXMudGFyZ2V0WSA9IHRoaXMuZXZlbnRZIC8gdGhpcy5oZWlnaHQgKiB0aGlzLnZiSGVpZ2h0IC0gdGhpcy5vZmZzZXRUb3BcbiAgICB0aGlzLnRhcmdldFkgLT0gdGhpcy52YkhlaWdodCAvIDJcblxuICAgIC8vIF5UaGVzZSBzaG91ZGwgYmUgbGlua2VkIHRvIGEgY3Vyc29yXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIGUgd2lsbCBiZSBjdXJyZW50IGN1cnNvciB3aXRoIHBvc2l0aW9uc1xuICAgIC8vIGlmIGN1cnNvciBwb3NpdGlvblxuICAgIC8vIENoZWNrIGlmIGN1cnNvciBpdGVtIGlzIGZvdW5kXG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5jbGlja1ByZWNpc2lvblxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMucGxheWVyc1swXVxuICAgIGNvbnN0IHggPSB0aGlzLmV2ZW50WCAvIHRoaXMud2lkdGhcbiAgICBjb25zdCB5ID0gdGhpcy5ldmVudFkgLyB0aGlzLmhlaWdodFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXVxuICAgICAgaWYgKCFpdGVtLmZvdW5kICYmXG4gICAgICAgIHggPiBpdGVtLnggLSBwcmVjaXNpb24gJiZcbiAgICAgICAgeCA8IGl0ZW0ueCArIHByZWNpc2lvbiAmJlxuICAgICAgICB5ID4gaXRlbS55IC0gcHJlY2lzaW9uICYmXG4gICAgICAgIHkgPCBpdGVtLnkgKyBwcmVjaXNpb24pIHtcbiAgICAgICAgdGhpcy5zY29yZShwbGF5ZXIpXG4gICAgICAgIGl0ZW0uZm91bmQgPSB0cnVlXG4gICAgICAgIGl0ZW0uZWwuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgaXRlbS5kZWJ1Z0VsLnN0eWxlLm9wYWNpdHkgPSAwXG5cbiAgICAgICAgdGhpcy5udW1JdGVtRm91bmQgPSB0aGlzLm51bUl0ZW1Gb3VuZCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5udW1JdGVtRm91bmQgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVuZCgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUkFGID0gZSA9PiB7XG4gICAgY29uc3QgeyBub3cgfSA9IGUuZGV0YWlsXG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSB0aGlzLmFjY2VsZXJhdGlvbiArICh0aGlzLmRlc3RBY2NlbGVyYXRpb24gLSB0aGlzLmFjY2VsZXJhdGlvbikgKiB0aGlzLmNvZWZBY2NlbGVyYXRpb25cblxuICAgIHRoaXMueCA9IHRoaXMueCArICh0aGlzLnRhcmdldFggLSB0aGlzLngpICogMC4xXG4gICAgdGhpcy55ID0gdGhpcy55ICsgKHRoaXMudGFyZ2V0WSAtIHRoaXMueSkgKiAwLjFcblxuICAgIC8vIEZvciBlYWNoIGN1cnNvci4uLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSB0aGlzLnBsYXllcnNbeV1cblxuICAgICAgLy8gRm9yIGVhY2ggcG9pbnRzIG9mIHRoZSBjdXJzb3IgKG9yZ2FuaWMgc2hhcGUpXG4gICAgICAvLyBDcmVhdGUgb3JnYW5pYyBzaGFwZSAvIFR3ZWVuIGFsbCBwb2ludHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3Vyc29yLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IGN1cnNvci5wb2ludHNbaV1cblxuICAgICAgICAvLyBGcm9tIHNjcmF0Y2ggdHdlZW46XG4gICAgICAgIC8vIHBlcmNlbnQgaXMgZ29pbmcgZnJvbSAwIHRvIDEgaW4gWCBzZWNvbmRzIHdoZXJlIFggaXMgdGhlIFwiZHVyYXRpb24gdmFyaWFibGVcIi5cbiAgICAgICAgLy8gRWFjaCBwb2ludHMgc3RhcnRpbmcgdmFsdWUgaXMgZ29pbmcgdG8gaGlzIGRlc3RpbmF0aW9uIHZhbHVlIGluIFggc2Vjb25kc1xuICAgICAgICAvLyB0aGVuIEkgdXNlIGVhc2luZyBmdW5jdGlvbnMgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBjdXJ2ZSB0aHJvdWdoIHRpbWUuXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAobm93IC0gcG9pbnQuc3RhcnRBbmltKSAvIHBvaW50LmR1cmF0aW9uICogdGhpcy5hY2NlbGVyYXRpb25cblxuICAgICAgICBwb2ludC54ID0gcG9pbnQuc3RhcnRYICsgKHBvaW50LmRlc3RYIC0gcG9pbnQuc3RhcnRYKSAqIGluT3V0U2luZShwZXJjZW50KVxuICAgICAgICBwb2ludC55ID0gcG9pbnQuc3RhcnRZICsgKHBvaW50LmRlc3RZIC0gcG9pbnQuc3RhcnRZKSAqIGluT3V0U2luZShwZXJjZW50KVxuXG4gICAgICAgIGlmIChwZXJjZW50ID49IDEpIHtcbiAgICAgICAgICAvLyBlbmQgb2YgYW5pbWF0aW9uLFxuICAgICAgICAgIC8vIHJlc3RhcnQgYW5pbWF0aW9uIGJ5IGdvaW5nIGJhY2tcbiAgICAgICAgICBpZiAocG9pbnQucmV2ZXJzZUFuaW0pIHtcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgICAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgICAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG4gICAgICAgICAgICBwb2ludC5yZXZlcnNlQW5pbSA9IGZhbHNlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb2ludC5zdGFydFggPSBwb2ludC54XG4gICAgICAgICAgICBwb2ludC5zdGFydFkgPSBwb2ludC55XG4gICAgICAgICAgICBwb2ludC5kZXN0WCA9IHBvaW50LnRhcmdldE1pblhcbiAgICAgICAgICAgIHBvaW50LmRlc3RZID0gcG9pbnQudGFyZ2V0TWluWVxuICAgICAgICAgICAgcG9pbnQucmV2ZXJzZUFuaW0gPSB0cnVlXG4gICAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgY3Vyc29yIGJhc2VkIG9uIG1vdXNlXG4gICAgICAgIGlmICh5ID09PSAwKSB7XG4gICAgICAgICAgcG9pbnQueCArPSB0aGlzLnhcbiAgICAgICAgICBwb2ludC55ICs9IHRoaXMueVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXRlbSBmb3VuZCwgaW5jcmVhc2UgY3Vyc29yIHJhZGl1c1xuICAgICAgICBpZiAoeSA9PT0gMCAmJiBjdXJzb3IuaXRlbUZvdW5kICYmICFwb2ludC5pc0luY3JlYXNlKSB7XG4gICAgICAgICAgY29uc3QgbmV3TWF4UmFkaXVzID0gdGhpcy5tYXhSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgICAgY29uc3QgbmV3TWF4TWlkZGxlUmFkaXVzID0gdGhpcy5tYXhNaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgICAgY29uc3QgbmV3TWluUmFkaXVzID0gdGhpcy5taW5SYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgICAgY29uc3QgbmV3TWluTWlkZGxlUmFkaXVzID0gdGhpcy5taW5NaWRkbGVSYWRpdXMgKyB0aGlzLmluY3JlYXNlTWF4XG4gICAgICAgICAgcG9pbnQudGFyZ2V0TWF4WCA9IHRoaXMuY2VudGVyWCArIE1hdGguY29zKHBvaW50LmFuZ2xlKSAqIHJhbmRvbShuZXdNYXhNaWRkbGVSYWRpdXMsIG5ld01heFJhZGl1cylcbiAgICAgICAgICBwb2ludC50YXJnZXRNaW5YID0gdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01pblJhZGl1cywgbmV3TWluTWlkZGxlUmFkaXVzKVxuXG4gICAgICAgICAgcG9pbnQuZGVzdFggPSBwb2ludC50YXJnZXRNYXhYXG5cbiAgICAgICAgICBwb2ludC50YXJnZXRNYXhZID0gdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4ocG9pbnQuYW5nbGUpICogcmFuZG9tKG5ld01heE1pZGRsZVJhZGl1cywgbmV3TWF4UmFkaXVzKVxuICAgICAgICAgIHBvaW50LnRhcmdldE1pblkgPSB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihwb2ludC5hbmdsZSkgKiByYW5kb20obmV3TWluUmFkaXVzLCBuZXdNaW5NaWRkbGVSYWRpdXMpXG5cbiAgICAgICAgICBwb2ludC5kZXN0WSA9IHBvaW50LnRhcmdldE1heFlcbiAgICAgICAgICBwb2ludC5zdGFydEFuaW0gPSBnZXROb3coKVxuXG4gICAgICAgICAgcG9pbnQuaXNJbmNyZWFzZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IuZWwuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5jYXJkaW5hbChjdXJzb3IucG9pbnRzKSlcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgY2lyY2xlIGRpc3RvcnNpb24gYmFzZWQgb24gdGhlIGdpdmVuIGNvb3JkaW5hdGVzIHBvaW50c1xuICAvLyBDYXJkaW5hbCBzcGxpbmUgLSBhIHVuaWZvcm0gQ2F0bXVsbC1Sb20gc3BsaW5lIHdpdGggYSB0ZW5zaW9uIG9wdGlvblxuICBjYXJkaW5hbChwb2ludHMsIHRlbnNpb24gPSAxLjIpIHtcbiAgICAvLyAxIHRlbnNpb24gZG9lcyBub3QgbWFrZSBhIHBlcmZlY3Qgcm91bmQsIHdoeT9cbiAgICBjb25zdCBuYlBvaW50cyA9IHBvaW50cy5sZW5ndGhcbiAgICBpZiAobmJQb2ludHMgPCAxKSByZXR1cm4gJ00wIDAnXG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9IENgXG4gICAgLy8gd2hlcmUgTSBpcyB0aGUgc3RhcnRpbmcgWCxZIGNvb3Jkc1xuICAgIC8vIEMgaXMgdGhlIDMgbmV4dCBwb2ludHMgY29vcmQgb2YgYSBDdWJpYyBiZXppZXJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJQb2ludHM7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbKGkgLSAxICsgbmJQb2ludHMpICUgbmJQb2ludHNdXG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXVxuICAgICAgY29uc3QgcDIgPSBwb2ludHNbKGkgKyAxKSAlIG5iUG9pbnRzXVxuICAgICAgY29uc3QgcDMgPSBwb2ludHNbKGkgKyAyKSAlIG5iUG9pbnRzXVxuXG4gICAgICBjb25zdCB4MSA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkxID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICBjb25zdCB4MiA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNiAqIHRlbnNpb25cbiAgICAgIGNvbnN0IHkyID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2ICogdGVuc2lvblxuXG4gICAgICAvLyBjdWJpYyBCZXppZXJcbiAgICAgIC8vIHgxIHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBmaXJzdCBjb250cm9sIHBvaW50LlxuICAgICAgLy8geTEgfCBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB4MiB8IFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyB5MiB8IFRoZSB5LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQuXG4gICAgICAvLyBwMi54IHwgVGhlIHgtYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICAvLyBwMi55IHwgVGhlIHktYXhpcyBjb29yZGluYXRlIG9mIHRoZSBlbmQgcG9pbnQuXG4gICAgICBwYXRoICs9IGAgJHt4MX0gJHt5MX0gJHt4Mn0gJHt5Mn0gJHtwMi54fSAke3AyLnl9YFxuICAgIH1cblxuICAgIHJldHVybiBgJHtwYXRofXpgIC8vIGNsb3NlIHBhdGggd2l0aCB6XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRzKGZhbHNlKVxuICAgIHRoaXMuZXZlbnRzUkFGKGZhbHNlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXROb3cgfSBmcm9tICcuLi91dGlscy9kb20nXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi91dGlscy9tYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaW5kZXgsXG4gICAgICBjb2xvcixcbiAgICAgIG51bVBvaW50cyxcbiAgICAgIG1pbkR1cmF0aW9uLFxuICAgICAgbWF4RHVyYXRpb24sXG4gICAgICBjZW50ZXJYLFxuICAgICAgY2VudGVyWSxcbiAgICAgIG1pblJhZGl1cyxcbiAgICAgIG1heFJhZGl1cyxcbiAgICAgIG1pbk1pZGRsZVJhZGl1cyxcbiAgICAgIG1heE1pZGRsZVJhZGl1cyxcbiAgICB9ID0gcHJvcHNcblxuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMubnVtUG9pbnRzID0gbnVtUG9pbnRzXG4gICAgdGhpcy5taW5EdXJhdGlvbiA9IG1pbkR1cmF0aW9uXG4gICAgdGhpcy5tYXhEdXJhdGlvbiA9IG1heER1cmF0aW9uXG4gICAgdGhpcy5jZW50ZXJYID0gY2VudGVyWFxuICAgIHRoaXMuY2VudGVyWSA9IGNlbnRlcllcbiAgICB0aGlzLm1pblJhZGl1cyA9IG1pblJhZGl1c1xuICAgIHRoaXMubWF4UmFkaXVzID0gbWF4UmFkaXVzXG4gICAgdGhpcy5taW5NaWRkbGVSYWRpdXMgPSBtaW5NaWRkbGVSYWRpdXNcbiAgICB0aGlzLm1heE1pZGRsZVJhZGl1cyA9IG1heE1pZGRsZVJhZGl1c1xuXG4gICAgdGhpcy5pc0luc2lkZVRpbWUgPSAwXG5cbiAgICB0aGlzLnNldFBvaW50cygpXG4gIH1cblxuICBzZXRQb2ludHMoKSB7XG4gICAgdGhpcy5wb2ludHMgPSBbXVxuICAgIC8vIGNyZWF0ZSBcIm51bVBvaW50c1wiIHggcG9pbnRzXG4gICAgY29uc3Qgc2xpY2UgPSAoTWF0aC5QSSAqIDIpIC8gdGhpcy5udW1Qb2ludHNcbiAgICB0aGlzLnN0YXJ0QW5nbGUgPSByYW5kb20oMCwgTWF0aC5QSSAqIDIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUG9pbnRzOyBpKyspIHtcbiAgICAgIGNvbnN0IG1hcmdlQW5nbGUgPSByYW5kb20oMCwgMC4yOCkgLy8gaSAvIDEuMlxuICAgICAgLy8gcmFuZG9taXplIHRoZSBzdGFydCB0aW1lIG9mIGFuaW1hdGlvbiAod2UgZG9uJ3Qgd2FudCB0aGUgdHdlZW4gdG8gZ28gZnJvbSAwIHRvIDEsIGl0IGNhbiBzdGFydCBkaXJlY3RseSBmcm9tIDAuNiBmb3IgZXhhbXBsZSlcbiAgICAgIGNvbnN0IHN0YXJ0QW5pbSA9IGdldE5vdygpICsgaSAqIHJhbmRvbSgwLCB0aGlzLm1pbkR1cmF0aW9uKVxuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLnN0YXJ0QW5nbGUgKyBpICogc2xpY2UgKyBtYXJnZUFuZ2xlXG4gICAgICBjb25zdCBkdXJhdGlvbiA9IHJhbmRvbSh0aGlzLm1pbkR1cmF0aW9uLCB0aGlzLm1heER1cmF0aW9uKVxuXG4gICAgICBjb25zdCBwb2ludCA9IHtcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBzdGFydEFuaW0sXG4gICAgICAgIHg6IHRoaXMuY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5tYXhSYWRpdXMpLFxuICAgICAgICB5OiB0aGlzLmNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYW5kb20odGhpcy5taW5SYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWluWDogdGhpcy5jZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFuZG9tKHRoaXMubWluUmFkaXVzLCB0aGlzLm1pbk1pZGRsZVJhZGl1cyksXG4gICAgICAgIHRhcmdldE1pblk6IHRoaXMuY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhbmRvbSh0aGlzLm1pblJhZGl1cywgdGhpcy5taW5NaWRkbGVSYWRpdXMpLFxuICAgICAgICB0YXJnZXRNYXhYOiB0aGlzLmNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYW5kb20odGhpcy5tYXhNaWRkbGVSYWRpdXMsIHRoaXMubWF4UmFkaXVzKSxcbiAgICAgICAgdGFyZ2V0TWF4WTogdGhpcy5jZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFuZG9tKHRoaXMubWF4TWlkZGxlUmFkaXVzLCB0aGlzLm1heFJhZGl1cyksXG4gICAgICB9XG5cbiAgICAgIHBvaW50LnN0YXJ0WCA9IHBvaW50LnhcbiAgICAgIHBvaW50LnN0YXJ0WSA9IHBvaW50LnlcbiAgICAgIHBvaW50LmRlc3RYID0gcG9pbnQudGFyZ2V0TWF4WFxuICAgICAgcG9pbnQuZGVzdFkgPSBwb2ludC50YXJnZXRNYXhZXG5cbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgZ2FtZVRtcCBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZXMvZnJvbnQtZW5kL2dhbWUuaHRtbCdcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lJ1xuXG5jbGFzcyBHYW1lTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcblxuICAgIHRoaXMubWFpbi5pbm5lckhUTUwgPSBnYW1lVG1wXG5cbiAgICAvLyBzY29yZXNcbiAgICB0aGlzLnNjb3JlcyA9IFswLCAwXVxuICAgIHRoaXMuc2NlbmVzID0gW1xuICAgICAge1xuICAgICAgICBia2c6ICcuLi8uLi9pbWFnZXMvZmluZC1jYXQucG5nJyxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LCB7XG4gICAgICAgIGJrZzogJy4uLy4uL2ltYWdlcy9maW5kLWNhdC5wbmcnLFxuICAgICAgICBlZmZlY3Q6ICc/JyxcbiAgICAgIH0sIHtcbiAgICAgICAgYmtnOiAnLi4vLi4vaW1hZ2VzL2ZpbmQtY2F0LnBuZycsXG4gICAgICAgIGVmZmVjdDogJz8nLFxuICAgICAgfSwge1xuICAgICAgICBia2c6ICcuLi8uLi9pbWFnZXMvZmluZC1jYXQucG5nJyxcbiAgICAgICAgZWZmZWN0OiAnPycsXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDBcblxuICAgIC8vIGluaXQgY29tcG9uZW50c1xuICAgIGNvbnN0IGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZ2FtZV0nKVxuXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgR2FtZShnYW1lLCB0aGlzLmN1cnJlbnRJbmRleClcbiAgfVxuXG4gIHVwZGF0ZVNjZW5lKGluZGV4KSB7XG4gICAgdGhpcy5kZXN0cm95U2NlbmUodGhpcy5jdXJyZW50U2NlbmUpXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSBuZXcgR2FtZShpbmRleClcbiAgfVxuXG4gIGRlc3Ryb3lTY2VuZShzY2VuZSkge1xuICAgIC8vIGNsZWFuIGNvbXBvbmVudFxuICAgIGlmIChzY2VuZS5kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNjZW5lLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2FtZU1hbmFnZXIoKVxuIiwiaW1wb3J0IGNyZWF0ZUN1c3RvbUV2ZW50IGZyb20gJy4uL3V0aWxzL2NyZWF0ZUN1c3RvbUV2ZW50J1xuXG5jbGFzcyBSQUZNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oYW5kbGVSQUYoMClcbiAgfVxuXG4gIGhhbmRsZVJBRiA9IG5vdyA9PiB7XG4gICAgLy8gbm93ID09PSB0aW1lIGluIG1zXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVSQUYpXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlQ3VzdG9tRXZlbnQoJ1JBRicsIHsgbm93IH0pKVxuICB9XG5cbiAgcmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZVJBRigwKVxuICB9XG5cbiAgY2FuY2VsID0gKCkgPT4ge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSQUZNYW5hZ2VyKClcbiIsImZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgZGF0YSA9IHt9KSB7XG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgIGRldGFpbDogZGF0YSxcbiAgfSlcbiAgcmV0dXJuIGV2ZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUN1c3RvbUV2ZW50XG4iLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KG8pIHtcblxuICBmb3IgKGxldCBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcblxuICByZXR1cm4gb1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5jZXN0b3IoZWwsIGNsYXNzTmFtZSkge1xuXG4gIHdoaWxlICgoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuXG4gIHJldHVybiBlbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXgoZWwpIHtcblxuICByZXR1cm4gQXJyYXkuZnJvbShlbC5wYXJlbnROb2RlLmNoaWxkcmVuKS5pbmRleE9mKGVsKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMUGFyYW1ldGVycygpIHtcblxuICBjb25zdCBwYXJhbXMgPSB7fVxuXG4gIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcblxuICAgIGNvbnN0IHBhcnRzID0gbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgnJicpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGNvbnN0IG52ID0gcGFydHNbaV0uc3BsaXQoJz0nKVxuXG4gICAgICBpZiAoIW52WzBdKSBjb250aW51ZVxuXG4gICAgICBwYXJhbXNbbnZbMF1dID0gbnZbMV0gfHwgdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJhbXNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViR0woKSB7XG4gIC8vIE9uIGNyw6llIHVuIMOpbMOpbWVudCBjYW52YXMuIExlIGNhbnZhcyBuJ2VzdCBwYXNcbiAgLy8gYWpvdXTDqSBhdSBkb2N1bWVudCBldCBpbCBuJ2VzdCBkb25jIGphbWFpc1xuICAvLyBhZmZpY2jDqSBkYW5zIGxhIGZlbsOqdHJlIGR1IG5hdmlnYXRldXJcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG5cbiAgLy8gT24gcsOpY3Vww6hyZSBsZSBjb250ZXh0ZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAgLy8gZGVwdWlzIGwnw6lsw6ltZW50IGNhbnZhcy5cbiAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpXG5cbiAgLy8gT24gYWZmaWNoZSBsZSByw6lzdWx0YXQuXG4gIGlmIChnbCAmJiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIHRydWVcbiAgZWxzZSByZXR1cm4gZmFsc2VcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUb3VjaCgpIHtcblxuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGYWNlYm9va0FwcCgpIHtcblxuICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmFcblxuICByZXR1cm4gdWEuaW5kZXhPZignRkJBTicpID4gLTEgfHwgdWEuaW5kZXhPZignRkJBVicpID4gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9CaW5kKHNlbGYpIHtcblxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzZWxmLmNvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHtcblxuICAgIGNvbnN0IHZhbCA9IHNlbGZba2V5XVxuXG4gICAgaWYgKGtleSAhPT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSBzZWxmW2tleV0gPSB2YWwuYmluZChzZWxmKVxuICB9XG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFRvcChlbGVtKSB7IC8vIGlzc3VlcyBvbiBpZTExXG5cbiAgaWYgKCFlbGVtKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIGNvbnN0IGJvdW5kcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgY29uc3QgYm9keVRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG5cbiAgcmV0dXJuIGJvdW5kcy50b3AgKyBib2R5VG9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KGVsZW0pIHsgLy8gaXNzdWVzIG9uIGllMTFcblxuICBpZiAoIWVsZW0pIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgY29uc3QgYm91bmRzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIHJldHVybiBib3VuZHMubGVmdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfcXVlcnlfc3RyaW5nIChxdWVyeSkge1xuICBsZXQgdmFycyA9IHF1ZXJ5LnNwbGl0KCcmJylcbiAgbGV0IHF1ZXJ5X3N0cmluZyA9IHt9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFycy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwYWlyID0gdmFyc1tpXS5zcGxpdCgnPScpXG4gICAgLy8gSWYgZmlyc3QgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICBpZiAodHlwZW9mIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKVxuICAgICAgLy8gSWYgc2Vjb25kIGVudHJ5IHdpdGggdGhpcyBuYW1lXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcXVlcnlfc3RyaW5nW3BhaXJbMF1dID09PSAnc3RyaW5nJykge1xuICAgICAgbGV0IGFyciA9IFtxdWVyeV9zdHJpbmdbcGFpclswXV0sIGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKV1cbiAgICAgIHF1ZXJ5X3N0cmluZ1twYWlyWzBdXSA9IGFyclxuICAgICAgLy8gSWYgdGhpcmQgb3IgbGF0ZXIgZW50cnkgd2l0aCB0aGlzIG5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlfc3RyaW5nW3BhaXJbMF1dLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlfc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJRVZlcnNpb24oKSB7XG5cbiAgbGV0IG15TmF2ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG5cbiAgcmV0dXJuIG15TmF2LmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgPyBwYXJzZUludChteU5hdi5zcGxpdCgnbXNpZScpWzFdKSA6IGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWxlbWVudCkgeyAvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxuICBsZXQgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgbGV0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICByZWN0LnRvcCA+PSAwIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgJiYgLy8gc3BlY2lmaWMgbW9kaWZpY2F0aW9uXG4gICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICByZWN0LmJvdHRvbSA8PSBlbGVtZW50Lm9mZnNldEhlaWdodCAmJiAvLyBzcGVjaWZpYyBtb2RpZmljYXRpb25cbiAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBodG1sLmNsaWVudFdpZHRoKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcbiAgbGV0IG5hbWUgPSBgJHtjbmFtZX09YFxuICBsZXQgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpXG4gIGxldCBjYSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKVxuICBmb3IobGV0IGkgPSAwOyBpIDxjYS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gY2FbaV1cbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpXG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpXG4gICAgfVxuICB9XG4gIHJldHVybiAnJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlcigpIHtcbiAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICB0ZW0sXG4gICAgTSA9IHVhLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSkgfHwgW11cbiAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xuICAgIHRlbSA9IC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW11cbiAgICByZXR1cm4gYElFICR7KHRlbVsxXSB8fCAnJyl9YFxuICB9XG4gIGlmIChNWzFdID09PSAnQ2hyb21lJykge1xuICAgIHRlbSA9IHVhLm1hdGNoKC9cXGIoT1BSfEVkZ2UpXFwvKFxcZCspLylcbiAgICBpZiAodGVtICE9PSBudWxsKSByZXR1cm4gdGVtLnNsaWNlKDEpLmpvaW4oJyAnKS5yZXBsYWNlKCdPUFInLCAnT3BlcmEnKVxuICB9XG4gIE0gPSBNWzJdID8gW01bMV0sIE1bMl1dIDogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J11cbiAgdGVtID0gdWEubWF0Y2goL3ZlcnNpb25cXC8oXFxkKykvaSlcbiAgaWYgKHRlbSAhPT0gbnVsbCkgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKVxuICByZXR1cm4gTS5qb2luKCcgJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdygpIHtcbiAgcmV0dXJuICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBvdXRFeHBvKG4pIHtcbiAgaWYgKG4gPT09IDEpIHtcbiAgICByZXR1cm4gblxuICB9XG5cbiAgcmV0dXJuIDEgLSAoMiAqKiAoLTEwICogbikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFNpbmUobikge1xuXHRyZXR1cm4gLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBuKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuXG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UodmFsLCBvbGRNaW4sIG9sZE1heCwgbmV3TWluLCBuZXdNYXgpIHtcblxuXHRyZXR1cm4gKHZhbCAtIG9sZE1pbikgKiAobmV3TWF4IC0gbmV3TWluKSAvIChvbGRNYXggLSBvbGRNaW4pICsgbmV3TWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcblx0IC8vIHJldHVybiByYW5kb20gdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluXG4gICAgbWluID0gbWF4XG4gICAgbWF4ID0gdG1wXG4gIH1cbiAgcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogTWF0aC5yYW5kb20oKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0KG1pbiwgbWF4LCBkZWNpbWFscyA9IDEpIHtcblxuXHRyZXR1cm4gcGFyc2VGbG9hdCgoTWF0aC5yYW5kb20oKSAqIChtaW4gLSBtYXgpICsgbWF4KS50b0ZpeGVkKGRlY2ltYWxzKSwgMTApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShyYWRpYW5zKSB7XG5cblx0cmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihkZWdyZWVzKSB7XG5cblx0cmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVBc3BlY3RSYXRpb0ZpdChzcmNXaWR0aCwgc3JjSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBjb3ZlciA9IHRydWUpIHtcblxuXHRjb25zdCBmbiA9IGNvdmVyID8gTWF0aC5tYXggOiBNYXRoLm1pblxuXHRjb25zdCByYXRpbyA9IGZuKG1heFdpZHRoIC8gc3JjV2lkdGgsIG1heEhlaWdodCAvIHNyY0hlaWdodClcblxuXHRyZXR1cm4ge1xuXHRcdHc6IHBhcnNlSW50KHNyY1dpZHRoICogcmF0aW8sIDEwKSxcblx0XHRoOiBwYXJzZUludChzcmNIZWlnaHQgKiByYXRpbywgMTApLFxuXHRcdHJhdGlvXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50c0Rpc3QocDEsIHAyKSB7XG5cblx0cmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICogKHAxLnggLSBwMi54KSArIChwMS55IC0gcDIueSkgKiAocDEueSAtIHAyLnkpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29lZmZEaXJlY3RldXIocDEsIHAyKSB7XG5cblx0Y29uc3QgbSA9IChwMS55IC0gcDIueSkgLyAocDEueCAtIHAyLngpXG5cdGNvbnN0IHAgPSBwMS55IC0gbSAqIHAxLnhcblxuXHRyZXR1cm4ge1xuXHRcdG0sXG5cdFx0cFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kWmVybyhzdHIsIHRvdGFsTmJyLCB2YWwgPSAwKSB7XG5cblx0cmV0dXJuIHN0ci50b1N0cmluZygpLmxlbmd0aCA8IHRvdGFsTmJyID8gcHJlcGVuZFplcm8odmFsLnRvU3RyaW5nKCkgKyBzdHIsIHRvdGFsTmJyKSA6IHN0clxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQodmFsdWUsIGRlYykge1xuXG5cdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogZGVjKSAvIGRlY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluKGFycikge1xuXG5cdGxldCBtaW4gPSBhcnIucmVkdWNlKChhLGIpID0+IHtcblx0XHRyZXR1cm4gTWF0aC5taW4oYSwgYilcblx0fSlcblxuXHRyZXR1cm4gbWluXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXgoYXJyKSB7XG5cblx0bGV0IG1heCA9IGFyci5yZWR1Y2UoKGEsYikgPT4ge1xuXHRcdHJldHVybiBNYXRoLm1heChhLCBiKVxuXHR9KVxuXG5cdHJldHVybiBtYXhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZXMoYXJyKSB7XG5cdGxldCB1bmlxdWVfYXJyYXkgPSBbXVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh1bmlxdWVfYXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuXHRcdFx0dW5pcXVlX2FycmF5LnB1c2goYXJyW2ldKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5pcXVlX2FycmF5XG59XG5cbiIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnXG5cbi8vIGltcG9ydCBHYW1lQ29tbXVuaWNhdG9yIGZyb20gJy4vY29tcG9uZW50cy9HYW1lQ29tbXVuaWNhdG9yJ1xuXG4vLyBuZXcgR2FtZUNvbW11bmljYXRvcigpXG5cbmltcG9ydCAnLi9mcm9udC1lbmQvYXBwJ1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGJpZyBjdXJzb3IgLS0+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImdhbWVcXFwiIGdhbWUgZGF0YS1udW0taXRlbXM9XFxcIjVcXFwiIGRhdGEtbnVtLXBvaW50cz1cXFwiN1xcXCIgZGF0YS1ncmlkLWNvbHM9XFxcIjRcXFwiIGRhdGEtZ3JpZC1saW5lcz1cXFwiNFxcXCI+XFxuICA8IS0tIHBsYXlpbmcgc2NlbmUgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJzY2VuZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjZW5lX193cmFwcGVyXFxcIj5cXG4gICAgICA8IS0tIHN2ZyBzY2VuZSBmb3IgbWFza3MgZXRjLi4uIC0tPlxcbiAgICAgIDxzdmcgY2xhc3M9XFxcInNjZW5lLXN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMzYgNjMyXFxcIiBzdHJva2U9XFxcImJsYWNrXFxcIj5cXG4gICAgICAgIDxkZWZzPlxcbiAgICAgICAgICA8Y2xpcFBhdGggY2xhc3M9XFxcInNjZW5lLXN2Z19fY2xpcHBhdGhcXFwiPlxcbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cXFwiI3BsYXllcjFcXFwiIC8+XFxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVxcXCIjcGxheWVyMlxcXCIgLz5cXG4gICAgICAgICAgPC9jbGlwUGF0aD5cXG4gICAgICAgIDwvZGVmcz5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIxXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxwYXRoIGlkPVxcXCJwbGF5ZXIyXFxcIiBjbGFzcz1cXFwiY3Vyc29yXFxcIiBzdHJva2Utd2lkdGg9XFxcIjZcXFwiPjwvcGF0aD5cXG4gICAgICAgIDxnIGNsYXNzPVxcXCJzY2VuZS1zdmdfX2NsaXBwYXRoLXJlZlxcXCI+XFxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cXFwic2NlbmUtc3ZnX19pbWFnZVxcXCIgeGxpbms6aHJlZj1cXFwiXCIgKyByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2Zyb250LWVuZC9pbWFnZXMvZmluZC1jYXQucG5nXCIpICsgXCJcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIHNsaWNlXFxcIiAvPlxcbiAgICAgICAgPC9nPlxcbiAgICAgIDwvc3ZnPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcInNjZW5lX19wbGFjZWhvbGRlclxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9maW5kLWNhdC5wbmdcIikgKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPCEtLSBzY29yZSBib2FyZCAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInNjb3JlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2NvcmVfX3JlY2FwXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xvci0tcmVkIHQtMzItLWJvbGRcXFwiPlAtMTo8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9faXRlbXNcXFwiPlxcbiAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCIuLi9pbWFnZXMvcGF0dGVybi5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gLS0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY29yZV9fY2VudGVyXFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidC0zMi0tYm9sZFxcXCI+SXRlbSB0byBmaW5kOjwvcD5cXG4gICAgICA8aW1nIGNsYXNzPVxcXCJzY29yZV9faXRlbVxcXCIgc3JjPVxcXCJcIiArIHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvZnJvbnQtZW5kL2ltYWdlcy9wYXR0ZXJuLnBuZ1wiKSArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInNjb3JlX19jZW50ZXJfX3JlY2FwIGNvbG9yLS1yZWQgdC0zMi0tYm9sZFxcXCI+UC0xIDogMDwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwic2NvcmVfX2NlbnRlcl9fcmVjYXAgY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yIDogMDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19yZWNhcFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29sb3ItLWJsdWUgdC0zMi0tYm9sZFxcXCI+UC0yOjwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNjb3JlX19pdGVtc1xcXCI+XFxuICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcInNjb3JlX19pdGVtXFxcIiBzcmM9XFxcIi4uL2ltYWdlcy9wYXR0ZXJuLnBuZ1xcXCIgYWx0PVxcXCJcXFwiPiAtLT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XCI7Il0sInNvdXJjZVJvb3QiOiIifQ==