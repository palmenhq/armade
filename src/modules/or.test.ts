import { or } from './or'

it('does return or', () => {
  expect(or(true, false)).toBe(true)
  expect(or(false, false)).toBe(false)
})
