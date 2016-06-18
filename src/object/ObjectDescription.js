import React, { Component } from 'react';

import objectStyles from './objectStyles';

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
const ObjectDescription = ({ object }) => {
  switch (typeof object) {
    case 'number':
      return <span style={objectStyles.value.number}>{object}</span>
    case 'string':
      return <span style={objectStyles.value.string}>&quot;{object}&quot;</span>
    case 'boolean':
      return <span style={objectStyles.value.boolean}>{String(object)}</span>
    case 'undefined':
      return <span style={objectStyles.value.undefined}>undefined</span>
    case 'object':
      if(object === null){
        return <span style={objectStyles.value.null}>null</span>
      }
      if(object instanceof Date){
        return <span>{object.toString()}</span>
      }
      if(object instanceof RegExp){
        return <span style={objectStyles.value.regexp}>{object.toString()}</span>
      }
      if(Array.isArray(object)){
        return <span>{`Array[${object.length}]`}</span>
      }
      return <span>{object.constructor.name}</span>
    case 'function':
      return <span>
                <span style={objectStyles.value.function.keyword}>function</span>
                <span style={objectStyles.value.function.name}>&nbsp;{object.name}()</span>
              </span>
    case 'symbol':
      return <span style={objectStyles.value.symbol}>{object.toString()}</span>
    default:
      return <span></span>
  }
}

ObjectDescription.propTypes = {
  /** the object to describe */
  object: React.PropTypes.any
}

export default ObjectDescription
