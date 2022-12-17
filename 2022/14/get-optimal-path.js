/**
 *
 * @param {Array<Array<number>>} path
 * @returns number
 */
export default function getOptimalPath (path) {
  const [root, ...restOfPaths] = path
  return Math.min(...restOfPaths.reduce((acc, floor) => {
    return floor.map((value, pos, array) => {
      if (pos === 0) return value + acc[pos]
      if (pos === array.length - 1) return value + acc.at(-1)
      return value + Math.min(acc[pos - 1], acc[pos])
    })
  }, [root[0]]))
}
