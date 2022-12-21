/**
 *
 * @param {Array<{type: string, weightCapacity: number}>} reindeerTypes
 * @param {Array<{country: string, weight: number}>} gifts
 * @returns {Array<{country: string, reindeers: Array<{type: string, num: number}>}>}
 */
export default function howManyReindeers (reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)
  return gifts.map(({ country, weight }) => {
    const allReindeers = reindeerTypes
      .filter(({ weightCapacity }) => weightCapacity < weight)
    const sumWeightCapacity = allReindeers
      .reduce((acc, rndr) => acc + rndr.weightCapacity, 0)

    const reindeers = allReindeers.reduce((acc, reindeer) => {
      const { type, weightCapacity } = reindeer
      const numberOfTimes = Math.floor(acc.weight / acc.sumWeightCapacity)

      acc.weight -= (weightCapacity * numberOfTimes)
      acc.sumWeightCapacity -= weightCapacity
      acc.array.push({ type, num: numberOfTimes })

      return acc
    }, {
      weight,
      sumWeightCapacity,
      array: []
    })

    return { country, reindeers: reindeers.array }
  })
}
