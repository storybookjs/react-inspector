import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Inspector from '../src'

storiesOf('DOM Node', module)
  // ELEMENT_NODE
  .add('Element Node', () => <Inspector data={document.body}/>)
  // COMMENT_NODE
  .add('Comment Node', () => <Inspector data={document.createComment("this is a comment")}/>)
  // TEXT_NODE
  .add('Text Node', () => <Inspector data={document.createTextNode("this is a text node")}/>)
  // PROCESSING_INSTRUCTION_NODE

  // DOCUMENT_TYPE_NODE

  // DOCUMENT_NODE
  .add('Document Node', () => <Inspector expandLevel={2} data={document}/>)
  // DOCUMENT_FRAGMENT_NODE
