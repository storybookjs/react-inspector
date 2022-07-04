import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { DOMNodePreview } from './DOMNodePreview';
import { TreeView } from '../tree-view/TreeView';

import { shouldInline } from './shouldInline';
import { themeAcceptor } from '../styles';

const domIterator = function* (data: any) {
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

const DOMInspector: FC<any> = (props) => {
  return (
    <TreeView
      nodeRenderer={DOMNodePreview}
      dataIterator={domIterator}
      {...props}
    />
  );
};

// DOMInspector.propTypes = {
//   // The DOM Node to inspect
//   data: PropTypes.object.isRequired,
// };

const themedDOMInspector = themeAcceptor(DOMInspector);

export { themedDOMInspector as DOMInspector };
