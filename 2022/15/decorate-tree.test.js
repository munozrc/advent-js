import { describe, expect, it } from 'vitest'
import decorateTree from './decorate-tree'

describe('Challenge day 15', () => {
  it('should be a function', () => {
    expect(decorateTree).toBeTypeOf('function')
  })

  it('should return an array of strings', () => {
    expect(decorateTree('').every(v => typeof v === 'string')).toBe(true)
  })

  it('should return an array with the constructed tree', () => {
    expect(decorateTree('B B')).toEqual(['B', 'B B'])
  })

  it('should return an array with the constructed tree', () => {
    expect(decorateTree('B P R P')).toEqual([
      'R',
      'P B',
      'R B B',
      'B P R P'
    ])
  })
})
