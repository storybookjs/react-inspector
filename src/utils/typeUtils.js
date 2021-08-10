const toString = Object.prototype.toString;
const SymbolIterator = Symbol.iterator;
// use '<' operator to compare same type of values or compare type precedence order #
function lt (v1, v2){
   if (v1 < v2) {
      return -1;
   } else if (v1 > v2) {
      return 1;
   } else {
      return 0;
   }
}

export function typeComparator (mapper, ascending){
   return (a, b) => {
      const v1 = mapper(a); // the datum
      const v2 = mapper(b);
      const type1 = typeof v1;
      const type2 = typeof v2;
      
      let result;
      if (type1 === type2) {
         result = lt(v1, v2);
      } else {
         // order of different types
         const order = {
            string: 0,
            number: 1,
            object: 2,
            symbol: 3,
            boolean: 4,
            undefined: 5,
            function: 6,
         };
         result = lt(order[type1], order[type2]);
      }
      // reverse result if descending
      if (!ascending) result = -result;
      return result;
   };
}
export function isArray(x) {
   return Array.isArray(x);
}

export function isIterable(x) {
   return isObject(x) && !!x[SymbolIterator];
}

//https://github.com/inspect-js/is-object/blob/main/index.js
export function isObject(x) {
   return typeof x === 'object' && x !== null;
}

//https://github.com/grncdr/js-is-function/blob/master/index.js
export function isFunction (fn/*){*/, _window= global) {
   if (!fn) {
      return false;
   }
   
   const string = toString.call(fn)
   return string === '[object Function]' ||
      (typeof fn === 'function' && string !== '[object RegExp]') ||
      (typeof _window !== 'undefined' &&
         // IE8 and below
         (
            fn === _window.setTimeout ||
            fn === _window.setInterval ||
            fn === _window.alert ||
            fn === _window.confirm ||
            fn === _window.prompt
         )
      )
}

//https://github.com/gearcase/is-window/blob/master/index.js
export function isWindow(obj) {
   
   if (obj == null) {
      return false;
   }
   
   return obj === Object(obj) && obj === obj.window;
}

//https://github.com/npm-dom/is-dom/blob/master/index.js
export function isNode(val, _window= global) {
   if (!isObject(val) || !isWindow(_window) || !(`Node` in _window)) {
      return false
   }
   
   return typeof val.nodeType === `number`
      && typeof val.nodeName === `string`
}
