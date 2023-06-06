/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Booleans',
};

export const True = {
  render: () => <Inspector data={true} />,
  name: 'true',
};

export const False = {
  render: () => <Inspector data={false} />,
  name: 'false',
};
