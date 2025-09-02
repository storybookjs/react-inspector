import React from 'react';
import { Inspector } from '../src';

const meta = {
  title: 'DOM Node',
  component: Inspector,
  // component: module,
};

export default meta;

export const ElementNodeBody = {
  name: 'Element Node: body',
  render: () => <Inspector data={document.body} />,
};

export const ElementNodeDiv = {
  name: 'Element Node: div',
  render: () => <Inspector data={document.createElement('div')} />,
};

export const ElementNodeDivWithDataAttributes = {
  name: 'Element Node: div with data attributes',
  render: () => {
    const div = document.createElement('div');
    div.setAttribute('data-test', 'test');
    // div.dataset
    return <Inspector data={div} />;
  },
};

export const ElementNodeDivWithClassAndStyle = {
  name: 'Element Node: div with class and style',
  render: () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'test');
    div.setAttribute('style', 'font-weight: bold;');
    return <Inspector data={div} />;
  },
};

export const ElementNodeDivWithChildren = {
  name: 'Element Node: div with children',
  render: () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = 'hello';
    div.appendChild(span);
    return <Inspector data={div} />;
  },
};

export const CommentNode = {
  name: 'Comment Node',
  render: () => <Inspector data={document.createComment('this is a comment')} />,
};

export const TextNode = {
  name: 'Text Node',
  render: () => <Inspector data={document.createTextNode('this is a text node')} />,
};

export const ProcessingInstructionNode = {
  name: 'Processing Instruction Node',
  render: () => {
    const docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml');
    const pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
    return <Inspector data={pi} />;
  },
};

export const DocumentTypeNode = {
  name: 'Document Type Node',
  render: () => {
    // document.childNodes[0] is the doctype node
    return <Inspector data={document.childNodes[0]} />;
  },
};

export const DocumentNode = {
  name: 'Document Node',
  render: () => <Inspector expandLevel={2} data={document} />,
};

// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
// x-tags http://blog.vjeux.com/2013/javascript/custom-components-react-x-tags.html
export const DocumentFragmentNode = {
  name: 'Document Fragment Node',
  render: () => <Inspector data={document.createElement('template').content} />,
};
