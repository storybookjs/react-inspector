import React from 'react';
import PropTypes from 'prop-types';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ObjectName from './ObjectName';

const renderer = TestUtils.createRenderer();

const defaultProps = {};

describe('ObjectName', () => {
  beforeEach(() => {});

  it('should render', () => {
    renderer.render(<ObjectName name="testvalue" />);
    const tree = renderer.getRenderOutput();

    expect(tree.type).toEqual('span');
  });

  it('Accepts and applies additional `style` prop', () => {
    // Test that a custom `style` props is passed and applied to <span/>
    const style = { color: 'blue' };
    renderer.render(<ObjectName styles={style} />);
    const tree = renderer.getRenderOutput();

    expect(tree.props.style.color).toEqual('blue');
  });
});
