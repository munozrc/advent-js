/**
 *
 * @param {string} base
 * @returns Array<string>
 */
export default function decorateTree (base) {
  const ornaments = {
    PP: 'P',
    BB: 'B',
    RR: 'R',
    BP: 'R',
    PB: 'R',
    RP: 'B',
    PR: 'B',
    BR: 'P',
    RB: 'P'
  }

  const arr = base
    .split(' ')
    .slice(1)
    .reduce((prev, _, pos) => {
      const slideTree = prev[pos].split(' ')
      const tree = slideTree.slice(1).map((x, i, a) => {
        const key = slideTree[i] + x
        const result = ornaments[key]
        return result
      })
      prev.push(tree.join(' '))
      return prev
    }, [base])

  return arr.reverse()
}
