/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Strings',
};

export const EmptyString = {
  render: () => <Inspector data="" />,
  name: 'empty string',
};

export const Simple = {
  render: () => <Inspector data="hello" />,
  name: 'simple',
};
