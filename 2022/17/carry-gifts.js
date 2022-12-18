/**
 *
 * @param {Array<string>} gifts
 * @param {number} maxWeight
 * @returns Array<string>
 */
export default function carryGifts (gifts, maxWeight) {
  const stack = []

  gifts
    .filter(gift => gift.length <= maxWeight)
    .forEach((gift) => {
      (
        stack.length &&
        stack.at(-1).replace(/ /g, '').length + gift.length <= maxWeight
      )
        ? stack[stack.length - 1] += ` ${gift}`
        : stack.push(gift)
    })

  return stack
}
