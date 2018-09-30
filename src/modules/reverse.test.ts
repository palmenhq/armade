import { reverse } from './reverse'

it('reverses arrays without reversing input array', () => {
  const array = [1, 2, 3]
  expect(reverse(array)).toEqual([3, 2, 1])
  expect(array).toEqual([1, 2, 3])
})
