import React, { FC, ReactNode } from 'react';

import { ObjectValue } from '../object/ObjectValue';
import { ObjectName } from '../object/ObjectName';

import { useStyles } from '../styles';
import { useDataAccessor } from '../DataAccessorContext';

/* intersperse arr with separator */
function intersperse(arr: any[], sep: string) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

/**
 * A preview of the object
 */
export const ObjectPreview: FC<any> = ({ data }) => {
  const styles = useStyles('ObjectPreview');
  const accessor = useDataAccessor();
  const object = data;

  const type = accessor.typeof(object);
  if (type !== 'object' || accessor.isNull(object) || accessor.isDate(object) || accessor.isRegExp(object)) {
    return <ObjectValue object={object} />;
  }

  if (accessor.isArray(object)) {
    const maxProperties = styles.arrayMaxProperties;
    const arrayLength = accessor.length(object);
    const previewArray: ReactNode[] = [];
    for (let i = 0; i < Math.min(arrayLength, maxProperties); i++) {
      previewArray.push(<ObjectValue key={i} object={accessor.getProperty(object, String(i))} />);
    }
    if (arrayLength > maxProperties) {
      previewArray.push(<span key="ellipsis">…</span>);
    }
    return (
      <React.Fragment>
        <span style={styles.objectDescription}>{arrayLength === 0 ? `` : `(${arrayLength})\xa0`}</span>
        <span style={styles.preview}>[{intersperse(previewArray, ', ')}]</span>
      </React.Fragment>
    );
  } else {
    const maxProperties = styles.objectMaxProperties;
    const propertyNodes: ReactNode[] = [];
    const allKeys = accessor.keys(object);

    for (const propertyName of allKeys) {
      if (accessor.hasOwnProperty(object, propertyName)) {
        let ellipsis;
        if (propertyNodes.length === maxProperties - 1 && allKeys.length > maxProperties) {
          ellipsis = <span key={'ellipsis'}>…</span>;
        }

        const propertyValue = accessor.getProperty(object, propertyName);
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

    const objectConstructorName = accessor.getConstructorName(object) || 'Object';

    return (
      <React.Fragment>
        <span style={styles.objectDescription}>
          {objectConstructorName === 'Object' ? '' : `${objectConstructorName} `}
        </span>
        <span style={styles.preview}>
          {'{'}
          {intersperse(propertyNodes, ', ')}
          {'}'}
        </span>
      </React.Fragment>
    );
  }
};
