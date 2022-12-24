/**
 *
 * @param {Array<string>} commands
 * @returns {Array<number>}
 */
export default function executeCommands (commands) {
  const stack = [0, 0, 0, 0, 0, 0, 0, 0]
  let currentCommand = 0

  const instructions = {
    MOV: ([raw, register]) => {
      const value = isNaN(+raw) ? stack[+raw.replace('V', '')] : +raw
      const position = +register.replace('V', '')
      stack[position] = value
      currentCommand++
    },
    DEC: ([register]) => {
      const position = +register.replace('V', '')
      stack[position] = (((stack[position] - 1) % 256) + 256) % 256
      currentCommand++
    },
    INC: ([register]) => {
      const position = +register.replace('V', '')
      stack[position] = (stack[position] + 1) % 256
      currentCommand++
    },
    ADD: ([firstRegister, secondRegister]) => {
      const firstNumberPos = +firstRegister.replace('V', '')
      const secondRegisterPos = +secondRegister.replace('V', '')
      stack[firstNumberPos] += stack[secondRegisterPos]
      currentCommand++
    },
    JMP: ([command]) => {
      currentCommand = stack[0] !== 0 ? +command : currentCommand + 1
    }
  }

  while (currentCommand < commands.length) {
    const [operator, args] = commands[currentCommand].split(' ')
    instructions[operator](args.split(','))
  }

  return stack
}
