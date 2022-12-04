import { describe, expect, it } from 'vitest'
import wrapping from './wrapping'

describe('Challenge 01', () => {
  it('should be a function', () => {
    expect(wrapping).toBeTypeOf('function')
  })

  it('should throw if parameter is missing', () => {
    expect(() => wrapping()).toThrow()
  })

  it('should return a array of string', () => {
    expect(Array.isArray(wrapping([]))).toBe(true)
  })

  it('should return * array', () => {
    expect(wrapping(['cat'])[0] === '*****\n*cat*\n*****').toBe(true)
    expect(wrapping(['cat'])[0] === '**\ncat*\n***').toBe(false)
    expect(wrapping(['game'])[0] === '******\n*game*\n******').toBe(true)
    expect(wrapping(['socks'])[0] === '*******\n*socks*\n*******').toBe(true)
  })
})
