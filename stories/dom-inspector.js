import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Inspector from '../src';

storiesOf('DOM Node', module)
  // ELEMENT_NODE
  .add('Element Node: body', () => <Inspector data={document.body} />)
  .add('Element Node: div', () => <Inspector data={document.createElement('div')} />)
  .add('Element Node: div with data attributes', () => {
    const div = document.createElement('div');
    div.setAttribute('data-test', 'test');
    // div.dataset
    return <Inspector data={div} />;
  })
  .add('Element Node: div with class and style', () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'test');
    div.setAttribute('style', 'font-weight: bold;');
    return <Inspector data={div} />;
  })
  .add('Element Node: div with children', () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = 'hello';
    div.appendChild(span);
    return <Inspector data={div} />;
  })
  // COMMENT_NODE
  .add('Comment Node', () => <Inspector data={document.createComment('this is a comment')} />)
  // TEXT_NODE
  .add('Text Node', () => <Inspector data={document.createTextNode('this is a text node')} />)
  // PROCESSING_INSTRUCTION_NODE
  .add('Processing Instruction Node', () => {
    var docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml');
    var pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
    return <Inspector data={pi} />;
  })
  // DOCUMENT_TYPE_NODE
  .add('Document Type Node', () => {
    return <Inspector data={document.childNodes[0]} />;
  })
  // DOCUMENT_NODE
  .add('Document Node', () => <Inspector expandLevel={2} data={document} />)
  // DOCUMENT_FRAGMENT_NODE
  // https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
  // x-tags http://blog.vjeux.com/2013/javascript/custom-components-react-x-tags.html
  .add('Document Fragment Node', () => (
    <Inspector data={document.createElement('template').content} />
  ));
