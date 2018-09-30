import { map } from './map'

it('maps over an array', () => {
  const input = [1, 2, 3]
  const fn = (x: number) => x * 2
  expect(map(fn)(input)).toEqual([2, 4, 6])
})

it('correctly maps different types', () => {
  const input = ['1', '2', '3']
  expect(map((n: string) => parseInt(n, 10))(input)).toEqual([1, 2, 3])
})
