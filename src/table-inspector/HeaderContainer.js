import React from 'react';
import { useStyles } from '../styles';
import TH from './TH';
import {useTable} from "./Table";

const HeaderContainer = ({
  indexColumnText = '(index)',
  columns = [],
  sorted,
  sortIndexColumn,
  sortColumn,
  sortAscending,
  onTHClick,
  onIndexTHClick,
}) => {
  const styles = useStyles('TableInspectorHeaderContainer');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  const {TRComponent} = useTable();
  return (
    <div style={styles.base}>
      <table style={styles.table}>
        <tbody>
          <TRComponent>
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
                onClick={onTHClick.bind(null, column)}>
                {column}
              </TH>
            ))}
          </TRComponent>
        </tbody>
      </table>
    </div>
  );
};

export default HeaderContainer;
