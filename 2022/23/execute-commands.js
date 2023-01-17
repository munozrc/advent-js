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

  const instructions = {
    MOV: ([raw, register]) => {
      const value = raw.startsWith('V') ? stack[raw] : +raw
      stack[register] = value
      // let mov = x.split(",")[0].split(" ")[1]
      // cpu[+x.at(-1)] = (cpu[+mov.at(-1)] * +mov.startsWith("V")) + ~~mov
      // stack[register] = (stack[raw]) + ~~raw
      console.log({ r: (stack[raw]) })
    },
    DEC: ([register]) => {
      stack[register] = (((stack[register] - 1) % 256) + 256) % 256
    },
    INC: ([register]) => {
      stack[register] = (stack[register] + 1) % 256
    },
    ADD: ([first, second]) => {
      stack[first] = (stack[first] + stack[second]) % 256
    },
    JMP: ([position], command) => {
      const beforeJump = commands
        .slice(+position, (commands.indexOf(command) + 1) * !!stack.V00)
      commands = commands.concat(beforeJump)
    }
  }

  for (let pointer = 0; pointer < commands.length; pointer++) {
    const [operator, args] = commands[pointer].split(' ')
    instructions[operator](args.split(','), commands[pointer])
  }

  return Object.values(stack)
}
