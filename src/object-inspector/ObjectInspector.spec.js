import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ObjectInspector } from './ObjectInspector';

describe('ObjectInspector', () => {
  it('should render', () => {
    const { container } = render(<ObjectInspector />);
    expect(container).toMatchSnapshot();
  });

  it('passes `nodeRenderer` prop to <TreeView/>', () => {
    const nodeRenderer = () => <span>unit test</span>;

    const { container } = render(<ObjectInspector nodeRenderer={nodeRenderer} />);
    expect(container).toMatchSnapshot();
  });
});

describe('ObjectInspector Content', () => {
  it('should render with Maps with Regex and Maps keys', async () => {
    const user = userEvent.setup();
    const data = new Map([[/\S/g, 'Regular Expression key']]);

    const { container } = render(<ObjectInspector data={data} />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    const button = container.querySelector('div');
    await user.click(button);

    expect(container).toMatchSnapshot();
  });
});
