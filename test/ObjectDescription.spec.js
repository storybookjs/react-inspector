import React, { PropTypes } from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import ObjectDescription from '../src/object/ObjectDescription'
import objectStyles from '../src/object/objectStyles'

const renderer = TestUtils.createRenderer()

describe('ObjectDescription', () => {
  beforeEach(() => {
  })

  it('should render', () => {
    // console.log(ObjectDescription)
    renderer.render(<ObjectDescription object={0} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
  })

  it('should render number', () => {
    renderer.render(<ObjectDescription object={0} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual(0)
  })

  it('should render string with quotes', () => {
    renderer.render(<ObjectDescription object={"octocat"} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual([ '"', 'octocat', '"' ])
  })

  it('should render boolean', () => {
    renderer.render(<ObjectDescription object={true} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('true')
  })

  it('should render undefined', () => {
    renderer.render(<ObjectDescription object={undefined} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('undefined')
  })

  it('should render null', () => {
    renderer.render(<ObjectDescription object={null} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('null')
  })

  it('should display date correctly', () => {
    const dateString = 'December 17, 1995 03:24:00';
    const date = new Date(dateString);
    renderer.render(<ObjectDescription object={date} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual(date.toString())
  });

  it('should render array with length information', () => {
    renderer.render(<ObjectDescription object={[1,2,3,4,5]} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('Array[5]')
  })

  it('should render an empty object', () => {
    renderer.render(<ObjectDescription object={{}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('Object')
  })

  it('should render a simple object', () => {
    renderer.render(<ObjectDescription object={{'k': 'v'}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('Object')
  });

  /*
  it('should render an anonymous function', () => {
    renderer.render(<ObjectDescription object={function(){}} />)
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

  it('should render a named function', () => {
    renderer.render(<ObjectDescription object={function id(a){return a;}} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual([
                                          <span style={objectStyles.value.function.keyword}>function</span>,
                                          <span style={objectStyles.value.function.name}>{[ '\xa0', 'id', '()' ]}</span>
                                        ])
  });

  it('should render a symbol', () => {
    renderer.render(<ObjectDescription object={Symbol("foo")} />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toBe('span')
    expect(tree.props.children).toEqual('Symbol()')
  });

})
