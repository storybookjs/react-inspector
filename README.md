## design

codeText is `eval`ed.

## try:

```js
this // this -> Container is eval-ed
this.props
this.state
window
window.chrome

console
console.log
console.log(1)

2323 * 313

(()=>{
  return 1
})()

fetch('https://api.github.com/users/xyc')
  .then((response) => response.json())
  .then((data) => {
    this.setState({codeText: data})
    // return data
  })
  .catch()
```



```js
// https://github.com/chibicode/react-json-tree
{
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar'
  },
  immutable: Map({ key: 'value' })
}
```
