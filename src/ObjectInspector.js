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
          if(propertyNodes.length === (this.props.maxProperties - 1) && Object.keys(object).length > this.props.maxProperties){
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

      return (<span className="ObjectInspector-object-preview">{'Object {'}{intersperse(propertyNodes, ", ")}{'}'}</span>);
    }
  }
}

let canBeExpanded = (data) => (typeof data === 'object' && data !== null && Object.keys(data).length > 0);

export default class ObjectInspector extends Component {

  propTypes: {
    name: PropTypes.string;
    data: PropTypes.object;
    depth: PropTypes.number;
    defaultExpanded: PropTypes.bool;
  }

  static defaultProps = {
      name: void 0,
      data: {},
      depth: 0,
      defaultExpanded: false
  }

  constructor(props) {
    super(props);

    this.state = {expanded: false};
    if(props.depth === 0){
      this.state.childrenExpanded = {};
    }
  }

  handleClick() {
    console.log(this.props.data);
    if (canBeExpanded(this.props.data)) {
      if (this.props.depth > 0) {
        this.props.setExpandedChild(this.props.depth, this.props.name, !this.state.expanded);
      }
      this.setState({expanded: !this.state.expanded});
    }
  }

  getExpandedChild(depth, name){
    const childrenExpanded = this.state.childrenExpanded;
    if (typeof childrenExpanded[depth] !== 'undefined') {
      return childrenExpanded[depth][name];
    }
    return false;
  }

  setExpandedChild(depth, name, expanded){
    const childrenExpanded = this.state.childrenExpanded;
    if(typeof childrenExpanded[depth] === 'undefined'){
      childrenExpanded[depth] = {};
    }
    childrenExpanded[depth][name] = expanded;
    this.setState({childrenExpanded: childrenExpanded});
  }

  render() {
    const data = this.props.data;
    const name = this.props.name;

    const expanded = this.state.expanded || this.props.defaultExpanded;
    const expandGlyph = canBeExpanded(data) ? (expanded ? '▼' : '▶') : (typeof name === 'undefined' ? '' : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];

      const setExpandedChild = (this.props.depth === 0) ? (this.setExpandedChild.bind(this)) : this.props.setExpandedChild;
      const getExpandedChild = (this.props.depth === 0) ? (this.getExpandedChild.bind(this)) : this.props.getExpandedChild;

      for(let propertyName in data){
        const propertyValue = data[propertyName];
        if(data.hasOwnProperty(propertyName)){
          propertyNodes.push(<ObjectInspector
                                defaultExpanded={getExpandedChild(this.props.depth + 1, propertyName)}
                                getExpandedChild={getExpandedChild}
                                setExpandedChild={setExpandedChild}
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
      </div>
    );
  }
}
