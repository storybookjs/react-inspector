import React, { Component } from 'react';

/**
 * A short description of the object
 */
export default class ObjectDescription extends Component{
  render() {
    const object = this.props.object;
    switch (typeof object){
      case 'number':
        return (<span className="ObjectInspector-object-value-number">{object}</span>);
      case 'string':
        return (<span className="ObjectInspector-object-value-string">&quot;{object}&quot;</span>);
      case 'boolean':
        return (<span className="ObjectInspector-object-value-boolean">{String(object)}</span>);
      case 'undefined':
        return (<span className="ObjectInspector-object-value-undefined">undefined</span>);
      case 'object':
        if(object === null){
          return (<span className="ObjectInspector-object-value-null">null</span>)
        }
        if(object instanceof Date){
          return (<span>{object.toString()}</span>);
        }
        if(Array.isArray(object)){
          return (<span>{`Array[${object.length}]`}</span>);
        }
        return (<span className="ObjectInspector-object-value-object">Object</span>);
      case 'function':
        return (<span>
                  <span className="ObjectInspector-object-value-function-keyword">function</span>
                  <span className="ObjectInspector-object-value-function-name">&nbsp;{object.name}()</span>
                </span>);
      case 'symbol':
        return (<span className="ObjectInspector-object-value-symbol">Symbol()</span>)
      default:
        return (<span></span>);
    }
  }
}
