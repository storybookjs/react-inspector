/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Inspector } from '..';

export default {
  title: 'Nested object examples',
};

export const IceSculpture = {
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

  name: 'Ice sculpture',
};

export const Github = () => (
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
);

export const Glossary = () => (
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
);

export const ContrivedExample = {
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
          // eslint-disable-next-line
          console.log('hello world');
        },
        a7: new Date('2005-04-03'),
      }}
    />
  ),

  name: 'Contrived example',
};
