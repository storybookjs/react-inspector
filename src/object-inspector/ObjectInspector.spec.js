import React, { act } from 'react';
import TestRenderer from 'react-test-renderer';
import { ObjectInspector } from './ObjectInspector';
import { createRoot } from 'react-dom/client';

let container;

describe('ObjectInspector', () => {
  it('should render', () => {
    const tree = TestRenderer.create(<ObjectInspector />);
    expect(tree).toMatchSnapshot();
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    const nodeRenderer = () => <span>unit test</span>;

    const tree = TestRenderer.create(<ObjectInspector nodeRenderer={nodeRenderer} />);

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

  it('should render with Maps with Regex and Maps keys', async () => {
    const data = new Map([[/\S/g, 'Regular Expression key']]);

    // Replacing "act" as Jest throws errors when using it, see 
    // https://github.com/testing-library/react-testing-library/issues/1061#issuecomment-2906288290
    const root = createRoot(container);
    root.render(<ObjectInspector data={data} />);
    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Replacing "act" again
    const button = container.querySelector('div');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(container.innerHTML).toMatchSnapshot();
  });
});
