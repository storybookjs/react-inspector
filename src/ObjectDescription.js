import React, { Component } from 'react';

// Styles
import objectStyles from './objectStyles';

/**
 * A short description of the object
 */
export default class ObjectDescription extends Component{
  render() {
    const object = this.props.object;
    switch (typeof object){
      case 'number':
        return (<span style={objectStyles.value.number}>{object}</span>);
      case 'string':
        return (<span style={objectStyles.value.string}>&quot;{object}&quot;</span>);
      case 'boolean':
        return (<span style={objectStyles.value.boolean}>{String(object)}</span>);
      case 'undefined':
        return (<span style={objectStyles.value.undefined}>undefined</span>);
      case 'object':
        if(object === null){
          return (<span style={objectStyles.value.null}>null</span>)
        }
        if(object instanceof Date){
          return (<span>{object.toString()}</span>);
        }
        if(Array.isArray(object)){
          return (<span>{`Array[${object.length}]`}</span>);
        }
        return (<span>Object</span>);
      case 'function':
        return (<span>
                  <span style={objectStyles.value.function.keyword}>function</span>
                  <span style={objectStyles.value.function.name}>&nbsp;{object.name}()</span>
                </span>);
      case 'symbol':
        return (<span style={objectStyles.value.symbol}>Symbol()</span>)
      default:
        return (<span></span>);
    }
  }
}
