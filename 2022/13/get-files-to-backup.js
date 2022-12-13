/**
 *
 * @param {number} lastBackup
 * @param {Array<Array<number>>} changes
 * @returns Array<number>
 */
export default function getFilesToBackup (lastBackup, changes) {
  return Array.from(
    new Set(
      changes
        .filter((file) => file[1] > lastBackup)
        .map((file) => file[0])
        .sort((a, b) => a - b)
    )
  )
}
