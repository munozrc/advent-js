/**
 *
 * @param {Array<string>} commands
 * @returns {Array<number>}
 */
export default function executeCommands (commands) {
  const stack = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  }

  let pointer = 0

  const instructions = {
    MOV: ([raw, register]) => {
      const value = raw.startsWith('V') ? stack[raw] : +raw
      stack[register] = value
      pointer++
    },
    DEC: ([register]) => {
      stack[register] = (((stack[register] - 1) % 256) + 256) % 256
      pointer++
    },
    INC: ([register]) => {
      stack[register] = (stack[register] + 1) % 256
      pointer++
    },
    ADD: ([first, second]) => {
      stack[first] = (stack[first] + stack[second]) % 256
      pointer++
    },
    JMP: ([command]) => {
      pointer = stack.V00 > 0 ? +command : pointer + 1
    }
  }

  while (pointer < commands.length) {
    const [operator, args] = commands[pointer].split(' ')
    instructions[operator](args.split(','))
  }

  return Object.values(stack)
}
