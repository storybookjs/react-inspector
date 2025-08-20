import React from 'react';
import { render, screen } from '@testing-library/react';
import { ObjectValue } from './ObjectValue';
import '@testing-library/jest-dom';

describe('ObjectValue', () => {
  it('should render', () => {
    const { container } = render(<ObjectValue object={0} />);
    expect(container).toMatchSnapshot();
  });

  it('should render bigint', () => {
    render(<ObjectValue object={9007199254740993n} />);
    const element = screen.getByText('9007199254740993n');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('9007199254740993n');
  });

  it('should render number', () => {
    render(<ObjectValue object={0} />);
    const element = screen.getByText('0');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('0');
  });

  it('should render string with quotes', () => {
    render(<ObjectValue object={'octocat'} />);
    const element = screen.getByText(/"octocat"/);
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('"octocat"');
  });

  it('should render boolean', () => {
    render(<ObjectValue object={true} />);
    const element = screen.getByText('true');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('true');
  });

  it('should render undefined', () => {
    render(<ObjectValue object={undefined} />);
    const element = screen.getByText('undefined');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('undefined');
  });

  it('should render null', () => {
    render(<ObjectValue object={null} />);
    const element = screen.getByText('null');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('null');
  });

  it('should display date correctly', () => {
    const dateString = 'December 17, 1995 03:24:00';
    const date = new Date(dateString);
    render(<ObjectValue object={date} />);
    const element = screen.getByText(date.toString());
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe(date.toString());
  });

  it('should render array with length information', () => {
    render(<ObjectValue object={[1, 2, 3, 4, 5]} />);
    const element = screen.getByText('Array(5)');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Array(5)');
  });

  it('should render an empty object', () => {
    render(<ObjectValue object={{}} />);
    const element = screen.getByText('Object');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Object');
  });

  it('should render a simple object', () => {
    render(<ObjectValue object={{ k: 'v' }} />);
    const element = screen.getByText('Object');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Object');
  });

  it('should render a null prototyped object', () => {
    render(<ObjectValue object={Object.create(null)} />);
    const element = screen.getByText('Object');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Object');
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
    render(<ObjectValue object={Symbol()} />);
    const element = screen.getByText('Symbol()');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Symbol()');
  });

  it('should render a symbol foo', () => {
    render(<ObjectValue object={Symbol('foo')} />);
    const element = screen.getByText('Symbol(foo)');
    expect(element.tagName.toLowerCase()).toBe('span');
    expect(element.textContent).toBe('Symbol(foo)');
  });

  it('accepts and applies style from `styles` prop', () => {
    // Custom `styles` prop gets applied to the element
    const style = { color: 'blue' };
    render(<ObjectValue styles={style} object={''} />);
    const element = screen.getByText('""');
    expect(element).toHaveStyle('color: blue');
  });
});
