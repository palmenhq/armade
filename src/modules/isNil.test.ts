import { isNil } from './isNil'

it('checks if things are null', () => {
  expect(isNil(null)).toBe(true)
  expect(isNil('')).toBe(false)
  expect(isNil(0)).toBe(false)
})

it('checks if things are undefined', () => {
  expect(isNil(undefined)).toBe(true)
  expect(isNil('')).toBe(false)
  expect(isNil(0)).toBe(false)
})
