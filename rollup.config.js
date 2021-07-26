/**
 * Adapted from https://github.com/reduxjs/redux/blob/master/rollup.config.js
 * Copyright (c) 2015-present Dan Abramov
 */

import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import cleanup from 'rollup-plugin-cleanup';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/cjs/react-inspector.js',
      format: 'cjs',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    external: ['prop-types', 'react'],
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
      cleanup()
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/es/react-inspector.js',
      format: 'es',
      indent: false,
      sourcemap: true,
      exports: 'named',
    },
    external: ['prop-types', 'react'],
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({ runtimeHelpers: true }),
      cleanup()
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/umd/react-inspector.js',
      format: 'umd',
      name: 'ReactInspector',
      indent: false,
      exports: 'named',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({
        mainFields: ['module', 'jsnext:main', 'main'],
      }),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': [
            'useContext',
            'useLayoutEffect',
            'useCallback',
            'useState',
            'useMemo',
            'createContext',
            'memo',
            'Children',
          ],
        },
      }),
      cleanup()
    ],
  },
];
