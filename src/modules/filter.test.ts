import { filter } from './filter'

test('filters correctly', () => {
  expect(filter((input: number) => input % 2 === 0)([1, 2, 3])).toEqual([2])
})
