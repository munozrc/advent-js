import { describe, expect, it } from 'vitest'
import checkStepNumbers from './check-step-numbers'

describe('Challenge day 22', () => {
  it('should be a function', () => {
    expect(checkStepNumbers).toBeTypeOf('function')
  })

  it('should return false if the stepNumbers of each system is in decreasing order', () => {
    expect(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10]))
      .toBe(false)
  })

  it('should return true if the stepNumbers of each system is in increasing order', () => {
    const systemNames = ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house']
    const stepNumbers = [1, 33, 10, 2, 44, 20]
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
  })
})
