/**
 *
 * @param {Array<{name: string, quantity: number}>} gifts
 * @returns string
 */
export default function printTable (gifts) {
  const [maxGift, maxQuantity] = [
    Math.max(...gifts.map(({ name }) => name.length), 4),
    Math.max(...gifts.map(({ quantity }) => `${quantity}`.length), 8)
  ]

  const titleGift = 'Gift'.padEnd(maxGift, ' ')
  const titleQuantity = 'Quantity'.padEnd(maxQuantity, ' ')

  const header = (
    `${'+'.repeat(maxGift + maxQuantity + 7)}\n` +
    `| ${titleGift} | ${titleQuantity} |\n` +
    `| ${'-'.repeat(maxGift)} | ${'-'.repeat(maxQuantity)} |`
  )

  const body = gifts.map(({ name, quantity }) => {
    const giftText = name.padEnd(maxGift, ' ')
    const quantityText = `${quantity}`.padEnd(maxQuantity, ' ')
    return `| ${giftText} | ${quantityText} |`
  })

  const footer = '*'.repeat(maxGift + maxQuantity + 7)

  return [header, ...body, footer].join('\n')
}
