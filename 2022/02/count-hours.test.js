import { describe, expect, it } from 'vitest'
import countHours from './count-hours'

describe('Challenge 02', () => {
  it('should be a function', () => {
    expect(countHours).toBeTypeOf('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => countHours()).toThrow()
    expect(() => countHours(2022, true)).toThrow()
    expect(() => countHours('', [])).toThrow()
  })

  it('should return a number', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBeTypeOf('number')
  })

  it('should return number holidays', () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4)
  })
})
