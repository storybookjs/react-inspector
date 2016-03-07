import React, { Component } from 'react';

import ObjectInspector from './object-inspector/ObjectInspector'
import TableInspector from './table-inspector/TableInspector'

export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'
// export ObjectDecription from './object/ObjectDescription'
// export ObjectPreview from './object/ObjectPreview'

const Inspector = ({ data, name, level, path, table }) => {
  // if(level){
  //
  // }
  //
  if(table){
    return <TableInspector data={data} />
  }

  // By default, Tree Inspector similar to console.dir
  if(level){
    // level = 1
    //  ['root']
    // level = 2
    //
    //
    // console.log(level)
  }
  return <ObjectInspector data={data} />
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
