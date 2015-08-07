import React, { Component } from 'react';

import ObjectInspector from './ObjectInspector';

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
        }
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

    // usage:
    // {
    //   "a": function(){
    //     // iife ajax call
    //   }
    // }

    const testObjects = [undefined, testFunction, null, true, false, "testString", 42, NaN, testObject, test2, test3, test4, test5, [], ["a"], ["a", 1]];

    return (
      <div>
        {(() => {
          // https://facebook.github.io/react/tips/if-else-in-JSX.html
          // TODO: key props here
          return testObjects.map(function(object, index){
            return (
                  <div style={{marginBottom:"10px"}}>
                    <ObjectInspector key={index} data={object}>
                    </ObjectInspector>
                  </div>);
          });
        })()}
      </div>
    );
  }
}
