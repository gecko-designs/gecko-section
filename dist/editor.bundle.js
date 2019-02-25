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
/******/ 	__webpack_require__.p = "/wp-content/plugins/gecko-section/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/box-model.jsx":
/*!***************************!*\
  !*** ./src/box-model.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var BoxModel =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BoxModel, _React$Component);

  function BoxModel(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BoxModel);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BoxModel).call(this, props));
    _this.state = {
      defaultValue: null,
      value: {
        position: {
          top: null,
          left: null,
          right: null,
          bottom: null
        },
        margin: {
          top: null,
          left: null,
          right: null,
          bottom: null
        },
        padding: {
          top: null,
          left: null,
          right: null,
          bottom: null
        }
      }
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BoxModel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        value: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state.value, this.props.value)
      });
    }
  }, {
    key: "updateValue",
    value: function updateValue(k, t, v) {
      var value = this.state.value;

      var newValue = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, value);

      newValue[k][t] = !v ? null : v;
      this.setState({
        value: newValue
      });
      this.props.onChange(newValue);
    } // Render the component.

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__property"
      }, "Position"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__inputs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-top",
        value: value.position.top,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('position', 'top', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-top"
      }, "Top")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-right",
        value: value.position.right,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('position', 'right', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-right"
      }, "Right")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-bottom",
        value: value.position.bottom,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('position', 'bottom', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-bottom"
      }, "Bottom")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-left",
        value: value.position.left,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('position', 'left', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-left"
      }, "Left"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__property"
      }, "Margin"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__inputs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-top",
        value: value.margin.top,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('margin', 'top', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-top"
      }, "Top")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-right",
        value: value.margin.right,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('margin', 'right', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-right"
      }, "Right")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-bottom",
        value: value.margin.bottom,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('margin', 'bottom', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-bottom"
      }, "Bottom")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-left",
        value: value.margin.left,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('margin', 'left', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-left"
      }, "Left"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__property"
      }, "Padding"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__inputs"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-top",
        value: value.padding.top,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('padding', 'top', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-top"
      }, "Top")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-right",
        value: value.padding.right,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('padding', 'right', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-right"
      }, "Right")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-bottom",
        value: value.padding.bottom,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('padding', 'bottom', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-bottom"
      }, "Bottom")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "box-model__input"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "box-model-left",
        value: value.padding.left,
        type: "text",
        onChange: function onChange(e) {
          _this2.updateValue('padding', 'left', e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "box-model-left"
      }, "Left"))));
    }
  }]);

  return BoxModel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BoxModel);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./src/section.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_section__WEBPACK_IMPORTED_MODULE_1__["name"], _section__WEBPACK_IMPORTED_MODULE_1__["settings"]);

/***/ }),

/***/ "./src/section.js":
/*!************************!*\
  !*** ./src/section.js ***!
  \************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _box_model_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./box-model.jsx */ "./src/box-model.jsx");
/**
 * WordPress dependencies
 */






/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'dmp/grid-item'.
 *
 * @constant
 * @type {string[]}
*/

var name = 'gecko/section';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Section'),
  icon: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["G"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
    d: "M4,13 L8,13 L8,10 L4,10 L4,13 Z M4,15 L4,18 L8,18 L8,15 L4,15 Z M10,13 L14,13 L14,10 L10,10 L10,13 Z M10,15 L10,18 L14,18 L14,15 L10,15 Z M20,13 L20,10 L16,10 L16,13 L20,13 Z M20,15 L16,15 L16,18 L20,18 L20,15 Z M4,8 L8,8 L8,5 L4,5 L4,8 Z M10,8 L14,8 L14,5 L10,5 L10,8 Z M20,8 L20,5 L16,5 L16,8 L20,8 Z M4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.0486051 2,17.875 L2,5.125 C2,3.95139491 2.8954305,3 4,3 Z"
  }))),
  category: 'layout',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Full width sections wrappers for themes that support them.'),
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  deprecated: [],
  attributes: {
    backgroundMedia: {
      type: 'object'
    },
    overlayOpacity: {
      type: 'number'
    },
    backgroundColor: {
      type: 'string'
    },
    boxModel: {
      type: 'object',
      default: {
        position: {
          top: null,
          left: null,
          right: null,
          bottom: null
        },
        margin: {
          top: null,
          left: null,
          right: null,
          bottom: null
        },
        padding: {
          top: null,
          left: null,
          right: null,
          bottom: null
        }
      }
    },
    innerMaxWidth: {
      type: 'number',
      default: null
    }
  },
  edit: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["withColors"])('backgroundColor')])(function (props) {
    var _props$attributes = props.attributes,
        boxModel = _props$attributes.boxModel,
        maxWidth = _props$attributes.maxWidth,
        backgroundMedia = _props$attributes.backgroundMedia,
        overlayOpacity = _props$attributes.overlayOpacity;
    var className = props.className,
        backgroundColor = props.backgroundColor,
        setBackgroundColor = props.setBackgroundColor;
    var backgroundClass = backgroundColor && backgroundColor.slug ? "".concat(className, "--").concat(backgroundColor.slug) : undefined;
    var backgroundImage = undefined;

    if (backgroundMedia && backgroundMedia.type === 'image') {
      backgroundImage = "url(\"".concat(backgroundMedia.url, "\")");
    }

    var outterStyle = {
      marginTop: boxModel.margin.top,
      marginRight: boxModel.margin.right,
      marginBottom: boxModel.margin.bottom,
      marginLeft: boxModel.margin.left,
      paddingTop: boxModel.padding.top,
      paddingRight: boxModel.padding.right,
      paddingBottom: boxModel.padding.bottom,
      paddingLeft: boxModel.padding.left,
      backgroundColor: backgroundColor ? undefined : customBackgroundColor,
      backgroundImage: backgroundImage
    };
    var innerStyle = {
      maxWidth: maxWidth
    };
    var overlayStyle = {
      opacity: overlayOpacity
    };
    return [React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Background Settings"
    }, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      onSelect: function onSelect(value) {
        props.setAttributes({
          backgroundMedia: value
        });
      },
      type: ['image', 'video'],
      value: backgroundMedia ? backgroundMedia.id : null,
      render: function render(_ref) {
        var open = _ref.open;
        return [React.createElement("div", null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: backgroundMedia ? 'image-button' : 'button button-large',
          onClick: open
        }, 'Choose Background'), backgroundMedia && React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          className: "button button-small",
          onClick: function onClick() {
            props.setAttributes({
              backgroundMedia: null
            });
          }
        }, 'Remove Background'))];
      }
    }), backgroundMedia && React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: "Overlay Opacity",
      value: overlayOpacity,
      onChange: function onChange(value) {
        props.setAttributes({
          overlayOpacity: value
        });
      },
      min: "0",
      max: "0.9",
      step: "0.1"
    }), React.createElement("p", null), React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      label: "Background Color",
      value: backgroundColor ? backgroundColor.color : undefined,
      onChange: setBackgroundColor
    })), React.createElement("p", null)), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
      title: "Properties"
    }, React.createElement(_box_model_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "Box Model",
      value: boxModel,
      onChange: function onChange(value) {
        props.setAttributes({
          boxModel: value
        });
      }
    }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
      label: "Max Width",
      value: maxWidth,
      onChange: function onChange(value) {
        props.setAttributes({
          maxWidth: value
        });
      },
      min: "640",
      max: "1600"
    }))), React.createElement("section", {
      style: outterStyle,
      className: "".concat(className, " ").concat(backgroundClass)
    }, backgroundMedia && React.createElement("div", {
      class: "".concat(className, "__overlay"),
      style: overlayStyle
    }), React.createElement("div", {
      className: "".concat(className, "__inner"),
      style: innerStyle
    }, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], null)))];
  }),
  save: function save() {
    return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "@wordpress/blocks":
/*!***********************************!*\
  !*** external "window.wp.blocks" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!***************************************!*\
  !*** external "window.wp.components" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.components;

/***/ }),

/***/ "@wordpress/compose":
/*!************************************!*\
  !*** external "window.wp.compose" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.compose;

/***/ }),

/***/ "@wordpress/editor":
/*!***********************************!*\
  !*** external "window.wp.editor" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.editor;

/***/ }),

/***/ "@wordpress/element":
/*!************************************!*\
  !*** external "window.wp.element" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!*********************************!*\
  !*** external "window.wp.i18n" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.i18n;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm94LW1vZGVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmJsb2Nrc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmNvbXBvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmVsZW1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaTE4blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiXSwibmFtZXMiOlsiQm94TW9kZWwiLCJwcm9wcyIsInN0YXRlIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpbiIsInBhZGRpbmciLCJzZXRTdGF0ZSIsImsiLCJ0IiwidiIsIm5ld1ZhbHVlIiwib25DaGFuZ2UiLCJlIiwidXBkYXRlVmFsdWUiLCJ0YXJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlZ2lzdGVyQmxvY2tUeXBlIiwic2VjdGlvbiIsIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInN1cHBvcnRzIiwiYWxpZ24iLCJodG1sIiwiZGVwcmVjYXRlZCIsImF0dHJpYnV0ZXMiLCJiYWNrZ3JvdW5kTWVkaWEiLCJ0eXBlIiwib3ZlcmxheU9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hNb2RlbCIsImRlZmF1bHQiLCJpbm5lck1heFdpZHRoIiwiZWRpdCIsImNvbXBvc2UiLCJ3aXRoQ29sb3JzIiwibWF4V2lkdGgiLCJjbGFzc05hbWUiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ2xhc3MiLCJzbHVnIiwidW5kZWZpbmVkIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwib3V0dGVyU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiY3VzdG9tQmFja2dyb3VuZENvbG9yIiwiaW5uZXJTdHlsZSIsIm92ZXJsYXlTdHlsZSIsIm9wYWNpdHkiLCJzZXRBdHRyaWJ1dGVzIiwiaWQiLCJvcGVuIiwiY29sb3IiLCJzYXZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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QSxnQzs7Ozs7Ozs7Ozs7QUNBQSx1QiIsImZpbGUiOiJlZGl0b3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvd3AtY29udGVudC9wbHVnaW5zL2dlY2tvLXNlY3Rpb24vZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCb3hNb2RlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkZWZhdWx0VmFsdWU6IG51bGwsXG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHRwb3NpdGlvbjogeyB0b3A6IG51bGwsIGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIH0sXG5cdFx0XHRcdG1hcmdpbjogeyB0b3A6IG51bGwsIGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIH0sXG5cdFx0XHRcdHBhZGRpbmc6IHsgdG9wOiBudWxsLCBsZWZ0OiBudWxsLCByaWdodDogbnVsbCwgYm90dG9tOiBudWxsLCB9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHQuLi50aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHQuLi50aGlzLnByb3BzLnZhbHVlXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0dXBkYXRlVmFsdWUoayx0LHYpIHtcblx0XHRjb25zdCB7dmFsdWV9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBuZXdWYWx1ZSA9IHsuLi52YWx1ZX07XG5cdFx0bmV3VmFsdWVba11bdF0gPSAoIXYpPyBudWxsOiB2O1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0dmFsdWU6IG5ld1ZhbHVlLFxuXHRcdH0pXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG5cdH1cblxuXHQvLyBSZW5kZXIgdGhlIGNvbXBvbmVudC5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19wcm9wZXJ0eVwiPlBvc2l0aW9uPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19pbnB1dHNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveC1tb2RlbF9faW5wdXRcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD0nYm94LW1vZGVsLXRvcCcgdmFsdWU9e3ZhbHVlLnBvc2l0aW9uLnRvcH0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMudXBkYXRlVmFsdWUoJ3Bvc2l0aW9uJywgJ3RvcCcsIGUudGFyZ2V0LnZhbHVlKX19IC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nYm94LW1vZGVsLXRvcCc+VG9wPC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveC1tb2RlbF9faW5wdXRcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD0nYm94LW1vZGVsLXJpZ2h0JyB2YWx1ZT17dmFsdWUucG9zaXRpb24ucmlnaHR9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdwb3NpdGlvbicsJ3JpZ2h0JywgZS50YXJnZXQudmFsdWUpIH19IC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nYm94LW1vZGVsLXJpZ2h0Jz5SaWdodDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9J2JveC1tb2RlbC1ib3R0b20nIHZhbHVlPXt2YWx1ZS5wb3NpdGlvbi5ib3R0b219IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdwb3NpdGlvbicsJ2JvdHRvbScsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC1ib3R0b20nPkJvdHRvbTwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9J2JveC1tb2RlbC1sZWZ0JyB2YWx1ZT17dmFsdWUucG9zaXRpb24ubGVmdH0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMudXBkYXRlVmFsdWUoJ3Bvc2l0aW9uJywnbGVmdCcsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC1sZWZ0Jz5MZWZ0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveC1tb2RlbF9fcHJvcGVydHlcIj5NYXJnaW48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0c1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19pbnB1dFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPSdib3gtbW9kZWwtdG9wJyB2YWx1ZT17dmFsdWUubWFyZ2luLnRvcH0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMudXBkYXRlVmFsdWUoJ21hcmdpbicsICd0b3AnLCBlLnRhcmdldC52YWx1ZSkgfX0gLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdib3gtbW9kZWwtdG9wJz5Ub3A8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19pbnB1dFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPSdib3gtbW9kZWwtcmlnaHQnIHZhbHVlPXt2YWx1ZS5tYXJnaW4ucmlnaHR9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdtYXJnaW4nLCdyaWdodCcsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC1yaWdodCc+UmlnaHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19pbnB1dFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPSdib3gtbW9kZWwtYm90dG9tJyB2YWx1ZT17dmFsdWUubWFyZ2luLmJvdHRvbX0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMudXBkYXRlVmFsdWUoJ21hcmdpbicsJ2JvdHRvbScsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC1ib3R0b20nPkJvdHRvbTwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9J2JveC1tb2RlbC1sZWZ0JyB2YWx1ZT17dmFsdWUubWFyZ2luLmxlZnR9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdtYXJnaW4nLCdsZWZ0JywgZS50YXJnZXQudmFsdWUpIH19IC8+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj0nYm94LW1vZGVsLWxlZnQnPkxlZnQ8L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19wcm9wZXJ0eVwiPlBhZGRpbmc8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0c1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LW1vZGVsX19pbnB1dFwiPlxuXHRcdFx0XHRcdFx0PGlucHV0IGlkPSdib3gtbW9kZWwtdG9wJyB2YWx1ZT17dmFsdWUucGFkZGluZy50b3B9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdwYWRkaW5nJywgJ3RvcCcsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC10b3AnPlRvcDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9J2JveC1tb2RlbC1yaWdodCcgdmFsdWU9e3ZhbHVlLnBhZGRpbmcucmlnaHR9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXsoZSkgPT4geyB0aGlzLnVwZGF0ZVZhbHVlKCdwYWRkaW5nJywncmlnaHQnLCBlLnRhcmdldC52YWx1ZSkgfX0gLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdib3gtbW9kZWwtcmlnaHQnPlJpZ2h0PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveC1tb2RlbF9faW5wdXRcIj5cblx0XHRcdFx0XHRcdDxpbnB1dCBpZD0nYm94LW1vZGVsLWJvdHRvbScgdmFsdWU9e3ZhbHVlLnBhZGRpbmcuYm90dG9tfSB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy51cGRhdGVWYWx1ZSgncGFkZGluZycsJ2JvdHRvbScsIGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9J2JveC1tb2RlbC1ib3R0b20nPkJvdHRvbTwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtbW9kZWxfX2lucHV0XCI+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9J2JveC1tb2RlbC1sZWZ0JyB2YWx1ZT17dmFsdWUucGFkZGluZy5sZWZ0fSB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy51cGRhdGVWYWx1ZSgncGFkZGluZycsJ2xlZnQnLCBlLnRhcmdldC52YWx1ZSkgfX0gLz5cblx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPSdib3gtbW9kZWwtbGVmdCc+TGVmdDwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hNb2RlbDsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHtyZWdpc3RlckJsb2NrVHlwZX0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgKiBhcyBzZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKHNlY3Rpb24ubmFtZSwgc2VjdGlvbi5zZXR0aW5ncyk7XG4iLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgX18gfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuaW1wb3J0IHtcblx0UGFuZWxCb2R5LFxuXHRSYW5nZUNvbnRyb2wsXG5cdEJ1dHRvbixcblx0Ryxcblx0U1ZHLFxuXHRQYXRoXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5pbXBvcnQge1xuXHRjb21wb3NlXG59IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9zZSc7XG5cbmltcG9ydCB7XG5cdElubmVyQmxvY2tzLFxuXHRNZWRpYVVwbG9hZCxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdENvbG9yUGFsZXR0ZSxcblx0Z2V0Q29sb3JDbGFzc05hbWUsXG5cdHdpdGhDb2xvcnMsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcbmltcG9ydCBCb3hNb2RlbCBmcm9tICcuL2JveC1tb2RlbC5qc3gnO1xuXG5cbi8qKlxuICogQWxsb3dlZCBibG9ja3MgY29uc3RhbnQgaXMgcGFzc2VkIHRvIElubmVyQmxvY2tzIHByZWNpc2VseSBhcyBzcGVjaWZpZWQgaGVyZS5cbiAqIFRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgc2hvdWxkIG5ldmVyIGNoYW5nZS5cbiAqIFRoZSBhcnJheSBzaG91bGQgY29udGFpbiB0aGUgbmFtZSBvZiBlYWNoIGJsb2NrIHRoYXQgaXMgYWxsb3dlZC5cbiAqIEluIGNvbHVtbnMgYmxvY2ssIHRoZSBvbmx5IGJsb2NrIHdlIGFsbG93IGlzICdkbXAvZ3JpZC1pdGVtJy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiovXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9zZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdTZWN0aW9uJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxMyBMOCwxMyBMOCwxMCBMNCwxMCBMNCwxMyBaIE00LDE1IEw0LDE4IEw4LDE4IEw4LDE1IEw0LDE1IFogTTEwLDEzIEwxNCwxMyBMMTQsMTAgTDEwLDEwIEwxMCwxMyBaIE0xMCwxNSBMMTAsMTggTDE0LDE4IEwxNCwxNSBMMTAsMTUgWiBNMjAsMTMgTDIwLDEwIEwxNiwxMCBMMTYsMTMgTDIwLDEzIFogTTIwLDE1IEwxNiwxNSBMMTYsMTggTDIwLDE4IEwyMCwxNSBaIE00LDggTDgsOCBMOCw1IEw0LDUgTDQsOCBaIE0xMCw4IEwxNCw4IEwxNCw1IEwxMCw1IEwxMCw4IFogTTIwLDggTDIwLDUgTDE2LDUgTDE2LDggTDIwLDggWiBNNCwzIEwyMCwzIEMyMS4xMDQ1Njk1LDMgMjIsMy45NTEzOTQ5MSAyMiw1LjEyNSBMMjIsMTcuODc1IEMyMiwxOS4wNDg2MDUxIDIxLjEwNDU2OTUsMjAgMjAsMjAgTDQsMjAgQzIuODk1NDMwNSwyMCAyLDE5LjA0ODYwNTEgMiwxNy44NzUgTDIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgWlwiIC8+PC9HPjwvU1ZHPixcblxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0ZGVzY3JpcHRpb246IF9fKCAnRnVsbCB3aWR0aCBzZWN0aW9ucyB3cmFwcGVycyBmb3IgdGhlbWVzIHRoYXQgc3VwcG9ydCB0aGVtLicgKSxcblxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbICd3aWRlJywgJ2Z1bGwnIF0sXG5cdFx0aHRtbDogZmFsc2UsXG5cdH0sXG5cblx0ZGVwcmVjYXRlZDogW10sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGJhY2tncm91bmRNZWRpYToge1xuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0fSxcblx0XHRvdmVybGF5T3BhY2l0eToge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0Ym94TW9kZWw6IHtcblx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRwb3NpdGlvbjogeyB0b3A6IG51bGwsIGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIH0sXG5cdFx0XHRcdG1hcmdpbjogeyB0b3A6IG51bGwsIGxlZnQ6IG51bGwsIHJpZ2h0OiBudWxsLCBib3R0b206IG51bGwsIH0sXG5cdFx0XHRcdHBhZGRpbmc6IHsgdG9wOiBudWxsLCBsZWZ0OiBudWxsLCByaWdodDogbnVsbCwgYm90dG9tOiBudWxsLCB9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGlubmVyTWF4V2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcblx0XHR9LFxuXHR9LFxuXHRlZGl0OiBjb21wb3NlKFt3aXRoQ29sb3JzKCdiYWNrZ3JvdW5kQ29sb3InKV0pKCAocHJvcHMpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRib3hNb2RlbCxcblx0XHRcdG1heFdpZHRoLFxuXHRcdFx0YmFja2dyb3VuZE1lZGlhLFxuXHRcdFx0b3ZlcmxheU9wYWNpdHksXG5cdFx0fSA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3Qge1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yLFxuXHRcdFx0c2V0QmFja2dyb3VuZENvbG9yLFxuXHRcdH0gPSBwcm9wcztcblx0XHRjb25zdCBiYWNrZ3JvdW5kQ2xhc3MgPSAoYmFja2dyb3VuZENvbG9yICYmIGJhY2tncm91bmRDb2xvci5zbHVnKSA/IGAke2NsYXNzTmFtZX0tLSR7YmFja2dyb3VuZENvbG9yLnNsdWd9YCA6IHVuZGVmaW5lZDtcblx0XHRsZXQgYmFja2dyb3VuZEltYWdlID0gdW5kZWZpbmVkO1xuXHRcdGlmIChiYWNrZ3JvdW5kTWVkaWEgJiYgYmFja2dyb3VuZE1lZGlhLnR5cGUgPT09ICdpbWFnZScpIHtcblx0XHRcdGJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2JhY2tncm91bmRNZWRpYS51cmx9XCIpYDtcblx0XHR9XG5cdFx0Y29uc3Qgb3V0dGVyU3R5bGUgPSB7XG5cdFx0XHRtYXJnaW5Ub3A6IGJveE1vZGVsLm1hcmdpbi50b3AsXG5cdFx0XHRtYXJnaW5SaWdodDogYm94TW9kZWwubWFyZ2luLnJpZ2h0LFxuXHRcdFx0bWFyZ2luQm90dG9tOiBib3hNb2RlbC5tYXJnaW4uYm90dG9tLFxuXHRcdFx0bWFyZ2luTGVmdDogYm94TW9kZWwubWFyZ2luLmxlZnQsXG5cdFx0XHRwYWRkaW5nVG9wOiBib3hNb2RlbC5wYWRkaW5nLnRvcCxcblx0XHRcdHBhZGRpbmdSaWdodDogYm94TW9kZWwucGFkZGluZy5yaWdodCxcblx0XHRcdHBhZGRpbmdCb3R0b206IGJveE1vZGVsLnBhZGRpbmcuYm90dG9tLFxuXHRcdFx0cGFkZGluZ0xlZnQ6IGJveE1vZGVsLnBhZGRpbmcubGVmdCxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogKGJhY2tncm91bmRDb2xvcikgPyB1bmRlZmluZWQgOiBjdXN0b21CYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmRJbWFnZSxcblx0XHR9O1xuXHRcdGNvbnN0IGlubmVyU3R5bGUgPSB7XG5cdFx0XHRtYXhXaWR0aDogbWF4V2lkdGgsXG5cdFx0fTtcblx0XHRjb25zdCBvdmVybGF5U3R5bGUgPSB7XG5cdFx0XHRvcGFjaXR5OiBvdmVybGF5T3BhY2l0eSxcblx0XHR9O1xuXHRcdHJldHVybiAoW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPVwiQmFja2dyb3VuZCBTZXR0aW5nc1wiPlxuXHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0b25TZWxlY3Q9eyh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kTWVkaWE6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJywgJ3ZpZGVvJ119XG5cdFx0XHRcdFx0XHR2YWx1ZT17KGJhY2tncm91bmRNZWRpYSk/IGJhY2tncm91bmRNZWRpYS5pZDogbnVsbCB9XG5cdFx0XHRcdFx0XHRyZW5kZXI9eyh7IG9wZW4gfSkgPT4gKFtcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT17YmFja2dyb3VuZE1lZGlhID8gJ2ltYWdlLWJ1dHRvbicgOiAnYnV0dG9uIGJ1dHRvbi1sYXJnZSd9IG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0eydDaG9vc2UgQmFja2dyb3VuZCd9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHR7YmFja2dyb3VuZE1lZGlhICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi1zbWFsbCcgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kTWVkaWE6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsnUmVtb3ZlIEJhY2tncm91bmQnfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdF0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2JhY2tncm91bmRNZWRpYSAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIk92ZXJsYXkgT3BhY2l0eVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17b3ZlcmxheU9wYWNpdHl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7IHByb3BzLnNldEF0dHJpYnV0ZXMoeyBvdmVybGF5T3BhY2l0eTogdmFsdWUgfSk7IH19XG5cdFx0XHRcdFx0XHRtaW49XCIwXCJcblx0XHRcdFx0XHRcdG1heD1cIjAuOVwiXG5cdFx0XHRcdFx0XHRzdGVwPVwiMC4xXCJcblx0XHRcdFx0XHQvPn1cblx0XHRcdFx0XHQ8cD48L3A+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxDb2xvclBhbGV0dGVcblx0XHRcdFx0XHRcdFx0bGFiZWw9J0JhY2tncm91bmQgQ29sb3InXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsoYmFja2dyb3VuZENvbG9yKSA/IGJhY2tncm91bmRDb2xvci5jb2xvciA6IHVuZGVmaW5lZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldEJhY2tncm91bmRDb2xvcn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHA+PC9wPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlByb3BlcnRpZXNcIj5cblx0XHRcdFx0XHQ8Qm94TW9kZWxcblx0XHRcdFx0XHRcdGxhYmVsPVwiQm94IE1vZGVsXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtib3hNb2RlbH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgcHJvcHMuc2V0QXR0cmlidXRlcyh7IGJveE1vZGVsOiB2YWx1ZSB9KTsgfX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiTWF4IFdpZHRoXCJcblx0XHRcdFx0XHRcdHZhbHVlPXttYXhXaWR0aH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgcHJvcHMuc2V0QXR0cmlidXRlcyh7IG1heFdpZHRoOiB2YWx1ZSB9KTsgfX1cblx0XHRcdFx0XHRcdG1pbj1cIjY0MFwiXG5cdFx0XHRcdFx0XHRtYXg9XCIxNjAwXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0PHNlY3Rpb24gc3R5bGU9e291dHRlclN0eWxlfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gJHtiYWNrZ3JvdW5kQ2xhc3N9YH0+XG5cdFx0XHRcdHtiYWNrZ3JvdW5kTWVkaWEgJiYgPGRpdiBjbGFzcz17YCR7Y2xhc3NOYW1lfV9fb3ZlcmxheWB9IHN0eWxlPXtvdmVybGF5U3R5bGV9IC8+fVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfV9faW5uZXJgfSBzdHlsZT17aW5uZXJTdHlsZX0+XG5cdFx0XHRcdFx0PElubmVyQmxvY2tzIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdF0pO1xuXHR9KSxcblxuXHRzYXZlKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5ibG9ja3M7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuY29tcG9uZW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5jb21wb3NlOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVkaXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5lbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmkxOG47IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiXSwic291cmNlUm9vdCI6IiJ9