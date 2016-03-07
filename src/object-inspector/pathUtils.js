export const DEFAULT_ROOT_PATH='root';

export const isExpandable = (data) => (typeof data === 'object' && data !== null && Object.keys(data).length > 0)

export const pathsStateFromPaths = (paths, initialState = {}) => paths.reduce((obj, path) => { obj[path] = true; return obj }, initialState)

/**
 * Convert wild card paths to concrete paths
 * @param  {array} initialExpandedPaths  wild card paths
 * @param  {object} data                 data object
 * @param  {string} rootName             optional root name (if not specified will use DEFAULT_ROOT_PATH)
 * @return {array}                       concrete paths
 */
export const pathsFromWildcardPaths = (wildcardPaths, data, rootName = DEFAULT_ROOT_PATH) => {
  // console.log(`${data} ${wildcardPaths}`)

  const paths = []
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
          if(name === rootName /*|| name === DEFAULT_ROOT_PATH*/ || name === WILDCARD){
            populatePaths(curObject, 'root', i + 1);
          }
        }
        else{
          if(name === WILDCARD){
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

export const wildcardPathsFromLevel = (level, rootName = DEFAULT_ROOT_PATH) => {
  if(level < 0){
    return undefined
  }
  if(level === 0){
    return []
  }
  let path = rootName
  const wildcardPaths = [path]
  for(let i = 1; i < level; i++){
    rootName += '.*'
    wildcardPaths.push(rootName)
  }
  return wildcardPaths
}

export const pathsFromDataAndLevel = (data, level, rootName = DEFAULT_ROOT_PATH) => {
  const wildcardPaths = wildcardPathsFromLevel(level, rootName)
  return pathsFromWildcardPaths(wildcardPaths, data, rootName)
}
