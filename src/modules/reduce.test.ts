import { reduce } from './reduce'

it('reduces numbers correctly', () => {
  const input = [1, 2, 3]
  expect(reduce((acc, curr) => acc + curr, 0)(input)).toBe(6)
})

it('reduces object correctly', () => {
  type InputTuples = Array<[string, string]>
  const input: InputTuples = [['a', 'foo'], ['b', 'bar'], ['c', 'baz']]
  expect(
    reduce<{ [key: string]: string }, InputTuples[0]>(
      (acc, curr) => ({ [curr[0]]: curr[1], ...acc }),
      {},
    )(input),
  ).toEqual({
    a: 'foo',
    b: 'bar',
    c: 'baz',
  })
})
