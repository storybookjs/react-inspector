import React, { Component } from 'react'
import PropTypes from 'prop-types'
import createStyles from '../styles/createStyles'

/**
 * A short description of the object values.
 * Can be used to render tree node in ObjectInspector
 * or render objects in TableInspector.
 */
const ObjectValue = ({ object }, { theme }) => {
  const styles = createStyles( 'ObjectValue', theme )

  switch (typeof object) {
    case 'number':
      return <span style={styles.objectValueNumber}>{object}</span>
    case 'string':
      return <span style={styles.objectValueString}>&quot;{object}&quot;</span>
    case 'boolean':
      return <span style={styles.objectValueBoolean}>{String(object)}</span>
    case 'undefined':
      return <span style={styles.objectValueUndefined}>undefined</span>
    case 'object':
      if(object === null){
        return <span style={styles.objectValueNull}>null</span>
      }
      if(object instanceof Date){
        return <span>{object.toString()}</span>
      }
      if(object instanceof RegExp){
        return <span style={styles.objectValueRegExp}>{object.toString()}</span>
      }
      if(Array.isArray(object)){
        return <span>{`Array[${object.length}]`}</span>
      }
      return <span>{object.constructor.name}</span>
    case 'function':
      return <span>
                <span style={styles.objectValueFunctionKeyword}>function</span>
                <span style={styles.objectValueFunctionName}>&nbsp;{object.name}()</span>
              </span>
    case 'symbol':
      return <span style={styles.objectValueSymbol}>{object.toString()}</span>
    default:
      return <span></span>
  }
}

ObjectValue.propTypes = {
  /** the object to describe */
  object: PropTypes.any
}

ObjectValue.contextTypes = {
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default ObjectValue
