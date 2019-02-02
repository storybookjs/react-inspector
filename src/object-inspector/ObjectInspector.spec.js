import React from 'react';
import TestRenderer from 'react-test-renderer';
import ObjectInspector from './ObjectInspector';

describe('ObjectInspector', () => {
  it('should render', () => {
    const tree = TestRenderer.create(<ObjectInspector />);
    expect(tree).toMatchSnapshot();
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    const nodeRenderer = () => <span>unit test</span>;

    const tree = TestRenderer.create(
      <ObjectInspector nodeRenderer={nodeRenderer} />
    );

    expect(tree).toMatchSnapshot();
  });
});
