react-inspector
=====================

[![build status](https://img.shields.io/travis/xyc/react-inspector/master.svg?style=flat-square)](https://travis-ci.org/xyc/react-inspector)
[![npm version](https://img.shields.io/npm/v/react-inspector.svg?style=flat-square)](https://www.npmjs.com/package/react-inspector)

Type of inspectors:
- [x] Tree style
- [x] Table style
- [ ] Group style

Power of [Browser DevTools](https://developers.google.com/web/tools/chrome-devtools/) inspectors right inside your React app. Check out the interactive playground [here](http://xyc.github.io/react-inspector/). TODO:(rebug)

![](http://xyc.github.io/react-inspector/screenshot.png)

## Install

NPM:
```sh
npm install react-inspector
```

### &lt;ObjectInspector />
Like `console.log`. Consider this as a glorified version of `<pre>JSON.stringify(data, null, 2)</pre>`.


###### How it works
Tree state is saved at root. If you click to expand some elements in the hierarchy, the state will be preserved after the element is unmounted.

#### API
The component accepts the following props:
#### `data`: the Javascript object you would like to inspect

#### `name`: specify the name of the root node, default to `undefined`

#### `initialExpandedPaths`: an array containing all the paths that should be expanded when the component is initialized.
- A path is a dot separated string like `root.foo.bar`
- By default you can refer to root's path as `'root'`, or the name prop if name is defined
  - For example, `['root']` expands the first level nodes
  - `['myCustomName']` can also expand the first level nodes if the component is setup as `<ObjectInspector name="myCustomName" data={{/*...*/}} initialExpandedPaths={['myCustomName', /*...*/]}>`.
  - `['root.foo.bar']` expands the path `root.foo.bar` if `root.foo.bar` is an existing property
- You can use wildcard to expand all paths on a specific level
  - For example, to expand all first level and second level nodes, use `['root', 'root.*']`

### &lt;TableInspector />
Like `console.table`.

#### API
The component accepts the following props:
#### `data`: the Javascript object you would like to inspect, either an array or an object

#### `columns`: An array of the names of the columns you'd like to display in the table

### Usage
```js
import {ObjectInspector, TableInspector} from 'react-inspector';

const MyComponent = (data) => (
  <div>
    <ObjectInspector data={data} />
    <TableInspector data={data} />
  </div>
)

let data = { /* ... */ };

ReactDOM.render(
  <MyComponent data={data} />,    
  document.getElementById('root')
);
```
Checkout `example/App.js` for more examples. Try embedding this inside a component's render() method to provide a live view for its props/state (Works even better with hot reloading).

### Install the example
```sh
npm install && npm start
```
Open http://localhost:3000/example/index.html

## Contribution TODO
- contributors:

## Notes
- `react-object-inspector` package will be deprecated. `<ObjectInspector/>` is now part of the new package `react-inspector`.
- Why inline style? [This document](https://github.com/erikras/react-redux-universal-hot-example/blob/master/docs/InlineStyles.md) summarizes it well.
