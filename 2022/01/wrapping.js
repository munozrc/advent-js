/**
 *
 * @param {Array<string>} gifts
 * @returns Array<string>
 */
export default function wrapping (gifts) {
  if (typeof gifts === 'undefined') throw new Error('gifts is required')
  return gifts.map((gift) => {
    const sideWrapp = `*${gift}*`
    const restOfWrapp = '*'.repeat(gift.length + 2)
    return [restOfWrapp, sideWrapp, restOfWrapp].join('\n')
  })
}
