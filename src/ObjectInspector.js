import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';
import ObjectPreview from './ObjectPreview';

export default class ObjectInspector extends Component {

  propTypes: {
    name: PropTypes.string,
    data: PropTypes.object,
    depth: PropTypes.number,
    initialExpandedState: PropTypes.object,
    objectinspectorid: PropTypes.string,  // id to indentify the node in the expanded state
  }

  static defaultProps = {
    name: void 0,
    data: undefined,
    depth: 0,
    initialExpandedState: undefined,

    // initialExpandedPath:
    // path is a sequence of object names. (object names should not contain a "dot")
    // path: a simpler interface to the whole state, can we specify path and state simultaneously?
    // initalExpandedPath: "undefined.glossary.GlossDiv"?
    // "undefined.*.*", ... DSL here '.'.join(['*', .])
    //  Array(6).join('*').split('').join('.')
    // "undefined.\*" escape multiply
    //
    // undefined.glossary.GlossDiv
    // ->
    // undefined
    // undefined.glossary
    // undefined.glossary.GlossDiv

    // specify initialExpandedState will invalidate initialExpandedPath

    objectinspectorid: String(void 0)
  }

  constructor(props) {
    super(props);

    if(props.depth === 0){

      if(typeof props.initialExpandedState !== 'undefined')
        this.state = {expandedTree: props.initialExpandedState};
      else{
        this.state = {expandedTree: {}};
        //this.state.expandedTree[props.objectinspectorid] = false;
        // will default to false if not found
      }
      // this.state = {expandedTree: {}};
      // this.state.expandedTree[props.objectinspectorid] = false;
    }
  }

  static isExpandable(data){
    return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
  }

  getExpanded(objectinspectorid){
    const expandedTree = this.state.expandedTree;
    if (typeof expandedTree[objectinspectorid] !== 'undefined') {
      return expandedTree[objectinspectorid];
    }
    return false;
  }

  setExpanded(objectinspectorid, expanded){
    const expandedTree = this.state.expandedTree;
    expandedTree[objectinspectorid] = expanded;
    this.setState({expandedTree: expandedTree});
  }

  handleClick() {
    // console.log(this.props.data);
    if (ObjectInspector.isExpandable(this.props.data)) {
      if (this.props.depth > 0) {
        this.props.setExpanded(this.props.objectinspectorid, !this.props.getExpanded(this.props.objectinspectorid));
      }
      else{
        this.setExpanded(this.props.objectinspectorid, !this.getExpanded(this.props.objectinspectorid));
      }
    }
  }

  componentWillMount(){
    if (typeof React.initializeTouchEvents === 'function') {
      React.initializeTouchEvents(true);
    }
  }

  render() {
    const data = this.props.data;
    const name = this.props.name;

    const setExpanded = (this.props.depth === 0) ? (this.setExpanded.bind(this)) : this.props.setExpanded;
    const getExpanded = (this.props.depth === 0) ? (this.getExpanded.bind(this)) : this.props.getExpanded;
    const expanded = getExpanded(this.props.objectinspectorid);

    const expandGlyph = ObjectInspector.isExpandable(data) ? (expanded ? '▼' : '▶') : (typeof name === 'undefined' ? '' : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];

      for(let propertyName in data){
        const propertyValue = data[propertyName];
        if(data.hasOwnProperty(propertyName)){
          propertyNodes.push(<ObjectInspector getExpanded={getExpanded}
                                              setExpanded={setExpanded}
                                              objectinspectorid={`${this.props.objectinspectorid}.${propertyName}`}
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
        {(() => {
          return (this.props.depth === 0) ? (<pre>{JSON.stringify(this.state.expandedTree, null, 2)}</pre>) : undefined
        })()}
        <span className="ObjectInspector-property" onTouchStart={this.handleClick.bind(this)} onClick={this.handleClick.bind(this)}>
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
