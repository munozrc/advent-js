import { describe, expect, it } from 'vitest'
import howManyReindeers from './how-many-reindeers'

describe('Challenge day 20', () => {
  it('should be a function', () => {
    expect(howManyReindeers).toBeTypeOf('function')
  })

  it('should return an array of cities', () => {
    const gifts = [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ]
    expect(howManyReindeers([], gifts)).toEqual(
      [{
        country: 'Spain',
        reindeers: []
      }, {
        country: 'France',
        reindeers: []
      }, {
        country: 'Italy',
        reindeers: []
      }]
    )
  })

  it('should return an array where this city contains the necessary reindeer', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ]

    const gifts = [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ]

    expect(howManyReindeers(reindeerTypes, gifts)).toEqual(
      [{
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }, {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      }, {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }]
    )
  })
})
