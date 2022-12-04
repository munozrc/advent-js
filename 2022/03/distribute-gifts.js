/**
 *
 * @param {Array<string>} packOfGifts
 * @param {Array<string>} reindeers
 * @returns number
 */
export default function distributeGifts (packOfGifts, reindeers) {
  if (!Array.isArray(packOfGifts) || !Array.isArray(reindeers)) throw new Error()

  let weightOfGifts = 0
  let maxWeightPerReindeers = 0

  packOfGifts.forEach(gift => {
    weightOfGifts += gift.length
  })

  reindeers.forEach(reindeer => {
    maxWeightPerReindeers += reindeer.length * 2
  })

  return Math.floor(maxWeightPerReindeers / weightOfGifts)
}
