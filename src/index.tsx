export { chromeLight, chromeDark } from './styles/themes';

import { ObjectInspector } from './object-inspector/ObjectInspector';
import { TableInspector } from './table-inspector/TableInspector';
import { DOMInspector } from './dom-inspector/DOMInspector';

import { ObjectLabel } from './object-inspector/ObjectLabel';
import { ObjectPreview } from './object-inspector/ObjectPreview';
import { ObjectRootLabel } from './object-inspector/ObjectRootLabel';

import { ObjectValue } from './object/ObjectValue';
import { ObjectName } from './object/ObjectName';

export { TableInspector, ObjectInspector, ObjectLabel, ObjectPreview, ObjectRootLabel, ObjectValue, ObjectName };

import React, { ComponentProps, FC } from 'react';
import isDOM from 'is-dom';

export const Inspector: FC<TableInspectorProps | ObjectInspectorProps> = ({ table = false, data, ...rest }) => {
  if (table) {
    return <TableInspector data={data} {...rest} />;
  }

  if (isDOM(data)) return <DOMInspector data={data} {...rest} />;

  return <ObjectInspector data={data} {...rest} />;
};

interface TableInspectorProps extends ComponentProps<typeof TableInspector> {
  table: true;
}
interface ObjectInspectorProps extends ComponentProps<typeof ObjectInspector> {
  table: false;
}
