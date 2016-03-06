import expect from 'expect'
import getHeaders from './getHeaders'

describe('getHeaders for arrays', () => {
  it('should return empty headers for empty array', () => {
    const data = []
    const result = getHeaders(data)
    expect(result).toEqual({ rowHeaders: [], colHeaders: [] })
  })

  it('should work for array of arrays', () => {
    const data = [['a', 'b'], ['c', 'd']]
    const result = getHeaders(data)
    expect(result).toEqual({ rowHeaders: [0, 1], colHeaders: ['0', '1'] })
  })

  it('should work for array of objects', () => {
    const data = [{
                    "login": "rafaelsachetto",
                    "id": 42780
                  },
                  {
                    "login": "tsnow",
                    "id": 48890
                  }]
    const result = getHeaders(data)
    expect(result).toEqual({ rowHeaders: [0, 1], colHeaders: ["login", "id"] })
  })
})

describe('getHeaders for objects', () => {
    it('should work for objects whose keys are index numbers', () => {
      const data = { 0: { firstName: "John", lastName: "Smith" }, 1: { firstName: "Martin", middleName: "Luther", lastName: "King" }}
      const result = getHeaders(data)
      expect(result).toEqual({ rowHeaders: ['0', '1'], colHeaders: ['firstName', 'lastName', 'middleName'] })
    })

    it('should work for objects whose keys are index numbers', () => {
      const data = { 0: { firstName: "John", lastName: "Smith" }, 1: { firstName: "Martin", middleName: "Luther", lastName: "King" }}
      const result = getHeaders(data)
      expect(result).toEqual({ rowHeaders: ['0', '1'], colHeaders: ['firstName', 'lastName', 'middleName'] })
    })

    // for arrays length refers to the length of the array
    // for objects lengths refers to the number of keys
    it('should work for objects whose keys are strings and values are of same lengths', () => {
      const data = { "person1": { firstName: "John", lastName: "Smith" }, "person2": { firstName: "Martin", lastName: "King" }}
      const result = getHeaders(data)
      expect(result).toEqual({ rowHeaders: ['person1', 'person2'], colHeaders: ['firstName', 'lastName'] })
    })

    it('should work for objects whose keys are strings and values have different lengths', () => {
      const data = { "person1": { firstName: "John", lastName: "Smith" }, "person2": { firstName: "Martin", middleName: "Luther", lastName: "King" }}
      const result = getHeaders(data)
      expect(result).toEqual({ rowHeaders: ['person1', 'person2'], colHeaders: ['firstName', 'lastName', 'middleName'] })
    })

    it('should work for objects whose values are mix of array and objects', () => {
      const data = { 0: { firstName: "John" }, 1: [1,2,3] }
      const result = getHeaders(data)
      // Chrome has funny result: { rowHeaders: ['0', '1'], colHeaders: ['firstName', '0', '1', '2', 'length'] })
      expect(result).toEqual({ rowHeaders: ['0', '1'], colHeaders: ['firstName', '0', '1', '2'] })
    })

})
