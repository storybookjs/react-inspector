/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Undefined',
};

export const Undefined = () => <Inspector data={undefined} />;

export const _NaN = {
  render: () => <Inspector data={NaN} />,
  name: 'NaN',
};

export const Null = () => <Inspector data={null} />;
