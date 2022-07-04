/* eslint-disable @typescript-eslint/no-empty-function */
import expect from 'expect';

import { DEFAULT_ROOT_PATH, wildcardPathsFromLevel } from './pathUtils';

const root = DEFAULT_ROOT_PATH;

describe('PathUtils', () => {
  beforeEach(() => {});

  it('wildcardPathsFromLevel works', () => {
    expect(wildcardPathsFromLevel(-1)).toEqual([]);

    expect(wildcardPathsFromLevel(0)).toEqual([]);

    expect(wildcardPathsFromLevel(1)).toEqual([root]);

    expect(wildcardPathsFromLevel(2)).toEqual([root, `${root}.*`]);

    expect(wildcardPathsFromLevel(3)).toEqual([root, `${root}.*`, `${root}.*.*`]);

    expect(wildcardPathsFromLevel(4)).toEqual([root, `${root}.*`, `${root}.*.*`, `${root}.*.*.*`]);
  });

  // it('getExpandedPaths works', () => {
  // })
});
