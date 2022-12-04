/**
 *
 * @param {Array<{l: number, w: number, h: number}>} boxes
 * @returns booleam
 */
export default function fitsInOneBox (boxes) {
  if (!Array.isArray(boxes)) throw new Error()
  return boxes
    .sort(sortLargetToSmallest)
    .every((box, position, array) => {
      if (position === 0) return true
      const prevBox = array[position - 1]
      return prevBox.h > box.h && prevBox.w > box.w
    })
}

const sortLargetToSmallest = (a, b) => b.l - a.l
