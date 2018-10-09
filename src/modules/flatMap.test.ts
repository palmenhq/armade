import { flatMap } from './flatMap'

it('flatMaps correctly', () => {
  expect(flatMap([['a', 'b'], ['c', 'd']])).toEqual(['a', 'b', 'c', 'd'])
})
