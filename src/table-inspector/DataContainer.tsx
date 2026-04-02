import React from 'react';
import { ObjectValue } from '../object/ObjectValue';

import { useDataAccessor } from '../DataAccessorContext';

import { useStyles } from '../styles';

export const DataContainer = ({ rows, columns, rowsData }) => {
  const styles = useStyles('TableInspectorDataContainer');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  const accessor = useDataAccessor();

  return (
    <div style={styles.div}>
      <table style={styles.table}>
        <colgroup />
        <tbody>
          {rows.map((row, i) => (
            <tr key={row} style={styles.tr}>
              <td style={{ ...styles.td, ...borderStyles.none }}>{row}</td>

              {columns.map((column) => {
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
                const rowType = accessor.typeof(rowData);
                if (rowType === 'object' && !accessor.isNull(rowData) && accessor.hasOwnProperty(rowData, column)) {
                  return (
                    <td key={column} style={{ ...styles.td, ...borderStyles.solid }}>
                      <ObjectValue object={accessor.getProperty(rowData, column)} />
                    </td>
                  );
                } else {
                  return <td key={column} style={{ ...styles.td, ...borderStyles.solid }} />;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
