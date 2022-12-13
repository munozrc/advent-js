/**
 *
 * @param {number} distance
 * @param {Array<{name: string, consumption: number}>} sleighs
 * @returns
 */
export default function selectSleigh (distance, sleighs) {
  const best = sleighs.filter(({ consumption }) => consumption * distance <= 20)
  best.unshift({ name: null })
  return best[best.length - 1].name
}
