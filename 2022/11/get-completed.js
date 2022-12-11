/**
 *
 * @param {string} part
 * @param {string} total
 * @returns string
 */
export default function getCompleted (part, total) {
  const partTime = part.split(':')
  const totalTime = total.split(':')

  const partSeconds = partTime[0] * 3600 + partTime[1] * 60 + (+partTime[2])
  const totalSeconds = totalTime[0] * 3600 + totalTime[1] * 60 + (+totalTime[2])

  let mcd = partSeconds
  let temp = totalSeconds

  while (temp) {
    const aux = temp
    temp = mcd % temp
    mcd = aux
  }

  return `${partSeconds / mcd}/${totalSeconds / mcd}`
}
