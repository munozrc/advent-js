import { describe, expect, it } from 'vitest'
import distributeGifts from './distribute-gifts'

describe('listGifts', () => {
  it('should be a function', () => {
    expect(distributeGifts).toBeTypeOf('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => distributeGifts()).toThrow()
  })

  it('should return a number', () => {
    expect(distributeGifts([], [])).toBeTypeOf('number')
  })

  it('should return a carrying capacity per reindeer', () => {
    expect(distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])).toBe(2)
  })
})
