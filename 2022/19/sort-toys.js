/**
 *
 * @param {Array<string>} toys
 * @param {Array<number>} positions
 * @returns Array<string>
 */
export default function sortToys (toys, positions) {
  return toys
    .sort((a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)])
}
