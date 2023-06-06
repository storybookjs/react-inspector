module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
