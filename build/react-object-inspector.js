(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ObjectInspector"] = factory(require("react"));
	else
		root["ObjectInspector"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ObjectInspector = __webpack_require__(1);
	
	Object.defineProperty(exports, 'ObjectInspector', {
	  enumerable: true,
	  get: function get() {
	    return _ObjectInspector.ObjectInspector;
	  }
	});
	
	var _TableInspector = __webpack_require__(6);
	
	Object.defineProperty(exports, 'TableInspector', {
	  enumerable: true,
	  get: function get() {
	    return _TableInspector.TableInspector;
	  }
	});
	
	var _ObjectValue = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./object/ObjectValue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	Object.defineProperty(exports, 'ObjectValue', {
	  enumerable: true,
	  get: function get() {
	    return _ObjectValue.ObjectValue;
	  }
	});
	
	var _ObjectPreview = __webpack_require__(5);
	
	Object.defineProperty(exports, 'ObjectPreview', {
	  enumerable: true,
	  get: function get() {
	    return _ObjectPreview.ObjectPreview;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(3);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _ObjectPreview = __webpack_require__(5);
	
	var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);
	
	var _objectStyles = __webpack_require__(4);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Styles
	
	
	var styles = {
	  base: {
	    fontFamily: 'Menlo, monospace',
	    fontSize: '11px',
	    lineHeight: '14px',
	    cursor: 'default'
	  },
	  propertyNodesContainer: {
	    paddingLeft: '12px'
	  },
	  unselectable: {
	    WebkitTouchCallout: 'none',
	    WebkitUserSelect: 'none',
	    KhtmlUserSelect: 'none',
	    MozUserSelect: 'none',
	    msUserSelect: 'none',
	    OUserSelect: 'none',
	    userSelect: 'none'
	  },
	  expandControl: {
	    color: '#6e6e6e',
	    fontSize: '10px',
	    marginRight: '3px',
	    whiteSpace: 'pre'
	  },
	  property: {
	    paddingTop: '2px'
	  }
	};
	
	var DEFAULT_ROOT_PATH = 'root';
	/**
	 * Convert wild card paths to concrete paths
	 * @param  {array} initialExpandedPaths  wild card paths
	 * @param  {object} data                 data object
	 * @param  {string} rootName             optional root name (if not specified will use DEFAULT_ROOT_PATH)
	 * @return {array}                       concrete paths
	 */
	var pathsFromWildcardPaths = function pathsFromWildcardPaths(wildcardPaths, data) {
	  var rootName = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_ROOT_PATH : arguments[2];
	
	  var paths = [];
	  if (wildcardPaths === undefined) {
	    return paths;
	  }
	  wildcardPaths.map(function (expandedPath) {
	    if (typeof expandedPath === 'string') {
	      (function () {
	        // wildcard names
	        // recursively populate paths with wildcard paths
	
	        var populatePaths = function populatePaths(curObject, curPath, i) {
	          var WILDCARD = "*";
	          if (i === names.length) {
	            paths.push(curPath);
	            return;
	          }
	          var name = names[i];
	          if (i === 0) {
	            if (name === rootName /*|| name === DEFAULT_ROOT_PATH*/ || name === WILDCARD) {
	              populatePaths(curObject, 'root', i + 1);
	            }
	          } else {
	            if (name === WILDCARD) {
	              for (var propertyName in curObject) {
	                if (curObject.hasOwnProperty(propertyName)) {
	                  var propertyValue = curObject[propertyName];
	                  if (ObjectInspector.isExpandable(propertyValue)) {
	                    populatePaths(propertyValue, curPath + '.' + propertyName, i + 1);
	                  } else {
	                    continue;
	                  }
	                }
	              }
	            } else {
	              var propertyValue = curObject[name];
	              if (ObjectInspector.isExpandable(propertyValue)) {
	                populatePaths(propertyValue, curPath + '.' + name, i + 1);
	              }
	            }
	          }
	        };
	
	        var names = expandedPath.split('.');
	        populatePaths(data, '', 0);
	      })();
	    }
	  });
	  return paths;
	};
	
	var ObjectInspector = function (_Component) {
	  _inherits(ObjectInspector, _Component);
	
	  _createClass(ObjectInspector, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // expanded paths need to be recalculated on new data arrival
	      var paths = pathsFromWildcardPaths(nextProps.initialExpandedPaths, nextProps.data, nextProps.name);
	
	      this.setState({
	        expandedPaths: paths.reduce(function (obj, path) {
	          obj[path] = true;return obj;
	        }, {})
	      });
	    } // path is dot separated property names to reach the current node
	
	  }]);
	
	  function ObjectInspector(props) {
	    _classCallCheck(this, ObjectInspector);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectInspector).call(this, props));
	
	    if (props.depth === 0) {
	      // root node
	
	      var paths = pathsFromWildcardPaths(props.initialExpandedPaths, props.data, props.name);
	      _this.state = {
	        // expand every path
	        expandedPaths: paths.reduce(function (obj, path) {
	          obj[path] = true;return obj;
	        }, {})
	      };
	    }
	    return _this;
	  }
	
	  _createClass(ObjectInspector, [{
	    key: 'getExpanded',
	    value: function getExpanded(path) {
	      var expandedPaths = this.state.expandedPaths;
	      if (expandedPaths !== undefined && typeof expandedPaths[path] !== 'undefined') {
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
	      if (typeof _react2.default.initializeTouchEvents === 'function') {
	        _react2.default.initializeTouchEvents(true);
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
	            propertyNodes.push(_react2.default.createElement(ObjectInspector, { getExpanded: getExpanded,
	              setExpanded: setExpanded,
	              path: this.props.path + '.' + propertyName // TODO: escape '.' in propertyName
	              , depth: this.props.depth + 1,
	              key: propertyName,
	              name: propertyName,
	              data: propertyValue }));
	          }
	        }
	        propertyNodesContainer = _react2.default.createElement(
	          'div',
	          { style: styles.propertyNodesContainer },
	          propertyNodes
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.base },
	        _react2.default.createElement(
	          'span',
	          { style: styles.property, onClick: this.handleClick.bind(this) },
	          _react2.default.createElement(
	            'span',
	            { style: _extends({}, styles.expandControl, styles.unselectable) },
	            expandGlyph
	          ),
	          function () {
	            if (typeof name !== 'undefined') {
	              return _react2.default.createElement(
	                'span',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  { style: _objectStyles2.default.name },
	                  name
	                ),
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  ': '
	                ),
	                _react2.default.createElement(_ObjectDescription2.default, { object: data })
	              );
	            } else {
	              return _react2.default.createElement(_ObjectPreview2.default, { object: data });
	            }
	          }()
	        ),
	        propertyNodesContainer
	      );
	    }
	  }], [{
	    key: 'isExpandable',
	    value: function isExpandable(data) {
	      return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data !== null && Object.keys(data).length > 0;
	    }
	  }]);
	
	  return ObjectInspector;
	}(_react.Component);
	
	ObjectInspector.defaultProps = {
	  name: void 0,
	  data: undefined,
	  initialExpandedPaths: undefined,
	  depth: 0,
	  path: DEFAULT_ROOT_PATH
	};
	exports.default = ObjectInspector;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectStyles = __webpack_require__(4);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Styles
	
	
	/**
	 * A short description of the object
	 */
	
	var ObjectDescription = function (_Component) {
	  _inherits(ObjectDescription, _Component);
	
	  function ObjectDescription() {
	    _classCallCheck(this, ObjectDescription);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectDescription).apply(this, arguments));
	  }
	
	  _createClass(ObjectDescription, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      switch (typeof object === 'undefined' ? 'undefined' : _typeof(object)) {
	        case 'number':
	          return _react2.default.createElement(
	            'span',
	            { style: _objectStyles2.default.value.number },
	            object
	          );
	        case 'string':
	          return _react2.default.createElement(
	            'span',
	            { style: _objectStyles2.default.value.string },
	            '"',
	            object,
	            '"'
	          );
	        case 'boolean':
	          return _react2.default.createElement(
	            'span',
	            { style: _objectStyles2.default.value.boolean },
	            String(object)
	          );
	        case 'undefined':
	          return _react2.default.createElement(
	            'span',
	            { style: _objectStyles2.default.value.undefined },
	            'undefined'
	          );
	        case 'object':
	          if (object === null) {
	            return _react2.default.createElement(
	              'span',
	              { style: _objectStyles2.default.value.null },
	              'null'
	            );
	          }
	          if (object instanceof Date) {
	            return _react2.default.createElement(
	              'span',
	              null,
	              object.toString()
	            );
	          }
	          if (Array.isArray(object)) {
	            return _react2.default.createElement(
	              'span',
	              null,
	              'Array[' + object.length + ']'
	            );
	          }
	          return _react2.default.createElement(
	            'span',
	            null,
	            'Object'
	          );
	        case 'function':
	          return _react2.default.createElement(
	            'span',
	            null,
	            _react2.default.createElement(
	              'span',
	              { style: _objectStyles2.default.value.function.keyword },
	              'function'
	            ),
	            _react2.default.createElement(
	              'span',
	              { style: _objectStyles2.default.value.function.name },
	              ' ',
	              object.name,
	              '()'
	            )
	          );
	        case 'symbol':
	          return _react2.default.createElement(
	            'span',
	            { style: _objectStyles2.default.value.symbol },
	            'Symbol()'
	          );
	        default:
	          return _react2.default.createElement('span', null);
	      }
	    }
	  }]);
	
	  return ObjectDescription;
	}(_react.Component);

	exports.default = ObjectDescription;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: {
	    color: 'rgb(136, 19, 145)'
	  },
	  value: {
	    null: {
	      color: 'rgb(128, 128, 128)'
	    },
	    undefined: {
	      color: 'rgb(128, 128, 128)'
	    },
	    string: {
	      color: 'rgb(196, 26, 22)'
	    },
	    symbol: {
	      color: 'rgb(196, 26, 22)'
	    },
	    number: {
	      color: 'rgb(28, 0, 207)'
	    },
	    boolean: {
	      color: 'rgb(28, 0, 207)'
	    },
	    function: {
	      keyword: {
	        color: 'rgb(170, 13, 145)',
	        fontStyle: 'italic'
	      },
	      name: {
	        fontStyle: 'italic'
	      }
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(3);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _objectStyles = __webpack_require__(4);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Styles
	
	
	var styles = {
	  preview: {
	    fontStyle: 'italic'
	  }
	};
	
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
	
	var ObjectPreview = function (_Component) {
	  _inherits(ObjectPreview, _Component);
	
	  function ObjectPreview() {
	    _classCallCheck(this, ObjectPreview);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectPreview).apply(this, arguments));
	  }
	
	  _createClass(ObjectPreview, [{
	    key: 'render',
	    value: function render() {
	      var object = this.props.object;
	      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || object === null) {
	        return _react2.default.createElement(_ObjectDescription2.default, { object: object });
	      }
	
	      if (Array.isArray(object)) {
	        return _react2.default.createElement(
	          'span',
	          { style: styles.preview },
	          '[',
	          intersperse(object.map(function (element, index) {
	            return _react2.default.createElement(_ObjectDescription2.default, { key: index, object: element });
	          }), ", "),
	          ']'
	        );
	      } else if (object instanceof Date) {
	        return _react2.default.createElement(
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
	              ellipsis = _react2.default.createElement(
	                'span',
	                { key: 'ellipsis' },
	                '…'
	              );
	            }
	            propertyNodes.push(_react2.default.createElement(
	              'span',
	              { key: propertyName },
	              _react2.default.createElement(
	                'span',
	                { style: _objectStyles2.default.name },
	                propertyName
	              ),
	              ': ',
	              _react2.default.createElement(_ObjectDescription2.default, { object: propertyValue }),
	              ellipsis
	            ));
	            if (ellipsis) break;
	          }
	        }
	
	        return _react2.default.createElement(
	          'span',
	          { style: styles.preview },
	          'Object {',
	          intersperse(propertyNodes, ", "),
	          '}'
	        );
	      }
	    } // maximum properties displayed in preview
	
	  }]);
	
	  return ObjectPreview;
	}(_react.Component);
	
	ObjectPreview.defaultProps = {
	  maxProperties: 5
	};
	exports.default = ObjectPreview;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * Specs:
	                                                                                                                                                                                                                                                   * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
	                                                                                                                                                                                                                                                   * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
	                                                                                                                                                                                                                                                   */
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(3);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _glyphs = __webpack_require__(7);
	
	var _unselectable = __webpack_require__(8);
	
	var _unselectable2 = _interopRequireDefault(_unselectable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var styles = {
	  base: {
	    position: 'relative',
	    border: '1px solid #aaa',
	    fontFamily: 'Menlo, monospace',
	    fontSize: '11px',
	    lineHeight: '120%',
	    boxSizing: 'border-box',
	    cursor: 'default'
	  },
	  table: {},
	  th: {
	    position: 'relative', // anchor for sort icon container
	    height: 'auto',
	    textAlign: 'left',
	    backgroundColor: '#eee',
	    borderBottom: '1px solid #aaa',
	    fontWeight: 'normal',
	    verticalAlign: 'middle',
	    padding: '0 4px',
	
	    whiteSpace: 'nowrap',
	    textOverflow: 'ellipsis',
	    overflow: 'hidden',
	    lineHeight: '14px'
	  },
	  'th:hover': {
	    backgroundColor: 'hsla(0, 0%, 90%, 1)'
	  },
	  // th > div
	  th_div: {
	    whiteSpace: 'nowrap',
	    textOverflow: 'ellipsis',
	    overflow: 'hidden',
	
	    // otherwise it's overriden by user agent stylesheet
	    fontSize: '11px',
	    lineHeight: '120%'
	  },
	  tr: {
	    display: 'table-row'
	  },
	  td: {
	    height: '16px',
	    verticalAlign: 'top',
	    padding: '1px 4px',
	    WebkitUserSelect: 'text',
	
	    whiteSpace: 'nowrap',
	    textOverflow: 'ellipsis',
	    overflow: 'hidden',
	    lineHeight: '14px'
	  },
	  leftBorder: {
	    none: {
	      borderLeft: 'none'
	    },
	    solid: {
	      borderLeft: '1px solid #aaa'
	    }
	  }
	};
	
	function getHeaders(data) {
	  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	    // is an array
	    if (Array.isArray(data)) {
	      // 0..nRows-1 are row indexes
	      var nRows = data.length;
	
	      // nCol is the max number of columns in all rows
	      // Time complexity: O(nRows)
	      var nCols = data.reduce(function (nCols, row) {
	        if (Array.isArray(row)) {
	          if (row.length > nCols) {
	            nCols = row.length;
	          }
	          return nCols;
	        } else {
	          return 0;
	        }
	      }, 0);
	
	      return {
	        rowHeaders: [].concat(_toConsumableArray(Array(nRows).keys())), // 0..nRows - 1
	        colHeaders: [].concat(_toConsumableArray(Array(nCols).keys())) };
	    }
	    // is an object
	    else // 0..nCols - 1
	      if (data !== null) {
	        // keys are row indexes
	        var keys = Object.keys(data);
	
	        // Time complexity: O(nRows * nCols)
	        var colHeaders = keys.reduce(function (colHeaders, key) {
	          var row = data[key];
	          if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) === 'object' && row !== null) {
	            var cols = Object.keys(row);
	            cols.reduce(function (xs, x) {
	              if (!xs.includes(x)) {
	                xs.push(x);
	              }
	              return xs;
	            }, colHeaders);
	          }
	          return colHeaders;
	        }, []);
	        return {
	          rowHeaders: keys,
	          colHeaders: colHeaders
	        };
	      }
	  }
	  return undefined;
	}
	
	var SortIconContainer = function SortIconContainer(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        position: 'absolute',
	        top: 1,
	        right: 0,
	        bottom: 1,
	        display: 'flex',
	        alignItems: 'center'
	      } },
	    props.children
	  );
	};
	
	var SortIcon = function SortIcon(_ref) {
	  var sortAscending = _ref.sortAscending;
	
	  var glyph = sortAscending ? _glyphs.upArrow : _glyphs.downArrow;
	  return _react2.default.createElement(
	    'div',
	    { style: Object.assign({
	        display: 'block',
	        marginRight: 3, // 4,
	        width: 8,
	        height: 7,
	
	        marginTop: -7,
	        color: '#6e6e6e', //'rgb(48, 57, 66)'
	        fontSize: 12
	      }, // lineHeight: 14
	      _unselectable2.default) },
	    glyph
	  );
	};
	
	var TH = function (_Component) {
	  _inherits(TH, _Component);
	
	  function TH(props) {
	    _classCallCheck(this, TH);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TH).call(this, props));
	
	    _this.state = { hovered: false };
	    return _this;
	  }
	
	  _createClass(TH, [{
	    key: 'toggleHovered',
	    value: function toggleHovered(e) {
	      this.setState({ hovered: !this.state.hovered });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // either not sorted, sort ascending or sort descending
	      var sortAscending = this.props.sortAscending;
	      var sorted = this.props.sorted;
	
	      return _react2.default.createElement(
	        'th',
	        _extends({}, this.props, {
	          style: _extends({}, styles.th, this.props.borderStyle, this.state.hovered ? this.props.hoveredStyle : {}),
	          onMouseEnter: this.toggleHovered.bind(this),
	          onMouseLeave: this.toggleHovered.bind(this),
	          onClick: this.props.onClick }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.th_div },
	          this.props.children
	        ),
	        function () {
	          if (sorted) {
	            return _react2.default.createElement(
	              SortIconContainer,
	              null,
	              _react2.default.createElement(SortIcon, { sortAscending: sortAscending })
	            );
	          }
	        }()
	      );
	    }
	  }]);
	
	  return TH;
	}(_react.Component);
	
	TH.defaultProps = {
	  sortAscending: false,
	  sorted: false,
	  hoveredStyle: styles['th:hover'],
	  borderStyle: styles.leftBorder.solid,
	  onClick: undefined
	};
	
	var HeaderContainer = function HeaderContainer(_ref2) {
	  var indexColumnText = _ref2.indexColumnText;
	  var columns = _ref2.columns;
	  var sorted = _ref2.sorted;
	  var sortIndexColumn = _ref2.sortIndexColumn;
	  var sortColumn = _ref2.sortColumn;
	  var sortAscending = _ref2.sortAscending;
	  var onTHClick = _ref2.onTHClick;
	  var onIndexTHClick = _ref2.onIndexTHClick;
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        top: 0,
	        height: '17px',
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      } },
	    _react2.default.createElement(
	      'table',
	      { style: {
	          tableLayout: 'fixed',
	          borderSpacing: '0',
	          borderCollapse: 'separate',
	          height: '100%',
	          width: '100%'
	        } },
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            TH,
	            { borderStyle: styles.leftBorder.none,
	              sorted: sorted && sortIndexColumn,
	              sortAscending: sortAscending,
	              onClick: onIndexTHClick },
	            indexColumnText
	          ),
	          columns.map(function (column) {
	            return _react2.default.createElement(
	              TH,
	              { key: column,
	                sorted: sorted && sortColumn === column,
	                sortAscending: sortAscending,
	                onClick: onTHClick.bind(undefined, column) },
	              column
	            );
	          })
	        )
	      )
	    )
	  );
	};
	
	HeaderContainer.defaultProps = {
	  indexColumnText: '(index)',
	  columns: []
	};
	
	var DataContainer = function DataContainer(_ref3) {
	  var rows = _ref3.rows;
	  var columns = _ref3.columns;
	  var rowsData = _ref3.rowsData;
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        position: 'static',
	        top: '17px',
	        bottom: 0,
	        overflowY: 'overlay',
	        transform: 'translateZ(0)',
	
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      } },
	    _react2.default.createElement(
	      'table',
	      { style: {
	          positon: 'static',
	          left: 0,
	          top: 0,
	          right: 0,
	          bottom: 0,
	          borderTop: '0 none transparent',
	          backgroundImage: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
	          backgroundSize: '128px 32px',
	          tableLayout: 'fixed',
	
	          // table
	          borderSpacing: '0',
	          borderCollapse: 'separate',
	          // height: '100%',
	          width: '100%',
	
	          fontSize: '11px',
	          lineHeight: '120%'
	        } },
	      _react2.default.createElement('colgroup', null),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        rows.map(function (row, i) {
	          return _react2.default.createElement(
	            'tr',
	            { key: row, style: styles.tr },
	            _react2.default.createElement(
	              'td',
	              { style: _extends({}, styles.td, styles.leftBorder.none) },
	              row
	            ),
	            columns.map(function (column) {
	              var rowData = rowsData[i];
	              if (rowData.hasOwnProperty(column)) {
	                return _react2.default.createElement(
	                  'td',
	                  { key: column, style: _extends({}, styles.td, styles.leftBorder.solid) },
	                  _react2.default.createElement(_ObjectDescription2.default, { object: rowData[column] })
	                );
	              } else {
	                return _react2.default.createElement('td', { key: column, style: _extends({}, styles.td, styles.leftBorder.solid) });
	              }
	            })
	          );
	        })
	      )
	    )
	  );
	};
	
	// import ObjectInspector from '../object-inspector/ObjectInspector'
	
	var TableInspector = function (_Component2) {
	  _inherits(TableInspector, _Component2);
	
	  function TableInspector(props) {
	    _classCallCheck(this, TableInspector);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(TableInspector).call(this, props));
	
	    _this2.state = {
	      sorted: false, // has user ever clicked the <th> tag to sort?
	      sortIndexColumn: false, // is index column sorted?
	      sortColumn: undefined, // which column is sorted?
	      sortAscending: false // is sorting ascending or descending?
	    };
	    return _this2;
	  }
	
	  _createClass(TableInspector, [{
	    key: 'handleIndexTHClick',
	    value: function handleIndexTHClick() {
	      this.setState({
	        sorted: true,
	        sortIndexColumn: true,
	        sortColumn: undefined,
	        // when changed to a new column, default to asending
	        sortAscending: this.state.sortIndexColumn ? !this.state.sortAscending : true
	      });
	    }
	  }, {
	    key: 'handleTHClick',
	    value: function handleTHClick(col) {
	      this.setState({
	        sorted: true,
	        sortIndexColumn: false,
	        sortColumn: col,
	        sortAscending: col === this.state.sortColumn ? !this.state.sortAscending : true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var data = this.props.data;
	      var columns = this.props.columns;
	      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) {
	        return _react2.default.createElement('div', null);
	      }
	
	      var _getHeaders = getHeaders(data);
	
	      var rowHeaders = _getHeaders.rowHeaders;
	      var colHeaders = _getHeaders.colHeaders;
	
	      // columns to be displayed are specified
	      // NOTE: there's some space for optimization here
	
	      if (columns !== undefined) {
	        colHeaders = columns;
	      }
	
	      var rowsData = rowHeaders.map(function (rowHeader) {
	        return data[rowHeader];
	      });
	
	      var sorted = this.state.sorted,
	          sortIndexColumn = this.state.sortIndexColumn,
	          sortColumn = this.state.sortColumn,
	          sortAscending = this.state.sortAscending;
	
	      var columnDataWithRowIndexes = undefined; /* row indexes are [0..nRows-1] */
	      // TODO: refactor
	      if (sortColumn !== undefined) {
	        // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
	        columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
	          var columnData = rowData[sortColumn];
	          return [columnData, index];
	        });
	      } else {
	        if (sortIndexColumn) {
	          columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
	            var columnData = rowHeaders[index];
	            return [columnData, index];
	          });
	        }
	      }
	      if (columnDataWithRowIndexes !== undefined) {
	        // apply a mapper before sorting (because we need to access inside a container)
	        var comparator = function comparator(mapper, ascending) {
	          return function (a, b) {
	            var v1 = mapper(a); // the datum
	            var v2 = mapper(b);
	            var type1 = typeof v1 === 'undefined' ? 'undefined' : _typeof(v1);
	            var type2 = typeof v2 === 'undefined' ? 'undefined' : _typeof(v2);
	            // use '<' operator to compare same type of values or compare type precedence order #
	            var lt = function lt(v1, v2) {
	              if (v1 < v2) {
	                return -1;
	              } else if (v1 > v2) {
	                return 1;
	              } else {
	                return 0;
	              }
	            };
	            var result = undefined;
	            if (type1 === type2) {
	              result = lt(v1, v2);
	            } else {
	              // order of different types
	              var order = { 'string': 0, 'number': 1, 'object': 2, 'symbol': 3, 'boolean': 4, 'undefined': 5, 'function': 6 };
	              result = lt(order[type1], order[type2]);
	            }
	            // reverse result if descending
	            if (!ascending) result = -result;
	            return result;
	          };
	        };
	        var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
	          return item[0];
	        }, sortAscending)).map(function (item) {
	          return item[1];
	        }); // sorted row indexes
	        rowHeaders = sortedRowIndexes.map(function (i) {
	          return rowHeaders[i];
	        });
	        rowsData = sortedRowIndexes.map(function (i) {
	          return rowsData[i];
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.base },
	        _react2.default.createElement(HeaderContainer, { columns: colHeaders
	          /* for sorting */
	          , sorted: this.state.sorted,
	          sortIndexColumn: this.state.sortIndexColumn,
	          sortColumn: this.state.sortColumn,
	          sortAscending: this.state.sortAscending,
	          onTHClick: this.handleTHClick.bind(this),
	          onIndexTHClick: this.handleIndexTHClick.bind(this) }),
	        _react2.default.createElement(DataContainer, { rows: rowHeaders,
	          columns: colHeaders,
	          rowsData: rowsData })
	      );
	    }
	  }]);
	
	  return TableInspector;
	}(_react.Component);
	
	exports.default = TableInspector;
	
	
	TableInspector.propTypes = {
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]),
	  columns: _react2.default.PropTypes.array
	};
	
	TableInspector.defaultProps = {
	  data: undefined,
	  columns: undefined
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// http://unicode-table.com/en/sets/arrows-symbols/
	
	var upArrow = exports.upArrow = '▲';
	var downArrow = exports.downArrow = '▼';
	var rightArrow = exports.rightArrow = '▶';

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  WebkitTouchCallout: 'none',
	  WebkitUserSelect: 'none',
	  KhtmlUserSelect: 'none',
	  MozUserSelect: 'none',
	  msUserSelect: 'none',
	  OUserSelect: 'none',
	  userSelect: 'none'
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-object-inspector.map