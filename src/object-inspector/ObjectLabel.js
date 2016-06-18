import React, { Component, PropTypes } from 'react'
import ObjectName from '../object/ObjectName'
import ObjectDescription from '../object/ObjectDescription'

const Colon = () => <span>: </span>

/**
 * if isNonenumerable is specified, render the name dimmed
 */
const ObjectLabel = ({ name, data, isNonenumerable }) => {
  const object = data

  return (
    <span>
      <ObjectName name={name} dimmed={isNonenumerable} />
      <Colon />
      <ObjectDescription object={object} />
    </span>
  )
}

ObjectLabel.propTypes = {
  isNonenumerable: PropTypes.bool, // non enumerable object will be dimmed
}

ObjectLabel.defaultProps = {
  isNonenumerable: false,
}

export default ObjectLabel
