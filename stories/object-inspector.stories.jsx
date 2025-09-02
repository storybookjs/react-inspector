import React from 'react';

import { Inspector } from '../src';

function namedFunction() {
  //
}

export default {
  title: 'Object Inspector',
  component: Inspector,
};

export const NumberPositive = {
  render: () => <Inspector data={42} />,
  name: 'Number: positive',
};

export const NumberZero = {
  render: () => <Inspector data={0} />,
  name: 'Number: zero',
};

export const NumberNegative = {
  render: () => <Inspector data={-1} />,
  name: 'Number: negative',
};

export const NumberFloat = {
  render: () => <Inspector data={1.5} />,
  name: 'Number: float',
};

export const NumberExponential = {
  render: () => <Inspector data={1e100} />,
  name: 'Number: exponential',
};

export const NumberNaN = {
  render: () => <Inspector data={NaN} />,
  name: 'Number: NaN',
};

export const NumberInfinity = {
  render: () => <Inspector data={Infinity} />,
  name: 'Number: Infinity',
};

// BigInts
export const BigIntPositive = {
  render: () => <Inspector data={42n} />,
  name: 'BigInt: positive',
};

export const BigIntZero = {
  render: () => <Inspector data={0n} />,
  name: 'BigInt: zero',
};

export const BigIntNegative = {
  render: () => <Inspector data={-1n} />,
  name: 'BigInt: negative',
};

// Strings
export const StringEmpty = {
  render: () => <Inspector data="" />,
  name: 'String: empty string',
};

export const StringSimple = {
  render: () => <Inspector data="hello" />,
  name: 'String: simple',
};

// Booleans
export const BooleanTrue = {
  render: () => <Inspector data={true} />,
  name: 'Boolean: true',
};

export const BooleanFalse = {
  render: () => <Inspector data={false} />,
  name: 'Boolean: false',
};

// Undefined
export const UndefinedValue = {
  render: () => <Inspector data={undefined} />,
  name: 'Undefined',
};

// Null
export const NullValue = {
  render: () => <Inspector data={null} />,
  name: 'Null',
};

// Symbols
export const SymbolTest = {
  render: () => <Inspector data={Symbol.for('test')} />,
  name: 'Symbol: test',
};

// Arrays
export const ArrayEmpty = {
  render: () => <Inspector data={[]} />,
  name: 'Array: Empty Array',
};

export const ArrayEmptyNonenumerable = {
  render: () => <Inspector showNonenumerable data={[]} />,
  name: 'Array: Empty Array (show non-enumerable properties)',
};

export const ArrayBasic = {
  render: () => <Inspector data={['cold', 'ice']} />,
  name: 'Array: Basic Array',
};

export const ArrayMixedTypes = {
  render: () => <Inspector data={['a', 1, {}]} />,
  name: 'Array: With different types of elements',
};

export const ArrayLong = {
  render: () => <Inspector data={new Array(1000).fill(0).map((x, i) => i + '')} />,
  name: 'Array: Long array',
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
  name: 'Array: With big objects',
};

export const ArrayUint32Array = {
  render: () => <Inspector data={new Uint32Array(1000)} />,
  name: 'Array: Uint32Array',
};

// Objects
export const ObjectDate = {
  render: () => <Inspector data={new Date('2005-04-03')} />,
  name: 'Object: Date',
};

export const ObjectRegExp = {
  render: () => <Inspector data={/^.*$/} />,
  name: 'Object: Regular Expression',
};

export const ObjectEmpty = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={{}} />,
  name: 'Object: Empty Object',
};

export const ObjectEmptyStringKey = {
  render: () => <Inspector data={{ '': 'hi' }} />,
  name: 'Object: Empty String key',
};

export const ObjectWithGetter = {
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

export const ObjectWithGetterThatThrows = {
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

export const ObjectSimple = {
  render: () => <Inspector showNonenumerable expandLevel={2} data={{ k: 'v' }} />,
  name: 'Object: Simple Object',
};

export const ObjectSimpleInherited = {
  render: () => <Inspector showNonenumerable expandLevel={2} data={Object.create({ k: 'v' })} />,
  name: 'Object: Simple inherited object',
};

export const ObjectConstructor = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={Object} />,
  name: 'Object: `Object`',
};

export const ObjectPrototype = {
  render: () => <Inspector showNonenumerable expandLevel={1} data={Object.prototype} />,
  name: 'Object: `Object.prototype`',
};

export const ObjectSimpleWithName = {
  render: () => <Inspector showNonenumerable expandLevel={2} name="test" data={{ k: 'v' }} />,
  name: 'Object: Simple Object with name',
};

export const ObjectCreateNull = {
  render: () => <Inspector showNonenumerable data={Object.create(null)} />,
  name: 'Object: `Object.create(null)` (Empty object with null prototype)',
};

export const ObjectWithNullPrototype = {
  render: () => <Inspector showNonenumerable data={Object.assign(Object.create(null), { key: 'value' })} />,
  name: 'Object: Object with null prototype',
};

// Maps
export const MapEmpty = {
  render: () => <Inspector data={new Map()} />,
  name: 'Map: Empty Map',
};

export const MapBooleanKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [true, 'one'],
          [false, 'two'],
        ])
      }
    />
  ),
  name: 'Map: Boolean keys',
};

export const MapRegexKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [/\S/g, 'one'],
          [/\D/g, 'two'],
        ])
      }
    />
  ),
  name: 'Map: Regex keys',
};

export const MapStringKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          ['one', 1],
          ['two', 2],
        ])
      }
    />
  ),
  name: 'Map: String keys',
};

export const MapObjectKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [{}, 1],
          [{ key: 2 }, 2],
        ])
      }
    />
  ),
  name: 'Map: Object keys',
};

export const MapArrayKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [[1], 1],
          [[2], 2],
        ])
      }
    />
  ),
  name: 'Map: Array keys',
};

export const MapMapKeys = {
  render: () => (
    <Inspector
      data={
        new Map([
          [new Map(), 1],
          [new Map([]), 2],
        ])
      }
    />
  ),
  name: 'Map: Map keys',
};

// Sets
export const SetEmpty = {
  render: () => <Inspector data={new Set()} />,
  name: 'Set: Empty Set',
};

export const SetSimple = {
  render: () => <Inspector data={new Set([1, 2, 3, 4])} />,
  name: 'Set: Simple Set',
};

export const SetNested = {
  render: () => <Inspector data={new Set([1, 2, 3, new Set([1, 2])])} />,
  name: 'Set: Nested Set',
};

// Functions
export const FunctionAnonymous = {
  render: () => <Inspector data={function () {}} />,
  name: 'Functions: anonymous function',
};

export const FunctionArrow = {
  render: () => <Inspector data={() => {}} />,
  name: 'Functions: anonymous arrow function',
};

export const FunctionNamed = {
  render: () => <Inspector data={namedFunction} />,
  name: 'Functions: named function',
};

export const FunctionNamedNonenumerable = {
  render: () => <Inspector showNonenumerable data={namedFunction} />,
  name: 'Functions: named function (show non-enumerable properties)',
};

// Nested object examples
export const NestedIceSculpture = {
  render: () => (
    <Inspector
      expandLevel={2}
      data={{
        id: 2,
        name: 'An ice sculpture',
        // "price": 12.50,
        tags: ['cold', 'ice'],
        dimensions: {
          length: 7.0,
          width: 12.0,
          height: 9.5,
        },
        warehouseLocation: {
          latitude: -78.75,
          longitude: 20.4,
        },
      }}
    />
  ),
  name: 'Nested: Ice sculpture',
};

export const NestedGithub = {
  render: () => (
    <Inspector
      expandLevel={1}
      data={{
        login: 'defunkt',
        id: 2,
        avatar_url: 'https://avatars.githubusercontent.com/u/2?v=3',
        gravatar_id: '',
        url: 'https://api.github.com/users/defunkt',
        html_url: 'https://github.com/defunkt',
        followers_url: 'https://api.github.com/users/defunkt/followers',
        following_url: 'https://api.github.com/users/defunkt/following{/other_user}',
        gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
        organizations_url: 'https://api.github.com/users/defunkt/orgs',
        repos_url: 'https://api.github.com/users/defunkt/repos',
        events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
        received_events_url: 'https://api.github.com/users/defunkt/received_events',
        type: 'User',
        site_admin: true,
        name: 'Chris Wanstrath',
        company: 'GitHub',
        blog: 'http://chriswanstrath.com/',
        location: 'San Francisco',
        email: 'chris@github.com',
        hireable: true,
        bio: null,
        public_repos: 108,
        public_gists: 280,
        followers: 14509,
        following: 208,
        created_at: '2007-10-20T05:24:19Z',
        updated_at: '2015-08-03T18:05:52Z',
      }}
    />
  ),
  name: 'Nested: Github',
};

export const NestedGlossary = {
  render: () => (
    <Inspector
      expandLevel={7}
      data={{
        glossary: {
          title: 'example glossary',
          GlossDiv: {
            title: 'S',
            GlossList: {
              GlossEntry: {
                ID: 'SGML',
                SortAs: 'SGML',
                GlossTerm: 'Standard Generalized Markup Language',
                Acronym: 'SGML',
                Abbrev: 'ISO 8879:1986',
                GlossDef: {
                  para: 'A meta-markup language, used to create markup languages such as DocBook.',
                  GlossSeeAlso: ['GML', 'XML'],
                },
                GlossSee: 'markup',
              },
            },
          },
        },
      }}
    />
  ),
  name: 'Nested: Glossary',
};

export const NestedContrived = {
  render: () => (
    <Inspector
      expandLevel={3}
      data={{
        a1: 1,
        a2: 'A2',
        a3: true,
        a4: undefined,
        a5: {
          'a5-1': null,
          'a5-2': ['a5-2-1', 'a5-2-2'],
          'a5-3': {},
        },
        a6: function () {
          console.log('hello world');
        },
        a7: new Date('2005-04-03'),
      }}
    />
  ),
  name: 'Nested: Contrived example',
};
