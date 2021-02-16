import React, { Children, memo } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';

const Arrow = ({ expanded, styles }) => (
  <span
    style={{
      ...styles.base,
      ...(expanded ? styles.expanded : styles.collapsed),
    }}>
    ▶
  </span>
);

const TreeNode = memo(props => {
  props = {
    expanded: true,
    nodeRenderer: ({ name }) => <span>{name}</span>,
    onClick: () => {},
    shouldShowArrow: false,
    shouldShowPlaceholder: true,
    ...props,
  };
  const {
    expanded,
    onClick,
    children,
    nodeRenderer,
    title,
    shouldShowArrow,
    shouldShowPlaceholder,
  } = props;

  const styles = useStyles('TreeNode');
  const NodeRenderer = nodeRenderer;

  return (
    <li
      aria-expanded={expanded}
      role="treeitem"
      style={styles.treeNodeBase}
      title={title}>
      <div style={styles.treeNodePreviewContainer} onClick={onClick}>
        {shouldShowArrow || Children.count(children) > 0 ? (
          <Arrow expanded={expanded} styles={styles.treeNodeArrow} />
        ) : (
          shouldShowPlaceholder && (
            <span style={styles.treeNodePlaceholder}>&nbsp;</span>
          )
        )}
        <NodeRenderer {...props} />
      </div>

      <ol role="group" style={styles.treeNodeChildNodesContainer}>
        {expanded ? children : undefined}
      </ol>
    </li>
  );
});

TreeNode.propTypes = {
   name: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)]),
  data: PropTypes.any,
  expanded: PropTypes.bool,
  shouldShowArrow: PropTypes.bool,
  shouldShowPlaceholder: PropTypes.bool,
  nodeRenderer: PropTypes.func,
  onClick: PropTypes.func,
};

export default TreeNode;
