import React, { useContext, useCallback, useLayoutEffect, useState, memo } from 'react';
import { ExpandedPathsContext } from './ExpandedPathsContext';
import { TreeNode } from './TreeNode';
import { DEFAULT_ROOT_PATH, hasChildNodes, getExpandedPaths } from './pathUtils';

import { useStyles } from '../styles';
import { defaultDataAccessor, UNEVALUATED_GETTER } from '../DataAccessor';
import { DataAccessorContext, useDataAccessor } from '../DataAccessorContext';

const ConnectedTreeNode = memo<any>((props) => {
  const { data, dataIterator, path, depth, nodeRenderer, isAccessor, parentData, name } = props;
  const [expandedPaths, setExpandedPaths] = useContext(ExpandedPathsContext);
  const accessor = useDataAccessor();

  // Lazily-evaluated getter support: an accessor property starts out as
  // the UNEVALUATED_GETTER sentinel and is only computed (via
  // accessor.getProperty, which may run the getter) when the user clicks
  // the "(...)" affordance.
  const [evaluation, setEvaluation] = useState<{ evaluated: boolean; value?: unknown }>({ evaluated: false });
  const getterEvaluated = !isAccessor || evaluation.evaluated;
  const effectiveData = isAccessor ? (evaluation.evaluated ? evaluation.value : UNEVALUATED_GETTER) : data;

  const nodeHasChildNodes = getterEvaluated && hasChildNodes(effectiveData, dataIterator);
  const expanded = !!expandedPaths[path];

  const handleClick = useCallback(
    () =>
      nodeHasChildNodes &&
      setExpandedPaths((prevExpandedPaths) => ({
        ...prevExpandedPaths,
        [path]: !expanded,
      })),
    [nodeHasChildNodes, setExpandedPaths, path, expanded]
  );

  const onInvokeGetter = useCallback(
    (event?: { stopPropagation?: () => void }) => {
      // Don't let the click toggle expansion of the (still empty) node
      event?.stopPropagation?.();
      setEvaluation((prev) => {
        if (prev.evaluated) return prev;
        let value: unknown;
        try {
          value = accessor.getProperty(parentData, name);
        } catch (e) {
          value = e;
        }
        return { evaluated: true, value };
      });
    },
    [accessor, parentData, name]
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
      {...props}
      data={effectiveData}
      getterEvaluated={getterEvaluated}
      onInvokeGetter={onInvokeGetter}
    >
      {
        // only render if the node is expanded
        expanded && getterEvaluated
          ? [...dataIterator(effectiveData)].map(({ name, data, ...renderNodeProps }) => {
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
          : null
      }
    </TreeNode>
  );
});

// ConnectedTreeNode.propTypes = {
//   name: PropTypes.string,
//   data: PropTypes.any,
//   dataIterator: PropTypes.func,
//   depth: PropTypes.number,
//   expanded: PropTypes.bool,
//   nodeRenderer: PropTypes.func,
// };

export const TreeView = memo<any>(
  ({ name, data, dataIterator, nodeRenderer, expandPaths, expandLevel, dataAccessor = defaultDataAccessor }) => {
    const styles = useStyles('TreeView');
    const stateAndSetter = useState({});
    const [, setExpandedPaths] = stateAndSetter;

    useLayoutEffect(
      () =>
        setExpandedPaths((prevExpandedPaths) =>
          getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths, dataAccessor)
        ),
      [data, dataIterator, expandPaths, expandLevel, dataAccessor]
    );

    return (
      <DataAccessorContext.Provider value={dataAccessor}>
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
      </DataAccessorContext.Provider>
    );
  }
);

// TreeView.propTypes = {
//   name: PropTypes.string,
//   data: PropTypes.any,
//   dataIterator: PropTypes.func,
//   nodeRenderer: PropTypes.func,
//   expandPaths: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
//   expandLevel: PropTypes.number,
// };
