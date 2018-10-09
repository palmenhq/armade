import { isArray } from './isArray'

it('checks if thing is array', () => {
  expect(isArray('foo')).toBe(false)
  expect(isArray({ foo: 'bar', baz: 'qux' })).toBe(false)
  expect(isArray([])).toBe(true)
})
