import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { TableInspector } from '../src'

storiesOf('Table', module)
  .add('simple', () => <TableInspector data={
    [['Name', 'Address', 'Age', 'Phone'],['John Appleseed', '42 Galaxy drive', '20', '111-111-1111']]
  }/>)
  .add('different columns', () => <TableInspector data={{
    0: { firstName: "John", lastName: "Smith" },
    1: { firstName: "Martin", middleName: "Luther", lastName: "King" }
  }}/>)
  .add('different columns (with names)', () => <TableInspector data={{
    'person1': { firstName: "John", lastName: "Smith" },
    'person2': { firstName: "Martin", middleName: "Luther", lastName: "King" }
  }}/>)
  .add('data and columns props', () =>
    <TableInspector data={{
        0: { firstName: "John", lastName: "Smith" },
        1: { firstName: "Martin", middleName: "Luther", lastName: "King" }
      }}
    columns={['firstName', 'lastName']}
  />)
  .add('sudoku', () => <TableInspector data={[
    [0,5,2,0,4,6,9,0,0],
    [8,0,9,0,3,0,6,0,4],
    [0,0,0,1,0,0,0,8,0],
    [6,7,4,0,0,8,0,0,5],
    [1,0,0,0,0,0,0,0,3],
    [5,0,0,7,0,0,2,4,8],
    [0,6,0,0,0,2,0,0,0],
    [9,0,5,0,1,0,4,0,7],
    [0,0,7,5,8,0,3,1,0]
  ]}/>)
  // should be nothing
  .add('null', () => <TableInspector data={null}/>)
  // should be nothing
  .add('undefined', () => <TableInspector data={undefined}/>)
  // should be 1 * 0 table (chrome console.table is nothing)
  .add('array of undefined', () => <TableInspector data={[undefined]}/>)
  // should be 1 * 0 table
  .add('array of an empty object', () => <TableInspector data={[{}]}/>)
  // should be 2 * 1 table
  .add('array of array', () => <TableInspector data={[[1,2]]}/>)
