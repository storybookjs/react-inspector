react-inspector
=====================

[![build status](https://img.shields.io/travis/xyc/react-object-inspector/master.svg?style=flat-square)](https://travis-ci.org/xyc/react-object-inspector)
[![npm version](https://img.shields.io/npm/v/react-object-inspector.svg?style=flat-square)](https://www.npmjs.com/package/react-object-inspector)

Power of [Browser DevTools](https://developers.google.com/web/tools/chrome-devtools/) inspectors right inside your React app.

#### ObjectInspector
Like `console.log`. If you find yourself using `<pre>JSON.stringify(data, null, 2)</pre>` a lot to visualize your data inside a React App, you might as well use `<ObjectInspector>`. Check out the interactive playground [here](http://xyc.github.io/react-object-inspector/).

![](http://xyc.github.io/react-object-inspector/screenshot.png)

Tree state is saved at root. If you click to expand some elements in the hierarchy, the state will be preserved after the element is unmounted.

#### TableInspector
Like `console.table`.

## Install

NPM:
```sh
npm install react-inspector
```

## API
#### &lt;ObjectInspector />
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

#### &lt;TableInspector />
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
Checkout `example/App.js` for more examples. Try embedding this inside a component's render() method to provide a live view (If you are using hot reloading) for its props/state.

### Install the example
```sh
npm install && npm start
```
Open http://localhost:3000/example/index.html

## Notes
- `react-object-inspector` package is renamed to `react-inspector`
- Starting from 0.2.0, react-object-inspector uses inline styles and you don't need to include any additional CSS files.
