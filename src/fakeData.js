// https://api.github.com/users/defunkt
const githubData = {
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

const data = {
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
}

const tester = {
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
}

// http://www.json-generator.com/
const testJSON = [
  {
    "_id": "56dcf573b09c217d39fd7621",
    "name": "Howard Christensen",
    "email": "howardchristensen@isotronic.com",
    "phone": "+1 (830) 529-3176",
    "address": "511 Royce Street, Hilltop, Tennessee, 9712"
  },
  {
    "_id": "56dcf57323630b06251e93cd",
    "name": "Eleanor Lynn",
    "email": "eleanorlynn@isotronic.com",
    "phone": "+1 (911) 576-2345",
    "address": "547 Dearborn Court, Trona, California, 8629"
  },
  {
    "_id": "56dcf5738279cac6b081e512",
    "name": "Baxter Mooney",
    "email": "baxtermooney@isotronic.com",
    "phone": "+1 (954) 456-3456",
    "address": "349 Cumberland Walk, Washington, Alaska, 3154"
  },
  {
    "_id": "56dcf57303accabd43740957",
    "name": "Calhoun Tyson",
    "email": "calhountyson@isotronic.com",
    "phone": "+1 (818) 456-2529",
    "address": "367 Lyme Avenue, Ladera, Louisiana, 6292"
  },
  {
    "_id": "56dcf57391ea6a9d1f60df0c",
    "name": "Judith Jimenez",
    "email": "judithjimenez@isotronic.com",
    "phone": "+1 (950) 587-3415",
    "address": "269 Bogart Street, Sultana, Vermont, 7833"
  },
  {
    "_id": "56dcf5735a7a0718a61f294d",
    "name": "Newman Lawson",
    "email": "newmanlawson@isotronic.com",
    "phone": "+1 (814) 484-2827",
    "address": "969 Conduit Boulevard, Lowell, Oregon, 4118"
  },
]

export default testJSON
