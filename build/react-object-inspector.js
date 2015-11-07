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
	
	var ObjectInspector = (function (_Component) {
	  _inherits(ObjectInspector, _Component);
	
	  _createClass(ObjectInspector, null, [{
	    key: 'defaultProps',
	    value: {
	      name: void 0,
	      data: undefined,
	      depth: 0,
	      objectinspectorid: String(void 0)
	    },
	    enumerable: true
	  }]);
	
	  function ObjectInspector(props) {
	    _classCallCheck(this, ObjectInspector);
	
	    _get(Object.getPrototypeOf(ObjectInspector.prototype), 'constructor', this).call(this, props);
	
	    if (props.depth === 0) {
	      this.state = { expandedTree: {} };
	      this.state.expandedTree[props.objectinspectorid] = false;
	    }
	  }
	
	  _createClass(ObjectInspector, [{
	    key: 'getExpanded',
	    value: function getExpanded(objectinspectorid) {
	      var expandedTree = this.state.expandedTree;
	      if (typeof expandedTree[objectinspectorid] !== 'undefined') {
	        return expandedTree[objectinspectorid];
	      }
	      return false;
	    }
	  }, {
	    key: 'setExpanded',
	    value: function setExpanded(objectinspectorid, expanded) {
	      var expandedTree = this.state.expandedTree;
	      expandedTree[objectinspectorid] = expanded;
	      this.setState({ expandedTree: expandedTree });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      // console.log(this.props.data);
	      if (ObjectInspector.isExpandable(this.props.data)) {
	        if (this.props.depth > 0) {
	          this.props.setExpanded(this.props.objectinspectorid, !this.props.getExpanded(this.props.objectinspectorid));
	        } else {
	          this.setExpanded(this.props.objectinspectorid, !this.getExpanded(this.props.objectinspectorid));
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
	      var expanded = getExpanded(this.props.objectinspectorid);
	
	      var expandGlyph = ObjectInspector.isExpandable(data) ? expanded ? '▼' : '▶' : typeof name === 'undefined' ? '' : ' ';
	
	      var propertyNodesContainer = undefined;
	      if (expanded) {
	        var propertyNodes = [];
	
	        for (var propertyName in data) {
	          var propertyValue = data[propertyName];
	          if (data.hasOwnProperty(propertyName)) {
	            propertyNodes.push(_react2['default'].createElement(ObjectInspector, { getExpanded: getExpanded,
	              setExpanded: setExpanded,
	              objectinspectorid: this.props.objectinspectorid + '.' + propertyName,
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
	        _react2['default'].createElement(
	          'span',
	          { className: 'ObjectInspector-property', onTouchStart: this.handleClick.bind(this), onClick: this.handleClick.bind(this) },
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-object-inspector.map