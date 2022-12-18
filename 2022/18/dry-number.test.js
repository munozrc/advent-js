import { describe, expect, it } from 'vitest'
import dryNumber from './dry-number'

describe('Challenge day 17', () => {
  it('should be a function', () => {
    expect(dryNumber).toBeTypeOf('function')
  })

  // it('should return an array from 1 to 10', () => {
  //   expect(dryNumber(1, 10)).toEqual([
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  //   ])
  // })

  it('It should return the numbers that do not contain the number 1', () => {
    expect(dryNumber(1, 10)).toEqual([
      1, 10
    ])
    expect(dryNumber(1, 15)).toEqual([
      1, 10, 11, 12, 13, 14, 15
    ])
  })
})
