import React, { ComponentProps, FC } from 'react';
import isDOM from 'is-dom';

import { ObjectInspector } from './object-inspector/ObjectInspector';
import { ObjectLabel } from './object-inspector/ObjectLabel';
import { ObjectPreview } from './object-inspector/ObjectPreview';
import { ObjectRootLabel } from './object-inspector/ObjectRootLabel';

import { TableInspector } from './table-inspector/TableInspector';

import { DOMInspector } from './dom-inspector/DOMInspector';
import { DOMNodePreview } from './dom-inspector/DOMNodePreview';

import { ObjectValue } from './object/ObjectValue';
import { ObjectName } from './object/ObjectName';

import { TreeView } from './tree-view/TreeView';
import { TreeNode } from './tree-view/TreeNode';

interface TableInspectorProps extends ComponentProps<typeof TableInspector> {
  table: true;
}
interface ObjectInspectorProps extends ComponentProps<typeof ObjectInspector> {
  table: false;
}

const Inspector: FC<TableInspectorProps | ObjectInspectorProps> = ({ table = false, data, ...rest }) => {
  if (table) {
    return <TableInspector data={data} {...rest} />;
  }

  if (isDOM(data)) return <DOMInspector data={data} {...rest} />;

  return <ObjectInspector data={data} {...rest} />;
};

export {
  DOMNodePreview,
  Inspector,
  ObjectInspector,
  ObjectLabel,
  ObjectName,
  ObjectPreview,
  ObjectRootLabel,
  ObjectValue,
  TableInspector,
  TreeNode,
  TreeView,
};
