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

/***/ "./src/components/header-section.js":
/*!******************************************!*\
  !*** ./src/components/header-section.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ \"./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar headerSection = /*#__PURE__*/function (_HTMLElement) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(headerSection, _HTMLElement);\n\n  var _super = _createSuper(headerSection);\n\n  function headerSection() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, headerSection);\n\n    return _super.call(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(headerSection, [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      var template = document.createElement('template');\n      template.innerHTML = \"\\n            <nav class=\\\"header-nav\\\">\\n                <p class=\\\"body header-nav__title\\\">Viaje a Jap\\xF3n 2024</p>\\n                <button class=\\\"header-nav__btn\\\" id=\\\"user-menu\\\"><i class=\\\"fas fa-user-circle\\\"></i></button>\\n                <div class=\\\"header-logout\\\" id=\\\"header-logout\\\">\\n                    <button class=\\\"header-logout__btn\\\" id=\\\"header-logout__btn\\\">Cerrar sesi\\xF3n</button>\\n                </div>\\n            </nav>\\n        \";\n      return template;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.append(this.getTemplate().content.cloneNode(true));\n\n      this.querySelector('#user-menu').onclick = function () {\n        return _this.logout();\n      };\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"logout\",\n    value: function logout() {\n      var logoutBtn = this.querySelector('#header-logout');\n      logoutBtn.classList.toggle(\"header-logout--active\");\n\n      this.querySelector('#header-logout__btn').onclick = function () {\n        return (0,___WEBPACK_IMPORTED_MODULE_6__.start)();\n      };\n    }\n  }]);\n\n  return headerSection;\n}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(HTMLElement));\n\ncustomElements.define('header-section', headerSection);\n\n//# sourceURL=webpack://vj24/./src/components/header-section.js?");

/***/ }),

/***/ "./src/components/menu-section.js":
/*!****************************************!*\
  !*** ./src/components/menu-section.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ \"./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nvar menuSection = /*#__PURE__*/function (_HTMLElement) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(menuSection, _HTMLElement);\n\n  var _super = _createSuper(menuSection);\n\n  function menuSection() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, menuSection);\n\n    return _super.call(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menuSection, [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      var template = document.createElement('template');\n      template.innerHTML = \"\\n        <footer>\\n            <button class=\\\"home-option menu-option\\\" id=\\\"menu-home\\\">\\n                <i class=\\\"fas fa-home\\\"></i>\\n                <p class=\\\"menu-text text-s\\\" data-tagname=\\\"expenses\\\">Inicio</p>\\n            </button>\\n            <button class=\\\"expenses-option menu-option\\\" data-tagname=\\\"expenses\\\" id=\\\"menu-expenses\\\">\\n                <i class=\\\"fas fa-dollar-sign\\\"></i>\\n                <p class=\\\"menu-text text-s\\\" data-tagname=\\\"expenses\\\">Presupuesto</p>\\n            </button>\\n            <button class=\\\"travel-option menu-option\\\" data-tagname=\\\"travel\\\" id=\\\"menu-travel\\\">\\n                <i class=\\\"fas fa-plane-departure\\\"></i>\\n                <p class=\\\"menu-text text-s\\\" data-tagname=\\\"travel\\\">Viaje</p>\\n            </button>\\n            <button class=\\\"rtj-option menu-option\\\" data-tagname=\\\"rtj\\\" id=\\\"menu-rtj\\\">\\n                <i class=\\\"fas fa-hiking\\\"></i>\\n                <p class=\\\"menu-text text-s\\\" data-tagname=\\\"rtj\\\">RtJ</p>\\n            </button>\\n        </footer>\\n        \";\n      return template;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.appendChild(this.getTemplate().content.cloneNode(true));\n      this.start();\n\n      this.querySelector('#menu-home').onclick = function () {\n        return _this.home();\n      };\n\n      this.querySelector('#menu-expenses').onclick = function () {\n        return _this.expenses();\n      };\n\n      this.querySelector('#menu-travel').onclick = function () {\n        return _this.travel();\n      };\n\n      this.querySelector('#menu-rtj').onclick = function () {\n        return _this.rtj();\n      };\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var remove = this.querySelector('.menu-option--active');\n\n      if (!remove) {\n        var option = this.querySelector('#menu-home');\n        option.classList.add('menu-option--active');\n      }\n    }\n  }, {\n    key: \"home\",\n    value: function home() {\n      var option = this.querySelector('#menu-home');\n      var remove = this.querySelector('.menu-option--active');\n      remove.classList.remove('menu-option--active');\n      option.classList.add('menu-option--active'); //homeContent('home')\n    }\n  }, {\n    key: \"expenses\",\n    value: function expenses() {\n      var option = this.querySelector('#menu-expenses');\n      var remove = this.querySelector('.menu-option--active');\n      remove.classList.remove('menu-option--active');\n      option.classList.add('menu-option--active'); //homeContent('expenses')\n    }\n  }, {\n    key: \"travel\",\n    value: function travel() {\n      var option = this.querySelector('#menu-travel');\n      var remove = this.querySelector('.menu-option--active');\n      remove.classList.remove('menu-option--active');\n      option.classList.add('menu-option--active'); //homeContent('travel')\n    }\n  }, {\n    key: \"rtj\",\n    value: function rtj() {\n      var option = this.querySelector('#menu-rtj');\n      var remove = this.querySelector('.menu-option--active');\n      remove.classList.remove('menu-option--active');\n      option.classList.add('menu-option--active'); //homeContent('rtj')\n    }\n  }]);\n\n  return menuSection;\n}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(HTMLElement));\n\ncustomElements.define('menu-section', menuSection);\n\n//# sourceURL=webpack://vj24/./src/components/menu-section.js?");

/***/ }),

/***/ "./src/components/start-section.js":
/*!*****************************************!*\
  !*** ./src/components/start-section.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ \"./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar startSection = /*#__PURE__*/function (_HTMLElement) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startSection, _HTMLElement);\n\n  var _super = _createSuper(startSection);\n\n  function startSection() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, startSection);\n\n    return _super.call(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(startSection, [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      var template = document.createElement('template');\n      template.innerHTML = \"\\n        <main class=\\\"start\\\">\\n            <picture class='start-bg'>\\n                <source media='(min-width: 768px)' srcset='./assets/img/bg-medium.jpg'>\\n                <source media='(min-width: 1024px)' srcset='./assets/img/bg-large.jpg'>\\n                <img src='./assets/img/bg-small.jpg'>\\n            </picture>\\n            <div class='start-content' id='start-content'>\\n                <h1 class='heading-1 start-content__title'>Jap\\xF3n</h1>\\n                <button type=\\\"button\\\" id=\\\"start-btn\\\" class=\\\"start-content__btn btn-cta\\\">Iniciar</button>\\n            </div>\\n        </main>\\n        \";\n      return template;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      this.append(this.getTemplate().content.cloneNode(true));\n\n      this.querySelector('#start-btn').onclick = function () {\n        return _this.startForm();\n      };\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.render();\n    }\n  }, {\n    key: \"startForm\",\n    value: function startForm() {\n      (0,___WEBPACK_IMPORTED_MODULE_6__.startApp)();\n    }\n  }, {\n    key: \"printForm\",\n    value: function printForm() {\n      console.log('hola');\n    }\n  }, {\n    key: \"loginBtn\",\n    value: function loginBtn() {\n      console.log('hola 2');\n    }\n  }]);\n\n  return startSection;\n}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(HTMLElement));\n\ncustomElements.define('start-section', startSection);\n\n//# sourceURL=webpack://vj24/./src/components/start-section.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _components_start_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/start-section.js */ \"./src/components/start-section.js\");\n/* harmony import */ var _components_header_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-section.js */ \"./src/components/header-section.js\");\n/* harmony import */ var _components_menu_section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu-section.js */ \"./src/components/menu-section.js\");\n\n\n\n\nvar appContainer = document.getElementById('app');\nvar start = function start() {\n  appContainer.innerHTML = '';\n  var content = document.createElement('start-section');\n  appContainer.append(content);\n};\nvar startApp = function startApp() {\n  appContainer.innerHTML = '';\n  var header = document.createElement('header-section');\n  header.className = 'header';\n  var menu = document.createElement('menu-section');\n  menu.className = 'menu';\n  appContainer.append(header, menu);\n};\nwindow.addEventListener('load', start());\n\n//# sourceURL=webpack://vj24/./src/index.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://vj24/./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _construct)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ \"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js\");\n\n\nfunction _construct(Parent, args, Class) {\n  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()) {\n    _construct = Reflect.construct;\n  } else {\n    _construct = function _construct(Parent, args, Class) {\n      var a = [null];\n      a.push.apply(a, args);\n      var Constructor = Function.bind.apply(Parent, a);\n      var instance = new Constructor();\n      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(instance, Class.prototype);\n      return instance;\n    };\n  }\n\n  return _construct.apply(null, arguments);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/construct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _isNativeFunction)\n/* harmony export */ });\nfunction _isNativeFunction(fn) {\n  return Function.toString.call(fn).indexOf(\"[native code]\") !== -1;\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _isNativeReflectConstruct)\n/* harmony export */ });\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _wrapNativeSuper)\n/* harmony export */ });\n/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ \"./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js\");\n/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ \"./node_modules/@babel/runtime/helpers/esm/construct.js\");\n\n\n\n\nfunction _wrapNativeSuper(Class) {\n  var _cache = typeof Map === \"function\" ? new Map() : undefined;\n\n  _wrapNativeSuper = function _wrapNativeSuper(Class) {\n    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Class)) return Class;\n\n    if (typeof Class !== \"function\") {\n      throw new TypeError(\"Super expression must either be null or a function\");\n    }\n\n    if (typeof _cache !== \"undefined\") {\n      if (_cache.has(Class)) return _cache.get(Class);\n\n      _cache.set(Class, Wrapper);\n    }\n\n    function Wrapper() {\n      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).constructor);\n    }\n\n    Wrapper.prototype = Object.create(Class.prototype, {\n      constructor: {\n        value: Wrapper,\n        enumerable: false,\n        writable: true,\n        configurable: true\n      }\n    });\n    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Wrapper, Class);\n  };\n\n  return _wrapNativeSuper(Class);\n}\n\n//# sourceURL=webpack://vj24/./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;