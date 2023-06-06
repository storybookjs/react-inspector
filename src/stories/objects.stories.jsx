/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Objects',
};

export const ObjectDate = {
  render: () => <Inspector data={new Date('2005-04-03')} />,
  name: 'Object: Date',
};

export const ObjectRegularExpression = {
  render: () => <Inspector data={/^.*$/} />,
  name: 'Object: Regular Expression',
};

export const ObjectEmptyObject = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={{}} />,
  name: 'Object: Empty Object',
};

export const ObjectEmptyStringKey = {
  render: () => <Inspector data={{ '': 'hi' }} />,
  name: 'Object: Empty String key',
};

export const ObjectObjectWithGetterProperty = {
  render: () => (
    <Inspector
      expandLevel={2}
      data={{
        get prop() {
          return 'v';
        },
      }}
    />
  ),

  name: 'Object: Object with getter property',
};

export const ObjectObjectWithGetterPropertyThatThrows = {
  render: () => (
    <Inspector
      expandLevel={2}
      data={{
        get prop() {
          throw new Error();
        },
      }}
    />
  ),

  name: 'Object: Object with getter property that throws',
};

export const ObjectSimpleObject = {
  render: () => <Inspector showNonenumerable expandLevel={2} data={{ k: 'v' }} />,
  name: 'Object: Simple Object',
};

export const ObjectSimpleInheritedObject = {
  render: () => <Inspector showNonenumerable expandLevel={2} data={Object.create({ k: 'v' })} />,

  name: 'Object: Simple inherited object',
};

export const ObjectObject = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={Object} />,
  name: 'Object: `Object`',
};

export const ObjectObjectPrototype = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={Object.prototype} />,
  name: 'Object: `Object.prototype`',
};

export const ObjectSimpleObjectWithName = {
  render: () => <Inspector showNonenumerable expandLevel={2} name="test" data={{ k: 'v' }} />,

  name: 'Object: Simple Object with name',
};

export const ObjectObjectCreateNullEmptyObjectWithNullPrototype = {
  render: () => <Inspector showNonenumerable data={Object.create(null)} />,

  name: 'Object: `Object.create(null)` (Empty object with null prototype)',
};

export const ObjectObjectWithNullPrototype = {
  render: () => <Inspector showNonenumerable data={Object.assign(Object.create(null), { key: 'value' })} />,

  name: 'Object: Object with null prototype',
};
