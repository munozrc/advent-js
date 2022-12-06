/**
 *
 * @param {number} size
 * @returns string
 */
export default function createCube (size) {
  const upLayer = []
  const downLayer = []

  for (let pos = 1; pos <= size; pos++) {
    upLayer.push(' '.repeat(size - pos) + '/\\'.repeat(pos) + '_\\'.repeat(size))
    downLayer.push(' '.repeat(pos - 1) + '\\/'.repeat((size - pos) + 1) + '_/'.repeat(size))
  }

  return [...upLayer, ...downLayer].join('\n')
}
