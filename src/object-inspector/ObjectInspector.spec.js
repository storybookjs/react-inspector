import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ObjectInspector from './ObjectInspector';

const TestRenderer = new ShallowRenderer();

describe('ObjectInspector', () => {
  it('should render', () => {
    const tree = TestRenderer.render(<ObjectInspector theme="testvalue" />);

    expect(tree).toMatchSnapshot();

    expect(tree.type).toBeInstanceOf(Function);
    expect(tree.props.theme).toEqual('testvalue');
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    // Test that a custom `nodeRenderer` props is passed to <TreeView/>
    const nodeRenderer = () => <span>unit test</span>;
    const tree = TestRenderer.render(
      <ObjectInspector nodeRenderer={nodeRenderer} />
    );

    expect(tree).toMatchSnapshot();

    expect(tree.props.children.type).toBeInstanceOf(Function);
    expect(tree.props.children.props.nodeRenderer).toEqual(nodeRenderer);
  });
});
