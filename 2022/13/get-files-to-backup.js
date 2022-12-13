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
        .sort((a, b) => a[0] - b[0])
        .map((file) => file[0])
    )
  )
}
