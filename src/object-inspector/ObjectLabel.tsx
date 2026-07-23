import React, { FC } from 'react';
import { ObjectName } from '../object/ObjectName';
import { ObjectValue } from '../object/ObjectValue';
import { ObjectPreview } from './ObjectPreview';
import { useStyles } from '../styles';

/**
 * Clickable "(...)" affordance shown in place of a getter property's value
 * until the user chooses to invoke the getter (Chrome DevTools style).
 */
const UnevaluatedGetterLabel: FC<any> = ({ onInvokeGetter }) => {
  const styles = useStyles('ObjectLabel');
  return (
    <span
      style={styles.getterLabel}
      title="Invoke property getter"
      role="button"
      onClick={onInvokeGetter}>
      (...)
    </span>
  );
};

/**
 * if isNonenumerable is specified, render the name dimmed
 */
export const ObjectLabel: FC<any> = ({
  name,
  data,
  isNonenumerable = false,
  isAccessor = false,
  getterEvaluated = true,
  onInvokeGetter,
}) => {
  const object = data;

  return (
    <span>
      {typeof name === 'string' ? <ObjectName name={name} dimmed={isNonenumerable} /> : <ObjectPreview data={name} />}
      <span>: </span>
      {isAccessor && !getterEvaluated ? (
        <UnevaluatedGetterLabel onInvokeGetter={onInvokeGetter} />
      ) : (
        <ObjectValue object={object} />
      )}
    </span>
  );
};

// ObjectLabel.propTypes = {
//   /** Non enumerable object property will be dimmed */
//   isNonenumerable: PropTypes.bool,
// };
