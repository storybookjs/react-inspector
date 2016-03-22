export const DEFAULT_ROOT_PATH='root';

/* should be modified to support __proto__ */
export const isExpandable = (data) => (typeof data === 'object' && data !== null && Object.keys(data).length > 0)

export const getPathsState = (expandLevel, expandPaths, data, rootName, initialState = {}) => {
  let wildcardPaths = []
  const rootPath = DEFAULT_ROOT_PATH
  if(expandLevel !== undefined){
    wildcardPaths = wildcardPaths.concat(wildcardPathsFromLevel(expandLevel))
  }

  const appendRootPathToPath = (path) => `${rootPath}.${path}`
  if(typeof expandPaths === 'string'){
    wildcardPaths.push(appendRootPathToPath(expandPaths))
  }
  if(typeof expandPaths === 'array'){
    wildcardPaths = wildcardPaths.concat(expandPaths.map(p => appendRootPathToPath(p)))
  }

  const paths = pathsFromWildcardPaths(wildcardPaths, data, rootPath)
  const pathsState = paths.reduce((obj, path) => { obj[path] = true; return obj }, initialState)

  return pathsState
}

/**
 * Convert wild card paths to concrete paths
 * @param  {array} initialExpandedPaths  wild card paths
 * @param  {object} data                 data object
 * @param  {string} rootName             optional root name (if not specified will use DEFAULT_ROOT_PATH)
 * @return {array}                       concrete paths
 */
export const pathsFromWildcardPaths = (wildcardPaths, data) => {
  const paths = []
  const rootPath = DEFAULT_ROOT_PATH
  if(wildcardPaths === undefined){
    return paths;
  }
  wildcardPaths.map((wildcardPath)=>{
    if(typeof wildcardPath === 'string'){
      const names = wildcardPath.split('.'); // wildcard names
      // recursively populate paths with wildcard paths
      function populatePaths(curObject, curPath, i){
        const WILDCARD = "*";
        if(i === names.length){
          paths.push(curPath);
          return;
        }
        const name = names[i];
        if(i === 0){
          if(isExpandable(curObject) && (name === rootPath || name === WILDCARD)){
            populatePaths(curObject, rootPath, i + 1);
          }
        }
        else{
          if(name === WILDCARD){ // matches anything
            for(const propertyName in curObject){
              if(curObject.hasOwnProperty(propertyName)){
                const propertyValue = curObject[propertyName];
                if(isExpandable(propertyValue)){
                  populatePaths(propertyValue, curPath + '.' + propertyName, i + 1);
                }
                else{
                  continue;
                }
              }
            }
          }
          else{
            const propertyValue = curObject[name];
            if(isExpandable(propertyValue)){
              populatePaths(propertyValue, curPath + '.' + name, i + 1);
            }
          }
        }
      }
      populatePaths(data, '', 0);
    }
  });
  return paths;
}

export const wildcardPathsFromLevel = (level) => {
  if(level < 0){
    return undefined
  }
  if(level === 0){
    return []
  }
  let rootPath = DEFAULT_ROOT_PATH
  let path = rootPath
  const wildcardPaths = [path]
  for(let i = 1; i < level; i++){
    path += '.*'
    wildcardPaths.push(path)
  }
  return wildcardPaths
}


export const pathsFromDataAndLevel = (data, level) => {
  const wildcardPaths = wildcardPathsFromLevel(level)
  return pathsFromWildcardPaths(wildcardPaths, data)
}
