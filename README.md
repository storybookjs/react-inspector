react-object-inspector
=====================

[![build status](https://img.shields.io/travis/xyc/react-object-inspector/master.svg?style=flat-square)](https://travis-ci.org/xyc/react-object-inspector)
[![npm version](https://img.shields.io/npm/v/react-object-inspector.svg?style=flat-square)](https://www.npmjs.com/package/react-object-inspector)

Simple object inspector made with [React](http://facebook.github.io/react/) styled similarly to [Chrome DevTools](https://developer.chrome.com/devtools). You can use this tool to inspect Javascript Objects as an alternative to `<pre>JSON.stringify(data, null, 2)</pre>`. Check out the playground [here](http://xyc.github.io/react-object-inspector/)

![](http://xyc.github.io/react-object-inspector/screenshot.png)

Tree state is saved at root. If you click to expand some elements in the hierarchy, the state will be preserved after the element is unmounted.

### Install

NPM:
```sh
npm install react-object-inspector
```

CSS:
```html
<link rel="stylesheet" type="text/css" href="path/to/react-object-inspector.css">
```

## API
#### &lt;ObjectInspector />
The component accepts the following props:
- `data`: the Javascript object you would like to inspect
- `name`: specify the name of the root node, default to undefined
<!-- - `initialExpandedPaths`:  -->

### Usage
```js
import ObjectInspector from 'react-object-inspector';
let data = { /* ... */ };

React.render(
    <ObjectInspector data={ data } />,
    document.getElementById('objectInspector')
);
```
One common usage is embedding this in a component's render() method to provide a view for its props/state.

### Install the example
```sh
npm install && npm start
```
Open http://localhost:3000/example/index.html
