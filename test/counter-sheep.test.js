import { describe, expect, it } from 'vitest'
import contarOvejas from '../src/contarOvejas'

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

describe('first challenge "Contar ovejas"', () => {
  it('shoul be a function', () => {
    expect(typeof contarOvejas).toBe('function')
  })

  it('should throw if not list/array is provided as parameter', () => {
    expect(() => contarOvejas()).toThrow('paramater provided must be a list/array')
    expect(() => contarOvejas({})).toThrow('paramater provided must be a list/array')
    expect(() => contarOvejas(3)).toThrow('paramater provided must be a list/array')
  })

  it('should return an array', () => {
    expect(Array.isArray(contarOvejas([]))).toBe(true)
    expect(Array.isArray(contarOvejas(ovejas))).toBe(true)
  })

  it('should return an array of elements where the name contains an n/N/a/A and the color is equal to "rojo"', () => {
    expect(contarOvejas(ovejas).length).toBe(2)
  })
})
