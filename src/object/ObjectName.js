import React, { Component, PropTypes } from 'react'
import createStyles from '../styles/createStyles'

/**
 * A view for object property names.
 *
 * If the property name is enumerable (in Object.keys(object)),
 * the property name will be rendered normally.
 *
 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
 * the property name will be dimmed to show the difference.
 */
const ObjectName = ({ name, dimmed }, { theme }) => {
  const styles = createStyles('ObjectName', theme)
  return <span style={{...styles.base, ...(dimmed && styles.dimmed)}}>{ name }</span>
}

ObjectName.propTypes = {
  /** Property name */
  name: PropTypes.string,
  /** Should property name be dimmed */
  dimmed: PropTypes.bool,
}

ObjectName.defaultProps = {
  dimmed: false,
}

ObjectName.contextTypes = {
  theme: React.PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default ObjectName
