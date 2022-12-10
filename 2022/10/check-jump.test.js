import { describe, expect, it } from 'vitest'
import checkJump from './check-jump'

describe('Challenge 10', () => {
  it('should be a function', () => {
    expect(checkJump).toBeTypeOf('function')
  })

  it('should be return a boolean', () => {
    expect(checkJump([])).toBeTypeOf('boolean')
  })

  it('It should return true if it finds a single hop in the whole tour.', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
    expect(checkJump([1, 2, 1])).toBe(true)
    expect(checkJump([1, 2, 1, 1])).toBe(true)
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
  })

  it('It should return false if it finds more than one hop in the whole path.', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
    expect(checkJump([1, 2, 3])).toBe(false)
    expect(checkJump([2, 2, 2, 2])).toBe(false)
  })
})
