export function getHeaders(data): any {
  if (typeof data === 'object') {
    let rowHeaders: any[] = [];
    // is an array
    if (Array.isArray(data)) {
      const nRows = data.length;
      rowHeaders = [...Array(nRows).keys()];
    } else if (data !== null) {
      // is an object
      // keys are row indexes
      rowHeaders = Object.keys(data);
    }

    // Time: O(nRows * nCols)
    const colHeaders = rowHeaders.reduce((colHeaders, rowHeader) => {
      const row = data[rowHeader];
      if (typeof row === 'object' && row !== null) {
        /* O(nCols) Could optimize `includes` here */
        const cols = Object.keys(row);
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
