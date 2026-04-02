import { describe, it, expect, beforeEach, vi } from 'vitest';

import { DEFAULT_ROOT_PATH, wildcardPathsFromLevel, getExpandedPaths } from './pathUtils';
import { defaultDataAccessor } from '../DataAccessor';

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

  describe('getExpandedPaths', () => {
    // A simple data iterator that yields {name, data} for each enumerable key
    function* dataIterator(data) {
      if (typeof data !== 'object' || data === null) return;
      for (const key of Object.keys(data)) {
        yield { name: key, data: data[key] };
      }
    }

    it('uses the default accessor when none is provided', () => {
      const data = { a: { b: 1 } };
      const result = getExpandedPaths(data, dataIterator, [], 2, {});
      expect(result[root]).toBe(true);
      expect(result[`${root}.a`]).toBe(true);
    });

    it('uses a custom accessor for getProperty in explicit expandPaths', () => {
      // Proxy-like object where properties are accessed via a custom accessor
      const proxyData = { __type: 'proxy' };
      const childData = { __type: 'proxy-child' };

      const customAccessor = {
        ...defaultDataAccessor,
        getProperty: vi.fn((value, prop) => {
          if (value === proxyData && prop === 'child') return childData;
          return undefined;
        }),
      };

      // dataIterator that yields 'child' as a child node for proxyData
      function* proxyIterator(data) {
        if (data === proxyData) {
          yield { name: 'child', data: childData };
        }
        if (data === childData) {
          yield { name: 'leaf', data: 'value' };
        }
      }

      const result = getExpandedPaths(proxyData, proxyIterator, [`${root}.child`], 0, {}, customAccessor);

      // The custom accessor's getProperty should have been called to resolve 'child'
      expect(customAccessor.getProperty).toHaveBeenCalledWith(proxyData, 'child');
      expect(result[`${root}.child`]).toBe(true);
    });
  });
});
