/**
 *
 * @param {string} letter
 * @returns string
 */
export default function fixLetter (letter) {
  return letter
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*\?{1,}/g, '?')
    .replace(/\s*,\s*/g, ', ')
    .replace(/\s*\.\s*\b/g, '. ')
    .replace(/^\w|(\.|\?|!)\s*[a-z]/g, (match, _) => match.toLocaleUpperCase())
    .replace(/(\w)$/, (match, _) => match + '.')
    .replace(/santa|claus/g,
      (match, _) => match.charAt(0).toUpperCase() + match.slice(1)
    )
}
