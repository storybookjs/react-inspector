import React, { Component, PropTypes, Children } from 'react'
import TreeView from '../tree-view/TreeView'

import ObjectPreview from './ObjectPreview'
import ObjectLabel from './ObjectLabel'

const createIterator = (showNonenumerable) => {
  const objectIterator = function* (data) {
    const shouldIterate = (typeof data === 'object' && data !== null) || typeof data === 'function'
    if(!shouldIterate)
      return

    // iterable objects (except arrays)
    if(!Array.isArray(data) && data[Symbol.iterator]){
      let i = 0
      for(let entry of data) {
        if(Array.isArray(entry) && entry.length === 2){
          const [k, v] = entry
          yield {
            name: k,
            data: v,
          }
        }
        else{
          yield {
            name: i.toString(),
            data: entry,
          }
        }
        i++
      }
    }

    else{
      for(let propertyName of Object.getOwnPropertyNames(data)){
        if(data.propertyIsEnumerable(propertyName)){
          const propertyValue = data[propertyName]
          yield {
            name: propertyName,
            data: propertyValue,
          }
        }

        else if(showNonenumerable){
          // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
          // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
          // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
          let propertyValue
          try{
            propertyValue = data[propertyName]
          }
          catch(e){
          }

          if(propertyValue !== undefined){
            yield {
              name: propertyName,
              data: propertyValue,
              isNonenumerable: true,
            }
          }
        }
      }

      // [[Prototype]] of the object: `Object.getPrototypeOf(data)`
      // the property name is shown as "__proto__"
      if(showNonenumerable && data !== Object.prototype /* already added */){
        yield {
          name: '__proto__',
          data: Object.getPrototypeOf(data),
          isNonenumerable: true,
        }
      }
    }
  }

  return objectIterator
}

const nodeRenderer = ({ depth, name, data, isNonenumerable }) =>
  (depth === 0) ? <ObjectPreview name={name} data={data}/>
                : <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />

/**
 * Tree-view for objects
 */
class ObjectInspector extends Component{
  static defaultProps = {
    showNonenumerable: false,
  }

  static propTypes = {
    /** An integer specifying to which level the tree should be initially expanded. */
    expandLevel: PropTypes.number,
    /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
    expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

    name: PropTypes.string,
    /** Not isRequired because we also allow undefined value */
    data: PropTypes.any,

    /** Show non-enumerable properties */
    showNonenumerable: PropTypes.bool,
  }

  render() {
    const { showNonenumerable } = this.props

    const dataIterator = createIterator(showNonenumerable)
    return (
      <TreeView
        nodeRenderer={nodeRenderer}
        dataIterator={dataIterator}
        {...this.props}>
      </TreeView>
    )
  }
}

export default ObjectInspector
