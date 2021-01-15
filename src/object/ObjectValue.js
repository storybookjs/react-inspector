import React from 'react';
import PropTypes from 'prop-types';

import {propertyValueFormatter} from '../utils/propertyUtils';
import { useStyles } from '../styles';

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
const ObjectValue = ({ object, styles , propertyValueFormatter}) => {
  const themeStyles = useStyles('ObjectValue');

  const mkStyle = key => ({ ...themeStyles[key], ...styles });

  switch (typeof object) {
    case 'bigint':
      return <span style={mkStyle('objectValueNumber')}>{propertyValueFormatter(object, 'bigint')}</span>;
    case 'number':
      return <span style={mkStyle('objectValueNumber')}>{propertyValueFormatter(object, 'number')}</span>;
    case 'string':
      return <span style={mkStyle('objectValueString')}>{propertyValueFormatter(object, 'string')}</span>;
    case 'boolean':
      return (
        <span style={mkStyle('objectValueBoolean')}>{propertyValueFormatter(object, 'boolean')}</span>
      );
    case 'undefined':
      return <span style={mkStyle('objectValueUndefined')}>{propertyValueFormatter(undefined, 'undefined')}</span>;
    case 'object':
      if (object === null) {
        return <span style={mkStyle('objectValueNull')}>{propertyValueFormatter(null, 'null')}</span>;
      }
      if (object instanceof Date) {
        return <span>{propertyValueFormatter(object, 'Date')}</span>;
      }
      if (object instanceof RegExp) {
        return (
          <span style={mkStyle('objectValueRegExp')}>{propertyValueFormatter(object, 'RegExp')}</span>
        );
      }
      if (Array.isArray(object)) {
        return <span>{propertyValueFormatter(object, 'Array')}</span>;
      }
      if (!object.constructor) {
        return <span>{propertyValueFormatter(object, 'Object')}</span>;
      }
      if (
        typeof object.constructor.isBuffer === 'function' &&
        object.constructor.isBuffer(object)
      ) {
        return <span>{propertyValueFormatter(object, 'Buffer')}</span>;
      }

      return <span>{propertyValueFormatter(object, 'Class')}</span>;
    case 'function':
      return (
        <span>
          <span style={mkStyle('objectValueFunctionPrefix')}>ƒ&nbsp;</span>
          <span style={mkStyle('objectValueFunctionName')}>
            {propertyValueFormatter(object, 'function')}
          </span>
        </span>
      );
    case 'symbol':
      return (
        <span style={mkStyle('objectValueSymbol')}>{propertyValueFormatter(object, 'symbol')}</span>
      );
    default:
      return <span >{propertyValueFormatter(object, 'unknown')}</span>;
  }
};

ObjectValue.propTypes = {
  // the object to describe
  object: PropTypes.any,
  /** Function to format the content */
  propertyValueFormatter: PropTypes.func.isRequired,
};

ObjectValue.defaultProps = {
   propertyValueFormatter,
};

export default ObjectValue;
