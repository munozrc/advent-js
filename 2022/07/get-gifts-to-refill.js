/**
 *
 * @param {Array<string>} a1
 * @param {Array<string>} a2
 * @param {Array<string>} a3
 * @returns Array<string>
 */
export default function getGiftsToRefill (a1, a2, a3) {
  return Array.from(new Set(a1.concat(a2, a3)))
    .filter((gift) => (
      a1.includes(gift) +
      a2.includes(gift) +
      a3.includes(gift) <= 1
    ))
}
