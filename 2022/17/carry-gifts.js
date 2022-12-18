/**
 *
 * @param {Array<string>} gifts
 * @param {number} maxWeight
 * @returns Array<string>
 */
export default function carryGifts (gifts, maxWeight) {
  const stack = []

  gifts.forEach((gift) => {
    const length = gift.length

    if (!stack.length && length <= maxWeight) {
      stack.push(gift)
      return
    }

    if (stack.length && stack.at(-1).replaceAll(' ', '').length + length > maxWeight) {
      stack.push(gift)
      return
    }

    if (stack.length && length <= maxWeight) {
      const lastGift = stack.pop()
      stack.push(lastGift + ' ' + gift)
    }
  })

  return stack
}
