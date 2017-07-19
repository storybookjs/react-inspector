import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ObjectValue from './ObjectValue';

const renderer = TestUtils.createRenderer();

describe('ObjectValue', () => {
  beforeEach(() => {});

  it('should render', () => {
    // console.log(ObjectValue)
    renderer.render(<ObjectValue object={0} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
  });

  it('should render number', () => {
    renderer.render(<ObjectValue object={0} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual(0);
  });

  it('should render string with quotes', () => {
    renderer.render(<ObjectValue object={'octocat'} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual(['"', 'octocat', '"']);
  });

  it('should render boolean', () => {
    renderer.render(<ObjectValue object={true} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('true');
  });

  it('should render undefined', () => {
    renderer.render(<ObjectValue object={undefined} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('undefined');
  });

  it('should render null', () => {
    renderer.render(<ObjectValue object={null} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('null');
  });

  it('should display date correctly', () => {
    const dateString = 'December 17, 1995 03:24:00';
    const date = new Date(dateString);
    renderer.render(<ObjectValue object={date} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual(date.toString());
  });

  it('should render array with length information', () => {
    renderer.render(<ObjectValue object={[1, 2, 3, 4, 5]} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('Array[5]');
  });

  it('should render an empty object', () => {
    renderer.render(<ObjectValue object={{}} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('Object');
  });

  it('should render a simple object', () => {
    renderer.render(<ObjectValue object={{ k: 'v' }} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('Object');
  });

  /*
  it('should render an anonymous function', () => {
    renderer.render(<ObjectValue object={function(){}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    // const n = tree.props.children[1].props.children[1]
    // console.log(JSON.stringify(n, null, 2))
    // console.log(typeof n)
    // console.log(tree.props.children[1].props.children)
    expect(tree.props.children[0]).toEqual(<span style={objectStyles.value.function.keyword}>function</span>)
    expect(tree.props.children[1]).toEqual(<span style={objectStyles.value.function.name}>{[ '\xa0', 'object', '()' ]}</span>)
  });
  */

  /*
  it('should render a named function', () => {
    renderer.render(<ObjectValue object={function id(a){return a;}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual([
                                          <span style={objectStyles.value.function.keyword}>function</span>,
                                          <span style={objectStyles.value.function.name}>{[ '\xa0', 'id', '()' ]}</span>
                                        ])
  });
  */

  it('should render a symbol', () => {
    renderer.render(<ObjectValue object={Symbol()} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('Symbol()');
  });

  it('should render a symbol foo', () => {
    renderer.render(<ObjectValue object={Symbol('foo')} />);
    const tree = renderer.getRenderOutput();
    expect(tree.type).toBe('span');
    expect(tree.props.children).toEqual('Symbol(foo)');
  });

  it('accepts and applies style from `styles` prop', () => {
    // Custom `styles` prop gets applied to the element
    const style = { color: 'blue' };
    renderer.render(<ObjectValue styles={style} object={''} />);
    const tree = renderer.getRenderOutput();
    expect(tree.props.style.color).toEqual('blue');
  });
});
