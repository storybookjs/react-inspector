react-object-inspector
=====================

Simple object inspector made with [React](http://facebook.github.io/react/), an alternative to `<pre>JSON.stringify(data, null, 2)</pre>`. You can use this tool to inspect Javascript Objects. Styled similarly to [Chrome DevTools](https://developer.chrome.com/devtools).

![](http://xyc.github.io/react-object-inspector/screenshot.png)

[Demo](http://xyc.github.io/react-object-inspector/)

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
- `data`: the Javascript object you would like to inpsect

### Usage
```js
import ObjectInspector from 'react-object-inspector';
let data = { /* ... */ };

React.render(
    <ObjectInspector data={ data } />,
    document.getElementById('objectInspector')
);
```

### Install the example
```sh
npm install && npm start
```
Open http://localhost:3000/example/index.html
