/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Numbers',
};

export const Positive = {
  render: () => <Inspector data={42} />,
  name: 'positive',
};

export const Zero = {
  render: () => <Inspector data={0} />,
  name: 'zero',
};

export const Negative = {
  render: () => <Inspector data={-1} />,
  name: 'negative',
};

export const Float = {
  render: () => <Inspector data={1.5} />,
  name: 'float',
};

export const Exponential = {
  render: () => <Inspector data={1e100} />,
  name: 'exponential',
};

export const _NaN = {
  render: () => <Inspector data={NaN} />,
  name: 'NaN',
};

export const _Infinity = () => <Inspector data={Infinity} />;
