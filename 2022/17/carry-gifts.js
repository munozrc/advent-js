/**
 *
 * @param {Array<string>} gifts
 * @param {number} maxWeight
 * @returns Array<string>
 */
export default function carryGifts (gifts, maxWeight) {
  const addGift = (acc, gift) => {
    const prev = acc.at(-1)
    const length = gift.length

    acc.length && prev.replace(/ /g, '').length + length <= maxWeight
      ? acc[acc.length - 1] += ` ${gift}`
      : acc.push(gift)

    return acc
  }

  return gifts
    .filter(gift => gift.length <= maxWeight)
    .reduce(addGift, [])
}
