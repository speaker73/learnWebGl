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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Game.js":
/*!*********************!*\
  !*** ./app/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _engine = __webpack_require__(/*! engine */ \"./engine/index.js\");\n\nvar _vertexShader = _interopRequireDefault(__webpack_require__(/*! ./vertexShader.glsl */ \"./app/vertexShader.glsl\"));\n\nvar _fragmentShader = _interopRequireDefault(__webpack_require__(/*! ./fragmentShader.glsl */ \"./app/fragmentShader.glsl\"));\n\nvar _EngineWebGl = __webpack_require__(/*! engine/EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _components = __webpack_require__(/*! ./components */ \"./app/components/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Game =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Game, _Component);\n\n  function Game(props) {\n    var _this;\n\n    _classCallCheck(this, Game);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this, props));\n    console.log(_EngineWebGl.webGl);\n    _this.shaders = [(0, _engine.compileShader)(_EngineWebGl.webGl.VERTEX_SHADER, _vertexShader.default), (0, _engine.compileShader)(_EngineWebGl.webGl.FRAGMENT_SHADER, _fragmentShader.default)];\n    _this.program = _engine.createProgram.apply(void 0, _toConsumableArray(_this.shaders));\n\n    var positionAttributeLocation = _EngineWebGl.webGl.getAttribLocation(_this.program, \"a_position\");\n\n    console.log(positionAttributeLocation);\n\n    var positionBuffer = _EngineWebGl.webGl.createBuffer();\n\n    console.log(positionBuffer);\n\n    _EngineWebGl.webGl.bindBuffer(_EngineWebGl.webGl.ARRAY_BUFFER, positionBuffer);\n\n    var positions = [0, 0, 0, 0.5, 0.7, 0];\n\n    _EngineWebGl.webGl.bufferData(_EngineWebGl.webGl.ARRAY_BUFFER, new Float32Array(positions), _EngineWebGl.webGl.STATIC_DRAW); //render\n\n\n    _EngineWebGl.webGl.viewport(0, 0, _EngineWebGl.webGl.canvas.width, _EngineWebGl.webGl.canvas.height); // очищаем canvas\n\n\n    _EngineWebGl.webGl.clearColor(0, 0, 0, 0);\n\n    _EngineWebGl.webGl.clear(_EngineWebGl.webGl.COLOR_BUFFER_BIT); // говорим использовать нашу программу (пару шейдеров)\n\n\n    console.log(_this.program);\n\n    _EngineWebGl.webGl.useProgram(_this.program);\n\n    _EngineWebGl.webGl.enableVertexAttribArray(positionAttributeLocation); // Привязываем буфер положений\n\n\n    _EngineWebGl.webGl.bindBuffer(_EngineWebGl.webGl.ARRAY_BUFFER, positionBuffer); // Указываем атрибуту, как получать данные от positionBuffer (ARRAY_BUFFER)\n\n\n    var size = 2; // 2 компоненты на итерацию\n\n    var type = _EngineWebGl.webGl.FLOAT; // наши данные - 32-битные числа с плавающей точкой\n\n    var normalize = false; // не нормализовать данные\n\n    var stride = 0; // 0 = перемещаться на size * sizeof(type) каждую итерацию для получения следующего положения\n\n    var offset = 0; // начинать с начала буфера\n\n    console.log(positionAttributeLocation, size, type, normalize, stride, offset);\n\n    _EngineWebGl.webGl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);\n\n    var primitiveType = _EngineWebGl.webGl.TRIANGLES; // const offset = 0;\n\n    var count = 3;\n\n    _EngineWebGl.webGl.drawArrays(primitiveType, offset, count);\n\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: \"render\",\n    value: function render() {\n      return [new _components.Second({\n        title: 'Second'\n      }), new _components.Third({\n        title: 'Third'\n      })];\n    }\n  }]);\n\n  return Game;\n}(_engine.Component);\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./app/Game.js?");

/***/ }),

/***/ "./app/components/Second/Second.js":
/*!*****************************************!*\
  !*** ./app/components/Second/Second.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _engine = __webpack_require__(/*! engine */ \"./engine/index.js\");\n\nvar _EngineWebGl = __webpack_require__(/*! engine/EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _vertexShader2d = _interopRequireDefault(__webpack_require__(/*! ./vertexShader2d.glsl */ \"./app/components/Second/vertexShader2d.glsl\"));\n\nvar _fragmentShader = _interopRequireDefault(__webpack_require__(/*! ./fragmentShader.glsl */ \"./app/components/Second/fragmentShader.glsl\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Second =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Second, _Component);\n\n  function Second(props) {\n    var _this;\n\n    _classCallCheck(this, Second);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Second).call(this, props));\n    _this.shaders = [(0, _engine.compileShader)(_EngineWebGl.webGl.VERTEX_SHADER, _vertexShader2d.default), (0, _engine.compileShader)(_EngineWebGl.webGl.FRAGMENT_SHADER, _fragmentShader.default)];\n    _this.program = _engine.createProgram.apply(void 0, _toConsumableArray(_this.shaders));\n    console.log(_this.program);\n\n    var resolutionUniformLocation = _EngineWebGl.webGl.getUniformLocation(_this.program, \"u_resolution\");\n\n    var positions = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30];\n\n    _EngineWebGl.webGl.bufferData(_EngineWebGl.webGl.ARRAY_BUFFER, new Float32Array(positions), _EngineWebGl.webGl.STATIC_DRAW);\n\n    _EngineWebGl.webGl.useProgram(_this.program); // установка разрешения\n\n\n    _EngineWebGl.webGl.uniform2f(resolutionUniformLocation, _EngineWebGl.webGl.canvas.width, _EngineWebGl.webGl.canvas.height);\n\n    var primitiveType = _EngineWebGl.webGl.TRIANGLES;\n    var offset = 0;\n    var count = 6;\n\n    _EngineWebGl.webGl.drawArrays(primitiveType, offset, count);\n\n    return _this;\n  }\n\n  _createClass(Second, [{\n    key: \"render\",\n    value: function render() {}\n  }]);\n\n  return Second;\n}(_engine.Component);\n\nexports.default = Second;\n\n//# sourceURL=webpack:///./app/components/Second/Second.js?");

/***/ }),

/***/ "./app/components/Second/fragmentShader.glsl":
/*!***************************************************!*\
  !*** ./app/components/Second/fragmentShader.glsl ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" // фрагментные шейдеры не имеют точности по умолчанию, поэтому нам необходимо её\\r\\n  // указать. mediump подойдёт для большинства случаев. Он означает \\\"средняя точность\\\"\\r\\n  precision mediump float;\\r\\n  void main() {\\r\\n    // gl_FragColor - специальная переменная фрагментного шейдера.\\r\\n    // Она отвечает за установку цвета.\\r\\n    gl_FragColor = vec4(1, 0, 0.5, 1); // вернёт красновато-фиолетовый\\r\\n  }\\r\\n \"\n\n//# sourceURL=webpack:///./app/components/Second/fragmentShader.glsl?");

/***/ }),

/***/ "./app/components/Second/index.js":
/*!****************************************!*\
  !*** ./app/components/Second/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Second = _interopRequireDefault(__webpack_require__(/*! ./Second */ \"./app/components/Second/Second.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = _Second.default;\nexports.default = _default;\n\n//# sourceURL=webpack:///./app/components/Second/index.js?");

/***/ }),

/***/ "./app/components/Second/vertexShader2d.glsl":
/*!***************************************************!*\
  !*** ./app/components/Second/vertexShader2d.glsl ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec2 a_position;\\r\\nuniform vec2 u_resolution;\\r\\n\\r\\n void main() {\\r\\n    // преобразуем положение в пикселях к диапазону от 0.0 до 1.0\\r\\n    vec2 zeroToOne = a_position / u_resolution;\\r\\n\\r\\n    // преобразуем из 0->1 в 0->2\\r\\n    vec2 zeroToTwo = zeroToOne * 2.0;\\r\\n\\r\\n    // преобразуем из 0->2 в -1->+1 (пространство отсечения)\\r\\n    vec2 clipSpace = zeroToTwo - 1.0;\\r\\n\\r\\n    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\\r\\n }\"\n\n//# sourceURL=webpack:///./app/components/Second/vertexShader2d.glsl?");

/***/ }),

/***/ "./app/components/Third/Third.js":
/*!***************************************!*\
  !*** ./app/components/Third/Third.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _engine = __webpack_require__(/*! engine */ \"./engine/index.js\");\n\nvar _EngineWebGl = __webpack_require__(/*! engine/EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _vertexShader2d = _interopRequireDefault(__webpack_require__(/*! ./vertexShader2d.glsl */ \"./app/components/Third/vertexShader2d.glsl\"));\n\nvar _fragmentShader = _interopRequireDefault(__webpack_require__(/*! ./fragmentShader.glsl */ \"./app/components/Third/fragmentShader.glsl\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar randomInt = function randomInt(range) {\n  return Math.floor(Math.random() * range);\n};\n\nvar setRectangle = function setRectangle(x, y, width, height) {\n  var x1 = x;\n  var x2 = x + width;\n  var y1 = y;\n  var y2 = y + height; // ПРИМ.: gl.bufferData(gl.ARRAY_BUFFER, ...) воздействует\n  // на буфер, который привязан к точке привязке `ARRAY_BUFFER`,\n  // но таким образом у нас будет один буфер. Если бы нам понадобилось\n  // несколько буферов, нам бы потребовалось привязать их сначала к `ARRAY_BUFFER`.\n\n  _EngineWebGl.webGl.bufferData(_EngineWebGl.webGl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), _EngineWebGl.webGl.STATIC_DRAW);\n};\n\nvar Third =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Third, _Component);\n\n  function Third(props) {\n    var _this;\n\n    _classCallCheck(this, Third);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Third).call(this, props));\n    _this.shaders = [(0, _engine.compileShader)(_EngineWebGl.webGl.VERTEX_SHADER, _vertexShader2d.default), (0, _engine.compileShader)(_EngineWebGl.webGl.FRAGMENT_SHADER, _fragmentShader.default)];\n    _this.program = _engine.createProgram.apply(void 0, _toConsumableArray(_this.shaders));\n\n    var positionAttributeLocation = _EngineWebGl.webGl.getAttribLocation(_this.program, \"a_position\");\n\n    var resolutionUniformLocation = _EngineWebGl.webGl.getUniformLocation(_this.program, \"u_resolution\");\n\n    var colorUniformLocation = _EngineWebGl.webGl.getUniformLocation(_this.program, \"u_color\");\n\n    var positionBuffer = _EngineWebGl.webGl.createBuffer();\n\n    _EngineWebGl.webGl.useProgram(_this.program); // Turn on the attribute\n\n\n    _EngineWebGl.webGl.enableVertexAttribArray(positionAttributeLocation); // Bind the position buffer.\n\n\n    _EngineWebGl.webGl.bindBuffer(_EngineWebGl.webGl.ARRAY_BUFFER, positionBuffer); // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)\n\n\n    var size = 2; // 2 components per iteration\n\n    var type = _EngineWebGl.webGl.FLOAT; // the data is 32bit floats\n\n    var normalize = false; // don't normalize the data\n\n    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position\n\n    var offset = 0; // start at the beginning of the buffer\n\n    _EngineWebGl.webGl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset); // set the resolution\n\n\n    _EngineWebGl.webGl.uniform2f(resolutionUniformLocation, _EngineWebGl.webGl.canvas.width, _EngineWebGl.webGl.canvas.height); // draw 50 random rectangles in random colors\n\n\n    for (var ii = 0; ii < 1000; ++ii) {\n      // Setup a random rectangle\n      // This will write to positionBuffer because\n      // its the last thing we bound on the ARRAY_BUFFER\n      // bind point\n      setRectangle(randomInt(630), randomInt(470), randomInt(5), randomInt(5)); // Set a random color.\n\n      _EngineWebGl.webGl.uniform4f(colorUniformLocation, Math.random(), Math.random(), Math.random(), 1); // Draw the rectangle.\n\n\n      var primitiveType = _EngineWebGl.webGl.TRIANGLES;\n      var _offset = 0;\n      var count = 6;\n\n      _EngineWebGl.webGl.drawArrays(primitiveType, _offset, count);\n    }\n\n    return _this;\n  }\n\n  _createClass(Third, [{\n    key: \"render\",\n    value: function render() {}\n  }]);\n\n  return Third;\n}(_engine.Component);\n\nexports.default = Third;\n\n//# sourceURL=webpack:///./app/components/Third/Third.js?");

/***/ }),

/***/ "./app/components/Third/fragmentShader.glsl":
/*!**************************************************!*\
  !*** ./app/components/Third/fragmentShader.glsl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" // фрагментные шейдеры не имеют точности по умолчанию, поэтому нам необходимо её\\r\\n  // указать. mediump подойдёт для большинства случаев. Он означает \\\"средняя точность\\\"\\r\\n  precision mediump float;\\r\\n  uniform vec4 u_color;\\r\\n\\r\\n  void main() {\\r\\n    // gl_FragColor - специальная переменная фрагментного шейдера.\\r\\n    // Она отвечает за установку цвета.\\r\\n    gl_FragColor = u_color;\\r\\n  }\\r\\n \"\n\n//# sourceURL=webpack:///./app/components/Third/fragmentShader.glsl?");

/***/ }),

/***/ "./app/components/Third/index.js":
/*!***************************************!*\
  !*** ./app/components/Third/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _Third = _interopRequireDefault(__webpack_require__(/*! ./Third */ \"./app/components/Third/Third.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = _Third.default;\nexports.default = _default;\n\n//# sourceURL=webpack:///./app/components/Third/index.js?");

/***/ }),

/***/ "./app/components/Third/vertexShader2d.glsl":
/*!**************************************************!*\
  !*** ./app/components/Third/vertexShader2d.glsl ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec2 a_position;\\r\\nuniform vec2 u_resolution;\\r\\n\\r\\n void main() {\\r\\n    // преобразуем положение в пикселях к диапазону от 0.0 до 1.0\\r\\n    vec2 zeroToOne = a_position / u_resolution;\\r\\n\\r\\n    // преобразуем из 0->1 в 0->2\\r\\n    vec2 zeroToTwo = zeroToOne * 2.0;\\r\\n\\r\\n    // преобразуем из 0->2 в -1->+1 (пространство отсечения)\\r\\n    vec2 clipSpace = zeroToTwo - 1.0;\\r\\n\\r\\n    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\\r\\n }\"\n\n//# sourceURL=webpack:///./app/components/Third/vertexShader2d.glsl?");

/***/ }),

/***/ "./app/components/index.js":
/*!*********************************!*\
  !*** ./app/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Second\", {\n  enumerable: true,\n  get: function get() {\n    return _Second.default;\n  }\n});\nObject.defineProperty(exports, \"Third\", {\n  enumerable: true,\n  get: function get() {\n    return _Third.default;\n  }\n});\n\nvar _Second = _interopRequireDefault(__webpack_require__(/*! ./Second */ \"./app/components/Second/index.js\"));\n\nvar _Third = _interopRequireDefault(__webpack_require__(/*! ./Third */ \"./app/components/Third/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./app/components/index.js?");

/***/ }),

/***/ "./app/fragmentShader.glsl":
/*!*********************************!*\
  !*** ./app/fragmentShader.glsl ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \" // фрагментные шейдеры не имеют точности по умолчанию, поэтому нам необходимо её\\r\\n  // указать. mediump подойдёт для большинства случаев. Он означает \\\"средняя точность\\\"\\r\\n  precision mediump float;\\r\\n \\r\\n  void main() {\\r\\n    // gl_FragColor - специальная переменная фрагментного шейдера.\\r\\n    // Она отвечает за установку цвета.\\r\\n    gl_FragColor = vec4(1, 0, 0.5, 1); // вернёт красновато-фиолетовый\\r\\n  }\\r\\n \"\n\n//# sourceURL=webpack:///./app/fragmentShader.glsl?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _engine = __webpack_require__(/*! engine */ \"./engine/index.js\");\n\nvar _Game = _interopRequireDefault(__webpack_require__(/*! ./Game */ \"./app/Game.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_engine.EngineWebGl.render(_Game.default, document.getElementById('game'));\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/vertexShader.glsl":
/*!*******************************!*\
  !*** ./app/vertexShader.glsl ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// атрибут, который будет получать данные из буфера\\r\\nattribute vec4 a_position;\\r\\n\\r\\n// все шейдеры имеют функцию main\\r\\nvoid main() {\\r\\n\\r\\n  // gl_Position - специальная переменная вершинного шейдера,\\r\\n  // которая отвечает за установку положения\\r\\n  gl_Position = a_position;\\r\\n}\"\n\n//# sourceURL=webpack:///./app/vertexShader.glsl?");

/***/ }),

/***/ "./engine/Component.js":
/*!*****************************!*\
  !*** ./engine/Component.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(_ref) {\n    var _ref$children = _ref.children,\n        children = _ref$children === void 0 ? [] : _ref$children;\n\n    _classCallCheck(this, Component);\n\n    this.children = children;\n  }\n\n  _createClass(Component, [{\n    key: \"render\",\n    value: function render() {\n      this.children.forEach(function (child) {\n        child.render();\n      });\n    }\n  }]);\n\n  return Component;\n}();\n\nexports.default = Component;\n\n//# sourceURL=webpack:///./engine/Component.js?");

/***/ }),

/***/ "./engine/EngineWebGl.js":
/*!*******************************!*\
  !*** ./engine/EngineWebGl.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.EngineWebGl = exports.webGl = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar webGl;\nexports.webGl = webGl;\n\nvar EngineWebGl =\n/*#__PURE__*/\nfunction () {\n  function EngineWebGl() {\n    _classCallCheck(this, EngineWebGl);\n  }\n\n  _createClass(EngineWebGl, null, [{\n    key: \"render\",\n    value: function render(Game, canvas) {\n      exports.webGl = webGl = canvas.getContext('webgl');\n      var game = new Game({});\n      game.render();\n    }\n  }]);\n\n  return EngineWebGl;\n}();\n\nexports.EngineWebGl = EngineWebGl;\n\n//# sourceURL=webpack:///./engine/EngineWebGl.js?");

/***/ }),

/***/ "./engine/compileShader.js":
/*!*********************************!*\
  !*** ./engine/compileShader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _EngineWebGl = __webpack_require__(/*! ./EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _default = function _default(type, source) {\n  var shader = _EngineWebGl.webGl.createShader(type); // создание шейдера\n\n\n  _EngineWebGl.webGl.shaderSource(shader, source); // устанавливаем шейдеру его программный код\n\n\n  _EngineWebGl.webGl.compileShader(shader); // компилируем шейдер\n\n\n  var success = _EngineWebGl.webGl.getShaderParameter(shader, _EngineWebGl.webGl.COMPILE_STATUS);\n\n  if (success) {\n    // если компиляция прошла успешно - возвращаем шейдер\n    return shader;\n  }\n\n  _EngineWebGl.webGl.deleteShader(shader);\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./engine/compileShader.js?");

/***/ }),

/***/ "./engine/createProgram.js":
/*!*********************************!*\
  !*** ./engine/createProgram.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _EngineWebGl = __webpack_require__(/*! ./EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _default = function _default(fragmentShader, vertexShader) {\n  var program = _EngineWebGl.webGl.createProgram();\n\n  _EngineWebGl.webGl.attachShader(program, fragmentShader);\n\n  _EngineWebGl.webGl.attachShader(program, vertexShader);\n\n  _EngineWebGl.webGl.linkProgram(program);\n\n  var success = _EngineWebGl.webGl.getProgramParameter(program, _EngineWebGl.webGl.LINK_STATUS);\n\n  if (success) {\n    return program;\n  }\n\n  console.error(_EngineWebGl.webGl.validateProgram(program));\n\n  _EngineWebGl.webGl.deleteProgram(program);\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./engine/createProgram.js?");

/***/ }),

/***/ "./engine/index.js":
/*!*************************!*\
  !*** ./engine/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Component\", {\n  enumerable: true,\n  get: function get() {\n    return _Component.default;\n  }\n});\nObject.defineProperty(exports, \"EngineWebGl\", {\n  enumerable: true,\n  get: function get() {\n    return _EngineWebGl.EngineWebGl;\n  }\n});\nObject.defineProperty(exports, \"compileShader\", {\n  enumerable: true,\n  get: function get() {\n    return _compileShader.default;\n  }\n});\nObject.defineProperty(exports, \"createProgram\", {\n  enumerable: true,\n  get: function get() {\n    return _createProgram.default;\n  }\n});\n\nvar _Component = _interopRequireDefault(__webpack_require__(/*! ./Component */ \"./engine/Component.js\"));\n\nvar _EngineWebGl = __webpack_require__(/*! ./EngineWebGl */ \"./engine/EngineWebGl.js\");\n\nvar _compileShader = _interopRequireDefault(__webpack_require__(/*! ./compileShader */ \"./engine/compileShader.js\"));\n\nvar _createProgram = _interopRequireDefault(__webpack_require__(/*! ./createProgram */ \"./engine/createProgram.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./engine/index.js?");

/***/ })

/******/ });