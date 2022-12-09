import { describe, expect, it } from 'vitest'
import countTime from './count-time'

describe('Challenge 09', () => {
  it('should be a function', () => {
    expect(countTime).toBeTypeOf('function')
  })

  it('should return 0 if all leds are on', () => {
    expect(countTime([1, 1])).toBe(0)
  })

  it('It should return the number of cycles needed to turn on all the leds', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
    expect(countTime([0, 0, 0, 1])).toBe(21)
  })
})
