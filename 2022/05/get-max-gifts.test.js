import { describe, it, expect } from 'vitest'
import getMaxGifts from './get-max-gifts'

describe('', () => {
  it('should be a function', () => {
    expect(getMaxGifts).toBeTypeOf('function')
  })

  it('should return a number', () => {
    expect(getMaxGifts([], 0, 0)).toBe(0)
  })

  it('should return a number when params be like', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
    expect(getMaxGifts([50], 100, 1)).toBe(50)
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100)
    expect(getMaxGifts([50], 15, 1)).toBe(0)
  })
})
