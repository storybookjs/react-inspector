import { createContext } from 'react';

export const ExpandedPathsContext = createContext<[any, (...args: any[]) => any]>([{}, () => {}]);
