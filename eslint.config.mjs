import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';

export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      ...storybook.configs.recommended.rules,
      'prettier/prettier': ['error'],
      '@typescript-eslint/ban-ts-comment': 'warn',
      // Too much legacy to fix.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
