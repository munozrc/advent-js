import { describe, expect, it } from 'vitest'
import createXmasTree from '../src/create-x-mas-tree'

describe('Create X mas tree', () => {
  // it('should be a function', () => {
  //   expect(createXmasTree).toBeTypeOf('function')
  // })

  // it('throw when if missing height param', () => {
  //   expect(() => createXmasTree()).throw()
  // })

  it('should throw if parameter "height" is not a number', () => {
    expect(() => createXmasTree('hi')).throw()
  })

  it('should return a string', () => {
    expect(createXmasTree(3)).toBeTypeOf('string')
  })

  it('must return a trunk that meets a height of 2', () => {
    expect(/__#__\n__#__/i.test(createXmasTree(3))).toBe(true)
    expect(/__#__\n__#__/i.test(createXmasTree(1))).toBe(false)
    expect(/____#____\n____#____/i.test(createXmasTree(5))).toBe(true)
  })

  it('should return a tree with a crown with its respective height', () => {
    expect(createXmasTree(3).includes('__*__\n_***_\n*****')).toBe(true)
    expect(createXmasTree(1).includes('__*__\n_***_\n*****')).toBe(false)
  })
})
