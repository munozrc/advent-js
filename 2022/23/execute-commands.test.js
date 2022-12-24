import { describe, expect, it } from 'vitest'
import executeCommands from './execute-commands'

describe('Challenge day 23', () => {
  it('should be a funcion', () => {
    expect(executeCommands).toBeTypeOf('function')
  })

  it('should return an array for the result for each record', () => {
    expect(executeCommands([])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return an array with the number indicated by the move instruction', () => {
    expect(executeCommands(['MOV 5,V00'])).toEqual([5, 0, 0, 0, 0, 0, 0, 0])
    expect(executeCommands(['MOV 10,V01'])).toEqual([0, 10, 0, 0, 0, 0, 0, 0])
    expect(executeCommands(['MOV 10,V01', 'MOV 20,V00'])).toEqual([20, 10, 0, 0, 0, 0, 0, 0])
  })

  it('should decrease the value of Vxx by 1.', () => {
    expect(executeCommands(['MOV 255,V00', 'DEC V00'])).toEqual([254, 0, 0, 0, 0, 0, 0, 0])
    expect(executeCommands(['DEC V00'])).toEqual([255, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should increase the value of Lxx by 1.', () => {
    expect(executeCommands(['MOV 254,V00', 'INC V00'])).toEqual([255, 0, 0, 0, 0, 0, 0, 0])
    expect(executeCommands(['MOV 255,V00', 'INC V00'])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should calculate (Vxx + Ryy) and store the result in Vxx.', () => {
    expect(executeCommands(['MOV 5,V00', 'MOV 10,V01', 'ADD V00,V01'])).toEqual([15, 10, 0, 0, 0, 0, 0, 0])
  })

  it('should return an array where the instruction jumps to instruction number i if V00 is different from 0', () => {
    expect(executeCommands([
      'MOV 10,V00', // V00 es 10
      'DEC V00', // decrementa V00 en 1  <---┐
      'INC V01', // incrementa V01 en 1      |
      'JMP 1', // bucle hasta que V00 sea 0 ----┘
      'INC V06' // incrementa V06 en 1
    ])).toEqual([0, 10, 0, 0, 0, 0, 1, 0])
  })
})
