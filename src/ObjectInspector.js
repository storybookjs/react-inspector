import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';
import ObjectPreview from './ObjectPreview';

// Constants
const DEFAULT_ROOT_PATH='root';

// Styles
import objectStyles from './objectStyles';
const styles = {
  base: {
    fontFamily: 'Menlo, monospace',
    fontSize: '11px',
    lineHeight: '14px',
    cursor: 'default',
  },
  propertyNodesContainer: {
    paddingLeft: '12px',
  },
  unselectable: {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none',
  },
  expandControl: {
    color: '#6e6e6e',
    fontSize: '10px',
    marginRight: '3px',
    whiteSpace: 'pre',
  },
  property: {
    paddingTop: '2px',
  },
};

export default class ObjectInspector extends Component {

  propTypes: {
    name: PropTypes.string,
    data: PropTypes.object,
    initialExpandedPaths: PropTypes.array, // initial paths of the nodes that are visible
    depth: PropTypes.number.isRequired,
    path: PropTypes.string // path is dot separated property names to reach the current node
  }

  static defaultProps = {
    name: void 0,
    data: undefined,
    initialExpandedPaths: undefined,
    depth: 0,
    path: DEFAULT_ROOT_PATH
  }

  constructor(props) {
    super(props);

    if(props.depth === 0){
      this.state = {expandedPaths: {}};
      this.state.expandedPaths[props.path] = false;

      // initialize expandedPaths with initialExpandedPaths
      if(typeof props.initialExpandedPaths !== 'undefined'){
        props.initialExpandedPaths.map((expandedPath)=>{
          if(typeof expandedPath === 'string'){
            const names = expandedPath.split('.'); // wildcard names
            const paths = [];
            function wildcardPathToPaths(curObject, curPath, i){
              const WILDCARD = "*";
              if(i === names.length){
                paths.push(curPath);
                return;
              }
              const name = names[i];
              if(i === 0){
                if(name === props.name || name === DEFAULT_ROOT_PATH || name === WILDCARD){
                  wildcardPathToPaths(curObject, 'root', i + 1);
                }
              }
              else{
                if(name === WILDCARD){
                  for(const propertyName in curObject){
                    if(curObject.hasOwnProperty(propertyName)){
                      const propertyValue = curObject[propertyName];
                      if(ObjectInspector.isExpandable(propertyValue)){
                        wildcardPathToPaths(propertyValue, curPath + '.' + propertyName, i + 1);
                      }
                      else{
                        continue;
                      }
                    }
                  }
                }
                else{
                  const propertyValue = curObject[name];
                  if(ObjectInspector.isExpandable(propertyValue)){
                    wildcardPathToPaths(propertyValue, curPath + '.' + name, i + 1);
                  }
                }
              }
            }
            wildcardPathToPaths(props.data, '', 0);

            paths.map((path)=>{
              this.state.expandedPaths[path] = true;
            })
          }
        });
      }
    }
  }

  static isExpandable(data){
    return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
  }

  getExpanded(path){
    const expandedPaths = this.state.expandedPaths;
    if (typeof expandedPaths[path] !== 'undefined') {
      return expandedPaths[path];
    }
    return false;
  }

  setExpanded(path, expanded){
    const expandedPaths = this.state.expandedPaths;
    expandedPaths[path] = expanded;
    this.setState({expandedPaths: expandedPaths});
  }

  handleClick() {
    // console.log(this.props.data);
    if (ObjectInspector.isExpandable(this.props.data)) {
      if (this.props.depth > 0) {
        this.props.setExpanded(this.props.path, !this.props.getExpanded(this.props.path));
      }
      else{
        this.setExpanded(this.props.path, !this.getExpanded(this.props.path));
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
    const expanded = getExpanded(this.props.path);

    const expandGlyph = ObjectInspector.isExpandable(data) ? (expanded ? '▼'
                                                                       : '▶')
                                                           : (this.props.depth === 0 ? '' // unnamed root node
                                                                                     : ' ');

    let propertyNodesContainer;
    if(expanded){
      let propertyNodes = [];

      for(let propertyName in data){
        const propertyValue = data[propertyName];
        if(data.hasOwnProperty(propertyName)){
          propertyNodes.push(<ObjectInspector getExpanded={getExpanded}
                                              setExpanded={setExpanded}
                                              path={`${this.props.path}.${propertyName}`}
                                              depth={this.props.depth + 1}
                                              key={propertyName}
                                              name={propertyName}
                                              data={propertyValue}></ObjectInspector>);
        }
      }
      propertyNodesContainer = (<div style={styles.propertyNodesContainer}>{propertyNodes}</div>);
    }

    return (
      <div style={styles.base}>
        <span style={styles.property} onClick={this.handleClick.bind(this)}>
          <span style={{...styles.expandControl, ...styles.unselectable}}>{expandGlyph}</span>
          {(() => {
            if (typeof name !== 'undefined') {
              return (<span>
                        <span style={objectStyles.name}>{name}</span>
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
