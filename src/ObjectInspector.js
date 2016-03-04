import React, { Component } from 'react';

import ObjectDescription from './ObjectDescription';
import ObjectPreview from './ObjectPreview';

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

const DEFAULT_ROOT_PATH='root';
/**
 * Convert wild card paths to concrete paths
 * @param  {array} initialExpandedPaths  wild card paths
 * @param  {object} data                 data object
 * @param  {string} rootName             optional root name (if not specified will use DEFAULT_ROOT_PATH)
 * @return {array}                       concrete paths
 */
const pathsFromWildcardPaths = (wildcardPaths, data, rootName = DEFAULT_ROOT_PATH) => {
  const paths = []
  if(wildcardPaths === undefined){
    return paths;
  }
  wildcardPaths.map((expandedPath)=>{
    if(typeof expandedPath === 'string'){
      const names = expandedPath.split('.'); // wildcard names
      // recursively populate paths with wildcard paths
      function populatePaths(curObject, curPath, i){
        const WILDCARD = "*";
        if(i === names.length){
          paths.push(curPath);
          return;
        }
        const name = names[i];
        if(i === 0){
          if(name === rootName /*|| name === DEFAULT_ROOT_PATH*/ || name === WILDCARD){
            populatePaths(curObject, 'root', i + 1);
          }
        }
        else{
          if(name === WILDCARD){
            for(const propertyName in curObject){
              if(curObject.hasOwnProperty(propertyName)){
                const propertyValue = curObject[propertyName];
                if(ObjectInspector.isExpandable(propertyValue)){
                  populatePaths(propertyValue, curPath + '.' + propertyName, i + 1);
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
              populatePaths(propertyValue, curPath + '.' + name, i + 1);
            }
          }
        }
      }
      populatePaths(data, '', 0);
      // console.log(`paths: [${paths}], initialExpandedPaths: [${initialExpandedPaths}]`)
    }
  });
  return paths;
}

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

  componentWillReceiveProps(nextProps) {
    // expanded paths need to be recalculated on new data arrival
    const paths = pathsFromWildcardPaths(nextProps.initialExpandedPaths, nextProps.data, nextProps.name)

    console.log({
      expandedPaths: paths.reduce((obj, path) => { obj[path] = true; return obj }, {})
    }, this.props.initialExpandedPaths, this.props.data, paths, this.props.name)

    this.setState({
      expandedPaths: paths.reduce((obj, path) => { obj[path] = true; return obj }, {})
    })
  }

  constructor(props) {
    super(props);

    if(props.depth === 0){ // root node

      const paths = pathsFromWildcardPaths(props.initialExpandedPaths, props.data, props.name)
      this.state = {
        // expand every path
        expandedPaths: paths.reduce((obj, path) => { obj[path] = true; return obj }, {})
      }
    }
  }

  static isExpandable(data){
    return (typeof data === 'object' && data !== null && Object.keys(data).length > 0);
  }

  getExpanded(path){
    const expandedPaths = this.state.expandedPaths;
    if (expandedPaths !== undefined && typeof expandedPaths[path] !== 'undefined') {
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
                                              path={`${this.props.path}.${propertyName}`} // TODO: escape '.' in propertyName
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
