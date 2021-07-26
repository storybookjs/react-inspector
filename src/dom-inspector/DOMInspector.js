import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import defaultNodeRenderer from './DOMNodePreview';
import TreeView from '../tree-view/TreeView';

import defaultShouldInline from './shouldInline';
import { themeAcceptor } from '../styles';

const createIterator = (shouldInline= defaultShouldInline) => {
  const domIterator = function* (data) {
    if (data && data.childNodes) {
      const textInlined = shouldInline(data);
      
      if (textInlined) {
        return;
      }
      
      for (let i = 0; i < data.childNodes.length; i++) {
        const node = data.childNodes[i];
        
        if (
           node.nodeType === Node.TEXT_NODE &&
           node.textContent.trim().length === 0
        )
          continue;
        
        yield {
          name: `${node.tagName}[${i}]`,
          data: node,
        };
      }
      
      // at least 1 child node
      if (data.tagName) {
        yield {
          name: 'CLOSE_TAG',
          data: {
            tagName: data.tagName,
          },
          isCloseTag: true,
        };
      }
    }
  };
  return domIterator;
}

/**
 * Iterator for DOM objects
 */
export const useDOMIterator = (shouldInline)=>{
  return useMemo(
     ()=>createIterator(shouldInline),
     [shouldInline]
  );
};

const DOMInspector = ({
  nodeRenderer = defaultNodeRenderer, shouldInline,
  ...treeViewProps
}) => {
  const dataIterator = useDOMIterator(shouldInline);
  
  return (
    <TreeView
      nodeRenderer={nodeRenderer}
      dataIterator={dataIterator}
      {...treeViewProps}
    />
  );
};

DOMInspector.propTypes = {
  // The DOM Node to inspect
  data: PropTypes.object.isRequired,
  /** Provide a custom nodeRenderer */
  nodeRenderer: PropTypes.func,
  /** Provide a custom shouldInline for delimiting max inline text */
  shouldInline: PropTypes.func,
};

export default themeAcceptor(DOMInspector);
