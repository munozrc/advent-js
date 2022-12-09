import { describe, expect, it } from 'vitest'
import getGiftsToRefill from './get-gifts-to-refill'

describe('Challenge 07', () => {
  it('should be a function', () => {
    expect(getGiftsToRefill).toBeTypeOf('function')
  })

  it('should return an array of string', () => {
    expect(getGiftsToRefill(
      ['bici', 'pc', 'pc'],
      ['bici', 'pc', 'pc'],
      ['bici', 'pc', 'pc']
    ).every(g => typeof g === 'string'))
      .toBe(true)
  })

  // it('should return the maximum length of all arrays', () => {
  //   expect(getGiftsToRefill(
  //     ['bici', 'coche', 'bici', 'bici'],
  //     ['coche', 'bici', 'muñeca', 'coche'],
  //     ['bici', 'pc', 'pc']
  //   )).toBe(4)
  // })

  it('should return an array with the gifts to be replaced', () => {
    expect(getGiftsToRefill(
      ['bici', 'coche', 'bici', 'bici'],
      ['coche', 'bici', 'muñeca', 'coche'],
      ['bici', 'pc', 'pc']
    ).join('') === ['muñeca', 'pc'].join('')).toBe(true)

    expect(getGiftsToRefill(
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f']
    ).join('') === ['a', 'b', 'c', 'd', 'e', 'f'].join('')).toBe(true)
  })
})
