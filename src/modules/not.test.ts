import { not } from './not'

it('inverses booleanish values', () => {
  expect(not(true)).toBe(false)
})
