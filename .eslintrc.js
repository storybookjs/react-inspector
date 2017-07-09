module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8
    },
    "plugins": [
        "react",
        "jasmine"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jasmine/recommended"
    ],
    "env": {
          "browser": true,
          "node": true,
          "es6": true,
          "jasmine": true
    },
    "rules": {
        "react/prop-types": [0],
        "react/display-name": [0],
        "jasmine/new-line-before-expect": [0],
        "react/no-unescaped-entities": [0]
    }

};
