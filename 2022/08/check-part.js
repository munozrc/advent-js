/**
 *
 * @param {string} part
 * @returns boolean
 */
export function checkPart (part) {
  const word = part.split('').reverse()
  if (word.join('') === part) return true

  return word.some(letter => {
    const newPart = part.replace(letter, '')
    return newPart.split('').reverse().join('') === newPart
  })
}
