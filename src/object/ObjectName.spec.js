import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ObjectName } from './ObjectName';

describe('ObjectName', () => {
  it('should render', () => {
    const tree = TestRenderer.create(<ObjectName name="testvalue" />);

    expect(tree).toMatchSnapshot();
  });

  it('should apply dimming if `dimmed` prop is true', () => {
    const tree = TestRenderer.create(<ObjectName name="testvalue" dimmed={true} />);

    expect(tree).toMatchSnapshot();
  });

  it('should not apply dimming if `dimmed` prop is false', () => {
    const tree = TestRenderer.create(<ObjectName name="testvalue" dimmed={false} />);

    expect(tree).toMatchSnapshot();
  });

  it('Accepts and applies additional `style` prop', () => {
    // Test that a custom `style` props is passed and applied to <span/>
    const style = { color: 'hotpink' };
    const tree = TestRenderer.create(<ObjectName styles={style} />);

    expect(tree).toMatchSnapshot();
  });
});
