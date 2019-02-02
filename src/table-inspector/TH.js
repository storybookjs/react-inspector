import React, { useCallback, useState } from 'react';

import { useStyles } from '../styles';

const SortIconContainer = props => (
  <div
    style={{
      position: 'absolute',
      top: 1,
      right: 0,
      bottom: 1,
      display: 'flex',
      alignItems: 'center',
    }}>
    {props.children}
  </div>
);

const SortIcon = ({ sortAscending }) => {
  const styles = useStyles('TableInspectorSortIcon');
  const glyph = sortAscending ? '▲' : '▼';
  return <div style={styles}>{glyph}</div>;
};

const TH = ({
  sortAscending = false,
  sorted = false,
  onClick = undefined,
  borderStyle = {},
  children,
  ...thProps
}) => {
  const styles = useStyles('TableInspectorTH');
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <th
      {...thProps}
      style={{
        ...styles.base,
        ...borderStyle,
        ...(hovered ? styles.base[':hover'] : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}>
      <div style={styles.div}>{children}</div>
      {sorted && (
        <SortIconContainer>
          <SortIcon sortAscending={sortAscending} />
        </SortIconContainer>
      )}
    </th>
  );
};

export default TH;
