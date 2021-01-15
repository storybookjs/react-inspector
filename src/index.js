export { chromeLight, chromeDark } from './styles/themes';

export ObjectInspector from './object-inspector/ObjectInspector';
export TableInspector from './table-inspector/TableInspector';
export DOMInspector from './dom-inspector/DOMInspector';

export ObjectLabel from './object-inspector/ObjectLabel';
export ObjectPreview from './object-inspector/ObjectPreview';
export ObjectRootLabel from './object-inspector/ObjectRootLabel';

export ObjectValue from './object/ObjectValue';
export ObjectName from './object/ObjectName';

export { useStyles, themeAcceptor } from './styles';

// Wrapping the inspectors
import ObjectInspector from './object-inspector/ObjectInspector';
import TableInspector from './table-inspector/TableInspector';
import DOMInspector from './dom-inspector/DOMInspector';

import React from 'react';
import PropTypes from 'prop-types';
import isDOM from 'is-dom';

const Inspector = ({ table = false, data, ...rest }) => {
  if (table) {
    return <TableInspector data={data} {...rest} />;
  }

  if (isDOM(data)) return <DOMInspector data={data} {...rest} />;

  return <ObjectInspector data={data} {...rest} />;
};

Inspector.propTypes = {
  data: PropTypes.any,
  name: PropTypes.string,
  table: PropTypes.bool,
};

export { Inspector };

export default Inspector;
