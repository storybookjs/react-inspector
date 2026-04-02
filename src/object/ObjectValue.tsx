import React, { FC } from 'react';

import { useStyles } from '../styles';
import { useDataAccessor } from '../DataAccessorContext';

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
export const ObjectValue: FC<any> = ({ object, styles }) => {
  const themeStyles = useStyles('ObjectValue');
  const accessor = useDataAccessor();

  const mkStyle = (key: any) => ({ ...themeStyles[key], ...styles });

  const type = accessor.typeof(object);
  switch (type) {
    case 'bigint':
      return <span style={mkStyle('objectValueNumber')}>{accessor.toString(object)}n</span>;
    case 'number':
      return <span style={mkStyle('objectValueNumber')}>{accessor.toString(object)}</span>;
    case 'string':
      return <span style={mkStyle('objectValueString')}>"{accessor.toString(object)}"</span>;
    case 'boolean':
      return <span style={mkStyle('objectValueBoolean')}>{accessor.toString(object)}</span>;
    case 'undefined':
      return <span style={mkStyle('objectValueUndefined')}>undefined</span>;
    case 'object':
      if (accessor.isNull(object)) {
        return <span style={mkStyle('objectValueNull')}>null</span>;
      }
      if (accessor.isDate(object)) {
        return <span>{accessor.toString(object)}</span>;
      }
      if (accessor.isRegExp(object)) {
        return <span style={mkStyle('objectValueRegExp')}>{accessor.toString(object)}</span>;
      }
      if (accessor.isArray(object)) {
        return <span>{`Array(${accessor.length(object)})`}</span>;
      }
      if (accessor.isBuffer(object)) {
        return <span>{`Buffer[${accessor.length(object)}]`}</span>;
      }

      {
        const constructorName = accessor.getConstructorName(object);
        if (!constructorName) {
          return <span>Object</span>;
        }
        return <span>{constructorName}</span>;
      }
    case 'function':
      return (
        <span>
          <span style={mkStyle('objectValueFunctionPrefix')}>ƒ&nbsp;</span>
          <span style={mkStyle('objectValueFunctionName')}>{accessor.getFunctionName(object)}()</span>
        </span>
      );
    case 'symbol':
      return <span style={mkStyle('objectValueSymbol')}>{accessor.toString(object)}</span>;
    default:
      return <span />;
  }
};

// ObjectValue.propTypes = {
//   // the object to describe
//   object: PropTypes.any,
// };
