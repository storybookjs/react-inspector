import React, { Component, PropTypes } from 'react';

import objectStyles from './objectStyles';

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
const ObjectName = ({ name, dimmed }) =>
  <span style={dimmed ?  objectStyles.nameDimmed : objectStyles.name}>{ name }</span>

ObjectName.propTypes = {
  /** Property name */
  name: PropTypes.string,
  /** Should property name be dimmed */
  dimmed: PropTypes.bool,
}

export default ObjectName
