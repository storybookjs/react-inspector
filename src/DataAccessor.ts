/**
 * DataAccessor abstracts all introspection operations on the value being inspected.
 *
 * By default, react-inspector uses native JavaScript operations (typeof, Object.keys,
 * property access, etc.) to inspect values. By providing a custom DataAccessor, you can
 * inspect proxy objects, remote values, or values in a different runtime (e.g. QuickJS)
 * that don't support native JS introspection.
 */
export interface DataAccessor {
  /**
   * Returns the type of the value as a string.
   * Should return the same values as the native `typeof` operator:
   * 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'
   *
   * Note: like native `typeof`, should return 'object' for null.
   */
  typeof(value: unknown): string;

  /**
   * Returns a string representation of the value, used for display.
   * For primitives this would be equivalent to `String(value)`.
   * For objects, this is the string representation (e.g. Date.toString(), RegExp.toString()).
   */
  toString(value: unknown): string;

  /**
   * Returns true if the value is null.
   */
  isNull(value: unknown): boolean;

  /**
   * Returns true if the value is an Array.
   * Equivalent to `Array.isArray(value)`.
   */
  isArray(value: unknown): boolean;

  /**
   * Returns true if the value is a Date instance.
   * Equivalent to `value instanceof Date`.
   */
  isDate(value: unknown): boolean;

  /**
   * Returns true if the value is a RegExp instance.
   * Equivalent to `value instanceof RegExp`.
   */
  isRegExp(value: unknown): boolean;

  /**
   * Returns true if the value is iterable (has Symbol.iterator) but is NOT an array.
   * Used to detect Map, Set, and other iterable objects.
   */
  isIterable(value: unknown): boolean;

  /**
   * Iterate over the value (for iterables like Map, Set).
   * Should return an iterator of entries. For Map-like values, each entry should be
   * a [key, value] pair (2-element array). For Set-like values, each entry is the element.
   */
  iterate(value: unknown): Iterable<unknown>;

  /**
   * Returns the number of elements if the value is an array or array-like.
   * Equivalent to `value.length` for arrays.
   */
  length(value: unknown): number;

  /**
   * Returns all own property names of the value (including non-enumerable ones).
   * Equivalent to `Object.getOwnPropertyNames(value)`.
   */
  getOwnPropertyNames(value: unknown): string[];

  /**
   * Returns the enumerable own property names of the value.
   * Equivalent to `Object.keys(value)`.
   */
  keys(value: unknown): string[];

  /**
   * Returns true if the property is an own property of the value.
   * Equivalent to `Object.prototype.hasOwnProperty.call(value, prop)`.
   */
  hasOwnProperty(value: unknown, prop: string): boolean;

  /**
   * Returns true if the property is enumerable.
   * Equivalent to `Object.prototype.propertyIsEnumerable.call(value, prop)`.
   */
  propertyIsEnumerable(value: unknown, prop: string): boolean;

  /**
   * Gets the value of a property on the object.
   * Equivalent to `value[prop]`, but should handle getter properties safely.
   */
  getProperty(value: unknown, prop: string): unknown;

  /**
   * Returns the prototype of the value, or null if it has none.
   * Equivalent to `Object.getPrototypeOf(value)`.
   */
  getPrototypeOf(value: unknown): unknown;

  /**
   * Returns the constructor name of an object value, or undefined if not available.
   * Equivalent to `value.constructor?.name`.
   */
  getConstructorName(value: unknown): string | undefined;

  /**
   * Returns the name of a function value.
   * Equivalent to `value.name` for functions.
   */
  getFunctionName(value: unknown): string;

  /**
   * Returns true if the value is a Buffer (Node.js Buffer).
   */
  isBuffer(value: unknown): boolean;

  /**
   * Returns true if the value should be treated as having child nodes
   * that can be expanded (i.e., is an object or function).
   */
  hasChildren(value: unknown): boolean;

  /**
   * Returns true if the value is the Object.prototype itself.
   * Used to avoid infinite recursion when showing __proto__.
   */
  isObjectPrototype(value: unknown): boolean;
}

/**
 * Default DataAccessor implementation that uses native JavaScript introspection.
 * This is used when no custom DataAccessor is provided.
 */
export const defaultDataAccessor: DataAccessor = {
  typeof(value: unknown): string {
    return typeof value;
  },

  toString(value: unknown): string {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    return String(value);
  },

  isNull(value: unknown): boolean {
    return value === null;
  },

  isArray(value: unknown): boolean {
    return Array.isArray(value);
  },

  isDate(value: unknown): boolean {
    return value instanceof Date;
  },

  isRegExp(value: unknown): boolean {
    return value instanceof RegExp;
  },

  isIterable(value: unknown): boolean {
    return (
      value != null &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      typeof (value as any)[Symbol.iterator] === 'function'
    );
  },

  iterate(value: unknown): Iterable<unknown> {
    return value as Iterable<unknown>;
  },

  length(value: unknown): number {
    return (value as any).length;
  },

  getOwnPropertyNames(value: unknown): string[] {
    return Object.getOwnPropertyNames(value);
  },

  keys(value: unknown): string[] {
    return Object.keys(value as object);
  },

  hasOwnProperty(value: unknown, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(value, prop);
  },

  propertyIsEnumerable(value: unknown, prop: string): boolean {
    return Object.prototype.propertyIsEnumerable.call(value, prop);
  },

  getProperty(value: unknown, prop: string): unknown {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(value, prop);
    if (propertyDescriptor && propertyDescriptor.get) {
      try {
        return propertyDescriptor.get.call(value);
      } catch {
        return propertyDescriptor.get;
      }
    }
    return (value as any)[prop];
  },

  getPrototypeOf(value: unknown): unknown {
    return Object.getPrototypeOf(value);
  },

  getConstructorName(value: unknown): string | undefined {
    const obj = value as any;
    if (!obj.constructor) return undefined;
    return obj.constructor.name;
  },

  getFunctionName(value: unknown): string {
    return (value as any).name;
  },

  isBuffer(value: unknown): boolean {
    const obj = value as any;
    return typeof obj.constructor?.isBuffer === 'function' && obj.constructor.isBuffer(obj);
  },

  hasChildren(value: unknown): boolean {
    return (typeof value === 'object' && value !== null) || typeof value === 'function';
  },

  isObjectPrototype(value: unknown): boolean {
    return value === Object.prototype;
  },
};
