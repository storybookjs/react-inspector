/**
 * Specs:
 * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
 * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
 */

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import getHeaders from './getHeaders';
import DataContainer from './DataContainer';
import HeaderContainer from './HeaderContainer';

import { themeAcceptor, useStyles } from '../styles';

const TableInspector = ({
  // The JS object you would like to inspect, either an array or an object
  data,
  // An array of the names of the columns you'd like to display in the table
  columns,
}) => {
  const styles = useStyles('TableInspector');

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
      // when changed to a new column, default to asending
      sortAscending: sortIndexColumn ? !sortAscending : true,
    }));
  }, []);

  const handleTHClick = useCallback(col => {
    setState(({ sortColumn, sortAscending }) => ({
      sorted: true,
      sortIndexColumn: false,
      // update sort column
      sortColumn: col,
      // when changed to a new column, default to asending
      sortAscending: col === sortColumn ? !sortAscending : true,
    }));
  }, []);

  if (typeof data !== 'object' || data === null) {
    return <div />;
  }

  let { rowHeaders, colHeaders } = getHeaders(data);

  // columns to be displayed are specified
  // NOTE: there's some space for optimization here
  if (columns !== undefined) {
    colHeaders = columns;
  }

  let rowsData = rowHeaders.map(rowHeader => data[rowHeader]);

  let columnDataWithRowIndexes; /* row indexes are [0..nRows-1] */
  // TODO: refactor
  if (sortColumn !== undefined) {
    // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
    columnDataWithRowIndexes = rowsData.map((rowData, index) => {
      // normalize rowData
      if (
        typeof rowData === 'object' &&
        rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/
      ) {
        const columnData = rowData[sortColumn];
        return [columnData, index];
      }
      return [undefined, index];
    });
  } else {
    if (sortIndexColumn) {
      columnDataWithRowIndexes = rowHeaders.map((rowData, index) => {
        const columnData = rowHeaders[index];
        return [columnData, index];
      });
    }
  }
  if (columnDataWithRowIndexes !== undefined) {
    // apply a mapper before sorting (because we need to access inside a container)
    const comparator = (mapper, ascending) => {
      return (a, b) => {
        const v1 = mapper(a); // the datum
        const v2 = mapper(b);
        const type1 = typeof v1;
        const type2 = typeof v2;
        // use '<' operator to compare same type of values or compare type precedence order #
        const lt = (v1, v2) => {
          if (v1 < v2) {
            return -1;
          } else if (v1 > v2) {
            return 1;
          } else {
            return 0;
          }
        };
        let result;
        if (type1 === type2) {
          result = lt(v1, v2);
        } else {
          // order of different types
          const order = {
            string: 0,
            number: 1,
            object: 2,
            symbol: 3,
            boolean: 4,
            undefined: 5,
            function: 6,
          };
          result = lt(order[type1], order[type2]);
        }
        // reverse result if descending
        if (!ascending) result = -result;
        return result;
      };
    };
    const sortedRowIndexes = columnDataWithRowIndexes
      .sort(comparator(item => item[0], sortAscending))
      .map(item => item[1]); // sorted row indexes
    rowHeaders = sortedRowIndexes.map(i => rowHeaders[i]);
    rowsData = sortedRowIndexes.map(i => rowsData[i]);
  }

  return (
    <div style={styles.base}>
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
    </div>
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
