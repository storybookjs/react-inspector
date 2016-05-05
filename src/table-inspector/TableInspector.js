/**
 * Specs:
 * https://developer.chrome.com/devtools/docs/commandline-api#tabledata-columns
 * https://developer.mozilla.org/en-US/docs/Web/API/Console/table
 */

import React, { Component } from 'react';

import ObjectDescription from '../object/ObjectDescription'

import getHeaders from './getHeaders'

const styles = {
  base: {
    position: 'relative',
    border: '1px solid #aaa',
    fontFamily: 'Menlo, monospace',
    fontSize: '11px',
    lineHeight: '120%',
    boxSizing: 'border-box',
    cursor: 'default'
  },
  // table: {
  // },
  th: {
    position: 'relative', // anchor for sort icon container
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
  tr: {
    display: 'table-row',
  },
  td: {
    boxSizing: 'border-box', //
    border: 'none', // prevent overrides
    height: '16px', // /* 0.5 * background-size height */
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


const SortIconContainer = (props) =>
  <div style={{
      position: 'absolute',
      top: 1,
      right: 0,
      bottom: 1,
      display: 'flex',
      alignItems: 'center'
    }}>
    {props.children}
  </div>

import { upArrow, downArrow } from '../styles/glyphs'
import unselectable from '../styles/unselectable'

const SortIcon = ({ sortAscending }) => {
  const glyph = sortAscending ? upArrow : downArrow
  return (
    <div style={Object.assign({
        display: 'block',
        marginRight: 3, // 4,
        width: 8,
        height: 7,

        marginTop: -7,
        color: '#6e6e6e',//'rgb(48, 57, 66)'
        fontSize: 12,
        // lineHeight: 14
      }, unselectable)}>
      {glyph}
    </div>
  )
}

class TH extends Component {
  constructor(props){
    super(props)
    this.state = { hovered: false }
  }

  toggleHovered(e){
    this.setState({hovered: !this.state.hovered})
  }

  render() {
    // either not sorted, sort ascending or sort descending
    const sortAscending = this.props.sortAscending
    const sorted = this.props.sorted

    return (
      <th {...this.props}
          style={{...styles.th,
                  ...this.props.borderStyle,
                  ...((this.state.hovered) ? this.props.hoveredStyle : {})
                }}
          onMouseEnter={ this.toggleHovered.bind(this) }
          onMouseLeave={ this.toggleHovered.bind(this) }
          onClick={ this.props.onClick } >
        <div style={styles.th_div}>
          {this.props.children}
        </div>
        {(() => {
          if(sorted){
            return (
              <SortIconContainer>
                <SortIcon sortAscending={sortAscending} />
              </SortIconContainer>
            )
          }
        })()}
      </th>
    )
  }
}

TH.defaultProps = {
  sortAscending: false,
  sorted: false,
  hoveredStyle: styles['th:hover'],
  borderStyle: styles.leftBorder.solid,
  onClick: undefined
}

const HeaderContainer = ({ indexColumnText, columns, sorted, sortIndexColumn, sortColumn, sortAscending, onTHClick, onIndexTHClick }) =>
  <div style={{
    top: 0,
    height: '17px',
    left: 0,
    right: 0,
    overflowX: 'hidden'
  }}>
    <table style={{
      tableLayout: 'fixed',
      borderSpacing: 0,
      borderCollapse: 'separate',
      height: '100%',
      width: '100%',
      margin: 0, // prevent overrides
    }}>
    {/*
      <colgroup>
        <col style={{width: 236}}/>
        <col style={{width: 236}}/>
        <col style={{width: 236}}/>
        <col style={{width: 236}}/>
      </colgroup>*/ }
      <tbody>
        <tr>
          <TH borderStyle={styles.leftBorder.none}
              sorted={sorted && sortIndexColumn}
              sortAscending={sortAscending}
              onClick={onIndexTHClick}>
            {indexColumnText}
          </TH>
          {
            columns.map((column) => (
              <TH key={column}
                  sorted={sorted && sortColumn === column}
                  sortAscending={sortAscending}
                  onClick={onTHClick.bind(this, column)}>
                {column}
              </TH>
            ))
          }
        </tr>
      </tbody>
    </table>
  </div>

HeaderContainer.defaultProps = {
  indexColumnText: '(index)',
  columns: []
}

const DataContainer = ({ rows, columns, rowsData }) =>
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
  {/*
    <pre>
      rows: {JSON.stringify(rows)}
      <br></br>
      rowsData: {JSON.stringify(rowsData)}
    </pre>
  */}
    <table style={{
      positon: 'static',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderTop: '0 none transparent',
      margin: 0, // prevent overrides

      backgroundImage: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
      backgroundSize: '128px 32px',
      tableLayout: 'fixed',

      // table
      borderSpacing: 0,
      borderCollapse: 'separate',
      // height: '100%',
      width: '100%',

      fontSize: '11px',
      lineHeight: '120%',
    }}>
      <colgroup>
      </colgroup>
      <tbody>
        {
          rows.map((row, i) => (
            <tr key={row} style={styles.tr}>
              <td style={{...styles.td, ...styles.leftBorder.none}}>
                {row}
              </td>

              {
                columns.map((column) => {
                  const rowData = rowsData[i]
                  // rowData could be
                  //  object -> index by key
                  //    array -> index by array index
                  //    null -> pass
                  //  boolean -> pass
                  //  string -> pass (hasOwnProperty returns true for [0..len-1])
                  //  number -> pass
                  //  function -> pass
                  //  symbol
                  //  undefined -> pass
                  if(typeof(rowData) === 'object' && rowData !== null && rowData.hasOwnProperty(column)){
                    return (<td key={column} style={{...styles.td, ...styles.leftBorder.solid}}>
                              <ObjectDescription object={rowData[column]}/>
                            </td>)
                  }
                  else{
                    return (<td key={column} style={{...styles.td, ...styles.leftBorder.solid}}>
                            </td>)
                  }
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>

// import ObjectInspector from '../object-inspector/ObjectInspector'

export default class TableInspector extends Component {

  constructor(props){
    super(props)

    this.state = {
      sorted: false, // has user ever clicked the <th> tag to sort?
      sortIndexColumn: false, // is index column sorted?
      sortColumn: undefined, // which column is sorted?
      sortAscending: false // is sorting ascending or descending?
    }
  }

  handleIndexTHClick(){
    this.setState(
      {
        sorted: true,
        sortIndexColumn: true,
        sortColumn: undefined,
        // when changed to a new column, default to asending
        sortAscending: this.state.sortIndexColumn ? (!this.state.sortAscending) : true
      })
  }

  handleTHClick(col){
    this.setState(
      {
        sorted: true,
        sortIndexColumn: false,
        sortColumn: col,
        sortAscending: (col === this.state.sortColumn) ? !this.state.sortAscending : true
      }
    )
  }

  render() {
    const data = this.props.data
    const columns = this.props.columns
    if(typeof data !== 'object' || data === null){
      return (<div></div>)
    }

    let { rowHeaders, colHeaders } = getHeaders(data)

    // columns to be displayed are specified
    // NOTE: there's some space for optimization here
    if(columns !== undefined){
      colHeaders = columns
    }

    let rowsData = rowHeaders.map((rowHeader) => data[rowHeader])

    const sorted = this.state.sorted,
          sortIndexColumn = this.state.sortIndexColumn,
          sortColumn = this.state.sortColumn,
          sortAscending = this.state.sortAscending

    let columnDataWithRowIndexes /* row indexes are [0..nRows-1] */
    // TODO: refactor
    if(sortColumn !== undefined){
      // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
      columnDataWithRowIndexes = rowsData.map((rowData, index) => {
        // normalize rowData
        if(typeof(rowData) === 'object' && rowData !== null /*&& rowData.hasOwnProperty(sortColumn)*/){
          const columnData = rowData[sortColumn]
          return [columnData, index]
        }
        return [undefined, index]
      })
    }
    else{
      if(sortIndexColumn){
        columnDataWithRowIndexes = rowHeaders.map((rowData, index) => {
          const columnData = rowHeaders[index]
          return [columnData, index]
        })
      }
    }
    if(columnDataWithRowIndexes !== undefined){
      // apply a mapper before sorting (because we need to access inside a container)
      const comparator = (mapper, ascending) => {
        return (a, b) => {
          const v1 = mapper(a) // the datum
          const v2 = mapper(b)
          const type1 = typeof v1
          const type2 = typeof v2
          // use '<' operator to compare same type of values or compare type precedence order #
          const lt = (v1, v2) => {
            if(v1 < v2) {
              return -1
            }
            else if(v1 > v2){
              return 1
            }
            else{
              return 0
            }
          }
          let result
          if(type1 === type2){
            result = lt(v1, v2)
          }
          else{
            // order of different types
            const order = {'string': 0, 'number': 1, 'object': 2, 'symbol': 3, 'boolean': 4, 'undefined': 5, 'function': 6}
            result = lt(order[type1], order[type2])
          }
          // reverse result if descending
          if(!ascending)
            result = -result
          return result
        }
      }
      const sortedRowIndexes = columnDataWithRowIndexes.sort(comparator((item)=>item[0], sortAscending))
                              .map((item) => item[1]) // sorted row indexes
      rowHeaders = sortedRowIndexes.map((i) => rowHeaders[i])
      rowsData = sortedRowIndexes.map((i) => rowsData[i])
    }

    return (<div style={styles.base} >
              <HeaderContainer columns={colHeaders}
                               /* for sorting */
                               sorted={this.state.sorted}
                               sortIndexColumn={this.state.sortIndexColumn}
                               sortColumn={this.state.sortColumn}
                               sortAscending={this.state.sortAscending}
                               onTHClick={this.handleTHClick.bind(this)}
                               onIndexTHClick={this.handleIndexTHClick.bind(this)}/>
              <DataContainer rows={rowHeaders}
                             columns={colHeaders}
                             rowsData={rowsData} />
            </div>)
  }
}

TableInspector.propTypes = {
  data: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object,
    ]),
  columns: React.PropTypes.array
}

TableInspector.defaultProps = {
  data: undefined,
  columns: undefined
}
