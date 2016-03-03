// https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
// f=()=>{console.table([['Name', 'Address', 'Phone'],['Grizzly', '123 Fake St']])};f();

import React, { Component } from 'react';

import ObjectPreview from './ObjectPreview'

const styles = {
  base: {
    position: 'relative',
    border: '1px solid #aaa',
    fontFamily: 'Menlo, monospace',
    fontSize: '11px',
    lineHeight: '120%',
    boxSizing: 'border-box'
  },
  table: {
  },
  th: {
    height: 'auto',
    textAlign: 'left',
    backgroundColor: '#eee',
    borderBottom: '1px solid #aaa',
    fontWeight: 'normal',
    verticalAlign: 'middle',
    padding: '0 4px',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineHeight: '14px',
  },
  'th:hover': {
    backgroundColor: 'hsla(0, 0%, 90%, 1)'
  },
  // th > div
  th_div: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    // otherwise it's overriden by user agent stylesheet
    fontSize: '11px',
    lineHeight: '120%',
  },
  td: {
    height: '16px',
    verticalAlign: 'top',
    padding: '1px 4px',
    WebkitUserSelect: 'text',

    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    lineHeight: '14px',
  },
  leftBorder: {
    none: {
      borderLeft: 'none',
    },
    solid: {
      borderLeft: '1px solid #aaa'
    },
  },
}

function getHeaders(data){
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

const HeaderContainer = ({ columns, sortColumn, sortAscending }) => (
  <div style={{
    top: 0,
    height: '17px',
    left: 0,
    right: 0,
    overflowX: 'hidden'
  }}>
    <table style={{
      tableLayout: 'fixed',
      borderSpacing: '0',
      borderCollapse: 'separate',
      height: '100%',
      width: '100%',
    }}>
      <colgroup>
      {/*
        <col style="width: 236px"/>
        <col style="width: 236px"/>
        <col style="width: 236px"/>
        <col style="width: 236px"/>*/}
      </colgroup>
      <tbody>
        <tr>
          <th style={{...styles.th, ...styles.leftBorder.none}}>
            <div style={styles.th_div}>(index)</div>
          </th>

          {
            columns.map((column) => (
              <th key={column} style={{...styles.th, ...styles.leftBorder.solid}}>
                <div style={styles.th_div}>{column}</div>
              </th>
            ))
          }
        </tr>
      </tbody>
    </table>
  </div>
)

const DataContainer = ({ rows, rowsData }) => (
  <div style={{
    position: 'static',
    top: '17px',
    bottom: 0,
    overflowY: 'overlay',
    transform: 'translateZ(0)',

    left: 0,
    right: 0,
    overflowX: 'hidden',
  }}>
    <table style={{
      // table.data
      positon: 'static',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderTop: '0 none transparent',
      backgroundImage: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
      backgroundSize: '128px 32px',
      tableLayout: 'fixed',

      // table
      borderSpacing: '0',
      borderCollapse: 'separate',
      // height: '100%',
      width: '100%',

      fontSize: '11px',
      lineHeight: '120%',
    }}>
      <colgroup>
      </colgroup>
      <tbody>
        <tr style={{
          display: 'table-row'
        }}>
          <td style={{...styles.td, ...styles.leftBorder.none}}>
            a
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            b
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            c
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            d
          </td>
        </tr>
        <tr style={{
          display: 'table-row'
        }}>
          <td style={{...styles.td, ...styles.leftBorder.none}}>
            e
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            f
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            g
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            <ObjectPreview object={Infinity}/>
          </td>
        </tr>
        <tr style={{
          display: 'table-row'
        }}>
          <td style={{...styles.td, ...styles.leftBorder.none}}>
            e
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            f
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            g
          </td>
          <td style={{...styles.td, ...styles.leftBorder.solid}}>
            <ObjectPreview object={"hello"}/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default class TableInspector extends Component {
  static defaultProps = {
    columns: undefined
  }

  render() {
    const data = this.props.data
    const columns = this.props.columns
    let { rowHeaders, colHeaders } = getHeaders(data)
    if(columns !== undefined){
      colHeaders = columns
    }

// data.map((data) => )
//
//     data.
//     rowsData = []
//     row = data[rowHeader]
//     rowData = []
//       (colHeader)=>{
//       if(row.hasOwnProperty(colHeader)){
//         rowData.push(row[colHeader])
//       }
//     }

    return (<div style={styles.base} >
              {/*data*/}
              <HeaderContainer columns={colHeaders}/>
              <DataContainer rows={rowHeaders} rowsData={undefined} />
            </div>)
  }
}
