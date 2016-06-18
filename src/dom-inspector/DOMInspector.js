import React, { Component, PropTypes } from 'react'

import DOMNodePreview from './DOMNodePreview'
import TreeView from '../tree-view/TreeView'

// Customize styles
const styles = {
  treeNode: {
    childNodesContainer: {
      paddingLeft: 14,
    }
  }
}

import shouldInline from './shouldInline'

const domIterator = function* (data){
  if(data && data.childNodes){
    const textInlined = shouldInline(data)

    if(textInlined) {
      return
    }

    for(let i = 0; i < data.childNodes.length; i++){
      const node = data.childNodes[i]

      if(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)
        continue

      yield {
        name: `${node.tagName}[${i}]`,
        data: node,
      }
    }

    // at least 1 child node
    if(data.tagName){
      yield {
        name: 'CLOSE_TAG',
        data: {
          tagName: data.tagName,
        },
        isCloseTag: true,
      }
    }
  }
}

class DOMInspector extends Component {
  static propTypes = {
    /** The DOM Node to inspect */
    data: PropTypes.object.isRequired,
  }

  render() {
    return (
      <TreeView
        nodeRenderer={DOMNodePreview}
        dataIterator={domIterator}
        {...this.props}/>
    )
  }
}

export default DOMInspector
