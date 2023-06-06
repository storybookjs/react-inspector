/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Sets',
};

export const SetEmptySet = {
  render: () => <Inspector data={new Set()} />,
  name: 'Set: Empty Set',
};

export const SetSimpleSet = {
  render: () => <Inspector data={new Set([1, 2, 3, 4])} />,
  name: 'Set: Simple Set',
};

export const SetNestedSet = {
  render: () => <Inspector data={new Set([1, 2, 3, new Set([1, 2])])} />,
  name: 'Set: Nested Set',
};
