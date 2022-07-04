import React from 'react';
import { storiesOf } from '@storybook/react';

import { Inspector } from '../src';

storiesOf('Table', module)
  .add('simple', () => (
    <Inspector
      table
      data={[
        ['Name', 'Address', 'Age', 'Phone'],
        ['John Appleseed', '42 Galaxy drive', '20', '111-111-1111'],
      ]}
    />
  ))
  .add('different columns', () => (
    <Inspector
      table
      data={{
        0: { firstName: 'John', lastName: 'Smith' },
        1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
      }}
    />
  ))
  .add('different columns (with names)', () => (
    <Inspector
      table
      data={{
        person1: { firstName: 'John', lastName: 'Smith' },
        person2: {
          firstName: 'Martin',
          middleName: 'Luther',
          lastName: 'King',
        },
      }}
    />
  ))
  .add('data and columns props', () => (
    <Inspector
      table
      data={{
        0: { firstName: 'John', lastName: 'Smith' },
        1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
      }}
      columns={['firstName', 'lastName']}
    />
  ))
  .add('sudoku', () => (
    <Inspector
      table
      data={[
        [0, 5, 2, 0, 4, 6, 9, 0, 0],
        [8, 0, 9, 0, 3, 0, 6, 0, 4],
        [0, 0, 0, 1, 0, 0, 0, 8, 0],
        [6, 7, 4, 0, 0, 8, 0, 0, 5],
        [1, 0, 0, 0, 0, 0, 0, 0, 3],
        [5, 0, 0, 7, 0, 0, 2, 4, 8],
        [0, 6, 0, 0, 0, 2, 0, 0, 0],
        [9, 0, 5, 0, 1, 0, 4, 0, 7],
        [0, 0, 7, 5, 8, 0, 3, 1, 0],
      ]}
    />
  ))
  // should be nothing
  .add('null', () => <Inspector table data={null} />)
  // should be nothing
  .add('undefined', () => <Inspector table data={undefined} />)
  // should be 1 * 0 table (chrome console.table is nothing)
  .add('array of undefined', () => <Inspector table data={[undefined]} />)
  // should be 1 * 0 table
  .add('array of an empty object', () => <Inspector table data={[{}]} />)
  // should be 2 * 1 table
  .add('array of array', () => <Inspector table data={[[1, 2]]} />);
