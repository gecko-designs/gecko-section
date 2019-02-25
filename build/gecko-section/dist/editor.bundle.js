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
/* harmony import */ var _type_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-select */ "./src/type-select.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);

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
    type: {
      type: 'string',
      //solid, image, ?video?
      default: 'solid'
    },
    bgMedia: {
      type: 'object'
    },
    opacity: {
      type: 'number',
      default: 0.7
    },
    bgColor: {
      type: 'string'
    }
  },
  styles: [{
    name: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full'),
    isDefault: true
  }, {
    name: 'lg',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large')
  }, {
    name: 'md',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium')
  }, {
    name: 'sm',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small')
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        insertBlocksAfter = _ref.insertBlocksAfter;
    var bgMedia = attributes.bgMedia,
        opacity = attributes.opacity,
        bgColor = attributes.bgColor,
        type = attributes.type,
        className = attributes.className;
    var bgImage;

    if (bgMedia && bgMedia.type === 'image') {
      bgImage = "url(\"".concat(bgMedia.url, "\")");
    }

    var styles = {
      '--background-color': bgColor,
      '--opacity': opacity
    };

    if (type === 'image' || type === 'video') {
      styles.backgroundImage = bgImage;
    }

    return [React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Background Settings"
    }, React.createElement(_type_select__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onSelect: function onSelect(next) {
        setAttributes({
          type: next
        });
      },
      value: type
    }), React.createElement("hr", null), type === 'image' && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      onSelect: function onSelect(value) {
        setAttributes({
          bgMedia: value
        });
      },
      type: ['image'],
      value: bgMedia ? bgMedia.id : null,
      render: function render(_ref2) {
        var open = _ref2.open;
        return [React.createElement("div", null, React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: bgMedia ? 'image-button' : 'button button-large',
          onClick: open
        }, 'Choose Background'), bgMedia && React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "button button-small",
          onClick: function onClick() {
            setAttributes({
              bgMedia: null
            });
          }
        }, 'Remove Background'))];
      }
    }), type === 'image' && React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Overlay Opacity",
      value: opacity,
      onChange: function onChange(value) {
        setAttributes({
          opacity: value
        });
      },
      min: "0",
      max: "0.9",
      step: "0.1"
    }), React.createElement("p", null), React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      label: "Background Color",
      value: bgColor ? bgColor : undefined,
      onChange: function onChange(value) {
        setAttributes({
          bgColor: value
        });
      }
    })), React.createElement("p", null))), React.createElement("div", {
      className: "gecko-section-editor ".concat(className, " gecko-section-editor--").concat(type),
      style: styles
    }, React.createElement("div", {
      className: "gecko-section-editor__content"
    }, 'undefined' !== typeof insertBlocksAfter && React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], null)))];
  },
  save: function save() {
    return React.createElement("div", null, React.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null));
  }
};

/***/ }),

/***/ "./src/type-select.js":
/*!****************************!*\
  !*** ./src/type-select.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

 // import { Fragment } from '@wordpress/element';

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var value = _ref.value,
      onSelect = _ref.onSelect;

  var selected = function selected(next) {
    return onSelect(next);
  };

  var types = [{
    slug: 'solid',
    name: 'Solid',
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "dashicons dashicons-admin-appearance"
    })
  }, {
    slug: 'image',
    name: 'Image',
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      class: "dashicons dashicons-format-image"
    })
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wp-block-gecko-grid-layout-type-select"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Choose a background type."), types.map(function (type) {
    var isSelected = "";

    if (type.slug === value) {
      isSelected = "wp-block-gecko-grid-layout-type-select__item--selected";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wp-block-gecko-grid-layout-type-select__item ".concat(isSelected),
      onClick: function onClick() {
        return selected(type.slug);
      }
    }, type.icon, type.name);
  }));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy90eXBlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuYmxvY2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cud3AuZWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LndwLmkxOG5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwic2VjdGlvbiIsIm5hbWUiLCJzZXR0aW5ncyIsInRpdGxlIiwiX18iLCJpY29uIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInN1cHBvcnRzIiwiYWxpZ24iLCJodG1sIiwiZGVwcmVjYXRlZCIsImF0dHJpYnV0ZXMiLCJ0eXBlIiwiZGVmYXVsdCIsImJnTWVkaWEiLCJvcGFjaXR5IiwiYmdDb2xvciIsInN0eWxlcyIsImxhYmVsIiwiaXNEZWZhdWx0IiwiZWRpdCIsInNldEF0dHJpYnV0ZXMiLCJpbnNlcnRCbG9ja3NBZnRlciIsImNsYXNzTmFtZSIsImJnSW1hZ2UiLCJ1cmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJuZXh0IiwidmFsdWUiLCJpZCIsIm9wZW4iLCJ1bmRlZmluZWQiLCJzYXZlIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsInR5cGVzIiwic2x1ZyIsIm1hcCIsImlzU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFJLENBQUNaLElBQWxJLENBREQ7QUFHQSxHQVJBLENBRkYsQ0FERDtBQWNBLEM7Ozs7Ozs7Ozs7O0FDekJELGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHVCIiwiZmlsZSI6ImVkaXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi93cC1jb250ZW50L3BsdWdpbnMvZ2Vja28tc2VjdGlvbi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQge3JlZ2lzdGVyQmxvY2tUeXBlfSBmcm9tICdAd29yZHByZXNzL2Jsb2Nrcyc7XG5cbi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCAqIGFzIHNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcblxucmVnaXN0ZXJCbG9ja1R5cGUoc2VjdGlvbi5uYW1lLCBzZWN0aW9uLnNldHRpbmdzKTtcbiIsImltcG9ydCBUeXBlU2VsZWN0IGZyb20gJy4vdHlwZS1zZWxlY3QnO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7XG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRCdXR0b24sXG5cdEcsXG5cdFNWRyxcblx0UGF0aFxufSBmcm9tICdAd29yZHByZXNzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtcblx0SW5uZXJCbG9ja3MsXG5cdE1lZGlhVXBsb2FkLFxuXHRJbnNwZWN0b3JDb250cm9scyxcblx0Q29sb3JQYWxldHRlLFxuXHRnZXRDb2xvckNsYXNzTmFtZSxcblx0Z2V0Q29sb3JPYmplY3RCeUNvbG9yVmFsdWUsXG5cdHdpdGhDb2xvcnMsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWRpdG9yJztcblxuLyoqXG4gKiBBbGxvd2VkIGJsb2NrcyBjb25zdGFudCBpcyBwYXNzZWQgdG8gSW5uZXJCbG9ja3MgcHJlY2lzZWx5IGFzIHNwZWNpZmllZCBoZXJlLlxuICogVGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheSBzaG91bGQgbmV2ZXIgY2hhbmdlLlxuICogVGhlIGFycmF5IHNob3VsZCBjb250YWluIHRoZSBuYW1lIG9mIGVhY2ggYmxvY2sgdGhhdCBpcyBhbGxvd2VkLlxuICogSW4gY29sdW1ucyBibG9jaywgdGhlIG9ubHkgYmxvY2sgd2UgYWxsb3cgaXMgJ2RtcC9ncmlkLWl0ZW0nLlxuICpcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ1tdfVxuKi9cbmV4cG9ydCBjb25zdCBuYW1lID0gJ2dlY2tvL3NlY3Rpb24nO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHRpdGxlOiBfXyggJ1NlY3Rpb24nICksXG5cblx0aWNvbjogPFNWRyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxQYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiIC8+PEc+PFBhdGggZD1cIk00LDE4IEwyMCwxOCBMMjAsNyBMNCw3IEw0LDE2IEwyMCwxNiBMMjAsMTggTDQsMTggWiBNMiw1LjEyNSBDMiwzLjk1MTM5NDkxIDIuODk1NDMwNSwzIDQsMyBMMjAsMyBDMjEuMTA0NTY5NSwzIDIyLDMuOTUxMzk0OTEgMjIsNS4xMjUgTDIyLDE3Ljg3NSBDMjIsMTkuMDQ4NjA1MSAyMS4xMDQ1Njk1LDIwIDIwLDIwIEw0LDIwIEMyLjkzNDkyNDAxLDIwIDIuMDY0Mjk4OTksMTkuMTE1NDIyNCAyLjAwMzQwMjc3LDE4IEwyLDUuMTI1IFpcIiAvPjwvRz48L1NWRz4sXG5cblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGRlc2NyaXB0aW9uOiBfXyggJ0Z1bGwgd2lkdGggc2VjdGlvbnMgd3JhcHBlcnMgZm9yIHRoZW1lcyB0aGF0IHN1cHBvcnQgdGhlbS4nICksXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogWyAnd2lkZScsICdmdWxsJyBdLFxuXHRcdGh0bWw6IGZhbHNlLFxuXHR9LFxuXG5cdGRlcHJlY2F0ZWQ6IFtdLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJywgLy9zb2xpZCwgaW1hZ2UsID92aWRlbz9cblx0XHRcdGRlZmF1bHQ6ICdzb2xpZCcsXG5cdFx0fSxcblx0XHRiZ01lZGlhOiB7XG5cdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHR9LFxuXHRcdG9wYWNpdHk6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMC43LFxuXHRcdH0sXG5cdFx0YmdDb2xvcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0fSxcblxuXHRzdHlsZXM6IFtcblx0XHR7IG5hbWU6ICdmdWxsJywgbGFiZWw6IF9fKCAnRnVsbCcpLCBpc0RlZmF1bHQ6IHRydWUgfSxcblx0XHR7IG5hbWU6ICdsZycsIGxhYmVsOiBfXyggJ0xhcmdlJykgfSxcblx0XHR7IG5hbWU6ICdtZCcsIGxhYmVsOiBfXyggJ01lZGl1bScpIH0sXG5cdFx0eyBuYW1lOiAnc20nLCBsYWJlbDogX18oICdTbWFsbCcpIH0sXG5cdF0sXG5cdGVkaXQ6ICh7YXR0cmlidXRlcyxzZXRBdHRyaWJ1dGVzLCBpbnNlcnRCbG9ja3NBZnRlcn0pID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRiZ01lZGlhLFxuXHRcdFx0b3BhY2l0eSxcblx0XHRcdGJnQ29sb3IsXG5cdFx0XHR0eXBlLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGxldCBiZ0ltYWdlO1xuXHRcdGlmIChiZ01lZGlhICYmIGJnTWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuXHRcdFx0YmdJbWFnZSA9IGB1cmwoXCIke2JnTWVkaWEudXJsfVwiKWA7XG5cdFx0fVxuXHRcdGNvbnN0IHN0eWxlcyA9IHtcblx0XHRcdCctLWJhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yLFxuXHRcdFx0Jy0tb3BhY2l0eSc6IG9wYWNpdHksXG5cdFx0fTtcblx0XHRpZih0eXBlID09PSAnaW1hZ2UnIHx8IHR5cGUgPT09ICd2aWRlbycpe1xuXHRcdFx0c3R5bGVzLmJhY2tncm91bmRJbWFnZSA9IGJnSW1hZ2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9XCJCYWNrZ3JvdW5kIFNldHRpbmdzXCI+XG5cdFx0XHRcdFx0PFR5cGVTZWxlY3QgXG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9IHsobmV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogbmV4dCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdHZhbHVlPXt0eXBlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0e3R5cGUgPT09ICdpbWFnZScgJiYgPE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRvblNlbGVjdD17KHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdFx0XHRcdGJnTWVkaWE6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR0eXBlPXtbJ2ltYWdlJ119XG5cdFx0XHRcdFx0XHR2YWx1ZT17KGJnTWVkaWEpPyBiZ01lZGlhLmlkOiBudWxsIH1cblx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoW1xuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPXtiZ01lZGlhID8gJ2ltYWdlLWJ1dHRvbicgOiAnYnV0dG9uIGJ1dHRvbi1sYXJnZSd9IG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0eydDaG9vc2UgQmFja2dyb3VuZCd9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHR7YmdNZWRpYSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tc21hbGwnIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmdNZWRpYTogbnVsbCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0eydSZW1vdmUgQmFja2dyb3VuZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XSl9XG5cdFx0XHRcdFx0Lz59XG5cdFx0XHRcdFx0e3R5cGUgPT09ICdpbWFnZScgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJPdmVybGF5IE9wYWNpdHlcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e29wYWNpdHl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KHZhbHVlKSA9PiB7IHNldEF0dHJpYnV0ZXMoeyBvcGFjaXR5OiB2YWx1ZSB9KTsgfX1cblx0XHRcdFx0XHRcdG1pbj1cIjBcIlxuXHRcdFx0XHRcdFx0bWF4PVwiMC45XCJcblx0XHRcdFx0XHRcdHN0ZXA9XCIwLjFcIlxuXHRcdFx0XHRcdC8+fVxuXHRcdFx0XHRcdDxwPjwvcD5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PENvbG9yUGFsZXR0ZVxuXHRcdFx0XHRcdFx0XHRsYWJlbD0nQmFja2dyb3VuZCBDb2xvcidcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyhiZ0NvbG9yKSA/IGJnQ29sb3IgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHsgXG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGJnQ29sb3I6IHZhbHVlIH0pOyBcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PHA+PC9wPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2BnZWNrby1zZWN0aW9uLWVkaXRvciAke2NsYXNzTmFtZX0gZ2Vja28tc2VjdGlvbi1lZGl0b3ItLSR7dHlwZX1gfSBzdHlsZT17c3R5bGVzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnZWNrby1zZWN0aW9uLWVkaXRvcl9fY29udGVudFwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGluc2VydEJsb2Nrc0FmdGVyKSAmJlxuXHRcdFx0XHRcdFx0PElubmVyQmxvY2tzIC8+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdF0pO1xuXHR9LFxuXG5cdHNhdmU6ICgpID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PElubmVyQmxvY2tzLkNvbnRlbnQgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG4iLCJpbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG4vLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih7dmFsdWUsIG9uU2VsZWN0fSl7XG5cdGNvbnN0IHNlbGVjdGVkID0gKG5leHQpID0+IHtcblx0XHRyZXR1cm4gb25TZWxlY3QobmV4dCk7XG5cdH1cblx0Y29uc3QgdHlwZXMgPSBbXG5cdFx0eyBzbHVnOiAnc29saWQnLCBuYW1lOiAnU29saWQnLCBpY29uOiA8c3BhbiBjbGFzcz1cImRhc2hpY29ucyBkYXNoaWNvbnMtYWRtaW4tYXBwZWFyYW5jZVwiPjwvc3Bhbj59LFxuXHRcdHsgc2x1ZzogJ2ltYWdlJywgbmFtZTogJ0ltYWdlJywgaWNvbjogPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC1pbWFnZVwiPjwvc3Bhbj59LFxuXHRcdC8vIHsgc2x1ZzogJ3ZpZGVvJywgbmFtZTogJ1ZpZGVvJywgaWNvbjogPHNwYW4gY2xhc3M9XCJkYXNoaWNvbnMgZGFzaGljb25zLWZvcm1hdC12aWRlb1wiPjwvc3Bhbj59LFxuXHRdXG5cdHJldHVybihcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LXR5cGUtc2VsZWN0XCI+XG5cdFx0XHQ8cD5DaG9vc2UgYSBiYWNrZ3JvdW5kIHR5cGUuPC9wPlxuXHRcdFx0e3R5cGVzLm1hcCgodHlwZSkgPT4ge1xuXHRcdFx0XHRsZXQgaXNTZWxlY3RlZCA9IFwiXCI7XG5cdFx0XHRcdGlmKHR5cGUuc2x1ZyA9PT0gdmFsdWUpe1xuXHRcdFx0XHRcdGlzU2VsZWN0ZWQgPSBcIndwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LXR5cGUtc2VsZWN0X19pdGVtLS1zZWxlY3RlZFwiXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHdwLWJsb2NrLWdlY2tvLWdyaWQtbGF5b3V0LXR5cGUtc2VsZWN0X19pdGVtICR7aXNTZWxlY3RlZH1gfSBvbkNsaWNrPXsoKT0+IHNlbGVjdGVkKHR5cGUuc2x1Zyl9Pnt0eXBlLmljb259e3R5cGUubmFtZX08L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdH0pfVxuXHRcdDwvZGl2PlxuXHQpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmJsb2NrczsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5jb21wb25lbnRzOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LndwLmVkaXRvcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5pMThuOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==