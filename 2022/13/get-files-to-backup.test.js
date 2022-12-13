import { describe, it, expect } from 'vitest'
import getFilesToBackup from './get-files-to-backup'

describe('Challenge day 13', () => {
  it('should be a function', () => {
    expect(getFilesToBackup).toBeTypeOf('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(getFilesToBackup(0, []))).toBe(true)
  })

  it('should return an array with the ids of the files that need to be backed up', () => {
    expect(getFilesToBackup(1546300800, [
      [2, 1546300800],
      [3, 1546301100],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000]
    ]).join(',') === '1,3').toBe(true)

    expect(getFilesToBackup(1546300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ]).join(',') === '1,2,3').toBe(true)

    expect(getFilesToBackup(1556300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ]).join(',') === '').toBe(true)
  })
})
