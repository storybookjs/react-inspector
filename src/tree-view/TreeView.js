import React, {
  useContext,
  useCallback,
  useLayoutEffect,
  useState,
  memo,
} from 'react';
import PropTypes from 'prop-types';
import ExpandedPathsContext from './ExpandedPathsContext';
import TreeNode from './TreeNode';
import {
  DEFAULT_ROOT_PATH,
  hasChildNodes,
  getExpandedPaths,
} from './pathUtils';

import { useStyles } from '../styles';

const ConnectedTreeNode = memo(props => {
  const { data, dataIterator, path, depth, nodeRenderer } = props;
  const [expandedPaths, setExpandedPaths] = useContext(ExpandedPathsContext);
  const nodeHasChildNodes = hasChildNodes(data, dataIterator);
  const expanded = !!expandedPaths[path];

  const handleClick = useCallback(
    () =>
      nodeHasChildNodes &&
      setExpandedPaths(prevExpandedPaths => ({
        ...prevExpandedPaths,
        [path]: !expanded,
      })),
    [nodeHasChildNodes, setExpandedPaths, path, expanded]
  );

  return (
    <TreeNode
      expanded={expanded}
      onClick={handleClick}
      // show arrow anyway even if not expanded and not rendering children
      shouldShowArrow={nodeHasChildNodes}
      // show placeholder only for non root nodes
      shouldShowPlaceholder={depth > 0}
      // Render a node from name and data (or possibly other props like isNonenumerable)
      nodeRenderer={nodeRenderer}
      {...props}>
      {// only render if the node is expanded
        expanded
          ? [...dataIterator(data)].map(({ name, data, ...renderNodeProps }) => {
            return (
              <ConnectedTreeNode
                name={name}
                data={data}
                depth={depth + 1}
                path={`${path}.${name}`}
                key={name}
                dataIterator={dataIterator}
                nodeRenderer={nodeRenderer}
                {...renderNodeProps}
              />
            );
          })
          : null}
    </TreeNode>
  );
});

ConnectedTreeNode.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  dataIterator: PropTypes.func,
  depth: PropTypes.number,
  expanded: PropTypes.bool,
  nodeRenderer: PropTypes.func,
};

const TreeView = memo(
  ({ name, data, dataIterator, nodeRenderer, expandPaths, expandLevel, expandedPathsRef, getExpandedPaths }) => {
    const styles = useStyles('TreeView');
    const stateAndSetter = useState({});
    const [, setExpandedPaths] = stateAndSetter;

    if (expandedPathsRef?.current) {
      expandedPathsRef.current.stateAndSetter = stateAndSetter;
    }

    useLayoutEffect(
      () => {
        if (!expandedPathsRef) {
          return;
        }
         if (!expandedPathsRef.current) {
            expandedPathsRef.current = {stateAndSetter};
         }

        expandedPathsRef.current.isMounted = true;

        if (expandedPathsRef.current.disableCache) {
          return;
        }

        const cached = expandedPathsRef.current.cached;

        if (cached && Object.keys(cached).length) {
          expandedPathsRef.current.stateAndSetter[1](cached);
          expandedPathsRef.current.cached = null;
        }

        return () => {
          if (!expandedPathsRef?.current) {
            return;
          }

          expandedPathsRef.current.isMounted = false;

          if (expandedPathsRef.current.disableCache) {
            return;
          }

          const value = expandedPathsRef.current.stateAndSetter[0];

          if (value && Object.keys(value).length) {
            expandedPathsRef.current.cached = value;
          }
        };
      },
      [expandedPathsRef]
    );

    useLayoutEffect(
      () =>
        setExpandedPaths(prevExpandedPaths =>
          getExpandedPaths(
            data,
            dataIterator,
            expandPaths,
            expandLevel,
            prevExpandedPaths
          )
        ),
      [data, dataIterator, expandPaths, expandLevel, getExpandedPaths]
    );

    return (
      <ExpandedPathsContext.Provider value={stateAndSetter}>
        <ol role="tree" style={styles.treeViewOutline}>
          <ConnectedTreeNode
            name={name}
            data={data}
            dataIterator={dataIterator}
            depth={0}
            path={DEFAULT_ROOT_PATH}
            nodeRenderer={nodeRenderer}
          />
        </ol>
      </ExpandedPathsContext.Provider>
    );
  }
);

TreeView.propTypes = {
  name: PropTypes.string,
  data: PropTypes.any,
  dataIterator: PropTypes.func,
  nodeRenderer: PropTypes.func,
  expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expandLevel: PropTypes.number,
  expandedPathsRef: PropTypes.object,
   getExpandedPaths: PropTypes.func.isRequired,
};

TreeView.defaultProps ={
   getExpandedPaths,
};

export default TreeView;
