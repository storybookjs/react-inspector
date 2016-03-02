// https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
// console.table([['Name', 'Address', 'Phone'],['Grizzly', '123 Fake St']])

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

          <th style={{...styles.th, ...styles.leftBorder.solid}}>
            <div style={styles.th_div}>0</div>
          </th>
          <th style={{...styles.th, ...styles.leftBorder.solid}}>
            <div style={styles.th_div}>1</div>
          </th>
          <th style={{...styles.th, ...styles.leftBorder.solid}}>
            <div style={styles.th_div}>2</div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
)

const DataContainer = ({ }) => (
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
            <ObjectPreview object={"hello"}/>
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
  render() {
    const data = this.props.data

    return (<div style={styles.base}>

              {/*data*/}

              <HeaderContainer />
              <DataContainer />
            </div>)
  }
}
