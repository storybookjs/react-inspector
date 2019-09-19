import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils';
import ObjectInspector from './ObjectInspector';

let container;

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

describe('ObjectInspector Content', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should render with Maps with Regex and Maps keys', () => {
    const data = new Map([
      [/\S/g, 'Regular Expression key']
    ]);
    
    act(() => {
      render(<ObjectInspector data={data} />, container);
    });
    
    const button = container.querySelector('div');
    
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    
    expect(container.innerHTML).toMatchSnapshot();
  });
})
