/**
 *
 * @param {string} part
 * @param {string} total
 * @returns string
 */
export default function getCompleted (part, total) {
  const [hours, minutes, seconds] = part.split(':')
  const [totalHours, totalMinutes, totalSeconds] = total.split(':')

  const partInSeconds = hours * 3600 + minutes * 60 + seconds * 1
  const totalInSeconds = totalHours * 3600 + totalMinutes * 60 + totalSeconds * 1

  let mcd = partInSeconds
  let tmp = totalInSeconds

  while (tmp) {
    const t = tmp
    tmp = mcd % tmp
    mcd = t
  }

  return `${partInSeconds / mcd}/${totalInSeconds / mcd}`
}
