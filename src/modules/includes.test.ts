import { includes } from './includes'

it('checks for includes', () => {
  const array = [1, 2, 3]
  expect(includes(1)(array)).toBe(true)
  expect(includes(1337)(array)).toBe(false)
})
