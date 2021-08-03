import React, {
   useState,
   useCallback,
   useMemo,
   useRef,
} from 'react';
import {storiesOf} from '@storybook/react';
import Highlighter from 'react-highlight-words';
import Inspector from '../src';
import {
   SearchContext,
   useSearchableInspector,
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
