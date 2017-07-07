```js
yarn lint v0.27.5
$ eslint src --fix

/Users/abhisku5/dev/react-inspector/src/dom-inspector/DOMNodePreview.js
   1:17  error  'Component' is defined but never used  no-unused-vars
  58:39  error  'name' is defined but never used       no-unused-vars

/Users/abhisku5/dev/react-inspector/src/index.js
  18:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object-inspector/ObjectInspector.js
  1:28  error  'Children' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object-inspector/ObjectInspector.spec.js
  2:8  error  'PropTypes' is defined but never used              no-unused-vars
  9:7  error  'defaultProps' is assigned a value but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object-inspector/ObjectLabel.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object-inspector/ObjectPreview.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object-inspector/ObjectRootLabel.js
  1:17  error  'Component' is defined but never used  no-unused-vars
  2:8   error  'PropTypes' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object/ObjectName.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object/ObjectName.spec.js
   2:8  error  'PropTypes' is defined but never used              no-unused-vars
  13:7  error  'defaultProps' is assigned a value but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object/ObjectValue.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/object/ObjectValue.spec.js
    2:8  error    'PropTypes' is defined but never used     no-unused-vars
  119:3  warning  Duplicate spec: "should render a symbol"  jasmine/no-spec-dupes

/Users/abhisku5/dev/react-inspector/src/styles/ThemeProvider.js
  1:8  error  'React' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/table-inspector/DataContainer.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/table-inspector/getHeaders.spec.js
  46:3  warning  Duplicate spec: "should work for objects whose keys are index numbers"  jasmine/no-spec-dupes

/Users/abhisku5/dev/react-inspector/src/table-inspector/HeaderContainer.js
  1:17  error  'Component' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/table-inspector/TableInspector.js
  68:11  error  'sorted' is assigned a value but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/tree-view/pathUtils.js
  12:62  error  'j' is defined but never used  no-unused-vars

/Users/abhisku5/dev/react-inspector/src/tree-view/TreeNode.js
  12:7   error  'name' is assigned a value but never used  no-unused-vars
  13:7   error  'data' is assigned a value but never used  no-unused-vars
  64:26  error  'data' is defined but never used           no-unused-vars
  64:32  error  'expanded' is defined but never used       no-unused-vars

/Users/abhisku5/dev/react-inspector/src/tree-view/TreeView.js
  10:5  error  Unexpected lexical declaration in case block  no-case-declarations
  10:5  error  Unexpected lexical declaration in case block  no-case-declarations
  10:5  error  Unexpected lexical declaration in case block  no-case-declarations

✖ 29 problems (27 errors, 2 warnings)

error Command failed with exit code 1.
```
