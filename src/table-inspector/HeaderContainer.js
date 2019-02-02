import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../styles';
import TH from './TH';

const HeaderContainer = (
  {
    indexColumnText,
    columns,
    sorted,
    sortIndexColumn,
    sortColumn,
    sortAscending,
    onTHClick,
    onIndexTHClick,
  },
  { theme }
) => {
  const styles = useStyles('TableInspectorHeaderContainer');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  return (
    <div style={styles.base}>
      <table style={styles.table}>
        <tbody>
          <tr>
            <TH
              borderStyle={borderStyles.none}
              sorted={sorted && sortIndexColumn}
              sortAscending={sortAscending}
              onClick={onIndexTHClick}>
              {indexColumnText}
            </TH>
            {columns.map(column => (
              <TH
                borderStyle={borderStyles.solid}
                key={column}
                sorted={sorted && sortColumn === column}
                sortAscending={sortAscending}
                onClick={onTHClick.bind(this, column)}>
                {column}
              </TH>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

HeaderContainer.defaultProps = {
  indexColumnText: '(index)',
  columns: [],
};

export default HeaderContainer;
