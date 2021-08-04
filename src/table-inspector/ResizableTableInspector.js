import React, {
   createContext,
   useContext,
   useRef,
   useCallback,
   useMemo,
   useState,
   useEffect,
} from 'react';
import {Resizable} from 'react-resizable';

import TableInspectorBase from './TableInspector';
import {tableAcceptor} from './Table';

const CustomTableInspector = tableAcceptor(TableInspectorBase);

const defaultCellResizableProps = {
   axis: "x",
   resizeHandles: ["e"],
   minConstraints: [17, 17]
};

const baseHandleStyle = {
   position: "absolute",
   backgroundColor: "transparent",
   zIndex: 1000,
};

const defaultRowHandleStyle = {
   ...baseHandleStyle,
   cursor: "row-resize",
   bottom: 0,
   marginBottom: 0,
   left: 0,
   height: 2,
   width: "100%",
};

const defaultColumnHandleStyle = {
   ...baseHandleStyle,
   cursor: "col-resize",
   top: 0,
   right: 0,
   marginRight: 0,
   width: 2,
   height: "100%",
};

const makeResizeHandle = (
   rowHandleStyle = defaultRowHandleStyle,
   columnHandleStyle = defaultColumnHandleStyle
) => (handle, ref) => {
   const style =
      handle === "e" || handle === "se" ?
         columnHandleStyle
         : handle === "s" ?
            rowHandleStyle : {};
   return (<div
      ref={ref}
      style={style}
   />);
};

const defaultCellResizeHandle = makeResizeHandle();

const ResizableTable = createContext({
   CellResizableProps: defaultCellResizableProps,
   getCellSize: (/*rowId, columnId, variant, props*/) => ({}),
   onCellSizeChange: (/*{rowId, columnId}, (e: SyntheticEvent, data: ResizeCallbackData)*/) => {},
   cellResizeHandle: defaultCellResizeHandle,
});

/**
 * Hook to get the components  for the current resizable table.
 */

export const useResizableTable = () => {
   return useContext(ResizableTable);
};

const Cell = (
   {
      rowId,
      columnId,
      style,
      variant = "th",
      ...props
   }
) => {
   const isTH = variant === "th";
   const {
      CellResizableProps, getCellSize, cellResizeHandle, onCellSizeChange
   } = useResizableTable();
   const {width, height} = getCellSize(rowId, columnId, variant, props);
   
   const onResize = useCallback(
      (...rest) => {
         onCellSizeChange(
            {
               rowId,
               columnId,
            },
            ...rest
         )
         ;
      },
      [rowId, columnId, onCellSizeChange]
   );
   
   const cellStyle = useMemo(() => ({
         ...style,
         position: "relative",
         boxSizing: "border-box",
         width,
         height,
      }),
      [style, width, height]
   );
   
   const cell = isTH ?
      <th
         {...props}
         style={cellStyle}
      />
      : <td
         {...props}
         style={cellStyle}
      />;
   
   return (
      <Resizable
         {...CellResizableProps}
         height={height}
         width={width}
         onResize={onResize}
         handle={cellResizeHandle}
      >
         {cell}
      </Resizable>
   );
};

const THComponent = (props) => <Cell variant={"th"} {...props}/>;
const TDComponent = (props) => <Cell variant={"td"} {...props}/>;


const defaultUseOnCellSizeChange = (setRowSizes, setColumnSizes) => {
   return useCallback(
      ({
          rowId,
          columnId,
       }, event, {size, handle/*,element*/}) => {
         handle === "s" && rowId > -1 && setRowSizes(
            rowSizes => {
               rowSizes = {...rowSizes};
               rowSizes[rowId] = size.height;
               return rowSizes;
            });
         
         (handle === "e" || handle === "se") && columnId > -1 && setColumnSizes(
            columnSizes => {
               columnSizes = {...columnSizes};
               columnSizes[columnId] = size.width;
               return columnSizes;
            });
      },
      [setRowSizes, setColumnSizes]
   );
};

const defaultUseGetCellSize = (cellSizes) => {
   return useCallback(
      (rowId, columnId) => ({
         width: cellSizes.columns[columnId] ?? 40,
         height: cellSizes.rows[columnId] ?? 17,
      }),
      [cellSizes]
   );
};

/*
* HOC to create a component that accepts "CellResizableProps", "cellResizeHandle", "useOnCellSizeChange", "useGetCellSize", "resizeDebounceWait", and "resizeDebounceMaxWait" props and uses them to set
* the current resizable table rendering components. This is intended to be used by the top-level inspector
* components.
* @param {Object} WrappedComponent - React component to be wrapped
*/

export const resizableTableAcceptor = WrappedComponent => (
   {
      CellResizableProps = defaultCellResizableProps,
      cellResizeHandle = defaultCellResizeHandle,
      useOnCellSizeChange = defaultUseOnCellSizeChange,
      useGetCellSize = defaultUseGetCellSize,
      resizeDebounceWait = 50,
      resizeDebounceMaxWait = 100,
      ...props
   }
) => {
   const [_rowSizes, _setRowSizes] = useState({});
   const [_columnSizes, _setColumnSizes] = useState({});
   const [cellSizes, setCellSizes] = useState({rows: {}, columns: {}});
   
   const onCellSizeChange = useOnCellSizeChange(_setRowSizes, _setColumnSizes);
   const getCellSize = useGetCellSize(cellSizes);
   
   const state = useMemo(
      () => {
         
         return {
            getCellSize,
            onCellSizeChange,
            CellResizableProps,
            cellResizeHandle,
         };
      },
      [
         getCellSize, onCellSizeChange, CellResizableProps, cellResizeHandle
      ]
   );
   
   const timestampRef = useRef();
   
   useEffect(
      () => {
         const now = Date.now();
         const cellSizes = {rows: _rowSizes, columns: _columnSizes};
         
         //leading call or max wait exceeded
         if (
            !timestampRef.current ||
            (now - timestampRef.current > resizeDebounceMaxWait)
         ) {
            timestampRef.current = now;
            setCellSizes(cellSizes);
         }
         
         //debounce
         const tid = setTimeout(() => {
            const _now = Date.now();
            timestampRef.current = _now;
            setCellSizes(cellSizes);
         }, resizeDebounceWait);
         
         return () => clearTimeout(tid);
      },
      [_rowSizes, _columnSizes, resizeDebounceWait, resizeDebounceMaxWait]
   );
   
   return (
      <ResizableTable.Provider value={state}>
         <WrappedComponent
            THComponent={THComponent}
            TDComponent={TDComponent}
            {...props}
         />
      </ResizableTable.Provider>
   );
};

const ResizableTableInspector = resizableTableAcceptor(CustomTableInspector);

export default ResizableTableInspector;
