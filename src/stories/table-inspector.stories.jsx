import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Table',
};

export const Simple = {
  render: () => (
    <Inspector
      table
      data={[
        ['Name', 'Address', 'Age', 'Phone'],
        ['John Appleseed', '42 Galaxy drive', '20', '111-111-1111'],
      ]}
    />
  ),

  name: 'simple',
};

export const DifferentColumns = {
  render: () => (
    <Inspector
      table
      data={{
        0: { firstName: 'John', lastName: 'Smith' },
        1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
      }}
    />
  ),

  name: 'different columns',
};

export const DifferentColumnsWithNames = {
  render: () => (
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
  ),

  name: 'different columns (with names)',
};

export const DataAndColumnsProps = {
  render: () => (
    <Inspector
      table
      data={{
        0: { firstName: 'John', lastName: 'Smith' },
        1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
      }}
      columns={['firstName', 'lastName']}
    />
  ),

  name: 'data and columns props',
};

export const Sudoku = {
  render: () => (
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
  ),

  name: 'sudoku',
};

export const Null = {
  render: () => <Inspector table data={null} />,
  name: 'null',
};

export const Undefined = {
  render: () => <Inspector table data={undefined} />,
  name: 'undefined',
};

export const ArrayOfUndefined = {
  render: () => <Inspector table data={[undefined]} />,
  name: 'array of undefined',
};

export const ArrayOfAnEmptyObject = {
  render: () => <Inspector table data={[{}]} />,
  name: 'array of an empty object',
};

export const ArrayOfArray = {
  render: () => <Inspector table data={[[1, 2]]} />,
  name: 'array of array',
};
