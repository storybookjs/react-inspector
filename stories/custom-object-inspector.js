import React, {
   useState,
   useCallback,
   useMemo,
   useRef, useEffect,
} from 'react';
import {storiesOf} from '@storybook/react';
import Highlighter from 'react-highlight-words';
import Inspector from '../src';
import {
   SearchContext,
   searchableNodeRenderer,
   getSearchableExpandedPaths
} from "./SearchableObjectInspector";
import {propertyValueFormatter} from '../src/utils/propertyUtils';

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

const useSearchContextValue = (initialSearchValue = 'LOL') => {
   const [searchValue, setSearchValue] = useState(initialSearchValue);
   
   const handleChangeSearchValue = useCallback(
      (event) => {
         setSearchValue(event.target.value);
      },
      []
   );
   
   return useMemo(
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
            searchValue,
            handleChangeSearchValue,
         ]
      },
      [searchValue, handleChangeSearchValue]
   );
};


const useRestorers = () => {
   const restorersRef = useRef({});
   const obtainRestorer = useCallback((i) => {
      if (!restorersRef.current[i]) {
         let _current = {};
         const restore = () => _current;
         const save = (current) => {
            _current = current;
         };
         restorersRef.current[i] = {restore, save};
      }
      return restorersRef.current[i];
   }, []);
   
   return [restorersRef, obtainRestorer];
};

const useExpandedPathsWithRestorer = (restorer) => {
   const {restore, save} = restorer;
   const expandedPathsState = useState(() => restore());
   const [expandedPaths] = expandedPathsState;
   
   useEffect(() => {
         return () => save(expandedPaths);
      },
      [save, expandedPaths]
   );
   
   return expandedPathsState;
}

const ControlledInspector = ({restorer, ...inspectorProps}) => {
   const expandedPathsState = useExpandedPathsWithRestorer(restorer);
   const [, setExpandedPaths] = expandedPathsState;
   const onMouseLeave = useCallback(
      () => setExpandedPaths({}),
      []
   );
   
   return <div
      onMouseLeave={onMouseLeave}
   >
      <Inspector
         expandedPaths={expandedPathsState}
         {...inspectorProps}
      
      />
   </div>
};

storiesOf('Object Inspector (Searchable)', module)
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
      
      const [, obtainRestorer] = useRestorers();
      const searchContext = useSearchContextValue();
      const [
         , , searchableExpandedPaths, searchValue, handleChangeSearchValue,
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
                        return (
                           <ControlledInspector
                              key={i}
                              nodeRenderer={searchableNodeRenderer}
                              getExpandedPaths={searchableExpandedPaths}
                              expandLevel={7}
                              data={object}
                              restorer={obtainRestorer(i)}
                           />
                        );
                     }
                  )}
               </div>
            </SearchContext.Provider>
         </div>
      );
      
   });
