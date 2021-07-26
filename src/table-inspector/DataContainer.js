import React from 'react';

import { hasOwnProperty } from '../utils/objectPrototype';

import { useStyles } from '../styles';
import {useTable} from "./Table";

const DataContainer = ({ rows, columns, rowsData }) => {
  const styles = useStyles('TableInspectorDataContainer');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  const {TRComponent, TDComponent, ObjectValue} = useTable();

  return (
    <div style={styles.div}>
      <table style={styles.table}>
        <colgroup />
        <tbody>
          {rows.map((row, i) => (
            <TRComponent key={row} style={styles.tr}>
              <TDComponent style={{ ...styles.td, ...borderStyles.none }}>{row}</TDComponent>

              {columns.map(column => {
                const rowData = rowsData[i];
                // rowData could be
                //  object -> index by key
                //    array -> index by array index
                //    null -> pass
                //  boolean -> pass
                //  string -> pass (hasOwnProperty returns true for [0..len-1])
                //  number -> pass
                //  function -> pass
                //  symbol
                //  undefined -> pass
                if (
                  typeof rowData === 'object' &&
                  rowData !== null &&
                  hasOwnProperty.call(rowData, column)
                ) {
                  return (
                    <TDComponent
                      key={column}
                      style={{ ...styles.td, ...borderStyles.solid }}>
                      <ObjectValue object={rowData[column]} />
                    </TDComponent>
                  );
                } else {
                  return (
                    <TDComponent
                      key={column}
                      style={{ ...styles.td, ...borderStyles.solid }}
                    />
                  );
                }
              })}
            </TRComponent>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataContainer;
