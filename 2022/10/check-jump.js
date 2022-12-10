/**
 *
 * @param {Array<number>} heights
 * @returns boolean
 */
export default function checkJump (heights) {
  const positionOfVertex = heights.indexOf(Math.max(...heights))

  const firstBranch = heights.slice(0, positionOfVertex)
  const secondBranch = heights.slice(positionOfVertex + 1)

  const vfb = firstBranch.every((h, i, arr) => i === 0 || h >= arr[i - 1])
  const vsb = secondBranch.every((h, i, arr) => i === 0 || h <= arr[i - 1])

  return firstBranch.length !== 0 && secondBranch.length !== 0 && vfb && vsb
}
