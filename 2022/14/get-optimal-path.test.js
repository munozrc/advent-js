import { describe, expect, it } from 'vitest'
import getOptimalPath from './get-optimal-path'

describe('Challenge day 14', () => {
  it('should be a function', () => {
    expect(getOptimalPath).toBeTypeOf('function')
  })

  it('should return a number', () => {
    expect(getOptimalPath([[0]])).toBeTypeOf('number')
  })

  it('should return the first path with least cost', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBe(8)
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toBe(7)
  })
})
