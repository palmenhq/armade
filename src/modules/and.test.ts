import { and } from './and'

it('does return and', () => {
  expect(and(true, false)).toBe(false)
  expect(and(false, false)).toBe(false)
  expect(and(true, true)).toBe(true)
})
