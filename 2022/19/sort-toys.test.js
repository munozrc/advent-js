import { describe, expect, it } from 'vitest'
import sortToys from './sort-toys'

describe('Challenge day 19', () => {
  it('should be a function', () => {
    expect(sortToys).toBeTypeOf('function')
  })

  it('should return an array where each toy is in the position that corresponds to it', () => {
    expect(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]))
      .toEqual(['puzzle', 'car', 'ball', 'doll'])
  })
})
