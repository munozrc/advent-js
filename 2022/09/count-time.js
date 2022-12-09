/**
 *
 * @param {Array<number>} leds
 * @returns number
 */
export default function countTime (leds) {
  let counter = 0
  let flag = false

  while (!flag) {
    if (leds.every(led => led === 1)) {
      flag = true
      break
    }

    leds = leds.map((led, pos, array) => {
      if (led === 1) return led
      const prevLed = array[pos === 0 ? array.length - 1 : pos - 1]
      return prevLed === 1 ? 1 : 0
    })
    counter++
  }

  return counter * 7
}
