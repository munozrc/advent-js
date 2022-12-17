/**
 *
 * @param {Array<Array<number>>} path
 * @returns number
 */
export default function getOptimalPath (path) {
  return path.reduceRight((prevFloor, floor) => {
    return floor.map((num, pos) => {
      return num + Math.min(prevFloor[pos], prevFloor[pos + 1])
    })
  })[0]
}
