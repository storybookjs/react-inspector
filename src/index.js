import React, { Component } from 'react';

export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'

// NOTE: ObjectDecription and ObjectPreview can be used as building blocks, but currently their styles are not complete
// export ObjectDecription from './object/ObjectDescription'
// export ObjectPreview from './object/ObjectPreview'

// Wrapping the inspectors
import ObjectInspector from './object-inspector/ObjectInspector'
import TableInspector from './table-inspector/TableInspector'

import { getRootPath, wildcardPathsFromLevel, pathsFromWildcardPaths } from './object-inspector/pathUtils'

const Inspector = ({ table = false, data, ...rest }) => {
  if(table){
    return <TableInspector data={data} />
  }

  return <ObjectInspector data={data} {...rest} />

  // // TODO: refactor out root path
  // let wildcardPaths = []
  // if(level !== undefined){
  //   wildcardPaths = wildcardPaths.concat(wildcardPathsFromLevel(level, name))
  // }
  // const appendRootPathToPath = (path) => `${getRootPath(name)}.${path}`
  // if(typeof path === 'string'){
  //   wildcardPaths.push(appendRootPathToPath(path))
  // }
  // if(typeof path === 'array'){
  //   // paths
  //   wildcardPaths = wildcardPaths.concat(path.map(p => appendRootPathToPath(p)))
  // }

  // console.log(wildcardPaths)

  // return <ObjectInspector data={data} name={name} initialExpandedPaths={wildcardPaths}/>
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
