import React, {
   createContext,
   useContext,
   useRef,
   useCallback,
   useMemo,
   useState,
   useEffect,
} from 'react';
import {storiesOf} from '@storybook/react';
import {Resizable} from 'react-resizable';

import {TableInspector as TableInspectorBase, tableAcceptor} from '../src/';

const CustomTableInspector = tableAcceptor(TableInspectorBase);

const CellSizes = createContext({
   columnSizes: {},
   onColumnSizeChange: (columnId, size) => {},
});

const handleStyle = {
   position: "absolute",
   top: 0,
   right: 0,
   backgroundColor: "transparent",
   zIndex: 1000,
   width: 2,
   height: "100%",
   cursor: "move"
};

const columnResizeHandle = (<div
   style={handleStyle}
/>);

const Cell = ({variant = "th", columnId, rowId, style, ...props}) => {
   const isTH = variant === "th";
   const {columnSizes, onColumnSizeChange} = useContext(CellSizes);
   const {width, height} = columnSizes[columnId] ?? {
      width: 40,
      height: 17,
   };
   
   const onResize = useCallback(
      (event, {size /*,element, handle*/}) => {
         onColumnSizeChange(
            columnId,
            {width: size.width, height: size.height}
         );
      },
      [columnId, onColumnSizeChange]
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
         axis="x"
         height={height}
         width={width}
         onResize={onResize}
         handle={columnResizeHandle}
      >
         {cell}
      </Resizable>
   );
};

const THComponent = (props) => <Cell variant={"th"} {...props}/>;
const TDComponent = (props) => <Cell variant={"td"} {...props}/>;

const tableResizeHandle = (
   <div
      style={{
         ...handleStyle,
         zIndex: 2000,
      }}
   />);

const TableInspector = (props) => {
   const [_columnSizes, _setColumnSizes] = useState({});
   const [columnSizes, setColumnSizes] = useState({});
   
   const [tableStyle, setTableStyle] = useState({
      position: "relative",
      height: 200,
      width: 200,
   });
   
   const onResize = useCallback(
      (event, {size /*,element, handle*/}) => {
         setTableStyle(tableStyle => ({
            ...tableStyle,
            width: size.width,
            height: size.height,
         }));
      }, []);
   
   const onColumnSizeChange = useCallback(
      (columnId, size) => {
         _setColumnSizes(columnSizes => {
            columnSizes = {...columnSizes};
            columnSizes[columnId] = size;
            return columnSizes;
         });
      },
      []
   );
   
   const state = useMemo(
      () => {
         return {columnSizes, onColumnSizeChange};
      },
      [columnSizes, onColumnSizeChange]
   );
   
   const timestampRef = useRef();
   
   useEffect(
      () => {
         const now = Date.now();
         //leads
         if (!timestampRef.current) {
            timestampRef.current = now;
            setColumnSizes(_columnSizes);
         }
         
         //throttle
         if (now - timestampRef.current > 50) {
            timestampRef.current = now;
            setColumnSizes(_columnSizes);
         }
         
         //debounce
         const tid = setTimeout(() => {
            timestampRef.current = null;
            setColumnSizes(_columnSizes);
         }, 100);
         
         return () => clearTimeout(tid);
      },
      [_columnSizes]
   );
   
   return (
      <Resizable
         axis="x"
         height={tableStyle.height}
         width={tableStyle.width}
         onResize={onResize}
         handle={tableResizeHandle}
      >
         <div
            style={tableStyle}
         >
            <CellSizes.Provider value={state}>
               <CustomTableInspector
                  THComponent={THComponent}
                  TDComponent={TDComponent}
                  {...props}
               />
            </CellSizes.Provider>
         </div>
      </Resizable>
   );
};

storiesOf('Custom Table', module)
   .add('simple', () => (
      <TableInspector
         data={[
            ['Name', 'Address', 'Age', 'Phone'],
            ['John Appleseed', '42 Galaxy drive', '20', '111-111-1111'],
         ]}
      />
   ))
   .add('different columns', () => (
      <TableInspector
         data={{
            0: {firstName: 'John', lastName: 'Smith'},
            1: {firstName: 'Martin', middleName: 'Luther', lastName: 'King'},
         }}
      />
   ))
   .add('different columns (with names)', () => (
      <TableInspector
         data={{
            person1: {firstName: 'John', lastName: 'Smith'},
            person2: {
               firstName: 'Martin',
               middleName: 'Luther',
               lastName: 'King'
            },
         }}
      />
   ))
   .add('data and columns props', () => (
      <TableInspector
         data={{
            0: {firstName: 'John', lastName: 'Smith'},
            1: {firstName: 'Martin', middleName: 'Luther', lastName: 'King'},
         }}
         columns={['firstName', 'lastName']}
      />
   ))
   .add('sudoku', () => (
      <TableInspector
         data={[
            [0, 5, 2, 0, 4, 6, 9, 0, 0],
            [8, 0, 9, 0, 3, 0, 6, 0, 4],
            [0, 0, 0, 1, 0, 0, 0, 8, 0],
            [6, 7, 4, 0, 0, 8, 0, 0, 5],
            [1, 0, 0, 0, 0, 0, 0, 0, 3],
            [5, 0, 0, 7, 0, 0, 2, 4, 8],
            [0, 6, 0, 0, 0, 2, 0, 0, 0],
            [9, 0, 5, 0, 1, 0, 4, 0, 7],
            [0, 0, 7, 5, 8, 0, 3, 1, 0],
         ]}
      />
   ))
   // should be nothing
   .add('null', () => <TableInspector data={null}/>)
   // should be nothing
   .add('undefined', () => <TableInspector data={undefined}/>)
   // should be 1 * 0 table (chrome console.table is nothing)
   .add('array of undefined', () => <TableInspector data={[undefined]}/>)
   // should be 1 * 0 table
   .add('array of an empty object', () => <TableInspector data={[{}]}/>)
   // should be 2 * 1 table
   .add('array of array', () => <TableInspector data={[[1, 2]]}/>);
