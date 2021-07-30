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
  const {base, table} = useStyles('TableInspectorHeaderContainer');
  const {none, solid} = useStyles('TableInspectorLeftBorder');
  const {TRComponent} = useTable();
  return (
    <div style={base}>
      <table style={table}>
        <tbody>
          <TRComponent>
            <TH
               columnId={columns.length}
              style={none}
              sorted={sorted && sortIndexColumn}
              sortAscending={sortAscending}
              onClick={onIndexTHClick}>
              {indexColumnText}
            </TH>
            {columns.map((column, columnId )=> (
              <TH
                 columnId={columnId}
                style={solid}
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
