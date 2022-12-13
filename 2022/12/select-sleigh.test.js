import { describe, expect, it } from 'vitest'
import selectSleigh from './select-sleigh'

describe('Challenge 11', () => {
  it('should be a function', () => {
    expect(selectSleigh).toBeTypeOf('function')
  })

  it('should return a string', () => {
    expect(selectSleigh(0, [])).toBeTypeOf('object')
  })

  it('should return the name of the best sled', () => {
    expect(selectSleigh(30, [
      { name: 'Dasher', consumption: 0.3 },
      { name: 'Dancer', consumption: 0.5 },
      { name: 'Rudolph', consumption: 0.7 },
      { name: 'Midu', consumption: 1 }
    ])).toBe('Dancer')

    expect(selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])).toBe('TMChein')

    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ])).toBe('Pedrosillano')

    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBe('SamarJaffal')

    expect(selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBe(null)
  })
})
