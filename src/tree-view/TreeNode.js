import React, { createElement, Component, PropTypes, Children } from 'react'

import unselectable from '../styles/unselectable'

const styles = {
  base: {
    lineHeight: '14px',
    cursor: 'default',

    boxSizing: 'border-box',
    listStyle: 'none',

    fontFamily: 'Menlo, monospace',
    fontSize: '11px',
    // take up parent container width
    // width: '100%',
  },
  previewContainer: {
  },

  placeholder: {
    whiteSpace: 'pre',

    fontSize: 12,
    marginRight: 3,
    ...unselectable,
  },
  arrow: {
    color: '#6e6e6e',
    display: 'inline-block',

    // lineHeight: '14px',
    fontSize: 12,
    marginRight: 3,
    ...unselectable,
  },

  childNodesContainer: {
    margin: 0, // reset user-agent style
    paddingLeft: 12,
  },
}

const Arrow = ({ expanded, style }) => (
  <span style={style}>{expanded ? '▼' : '▶'}</span>
)

class TreeNode extends Component {
  render() {
    const { name, data, expanded, onClick, children, style, nodeRenderer, title } = this.props
    const { shouldShowArrow, shouldShowPlaceholder } = this.props

    const renderedNode = createElement(nodeRenderer, this.props)

    const childNodes = expanded ? children : undefined
    return (
      <li aria-expanded={expanded} role="treeitem" style={styles.base} title={title}>
        <div style={styles.previewContainer} onClick={onClick}>
          {
            (shouldShowArrow || (Children.count(children) > 0)) ?
              <Arrow style={styles.arrow} expanded={expanded}/> :
              (shouldShowPlaceholder && <span style={styles.placeholder}>&nbsp;</span>)
          }
          { renderedNode }
        </div>

        <ol role="group" style={styles.childNodesContainer}>
          { childNodes }
        </ol>
      </li>
    )
  }
}

TreeNode.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,

  expanded: PropTypes.bool,
  shouldShowArrow: PropTypes.bool,
  shouldShowPlaceholder: PropTypes.bool,

  nodeRenderer: PropTypes.func,

  onClick: PropTypes.func,
}

TreeNode.defaultProps = {
  name: '',
  data: undefined,
  expanded: true,

  nodeRenderer: ({ name, data, expanded }) => <span>{name}</span>,

  onClick: () => {},

  shouldShowArrow: false,
  shouldShowPlaceholder: true,
}

export default TreeNode
