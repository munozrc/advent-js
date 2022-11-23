/**
 *
 * @param {number} height
 * @returns string
 */
export default function createXmasTree (height) {
  if (typeof height !== 'number') throw new Error('Param height is required.')
  if (height < 0 || height > 100) throw new Error()

  const half = height - 1
  const width = height + half

  const trunkBlock = '_'.repeat(half) + '#' + '_'.repeat(half)
  const truck = [trunkBlock, trunkBlock].join('\n')

  const treeTop = []

  for (let floor = 0; floor < height; floor++) {
    const treeLeaves = '*'.repeat(floor * 2 + 1)
    const gap = '_'.repeat((width - treeLeaves.length) / 2)
    treeTop[floor] = gap + treeLeaves + gap
  }

  return [treeTop.join('\n'), truck].join('\n')
}
