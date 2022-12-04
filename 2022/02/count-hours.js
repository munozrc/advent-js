/**
 *
 * @param {number} year
 * @param {Array<string>} holidays
 * @returns number
 */
export default function countHours (year, holidays) {
  if (typeof year !== 'number' || !Array.isArray(holidays)) throw new Error('year and holiday is required')
  const extraHours = 2

  const validHolidays = holidays.filter(monthAndDay => {
    const date = new Date(`${year}/${monthAndDay}`)
    return ![0, 6].includes(date.getDay())
  })

  return validHolidays.length * extraHours
}
