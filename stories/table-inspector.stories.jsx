import { Inspector } from '../src';

export default {
  title: 'Table Inspector',
  component: Inspector,
};

export const Simple = {
  name: 'Simple',
  args: {
    table: true,
    data: [
      ['Name', 'Address', 'Age', 'Phone'],
      ['John Appleseed', '42 Galaxy drive', '20', '111-111-1111'],
    ],
  },
};

export const DifferentColumns = {
  name: 'Different Columns',
  args: {
    table: true,
    data: {
      0: { firstName: 'John', lastName: 'Smith' },
      1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
    },
  },
};

export const DifferentColumnsWithNames = {
  name: 'Different Columns With Names',
  args: {
    table: true,
    data: {
      person1: { firstName: 'John', lastName: 'Smith' },
      person2: {
        firstName: 'Martin',
        middleName: 'Luther',
        lastName: 'King',
      },
    },
  },
};

export const DataAndColumnsProps = {
  name: 'Data And Columns Props',
  args: {
    table: true,
    data: {
      0: { firstName: 'John', lastName: 'Smith' },
      1: { firstName: 'Martin', middleName: 'Luther', lastName: 'King' },
    },
    columns: ['firstName', 'lastName'],
  },
};

export const Sudoku = {
  name: 'Sudoku',
  args: {
    table: true,
    data: [
      [0, 5, 2, 0, 4, 6, 9, 0, 0],
      [8, 0, 9, 0, 3, 0, 6, 0, 4],
      [0, 0, 0, 1, 0, 0, 0, 8, 0],
      [6, 7, 4, 0, 0, 8, 0, 0, 5],
      [1, 0, 0, 0, 0, 0, 0, 0, 3],
      [5, 0, 0, 7, 0, 0, 2, 4, 8],
      [0, 6, 0, 0, 0, 2, 0, 0, 0],
      [9, 0, 5, 0, 1, 0, 4, 0, 7],
      [0, 0, 7, 5, 8, 0, 3, 1, 0],
    ],
  },
};

export const Null = {
  name: 'Null',
  args: {
    table: true,
    data: null,
  },
};

export const Undefined = {
  name: 'Undefined',
  args: {
    table: true,
    data: undefined,
  },
};

export const ArrayOfUndefined = {
  name: 'Array Of Undefined',
  args: {
    table: true,
    data: [undefined],
  },
};

export const ArrayOfAnEmptyObject = {
  name: 'Array Of An Empty Object',
  args: {
    table: true,
    data: [{}],
  },
};

export const ArrayOfArray = {
  name: 'Array Of Array',
  args: {
    table: true,
    data: [[1, 2]],
  },
};
