import { describe, expect, it } from 'vitest'
import { checkPart } from './check-part'

describe('Challenge 07', () => {
  it('should be a function', () => {
    expect(checkPart).toBeTypeOf('function')
  })

  it('should return an array of boolean', () => {
    expect(checkPart('')).toBeTypeOf('boolean')
  })

  it('should return true if it is a palindrome', () => {
    expect(checkPart('uwu')).toBe(true)
  })

  it('should return false if it is not a palindrome', () => {
    expect(checkPart('midu')).toBe(false)
  })

  it('should return true if not a palindrome but removing a letter', () => {
    expect(checkPart('miidim')).toBe(true)
  })
})
