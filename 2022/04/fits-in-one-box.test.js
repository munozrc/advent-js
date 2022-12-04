import { describe, expect, it } from 'vitest'
import fitsInOneBox from './fits-in-one-box'

describe('Challenge 04', () => {
  it('should be a function', () => {
    expect(fitsInOneBox).toBeTypeOf('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => fitsInOneBox()).toThrow()
  })

  it('should return a boolean', () => {
    expect(fitsInOneBox([])).toBeTypeOf('boolean')
  })

  it('should return a true when', () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])).toBe(true)
  })
})
