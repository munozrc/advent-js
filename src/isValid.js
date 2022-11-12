/**
 *
 * @param {string} letter
 */
export default function isValid (letter) {
  if (typeof letter !== 'string') throw new Error('letter is not a string')

  if (letter.includes('[') || letter.includes(']')) return false
  if (letter.includes('{') || letter.includes('}')) return false
  if (letter.includes('()')) return false

  const stack = []

  letter.split('').forEach((char, position) => {
    if (char === ')') stack.pop()
    if (char === '(') stack.push(position)
  })

  return stack.length === 0
}
