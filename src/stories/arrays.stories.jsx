/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Arrays',
};

export const EmptyArray = () => <Inspector data={[]} />;

export const EmptyArrayShowNonEnumerableProperties = {
  render: () => <Inspector showNonenumerable data={[]} />,
  name: 'Empty Array (show non-enumerable properties)',
};

export const BasicArray = () => <Inspector data={['cold', 'ice']} />;

export const ArrayWithDifferentTypesOfElements = {
  render: () => <Inspector data={['a', 1, {}]} />,
  name: 'Array with different types of elements',
};

export const LongArray = {
  render: () => <Inspector data={new Array(1000).fill(0).map((x, i) => i + '')} />,
  name: 'Long array',
};

export const ArrayWithBigObjects = {
  render: () => (
    <Inspector
      data={new Array(100).fill(0).map((x, i) => ({
        key: i,
        name: `John #${i}`,
        dateOfBirth: new Date(i * 10e8),
        address: `${i} Main Street`,
        zip: 90210 + i,
      }))}
    />
  ),

  name: 'Array with big objects',
};

export const _Uint32Array = {
  render: () => <Inspector data={new Uint32Array(1000)} />,
  name: 'Uint32Array',
};
