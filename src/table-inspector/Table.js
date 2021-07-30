import PropTypes from 'prop-types';
import React, {createContext, useContext, useMemo} from "react";
import defaultGetHeaders from "./getHeaders";
import DefaultObjectValue from '../object/ObjectValue';

const DefaultRootComponent = props=><div {...props}/>;
const DefaultTRComponent = ({rowId, ...props})=><tr {...props}/>;
const DefaultTHComponent = ({columnId, ...props})=><th {...props}/>;
const DefaultTDComponent = ({rowId, columnId, ...props})=><td {...props}/>;

const Table = createContext({
   getHeaders:defaultGetHeaders,
   ObjectValue: DefaultObjectValue,
   RootComponent: DefaultRootComponent,
   TRComponent: DefaultTRComponent,
   THComponent: DefaultTHComponent,
   TDComponent: DefaultTDComponent
});

/**
 * Hook to get the components and headers for the current inspector table.
 */
export const useTable = ()=>{
   return useContext(Table);
};

/**
 * HOC to create a component that accepts "getHeaders", "ObjectValue", "RootComponent", "TRComponent", "THComponent", and "TDComponent" props and uses them to set
 * the current table rendering components. This is intended to be used by the top-level inspector
 * components.
 * @param {Object} WrappedComponent - React component to be wrapped
 */
export const tableAcceptor = WrappedComponent => {
   const TableAcceptor = ({
                             getHeaders = defaultGetHeaders,
                             ObjectValue = DefaultObjectValue,
                             RootComponent = DefaultRootComponent,
                             TRComponent = DefaultTRComponent,
                             THComponent = DefaultTHComponent,
                             TDComponent = DefaultTDComponent,
                             ...restProps
   }) => {
      const table = useMemo(() => {
         return {
            getHeaders, ObjectValue, RootComponent, TRComponent, THComponent, TDComponent
         };
      }, [getHeaders, ObjectValue, RootComponent, TRComponent, THComponent, TDComponent]);
      
      return (
         <Table.Provider value={table}>
            <WrappedComponent {...restProps} />
         </Table.Provider>
      );
   };
   
   TableAcceptor.propTypes = {
      getHeaders: PropTypes.func,
      ObjectValue: PropTypes.func,
      RootComponent: PropTypes.func,
      TRComponent: PropTypes.func,
      THComponent: PropTypes.func,
      TDComponent: PropTypes.func
   };
   
   return TableAcceptor;
};
