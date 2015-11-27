(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ObjectInspector"] = factory(require("react"));
	else
		root["ObjectInspector"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(2);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _ObjectPreview = __webpack_require__(3);
	
	var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);
	
	__webpack_require__(4);
	
	var DEFAULT_ROOT_PATH = 'root';
	
	var ObjectInspector = (function (_Component) {
	  _inherits(ObjectInspector, _Component);
	
	  _createClass(ObjectInspector, null, [{
	    key: 'defaultProps',
	    // path is dot separated property names to reach the current node
	    value: {
	      name: void 0,
	      data: undefined,
	      initialExpandedPaths: undefined,
	      depth: 0,
	      path: DEFAULT_ROOT_PATH
	    },
	    enumerable: true
	  }]);
	
	  function ObjectInspector(props) {
	    var _this = this;
	
	    _classCallCheck(this, ObjectInspector);
	
	    _get(Object.getPrototypeOf(ObjectInspector.prototype), 'constructor', this).call(this, props);
	
	    if (props.depth === 0) {
	      this.state = { expandedPaths: {} };
	      this.state.expandedPaths[props.path] = false;
	
	      // initialize expandedPaths with initialExpandedPaths
	      if (typeof props.initialExpandedPaths !== 'undefined') {
	        props.initialExpandedPaths.map(function (expandedPath) {
	          if (typeof expandedPath === 'string') {
	            (function () {
	              var wildcardPathToPaths = function wildcardPathToPaths(curObject, curPath, i) {
	                var WILDCARD = "*";
	                if (i === names.length) {
	                  paths.push(curPath);
	                  return;
	                }
	                var name = names[i];
	                if (i === 0) {
	                  if (name === props.name || name === DEFAULT_ROOT_PATH || name === WILDCARD) {
	                    wildcardPathToPaths(curObject, 'root', i + 1);
	                  }
	                } else {
	                  if (name === WILDCARD) {
	                    for (var propertyName in curObject) {
	                      if (curObject.hasOwnProperty(propertyName)) {
	                        var propertyValue = curObject[propertyName];
	                        if (ObjectInspector.isExpandable(propertyValue)) {
	                          wildcardPathToPaths(propertyValue, curPath + '.' + propertyName, i + 1);
	                        } else {
	                          continue;
	                        }
	                      }
	                    }
	                  } else {
	                    var propertyValue = curObject[name];
	                    if (ObjectInspector.isExpandable(propertyValue)) {
	                      wildcardPathToPaths(propertyValue, curPath + '.' + name, i + 1);
	                    }
	                  }
	                }
	              };
	
	              var names = expandedPath.split('.'); // wildcard names
	              var paths = [];
	
	              wildcardPathToPaths(props.data, '', 0);
	
	              paths.map(function (path) {
	                _this.state.expandedPaths[path] = true;
	              });
	            })();
	          }
	        });
	      }
	    }
	  }
	
	  _createClass(ObjectInspector, [{
	    key: 'getExpanded',
	    value: function getExpanded(path) {
	      var expandedPaths = this.state.expandedPaths;
	      if (typeof expandedPaths[path] !== 'undefined') {
	        return expandedPaths[path];
	      }
	      return false;
	    }
	  }, {
	    key: 'setExpanded',
	    value: function setExpanded(path, expanded) {
	      var expandedPaths = this.state.expandedPaths;
	      expandedPaths[path] = expanded;
	      this.setState({ expandedPaths: expandedPaths });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      // console.log(this.props.data);
	      if (ObjectInspector.isExpandable(this.props.data)) {
	        if (this.props.depth > 0) {
	          this.props.setExpanded(this.props.path, !this.props.getExpanded(this.props.path));
	        } else {
	          this.setExpanded(this.props.path, !this.getExpanded(this.props.path));
	        }
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      if (typeof _react2['default'].initializeTouchEvents === 'function') {
	        _react2['default'].initializeTouchEvents(true);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var data = this.props.data;
	      var name = this.props.name;
	
	      var setExpanded = this.props.depth === 0 ? this.setExpanded.bind(this) : this.props.setExpanded;
	      var getExpanded = this.props.depth === 0 ? this.getExpanded.bind(this) : this.props.getExpanded;
	      var expanded = getExpanded(this.props.path);
	
	      var expandGlyph = ObjectInspector.isExpandable(data) ? expanded ? '▼' : '▶' : this.props.depth === 0 ? '' // unnamed root node
	      : ' ';
	
	      var propertyNodesContainer = undefined;
	      if (expanded) {
	        var propertyNodes = [];
	
	        for (var propertyName in data) {
	          var propertyValue = data[propertyName];
	          if (data.hasOwnProperty(propertyName)) {
	            propertyNodes.push(_react2['default'].createElement(ObjectInspector, { getExpanded: getExpanded,
	              setExpanded: setExpanded,
	              path: this.props.path + '.' + propertyName,
	              depth: this.props.depth + 1,
	              key: propertyName,
	              name: propertyName,
	              data: propertyValue }));
	          }
	        }
	        propertyNodesContainer = _react2['default'].createElement(
	          'div',
	          { style: { paddingLeft: "12px" }, className: 'ObjectInspector-property-nodes-container' },
	          propertyNodes
	        );
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'ObjectInspector' },
	        this.props.depth === 0 ? _react2['default'].createElement(
	          'pre',
	          null,
	
	          // DEBUG
	          // state could be null
	          this.state ? JSON.stringify(this.state.expandedPaths, null, 2) : null
	        ) : undefined,
	        _react2['default'].createElement(
	          'span',
	          { className: 'ObjectInspector-property', onClick: this.handleClick.bind(this) },
	          _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-expand-control ObjectInspector-unselectable' },
	            expandGlyph
	          ),
	          (function () {
	            if (typeof name !== 'undefined') {
	              return _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement(
	                  'span',
	                  { className: 'ObjectInspector-object-name' },
	                  name
	                ),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  ': '
	                ),
	                _react2['default'].createElement(_ObjectDescription2['default'], { object: data })
	              );
	            } else {
	              return _react2['default'].createElement(_ObjectPreview2['default'], { object: data });
	            }
	          })()
	        ),
	        propertyNodesContainer
	      );
	    }
	  }], [{
	    key: 'isExpandable',
	    value: function isExpandable(data) {
	      return typeof data === 'object' && data !== null && Object.keys(data).length > 0;
	    }
	  }]);
	
	  return ObjectInspector;
	})(_react.Component);
	
	exports['default'] = ObjectInspector;
	module.exports = exports['default'];
	// initial paths of the nodes that are visible

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	/**
	 * A short description of the object
	 */
	
	var ObjectDescription = (function (_Component) {
	  _inherits(ObjectDescription, _Component);
	
	  function ObjectDescription() {
	    _classCallCheck(this, ObjectDescription);
	
	    _get(Object.getPrototypeOf(ObjectDescription.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ObjectDescription, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      switch (typeof object) {
	        case 'number':
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-number' },
	            object
	          );
	        case 'string':
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-string' },
	            '"',
	            object,
	            '"'
	          );
	        case 'boolean':
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-boolean' },
	            String(object)
	          ); // why simple {object} won't work?
	        case 'undefined':
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-undefined' },
	            'undefined'
	          );
	        case 'object':
	          if (object === null) {
	            return _react2['default'].createElement(
	              'span',
	              { className: 'ObjectInspector-object-value-null' },
	              'null'
	            );
	          }
	          if (object instanceof Date) {
	            return _react2['default'].createElement(
	              'span',
	              null,
	              object.toString()
	            );
	          }
	          if (Array.isArray(object)) {
	            return _react2['default'].createElement(
	              'span',
	              null,
	              'Array[' + object.length + ']'
	            );
	          }
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-object' },
	            'Object'
	          );
	        case 'function':
	          return _react2['default'].createElement(
	            'span',
	            null,
	            _react2['default'].createElement(
	              'span',
	              { className: 'ObjectInspector-object-value-function-keyword' },
	              'function'
	            ),
	            _react2['default'].createElement(
	              'span',
	              { className: 'ObjectInspector-object-value-function-name' },
	              ' ',
	              object.name,
	              '()'
	            )
	          );
	        case 'symbol':
	          return _react2['default'].createElement(
	            'span',
	            { className: 'ObjectInspector-object-value-symbol' },
	            'Symbol()'
	          );
	        default:
	          return _react2['default'].createElement('span', null);
	      }
	    }
	  }]);
	
	  return ObjectDescription;
	})(_react.Component);
	
	exports['default'] = ObjectDescription;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(2);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }
	
	  return arr.slice(1).reduce(function (xs, x, i) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}
	
	/**
	 * A preview of the object on root level node
	 */
	
	var ObjectPreview = (function (_Component) {
	  _inherits(ObjectPreview, _Component);
	
	  function ObjectPreview() {
	    _classCallCheck(this, ObjectPreview);
	
	    _get(Object.getPrototypeOf(ObjectPreview.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ObjectPreview, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      if (typeof object !== 'object' || object === null) {
	        return _react2['default'].createElement(_ObjectDescription2['default'], { object: object });
	      }
	
	      if (Array.isArray(object)) {
	        return _react2['default'].createElement(
	          'span',
	          { className: 'ObjectInspector-object-preview' },
	          '[',
	          intersperse(object.map(function (element, index) {
	            return _react2['default'].createElement(_ObjectDescription2['default'], { key: index, object: element });
	          }), ", "),
	          ']'
	        );
	      } else if (object instanceof Date) {
	        return _react2['default'].createElement(
	          'span',
	          null,
	          object.toString()
	        );
	      } else {
	        var propertyNodes = [];
	        for (var propertyName in object) {
	          var propertyValue = object[propertyName];
	          if (object.hasOwnProperty(propertyName)) {
	            var ellipsis = undefined;
	            if (propertyNodes.length === this.props.maxProperties - 1 && Object.keys(object).length > this.props.maxProperties) {
	              ellipsis = _react2['default'].createElement(
	                'span',
	                { key: 'ellipsis' },
	                '…'
	              );
	            }
	            propertyNodes.push(_react2['default'].createElement(
	              'span',
	              { key: propertyName },
	              _react2['default'].createElement(
	                'span',
	                { className: 'ObjectInspector-object-name' },
	                propertyName
	              ),
	              ': ',
	              _react2['default'].createElement(_ObjectDescription2['default'], { object: propertyValue }),
	              ellipsis
	            ));
	            if (ellipsis) break;
	          }
	        }
	
	        return _react2['default'].createElement(
	          'span',
	          { className: 'ObjectInspector-object-preview' },
	          'Object {',
	          intersperse(propertyNodes, ", "),
	          '}'
	        );
	      }
	    }
	  }], [{
	    key: 'defaultProps',
	    // maximum properties displayed in preview
	    value: {
	      maxProperties: 5
	    },
	    enumerable: true
	  }]);
	
	  return ObjectPreview;
	})(_react.Component);
	
	exports['default'] = ObjectPreview;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./react-object-inspector.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./react-object-inspector.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".ObjectInspector{\n  font-family: Menlo, monospace;\n  font-size: 11px;\n  line-height: 14px;\n  cursor: default;\n}\n\n.ObjectInspector-unselectable{\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.ObjectInspector-expand-control {\n  color: #6e6e6e;\n  font-size: 10px;\n  margin-right: 3px;\n  white-space: pre;\n}\n\n.ObjectInspector-property{\n  padding-top: 2px;\n}\n\n.ObjectInspector-object-name {\n  color: rgb(136, 19, 145);\n}\n\n.ObjectInspector-object-value-null, .ObjectInspector-object-value-undefined{\n  color: rgb(128, 128, 128);\n}\n\n.ObjectInspector-object-value-string{\n  color: rgb(196, 26, 22);\n}\n\n.ObjectInspector-object-value-symbol{\n  color: rgb(196, 26, 22);\n}\n\n.ObjectInspector-object-value-number, .ObjectInspector-object-value-boolean {\n  color: rgb(28, 0, 207);\n}\n\n.ObjectInspector-object-value-function-keyword{\n  color: rgb(170, 13, 145);\n  font-style: italic;\n}\n\n.ObjectInspector-object-value-function-name{\n  font-style: italic;\n}\n\n.ObjectInspector-object-preview{\n  font-style: italic;\n}\n\n.ObjectInspector-property-nodes-container{\n  padding-left: 12px\n}\n", ""]);
	
	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	"use strict";
	
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-object-inspector.map