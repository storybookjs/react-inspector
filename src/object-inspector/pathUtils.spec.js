import expect from 'expect'

import {DEFAULT_ROOT_PATH,
        isExpandable,
        pathsStateFromPaths,
        pathsFromWildcardPaths,
        wildcardPathsFromLevel,
        pathsFromDataAndLevel} from './pathUtils'

const root = DEFAULT_ROOT_PATH

describe('PathUtils', () => {
  beforeEach(() => {

  })

  it('isExpandable', () => {
    expect(isExpandable(undefined)).toBe(false)
    expect(isExpandable(null)).toBe(false)
    expect(isExpandable('hello')).toBe(false)

    // expect(isExpandable(Object.getPrototypeOf({}))).toBe(true)

    expect(isExpandable([])).toBe(false)
    expect(isExpandable([0])).toBe(true)

    expect(isExpandable({})).toBe(false)
    expect(isExpandable({k: 'v'})).toBe(true)
  })

  it('wildcardPathsFromLevel works', () => {
    expect(wildcardPathsFromLevel(-1)).toEqual(undefined)
    expect(wildcardPathsFromLevel(0)).toEqual([])
    expect(wildcardPathsFromLevel(1)).toEqual([root])
    expect(wildcardPathsFromLevel(2)).toEqual([root, `${root}.*`])
    expect(wildcardPathsFromLevel(3)).toEqual([root, `${root}.*`, `${root}.*.*`])
    expect(wildcardPathsFromLevel(4)).toEqual([root, `${root}.*`, `${root}.*.*`, `${root}.*.*.*`])
  })

  it('pathsFromDataAndLevel: data: [null, undefined, []] ', () => {
    expect(pathsFromDataAndLevel(null, 0)).toEqual([ ])
    // TODO:
    expect(pathsFromDataAndLevel(null, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(undefined, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel([], 0)).toEqual([ ])
    // TODO:
    expect(pathsFromDataAndLevel([], 2)).toEqual([ ])
  })

  it('pathsFromDataAndLevel: object', () => {
    const data = {
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
    }

    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ root ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ root, `${root}.tags`, `${root}.dimensions`, `${root}.warehouseLocation` ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ root, `${root}.tags`, `${root}.dimensions`, `${root}.warehouseLocation` ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ root, `${root}.tags`, `${root}.dimensions`, `${root}.warehouseLocation` ])
  })

  it('pathsFromDataAndLevel: array', () => {
    const data = [0, 1, 2, 3, 4]

    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ root ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ root ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ root ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ root ])
  })

  it('pathsFromDataAndLevel: null, undefined, empty object, empty array, boolean, number, function', () => {
    let data = null

    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = undefined
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = {} // not showing __proto__
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = [] // length, __proto__
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = true
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = 1
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])

    data = function(){}
    expect(pathsFromDataAndLevel(data, 0)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 1)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 2)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 3)).toEqual([ ])
    expect(pathsFromDataAndLevel(data, 4)).toEqual([ ])
  })

  // it('pathsFromDataAndLevel: object, with custome names', () => {
  //   const data = {
  //       "id": 2,
  //       "name": "An ice sculpture",
  //       // "price": 12.50,
  //       "tags": ["cold", "ice"],
  //       "dimensions": {
  //           "length": 7.0,
  //           "width": 12.0,
  //           "height": 9.5
  //       },
  //       "warehouseLocation": {
  //           "latitude": -78.75,
  //           "longitude": 20.4
  //       }
  //   }
  //
  //   const customName = 'test'
  //   expect(pathsFromDataAndLevel(data, 0, customName)).toEqual([ ])
  //   expect(pathsFromDataAndLevel(data, 1, customName)).toEqual([ 'test' ])
  //   expect(pathsFromDataAndLevel(data, 2, customName)).toEqual([ 'test', 'test.tags', 'test.dimensions', 'test.warehouseLocation' ])
  //   expect(pathsFromDataAndLevel(data, 3, customName)).toEqual([ 'test', 'test.tags', 'test.dimensions', 'test.warehouseLocation' ])
  //   expect(pathsFromDataAndLevel(data, 4, customName)).toEqual([ 'test', 'test.tags', 'test.dimensions', 'test.warehouseLocation' ])
  // })
})
