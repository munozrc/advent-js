import { describe, expect, it } from 'vitest'
import carryGifts from './carry-gifts'

describe('Challenge day 17', () => {
  it('should be a function', () => {
    expect(carryGifts).toBeTypeOf('function')
  })

  it('should return an array of gifts per bag in each position', () => {
    expect(
      carryGifts(['toy', 'toy', 'toy', 'toy'], 2)
    ).toEqual([])

    expect(
      carryGifts(['game', 'bike', 'book', 'toy'], 10)
    ).toEqual(['game bike', 'book toy'])

    expect(
      carryGifts(['game', 'bike', 'book', 'toy'], 7)
    ).toEqual(['game', 'bike', 'book toy'])

    expect(
      carryGifts(['game', 'bike', 'book', 'toy'], 4)
    ).toEqual(['game', 'bike', 'book', 'toy'])
  })
})
