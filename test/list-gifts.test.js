import { describe, expect, it } from 'vitest'
import listGifts from '../src/listGifts'

describe('listGifts', () => {
  // it('should be a function', () => {
  //   expect(listGifts).toBeTypeOf('function')
  // })

  // it('should throw if parameter is missing', () => {
  //   expect(() => listGifts()).toThrow()
  // })

  it('should throw if letter parameter is not string', () => {
    expect(() => listGifts(2)).toThrow()
    expect(() => listGifts(0)).toThrow()
  })

  it('should return a object', () => {
    expect(listGifts('')).toBeTypeOf('object')
  })

  it('should return an object that contains the name of each gift and the times it appears', () => {
    const outputLetter = listGifts('bici coche balón')
    const expectGifts = { bici: 1, coche: 1, balón: 1 }
    expect(JSON.stringify(outputLetter) === JSON.stringify(expectGifts)).toBe(true)
  })

  it('should not consider extra space when returning the object', () => {
    const outputLetter = listGifts('bici   coche balón')
    const expectGifts = { bici: 1, coche: 1, balón: 1 }
    expect(JSON.stringify(outputLetter) === JSON.stringify(expectGifts)).toBe(true)
  })

  it('should exclude all gifts that start with underscore', () => {
    const outputLetter = listGifts('bici coche balón _playstation bici coche peluche')
    const expectGifts = { bici: 2, coche: 2, balón: 1, peluche: 1 }
    expect(JSON.stringify(outputLetter) === JSON.stringify(expectGifts)).toBe(true)
  })
})
