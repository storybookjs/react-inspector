react-inspector
=====================

[![build status](https://img.shields.io/travis/xyc/react-inspector/master.svg?style=flat-square)](https://travis-ci.org/xyc/react-inspector)
[![npm version](https://img.shields.io/npm/v/react-inspector.svg?style=flat-square)](https://www.npmjs.com/package/react-inspector)
[![npm downloads](https://img.shields.io/npm/dm/react-inspector.svg?style=flat-square)](https://www.npmjs.com/package/react-inspector)

Power of [Browser DevTools](https://developers.google.com/web/tools/chrome-devtools/) inspectors right inside your React app. Check out the [interactive playground](http://xyc.github.io/react-inspector/).

![](http://xyc.github.io/react-inspector/objectinspector.png)

![](http://xyc.github.io/react-inspector/tableinspector.png)

## Install

NPM:
```sh
npm install react-inspector
```

### &lt;Inspector />
A shorthand for the inspectors.

- `<Inspector/>` is equivalent to `<ObjectInspector>`
- `<Inspector table/>` is equivalent to `<TableInspector>`

### &lt;ObjectInspector />
Like `console.log`. Consider this as a glorified version of `<pre>JSON.stringify(data, null, 2)</pre>`.

###### How it works
Tree state is saved at root. If you click to expand some elements in the hierarchy, the state will be preserved after the element is unmounted.

#### API
The component accepts the following props:
#### `data: PropTypes.any`: the Javascript object you would like to inspect

#### `name: PropTypes.string`: specify the optional name of the root node, default to `undefined`

#### `expandLevel: PropTypes.number`: an integer specifying to which level the tree should be initially expanded.

#### `expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array])`: an array containing all the paths that should be expanded when the component is initialized, or a string of just one path
- The path string is similar to [JSONPath](http://goessner.net/articles/JsonPath/).
  - It is a dot separated string like `$.foo.bar`. `$.foo.bar` expands the path `$.foo.bar` where `$` refers to the root node. Note that it only expands that single node (but not all its parents and the root node). Instead, you should use `expandPaths={['$', '$.foo', '$.foo.bar']}` to expand all the way to the `$.foo.bar` node.
  - You can use wildcard to expand all paths on a specific level
    - For example, to expand all first level and second level nodes, use `['$', '$.*']` (equivalent to `expandLevel={2}`)
- the results are merged with expandLevel

#### `showNonenumerable: PropTypes.bool`: show non-enumerable properties

### &lt;TableInspector />
Like `console.table`.

#### API
The component accepts the following props:
#### `data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])`: the Javascript object you would like to inspect, either an array or an object

#### `columns: PropTypes.array`: An array of the names of the columns you'd like to display in the table

### Usage
```js
import {ObjectInspector, TableInspector} from 'react-inspector';

// or use the shorthand
import {Inspector} from 'react-inspector';

const MyComponent = ({ data }) =>
  <div>
    <ObjectInspector data={data} />
    <TableInspector data={data} />

    <Inspector data={data} />
    <Inspector table data={data} />
  </div>

let data = { /* ... */ };

ReactDOM.render(
  <MyComponent data={data} />,
  document.getElementById('root')
);
```
Checkout `example/App.js` for more examples. Try embedding the inspectors inside a component's render() method to provide a live view for its props/state (Works even better with hot reloading).

### Install the example
```sh
npm install && npm start
```
Open http://localhost:3000/example/index.html

## Roadmap
Type of inspectors:
- [ ] Tree style
  - [x] common objects
  - [ ] DOM element objects
- [x] Table style
  - [ ] Column resizer
- [ ] Group style

## Contribution
Contribution is welcome. [Past contributors](https://github.com/xyc/react-inspector/graphs/contributors)

## Notes
- `react-object-inspector` package will be deprecated. `<ObjectInspector/>` is now part of the new package `react-inspector`.
- Why inline style? [This document](https://github.com/erikras/react-redux-universal-hot-example/blob/master/docs/InlineStyles.md) summarizes it well.
