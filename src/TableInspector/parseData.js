
export default function getHeaders(data){
  if(typeof(data) === 'object'){
    // is an array
    if(Array.isArray(data)){
      // 0..nRows-1 are row indexes
      const nRows = data.length

      // nCol is the max number of columns in all rows
      // Time complexity: O(nRows)
      const nCols = data.reduce((nCols, row) => {
        if(row.length > nCols){
          nCols = row.length
        }
        return nCols
      }, 0)

      return {
        rowHeaders: [...Array(nRows).keys()], // 0..nRows - 1
        colHeaders: [...Array(nCols).keys()], // 0..nCols - 1
      }
    }
    // is an object
    else if(data !== null){
      // keys are row indexes
      const keys = Object.keys(data)

      // Time complexity: O(nRows * nCols)
      const colHeaders = keys.reduce((colHeaders, key) => {
        const row = data[key]
        if(typeof(row) === 'object' && row !== null){
          const cols = Object.keys(row)
          cols.reduce((xs, x) => {
            if(!xs.includes(x)){
              xs.push(x)
            }
            return xs
          }, colHeaders)
        }
        return colHeaders
      }, [])
      return {
        rowHeaders: keys,
        colHeaders: colHeaders,
      }
    }
  }
  // return undefined
}
