import React, { Component } from 'react';

import ObjectDescription from '../object/ObjectDescription';
import ObjectPreview from '../object/ObjectPreview';

// Styles
import objectStyles from '../object/objectStyles';
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

const onChangeTransitionStyles = {WebkitTransition: "background-color 1s ease"}
const StyleWrapper = ({ children, styles }) => <span style={styles}>{children}</span>

import { DEFAULT_ROOT_PATH, isExpandable, pathsFromWildcardPaths } from './pathUtils'

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
    if(this.props.depth === 0){
      // expanded paths need to be recalculated on new data arrival
      const paths = pathsFromWildcardPaths(nextProps.initialExpandedPaths, nextProps.data, nextProps.name)

      this.setState({
        expandedPaths: paths.reduce(
          (obj, path) => { obj[path] = true; return obj },
          this.state.expandedPaths // based on current expandedPaths
        )
      })
    }

    // Change the styles (and transition)
    this.setState({
      onChangeStyles:{
        backgroundColor: '#48F948'
      }
    })
    // onTransitionEnd, remove the styles

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

    if(this.state === undefined){
      this.state = {}

      // transition
      this.state.onChangeStyles = {
        // backgroundColor: '#48F948'
      }
    }

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
    if (isExpandable(this.props.data)) {
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

    const expandGlyph = isExpandable(data) ? (expanded ? '▼' : '▶')
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
                        <StyleWrapper styles={{...onChangeTransitionStyles,
                                              ...this.state.onChangeStyles}}>
                        <ObjectDescription object={data} />
                        </StyleWrapper>
                      </span>);
            }
            else{
              return (<StyleWrapper styles={{...onChangeTransitionStyles,
                                            ...this.state.onChangeStyles}}>
                      <ObjectPreview object={data}
                                     styles={{...onChangeTransitionStyles,
                                             ...this.state.onChangeStyles}}/>
                     </StyleWrapper>);
            }
          })()}
        </span>
        {propertyNodesContainer}
      </div>
    );
  }
}
