/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'BigInts',
};

export const Positive = {
  render: () => <Inspector data={42n} />,
  name: 'positive',
};

export const Zero = {
  render: () => <Inspector data={0n} />,
  name: 'zero',
};

export const Negative = {
  render: () => <Inspector data={-1n} />,
  name: 'negative',
};
