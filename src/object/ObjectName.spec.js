import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ObjectName from './ObjectName';

import chromeLight from '../styles/themes/chromeLight';
import makeTheme from '../styles/base';
const defaultTheme = makeTheme(chromeLight);

const renderer = TestUtils.createRenderer();

describe('ObjectName', () => {
  beforeEach(() => {});

  it('should render', () => {
    renderer.render(<ObjectName name="testvalue" />);
    const tree = renderer.getRenderOutput();

    expect(tree.type).toEqual('span');
  });

  it('should apply default theme', () => {
    renderer.render(<ObjectName name="testvalue" />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.style).toInclude(defaultTheme.ObjectName.base);
  });

  it('should apply dimming if `dimmed` prop is true', () => {
    renderer.render(<ObjectName name="testvalue" dimmed={true} />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.style).toInclude(defaultTheme.ObjectName.dimmed);
  });

  it('should not apply dimming if `dimmed` prop is false', () => {
    renderer.render(<ObjectName name="testvalue" dimmed={false} />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.style).toExclude(defaultTheme.ObjectName.dimmed);
  });

  it('Accepts and applies additional `style` prop', () => {
    // Test that a custom `style` props is passed and applied to <span/>
    const style = { color: 'blue' };
    renderer.render(<ObjectName styles={style} />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.style.color).toEqual('blue');
  });
});
