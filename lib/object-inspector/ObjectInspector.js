'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TreeView = require('../tree-view/TreeView');

var _TreeView2 = _interopRequireDefault(_TreeView);

var _ObjectRootLabel = require('./ObjectRootLabel');

var _ObjectRootLabel2 = _interopRequireDefault(_ObjectRootLabel);

var _ObjectLabel = require('./ObjectLabel');

var _ObjectLabel2 = _interopRequireDefault(_ObjectLabel);

var _ThemeProvider = require('../styles/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
  var objectIterator = _regenerator2.default.mark(function objectIterator(data) {
    var shouldIterate, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

    return _regenerator2.default.wrap(function objectIterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shouldIterate = (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object' && data !== null || typeof data === 'function';

            if (shouldIterate) {
              _context.next = 3;
              break;
            }

            return _context.abrupt('return');

          case 3:
            if (!(!Array.isArray(data) && data[Symbol.iterator])) {
              _context.next = 40;
              break;
            }

            i = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 8;
            _iterator = data[Symbol.iterator]();

          case 10:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 24;
              break;
            }

            entry = _step.value;

            if (!(Array.isArray(entry) && entry.length === 2)) {
              _context.next = 18;
              break;
            }

            _entry = (0, _slicedToArray3.default)(entry, 2), k = _entry[0], v = _entry[1];
            _context.next = 16;
            return {
              name: k,
              data: v
            };

          case 16:
            _context.next = 20;
            break;

          case 18:
            _context.next = 20;
            return {
              name: i.toString(),
              data: entry
            };

          case 20:
            i++;

          case 21:
            _iteratorNormalCompletion = true;
            _context.next = 10;
            break;

          case 24:
            _context.next = 30;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context['catch'](8);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 30:
            _context.prev = 30;
            _context.prev = 31;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(30);

          case 38:
            _context.next = 81;
            break;

          case 40:
            keys = Object.getOwnPropertyNames(data);

            if (typeof sortObjectKeys !== 'undefined') {
              keys.sort(sortObjectKeys);
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 45;
            _iterator2 = keys[Symbol.iterator]();

          case 47:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 64;
              break;
            }

            propertyName = _step2.value;

            if (!data.propertyIsEnumerable(propertyName)) {
              _context.next = 55;
              break;
            }

            propertyValue = data[propertyName];
            _context.next = 53;
            return {
              name: propertyName,
              data: propertyValue
            };

          case 53:
            _context.next = 61;
            break;

          case 55:
            if (!showNonenumerable) {
              _context.next = 61;
              break;
            }

            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
            _propertyValue = void 0;

            try {
              _propertyValue = data[propertyName];
            } catch (e) {
              // console.warn(e)
            }

            if (!(_propertyValue !== undefined)) {
              _context.next = 61;
              break;
            }

            _context.next = 61;
            return {
              name: propertyName,
              data: _propertyValue,
              isNonenumerable: true
            };

          case 61:
            _iteratorNormalCompletion2 = true;
            _context.next = 47;
            break;

          case 64:
            _context.next = 70;
            break;

          case 66:
            _context.prev = 66;
            _context.t1 = _context['catch'](45);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 70:
            _context.prev = 70;
            _context.prev = 71;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 73:
            _context.prev = 73;

            if (!_didIteratorError2) {
              _context.next = 76;
              break;
            }

            throw _iteratorError2;

          case 76:
            return _context.finish(73);

          case 77:
            return _context.finish(70);

          case 78:
            if (!(showNonenumerable && data !== Object.prototype /* already added */)) {
              _context.next = 81;
              break;
            }

            _context.next = 81;
            return {
              name: '__proto__',
              data: Object.getPrototypeOf(data),
              isNonenumerable: true
            };

          case 81:
          case 'end':
            return _context.stop();
        }
      }
    }, objectIterator, this, [[8, 26, 30, 38], [31,, 33, 37], [45, 66, 70, 78], [71,, 73, 77]]);
  });

  return objectIterator;
};

var nodeRenderer = function nodeRenderer(_ref) {
  var depth = _ref.depth,
      name = _ref.name,
      data = _ref.data,
      isNonenumerable = _ref.isNonenumerable;
  return depth === 0 ? _react2.default.createElement(_ObjectRootLabel2.default, { name: name, data: data }) : _react2.default.createElement(_ObjectLabel2.default, { name: name, data: data, isNonenumerable: isNonenumerable });
};

/**
 * Tree-view for objects
 */

var ObjectInspector = function (_Component) {
  (0, _inherits3.default)(ObjectInspector, _Component);

  function ObjectInspector() {
    (0, _classCallCheck3.default)(this, ObjectInspector);
    return (0, _possibleConstructorReturn3.default)(this, (ObjectInspector.__proto__ || Object.getPrototypeOf(ObjectInspector)).apply(this, arguments));
  }

  (0, _createClass3.default)(ObjectInspector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showNonenumerable = _props.showNonenumerable,
          sortObjectKeys = _props.sortObjectKeys,
          rest = (0, _objectWithoutProperties3.default)(_props, ['showNonenumerable', 'sortObjectKeys']);

      var dataIterator = createIterator(showNonenumerable, sortObjectKeys);

      return _react2.default.createElement(
        _ThemeProvider2.default,
        { theme: this.props.theme },
        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({
          nodeRenderer: nodeRenderer,
          dataIterator: dataIterator
        }, rest))
      );
    }
  }]);
  return ObjectInspector;
}(_react.Component);

ObjectInspector.defaultProps = {
  showNonenumerable: false,

  theme: 'chromeLight'
};
ObjectInspector.propTypes = {
  /** An integer specifying to which level the tree should be initially expanded. */
  expandLevel: _react.PropTypes.number,
  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
  expandPaths: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),

  name: _react.PropTypes.string,
  /** Not required prop because we also allow undefined value */
  data: _react.PropTypes.any,

  /** A known theme or theme object */
  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),

  /** Show non-enumerable properties */
  showNonenumerable: _react.PropTypes.bool,
  /** Sort object keys with optional compare function. */
  sortObjectKeys: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func])
};
exports.default = ObjectInspector;