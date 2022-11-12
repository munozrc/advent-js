import { describe, expect, it } from 'vitest'
import isValid from '../src/isValid'

describe('isValid', () => {
  // it('should be a function', () => {
  //   expect(isValid).toBeTypeOf('function')
  // })

  // it('should throw if parameter is missing', () => {
  //   expect(() => isValid()).throw()
  // })

  it('should throw if parameter "letter" is not a string', () => {
    expect(() => isValid(1)).throw()
  })

  it('should return a boolean', () => {
    expect(isValid('')).toBeTypeOf('boolean')
  })

  it('should return false if there are parentheses that don\'t close correctly', () => {
    expect(isValid('bici coche (balón bici coche')).toBe(false)
    expect(isValid(')bici( casa play')).toBe(false)
  })

  it('should return false if there are open braces or brackets', () => {
    expect(isValid('peluche (bici [coche) bici coche balón')).toBe(false)
    expect(isValid('(peluche {) bici')).toBe(false)
  })

  it('should return false if there are empty parentheses', () => {
    expect(isValid('() bici')).toBe(false)
  })
})
