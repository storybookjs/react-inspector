import React, { FC } from 'react';
import { TreeView } from '../tree-view/TreeView';

import { ObjectRootLabel } from './ObjectRootLabel';
import { ObjectLabel } from './ObjectLabel';

import { DataAccessor, defaultDataAccessor } from '../DataAccessor';

import { themeAcceptor } from '../styles';

const createIterator = (showNonenumerable: any, sortObjectKeys: any, accessor: DataAccessor) => {
  const objectIterator = function* (data: any) {
    if (!accessor.hasChildren(data)) return;

    const dataIsArray = accessor.isArray(data);

    // iterable objects (except arrays)
    if (!dataIsArray && accessor.isIterable(data)) {
      let i = 0;
      for (const entry of accessor.iterate(data)) {
        if (accessor.isArray(entry) && accessor.length(entry) === 2) {
          const k = accessor.getProperty(entry, '0');
          const v = accessor.getProperty(entry, '1');
          yield {
            name: k,
            data: v,
          };
        } else {
          yield {
            name: i.toString(),
            data: entry,
          };
        }
        i++;
      }
    } else {
      const keys = accessor.getOwnPropertyNames(data);
      if (sortObjectKeys === true && !dataIsArray) {
        // Array keys should not be sorted in alphabetical order
        keys.sort();
      } else if (typeof sortObjectKeys === 'function') {
        keys.sort(sortObjectKeys);
      }

      for (const propertyName of keys) {
        if (accessor.propertyIsEnumerable(data, propertyName)) {
          const propertyValue = accessor.getProperty(data, propertyName);
          yield {
            name: propertyName || `""`,
            data: propertyValue,
          };
        } else if (showNonenumerable) {
          // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
          // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
          // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
          let propertyValue;
          try {
            propertyValue = accessor.getProperty(data, propertyName);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (e) {
            // console.warn(e)
          }

          if (propertyValue !== undefined) {
            yield {
              name: propertyName,
              data: propertyValue,
              isNonenumerable: true,
            };
          }
        }
      }

      // [[Prototype]] of the object: `Object.getPrototypeOf(data)`
      // the property name is shown as "__proto__"
      if (showNonenumerable && !accessor.isObjectPrototype(data) /* already added */) {
        yield {
          name: '__proto__',
          data: accessor.getPrototypeOf(data),
          isNonenumerable: true,
        };
      }
    }
  };

  return objectIterator;
};

const defaultNodeRenderer = ({ depth, name, data, isNonenumerable }: any) =>
  depth === 0 ? (
    <ObjectRootLabel name={name} data={data} />
  ) : (
    <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
  );

/**
 * Tree-view for objects
 */
const ObjectInspector: FC<any> = ({
  showNonenumerable = false,
  sortObjectKeys,
  nodeRenderer,
  dataAccessor = defaultDataAccessor,
  ...treeViewProps
}) => {
  const dataIterator = createIterator(showNonenumerable, sortObjectKeys, dataAccessor);
  const renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;

  return (
    <TreeView nodeRenderer={renderer} dataIterator={dataIterator} dataAccessor={dataAccessor} {...treeViewProps} />
  );
};

// ObjectInspector.propTypes = {
//   /** An integer specifying to which level the tree should be initially expanded. */
//   expandLevel: PropTypes.number,
//   /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
//   expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

//   name: PropTypes.string,
//   /** Not required prop because we also allow undefined value */
//   data: PropTypes.any,

//   /** Show non-enumerable properties */
//   showNonenumerable: PropTypes.bool,
//   /** Sort object keys with optional compare function. */
//   sortObjectKeys: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

//   /** Provide a custom nodeRenderer */
//   nodeRenderer: PropTypes.func,
// };

const themedObjectInspector = themeAcceptor(ObjectInspector);

export { themedObjectInspector as ObjectInspector };
