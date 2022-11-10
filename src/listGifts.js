export default function listGifts (letter) {
  if (typeof letter !== 'string') throw new Error('letter is not a string')

  const normalizeLetter = letter.split(' ')
  let gifts = {}

  normalizeLetter.forEach(gift => {
    if (gift.trim() === '') return
    if (gift.charAt(0) === '_') return
    const counterGift = gifts[gift] === undefined ? 1 : ++gifts[gift]
    gifts = { ...gifts, [gift]: counterGift }
  })

  return gifts
}
