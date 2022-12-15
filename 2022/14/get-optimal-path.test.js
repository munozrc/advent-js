import { describe, expect, it } from 'vitest'
import getOptimalPath from './get-optimal-path'

describe('Challenge day 14', () => {
  it('should be a function', () => {
    expect(getOptimalPath).toBeTypeOf('function')
  })

  it('should return a number', () => {
    expect(getOptimalPath([])).toBeTypeOf('number')
  })

  it('should return the first path with least cost', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
  })
})
