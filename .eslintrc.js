module.exports = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  rules: {
    strict: 0,
    'prettier/prettier': ['warn', {
      printWidth: 100,
      tabWidth: 2,
      bracketSpacing: true,
      trailingComma: 'all',
      singleQuote: true,
    }],
    quotes: ['warn', 'single'],
    'arrow-parens': ['warn', 'as-needed'],
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "no-var": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  },
  "plugins": [
    "react",
    'prettier',
  ],
}
