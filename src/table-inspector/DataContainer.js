import React, {useMemo} from 'react';

import { hasOwnProperty } from '../utils/objectPrototype';

import { useStyles } from '../styles';
import {useTable} from "./Table";

const DataContainer = ({ rows, columns, rowsData }) => {
  const {table, tr, td, div} = useStyles('TableInspectorDataContainer');
  const {solid, none} = useStyles('TableInspectorLeftBorder');
  const [tdNone, tdSolid]=useMemo(
     ()=>{
       return [{ ...td, ...none }, { ...td, ...solid }];
     },
     [td, none, solid]
  );
  const {TRComponent, TDComponent, ObjectValue} = useTable();

  return (
    <div style={div}>
      <table style={table}>
        <colgroup />
        <tbody>
          {rows.map((row, i) => (
            <TRComponent key={row} style={tr} rowId={i}>
              <TDComponent style={tdNone} rowId={i} columnId={columns.length}>{row}</TDComponent>

              {columns.map((column, j) => {
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
                      style={tdSolid}
                      rowId={i}
                      columnId={j}
                    >
                      <ObjectValue object={rowData[column]} />
                    </TDComponent>
                  );
                } else {
                  return (
                    <TDComponent
                      key={column}
                      style={tdSolid}
                      rowId={i}
                      columnId={j}
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
