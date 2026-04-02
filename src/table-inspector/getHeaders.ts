import { DataAccessor, defaultDataAccessor } from '../DataAccessor';

export function getHeaders(data, accessor: DataAccessor = defaultDataAccessor): any {
  const type = accessor.typeof(data);
  if (type === 'object' && !accessor.isNull(data)) {
    let rowHeaders: any[] = [];
    // is an array
    if (accessor.isArray(data)) {
      const nRows = accessor.length(data);
      rowHeaders = [...Array(nRows).keys()];
    } else {
      // is an object
      // keys are row indexes
      rowHeaders = accessor.keys(data);
    }

    // Time: O(nRows * nCols)
    const colHeaders = rowHeaders.reduce((colHeaders, rowHeader) => {
      const row = accessor.getProperty(data, String(rowHeader));
      const rowType = accessor.typeof(row);
      if (rowType === 'object' && !accessor.isNull(row)) {
        /* O(nCols) Could optimize `includes` here */
        const cols = accessor.keys(row);
        cols.reduce((xs, x) => {
          if (!xs.includes(x)) {
            /* xs is the colHeaders to be filled by searching the row's indexes */
            xs.push(x);
          }
          return xs;
        }, colHeaders);
      }
      return colHeaders;
    }, []);
    return {
      rowHeaders: rowHeaders,
      colHeaders: colHeaders,
    };
  }
  return undefined;
}
