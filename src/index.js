import React, { Component } from 'react';

export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'
export DOMInspector from './dom-inspector/DOMInspector'

// NOTE: ObjectDecription and ObjectPreview can be used as building blocks, but currently their styles are not complete
// export ObjectDecription from './object/ObjectDescription'
// export ObjectPreview from './object/ObjectPreview'

// Wrapping the inspectors
import ObjectInspector from './object-inspector/ObjectInspector'
import TableInspector from './table-inspector/TableInspector'
import DOMInspector from './dom-inspector/DOMInspector'

import isDOM from 'is-dom'

const Inspector = ({ table = false, data, ...rest }) => {
  if(table){
    return <TableInspector data={data} {...rest} />
  }

  if(isDOM(data))
    return <DOMInspector data={data} {...rest} />

  return <ObjectInspector data={data} {...rest} />
}

Inspector.propTypes = {
  data: React.PropTypes.any.isRequired,
  name: React.PropTypes.string,
  level: React.PropTypes.number,
  path: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  table: React.PropTypes.bool
}

export default Inspector
