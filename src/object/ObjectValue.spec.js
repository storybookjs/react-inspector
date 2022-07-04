import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ObjectValue } from './ObjectValue';

describe('ObjectValue', () => {
  it('should render', () => {
    const tree = TestRenderer.create(<ObjectValue object={0} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render bigint', () => {
    const tree = TestRenderer.create(<ObjectValue object={9007199254740993n} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['9007199254740993', 'n']);
  });

  it('should render number', () => {
    const tree = TestRenderer.create(<ObjectValue object={0} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['0']);
  });

  it('should render string with quotes', () => {
    const tree = TestRenderer.create(<ObjectValue object={'octocat'} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['"', 'octocat', '"']);
  });

  it('should render boolean', () => {
    const tree = TestRenderer.create(<ObjectValue object={true} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['true']);
  });

  it('should render undefined', () => {
    const tree = TestRenderer.create(<ObjectValue object={undefined} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['undefined']);
  });

  it('should render null', () => {
    const tree = TestRenderer.create(<ObjectValue object={null} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['null']);
  });

  it('should display date correctly', () => {
    const dateString = 'December 17, 1995 03:24:00';
    const date = new Date(dateString);
    const tree = TestRenderer.create(<ObjectValue object={date} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual([date.toString()]);
  });

  it('should render array with length information', () => {
    const tree = TestRenderer.create(<ObjectValue object={[1, 2, 3, 4, 5]} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Array(5)']);
  });

  it('should render an empty object', () => {
    const tree = TestRenderer.create(<ObjectValue object={{}} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Object']);
  });

  it('should render a simple object', () => {
    const tree = TestRenderer.create(<ObjectValue object={{ k: 'v' }} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Object']);
  });

  it('should render a null prototyped object', () => {
    const tree = TestRenderer.create(<ObjectValue object={Object.create(null)} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Object']);
  });

  /*
  it('should render an anonymous function', () => {
    renderer.render(<ObjectValue object={function(){}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    // const n = tree.children[1].props.children[1]
    // console.log(JSON.stringify(n, null, 2))
    // console.log(typeof n)
    // console.log(tree.children[1].props.children)
    expect(tree.children[0]).toEqual(<span style={objectStyles.value.function.keyword}>function</span>)
    expect(tree.children[1]).toEqual(<span style={objectStyles.value.function.name}>{[ '\xa0', 'object', '()' ]}</span>)
  });
  */

  /*
  it('should render a named function', () => {
    renderer.render(<ObjectValue object={function id(a){return a;}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.children).toEqual([
                                          <span style={objectStyles.value.function.keyword}>function</span>,
                                          <span style={objectStyles.value.function.name}>{[ '\xa0', 'id', '()' ]}</span>
                                        ])
  });
  */

  it('should render a symbol', () => {
    const tree = TestRenderer.create(<ObjectValue object={Symbol()} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Symbol()']);
  });

  it('should render a symbol foo', () => {
    const tree = TestRenderer.create(<ObjectValue object={Symbol('foo')} />).toJSON();
    expect(tree.type).toBe('span');
    expect(tree.children).toEqual(['Symbol(foo)']);
  });

  it('accepts and applies style from `styles` prop', () => {
    // Custom `styles` prop gets applied to the element
    const style = { color: 'blue' };
    const tree = TestRenderer.create(<ObjectValue styles={style} object={''} />).toJSON();
    expect(tree.props.style.color).toEqual('blue');
  });
});
