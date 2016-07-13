(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactInspector"] = factory(require("react"));
	else
		root["ReactInspector"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_107__) {
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
	exports.Inspector = exports.DOMInspector = exports.TableInspector = exports.ObjectInspector = exports.chromeDark = exports.chromeLight = undefined;
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(74);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _themes = __webpack_require__(75);
	
	Object.defineProperty(exports, 'chromeLight', {
	  enumerable: true,
	  get: function get() {
	    return _themes.chromeLight;
	  }
	});
	Object.defineProperty(exports, 'chromeDark', {
	  enumerable: true,
	  get: function get() {
	    return _themes.chromeDark;
	  }
	});
	
	var _ObjectInspector2 = __webpack_require__(78);
	
	var _ObjectInspector3 = _interopRequireDefault(_ObjectInspector2);
	
	var _TableInspector2 = __webpack_require__(121);
	
	var _TableInspector3 = _interopRequireDefault(_TableInspector2);
	
	var _DOMInspector2 = __webpack_require__(134);
	
	var _DOMInspector3 = _interopRequireDefault(_DOMInspector2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _isDom = __webpack_require__(137);
	
	var _isDom2 = _interopRequireDefault(_isDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ObjectInspector = _ObjectInspector3.default;
	exports.TableInspector = _TableInspector3.default;
	exports.DOMInspector = _DOMInspector3.default;
	
	// NOTE: ObjectValue and ObjectPreview can be used as building blocks, but currently their styles are not complete
	// export ObjectValue from './object/ObjectValue'
	// export ObjectPreview from './object/ObjectPreview'
	
	// Wrapping the inspectors
	
	var Inspector = function Inspector(_ref) {
	  var _ref$table = _ref.table;
	  var table = _ref$table === undefined ? false : _ref$table;
	  var data = _ref.data;
	  var rest = (0, _objectWithoutProperties3.default)(_ref, ['table', 'data']);
	
	  if (table) {
	    return _react2.default.createElement(_TableInspector3.default, (0, _extends3.default)({ data: data }, rest));
	  }
	
	  if ((0, _isDom2.default)(data)) return _react2.default.createElement(_DOMInspector3.default, (0, _extends3.default)({ data: data }, rest));
	
	  return _react2.default.createElement(_ObjectInspector3.default, (0, _extends3.default)({ data: data }, rest));
	};
	
	Inspector.propTypes = {
	  data: _react2.default.PropTypes.any,
	  name: _react2.default.PropTypes.string,
	  table: _react2.default.PropTypes.bool
	};
	
	exports.Inspector = Inspector;
	exports.default = Inspector;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(2);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(73) });

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(6),
	    core = __webpack_require__(7),
	    ctx = __webpack_require__(8),
	    hide = __webpack_require__(10),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11),
	    createDesc = __webpack_require__(45);
	module.exports = __webpack_require__(41) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12),
	    IE8_DOM_DEFINE = __webpack_require__(69),
	    toPrimitive = __webpack_require__(65),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(41) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof3 = __webpack_require__(14);
	
	var _typeof4 = _interopRequireDefault2(_typeof3);
	
	function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(15);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(55);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(17);
	__webpack_require__(50);
	module.exports = __webpack_require__(54).f('iterator');

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(18)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(21)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19),
	    defined = __webpack_require__(20);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(22),
	    $export = __webpack_require__(5),
	    redefine = __webpack_require__(23),
	    hide = __webpack_require__(10),
	    has = __webpack_require__(24),
	    Iterators = __webpack_require__(25),
	    $iterCreate = __webpack_require__(26),
	    setToStringTag = __webpack_require__(46),
	    getPrototypeOf = __webpack_require__(48),
	    ITERATOR = __webpack_require__(47)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10);

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(27),
	    descriptor = __webpack_require__(45),
	    setToStringTag = __webpack_require__(46),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(47)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12),
	    dPs = __webpack_require__(28),
	    enumBugKeys = __webpack_require__(40),
	    IE_PROTO = __webpack_require__(37)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(43)('iframe'),
	      i = enumBugKeys.length,
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(44).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(11),
	    anObject = __webpack_require__(12),
	    getKeys = __webpack_require__(29);
	
	module.exports = __webpack_require__(41) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(30),
	    enumBugKeys = __webpack_require__(40);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(24),
	    toIObject = __webpack_require__(31),
	    arrayIndexOf = __webpack_require__(34)(false),
	    IE_PROTO = __webpack_require__(37)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(32),
	    defined = __webpack_require__(20);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(33);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31),
	    toLength = __webpack_require__(35),
	    toIndex = __webpack_require__(36);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	        if (IS_INCLUDES || index in O) {
	          if (O[index] === el) return IS_INCLUDES || index || 0;
	        }
	      }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(19),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(38)('keys'),
	    uid = __webpack_require__(39);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(6),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(42)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13),
	    document = __webpack_require__(6).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(11).f,
	    has = __webpack_require__(24),
	    TAG = __webpack_require__(47)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(38)('wks'),
	    uid = __webpack_require__(39),
	    _Symbol = __webpack_require__(6).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(24),
	    toObject = __webpack_require__(49),
	    IE_PROTO = __webpack_require__(37)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(20);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(51);
	var global = __webpack_require__(6),
	    hide = __webpack_require__(10),
	    Iterators = __webpack_require__(25),
	    TO_STRING_TAG = __webpack_require__(47)('toStringTag');
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(52),
	    step = __webpack_require__(53),
	    Iterators = __webpack_require__(25),
	    toIObject = __webpack_require__(31);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(21)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.f = __webpack_require__(47);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(57);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	module.exports = __webpack_require__(7).Symbol;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var global = __webpack_require__(6),
	    has = __webpack_require__(24),
	    DESCRIPTORS = __webpack_require__(41),
	    $export = __webpack_require__(5),
	    redefine = __webpack_require__(23),
	    META = __webpack_require__(58).KEY,
	    $fails = __webpack_require__(42),
	    shared = __webpack_require__(38),
	    setToStringTag = __webpack_require__(46),
	    uid = __webpack_require__(39),
	    wks = __webpack_require__(47),
	    wksExt = __webpack_require__(54),
	    wksDefine = __webpack_require__(59),
	    keyOf = __webpack_require__(60),
	    enumKeys = __webpack_require__(61),
	    isArray = __webpack_require__(64),
	    anObject = __webpack_require__(12),
	    toIObject = __webpack_require__(31),
	    toPrimitive = __webpack_require__(65),
	    createDesc = __webpack_require__(45),
	    _create = __webpack_require__(27),
	    gOPNExt = __webpack_require__(66),
	    $GOPD = __webpack_require__(68),
	    $DP = __webpack_require__(11),
	    $keys = __webpack_require__(29),
	    gOPD = $GOPD.f,
	    dP = $DP.f,
	    gOPN = gOPNExt.f,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    PROTOTYPE = 'prototype',
	    HIDDEN = wks('_hidden'),
	    TO_PRIMITIVE = wks('toPrimitive'),
	    isEnum = {}.propertyIsEnumerable,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    OPSymbols = shared('op-symbols'),
	    ObjectProto = Object[PROTOTYPE],
	    USE_NATIVE = typeof $Symbol == 'function',
	    QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function get() {
	      return dP(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && (0, _typeof3.default)($Symbol.iterator) == 'symbol' ? function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto,
	      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  }return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function _Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function $set(value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(63).f = $propertyIsEnumerable;
	  __webpack_require__(62).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(22)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var symbols =
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
	  wks(symbols[i++]);
	}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
	  wksDefine(symbols[i++]);
	}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it],
	        i = 1,
	        replacer,
	        $replacer;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var META = __webpack_require__(39)('meta'),
	    isObject = __webpack_require__(13),
	    has = __webpack_require__(24),
	    setDesc = __webpack_require__(11).f,
	    id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(42)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function setMeta(it) {
	  setDesc(it, META, { value: {
	      i: 'O' + ++id, // object ID
	      w: {} // weak collections IDs
	    } });
	};
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	    // return object ID
	  }return it[META].i;
	};
	var getWeak = function getWeak(it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	    // return hash weak collections IDs
	  }return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function onFreeze(it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(6),
	    core = __webpack_require__(7),
	    LIBRARY = __webpack_require__(22),
	    wksExt = __webpack_require__(54),
	    defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getKeys = __webpack_require__(29),
	    toIObject = __webpack_require__(31);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(29),
	    gOPS = __webpack_require__(62),
	    pIE = __webpack_require__(63);
	module.exports = function (it) {
	  var result = getKeys(it),
	      getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = pIE.f,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(33);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(31),
	    gOPN = __webpack_require__(67).f,
	    toString = {}.toString;
	
	var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function getWindowNames(it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(30),
	    hiddenKeys = __webpack_require__(40).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var pIE = __webpack_require__(63),
	    createDesc = __webpack_require__(45),
	    toIObject = __webpack_require__(31),
	    toPrimitive = __webpack_require__(65),
	    has = __webpack_require__(24),
	    IE8_DOM_DEFINE = __webpack_require__(69),
	    gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(41) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) {/* empty */}
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(41) && !__webpack_require__(42)(function () {
	  return Object.defineProperty(__webpack_require__(43)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(59)('asyncIterator');

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(59)('observable');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(29),
	    gOPS = __webpack_require__(62),
	    pIE = __webpack_require__(63),
	    toObject = __webpack_require__(49),
	    IObject = __webpack_require__(32),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(42)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.chromeLight = exports.chromeDark = undefined;
	
	var _chromeDark2 = __webpack_require__(76);
	
	var _chromeDark3 = _interopRequireDefault(_chromeDark2);
	
	var _chromeLight2 = __webpack_require__(77);
	
	var _chromeLight3 = _interopRequireDefault(_chromeLight2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.chromeDark = _chromeDark3.default;
	exports.chromeLight = _chromeLight3.default;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var theme = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: '14px',
	
	  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
	  BASE_COLOR: 'rgb(213, 213, 213)',
	
	  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',
	
	  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
	  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
	  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
	
	  ARROW_COLOR: 'rgb(145, 145, 145)',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,
	
	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: '14px',
	  TREENODE_PADDING_LEFT: 12,
	
	  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
	  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
	  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
	  TABLE_SORT_ICON_COLOR: 'black', //'rgb(48, 57, 66)',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};
	
	exports.default = theme;

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var theme = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: '14px',
	
	  BASE_BACKGROUND_COLOR: 'white',
	  BASE_COLOR: 'black',
	
	  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(170, 13, 145)',
	
	  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
	  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
	  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
	
	  ARROW_COLOR: '#6e6e6e',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,
	
	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: '14px',
	  TREENODE_PADDING_LEFT: 12,
	
	  TABLE_BORDER_COLOR: '#aaa',
	  TABLE_TH_BACKGROUND_COLOR: '#eee',
	  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
	  TABLE_SORT_ICON_COLOR: '#6e6e6e',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};
	
	exports.default = theme;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(74);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _regenerator = __webpack_require__(93);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _slicedToArray2 = __webpack_require__(98);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TreeView = __webpack_require__(108);
	
	var _TreeView2 = _interopRequireDefault(_TreeView);
	
	var _ObjectRootLabel = __webpack_require__(115);
	
	var _ObjectRootLabel2 = _interopRequireDefault(_ObjectRootLabel);
	
	var _ObjectLabel = __webpack_require__(119);
	
	var _ObjectLabel2 = _interopRequireDefault(_ObjectLabel);
	
	var _ThemeProvider = __webpack_require__(120);
	
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
	              _context.next = 42;
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
	              _context.next = 26;
	              break;
	            }
	
	            entry = _step.value;
	
	            if (!(Array.isArray(entry) && entry.length === 2)) {
	              _context.next = 20;
	              break;
	            }
	
	            _entry = (0, _slicedToArray3.default)(entry, 2);
	            k = _entry[0];
	            v = _entry[1];
	            _context.next = 18;
	            return {
	              name: k,
	              data: v
	            };
	
	          case 18:
	            _context.next = 22;
	            break;
	
	          case 20:
	            _context.next = 22;
	            return {
	              name: i.toString(),
	              data: entry
	            };
	
	          case 22:
	            i++;
	
	          case 23:
	            _iteratorNormalCompletion = true;
	            _context.next = 10;
	            break;
	
	          case 26:
	            _context.next = 32;
	            break;
	
	          case 28:
	            _context.prev = 28;
	            _context.t0 = _context['catch'](8);
	            _didIteratorError = true;
	            _iteratorError = _context.t0;
	
	          case 32:
	            _context.prev = 32;
	            _context.prev = 33;
	
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	
	          case 35:
	            _context.prev = 35;
	
	            if (!_didIteratorError) {
	              _context.next = 38;
	              break;
	            }
	
	            throw _iteratorError;
	
	          case 38:
	            return _context.finish(35);
	
	          case 39:
	            return _context.finish(32);
	
	          case 40:
	            _context.next = 83;
	            break;
	
	          case 42:
	            keys = Object.getOwnPropertyNames(data);
	
	            if (typeof sortObjectKeys !== 'undefined') {
	              keys.sort(sortObjectKeys);
	            }
	
	            _iteratorNormalCompletion2 = true;
	            _didIteratorError2 = false;
	            _iteratorError2 = undefined;
	            _context.prev = 47;
	            _iterator2 = keys[Symbol.iterator]();
	
	          case 49:
	            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	              _context.next = 66;
	              break;
	            }
	
	            propertyName = _step2.value;
	
	            if (!data.propertyIsEnumerable(propertyName)) {
	              _context.next = 57;
	              break;
	            }
	
	            propertyValue = data[propertyName];
	            _context.next = 55;
	            return {
	              name: propertyName,
	              data: propertyValue
	            };
	
	          case 55:
	            _context.next = 63;
	            break;
	
	          case 57:
	            if (!showNonenumerable) {
	              _context.next = 63;
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
	              _context.next = 63;
	              break;
	            }
	
	            _context.next = 63;
	            return {
	              name: propertyName,
	              data: _propertyValue,
	              isNonenumerable: true
	            };
	
	          case 63:
	            _iteratorNormalCompletion2 = true;
	            _context.next = 49;
	            break;
	
	          case 66:
	            _context.next = 72;
	            break;
	
	          case 68:
	            _context.prev = 68;
	            _context.t1 = _context['catch'](47);
	            _didIteratorError2 = true;
	            _iteratorError2 = _context.t1;
	
	          case 72:
	            _context.prev = 72;
	            _context.prev = 73;
	
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	              _iterator2.return();
	            }
	
	          case 75:
	            _context.prev = 75;
	
	            if (!_didIteratorError2) {
	              _context.next = 78;
	              break;
	            }
	
	            throw _iteratorError2;
	
	          case 78:
	            return _context.finish(75);
	
	          case 79:
	            return _context.finish(72);
	
	          case 80:
	            if (!(showNonenumerable && data !== Object.prototype /* already added */)) {
	              _context.next = 83;
	              break;
	            }
	
	            _context.next = 83;
	            return {
	              name: '__proto__',
	              data: Object.getPrototypeOf(data),
	              isNonenumerable: true
	            };
	
	          case 83:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, objectIterator, this, [[8, 28, 32, 40], [33,, 35, 39], [47, 68, 72, 80], [73,, 75, 79]]);
	  });
	
	  return objectIterator;
	};
	
	var nodeRenderer = function nodeRenderer(_ref) {
	  var depth = _ref.depth;
	  var name = _ref.name;
	  var data = _ref.data;
	  var isNonenumerable = _ref.isNonenumerable;
	  return depth === 0 ? _react2.default.createElement(_ObjectRootLabel2.default, { name: name, data: data }) : _react2.default.createElement(_ObjectLabel2.default, { name: name, data: data, isNonenumerable: isNonenumerable });
	};
	
	/**
	 * Tree-view for objects
	 */
	
	var ObjectInspector = function (_Component) {
	  (0, _inherits3.default)(ObjectInspector, _Component);
	
	  function ObjectInspector() {
	    (0, _classCallCheck3.default)(this, ObjectInspector);
	    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ObjectInspector).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ObjectInspector, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var showNonenumerable = _props.showNonenumerable;
	      var sortObjectKeys = _props.sortObjectKeys;
	      var rest = (0, _objectWithoutProperties3.default)(_props, ['showNonenumerable', 'sortObjectKeys']);
	
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

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(81);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(83);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(41), 'Object', { defineProperty: __webpack_require__(11).f });

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(86);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(90);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(88);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(89).set });

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13),
	    anObject = __webpack_require__(12);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(8)(Function.call, __webpack_require__(68).f(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(92);
	var $Object = __webpack_require__(7).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $export = __webpack_require__(5);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(27) });

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = __webpack_require__(94);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(95);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch (e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(96)(module), __webpack_require__(97)))

/***/ },
/* 96 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(99);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(103);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(50);
	__webpack_require__(17);
	module.exports = __webpack_require__(101);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(102),
	    ITERATOR = __webpack_require__(47)('iterator'),
	    Iterators = __webpack_require__(25);
	module.exports = __webpack_require__(7).isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(33),
	    TAG = __webpack_require__(47)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(50);
	__webpack_require__(17);
	module.exports = __webpack_require__(105);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(12),
	    get = __webpack_require__(106);
	module.exports = __webpack_require__(7).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(102),
	    ITERATOR = __webpack_require__(47)('iterator'),
	    Iterators = __webpack_require__(25);
	module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(74);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _defineProperty2 = __webpack_require__(109);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TreeNode = __webpack_require__(110);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	var _pathUtils = __webpack_require__(114);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = function reducer(state, action) {
	  switch (action.type) {
	    case 'TOGGLE_EXPAND':
	      var path = action.path;
	      var expandedPaths = state.expandedPaths;
	      var expanded = !!expandedPaths[path];
	
	      return Object.assign({}, state, {
	        expandedPaths: Object.assign({}, state.expandedPaths, (0, _defineProperty3.default)({}, path, !expanded))
	      });
	    default:
	      return state;
	  }
	};
	
	var ConnectedTreeNode = function (_Component) {
	  (0, _inherits3.default)(ConnectedTreeNode, _Component);
	
	  function ConnectedTreeNode(props, context) {
	    (0, _classCallCheck3.default)(this, ConnectedTreeNode);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ConnectedTreeNode).call(this, props));
	
	    _this.state = context.store.storeState;
	    return _this;
	  }
	
	  (0, _createClass3.default)(ConnectedTreeNode, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !!nextState.expandedPaths[nextProps.path] !== !!this.state.expandedPaths[this.props.path] || nextProps.data !== this.props.data || nextProps.name !== this.props.name;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(path) {
	      this.context.store.storeState = reducer(this.context.store.storeState, {
	        type: 'TOGGLE_EXPAND',
	        path: path
	      });
	      this.setState(this.context.store.storeState);
	    }
	  }, {
	    key: 'renderChildNodes',
	    value: function renderChildNodes(parentData, parentPath) {
	      var dataIterator = this.props.dataIterator;
	      var depth = this.props.depth;
	      var nodeRenderer = this.props.nodeRenderer;
	
	
	      var childNodes = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = dataIterator(parentData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _step$value = _step.value;
	          var name = _step$value.name;
	          var data = _step$value.data;
	          var props = (0, _objectWithoutProperties3.default)(_step$value, ['name', 'data']);
	
	          var key = name;
	          var path = parentPath + '.' + key;
	          childNodes.push(_react2.default.createElement(ConnectedTreeNode, (0, _extends3.default)({ name: name,
	            data: data,
	            depth: depth + 1,
	            path: path,
	            key: key,
	
	            dataIterator: dataIterator,
	            nodeRenderer: nodeRenderer
	
	          }, props)));
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      // props for nodeRenderer
	      return childNodes;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var dataIterator = _props.dataIterator;
	      var path = _props.path;
	      var depth = _props.depth;
	
	
	      var nodeHasChildNodes = (0, _pathUtils.hasChildNodes)(data, dataIterator);
	      var expandedPaths = this.state.expandedPaths;
	
	      var expanded = !!expandedPaths[path];
	
	      var nodeRenderer = this.props.nodeRenderer;
	
	
	      return _react2.default.createElement(
	        _TreeNode2.default,
	        (0, _extends3.default)({
	          expanded: expanded,
	          onClick: nodeHasChildNodes ? this.handleClick.bind(this, path) : function () {}
	          // show arrow anyway even if not expanded and not rendering children
	          , shouldShowArrow: nodeHasChildNodes
	          // show placeholder only for non root nodes
	          , shouldShowPlaceholder: depth > 0
	
	          // Render a node from name and data (or possibly other props like isNonenumerable)
	          , nodeRenderer: nodeRenderer
	
	        }, this.props),
	
	        // only render if the node is expanded
	        expanded ? this.renderChildNodes(data, path) : undefined
	      );
	    }
	  }]);
	  return ConnectedTreeNode;
	}(_react.Component);
	
	ConnectedTreeNode.propTypes = {
	  name: _react.PropTypes.string,
	  data: _react.PropTypes.any,
	  dataIterator: _react.PropTypes.func,
	
	  depth: _react.PropTypes.number,
	  expanded: _react.PropTypes.bool,
	
	  nodeRenderer: _react.PropTypes.func
	};
	
	ConnectedTreeNode.contextTypes = {
	  store: _react.PropTypes.any
	};
	
	var TreeView = function (_Component2) {
	  (0, _inherits3.default)(TreeView, _Component2);
	
	  function TreeView(props) {
	    (0, _classCallCheck3.default)(this, TreeView);
	
	    var _this2 = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TreeView).call(this, props));
	
	    _this2.store = {
	      storeState: {
	        expandedPaths: (0, _pathUtils.getExpandedPaths)(props.data, props.dataIterator, props.expandPaths, props.expandLevel)
	      }
	    };
	    return _this2;
	  }
	
	  (0, _createClass3.default)(TreeView, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.store = {
	        storeState: {
	          expandedPaths: (0, _pathUtils.getExpandedPaths)(nextProps.data, nextProps.dataIterator, nextProps.expandPaths, nextProps.expandLevel, this.store.storeState.expandedPaths)
	        }
	      };
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        store: this.store
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var data = _props2.data;
	      var dataIterator = _props2.dataIterator;
	      var nodeRenderer = this.props.nodeRenderer;
	
	
	      var rootPath = _pathUtils.DEFAULT_ROOT_PATH;
	
	      return _react2.default.createElement(ConnectedTreeNode, { name: name,
	        data: data,
	        dataIterator: dataIterator,
	
	        depth: 0,
	        path: rootPath,
	
	        nodeRenderer: nodeRenderer
	      });
	    }
	  }]);
	  return TreeView;
	}(_react.Component);
	
	TreeView.defaultProps = {
	  expandLevel: 0,
	  expandPaths: []
	};
	TreeView.childContextTypes = {
	  store: _react.PropTypes.any
	};
	
	
	TreeView.propTypes = {
	  name: _react.PropTypes.string,
	  data: _react.PropTypes.any,
	  dataIterator: _react.PropTypes.func,
	
	  nodeRenderer: _react.PropTypes.func
	};
	
	TreeView.defaultProps = {
	  name: undefined
	};
	
	exports.default = TreeView;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(81);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Arrow = function Arrow(_ref) {
	  var expanded = _ref.expanded;
	  var styles = _ref.styles;
	  return _react2.default.createElement(
	    'span',
	    { style: (0, _extends3.default)({}, styles.base, expanded ? styles.expanded : styles.collapsed) },
	    '▶'
	  );
	};
	
	var TreeNode = function (_Component) {
	  (0, _inherits3.default)(TreeNode, _Component);
	
	  function TreeNode() {
	    (0, _classCallCheck3.default)(this, TreeNode);
	    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TreeNode).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(TreeNode, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var data = _props.data;
	      var expanded = _props.expanded;
	      var onClick = _props.onClick;
	      var children = _props.children;
	      var nodeRenderer = _props.nodeRenderer;
	      var title = _props.title;
	      var shouldShowArrow = _props.shouldShowArrow;
	      var shouldShowPlaceholder = _props.shouldShowPlaceholder;
	      var theme = this.context.theme;
	
	      var styles = (0, _createStyles2.default)('TreeNode', theme);
	
	      var renderedNode = (0, _react.createElement)(nodeRenderer, this.props);
	      var childNodes = expanded ? children : undefined;
	
	      return _react2.default.createElement(
	        'li',
	        { 'aria-expanded': expanded, role: 'treeitem', style: styles.treeNodeBase, title: title },
	        _react2.default.createElement(
	          'div',
	          { style: styles.treeNodePreviewContainer, onClick: onClick },
	          shouldShowArrow || _react.Children.count(children) > 0 ? _react2.default.createElement(Arrow, { expanded: expanded, styles: styles.treeNodeArrow }) : shouldShowPlaceholder && _react2.default.createElement(
	            'span',
	            { style: styles.treeNodePlaceholder },
	            ' '
	          ),
	          renderedNode
	        ),
	        _react2.default.createElement(
	          'ol',
	          { role: 'group', style: styles.treeNodeChildNodesContainer },
	          childNodes
	        )
	      );
	    }
	  }]);
	  return TreeNode;
	}(_react.Component);
	
	TreeNode.propTypes = {
	  name: _react.PropTypes.string,
	  data: _react.PropTypes.any,
	
	  expanded: _react.PropTypes.bool,
	  shouldShowArrow: _react.PropTypes.bool,
	  shouldShowPlaceholder: _react.PropTypes.bool,
	
	  nodeRenderer: _react.PropTypes.func,
	
	  onClick: _react.PropTypes.func
	};
	
	TreeNode.defaultProps = {
	  name: undefined,
	  data: undefined,
	  expanded: true,
	
	  nodeRenderer: function nodeRenderer(_ref2) {
	    var name = _ref2.name;
	    var data = _ref2.data;
	    var expanded = _ref2.expanded;
	    return _react2.default.createElement(
	      'span',
	      null,
	      name
	    );
	  },
	
	  onClick: function onClick() {},
	
	  shouldShowArrow: false,
	  shouldShowPlaceholder: true
	};
	
	TreeNode.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	exports.default = TreeNode;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _themes = __webpack_require__(75);
	
	var themes = _interopRequireWildcard(_themes);
	
	var _base = __webpack_require__(112);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = Object.keys(themes).reduce(function (styles, themeName) {
	  styles[themeName] = (0, _base2.default)(themes[themeName]);
	  return styles;
	}, {});
	
	var createStyles = function createStyles(key, theme) {
	  // console.debug(styles, theme, styles[theme])
	  if (typeof theme === 'string') {
	    return styles[theme][key];
	  } else if ((typeof theme === 'undefined' ? 'undefined' : (0, _typeof3.default)(theme)) === 'object') {
	    return (0, _base2.default)(theme)[key];
	  }
	  // Default styles
	  return styles['chromeLight'][key];
	};
	
	exports.default = createStyles;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _unselectable = __webpack_require__(113);
	
	var _unselectable2 = _interopRequireDefault(_unselectable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (theme) {
	  return {
	    DOMNodePreview: {
	      htmlOpenTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: "lowercase"
	        },
	        htmlAttributeName: {
	          color: theme.HTML_ATTRIBUTE_NAME_COLOR
	        },
	        htmlAttributeValue: {
	          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
	        }
	      },
	      htmlCloseTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        offsetLeft: {
	          /* hack: offset placeholder */
	          marginLeft: -theme.TREENODE_PADDING_LEFT
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: "lowercase"
	        }
	      },
	      htmlComment: {
	        color: theme.HTML_COMMENT_COLOR
	      },
	      htmlDoctype: {
	        color: theme.HTML_DOCTYPE_COLOR
	      }
	    },
	
	    ObjectName: {
	      base: {
	        color: theme.OBJECT_NAME_COLOR
	      },
	      dimmed: {
	        opacity: 0.6
	      }
	    },
	
	    ObjectValue: {
	      objectValueNull: {
	        color: theme.OBJECT_VALUE_NULL_COLOR
	      },
	      objectValueUndefined: {
	        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
	      },
	      objectValueRegExp: {
	        color: theme.OBJECT_VALUE_REGEXP_COLOR
	      },
	      objectValueString: {
	        color: theme.OBJECT_VALUE_STRING_COLOR
	      },
	      objectValueSymbol: {
	        color: theme.OBJECT_VALUE_SYMBOL_COLOR
	      },
	      objectValueNumber: {
	        color: theme.OBJECT_VALUE_NUMBER_COLOR
	      },
	      objectValueBoolean: {
	        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
	      },
	      objectValueFunctionKeyword: {
	        color: theme.OBJECT_VALUE_FUNCTION_KEYWORD_COLOR,
	        fontStyle: 'italic'
	      },
	      objectValueFunctionName: {
	        fontStyle: 'italic'
	      }
	    },
	
	    TreeNode: {
	      treeNodeBase: {
	        color: theme.BASE_COLOR,
	        backgroundColor: theme.BASE_BACKGROUND_COLOR,
	
	        lineHeight: theme.TREENODE_LINE_HEIGHT,
	        cursor: 'default',
	
	        boxSizing: 'border-box',
	        listStyle: 'none',
	
	        fontFamily: theme.TREENODE_FONT_FAMILY,
	        fontSize: theme.TREENODE_FONT_SIZE
	      },
	      treeNodePreviewContainer: {},
	      treeNodePlaceholder: (0, _extends3.default)({
	        whiteSpace: 'pre',
	
	        fontSize: theme.ARROW_FONT_SIZE,
	        marginRight: theme.ARROW_MARGIN_RIGHT
	      }, _unselectable2.default),
	      treeNodeArrow: {
	        base: (0, _extends3.default)({
	          color: theme.ARROW_COLOR,
	          display: 'inline-block',
	          // lineHeight: '14px',
	          fontSize: theme.ARROW_FONT_SIZE,
	          marginRight: theme.ARROW_MARGIN_RIGHT
	        }, _unselectable2.default),
	        expanded: {
	          WebkitTransform: 'rotateZ(90deg)',
	          MozTransform: 'rotateZ(90deg)',
	          transform: 'rotateZ(90deg)'
	        },
	        collapsed: {
	          WebkitTransform: 'rotateZ(0deg)',
	          MozTransform: 'rotateZ(0deg)',
	          transform: 'rotateZ(0deg)'
	        }
	      },
	      treeNodeChildNodesContainer: {
	        margin: 0, // reset user-agent style
	        paddingLeft: theme.TREENODE_PADDING_LEFT
	      }
	    },
	
	    TableInspector: {
	      base: {
	        color: theme.BASE_COLOR,
	
	        position: 'relative',
	        border: "1px solid " + theme.TABLE_BORDER_COLOR,
	        fontFamily: theme.BASE_FONT_FAMILY,
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%',
	        boxSizing: 'border-box',
	        cursor: 'default'
	      }
	    },
	
	    TableInspectorHeaderContainer: {
	      base: {
	        top: 0,
	        height: '17px',
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        tableLayout: 'fixed',
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        height: '100%',
	        width: '100%',
	        margin: 0
	      }
	    },
	
	    TableInspectorDataContainer: {
	      tr: {
	        display: 'table-row'
	      },
	      td: {
	        boxSizing: 'border-box',
	        border: 'none', // prevent overrides
	        height: '16px', // /* 0.5 * table.background-size height */
	        verticalAlign: 'top',
	        padding: '1px 4px',
	        WebkitUserSelect: 'text',
	
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px'
	      },
	      div: {
	        position: 'static',
	        top: '17px',
	        bottom: 0,
	        overflowY: 'overlay',
	        transform: 'translateZ(0)',
	
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        positon: 'static',
	        left: 0,
	        top: 0,
	        right: 0,
	        bottom: 0,
	        borderTop: '0 none transparent',
	        margin: 0, // prevent user agent stylesheet overrides
	
	        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
	        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
	        tableLayout: 'fixed',
	
	        // table
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        // height: '100%',
	        width: '100%',
	
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },
	
	    TableInspectorTH: {
	      base: {
	        position: 'relative', // anchor for sort icon container
	        height: 'auto',
	        textAlign: 'left',
	        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
	        borderBottom: "1px solid " + theme.TABLE_BORDER_COLOR,
	        fontWeight: 'normal',
	        verticalAlign: 'middle',
	        padding: '0 4px',
	
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px',
	
	        ':hover': {
	          backgroundColor: theme.TABLE_TH_HOVER_COLOR
	        }
	      },
	      div: {
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	
	        // prevent user agent stylesheet overrides
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },
	
	    TableInspectorLeftBorder: {
	      none: {
	        borderLeft: 'none'
	      },
	      solid: {
	        borderLeft: "1px solid " + theme.TABLE_BORDER_COLOR
	      }
	    },
	
	    TableInspectorSortIcon: (0, _extends3.default)({
	      display: 'block',
	      marginRight: 3, // 4,
	      width: 8,
	      height: 7,
	
	      marginTop: -7,
	      color: theme.TABLE_SORT_ICON_COLOR,
	      fontSize: 12
	    }, _unselectable2.default)
	  };
	};

/***/ },
/* 113 */
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
/* 114 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasChildNodes = hasChildNodes;
	var DEFAULT_ROOT_PATH = exports.DEFAULT_ROOT_PATH = '$';
	
	var WILDCARD = '*';
	
	function hasChildNodes(data, dataIterator) {
	  return !dataIterator(data).next().done;
	}
	
	var wildcardPathsFromLevel = exports.wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
	  // i is depth
	  return Array.from({ length: level }, function (_, i) {
	    return [DEFAULT_ROOT_PATH].concat(Array.from({ length: i }, function (_, j) {
	      return '*';
	    })).join('.');
	  });
	};
	
	var getExpandedPaths = exports.getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel) {
	  var initialState = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
	
	
	  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
	    return typeof path === 'string';
	  }); // could be undefined
	
	  var expandedPaths = [];
	  wildcardPaths.forEach(function (wildcardPath) {
	    var keyPaths = wildcardPath.split('.');
	    var populatePaths = function populatePaths(curData, curPath, depth) {
	      if (depth === keyPaths.length) {
	        expandedPaths.push(curPath);
	        return;
	      }
	      var key = keyPaths[depth];
	      if (depth === 0) {
	        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
	          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
	        }
	      } else {
	        if (key === WILDCARD) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _step$value = _step.value;
	              var name = _step$value.name;
	              var _data = _step$value.data;
	
	              if (hasChildNodes(_data, dataIterator)) {
	                populatePaths(_data, curPath + '.' + name, depth + 1);
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else {
	          var value = curData[key];
	          if (hasChildNodes(value, dataIterator)) {
	            populatePaths(value, curPath + '.' + key, depth + 1);
	          }
	        }
	      }
	    };
	
	    populatePaths(data, '', 0);
	  });
	
	  return expandedPaths.reduce(function (obj, path) {
	    obj[path] = true;
	    return obj;
	  }, initialState);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectName = __webpack_require__(116);
	
	var _ObjectName2 = _interopRequireDefault(_ObjectName);
	
	var _ObjectPreview = __webpack_require__(117);
	
	var _ObjectPreview2 = _interopRequireDefault(_ObjectPreview);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ObjectRootLabel = function ObjectRootLabel(_ref) {
	  var name = _ref.name;
	  var data = _ref.data;
	
	  if (typeof name === 'string') {
	    return _react2.default.createElement(
	      'span',
	      null,
	      _react2.default.createElement(_ObjectName2.default, { name: name }),
	      _react2.default.createElement(
	        'span',
	        null,
	        ': '
	      ),
	      _react2.default.createElement(_ObjectPreview2.default, { data: data })
	    );
	  } else {
	    return _react2.default.createElement(_ObjectPreview2.default, { data: data });
	  }
	};
	
	exports.default = ObjectRootLabel;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A view for object property names.
	 *
	 * If the property name is enumerable (in Object.keys(object)),
	 * the property name will be rendered normally.
	 *
	 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
	 * the property name will be dimmed to show the difference.
	 */
	var ObjectName = function ObjectName(_ref, _ref2) {
	  var name = _ref.name;
	  var dimmed = _ref.dimmed;
	  var theme = _ref2.theme;
	
	  var styles = (0, _createStyles2.default)('ObjectName', theme);
	  return _react2.default.createElement(
	    'span',
	    { style: (0, _extends3.default)({}, styles.base, dimmed && styles.dimmed) },
	    name
	  );
	};
	
	ObjectName.propTypes = {
	  /** Property name */
	  name: _react.PropTypes.string,
	  /** Should property name be dimmed */
	  dimmed: _react.PropTypes.bool
	};
	
	ObjectName.defaultProps = {
	  dimmed: false
	};
	
	ObjectName.contextTypes = {
	  theme: _react2.default.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
	};
	
	exports.default = ObjectName;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectValue = __webpack_require__(118);
	
	var _ObjectValue2 = _interopRequireDefault(_ObjectValue);
	
	var _ObjectName = __webpack_require__(116);
	
	var _ObjectName2 = _interopRequireDefault(_ObjectName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* NOTE: Chrome console.log is italic */
	var styles = {
	  preview: {
	    fontStyle: 'italic'
	  }
	};
	
	/* intersperse arr with separator */
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
	 */
	var ObjectPreview = function ObjectPreview(_ref) {
	  var data = _ref.data;
	  var maxProperties = _ref.maxProperties;
	
	  var object = data;
	
	  if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
	    return _react2.default.createElement(_ObjectValue2.default, { object: object });
	  }
	
	  if (Array.isArray(object)) {
	    return _react2.default.createElement(
	      'span',
	      { style: styles.preview },
	      '[',
	      intersperse(object.map(function (element, index) {
	        return _react2.default.createElement(_ObjectValue2.default, { key: index, object: element });
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
	          _react2.default.createElement(_ObjectValue2.default, { object: propertyValue }),
	          ellipsis
	        ));
	        if (ellipsis) break;
	      }
	    }
	
	    return _react2.default.createElement(
	      'span',
	      { style: styles.preview },
	      object.constructor.name + ' {',
	      intersperse(propertyNodes, ", "),
	      '}'
	    );
	  }
	};
	
	ObjectPreview.propTypes = {
	  /**
	   * max number of properties shown in the property view
	   */
	  maxProperties: _react.PropTypes.number
	};
	ObjectPreview.defaultProps = {
	  maxProperties: 5
	};
	
	exports.default = ObjectPreview;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * A short description of the object values.
	 * Can be used to render tree node in ObjectInspector
	 * or render objects in TableInspector.
	 */
	var ObjectValue = function ObjectValue(_ref, _ref2) {
	  var object = _ref.object;
	  var theme = _ref2.theme;
	
	  var styles = (0, _createStyles2.default)('ObjectValue', theme);
	
	  switch (typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) {
	    case 'number':
	      return _react2.default.createElement(
	        'span',
	        { style: styles.objectValueNumber },
	        object
	      );
	    case 'string':
	      return _react2.default.createElement(
	        'span',
	        { style: styles.objectValueString },
	        '"',
	        object,
	        '"'
	      );
	    case 'boolean':
	      return _react2.default.createElement(
	        'span',
	        { style: styles.objectValueBoolean },
	        String(object)
	      );
	    case 'undefined':
	      return _react2.default.createElement(
	        'span',
	        { style: styles.objectValueUndefined },
	        'undefined'
	      );
	    case 'object':
	      if (object === null) {
	        return _react2.default.createElement(
	          'span',
	          { style: styles.objectValueNull },
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
	          { style: styles.objectValueRegExp },
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
	          { style: styles.objectValueFunctionKeyword },
	          'function'
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: styles.objectValueFunctionName },
	          ' ',
	          object.name,
	          '()'
	        )
	      );
	    case 'symbol':
	      return _react2.default.createElement(
	        'span',
	        { style: styles.objectValueSymbol },
	        object.toString()
	      );
	    default:
	      return _react2.default.createElement('span', null);
	  }
	};
	
	ObjectValue.propTypes = {
	  /** the object to describe */
	  object: _react.PropTypes.any
	};
	
	ObjectValue.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
	};
	
	exports.default = ObjectValue;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ObjectName = __webpack_require__(116);
	
	var _ObjectName2 = _interopRequireDefault(_ObjectName);
	
	var _ObjectValue = __webpack_require__(118);
	
	var _ObjectValue2 = _interopRequireDefault(_ObjectValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * if isNonenumerable is specified, render the name dimmed
	 */
	var ObjectLabel = function ObjectLabel(_ref) {
	  var name = _ref.name;
	  var data = _ref.data;
	  var isNonenumerable = _ref.isNonenumerable;
	
	  var object = data;
	
	  return _react2.default.createElement(
	    'span',
	    null,
	    _react2.default.createElement(_ObjectName2.default, { name: name, dimmed: isNonenumerable }),
	    _react2.default.createElement(
	      'span',
	      null,
	      ': '
	    ),
	    _react2.default.createElement(_ObjectValue2.default, { object: object })
	  );
	};
	
	ObjectLabel.propTypes = {
	  /** Non enumerable object property will be dimmed */
	  isNonenumerable: _react.PropTypes.bool
	};
	
	ObjectLabel.defaultProps = {
	  isNonenumerable: false
	};
	
	exports.default = ObjectLabel;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ThemeProvider = function (_Component) {
	  (0, _inherits3.default)(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    (0, _classCallCheck3.default)(this, ThemeProvider);
	    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(ThemeProvider).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var theme = this.props.theme;
	
	      return {
	        // createStyles: createStyles
	        theme: theme
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ThemeProvider;
	}(_react.Component);
	
	ThemeProvider.childContextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object])
	};
	
	exports.default = ThemeProvider;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ThemeProvider = __webpack_require__(120);
	
	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	var _getHeaders2 = __webpack_require__(122);
	
	var _getHeaders3 = _interopRequireDefault(_getHeaders2);
	
	var _DataContainer = __webpack_require__(131);
	
	var _DataContainer2 = _interopRequireDefault(_DataContainer);
	
	var _HeaderContainer = __webpack_require__(132);
	
	var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Specs:
	 * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
	 * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
	 */
	
	var TableInspector = function (_Component) {
	  (0, _inherits3.default)(TableInspector, _Component);
	
	  function TableInspector(props) {
	    (0, _classCallCheck3.default)(this, TableInspector);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(TableInspector).call(this, props));
	
	    _this.state = {
	      sorted: false, // has user ever clicked the <th> tag to sort?
	      sortIndexColumn: false, // is index column sorted?
	      sortColumn: undefined, // which column is sorted?
	      sortAscending: false // is sorting ascending or descending?
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(TableInspector, [{
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
	
	      var theme = this.props.theme;
	
	      var styles = (0, _createStyles2.default)('TableInspector', theme);
	
	      if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object' || data === null) {
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
	          if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/) {
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
	            var type1 = typeof v1 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v1);
	            var type2 = typeof v2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(v2);
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
	        _ThemeProvider2.default,
	        { theme: this.props.theme },
	        _react2.default.createElement(
	          'div',
	          { style: styles.base },
	          _react2.default.createElement(_HeaderContainer2.default, { columns: colHeaders
	            /* for sorting */
	            , sorted: this.state.sorted,
	            sortIndexColumn: this.state.sortIndexColumn,
	            sortColumn: this.state.sortColumn,
	            sortAscending: this.state.sortAscending,
	            onTHClick: this.handleTHClick.bind(this),
	            onIndexTHClick: this.handleIndexTHClick.bind(this) }),
	          _react2.default.createElement(_DataContainer2.default, { rows: rowHeaders,
	            columns: colHeaders,
	            rowsData: rowsData })
	        )
	      );
	    }
	  }]);
	  return TableInspector;
	}(_react.Component);
	
	exports.default = TableInspector;
	
	
	TableInspector.propTypes = {
	  /**
	   * the Javascript object you would like to inspect, either an array or an object
	   */
	  data: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object]),
	  /**
	   * An array of the names of the columns you'd like to display in the table
	   */
	  columns: _react2.default.PropTypes.array
	};
	
	TableInspector.defaultProps = {
	  data: undefined,
	  columns: undefined,
	  theme: 'chromeLight'
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(123);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = getHeaders;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	  if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object') {
	    var rowHeaders = void 0;
	    // is an array
	    if (Array.isArray(data)) {
	      var nRows = data.length;
	      rowHeaders = [].concat((0, _toConsumableArray3.default)(Array(nRows).keys()));
	    }
	    // is an object
	    else if (data !== null) {
	        // keys are row indexes
	        rowHeaders = Object.keys(data);
	      }
	
	    // Time: O(nRows * nCols)
	    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
	      var row = data[rowHeader];
	      if ((typeof row === 'undefined' ? 'undefined' : (0, _typeof3.default)(row)) === 'object' && row !== null) {
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

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(124);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(17);
	__webpack_require__(126);
	module.exports = __webpack_require__(7).Array.from;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(8),
	    $export = __webpack_require__(5),
	    toObject = __webpack_require__(49),
	    call = __webpack_require__(127),
	    isArrayIter = __webpack_require__(128),
	    toLength = __webpack_require__(35),
	    createProperty = __webpack_require__(129),
	    getIterFn = __webpack_require__(106);
	
	$export($export.S + $export.F * !__webpack_require__(130)(function (iter) {
	  Array.from(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        aLen = arguments.length,
	        mapfn = aLen > 1 ? arguments[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(25),
	    ITERATOR = __webpack_require__(47)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $defineProperty = __webpack_require__(11),
	    createDesc = __webpack_require__(45);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(47)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	var _ObjectValue = __webpack_require__(118);
	
	var _ObjectValue2 = _interopRequireDefault(_ObjectValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataContainer = function DataContainer(_ref, _ref2) {
	  var rows = _ref.rows;
	  var columns = _ref.columns;
	  var rowsData = _ref.rowsData;
	  var theme = _ref2.theme;
	
	  var styles = (0, _createStyles2.default)('TableInspectorDataContainer', theme);
	  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);
	
	  return _react2.default.createElement(
	    'div',
	    { style: styles.div },
	    _react2.default.createElement(
	      'table',
	      { style: styles.table },
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
	              { style: (0, _extends3.default)({}, styles.td, borderStyles.none) },
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
	              if ((typeof rowData === 'undefined' ? 'undefined' : (0, _typeof3.default)(rowData)) === 'object' && rowData !== null && rowData.hasOwnProperty(column)) {
	                return _react2.default.createElement(
	                  'td',
	                  { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) },
	                  _react2.default.createElement(_ObjectValue2.default, { object: rowData[column] })
	                );
	              } else {
	                return _react2.default.createElement('td', { key: column, style: (0, _extends3.default)({}, styles.td, borderStyles.solid) });
	              }
	            })
	          );
	        })
	      )
	    )
	  );
	};
	
	DataContainer.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	exports.default = DataContainer;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	var _TH = __webpack_require__(133);
	
	var _TH2 = _interopRequireDefault(_TH);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderContainer = function HeaderContainer(_ref, _ref2) {
	  var indexColumnText = _ref.indexColumnText;
	  var columns = _ref.columns;
	  var sorted = _ref.sorted;
	  var sortIndexColumn = _ref.sortIndexColumn;
	  var sortColumn = _ref.sortColumn;
	  var sortAscending = _ref.sortAscending;
	  var onTHClick = _ref.onTHClick;
	  var onIndexTHClick = _ref.onIndexTHClick;
	  var theme = _ref2.theme;
	
	  var styles = (0, _createStyles2.default)('TableInspectorHeaderContainer', theme);
	  var borderStyles = (0, _createStyles2.default)('TableInspectorLeftBorder', theme);
	  return _react2.default.createElement(
	    'div',
	    { style: styles.base },
	    _react2.default.createElement(
	      'table',
	      { style: styles.table },
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            _TH2.default,
	            { borderStyle: borderStyles.none,
	              sorted: sorted && sortIndexColumn,
	              sortAscending: sortAscending,
	              onClick: onIndexTHClick },
	            indexColumnText
	          ),
	          columns.map(function (column) {
	            return _react2.default.createElement(
	              _TH2.default,
	              { borderStyle: borderStyles.solid,
	                key: column,
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
	
	HeaderContainer.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	exports.default = HeaderContainer;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var SortIcon = function SortIcon(_ref, _ref2) {
	  var sortAscending = _ref.sortAscending;
	  var theme = _ref2.theme;
	
	  var glyph = sortAscending ? '▲' : '▼';
	  var styles = (0, _createStyles2.default)('TableInspectorSortIcon', theme);
	  return _react2.default.createElement(
	    'div',
	    { style: styles },
	    glyph
	  );
	};
	
	SortIcon.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	var TH = function (_Component) {
	  (0, _inherits3.default)(TH, _Component);
	
	  function TH() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, TH);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = Object.getPrototypeOf(TH)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { hovered: false }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(TH, [{
	    key: 'toggleHovered',
	    value: function toggleHovered(hovered) {
	      this.setState({ hovered: hovered });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // either not sorted, sort ascending or sort descending
	      var _props = this.props;
	      var sorted = _props.sorted;
	      var sortAscending = _props.sortAscending;
	      var theme = this.context.theme;
	
	      var styles = (0, _createStyles2.default)('TableInspectorTH', theme);
	
	      return _react2.default.createElement(
	        'th',
	        (0, _extends3.default)({}, this.props, {
	          style: (0, _extends3.default)({}, styles.base, this.props.borderStyle, this.state.hovered ? styles.base[':hover'] : {}),
	          onMouseEnter: this.toggleHovered.bind(this, true),
	          onMouseLeave: this.toggleHovered.bind(this, false),
	          onClick: this.props.onClick }),
	        _react2.default.createElement(
	          'div',
	          { style: styles.div },
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
	
	TH.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	TH.defaultProps = {
	  sortAscending: false,
	  sorted: false,
	  onClick: undefined
	};
	
	exports.default = TH;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(1);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(79);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(80);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(84);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(85);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _regenerator = __webpack_require__(93);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DOMNodePreview = __webpack_require__(135);
	
	var _DOMNodePreview2 = _interopRequireDefault(_DOMNodePreview);
	
	var _TreeView = __webpack_require__(108);
	
	var _TreeView2 = _interopRequireDefault(_TreeView);
	
	var _shouldInline = __webpack_require__(136);
	
	var _shouldInline2 = _interopRequireDefault(_shouldInline);
	
	var _ThemeProvider = __webpack_require__(120);
	
	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var domIterator = _regenerator2.default.mark(function domIterator(data) {
	  var textInlined, i, node;
	  return _regenerator2.default.wrap(function domIterator$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (!(data && data.childNodes)) {
	            _context.next = 17;
	            break;
	          }
	
	          textInlined = (0, _shouldInline2.default)(data);
	
	          if (!textInlined) {
	            _context.next = 4;
	            break;
	          }
	
	          return _context.abrupt('return');
	
	        case 4:
	          i = 0;
	
	        case 5:
	          if (!(i < data.childNodes.length)) {
	            _context.next = 14;
	            break;
	          }
	
	          node = data.childNodes[i];
	
	          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
	            _context.next = 9;
	            break;
	          }
	
	          return _context.abrupt('continue', 11);
	
	        case 9:
	          _context.next = 11;
	          return {
	            name: node.tagName + '[' + i + ']',
	            data: node
	          };
	
	        case 11:
	          i++;
	          _context.next = 5;
	          break;
	
	        case 14:
	          if (!data.tagName) {
	            _context.next = 17;
	            break;
	          }
	
	          _context.next = 17;
	          return {
	            name: 'CLOSE_TAG',
	            data: {
	              tagName: data.tagName
	            },
	            isCloseTag: true
	          };
	
	        case 17:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, domIterator, this);
	});
	
	var DOMInspector = function (_Component) {
	  (0, _inherits3.default)(DOMInspector, _Component);
	
	  function DOMInspector() {
	    (0, _classCallCheck3.default)(this, DOMInspector);
	    return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(DOMInspector).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(DOMInspector, [{
	    key: 'render',
	    value: function render() {
	      var nodeRenderer = _DOMNodePreview2.default;
	
	      return _react2.default.createElement(
	        _ThemeProvider2.default,
	        { theme: this.props.theme },
	        _react2.default.createElement(_TreeView2.default, (0, _extends3.default)({
	          nodeRenderer: nodeRenderer,
	          dataIterator: domIterator
	        }, this.props))
	      );
	    }
	  }]);
	  return DOMInspector;
	}(_react.Component);
	
	DOMInspector.propTypes = {
	  /** The DOM Node to inspect */
	  data: _react.PropTypes.object.isRequired
	};
	DOMInspector.defaultProps = {
	  theme: 'chromeLight'
	};
	exports.default = DOMInspector;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(107);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createStyles = __webpack_require__(111);
	
	var _createStyles2 = _interopRequireDefault(_createStyles);
	
	var _shouldInline = __webpack_require__(136);
	
	var _shouldInline2 = _interopRequireDefault(_shouldInline);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OpenTag = function OpenTag(_ref) {
	  var tagName = _ref.tagName;
	  var attributes = _ref.attributes;
	  var styles = _ref.styles;
	
	  return _react2.default.createElement(
	    'span',
	    { style: styles.base },
	    '<',
	    _react2.default.createElement(
	      'span',
	      { style: styles.tagName },
	      tagName
	    ),
	    function () {
	      var attributeNodes = [];
	      if (attributes) {
	        for (var i = 0; i < attributes.length; i++) {
	          var attribute = attributes[i];
	          attributeNodes.push(_react2.default.createElement(
	            'span',
	            { key: i },
	            ' ',
	            _react2.default.createElement(
	              'span',
	              { style: styles.htmlAttributeName },
	              attribute.name
	            ),
	            '="',
	            _react2.default.createElement(
	              'span',
	              { style: styles.htmlAttributeValue },
	              attribute.value
	            ),
	            '"'
	          ));
	          return attributeNodes;
	        }
	      }
	    }(),
	    '>'
	  );
	};
	
	// isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}
	var CloseTag = function CloseTag(_ref2) {
	  var tagName = _ref2.tagName;
	  var _ref2$isChildNode = _ref2.isChildNode;
	  var isChildNode = _ref2$isChildNode === undefined ? false : _ref2$isChildNode;
	  var styles = _ref2.styles;
	  return _react2.default.createElement(
	    'span',
	    { style: Object.assign({}, styles.base, isChildNode && styles.offsetLeft) },
	    '</',
	    _react2.default.createElement(
	      'span',
	      { style: styles.tagName },
	      tagName
	    ),
	    '>'
	  );
	};
	
	var nameByNodeType = {
	  1: "ELEMENT_NODE",
	  3: "TEXT_NODE",
	  7: "PROCESSING_INSTRUCTION_NODE",
	  8: "COMMENT_NODE",
	  9: "DOCUMENT_NODE",
	  10: "DOCUMENT_TYPE_NODE", // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
	  11: "DOCUMENT_FRAGMENT_NODE"
	};
	
	var DOMNodePreview = function DOMNodePreview(_ref3, _ref4) {
	  var isCloseTag = _ref3.isCloseTag;
	  var name = _ref3.name;
	  var data = _ref3.data;
	  var expanded = _ref3.expanded;
	  var theme = _ref4.theme;
	
	  var styles = (0, _createStyles2.default)('DOMNodePreview', theme);
	
	  if (isCloseTag) {
	    return _react2.default.createElement(CloseTag, { styles: styles.htmlCloseTag, isChildNode: true, tagName: data.tagName });
	  }
	
	  switch (data.nodeType) {
	    case Node.ELEMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(OpenTag, { tagName: data.tagName, attributes: data.attributes, styles: styles.htmlOpenTag }),
	        (0, _shouldInline2.default)(data) ? data.textContent : !expanded && "…",
	        !expanded && _react2.default.createElement(CloseTag, { tagName: data.tagName, styles: styles.htmlCloseTag })
	      );
	    case Node.TEXT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.textContent
	      );
	    case Node.COMMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        { style: styles.htmlComment },
	        '<!--',
	        data.textContent,
	        '-->'
	      );
	    case Node.PROCESSING_INSTRUCTION_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    case Node.DOCUMENT_TYPE_NODE:
	      return _react2.default.createElement(
	        'span',
	        { style: styles.htmlDoctype },
	        '<!DOCTYPE ',
	        data.name,
	        data.publicId ? ' PUBLIC "' + data.publicId + '"' : '',
	        !data.publicId && data.systemId ? ' SYSTEM' : '',
	        data.systemId ? ' "' + data.systemId + '"' : '',
	        '>'
	      );
	    case Node.DOCUMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    case Node.DOCUMENT_FRAGMENT_NODE:
	      return _react2.default.createElement(
	        'span',
	        null,
	        data.nodeName
	      );
	    default:
	      return _react2.default.createElement(
	        'span',
	        null,
	        nameByNodeType[data.nodeType]
	      );
	  }
	};
	
	DOMNodePreview.propTypes = {
	  /** If true, just render a close tag */
	  isCloseTag: _react.PropTypes.bool,
	  /**  */
	  name: _react.PropTypes.string,
	  /** The DOM Node */
	  data: _react.PropTypes.object.isRequired,
	  /** Whether the DOM node has been expanded. */
	  expanded: _react.PropTypes.bool.isRequired
	};
	
	DOMNodePreview.contextTypes = {
	  theme: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired
	};
	
	exports.default = DOMNodePreview;

/***/ },
/* 136 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var TEXT_NODE_MAX_INLINE_CHARS = 80;
	
	var shouldInline = function shouldInline(data) {
	  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
	};
	
	exports.default = shouldInline;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*global window*/
	
	/**
	 * Check if object is dom node.
	 *
	 * @param {Object} val
	 * @return {Boolean}
	 * @api public
	 */
	
	module.exports = function isNode(val) {
	  if (!val || (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) !== 'object') return false;
	  if (window && 'object' == (0, _typeof3.default)(window.Node)) return val instanceof window.Node;
	  return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-inspector.map