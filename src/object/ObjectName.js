import React from 'react';
import PropTypes from 'prop-types';

import {propertyValueFormatter as defaultPropertyValueFormatter} from '../utils/propertyUtils';
import { useStyles } from '../styles';

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
const ObjectName = ({ name, dimmed = false, styles = {} , propertyValueFormatter = defaultPropertyValueFormatter}) => {
  const themeStyles = useStyles('ObjectName');
  const appliedStyles = {
    ...themeStyles.base,
    ...(dimmed ? themeStyles['dimmed'] : {}),
    ...styles,
  };

  return <span style={appliedStyles}>{propertyValueFormatter(name, 'any')}</span>;
};

ObjectName.propTypes = {
  /** Property name */
  name: PropTypes.string,
  /** Should property name be dimmed */
  dimmed: PropTypes.bool,
  /** Function to format the content. It receives the current object to be rendered and its type, it must return valid react children. */
  propertyValueFormatter: PropTypes.func,
};

export default ObjectName;
