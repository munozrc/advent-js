/**
 *
 * @param {Array<number>} giftsCities
 * @param {number} maxGifts
 * @param {number} maxCities
 * @returns number
 */
export default function getMaxGifts (giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .reduce((x, y) => x.concat(x.map(x => [y].concat(x))), [[]])
      .filter(x => x.length <= maxCities)
      .map(x => x.reduce((r, s) => r + s, 0))
      .filter(x => x <= maxGifts)
  )
}
