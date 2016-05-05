import React, { Component } from 'react';

import ObjectDescription from '../src/object/ObjectDescription'

import ObjectInspector from '../src/object-inspector/ObjectInspector';
import TableInspector from '../src/table-inspector/TableInspector';

function testFunction(){
  console.log("hello world");
}

export default class App extends Component {

  render() {
    const testObject = {
        "id": 2,
        "name": "An ice sculpture",
        // "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    };

    const test2 = {"employees":[
    {"firstName":"John", "lastName":"Doe", "fullTime": true},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
    ]};

    const test3 = {
        "a1": 1,
        "a2": "A2",
        "a3": true,
        "a4": undefined,
        "a5": {
          "a5-1": null,
          "a5-2": ["a5-2-1", "a5-2-2"],
          "a5-3": {}
        },
        "a6": function(){
          console.log("hello world")
        },
        "a7": new Date("2005-04-03")
    };

    const test4 = {
        "login": "defunkt",
        "id": 2,
        "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/defunkt",
        "html_url": "https://github.com/defunkt",
        "followers_url": "https://api.github.com/users/defunkt/followers",
        "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
        "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
        "organizations_url": "https://api.github.com/users/defunkt/orgs",
        "repos_url": "https://api.github.com/users/defunkt/repos",
        "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
        "received_events_url": "https://api.github.com/users/defunkt/received_events",
        "type": "User",
        "site_admin": true,
        "name": "Chris Wanstrath",
        "company": "GitHub",
        "blog": "http://chriswanstrath.com/",
        "location": "San Francisco",
        "email": "chris@github.com",
        "hireable": true,
        "bio": null,
        "public_repos": 108,
        "public_gists": 280,
        "followers": 14509,
        "following": 208,
        "created_at": "2007-10-20T05:24:19Z",
        "updated_at": "2015-08-03T18:05:52Z"
    };

    const test5 = {
        "glossary": {
            "title": "example glossary",
    		"GlossDiv": {
                "title": "S",
    			"GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
    					"SortAs": "SGML",
    					"GlossTerm": "Standard Generalized Markup Language",
    					"Acronym": "SGML",
    					"Abbrev": "ISO 8879:1986",
    					"GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
    						"GlossSeeAlso": ["GML", "XML"]
                        },
    					"GlossSee": "markup"
                    }
                }
            }
        }
    };

    // {
    //   "a": function(){
    //     // iife ajax call
    //   }
    // }

    const objectTests = [undefined, testFunction, null, true, false, "testString", 42, NaN, Symbol('foo'),
      testObject, test2, test3, test4, test5,
      [], ["a"], ["a", 1], ["a", 1, {}],
      new Date(),
      {},
      Object.create({'k': 'v'}),
      Object.prototype,
      Object,
      /^.*$/];

    const tableTests = [
      // should be 2 * 4 table
      {
        data: [['Name', 'Address', 'Age', 'Phone'],['John Appleseed', '42 Galaxy drive', '20', '111-111-1111']]
      },
      {
        data: {
          0: { firstName: "John", lastName: "Smith" },
          1: { firstName: "Martin", middleName: "Luther", lastName: "King" }
        },
      },
      {
        data: {
          'person1': { firstName: "John", lastName: "Smith" },
          'person2': { firstName: "Martin", middleName: "Luther", lastName: "King" }
        },
      },
      {
        data: {
          0: { firstName: "John", lastName: "Smith" },
          1: { firstName: "Martin", middleName: "Luther", lastName: "King" }
        },
        columns: ['firstName', 'lastName']
      },
      // should be 9 * 9 table
      {
        data: [
          [0,5,2,0,4,6,9,0,0],
        	[8,0,9,0,3,0,6,0,4],
        	[0,0,0,1,0,0,0,8,0],
        	[6,7,4,0,0,8,0,0,5],
        	[1,0,0,0,0,0,0,0,3],
        	[5,0,0,7,0,0,2,4,8],
        	[0,6,0,0,0,2,0,0,0],
        	[9,0,5,0,1,0,4,0,7],
        	[0,0,7,5,8,0,3,1,0]
        ],
      },
      // should be nothing
      {
        data: null
      },
      // should be nothing
      {
        data: undefined
      },
      // should be 1 * 0 table (chrome console.table is nothing)
      {
        data: [
          undefined
        ]
      },
      // should be 1 * 0 table
      {
        data: [
          [1,2]
        ]
      },
      // should be 1 * 0 table
      {
        data: [
          {}
        ]
      },
    ]

    return (
      <div>
        {/*<ObjectDescription object={function(){}}/>*/}

        {(() => {
          // https://facebook.github.io/react/tips/if-else-in-JSX.html
          return objectTests.map(function(object, index){
            return (
                  <div key={index} style={{marginBottom:"10px"}}>

                    <ObjectInspector data={object} showNonenumerable >
                    </ObjectInspector>
                  </div>);
          });
        })()}

        {(() =>
          tableTests.map((test, index) =>
            (
              <div key={index}
                   style={{ marginBottom:"10px",
                            /* width: 800 */}}>
                <TableInspector data={test.data} columns={test.columns}>
                </TableInspector>
              </div>)
            )
        )()}

      </div>
    );
  }
}
