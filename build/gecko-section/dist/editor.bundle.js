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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);


var _settings;

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
var settings = (_settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Section'),
  icon: React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["G"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M4,18 L20,18 L20,7 L4,7 L4,16 L20,16 L20,18 L4,18 Z M2,5.125 C2,3.95139491 2.8954305,3 4,3 L20,3 C21.1045695,3 22,3.95139491 22,5.125 L22,17.875 C22,19.0486051 21.1045695,20 20,20 L4,20 C2.93492401,20 2.06429899,19.1154224 2.00340277,18 L2,5.125 Z"
  }))),
  category: 'layout',
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full width sections wrappers for themes that support them.'),
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  deprecated: [],
  attributes: {
    size: {
      type: 'string' //solid, image, ?video?

    }
  },
  styles: [{
    name: 'default',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default'),
    isDefault: true
  }]
}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_settings, "deprecated", [{
  migrate: function migrate() {},
  save: function save() {
    return React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null);
  }
}]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_settings, "edit", function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      insertBlocksAfter = _ref.insertBlocksAfter,
      className = _ref.className;
  var size = attributes.size;
  return [React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: "Settings"
  }, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Row Width",
    value: size,
    options: [{
      value: 'full',
      label: 'Full'
    }, {
      value: 'lg',
      label: 'Large'
    }, {
      value: 'md',
      label: 'Medium'
    }, {
      value: 'sm',
      label: 'Small'
    }],
    onChange: function onChange(size) {
      setAttributes({
        size: size
      });
    }
  }))), React.createElement("div", {
    className: "gecko-section ".concat(className, " is-size-").concat(size)
  }, React.createElement("div", {
    className: "gecko-section__inner"
  }, 'undefined' !== typeof insertBlocksAfter && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], null)))];
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_settings, "save", function save() {
  return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
}), _settings);

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

/***/ "@wordpress/editor":
/*!***********************************!*\
  !*** external "window.wp.editor" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.editor;

/***/ }),

/***/ "@wordpress/i18n":
/*!*********************************!*\
  !*** external "window.wp.i18n" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.wp.i18n;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5ibG9ja3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndpbmRvdy53cC5lZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuaTE4blwiIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwic2VjdGlvbiIsIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInN1cHBvcnRzIiwiYWxpZ24iLCJodG1sIiwiZGVwcmVjYXRlZCIsImF0dHJpYnV0ZXMiLCJzaXplIiwidHlwZSIsInN0eWxlcyIsImxhYmVsIiwiaXNEZWZhdWx0IiwibWlncmF0ZSIsInNhdmUiLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0QmxvY2tzQWZ0ZXIiLCJjbGFzc05hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7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Q0gsSUFBRCxFQUFVO0FBQ1RPLG1CQUFhLENBQUM7QUFDYlAsWUFBSSxFQUFFQTtBQURPLE9BQUQsQ0FBYjtBQUdBO0FBZEgsSUFERCxDQURELENBRE8sRUFzQlA7QUFBSyxhQUFTLDBCQUFtQlMsU0FBbkIsc0JBQXdDVCxJQUF4QztBQUFkLEtBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUVHLGdCQUFnQixPQUFPUSxpQkFBeEIsSUFDQSxvQkFBQyw2REFBRCxPQUhGLENBREQsQ0F0Qk8sQ0FBUjtBQStCQSxDQXBFbUIsbUdBc0VkLGdCQUFNO0FBQ1gsU0FBTyxpQ0FBSyxvQkFBQyw2REFBRCxDQUFhLE9BQWIsT0FBTCxDQUFQO0FBQ0EsQ0F4RW1CLGFBQWQsQzs7Ozs7Ozs7Ozs7QUM1QlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoiZWRpdG9yLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3dwLWNvbnRlbnQvcGx1Z2lucy9nZWNrby1zZWN0aW9uL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIHNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoc2VjdGlvbi5uYW1lLCBzZWN0aW9uLnNldHRpbmdzKTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQge1xuXHRQYW5lbEJvZHksXG5cdEcsXG5cdFNWRyxcblx0UGF0aCxcblx0U2VsZWN0Q29udHJvbCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCB7XG5cdElubmVyQmxvY2tzLFxuXHRJbnNwZWN0b3JDb250cm9scyxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lZGl0b3InO1xuXG5cbi8qKlxuICogQWxsb3dlZCBibG9ja3MgY29uc3RhbnQgaXMgcGFzc2VkIHRvIElubmVyQmxvY2tzIHByZWNpc2VseSBhcyBzcGVjaWZpZWQgaGVyZS5cbiAqIFRoZSBjb250ZW50cyBvZiB0aGUgYXJyYXkgc2hvdWxkIG5ldmVyIGNoYW5nZS5cbiAqIFRoZSBhcnJheSBzaG91bGQgY29udGFpbiB0aGUgbmFtZSBvZiBlYWNoIGJsb2NrIHRoYXQgaXMgYWxsb3dlZC5cbiAqIEluIGNvbHVtbnMgYmxvY2ssIHRoZSBvbmx5IGJsb2NrIHdlIGFsbG93IGlzICdkbXAvZ3JpZC1pdGVtJy5cbiAqXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiovXG5leHBvcnQgY29uc3QgbmFtZSA9ICdnZWNrby9zZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuXHR0aXRsZTogX18oICdTZWN0aW9uJyApLFxuXG5cdGljb246IDxTVkcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48UGF0aCBmaWxsPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDBWMHpcIiAvPjxHPjxQYXRoIGQ9XCJNNCwxOCBMMjAsMTggTDIwLDcgTDQsNyBMNCwxNiBMMjAsMTYgTDIwLDE4IEw0LDE4IFogTTIsNS4xMjUgQzIsMy45NTEzOTQ5MSAyLjg5NTQzMDUsMyA0LDMgTDIwLDMgQzIxLjEwNDU2OTUsMyAyMiwzLjk1MTM5NDkxIDIyLDUuMTI1IEwyMiwxNy44NzUgQzIyLDE5LjA0ODYwNTEgMjEuMTA0NTY5NSwyMCAyMCwyMCBMNCwyMCBDMi45MzQ5MjQwMSwyMCAyLjA2NDI5ODk5LDE5LjExNTQyMjQgMi4wMDM0MDI3NywxOCBMMiw1LjEyNSBaXCIgLz48L0c+PC9TVkc+LFxuXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcblxuXHRkZXNjcmlwdGlvbjogX18oICdGdWxsIHdpZHRoIHNlY3Rpb25zIHdyYXBwZXJzIGZvciB0aGVtZXMgdGhhdCBzdXBwb3J0IHRoZW0uJyApLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsgJ3dpZGUnLCAnZnVsbCcgXSxcblx0XHRodG1sOiBmYWxzZSxcblx0fSxcblxuXHRkZXByZWNhdGVkOiBbXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0c2l6ZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsIC8vc29saWQsIGltYWdlLCA/dmlkZW8/XG5cdFx0fSxcblx0fSxcblx0c3R5bGVzOiBbXG5cdFx0eyBuYW1lOiAnZGVmYXVsdCcsIGxhYmVsOiBfXyggJ0RlZmF1bHQnKSwgaXNEZWZhdWx0OiB0cnVlIH0sXG5cdF0sXG5cblx0ZGVwcmVjYXRlZDogW1xuXHRcdHtcblx0XHRcdG1pZ3JhdGUoKXt9LFxuXHRcdFx0c2F2ZSgpIHtcblx0XHRcdFx0cmV0dXJuIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+O1xuXHRcdFx0fSxcblx0XHR9XG5cdF0sXG5cblx0ZWRpdDogKHthdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBpbnNlcnRCbG9ja3NBZnRlciwgY2xhc3NOYW1lfSkgPT4ge1xuXHRcdGNvbnN0IHtzaXplfSA9IGF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4gKFtcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT1cIlNldHRpbmdzXCI+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiUm93IFdpZHRoXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgc2l6ZSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdFx0XHR7IHZhbHVlOiAnZnVsbCcsIGxhYmVsOiAnRnVsbCcgfSxcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ2xnJywgbGFiZWw6ICdMYXJnZScgfSxcblx0XHRcdFx0XHRcdFx0eyB2YWx1ZTogJ21kJywgbGFiZWw6ICdNZWRpdW0nIH0sXG5cdFx0XHRcdFx0XHRcdHsgdmFsdWU6ICdzbScsIGxhYmVsOiAnU21hbGwnIH0sXG5cdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlID0ge1xuXHRcdFx0XHRcdFx0XHQoc2l6ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZ2Vja28tc2VjdGlvbiAke2NsYXNzTmFtZX0gaXMtc2l6ZS0ke3NpemV9YH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2Vja28tc2VjdGlvbl9faW5uZXJcIj5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBpbnNlcnRCbG9ja3NBZnRlcikgJiZcblx0XHRcdFx0XHRcdDxJbm5lckJsb2NrcyAvPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRdKTtcblx0fSxcblxuXHRzYXZlOiAoKSA9PiB7XG5cdFx0cmV0dXJuKDxkaXY+PElubmVyQmxvY2tzLkNvbnRlbnQgLz48L2Rpdj4pO1xuXHR9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuYmxvY2tzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWRpdG9yOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmkxOG47Il0sInNvdXJjZVJvb3QiOiIifQ==