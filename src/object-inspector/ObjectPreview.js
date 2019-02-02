import React from 'react';
import PropTypes from 'prop-types';

import ObjectValue from '../object/ObjectValue';
import ObjectName from '../object/ObjectName';

/* NOTE: Chrome console.log is italic */
const styles = {
  preview: {
    fontStyle: 'italic',
  },
};

/* intersperse arr with separator */
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

/**
 * A preview of the object
 */
const ObjectPreview = ({ data, maxProperties = 5 }) => {
  const object = data;

  if (
    typeof object !== 'object' ||
    object === null ||
    object instanceof Date ||
    object instanceof RegExp
  ) {
    return <ObjectValue object={object} />;
  }

  if (Array.isArray(object)) {
    const previewArray = object
      .slice(0, maxProperties)
      .map((element, index) => <ObjectValue key={index} object={element} />);
    if (object.length > maxProperties) {
      previewArray.push(<span key="ellipsis">…</span>);
    }
    return (
      <React.Fragment>
        <span>{`Array(${object.length})`}</span>
        <span style={styles.preview}>[{intersperse(previewArray, ',')}]</span>
      </React.Fragment>
    );
  } else {
    let propertyNodes = [];
    for (let propertyName in object) {
      const propertyValue = object[propertyName];
      if (object.hasOwnProperty(propertyName)) {
        let ellipsis;
        if (
          propertyNodes.length === maxProperties - 1 &&
          Object.keys(object).length > maxProperties
        ) {
          ellipsis = <span key={'ellipsis'}>…</span>;
        }
        propertyNodes.push(
          <span key={propertyName}>
            <ObjectName name={propertyName || `""`} />
            :&nbsp;
            <ObjectValue object={propertyValue} />
            {ellipsis}
          </span>
        );
        if (ellipsis) break;
      }
    }

    return (
      <span style={styles.preview}>
        {`${object.constructor.name} {`}
        {intersperse(propertyNodes, ', ')}
        {'}'}
      </span>
    );
  }
};

ObjectPreview.propTypes = {
  /**
   * max number of properties shown in the property view
   */
  maxProperties: PropTypes.number,
};

export default ObjectPreview;
