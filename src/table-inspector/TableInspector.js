/**
 * Specs:
 * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
 * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
 */
export { tableAcceptor, useTable } from './Table';

import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

import DataContainer from './DataContainer';
import HeaderContainer from './HeaderContainer';

import { themeAcceptor, useStyles } from '../styles';
import {useTable} from "./Table";
import {isObject, typeComparator} from '../utils/typeUtils';

const useNormalizeRowData =(sortColumn)=>{
  // normalize rowData
  return useCallback(
     (rowData, index) => {
       if (
          isObject(rowData) /*&& rowData.hasOwnProperty(sortColumn)*/
       ) {
         const columnData = rowData[sortColumn];
         return [columnData, index];
       }
       return [undefined, index]},
     [sortColumn]
  );
};

const rowHeadersMapper = (rowData, index, rowHeaders) => {
  const columnData = rowHeaders[index];
  return [columnData, index];
};

const TableInspector = ({
  // The JS object you would like to inspect, either an array or an object
  data,
  // An array of the names of the columns you'd like to display in the table
  columns,
}) => {
  const styles = useStyles('TableInspector');
  const {getHeaders, RootComponent} = useTable();

  const [
    { sorted, sortIndexColumn, sortColumn, sortAscending },
    setState,
  ] = useState({
    // has user ever clicked the <th> tag to sort?
    sorted: false,
    // is index column sorted?
    sortIndexColumn: false,
    // which column is sorted?
    sortColumn: undefined,
    // is sorting ascending or descending?
    sortAscending: false,
  });

  const handleIndexTHClick = useCallback(() => {
    setState(({ sortIndexColumn, sortAscending }) => ({
      sorted: true,
      sortIndexColumn: true,
      sortColumn: undefined,
      // when changed to a new column, default to ascending
      sortAscending: sortIndexColumn ? !sortAscending : true,
    }));
  }, []);

  const handleTHClick = useCallback(col => {
    setState(({ sortColumn, sortAscending }) => ({
      sorted: true,
      sortIndexColumn: false,
      // update sort column
      sortColumn: col,
      // when changed to a new column, default to ascending
      sortAscending: col === sortColumn ? !sortAscending : true,
    }));
  }, []);
  
  const normalizeRowData =useNormalizeRowData(sortColumn);

  if (!isObject(data)) {
    return <div />;
  }
  
  let { rowHeaders, colHeaders } = getHeaders(data);

  // columns to be displayed are specified
  // NOTE: there's some space for optimization here
  if (columns !== undefined) {
    colHeaders = columns;
  }

  let rowsData = rowHeaders.map(rowHeader => data[rowHeader]);
  
  // TODO: refactor?
  const columnDataWithRowIndexes =  /* row indexes are [0..nRows-1] */
     sortColumn? // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
        rowsData.map(normalizeRowData)
        :sortIndexColumn?rowHeaders.map(rowHeadersMapper)
           :null;
     
  if (columnDataWithRowIndexes) {
    // apply a mapper before sorting (because we need to access inside a container)
    const sortedRowIndexes = columnDataWithRowIndexes
      .sort(typeComparator(item => item[0], sortAscending))
      .map(item => item[1]); // sorted row indexes
    rowHeaders = sortedRowIndexes.map(i => rowHeaders[i]);
    rowsData = sortedRowIndexes.map(i => rowsData[i]);
  }

  return (
    <RootComponent style={styles.base}>
      <HeaderContainer
        columns={colHeaders}
        /* for sorting */
        sorted={sorted}
        sortIndexColumn={sortIndexColumn}
        sortColumn={sortColumn}
        sortAscending={sortAscending}
        onTHClick={handleTHClick}
        onIndexTHClick={handleIndexTHClick}
      />
      <DataContainer
        rows={rowHeaders}
        columns={colHeaders}
        rowsData={rowsData}
      />
    </RootComponent>
  );
};

TableInspector.propTypes = {
  /**
   * the Javascript object you would like to inspect, either an array or an object
   */
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  /**
   * An array of the names of the columns you'd like to display in the table
   */
  columns: PropTypes.array,
};

export default themeAcceptor(TableInspector);
