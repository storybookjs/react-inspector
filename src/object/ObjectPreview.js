import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';
import ObjectName from './ObjectName'

const styles = {
  preview: {
    fontStyle: 'italic',
  }
}

function intersperse(arr, sep){
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function(xs, x, i) {
      return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object
 * if a name is specified, it will render a simplified preview with a short description
 */
const ObjectPreview = ({ maxProperties, object, name, query }) => {
  if (typeof name !== 'undefined') {

    const Colon = () => <span>: </span>
    return <span>
            <ObjectName name={name} query={query} />
            <Colon />
            <ObjectDescription object={object} />
          </span>
  }

  if (typeof object !== 'object' || object === null) {
    return (<ObjectDescription object={object} />);
  }

  if (Array.isArray(object)) {
    return <span style={styles.preview}>[
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
        if (propertyNodes.length === (maxProperties - 1)
            && Object.keys(object).length > maxProperties) {
          ellipsis = (<span key={'ellipsis'}>…</span>);
        }
        propertyNodes.push(
          <span key={propertyName}>
            <ObjectName name={propertyName} query={query}/>
            :&nbsp;
            <ObjectDescription object={propertyValue} />
            {ellipsis}
          </span>
        );
        if(ellipsis)
          break;
      }
    }

    return (<span style={styles.preview}>
                {'Object {'}
                {intersperse(propertyNodes, ", ")}
                {'}'}
            </span>);
  }
}

ObjectPreview.propTypes = {
  maxProperties: React.PropTypes.number
}
ObjectPreview.defaultProps = {
  maxProperties: 5 /* max number of properties shown in the property view */
}

export default ObjectPreview
