import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';

function intersperse(arr, sep){
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function(xs, x, i) {
      return xs.concat([sep, x]);
  }, [arr[0]]);
}

/**
 * A preview of the object on root level node
 */
class ObjectPreview extends Component {
  propTypes: {
    maxProperties: PropTypes.number; // maximum properties displayed in preview
  }

  static defaultProps = {
    maxProperties: 5
  }

  render() {
    const object = this.props.object;
    if (typeof object !== 'object' || object === null) {
      return (<ObjectDescription object={object} />);
    }

    if (Array.isArray(object)) {
      return <span className="ObjectInspector-object-preview">[
        {intersperse(object.map(function(element, index){
          return (<ObjectDescription key={index} object={element} />)
        }), ", ")}
      ]</span>;
    }
    else {
      let propertyNodes = [];
      for(let propertyName in object){
        const propertyValue = object[propertyName];
        if(object.hasOwnProperty(propertyName)){
          let ellipsis;
          if (propertyNodes.length === (this.props.maxProperties - 1)
              && Object.keys(object).length > this.props.maxProperties) {
            ellipsis = (<span key={'ellipsis'}>…</span>);
          }
          propertyNodes.push(
            <span key={propertyName}>
              <span className="ObjectInspector-object-name">{propertyName}</span>
              :&nbsp;
              <ObjectDescription object={propertyValue} />
              {ellipsis}
            </span>
          );
          if(ellipsis)
            break;
        }
      }

      return (<span className="ObjectInspector-object-preview">
                  {'Object {'}
                  {intersperse(propertyNodes, ", ")}
                  {'}'}
              </span>);
    }
  }
}

export default class ObjectInspector extends Component {

  propTypes: {
    name: PropTypes.string;
    data: PropTypes.object;
    depth: PropTypes.number;
  }

  static defaultProps = {
      name: void 0,
      data: {},
      depth: 0,
  }

  constructor(props) {
    super(props);

    this.state = {expanded: false};
    if(props.depth === 0){
      this.state.expandedTree = {'0': {}};
      this.state.expandedTree['0'][props.name] = false;
    }
  }

  static isExpandable(data){
    return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
  }

  // getExpanded(path){
  //   {path: }
  // }

  getExpanded(depth, name){
    

    const expandedTree = this.state.expandedTree;
    if (typeof expandedTree[depth] !== 'undefined') {
      return expandedTree[depth][name];
    }
    return false;
  }

  setExpanded(depth, name, expanded){
    const expandedTree = this.state.expandedTree;
    if(typeof expandedTree[depth] === 'undefined'){
      expandedTree[depth] = {};
    }
    expandedTree[depth][name] = expanded;
    this.setState({expandedTree: expandedTree});
  }

  handleClick() {
    console.log(this.props.data);
    if (ObjectInspector.isExpandable(this.props.data)) {
      if (this.props.depth > 0) {
        this.props.setExpanded(this.props.depth, this.props.name, !this.props.getExpanded(this.props.depth, this.props.name));
      }
      else{
        this.setExpanded(this.props.depth, this.props.name, !this.getExpanded(this.props.depth, this.props.name));
      }
    }
  }

  render() {
    const data = this.props.data;
    const name = this.props.name;

    const setExpanded = (this.props.depth === 0) ? (this.setExpanded.bind(this)) : this.props.setExpanded;
    const getExpanded = (this.props.depth === 0) ? (this.getExpanded.bind(this)) : this.props.getExpanded;
    const expanded = getExpanded(this.props.depth, this.props.name);

    const expandGlyph = ObjectInspector.isExpandable(data) ? (expanded ? '▼' : '▶') : (typeof name === 'undefined' ? '' : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];

      for(let propertyName in data){
        const propertyValue = data[propertyName];
        if(data.hasOwnProperty(propertyName)){
          propertyNodes.push(<ObjectInspector getExpanded={getExpanded}
                                              setExpanded={setExpanded}
                                              depth={this.props.depth + 1}
                                              key={propertyName}
                                              name={propertyName}
                                              data={propertyValue}></ObjectInspector>);
        }
      }

      propertyNodesContainer = (<div style={{paddingLeft:"12px"}} className="ObjectInspector-property-nodes-container">{propertyNodes}</div>);
    }

    return (
      <div className="ObjectInspector">
        <span className="ObjectInspector-property" onClick={this.handleClick.bind(this)}>
          <span className="ObjectInspector-expand-control ObjectInspector-unselectable">{expandGlyph}</span>
          {(() => {
            if (typeof name !== 'undefined') {
              return (<span>
                        <span className="ObjectInspector-object-name">{name}</span>
                        <span>: </span>
                        <ObjectDescription object={data} />
                      </span>);
            }
            else{
              return (<ObjectPreview object={data}/>);
            }
          })()}
        </span>
        {propertyNodesContainer}
        {(()=>{
            if(this.props.depth === 0){
              return (<pre>expandedTree:
                      {JSON.stringify(this.state.expandedTree, null, 2)}
                      </pre>)
            }
          })()}
      </div>
    );
  }
}
