import React, {
   useContext,
   createContext,
   useState,
   useCallback,
   useMemo,
   useRef,
} from 'react';
import {storiesOf} from '@storybook/react';
import Highlighter from 'react-highlight-words';
import Inspector, {
   ObjectName as InspectorObjectName,
   ObjectValue as InspectorObjectValue,
   useStyles,
} from '../src';
import {propertyValueFormatter} from '../src/utils/propertyUtils';
import {hasOwnProperty} from '../src/utils/objectPrototype';
import {getPropertyValue} from "../src/utils/propertyUtils";
import {getExpandedPaths} from '../src/tree-view/pathUtils';

const SearchContext = createContext(['', () => {}]);
const withSearchContext = Component => {
   return props => {
      const [, searchValueHighlighter] = useContext(SearchContext);
      return (
         <Component
            propertyValueFormatter={searchValueHighlighter}
            {...props}
         />
      );
   };
};
const ObjectValue = withSearchContext(InspectorObjectValue);
const ObjectName = withSearchContext(InspectorObjectName);

/* intersperse arr with separator */
function intersperse(arr, sep) {
   if (arr.length === 0) {
      return [];
   }
   
   return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]]);
}

/**
 * A preview of the object
 */
const ObjectPreview = ({data}) => {
   const styles = useStyles('ObjectPreview');
   const object = data;
   
   if (
      typeof object !== 'object' ||
      object === null ||
      object instanceof Date ||
      object instanceof RegExp
   ) {
      return <ObjectValue object={object}/>;
   }
   
   if (Array.isArray(object)) {
      const maxProperties = styles.arrayMaxProperties;
      const previewArray = object
         .slice(0, maxProperties)
         .map((element, index) => <ObjectValue key={index} object={element}/>);
      if (object.length > maxProperties) {
         previewArray.push(<span key="ellipsis">…</span>);
      }
      const arrayLength = object.length;
      return (
         <React.Fragment>
        <span style={styles.objectDescription}>
          {arrayLength === 0 ? `` : `(${arrayLength})\xa0`}
        </span>
            <span
               style={styles.preview}>[{intersperse(previewArray, ', ')}]</span>
         </React.Fragment>
      );
   } else {
      const maxProperties = styles.objectMaxProperties;
      let propertyNodes = [];
      for (const propertyName in object) {
         if (hasOwnProperty.call(object, propertyName)) {
            let ellipsis;
            if (
               propertyNodes.length === maxProperties - 1 &&
               Object.keys(object).length > maxProperties
            ) {
               ellipsis = <span key={'ellipsis'}>…</span>;
            }
            
            const propertyValue = getPropertyValue(object, propertyName);
            propertyNodes.push(
               <span key={propertyName}>
            <ObjectName name={propertyName || `""`}/>
            :&nbsp;
                  <ObjectValue object={propertyValue}/>
                  {ellipsis}
          </span>
            );
            if (ellipsis) break;
         }
      }
      
      const objectConstructorName = object.constructor ? object.constructor.name : 'Object';
      
      return (
         <React.Fragment>
        <span style={styles.objectDescription}>
          {objectConstructorName === 'Object' ? '' : `${objectConstructorName} `}
        </span>
            <span style={styles.preview}>
          {'{'}
               {intersperse(propertyNodes, ', ')}
               {'}'}
        </span>
         </React.Fragment>
      );
   }
};

const ObjectRootLabel = ({name, data}) => {
   if (typeof name === 'string') {
      return (
         <span>
        <ObjectName name={name}/>
        <span>: </span>
        <ObjectPreview data={data}/>
      </span>
      );
   } else {
      return <ObjectPreview data={data}/>;
   }
};

const ObjectLabel = ({name, data, isNonenumerable = false}) => {
   const object = data;
   
   return (
      <span>
      {typeof name === 'string' ? (
         <ObjectName name={name} dimmed={isNonenumerable}/>
      ) : (
         <ObjectPreview data={name}/>
      )}
         <span>: </span>
      <ObjectValue object={object}/>
    </span>
   );
};

const searchableNodeRenderer = ({depth, name, data, isNonenumerable}) =>
   depth === 0 ? (
      <ObjectRootLabel name={name} data={data}/>
   ) : (
      <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable}/>
   );

const getSearchableExpandedPaths = (searchWords) => (...params) => {
   const nextExpandedPaths = getExpandedPaths(...params);
   for (const path in nextExpandedPaths) {
      if (searchWords.findIndex(word => word && path.includes(word)) > -1) {
         nextExpandedPaths[path] = true;
      } else {
         nextExpandedPaths[path] = false;
      }
   }
   const nextObj = {};
   for (const path in nextExpandedPaths) {
      if (!nextExpandedPaths[path]) {
         continue;
      }
      const keyPaths = path.split('.');
      let currentPath = null;
      keyPaths.forEach(keyPath => {
         if (currentPath) {
            currentPath = `${currentPath}.${keyPath}`;
         } else {
            currentPath = keyPath;
         }
         
         if (!nextExpandedPaths[currentPath]) {
            nextObj[currentPath] = true;
         }
      });
   }
   
   return {...nextExpandedPaths, ...nextObj};
};


const useSearchableInspector = (defaultValue) => {
   const controlledExpandedPaths = useRef({});
   const [searchValue, setSearchValue] = useState(defaultValue);
   
   const handleChangeSearchValue = useCallback(
      (event) => {
         setSearchValue(event.target.value);
      },
      []
   );
   
   const getControlledExpandedPath = useCallback(
      (i) => {
         controlledExpandedPaths.current[i] = controlledExpandedPaths.current[i] || {current: {}};
         controlledExpandedPaths.current[i].handleChange = controlledExpandedPaths.current[i].handleChange || (() => {
            controlledExpandedPaths.current[i].current.isMounted && controlledExpandedPaths.current[i].current.stateAndSetter[1]({});
         });
         return controlledExpandedPaths.current[i];
      },
      []
   );
   
   const searchContext = useMemo(
      () => {
         const searchWords = searchValue.split(' ');
         return [
            searchWords,
            (object, type) => {
               return (searchValue.length ?
                     <Highlighter
                        autoEscape={true}
                        searchWords={searchWords}
                        textToHighlight={propertyValueFormatter(object, type)}
                     />
                     : propertyValueFormatter(object, type)
               );
            },
            searchValue,
            setSearchValue,
            handleChangeSearchValue,
            getSearchableExpandedPaths(searchWords),
            getControlledExpandedPath,
         ]
      },
      [searchValue]
   );
   
   return searchContext;
};


const makeObjects = () => {
   return [
      null,
      {rollingInTheDeepest: [{LOL: ["LOL"]}],},
      {keySearchable: 'No auto expand match'},
      {val: 1, deep: {deeper: {deepest: {rollingInTheDeep: ["!"]}}}},
      {more: {val: 1, deep: {deeper: {deepest: {rollingInTheDeep: ["!"]}}}}},
      {
         beyondExpandLevel: {
            more: {
               val: 1, deep: {
                  deeper: {
                     deepest: {
                        rollingInTheDeep: ["!"],
                        rollingInTheDeepest: [{LOL: ["LOL"]}],
                        keyUnSearchable: 'No auto expand match'
                     }
                  }
               }
            }
         }
      }
   ]
};

const objects = makeObjects();

storiesOf('Advance Usage: Searchable Object Inspector', module)
   .add('Searchable Object Inspectors', () => {
      const [searchValue, setSearchValue] = useState('ll');
      
      const handleChangeSearchValue = useCallback(
         (event) => {
            setSearchValue(event.target.value);
         },
         []
      );
      
      const searchContext = useMemo(
         () => {
            const searchWords = searchValue.split(' ');
            return [
               searchWords,
               (object, type) => {
                  return (searchValue.length ?
                        <Highlighter
                           autoEscape={true}
                           searchWords={searchWords}
                           textToHighlight={propertyValueFormatter(object, type)}
                        />
                        : propertyValueFormatter(object, type)
                  );
               },
            ]
         },
         [searchValue]
      );
      
      return (
         <div>
            <div
               style={{height: 30}}
            >
               <input
                  type="text"
                  value={searchValue}
                  onChange={handleChangeSearchValue}
                  title={"matches deep in the tree are not expanded yet they are highlighted"}
               />
            </div>
            <SearchContext.Provider value={searchContext}>
               <div
                  style={{width: 800, height: 600, overflow: 'scroll'}}
               >
                  {objects.map(
                     (
                        object,
                        i
                     ) => (
                        <Inspector
                           key={i}
                           nodeRenderer={searchableNodeRenderer}
                           data={object}
                        />
                     )
                  )}
               </div>
            </SearchContext.Provider>
         </div>
      );
      
   })
   .add('Searchable Object Inspectors with Auto-Expand', () => {
      const [searchValue, setSearchValue] = useState('LOL');
      
      const handleChangeSearchValue = useCallback(
         (event) => {
            setSearchValue(event.target.value);
         },
         []
      );
      
      const searchContext = useMemo(
         () => {
            const searchWords = searchValue.split(' ');
            return [
               searchWords,
               (object, type) => {
                  return (searchValue.length ?
                        <Highlighter
                           autoEscape={true}
                           searchWords={searchWords}
                           textToHighlight={propertyValueFormatter(object, type)}
                        />
                        : propertyValueFormatter(object, type)
                  );
               },
               getSearchableExpandedPaths(searchWords),
            ]
         },
         [searchValue]
      );
      
      const [, , searchableExpandedPaths] = searchContext;
      return (
         <div>
            <div
               style={{height: 30}}
            >
               <input
                  type="text"
                  value={searchValue}
                  onChange={handleChangeSearchValue}
                  title={"It does not check leaf labels as per getExpandedPaths() implementation"}
               />
            </div>
            <SearchContext.Provider value={searchContext}>
               <div
                  style={{width: 800, height: 600, overflow: 'scroll'}}
               >
                  {objects.map(
                     (
                        object,
                        i
                     ) => (
                        <Inspector
                           key={i}
                           nodeRenderer={searchableNodeRenderer}
                           getExpandedPaths={searchableExpandedPaths}
                           expandLevel={7} data={object}
                        />
                     )
                  )}
               </div>
            </SearchContext.Provider>
         </div>
      );
      
   })
   .add('Searchable Object Inspectors with Auto-Expand and Controlled expandedPaths', () => {
      const controlledExpandedPaths = useRef({});
      const [searchValue, setSearchValue] = useState('LOL');
      
      const handleChangeSearchValue = useCallback(
         (event) => {
            setSearchValue(event.target.value);
         },
         []
      );
      
      const searchContext = useMemo(
         () => {
            const searchWords = searchValue.split(' ');
            return [
               searchWords,
               (object, type) => {
                  return (searchValue.length ?
                        <Highlighter
                           autoEscape={true}
                           searchWords={searchWords}
                           textToHighlight={propertyValueFormatter(object, type)}
                        />
                        : propertyValueFormatter(object, type)
                  );
               },
               getSearchableExpandedPaths(searchWords),
            ]
         },
         [searchValue]
      );
      
      const [, , searchableExpandedPaths] = searchContext;
      return (
         <div>
            <div
               style={{height: 30}}
            >
               <input
                  type="text"
                  value={searchValue}
                  onChange={handleChangeSearchValue}
                  title={"The inspector auto compacts when cursor leaves the inspector"}
               />
            </div>
            <SearchContext.Provider value={searchContext}>
               <div
                  style={{width: 800, height: 600, overflow: 'scroll'}}
               >
                  {objects.map((object, i) => {
                        controlledExpandedPaths.current[i] = controlledExpandedPaths.current[i] || {current: {}};
                        controlledExpandedPaths.current[i].handleChange = controlledExpandedPaths.current[i].handleChange || (() => {
                           controlledExpandedPaths.current[i].current.isMounted && controlledExpandedPaths.current[i].current.stateAndSetter[1]({});
                        });
                        return (
                           <div
                              key={i}
                              onMouseLeave={controlledExpandedPaths.current[i].handleChange}
                           >
                              <Inspector
                                 nodeRenderer={searchableNodeRenderer}
                                 getExpandedPaths={searchableExpandedPaths}
                                 expandLevel={7}
                                 data={object}
                                 expandedPathsRef={controlledExpandedPaths.current[i]}
                              />
                           </div>
                        );
                     }
                  )}
               </div>
            </SearchContext.Provider>
         </div>
      );
      
   })
   .add('Searchable Object Inspectors with Auto-Expand and Controlled expandedPaths wrapped in a hook', () => {
      
      const searchContext = useSearchableInspector('LOL');
      const [
         , , searchValue, , handleChangeSearchValue, searchableExpandedPaths, getControlledExpandedPath
      ] = searchContext;
      
      return (
         <div>
            <div
               style={{height: 30}}
            >
               <input
                  type="text"
                  value={searchValue}
                  onChange={handleChangeSearchValue}
                  title={"The inspector auto compacts when cursor leaves the inspector"}
               />
            </div>
            <SearchContext.Provider value={searchContext}>
               <div
                  style={{width: 800, height: 600, overflow: 'scroll'}}
               >
                  {objects.map((object, i) => {
                        const expandedPathsRef = getControlledExpandedPath(i);
                        return (
                           <div
                              key={i}
                              onMouseLeave={expandedPathsRef.handleChange}
                           >
                              <Inspector
                                 nodeRenderer={searchableNodeRenderer}
                                 getExpandedPaths={searchableExpandedPaths}
                                 expandLevel={7}
                                 data={object}
                                 expandedPathsRef={expandedPathsRef}
                              />
                           </div>
                        );
                     }
                  )}
               </div>
            </SearchContext.Provider>
         </div>
      );
      
   });
