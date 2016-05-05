import React, { Component, PropTypes } from 'react';

import ObjectDescription from './ObjectDescription';
import ObjectName from './ObjectName'

/* NOTE: Chrome console.log is italic */
const styles = {
  preview: {
    fontStyle: 'italic',
  }
}

/* intersperse arr with sep */
function intersperse(arr, sep){
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

/**
 * A preview of the object
 * if isNonenumerable is specified, render the name dimmed
 * if a name is specified, it will render a simplified preview with a short description
 */
const ObjectPreview = ({ maxProperties, object, name, isNonenumerable }) => {
  if (typeof name !== 'undefined') {
    const Colon = () => <span>: </span>
    return <span>
            <ObjectName name={name} dimmed={isNonenumerable} />
            <Colon />
            <ObjectDescription object={object} />
          </span>
  }

  if (typeof object !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
    return <ObjectDescription object={object} />;
  }

  if (Array.isArray(object)) {
    return <span style={styles.preview}>
            [{intersperse(object.map((element, index) => <ObjectDescription key={index} object={element} />), ", ")}]
           </span>
  }
  else {
    let propertyNodes = [];
    for(let propertyName in object){
      const propertyValue = object[propertyName]
      if(object.hasOwnProperty(propertyName)){
        let ellipsis
        if (propertyNodes.length === (maxProperties - 1)
            && Object.keys(object).length > maxProperties) {
          ellipsis = <span key={'ellipsis'}>…</span>
        }
        propertyNodes.push(
          <span key={propertyName}>
            <ObjectName name={propertyName} />
            :&nbsp;
            <ObjectDescription object={propertyValue} />
            {ellipsis}
          </span>
        )
        if(ellipsis)
          break;
      }
    }

    return <span style={styles.preview}>
                {'Object {'}
                {intersperse(propertyNodes, ", ")}
                {'}'}
            </span>
  }
}

ObjectPreview.propTypes = {
  maxProperties: PropTypes.number,
  isNonenumerable: PropTypes.bool, // non enumerable object will be dimmed
}
ObjectPreview.defaultProps = {
  maxProperties: 5, // max number of properties shown in the property view
  isNonenumerable: false,
}

export default ObjectPreview
