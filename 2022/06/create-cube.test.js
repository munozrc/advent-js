import { describe, expect, it } from 'vitest'
import createCube from './create-cube'

describe('Challenge 06 - Create Cube', () => {
  it('should be a function', () => {
    expect(createCube).toBeTypeOf('function')
  })

  it('should return cube made it with symbols', () => {
    expect(createCube(1)).toBe('/\\_\\\n\\/_/')
    expect(createCube(2)).toBe(' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/')
    expect(createCube(3)).toBe('  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/')
  })
})
