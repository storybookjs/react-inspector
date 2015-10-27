import React, {addons, PropTypes} from 'react/addons';

const TestUtils = addons.TestUtils;
const ObjectDescription = require('../src/ObjectDescription');

describe('ObjectDescription', () => {

  beforeEach(() => {

  });

  it('number', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={0} />);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("0");
  });

  it('string', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={"octocat"} />);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("\"octocat\"");
  });

  it('boolean', () => {
    for(let value of [true, false]){
      const desc = TestUtils.renderIntoDocument(<ObjectDescription object={value} />);
      const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

      expect(React.findDOMNode(span).textContent).toBe(value.toString());
    }
  });

  it('undefined', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription />);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("undefined");
  });

  it('null', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={null}/>);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("null");
  });

  it('date', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={new Date('December 17, 1995 03:24:00')}/>);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("Sun Dec 17 1995 03:24:00 GMT-0800 (PST)");
  });

  it('array', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={[1,2,3,4,5]}/>);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("Array[5]");
  });

  it('object: empty object', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={{}}/>);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("Object");
  });

  it('object', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={{'k': 'v'}}/>);
    const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');

    expect(React.findDOMNode(span).textContent).toBe("Object");
  });

  it('function', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={function(){}}/>);
    const spans = TestUtils.scryRenderedDOMComponentsWithTag(desc, 'span');

    expect(spans.length).toBe(3);
  });

  it('function: id function', () => {
    const desc = TestUtils.renderIntoDocument(<ObjectDescription object={function id(a){return a;}}/>);
    const spans = TestUtils.scryRenderedDOMComponentsWithTag(desc, 'span');

    expect(spans.length).toBe(3);
    expect(React.findDOMNode(spans[0]).textContent).toBe("function\xa0id()");
  });

  // Need phantomjs 2
  // it('symbol', () => {
  //   const desc = TestUtils.renderIntoDocument(<ObjectDescription object={Symbol("foo")}/>);
  //   const span = TestUtils.findRenderedDOMComponentWithTag(desc, 'span');
  //
  //   expect(React.findDOMNode(span).textContent).toBe("Symbol()");
  // });

});
