/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Functions',
};

export const FunctionsAnonymousFunction = {
  render: () => <Inspector data={function () {}} />,
  name: 'Functions: anonymous function',
};

export const FunctionsAnonymousArrowFunction = {
  render: () => <Inspector data={() => {}} />,
  name: 'Functions: anonymous arrow function',
};

export const FunctionsNamedFunction = {
  render: () => <Inspector data={namedFunction} />,
  name: 'Functions: named function',
};

export const FunctionsNamedFunctionShowNonEnumerableProperties = {
  render: () => <Inspector showNonenumerable data={namedFunction} />,

  name: 'Functions: named function (show non-enumerable properties)',
};
