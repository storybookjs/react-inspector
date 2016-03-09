import React, { Component } from 'react';

export ObjectInspector from './object-inspector/ObjectInspector'
export TableInspector from './table-inspector/TableInspector'
// export ObjectDecription from './object/ObjectDescription'
// export ObjectPreview from './object/ObjectPreview'

// Wrapping the inspectors
import ObjectInspector from './object-inspector/ObjectInspector'
import TableInspector from './table-inspector/TableInspector'

import { getRootPath, wildcardPathsFromLevel, pathsFromWildcardPaths } from './object-inspector/pathUtils'

const Inspector = ({ data, name = undefined, level = 0, path = undefined, table = false }) => {
  if(table){
    return <TableInspector data={data} />
  }

  // TODO: refactor out root path
  let wildcardPaths = []
  if(level !== undefined){
    wildcardPaths = wildcardPaths.concat(wildcardPathsFromLevel(level, name))
  }
  const appendRootPathToPath = (path) => `${getRootPath(name)}.${path}`
  if(typeof path === 'string'){
    wildcardPaths.push(appendRootPathToPath(path))
  }
  if(typeof path === 'array'){
    // paths
    wildcardPaths = wildcardPaths.concat(path.map(p => appendRootPathToPath(p)))
  }

  // console.log(wildcardPaths)

  return <ObjectInspector data={data} initialExpandedPaths={wildcardPaths}/>
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
