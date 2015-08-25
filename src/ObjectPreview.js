import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';

function intersperse(arr, sep){
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function(xs, x, i) {
      return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object on root level node
 */
export default class ObjectPreview extends Component {
  propTypes: {
    maxProperties: PropTypes.number; // maximum properties displayed in preview
  }

  static defaultProps = {
    maxProperties: 5
  }

  render() {
    const object = this.props.object;
    if (typeof object !== 'object' || object === null) {
      return (<ObjectDescription object={object} />);
    }

    if (Array.isArray(object)) {
      return <span className="ObjectInspector-object-preview">[
        {intersperse(object.map(function(element, index){
          return (<ObjectDescription key={index} object={element} />)
        }), ", ")}
      ]</span>;
    }
    else if (object instanceof Date) {
      return <span>{object.toString()}</span>;
    }
    else {
      let propertyNodes = [];
      for(let propertyName in object){
        const propertyValue = object[propertyName];
        if(object.hasOwnProperty(propertyName)){
          let ellipsis;
          if (propertyNodes.length === (this.props.maxProperties - 1)
              && Object.keys(object).length > this.props.maxProperties) {
            ellipsis = (<span key={'ellipsis'}>…</span>);
          }
          propertyNodes.push(
            <span key={propertyName}>
              <span className="ObjectInspector-object-name">{propertyName}</span>
              :&nbsp;
              <ObjectDescription object={propertyValue} />
              {ellipsis}
            </span>
          );
          if(ellipsis)
            break;
        }
      }

      return (<span className="ObjectInspector-object-preview">
                  {'Object {'}
                  {intersperse(propertyNodes, ", ")}
                  {'}'}
              </span>);
    }
  }
}
