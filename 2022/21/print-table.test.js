import { describe, expect, it } from 'vitest'
import printTable from './print-table'

describe('Challenge day 21', () => {
  it('should be a function', () => {
    expect(printTable).toBeTypeOf('function')
  })

  // it('should return the top edge of the gift table', () => {
  //   expect(printTable([
  //     { name: 'Game', quantity: 2 },
  //     { name: 'Bike', quantity: 1 },
  //     { name: 'Book', quantity: 3 }
  //   ])).toBe('+++++++++++++++++++')
  // })

  // it('should return the table header', () => {
  //   expect(printTable([
  //     { name: 'Game', quantity: 2 },
  //     { name: 'Bike', quantity: 1 },
  //     { name: 'Book', quantity: 3 }
  //   ])).toBe(
  //     '+++++++++++++++++++\n' +
  //     '| Gift | Quantity |\n' +
  //     '| ---- | -------- |'
  //   )

  //   expect(printTable([
  //     { name: 'PlayStation 5', quantity: 9234782374892 },
  //     { name: 'Book Learn Web Dev', quantity: 23531 }
  //   ])).toBe(
  //     '++++++++++++++++++++++++++++++++++++++\n' +
  //     '| Gift               | Quantity      |\n' +
  //     '| ------------------ | ------------- |'
  //   )
  // })

  // it('should return the body of the table', () => {
  //   expect(printTable([
  //     { name: 'Game', quantity: 2 },
  //     { name: 'Bike', quantity: 1 },
  //     { name: 'Book', quantity: 3 }
  //   ])).toBe(
  //     '| Game | 2        |\n' +
  //     '| Bike | 1        |\n' +
  //     '| Book | 3        |'
  //   )

  //   expect(printTable([
  //     { name: 'PlayStation 5', quantity: 9234782374892 },
  //     { name: 'Book Learn Web Dev', quantity: 23531 }
  //   ])).toBe(
  //     '| PlayStation 5      | 9234782374892 |\n' +
  //     '| Book Learn Web Dev | 23531         |'
  //   )
  // })

  it('should return a string with the table drawn', () => {
    expect(printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])).toBe(
      '+++++++++++++++++++\n' +
      '| Gift | Quantity |\n' +
      '| ---- | -------- |\n' +
      '| Game | 2        |\n' +
      '| Bike | 1        |\n' +
      '| Book | 3        |\n' +
      '*******************'
    )
  })
})
