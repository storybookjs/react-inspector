import { createContext, useContext } from 'react';
import { DataAccessor, defaultDataAccessor } from './DataAccessor';

export const DataAccessorContext = createContext<DataAccessor>(defaultDataAccessor);

export function useDataAccessor(): DataAccessor {
  return useContext(DataAccessorContext);
}
