(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactInspector"] = factory(require("react"));
	else
		root["ReactInspector"] = factory(root["React"]);
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableInspector = exports.ObjectInspector = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectInspector2 = __webpack_require__(2);
	
	var _ObjectInspector3 = _interopRequireDefault(_ObjectInspector2);
	
	var _TableInspector2 = __webpack_require__(10);
	
	var _TableInspector3 = _interopRequireDefault(_TableInspector2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	exports.ObjectInspector = _ObjectInspector3.default;
	exports.TableInspector = _TableInspector3.default;
	
	// NOTE: ObjectDecription and ObjectPreview can be used as building blocks, but currently their styles are not complete
	// export ObjectDecription from './object/ObjectDescription'
	// export ObjectPreview from './object/ObjectPreview'
	
	// Wrapping the inspectors
	
	var Inspector = function Inspector(_ref) {
	  var _ref$table = _ref.table;
	  var table = _ref$table === undefined ? false : _ref$table;
	  var data = _ref.data;
	
	  var rest = _objectWithoutProperties(_ref, ['table', 'data']);
	
	  if (table) {
	    return _react2.default.createElement(_TableInspector3.default, _extends({ data: data }, rest));
	  }
	
	  return _react2.default.createElement(_ObjectInspector3.default, _extends({ data: data }, rest));
	};
	
	Inspector.propTypes = {
	  data: _react2.default.PropTypes.any.isRequired,
	  name: _react2.default.PropTypes.string,
	  level: _react2.default.PropTypes.number,
	  path: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
	  table: _react2.default.PropTypes.bool
	};
	
	exports.default = Inspector;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectPreview = __webpack_require__(3);
	
	var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);
	
	var _glyphs = __webpack_require__(7);
	
	var _pathUtils = __webpack_require__(9);
	
	var _objectStyles = __webpack_require__(5);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import { DEFAULT_ROOT_PATH, isExpandable, getPathsState } from './pathUtils'
	
	
	// Styles
	
	
	var styles = {
	  base: {
	    fontFamily: 'Menlo, monospace',
	    fontSize: '11px',
	    lineHeight: '14px',
	    cursor: 'default'
	  },
	  propertyNodesBox: {
	    paddingLeft: '12px'
	  },
	  property: {
	    paddingTop: '2px'
	  }
	};
	
	// Wrapper around inspector
	var InspectorBox = function InspectorBox(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { style: styles.base },
	    children
	  );
	};
	
	// a box with left padding containing the property nodes
	var PropertyNodesBox = function PropertyNodesBox(_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(
	    'div',
	    { style: styles.propertyNodesBox },
	    children
	  );
	};
	
	var ObjectInspector = function (_Component) {
	  _inherits(ObjectInspector, _Component);
	
	  function ObjectInspector(props) {
	    _classCallCheck(this, ObjectInspector);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectInspector).call(this, props));
	
	    if (props.depth === 0) {
	      // root node
	      _this.state = {
	        expandedPaths: (0, _pathUtils.getPathsState)(props.expandLevel, props.expandPaths, props.data, props.name)
	      };
	    }
	    return _this;
	  }
	
	  _createClass(ObjectInspector, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.depth === 0) {
	        this.setState({
	          expandedPaths: (0, _pathUtils.getPathsState)(nextProps.expandLevel, nextProps.expandPaths, nextProps.data, nextProps.name, this.state.expandedPaths)
	        });
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
	      var isExpandable = (0, _pathUtils.getIsExpandable)(this.props.showNonenumerable);
	      if (isExpandable(this.props.data)) {
	        if (this.props.depth > 0) {
	          this.props.setExpanded(this.props.path, !this.props.getExpanded(this.props.path));
	        } else {
	          this.setExpanded(this.props.path, !this.getExpanded(this.props.path));
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var name = _props.name;
	      var _props2 = this.props;
	      var showNonenumerable = _props2.showNonenumerable;
	      var isNonenumerable = _props2.isNonenumerable;
	
	      var isExpandable = (0, _pathUtils.getIsExpandable)(this.props.showNonenumerable);
	
	      var _props3 = this.props;
	      var depth = _props3.depth;
	      var path = _props3.path;
	
	
	      var setExpanded = depth === 0 ? this.setExpanded.bind(this) : this.props.setExpanded;
	      var getExpanded = depth === 0 ? this.getExpanded.bind(this) : this.props.getExpanded;
	
	      var expanded = getExpanded(path);
	      var expandGlyph = void 0;
	      if (isExpandable(data)) {
	        expandGlyph = _react2.default.createElement(_glyphs.ExpandGlyph, { expanded: expanded });
	      } else {
	        // root node doesn't need placeholder
	        if (depth === 0) {
	          expandGlyph = _react2.default.createElement('span', null);
	        }
	        // placeholder so preview is properly aligned
	        else {
	            expandGlyph = _react2.default.createElement(_glyphs.ExpandGlyph, { empty: true });
	          }
	      }
	
	      // if current node is expanded render the property nodes
	      var propertyNodesBox = void 0;
	      if (expanded) {
	        (function () {
	          var propertyNodes = [];
	
	          Object.getOwnPropertyNames(data).forEach(function (propertyName) {
	            // enumerables
	            if (data.propertyIsEnumerable(propertyName)) {
	              var propertyValue = data[propertyName];
	              propertyNodes.push(_react2.default.createElement(ObjectInspector, { getExpanded: getExpanded,
	                setExpanded: setExpanded,
	                path: path + '.' + propertyName // TODO: escape '.' in propertyName
	                , depth: depth + 1,
	                key: propertyName,
	                name: propertyName,
	                data: propertyValue,
	                showNonenumerable: showNonenumerable }));
	            }
	            // non enumerables, only show if showNonenumerable is enabled
	            else if (showNonenumerable) {
	                var _propertyValue = void 0;
	                // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
	                // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
	                try {
	                  _propertyValue = data[propertyName];
	                } catch (e) {}
	
	                if (_propertyValue !== undefined) propertyNodes.push(_react2.default.createElement(ObjectInspector, { getExpanded: getExpanded,
	                  setExpanded: setExpanded,
	                  path: path + '.' + propertyName // TODO: escape '.' in propertyName
	                  , depth: depth + 1,
	                  key: propertyName,
	                  name: propertyName,
	                  data: _propertyValue,
	                  showNonenumerable: showNonenumerable,
	                  isNonenumerable: true }));
	              }
	          });
	
	          // Object.getPrototypeOf (__proto__)
	          if (showNonenumerable && data !== Object.prototype /* already added */) {
	              propertyNodes.push(_react2.default.createElement(ObjectInspector, { getExpanded: getExpanded,
	                setExpanded: setExpanded,
	                path: path + '.__proto__' // TODO: escape '.' in propertyName
	                , depth: depth + 1,
	                key: '__proto__',
	                name: '__proto__',
	                data: Object.getPrototypeOf(data),
	                showNonenumerable: showNonenumerable,
	                isNonenumerable: true }));
	            }
	
	          propertyNodesBox = _react2.default.createElement(
	            PropertyNodesBox,
	            null,
	            propertyNodes
	          );
	        })();
	      }
	
	      return _react2.default.createElement(
	        InspectorBox,
	        null,
	        _react2.default.createElement(
	          'span',
	          { style: styles.property, onClick: this.handleClick.bind(this) },
	          expandGlyph,
	          _react2.default.createElement(_ObjectPreview2.default, { object: data, name: name, isNonenumerable: isNonenumerable })
	        ),
	        propertyNodesBox
	      );
	    }
	  }]);
	
	  return ObjectInspector;
	}(_react.Component);
	
	exports.default = ObjectInspector;
	
	
	ObjectInspector.propTypes = {
	  name: _react.PropTypes.string,
	  data: _react.PropTypes.any,
	
	  showNonenumerable: _react.PropTypes.bool, // switch to show non-enumerable properties
	  isNonenumerable: _react.PropTypes.bool, // am myself a non-enumerable property? for styling purposes
	
	  expandLevel: _react.PropTypes.number,
	  expandPaths: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	
	  depth: _react.PropTypes.number.isRequired,
	  path: _react.PropTypes.string // path is dot separated property names to reach the current node
	};
	
	ObjectInspector.defaultProps = {
	  name: void 0,
	  data: undefined,
	
	  showNonenumerable: false,
	  isNonenumerable: false,
	
	  expandLevel: undefined,
	  expandPaths: undefined,
	
	  depth: 0,
	  path: _pathUtils.DEFAULT_ROOT_PATH
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(4);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _ObjectName = __webpack_require__(6);
	
	var _ObjectName2 = _interopRequireDefault(_ObjectName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* NOTE: Chrome console.log is italic */
	var styles = {
	  preview: {
	    fontStyle: 'italic'
	  }
	};
	
	/* intersperse arr with sep */
	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }
	
	  return arr.slice(1).reduce(function (xs, x) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}
	
	/**
	 * A preview of the object
	 * if isNonenumerable is specified, render the name dimmed
	 * if a name is specified, it will render a simplified preview with a short description
	 */
	var ObjectPreview = function ObjectPreview(_ref) {
	  var maxProperties = _ref.maxProperties;
	  var object = _ref.object;
	  var name = _ref.name;
	  var isNonenumerable = _ref.isNonenumerable;
	
	  if (typeof name !== 'undefined') {
	    var Colon = function Colon() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        ': '
	      );
	    };
	    return _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement(_ObjectName2.default, { name: name, dimmed: isNonenumerable }),
	      _react2.default.createElement(Colon, null),
	      _react2.default.createElement(_ObjectDescription2.default, { object: object })
	    );
	  }
	
	  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
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
	  } else {
	    var propertyNodes = [];
	    for (var propertyName in object) {
	      var propertyValue = object[propertyName];
	      if (object.hasOwnProperty(propertyName)) {
	        var ellipsis = void 0;
	        if (propertyNodes.length === maxProperties - 1 && Object.keys(object).length > maxProperties) {
	          ellipsis = _react2.default.createElement(
	            'span',
	            { key: 'ellipsis' },
	            '…'
	          );
	        }
	        propertyNodes.push(_react2.default.createElement(
	          'span',
	          { key: propertyName },
	          _react2.default.createElement(_ObjectName2.default, { name: propertyName }),
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
	};
	
	ObjectPreview.propTypes = {
	  maxProperties: _react.PropTypes.number,
	  isNonenumerable: _react.PropTypes.bool };
	// non enumerable object will be dimmed
	ObjectPreview.defaultProps = {
	  maxProperties: 5, // max number of properties shown in the property view
	  isNonenumerable: false
	};
	
	exports.default = ObjectPreview;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// Styles
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectStyles = __webpack_require__(5);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A short description of the object
	 */
	var ObjectDescription = function ObjectDescription(_ref) {
	  var object = _ref.object;
	
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
	      if (object instanceof RegExp) {
	        return _react2.default.createElement(
	          'span',
	          { style: _objectStyles2.default.value.regexp },
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
	        object.constructor.name
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
	};
	
	ObjectDescription.propTypes = {
	  object: _react2.default.PropTypes.any
	};
	
	exports.default = ObjectDescription;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: {
	    color: 'rgb(136, 19, 145)'
	  },
	  nameDimmed: {
	    color: 'rgb(136, 19, 145)',
	    opacity: 0.6
	  },
	  value: {
	    null: {
	      color: 'rgb(128, 128, 128)'
	    },
	    undefined: {
	      color: 'rgb(128, 128, 128)'
	    },
	    regexp: {
	      color: 'rgb(196, 26, 22)'
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectStyles = __webpack_require__(5);
	
	var _objectStyles2 = _interopRequireDefault(_objectStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ObjectName = function ObjectName(_ref) {
	  var name = _ref.name;
	  var dimmed = _ref.dimmed;
	  return _react2.default.createElement(
	    'span',
	    { style: dimmed ? _objectStyles2.default.nameDimmed : _objectStyles2.default.name },
	    name
	  );
	};
	
	// Styles
	
	
	exports.default = ObjectName;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ExpandGlyph = exports.rightArrow = exports.downArrow = exports.upArrow = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _unselectable = __webpack_require__(8);
	
	var _unselectable2 = _interopRequireDefault(_unselectable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// http://unicode-table.com/en/sets/arrows-symbols/
	var upArrow = exports.upArrow = '▲';
	var downArrow = exports.downArrow = '▼';
	var rightArrow = exports.rightArrow = '▶';
	
	var styles = {
	  expandGlyph: {
	    color: '#6e6e6e',
	    fontSize: '10px',
	    marginRight: '3px',
	    whiteSpace: 'pre'
	  }
	};
	
	// if placeholder is defined return placeholder, else return an arrow according to the expanded prop
	var ExpandGlyph = function ExpandGlyph(_ref) {
	  var expanded = _ref.expanded;
	  var empty = _ref.empty;
	
	  if (empty)
	    // a placeholder (space char) before keys
	    return _react2.default.createElement(
	      'span',
	      { style: _extends({}, styles.expandGlyph, _unselectable2.default) },
	      ' '
	    );else return _react2.default.createElement(
	    'span',
	    { style: _extends({}, styles.expandGlyph, _unselectable2.default) },
	    expanded ? downArrow : rightArrow
	  );
	};
	
	exports.ExpandGlyph = ExpandGlyph;

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

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var DEFAULT_ROOT_PATH = exports.DEFAULT_ROOT_PATH = '$';
	
	// this works for showNonenumerable === false
	var isExpandableNoShowNonenumerable = function isExpandableNoShowNonenumerable(data) {
	  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data !== null && Object.keys(data).length > 0;
	};
	
	// this works for showNonenumerable === true
	var isExpandableShowNonenumerable = function isExpandableShowNonenumerable(data) {
	  return (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data !== null || typeof data === 'function';
	};
	
	// generate isExpandable function
	var getIsExpandable = exports.getIsExpandable = function getIsExpandable(showNonenumerable) {
	  if (!showNonenumerable) return isExpandableNoShowNonenumerable;
	  return isExpandableShowNonenumerable;
	};
	
	var getPathsState = exports.getPathsState = function getPathsState(showNonenumerable, expandLevel, expandPaths, data, rootName) {
	  var initialState = arguments.length <= 5 || arguments[5] === undefined ? {} : arguments[5];
	
	  var isExpandable = getIsExpandable(showNonenumerable);
	  var wildcardPaths = [];
	  if (expandLevel !== undefined) {
	    wildcardPaths = wildcardPaths.concat(wildcardPathsFromLevel(expandLevel));
	  }
	
	  wildcardPaths = wildcardPaths.concat(expandPaths);
	
	  var paths = pathsFromWildcardPaths(isExpandable, wildcardPaths, data, DEFAULT_ROOT_PATH);
	  var pathsState = paths.reduce(function (obj, path) {
	    obj[path] = true;return obj;
	  }, initialState);
	
	  return pathsState;
	};
	
	/**
	 * Convert wild card paths to concrete paths by recursive traversal
	 */
	var pathsFromWildcardPaths = exports.pathsFromWildcardPaths = function pathsFromWildcardPaths(isExpandable, wildcardPaths, data) {
	  var paths = [];
	  if (wildcardPaths === undefined) {
	    return paths;
	  }
	  wildcardPaths.map(function (wildcardPath) {
	    if (typeof wildcardPath === 'string') {
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
	            if (isExpandable(curObject) && (name === DEFAULT_ROOT_PATH || name === WILDCARD)) {
	              populatePaths(curObject, DEFAULT_ROOT_PATH, i + 1);
	            }
	          } else {
	            if (name === WILDCARD) {
	              // matches anything
	              for (var propertyName in curObject) {
	                if (curObject.hasOwnProperty(propertyName)) {
	                  var propertyValue = curObject[propertyName];
	                  if (isExpandable(propertyValue)) {
	                    populatePaths(propertyValue, curPath + '.' + propertyName, i + 1);
	                  } else {
	                    continue;
	                  }
	                }
	              }
	            } else {
	              var _propertyValue = curObject[name];
	              if (isExpandable(_propertyValue)) {
	                populatePaths(_propertyValue, curPath + '.' + name, i + 1);
	              }
	            }
	          }
	        };
	
	        var names = wildcardPath.split('.');
	        populatePaths(data, '', 0);
	      })();
	    }
	  });
	  return paths;
	};
	
	var wildcardPathsFromLevel = exports.wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
	  if (level < 0) {
	    return undefined;
	  }
	  if (level === 0) {
	    return [];
	  }
	  var path = DEFAULT_ROOT_PATH;
	  var wildcardPaths = [path];
	  for (var i = 1; i < level; i++) {
	    path += '.*';
	    wildcardPaths.push(path);
	  }
	  return wildcardPaths;
	};
	
	/*
	export const pathsFromDataAndLevel = (data, level) => {
	  const wildcardPaths = wildcardPathsFromLevel(level)
	  return pathsFromWildcardPaths(wildcardPaths, data)
	}
	*/

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectDescription = __webpack_require__(4);
	
	var _ObjectDescription2 = _interopRequireDefault(_ObjectDescription);
	
	var _getHeaders2 = __webpack_require__(11);
	
	var _getHeaders3 = _interopRequireDefault(_getHeaders2);
	
	var _glyphs = __webpack_require__(7);
	
	var _unselectable = __webpack_require__(8);
	
	var _unselectable2 = _interopRequireDefault(_unselectable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Specs:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
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
	  // table: {
	  // },
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
	    boxSizing: 'border-box', //
	    border: 'none', // prevent overrides
	    height: '16px', // /* 0.5 * background-size height */
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
	          borderSpacing: 0,
	          borderCollapse: 'separate',
	          height: '100%',
	          width: '100%',
	          margin: 0 } },
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
	          margin: 0, // prevent overrides
	
	          backgroundImage: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
	          backgroundSize: '128px 32px',
	          tableLayout: 'fixed',
	
	          // table
	          borderSpacing: 0,
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
	              // rowData could be
	              //  object -> index by key
	              //    array -> index by array index
	              //    null -> pass
	              //  boolean -> pass
	              //  string -> pass (hasOwnProperty returns true for [0..len-1])
	              //  number -> pass
	              //  function -> pass
	              //  symbol
	              //  undefined -> pass
	              if ((typeof rowData === 'undefined' ? 'undefined' : _typeof(rowData)) === 'object' && rowData !== null && rowData.hasOwnProperty(column)) {
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
	
	      var _getHeaders = (0, _getHeaders3.default)(data);
	
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
	
	      var columnDataWithRowIndexes = void 0; /* row indexes are [0..nRows-1] */
	      // TODO: refactor
	      if (sortColumn !== undefined) {
	        // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
	        columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
	          // normalize rowData
	          if ((typeof rowData === 'undefined' ? 'undefined' : _typeof(rowData)) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/) {
	              var columnData = rowData[sortColumn];
	              return [columnData, index];
	            }
	          return [undefined, index];
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
	            var result = void 0;
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
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = getHeaders;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/*
	 * Polyfill for running tests
	 * `includes` is an ES2016 feature
	 */
	if (!Array.prototype.includes) {
	  Array.prototype.includes = function (searchElement /*, fromIndex*/) {
	    'use strict';
	
	    var O = Object(this);
	    var len = parseInt(O.length) || 0;
	    if (len === 0) {
	      return false;
	    }
	    var n = parseInt(arguments[1]) || 0;
	    var k;
	    if (n >= 0) {
	      k = n;
	    } else {
	      k = len + n;
	      if (k < 0) {
	        k = 0;
	      }
	    }
	    var currentElement;
	    while (k < len) {
	      currentElement = O[k];
	      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	        // NaN !== NaN
	        return true;
	      }
	      k++;
	    }
	    return false;
	  };
	}
	
	function getHeaders(data) {
	  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	    var rowHeaders = void 0;
	    // is an array
	    if (Array.isArray(data)) {
	      var nRows = data.length;
	      rowHeaders = [].concat(_toConsumableArray(Array(nRows).keys()));
	    }
	    // is an object
	    else if (data !== null) {
	        // keys are row indexes
	        rowHeaders = Object.keys(data);
	      }
	
	    // Time: O(nRows * nCols)
	    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
	      var row = data[rowHeader];
	      if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) === 'object' && row !== null) {
	        /* O(nCols) Could optimize `includes` here */
	        var cols = Object.keys(row);
	        cols.reduce(function (xs, x) {
	          if (!xs.includes(x)) {
	            /* xs is the colHeaders to be filled by searching the row's indexes */
	            xs.push(x);
	          }
	          return xs;
	        }, colHeaders);
	      }
	      return colHeaders;
	    }, []);
	    return {
	      rowHeaders: rowHeaders,
	      colHeaders: colHeaders
	    };
	  }
	  return undefined;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-inspector.map