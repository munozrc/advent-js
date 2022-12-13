/**
 *
 * @param {number} distance
 * @param {Array<{name: string, consumption: number}>} sleighs
 * @returns
 */
export default function selectSleigh (distance, sleighs) {
  const bestSled = sleighs.reverse()
    .find(({ consumption }) => distance * consumption <= 20)
  return bestSled ? bestSled.name : null
}
