import React from 'react';
import { render } from '@testing-library/react';
import { ObjectName } from './ObjectName';

describe('ObjectName', () => {
  it('should render', () => {
    const { container } = render(<ObjectName name="testvalue" />);
    expect(container).toMatchSnapshot();
  });

  it('should apply dimming if `dimmed` prop is true', () => {
    const { container } = render(<ObjectName name="testvalue" dimmed={true} />);
    expect(container).toMatchSnapshot();
  });

  it('should not apply dimming if `dimmed` prop is false', () => {
    const { container } = render(<ObjectName name="testvalue" dimmed={false} />);
    expect(container).toMatchSnapshot();
  });

  it('Accepts and applies additional `style` prop', () => {
    // Test that a custom `style` props is passed and applied to <span/>
    const style = { color: 'hotpink' };
    const { container } = render(<ObjectName styles={style} />);
    expect(container).toMatchSnapshot();
  });
});
