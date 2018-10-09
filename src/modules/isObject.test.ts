import { isObject } from './isObject'

it('checks if is object', () => {
  expect(isObject({})).toBe(true)
  expect(isObject([])).toBe(false)
  expect(isObject('')).toBe(false)
})
