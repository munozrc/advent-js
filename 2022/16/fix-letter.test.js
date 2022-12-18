import { describe, expect, it } from 'vitest'
import fixLetter from './fix-letter'

describe('Challenge day 17', () => {
  it('should be a function', () => {
    expect(fixLetter).toBeTypeOf('function')
  })

  it('should return a string with no leading or trailing spaces', () => {
    expect(fixLetter(' Hi! ')).toBe('Hi!')
  })

  it('should remove multiple whitespaces and leave only one', () => {
    expect(fixLetter('Hello,  how are you?     ')).toBe('Hello, how are you?')
  })

  it('should return a string where questions must be ended with a question mark', () => {
    expect(fixLetter('How are you??????')).toBe('How are you?')
  })

  it('should return a string with no spaces before commas or periods', () => {
    expect(fixLetter('Hello  , how are you?')).toBe('Hello, how are you?')
  })

  it('should return a string where the first letter of each sentence must be capitalized', () => {
    expect(fixLetter('hello  , how are you?')).toBe('Hello, how are you?')
    expect(fixLetter('hi Santa Claus. i\'m.')).toBe('Hi Santa Claus. I\'m.')
    expect(fixLetter('hi! how are you?')).toBe('Hi! How are you?')
  })

  it('should return a string keeping a space after each comma or periods', () => {
    expect(fixLetter('Hello,How are you?'))
      .toBe('Hello, How are you?')

    expect(fixLetter('Hi Santa Claus.I\'m a boy from Barcelona.'))
      .toBe('Hi Santa Claus. I\'m a boy from Barcelona.')
  })

  it('should return a string where there is a period at the end of the sentence if it has no punctuation', () => {
    expect(fixLetter('Hello! I\'m boy')).toBe('Hello! I\'m boy.')
    expect(fixLetter('Hello! How are you?')).toBe('Hello! How are you?')
  })

  it('should return a string where the word "Santa Claus" is capitalized if it appears in the letter', () => {
    expect(fixLetter('Hi santa claus.')).toBe('Hi Santa Claus.')
  })

  it('shoudl return fix letter', () => {
    expect(fixLetter('  hi,santa claus. are you there ?   ')).toBe('Hi, Santa Claus. Are you there?')
  })
})
