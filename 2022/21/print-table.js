/**
 *
 * @param {Array<{name: string, quantity: number}>} gifts
 * @returns string
 */
export default function printTable (gifts) {
  const maxGiftLength = Math
    .max(...gifts.map(gift => gift.name.length), 4)
  const maxQuantityLenght = Math
    .max(...gifts.map(gift => gift.quantity.toString().length), 8)

  const titleGift = 'Gift'.padEnd(maxGiftLength, ' ')
  const titleQuantity = 'Quantity'.padEnd(maxQuantityLenght, ' ')

  const header = [
    '+'.repeat(maxGiftLength + maxQuantityLenght + 7),
    `| ${titleGift} | ${titleQuantity} |`,
    `| ${'-'.repeat(titleGift.length)} | ${'-'.repeat(titleQuantity.length)} |`
  ]

  const body = gifts.map(({ name, quantity }) => {
    const giftText = name.padEnd(maxGiftLength, ' ')
    const quantityText = quantity.toString().padEnd(maxQuantityLenght, ' ')
    return `| ${giftText} | ${quantityText} |`
  })

  const footer = '*'.repeat(maxGiftLength + maxQuantityLenght + 7)

  return [...header, ...body, footer].join('\n')
}
