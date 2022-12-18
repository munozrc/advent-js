/**
 *
 * @param {number} dry
 * @param {number} numbers
 * @returns Array<number>
 */
export default function dryNumber (dry, numbers) {
  return Array(numbers)
    .fill()
    .map((_, position) => position + 1)
    .filter(number => number.toString(10).includes(dry))
}
