/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Symbols',
};

export const Test = {
  render: () => <Inspector data={Symbol.for('test')} />,
  name: 'test',
};
