/**
 *
 * @param {Array<string>} systemNames
 * @param {Array<number>} stepNumbers
 * @returns {boolean}
 */
export default function checkStepNumbers (systemNames, stepNumbers) {
  return systemNames.every((current, index, arr) => {
    const findSysPos = arr.slice(index + 1).indexOf(current)
    return stepNumbers[index] <= stepNumbers[index + 1 + findSysPos]
  })
}
