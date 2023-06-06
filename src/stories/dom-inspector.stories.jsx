import React from 'react';
import { Inspector } from '..';

export default {
  title: 'DOM Node',
};

export const ElementNodeBody = {
  render: () => <Inspector data={document.body} />,
  name: 'Element Node: body',
};

export const ElementNodeDiv = {
  render: () => <Inspector data={document.createElement('div')} />,
  name: 'Element Node: div',
};

export const ElementNodeDivWithDataAttributes = {
  render: () => {
    const div = document.createElement('div');
    div.setAttribute('data-test', 'test');
    // div.dataset
    return <Inspector data={div} />;
  },

  name: 'Element Node: div with data attributes',
};

export const ElementNodeDivWithClassAndStyle = {
  render: () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'test');
    div.setAttribute('style', 'font-weight: bold;');
    return <Inspector data={div} />;
  },

  name: 'Element Node: div with class and style',
};

export const ElementNodeDivWithChildren = {
  render: () => {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = 'hello';
    div.appendChild(span);
    return <Inspector data={div} />;
  },

  name: 'Element Node: div with children',
};

export const CommentNode = () => <Inspector data={document.createComment('this is a comment')} />;
export const TextNode = () => <Inspector data={document.createTextNode('this is a text node')} />;

export const ProcessingInstructionNode = () => {
  var docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml');
  var pi = docu.createProcessingInstruction('xml-stylesheet', 'href="mycss.css" type="text/css"');
  return <Inspector data={pi} />;
};

export const DocumentTypeNode = () => {
  return <Inspector data={document.childNodes[0]} />;
};

export const DocumentNode = () => <Inspector expandLevel={2} data={document} />;
export const DocumentFragmentNode = () => <Inspector data={document.createElement('template').content} />;
