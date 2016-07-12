import React, { Component } from 'react';

export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'
export DOMInspector from './dom-inspector/DOMInspector'

// NOTE: ObjectValue and ObjectPreview can be used as building blocks, but currently their styles are not complete
// export ObjectValue from './object/ObjectValue'
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
  data: React.PropTypes.any,
  name: React.PropTypes.string,
  path: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array
  ]),
  table: React.PropTypes.bool
}

export { Inspector }

export default Inspector
