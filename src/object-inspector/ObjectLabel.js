import React from 'react';
import PropTypes from 'prop-types';
import ObjectName from '../object/ObjectName';
import ObjectValue from '../object/ObjectValue';

/**
 * if isNonenumerable is specified, render the name dimmed
 */
const ObjectLabel = ({ name, data, isNonenumerable, isMeta }) => {
  const object = data;

  return (
    <span>
      <ObjectName name={name} dimmed={isNonenumerable || isMeta} />
      {!isMeta && <span>: </span>}
      {!isMeta && <ObjectValue object={object} />}
    </span>
  );
};

ObjectLabel.propTypes = {
  /** Non enumerable object property will be dimmed */
  isNonenumerable: PropTypes.bool,
  /** meta info like array truncation lables */
  isMeta: PropTypes.bool
};

ObjectLabel.defaultProps = {
  isNonenumerable: false,
  isMeta: false
};

export default ObjectLabel;
