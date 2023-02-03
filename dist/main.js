/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/bg.jpg */ \"./src/Images/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/Rocket.png */ \"./src/Images/Rocket.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Images/UFO.png */ \"./src/Images/UFO.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  border-bottom-right-radius: 5px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: linear-gradient(rgba(77, 6, 243, 0.5), rgba(180, 19, 19, 0.5));\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  position: fixed;\\r\\n  z-index: 2;\\r\\n  width: 80vw;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  padding: 2%;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n#overlay2 {\\r\\n  position: fixed;\\r\\n  z-index: 2;\\r\\n  width: 80vw;\\r\\n  height: 88vh;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(255, 255, 255, 0.65);\\r\\n  backdrop-filter: blur(100px);\\r\\n}\\r\\n\\r\\n#overlay {\\r\\n  position: fixed;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  background: linear-gradient(-45deg, #f53232, #e76666, #67caee, #23d5ab);\\r\\n  opacity: 0.9;\\r\\n  mix-blend-mode: multiply;\\r\\n  background-size: 400% 400%;\\r\\n  animation: gradient 50s ease infinite;\\r\\n}\\r\\n\\r\\n@keyframes gradient {\\r\\n  0% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n    background-position: 100% 50%;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    background-position: 0% 50%;\\r\\n  }\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-top: 2em;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-family: 'Monoton', sans-serif;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-family: 'Yeseva One', sans-serif;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100vw;\\r\\n  text-align: center;\\r\\n  font-size: 0.8em;\\r\\n  color: black;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 35vw;\\r\\n  background-color: rgba(255, 255, 255, 0.8);\\r\\n  border-radius: 10px;\\r\\n  box-shadow: 0 10px 10px 0 black;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.container:last-child {\\r\\n  padding: 5%;\\r\\n}\\r\\n\\r\\n#title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#confetti {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  top: 10px;\\r\\n  height: 4em;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#top-player {\\r\\n  padding: 0 10%;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.3em;\\r\\n}\\r\\n\\r\\n#board {\\r\\n  margin-top: 1.5em;\\r\\n  height: 50vh;\\r\\n  overflow: auto;\\r\\n  scrollbar-width: thin;\\r\\n  border-bottom-left-radius: 5px;\\r\\n}\\r\\n\\r\\n#board table {\\r\\n  background-color: white;\\r\\n  width: 100%;\\r\\n  border-collapse: collapse;\\r\\n  border-spacing: 0;\\r\\n}\\r\\n\\r\\n#board thead {\\r\\n  position: -webkit-sticky;\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  z-index: 100;\\r\\n  box-shadow: 0 1px 1px 0 black;\\r\\n}\\r\\n\\r\\n#board th {\\r\\n  text-align: left;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n#board td {\\r\\n  padding: 10px;\\r\\n  width: 45%;\\r\\n}\\r\\n\\r\\n#board td:nth-child(2) {\\r\\n  width: 5%;\\r\\n}\\r\\n\\r\\n#board tr:nth-child(even) * {\\r\\n  background-color: gainsboro;\\r\\n  border: 2px solid gainsboro;\\r\\n}\\r\\n\\r\\n#board tr:nth-child(odd) {\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n#score-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n#score-heading {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 1.5em 2em 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background: whitesmoke;\\r\\n  border: 0;\\r\\n  border-radius: 4px;\\r\\n  box-shadow: 0 0 3px rgb(255, 255, 255);\\r\\n  padding: 3%;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#add-score {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  margin-bottom: 1em;\\r\\n  border: 0;\\r\\n  height: 40px;\\r\\n  padding: 2% 5%;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  width: 40%;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.rocket-cursor {\\r\\n  cursor: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), auto;\\r\\n}\\r\\n\\r\\n.ufo-cursor {\\r\\n  cursor: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \"), auto;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 768px) {\\r\\n  main {\\r\\n    position: relative;\\r\\n    background-color: rgba(255, 255, 255, 0);\\r\\n    width: 100vw;\\r\\n    overflow: auto;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    transform: translate(0, 0);\\r\\n    padding-bottom: 2em;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  #overlay2 {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  #title {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  #top-player {\\r\\n    padding-top: 1em;\\r\\n    padding-bottom: 1em;\\r\\n  }\\r\\n\\r\\n  #confetti {\\r\\n    top: 4em;\\r\\n    height: 3em;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  #score-container {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .container {\\r\\n    width: 90vw;\\r\\n  }\\r\\n\\r\\n  .container:last-child {\\r\\n    margin-top: 2em;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 350px) {\\r\\n  h1 {\\r\\n    font-size: 150% !important;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/js-confetti/dist/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-confetti/dist/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction normalizeComputedStyleValue(string) {\n  // \"250px\" --> 250\n  return +string.replace(/px/, '');\n}\n\nfunction fixDPR(canvas) {\n  var dpr = window.devicePixelRatio;\n  var computedStyles = getComputedStyle(canvas);\n  var width = normalizeComputedStyleValue(computedStyles.getPropertyValue('width'));\n  var height = normalizeComputedStyleValue(computedStyles.getPropertyValue('height'));\n  canvas.setAttribute('width', (width * dpr).toString());\n  canvas.setAttribute('height', (height * dpr).toString());\n}\n\nfunction generateRandomNumber(min, max) {\n  var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var randomNumber = Math.random() * (max - min) + min;\n  return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);\n}\n\nfunction generateRandomArrayElement(arr) {\n  return arr[generateRandomNumber(0, arr.length)];\n}\n\nvar FREE_FALLING_OBJECT_ACCELERATION = 0.00125;\nvar MIN_DRAG_FORCE_COEFFICIENT = 0.0005;\nvar MAX_DRAG_FORCE_COEFFICIENT = 0.0009;\nvar ROTATION_SLOWDOWN_ACCELERATION = 0.00001;\nvar INITIAL_SHAPE_RADIUS = 6;\nvar INITIAL_EMOJI_SIZE = 80;\nvar MIN_INITIAL_CONFETTI_SPEED = 0.9;\nvar MAX_INITIAL_CONFETTI_SPEED = 1.7;\nvar MIN_FINAL_X_CONFETTI_SPEED = 0.2;\nvar MAX_FINAL_X_CONFETTI_SPEED = 0.6;\nvar MIN_INITIAL_ROTATION_SPEED = 0.03;\nvar MAX_INITIAL_ROTATION_SPEED = 0.07;\nvar MIN_CONFETTI_ANGLE = 15;\nvar MAX_CONFETTI_ANGLE = 82;\nvar MAX_CONFETTI_POSITION_SHIFT = 150;\nvar SHAPE_VISIBILITY_TRESHOLD = 100;\nvar DEFAULT_CONFETTI_NUMBER = 250;\nvar DEFAULT_EMOJIS_NUMBER = 40;\nvar DEFAULT_CONFETTI_COLORS = ['#fcf403', '#62fc03', '#f4fc03', '#03e7fc', '#03fca5', '#a503fc', '#fc03ad', '#fc03c2'];\n\nfunction getWindowWidthCoefficient(canvasWidth) {\n  var HD_SCREEN_WIDTH = 1920;\n  return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);\n}\n\nvar ConfettiShape = /*#__PURE__*/function () {\n  function ConfettiShape(args) {\n    _classCallCheck(this, ConfettiShape);\n\n    var initialPosition = args.initialPosition,\n        direction = args.direction,\n        confettiRadius = args.confettiRadius,\n        confettiColors = args.confettiColors,\n        emojis = args.emojis,\n        emojiSize = args.emojiSize,\n        canvasWidth = args.canvasWidth;\n    var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);\n    var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);\n    this.confettiSpeed = {\n      x: initialSpeed,\n      y: initialSpeed\n    };\n    this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);\n    this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);\n    this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);\n    this.radius = {\n      x: confettiRadius,\n      y: confettiRadius\n    };\n    this.initialRadius = confettiRadius;\n    this.rotationAngle = direction === 'left' ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);\n    this.emojiSize = emojiSize;\n    this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);\n    this.radiusYUpdateDirection = 'down';\n    var angle = direction === 'left' ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;\n    this.absCos = Math.abs(Math.cos(angle));\n    this.absSin = Math.abs(Math.sin(angle));\n    var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);\n    var shiftedInitialPosition = {\n      x: initialPosition.x + (direction === 'left' ? -positionShift : positionShift) * this.absCos,\n      y: initialPosition.y - positionShift * this.absSin\n    };\n    this.currentPosition = Object.assign({}, shiftedInitialPosition);\n    this.initialPosition = Object.assign({}, shiftedInitialPosition);\n    this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);\n    this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;\n    this.createdAt = new Date().getTime();\n    this.direction = direction;\n  }\n\n  _createClass(ConfettiShape, [{\n    key: \"draw\",\n    value: function draw(canvasContext) {\n      var currentPosition = this.currentPosition,\n          radius = this.radius,\n          color = this.color,\n          emoji = this.emoji,\n          rotationAngle = this.rotationAngle,\n          emojiRotationAngle = this.emojiRotationAngle,\n          emojiSize = this.emojiSize;\n      var dpr = window.devicePixelRatio;\n\n      if (color) {\n        canvasContext.fillStyle = color;\n        canvasContext.beginPath();\n        canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);\n        canvasContext.fill();\n      } else if (emoji) {\n        canvasContext.font = \"\".concat(emojiSize, \"px serif\");\n        canvasContext.save();\n        canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);\n        canvasContext.rotate(emojiRotationAngle);\n        canvasContext.textAlign = 'center';\n        canvasContext.fillText(emoji, 0, 0);\n        canvasContext.restore();\n      }\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(iterationTimeDelta, currentTime) {\n      var confettiSpeed = this.confettiSpeed,\n          dragForceCoefficient = this.dragForceCoefficient,\n          finalConfettiSpeedX = this.finalConfettiSpeedX,\n          radiusYUpdateDirection = this.radiusYUpdateDirection,\n          rotationSpeed = this.rotationSpeed,\n          createdAt = this.createdAt,\n          direction = this.direction;\n      var timeDeltaSinceCreation = currentTime - createdAt;\n      if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;\n      this.currentPosition.x += confettiSpeed.x * (direction === 'left' ? -this.absCos : this.absCos) * iterationTimeDelta;\n      this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;\n      this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;\n      if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji\n\n      if (this.emoji) {\n        this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);\n        return;\n      }\n\n      if (radiusYUpdateDirection === 'down') {\n        this.radius.y -= iterationTimeDelta * rotationSpeed;\n\n        if (this.radius.y <= 0) {\n          this.radius.y = 0;\n          this.radiusYUpdateDirection = 'up';\n        }\n      } else {\n        this.radius.y += iterationTimeDelta * rotationSpeed;\n\n        if (this.radius.y >= this.initialRadius) {\n          this.radius.y = this.initialRadius;\n          this.radiusYUpdateDirection = 'down';\n        }\n      }\n    }\n  }, {\n    key: \"getIsVisibleOnCanvas\",\n    value: function getIsVisibleOnCanvas(canvasHeight) {\n      return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;\n    }\n  }]);\n\n  return ConfettiShape;\n}();\n\nfunction createCanvas() {\n  var canvas = document.createElement('canvas');\n  canvas.style.position = 'fixed';\n  canvas.style.width = '100%';\n  canvas.style.height = '100%';\n  canvas.style.top = '0';\n  canvas.style.left = '0';\n  canvas.style.zIndex = '1000';\n  canvas.style.pointerEvents = 'none';\n  document.body.appendChild(canvas);\n  return canvas;\n}\n\nfunction normalizeConfettiConfig(confettiConfig) {\n  var _confettiConfig$confe = confettiConfig.confettiRadius,\n      confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe,\n      _confettiConfig$confe2 = confettiConfig.confettiNumber,\n      confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2,\n      _confettiConfig$confe3 = confettiConfig.confettiColors,\n      confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3,\n      _confettiConfig$emoji = confettiConfig.emojis,\n      emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji,\n      _confettiConfig$emoji2 = confettiConfig.emojiSize,\n      emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases\n\n  if (confettiConfig.emojies) console.error(\"emojies argument is deprecated, please use emojis instead\");\n  if (confettiConfig.confettiesNumber) console.error(\"confettiesNumber argument is deprecated, please use confettiNumber instead\");\n  return {\n    confettiRadius: confettiRadius,\n    confettiNumber: confettiNumber,\n    confettiColors: confettiColors,\n    emojis: emojis,\n    emojiSize: emojiSize\n  };\n}\n\nvar ConfettiBatch = /*#__PURE__*/function () {\n  function ConfettiBatch(canvasContext) {\n    var _this = this;\n\n    _classCallCheck(this, ConfettiBatch);\n\n    this.canvasContext = canvasContext;\n    this.shapes = [];\n    this.promise = new Promise(function (completionCallback) {\n      return _this.resolvePromise = completionCallback;\n    });\n  }\n\n  _createClass(ConfettiBatch, [{\n    key: \"getBatchCompletePromise\",\n    value: function getBatchCompletePromise() {\n      return this.promise;\n    }\n  }, {\n    key: \"addShapes\",\n    value: function addShapes() {\n      var _this$shapes;\n\n      (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);\n    }\n  }, {\n    key: \"complete\",\n    value: function complete() {\n      var _a;\n\n      if (this.shapes.length) {\n        return false;\n      }\n\n      (_a = this.resolvePromise) === null || _a === void 0 ? void 0 : _a.call(this);\n      return true;\n    }\n  }, {\n    key: \"processShapes\",\n    value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {\n      var _this2 = this;\n\n      var timeDelta = time.timeDelta,\n          currentTime = time.currentTime;\n      this.shapes = this.shapes.filter(function (shape) {\n        // Render the shapes in this batch\n        shape.updatePosition(timeDelta, currentTime);\n        shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to\n\n        if (!cleanupInvisibleShapes) {\n          return true;\n        }\n\n        return shape.getIsVisibleOnCanvas(canvasHeight);\n      });\n    }\n  }]);\n\n  return ConfettiBatch;\n}();\n\nvar JSConfetti = /*#__PURE__*/function () {\n  function JSConfetti() {\n    var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, JSConfetti);\n\n    this.activeConfettiBatches = [];\n    this.canvas = jsConfettiConfig.canvas || createCanvas();\n    this.canvasContext = this.canvas.getContext('2d');\n    this.requestAnimationFrameRequested = false;\n    this.lastUpdated = new Date().getTime();\n    this.iterationIndex = 0;\n    this.loop = this.loop.bind(this);\n    requestAnimationFrame(this.loop);\n  }\n\n  _createClass(JSConfetti, [{\n    key: \"loop\",\n    value: function loop() {\n      this.requestAnimationFrameRequested = false;\n      fixDPR(this.canvas);\n      var currentTime = new Date().getTime();\n      var timeDelta = currentTime - this.lastUpdated;\n      var canvasHeight = this.canvas.offsetHeight;\n      var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;\n      this.activeConfettiBatches = this.activeConfettiBatches.filter(function (batch) {\n        batch.processShapes({\n          timeDelta: timeDelta,\n          currentTime: currentTime\n        }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration\n\n        if (!cleanupInvisibleShapes) {\n          return true;\n        }\n\n        return !batch.complete();\n      });\n      this.iterationIndex++;\n      this.queueAnimationFrameIfNeeded(currentTime);\n    }\n  }, {\n    key: \"queueAnimationFrameIfNeeded\",\n    value: function queueAnimationFrameIfNeeded(currentTime) {\n      if (this.requestAnimationFrameRequested) {\n        // We already have a pended animation frame, so there is no more work\n        return;\n      }\n\n      if (this.activeConfettiBatches.length < 1) {\n        // No shapes to animate, so don't queue another frame\n        return;\n      }\n\n      this.requestAnimationFrameRequested = true; // Capture the last updated time for animation\n\n      this.lastUpdated = currentTime || new Date().getTime();\n      requestAnimationFrame(this.loop);\n    }\n  }, {\n    key: \"addConfetti\",\n    value: function addConfetti() {\n      var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig),\n          confettiRadius = _normalizeConfettiCon.confettiRadius,\n          confettiNumber = _normalizeConfettiCon.confettiNumber,\n          confettiColors = _normalizeConfettiCon.confettiColors,\n          emojis = _normalizeConfettiCon.emojis,\n          emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because\n      // .width / .height are unset until a layout pass has been completed. Upon\n      // confetti being immediately queued on a page load, this hasn't happened so\n      // the default of 300x150 will be returned, causing an improper source point\n      // for the confetti animation.\n\n\n      var canvasRect = this.canvas.getBoundingClientRect();\n      var canvasWidth = canvasRect.width;\n      var canvasHeight = canvasRect.height;\n      var yPosition = canvasHeight * 5 / 7;\n      var leftConfettiPosition = {\n        x: 0,\n        y: yPosition\n      };\n      var rightConfettiPosition = {\n        x: canvasWidth,\n        y: yPosition\n      };\n      var confettiGroup = new ConfettiBatch(this.canvasContext);\n\n      for (var i = 0; i < confettiNumber / 2; i++) {\n        var confettiOnTheRight = new ConfettiShape({\n          initialPosition: leftConfettiPosition,\n          direction: 'right',\n          confettiRadius: confettiRadius,\n          confettiColors: confettiColors,\n          confettiNumber: confettiNumber,\n          emojis: emojis,\n          emojiSize: emojiSize,\n          canvasWidth: canvasWidth\n        });\n        var confettiOnTheLeft = new ConfettiShape({\n          initialPosition: rightConfettiPosition,\n          direction: 'left',\n          confettiRadius: confettiRadius,\n          confettiColors: confettiColors,\n          confettiNumber: confettiNumber,\n          emojis: emojis,\n          emojiSize: emojiSize,\n          canvasWidth: canvasWidth\n        });\n        confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);\n      }\n\n      this.activeConfettiBatches.push(confettiGroup);\n      this.queueAnimationFrameIfNeeded();\n      return confettiGroup.getBatchCompletePromise();\n    }\n  }, {\n    key: \"clearCanvas\",\n    value: function clearCanvas() {\n      this.activeConfettiBatches = [];\n    }\n  }]);\n\n  return JSConfetti;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSConfetti);\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/js-confetti/dist/es/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Modules/Get data.js":
/*!*********************************!*\
  !*** ./src/Modules/Get data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  const list = document.querySelector('#board table');\n  const scores = document.createElement('table');\n  scores.innerHTML = '<thead><th>User Name</th><th></th><th>Points</th></thead>';\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mkTCYEA17yEVtm11XsOo/scores/')\n    .then((response) => response.json())\n    .then((json) => {\n      json.result.sort((a, b) => b.score - a.score);\n      document.querySelector('#top-player').innerHTML = `<span>Top Player: ${json.result[0].user}🏆</<span>`;\n      json.result.forEach((i) => {\n        const row = document.createElement('tr');\n        row.innerHTML = `<td>${i.user}</td> <td>:</td> <td>${i.score}</td>`;\n        scores.appendChild(row);\n      });\n    });\n  document.querySelector('#board').replaceChild(scores, list);\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/Modules/Get_data.js?");

/***/ }),

/***/ "./src/Modules/Post data.js":
/*!**********************************!*\
  !*** ./src/Modules/Post data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst userName = document.querySelector('#name');\nconst userScore = document.querySelector('#score');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kMVPWXdULV60GDvFOZbP/scores/', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      user: userName.value,\n      score: userScore.value,\n    }),\n  })\n    .then((response) => response.json());\n  userName.value = '';\n  userScore.value = '';\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/Modules/Post_data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var js_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-confetti */ \"./node_modules/js-confetti/dist/es/index.js\");\n/* harmony import */ var _Modules_Get_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/Get data.js */ \"./src/Modules/Get data.js\");\n/* harmony import */ var _Modules_Post_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/Post data.js */ \"./src/Modules/Post data.js\");\n\n\n\n\n\n// Fetch data when DOM loads\ndocument.querySelector('DOMContentLoaded', (0,_Modules_Get_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n// Refresh button event litsener\ndocument.querySelector('#refresh').addEventListener('click', () => {\n  (0,_Modules_Get_data_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n// Submit button event litsener\ndocument.querySelector('form').addEventListener('submit', async (event) => {\n  event.preventDefault();\n  document.querySelector('form #submit').disabled = true;\n  await (0,_Modules_Post_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  document.querySelector('form #submit').disabled = false;\n});\n\n// Top player confetti effect\nconst canvas = document.getElementById('confetti');\nconst jsConfetti = new js_confetti__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ canvas });\njsConfetti.particleSpeed = 60;\n\njsConfetti.addConfetti({\n  confettiColors: [\n    'gold', 'blue', 'goldenrod', 'red',\n  ],\n});\n\nsetInterval(() => jsConfetti.addConfetti({\n  confettiColors: [\n    'DodgerBlue', 'OliveDrab', 'Gold', 'Pink', 'SlateBlue', 'LightBlue', 'Violet', 'PaleGreen', 'SteelBlue', 'SandyBrown', 'Chocolate', 'Crimson',\n  ],\n}), 10000);\n\nsetInterval(() => jsConfetti.addConfetti({\n  emojis: ['🏆'],\n  emojiSize: 10,\n  confettiNumber: 50,\n}), 5000);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/Images/Rocket.png":
/*!*******************************!*\
  !*** ./src/Images/Rocket.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b988fcdf199a65f8cf7b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/Images/Rocket.png?");

/***/ }),

/***/ "./src/Images/UFO.png":
/*!****************************!*\
  !*** ./src/Images/UFO.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e5a6cae027cf3201d29.png\";\n\n//# sourceURL=webpack://to-do-list/./src/Images/UFO.png?");

/***/ }),

/***/ "./src/Images/bg.jpg":
/*!***************************!*\
  !*** ./src/Images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e144fb9098a305a03df1.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/Images/bg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;