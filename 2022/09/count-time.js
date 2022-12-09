/**
 *
 * @param {Array<number>} leds
 * @returns number
 */
export default function countTime (leds) {
  const array = leds.join('').split('1')
  array[0] += array.pop()
  return Math.max(...array.map(group => group.length)) * 7
}
