import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ObjectInspector from './ObjectInspector';

const renderer = TestUtils.createRenderer();

describe('ObjectInspector', () => {
  beforeEach(() => {});

  it('should render', () => {
    renderer.render(<ObjectInspector theme="testvalue" />);
    const tree = renderer.getRenderOutput();
    
    expect(tree.type).toBeA('function');
    
    expect(tree.props.theme).toEqual('testvalue');
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    // Test that a custom `nodeRenderer` props is passed to <TreeView/>
    const nodeRenderer = () => null;
    renderer.render(<ObjectInspector nodeRenderer={nodeRenderer} />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.children.type).toBeA('function');
    
    expect(tree.props.children.props.nodeRenderer).toEqual(nodeRenderer);
  });
});
