import React from 'react';
import { storiesOf } from '@storybook/react';

import Inspector from '../src';

function namedFunction() {}

// Primitives
storiesOf('Numbers', module)
  .add('positive', () => <Inspector data={42} />)
  .add('zero', () => <Inspector data={0} />)
  .add('negative', () => <Inspector data={-1} />)
  .add('float', () => <Inspector data={1.5} />)
  .add('exponential', () => <Inspector data={1e100} />)
  .add('NaN', () => <Inspector data={NaN} />)
  .add('Infinity', () => <Inspector data={Infinity} />);
       
storiesOf('BigInts', module)
  .add('positive', () => <Inspector data={42n} />)
  .add('zero', () => <Inspector data={0n} />)
  .add('negative', () => <Inspector data={-1n} />)

storiesOf('Strings', module)
  .add('empty string', () => <Inspector data="" />)
  .add('simple', () => <Inspector data="hello" />);

storiesOf('Booleans', module)
  .add('true', () => <Inspector data={true} />)
  .add('false', () => <Inspector data={false} />);

storiesOf('Undefined', module).add('Undefined', () => <Inspector data={undefined} />);

storiesOf('Null', module).add('Null', () => <Inspector data={null} />);

storiesOf('Symbols', module).add('test', () => <Inspector data={Symbol.for('test')} />);

// Arrays
storiesOf('Arrays', module)
  .add('Empty Array', () => <Inspector data={[]} />)
  .add('Empty Array (show non-enumerable properties)', () => <Inspector showNonenumerable data={[]} />)
  .add('Basic Array', () => <Inspector data={['cold', 'ice']} />)
  .add('Array with different types of elements', () => (
    <Inspector data={['a', 1, {}]} />
  ))
  .add('Long array', () => (
    <Inspector data={new Array(1000).fill(0).map((x, i) => i + '')} />
  ))
  .add('Array with big objects', () => (
    <Inspector data={
      new Array(100).fill(0).map((x, i) => ({
        key: i,
        name: `John #${i}`,
        dateOfBirth: new Date(i * 10e8),
        address: `${i} Main Street`,
        zip: 90210 + i,

      }))
    } />
  ))
  .add('Uint32Array', () => <Inspector data={new Uint32Array(1000)} />);

// Objects
storiesOf('Objects', module)
  .add('Object: Date', () => <Inspector data={new Date('2005-04-03')} />)
  .add('Object: Regular Expression', () => <Inspector data={/^.*$/} />)
   .add('Object: Error type', () => <Inspector data={new Error("error message")} showNonenumerable />)
  .add('Object: Empty Object', () => <Inspector showNonenumerable expandLevel={1} data={{}} />)
  .add('Object: Empty String key', () => <Inspector data={{ '': 'hi' }} />)
  .add('Object: Object with getter property', () => (
    <Inspector expandLevel={2} data={{ get prop() { return "v" } }} />
  ))
  .add('Object: Object with getter property that throws', () => (
    <Inspector expandLevel={2} data={{ get prop() { throw new Error() } }} />
  ))
  .add('Object: Simple Object', () => (
    <Inspector showNonenumerable expandLevel={2} data={{ k: 'v' }} />
  ))
  .add('Object: Simple inherited object', () => (
    <Inspector showNonenumerable expandLevel={2} data={Object.create({ k: 'v' })} />
  ))
  .add('Object: `Object`', () => <Inspector showNonenumerable expandLevel={1} data={Object} />)
  .add('Object: `Object.prototype`', () => (
    <Inspector showNonenumerable expandLevel={1} data={Object.prototype} />
  ))
  .add('Object: Simple Object with name', () => (
    <Inspector showNonenumerable expandLevel={2} name="test" data={{ k: 'v' }} />
  ))
  .add('Object: `Object.create(null)` (Empty object with null prototype)', () => (
    <Inspector showNonenumerable data={Object.create(null)} />
  ))
  .add('Object: Object with null prototype', () => (
    <Inspector showNonenumerable data={Object.assign(Object.create(null), { key: 'value' })} />
  ));

storiesOf('Maps', module)
.add('Map: Empty Map', () => (<Inspector data={new Map()} />))
.add('Map: Boolean keys', () => (<Inspector data={new Map([[true, 'one'], [false, 'two']])} />))
.add('Map: Regex keys', () => (<Inspector data={new Map([[/\S/g, 'one'], [/\D/g, 'two']])} />))
.add('Map: String keys', () => (<Inspector data={new Map([['one', 1], ['two', 2]])} />))
.add('Map: Object keys', () => (<Inspector data={new Map([[{}, 1], [{key: 2}, 2]])} />))
.add('Map: Array keys', () => (<Inspector data={new Map([[[1], 1], [[2], 2]])} />))
.add('Map: Map keys', () => (<Inspector data={new Map([[new Map(), 1], [new Map([]), 2]])} />));


storiesOf('Sets', module)
  .add('Set: Empty Set', () => (<Inspector data={new Set()} />))
  .add('Set: Simple Set', () => (<Inspector data={new Set([1, 2, 3, 4])} />))
  .add('Set: Nested Set', () => (<Inspector data={new Set([1, 2, 3, new Set([1, 2])])} />));

storiesOf('Functions', module)
  .add('Functions: anonymous function', () => <Inspector data={function() {}} />)
  .add('Functions: anonymous arrow function', () => <Inspector data={() => {}} />)
  .add('Functions: named function', () => <Inspector data={namedFunction} />)
  .add('Functions: named function (show non-enumerable properties)', () => <Inspector showNonenumerable data={namedFunction} />);

storiesOf('Nested object examples', module)
  .add('Ice sculpture', () => (
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
  ))
  .add('Github', () => (
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
  ))
  .add('Glossary', () => (
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
  ))
  .add('Contrived example', () => (
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
        a6: function() {
          // eslint-disable-next-line
          console.log('hello world');
        },
        a7: new Date('2005-04-03'),
      }}
    />
  ));
