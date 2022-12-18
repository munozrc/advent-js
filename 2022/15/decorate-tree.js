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

  const initArrayOrnaments = base.split(' ')

  const createTreeFloor = (allFloors) => {
    const prev = allFloors.at(-1)
    const newTreeFloor = prev
      .slice(1)
      .map((letter, pos) => ornaments[prev[pos] + letter])

    return [...allFloors, newTreeFloor]
  }

  return initArrayOrnaments
    .slice(1)
    .reduce(createTreeFloor, [initArrayOrnaments])
    .map(floor => floor.join(' '))
    .reverse()
}
