import React, { FC } from 'react';
import { ObjectName } from '../object/ObjectName';
import { ObjectValue } from '../object/ObjectValue';
import { ObjectPreview } from './ObjectPreview';

/**
 * if isNonenumerable is specified, render the name dimmed
 */
export const ObjectLabel: FC<any> = ({ name, data, isNonenumerable = false }) => {
  const object = data;

  return (
    <span>
      {typeof name === 'string' ? <ObjectName name={name} dimmed={isNonenumerable} /> : <ObjectPreview data={name} />}
      <span>: </span>
      <ObjectValue object={object} />
    </span>
  );
};

// ObjectLabel.propTypes = {
//   /** Non enumerable object property will be dimmed */
//   isNonenumerable: PropTypes.bool,
// };
